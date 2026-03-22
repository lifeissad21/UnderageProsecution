#!/usr/bin/env node

/**
 * Reference Analyzer Script
 * 
 * Scans all components and chapters to:
 * - Extract all ReferenceSup number props
 * - Check ordering and duplicates
 * - Validate against the master reference list
 * - Identify potential issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectRoot = path.join(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');

// Map of components/chapters in site order
const fileOrder = [
  'components/HeroSection.astro',
  'components/chapters/ChapterIntro.astro',
  'components/chapters/ChapterHistory.astro',
  'components/graphs/JuvenileJusticeTrendsGraph.astro',
  'components/chapters/ChapterCurrentProsecution.astro',
  'components/graphs/BjsVictimizationComparisonChart.astro',
  'components/graphs/CurrentProsecutionFlowDiagram.astro',
  'components/chapters/ChapterIssues.astro',
  'components/chapters/ChapterConclusion.astro',
  'pages/index.astro',
];

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function extractReferences(content) {
  // Match both:
  // <ReferenceSup ... number={number} ... />
  // <ReferenceSup ... sourceRefNumber={number} ... />
  const refRegex = /ReferenceSup[^>]*(number|sourceRefNumber)=\{?(\d+)\}?[^>]*\/?>/g;
  const refs = [];
  let match;

  while ((match = refRegex.exec(content)) !== null) {
    refs.push(parseInt(match[2], 10));
  }

  return refs;
}

function extractMasterReferences(content) {
  // Extract references from HTML ordered list
  // References section has <ol> containing <li> elements
  // Count each <li> as reference number (skipping empty ones with &nbsp;)
  const refs = {};
  
  // Find the references section
  const refSectionMatch = content.match(/<section id="references"[^>]*>[\s\S]*?<ol[^>]*>([\s\S]*?)<\/ol>/);
  
  if (!refSectionMatch) {
    return refs;
  }

  const olContent = refSectionMatch[1];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
  let match;
  let refNumber = 1;

  while ((match = liRegex.exec(olContent)) !== null) {
    const liContent = match[1];
    
    // Skip empty/blank references (marked with &nbsp; or aria-label)
    if (liContent.includes('&nbsp;') || liContent.trim() === '') {
      refNumber++;
      continue;
    }

    // Extract the link text or content as title
    const linkMatch = liContent.match(/>([^<]+)<\/a>/);
    const title = linkMatch ? linkMatch[1].trim() : 'Reference ' + refNumber;
    
    refs[refNumber] = title;
    refNumber++;
  }

  return refs;
}

function analyzeReferences() {
  log('\n=== Reference Analysis ===\n', 'bright');

  const allRefs = [];
  const refsByFile = {};
  let issues = [];

  // Scan all files in order
  log('Scanning components and chapters:', 'cyan');
  for (const file of fileOrder) {
    const filePath = path.join(srcDir, file);
    
    if (!fs.existsSync(filePath)) {
      continue; // Skip if file doesn't exist
    }

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const refs = extractReferences(content);

      if (refs.length > 0) {
        refsByFile[file] = refs;
        allRefs.push(...refs.map(r => ({ ref: r, file })));
        log(`  ✓ ${file}: ${refs.join(', ')}`, 'green');
      }
    } catch (err) {
      log(`  ✗ Error reading ${file}: ${err.message}`, 'red');
    }
  }

  // Extract master reference list
  log('\nExtracting master reference list:', 'cyan');
  const indexPath = path.join(srcDir, 'pages', 'index.astro');
  let masterRefs = {};

  try {
    const content = fs.readFileSync(indexPath, 'utf8');
    masterRefs = extractMasterReferences(content);
    log(`  ✓ Found ${Object.keys(masterRefs).length} references in master list`, 'green');
  } catch (err) {
    log(`  ✗ Error reading master list: ${err.message}`, 'red');
    return;
  }

  // Analyze for issues
  log('\n=== Analysis Results ===\n', 'cyan');

  // 1. Check for duplicates
  log('1. Duplicate References:', 'bright');
  const refCounts = {};
  allRefs.forEach(({ ref, file }) => {
    if (!refCounts[ref]) {
      refCounts[ref] = [];
    }
    refCounts[ref].push(file);
  });

  let hasDuplicates = false;
  for (const [ref, files] of Object.entries(refCounts)) {
    if (files.length > 1) {
      hasDuplicates = true;
      log(`   Reference ${ref} used ${files.length} times:`, 'yellow');
      files.forEach(file => {
        log(`     - ${file}`, 'dim');
      });
      if (masterRefs[ref]) {
        log(`     Title: "${masterRefs[ref]}"`, 'dim');
      }
    }
  }
  if (!hasDuplicates) {
    log('   ✓ No duplicates found', 'green');
  }

  // 2. Check for references not in master list
  log('\n2. References Not in Master List:', 'bright');
  const usedRefNums = Object.keys(refCounts).map(Number).sort((a, b) => a - b);
  let orphanRefs = false;

  usedRefNums.forEach(ref => {
    if (!masterRefs[ref]) {
      orphanRefs = true;
      log(`   Reference ${ref} is used but not in master list`, 'red');
      refCounts[ref].forEach(file => {
        log(`     - Used in: ${file}`, 'dim');
      });
    }
  });
  if (!orphanRefs) {
    log('   ✓ All used references exist in master list', 'green');
  }

  // 3. Check for master references not used
  log('\n3. Master References Not Used:', 'bright');
  const masterRefNums = Object.keys(masterRefs).map(Number).sort((a, b) => a - b);
  let unusedRefs = false;

  masterRefNums.forEach(ref => {
    if (!refCounts[ref]) {
      unusedRefs = true;
      log(`   Reference ${ref}: "${masterRefs[ref]}" (NOT USED)`, 'yellow');
    }
  });
  if (!unusedRefs) {
    log('   ✓ All master references are used', 'green');
  }

  // 4. Check ordering
  log('\n4. Reference Ordering:', 'bright');
  let orderIssue = false;
  let lastRef = -1;

  for (const { ref, file } of allRefs) {
    if (ref < lastRef && ref !== lastRef) {
      orderIssue = true;
      log(`   ⚠ Out of order: ${ref} appears after ${lastRef}`, 'yellow');
      log(`     - Location: ${file}`, 'dim');
    }
    if (ref >= 0) lastRef = ref;
  }
  if (!orderIssue) {
    log('   ✓ References appear in correct order', 'green');
  }

  // 5. Summary statistics
  log('\n5. Summary:', 'bright');
  log(`   Total unique references used: ${usedRefNums.length}`, 'cyan');
  log(`   Total references in master list: ${masterRefNums.length}`, 'cyan');
  log(`   Reference range: ${Math.min(...usedRefNums)} - ${Math.max(...usedRefNums)}`, 'cyan');

  // Check for gaps
  const gaps = [];
  for (let i = Math.min(...usedRefNums); i <= Math.max(...usedRefNums); i++) {
    if (!masterRefs[i] && !refCounts[i]) {
      gaps.push(i);
    }
  }
  if (gaps.length > 0) {
    log(`   Gaps in sequence: ${gaps.join(', ')}`, 'yellow');
  }

  // Final status
  log('\n' + '='.repeat(50) + '\n', 'cyan');
  const totalIssues = (hasDuplicates ? 1 : 0) + (orphanRefs ? 1 : 0) + (unusedRefs ? 1 : 0) + (orderIssue ? 1 : 0);
  
  if (totalIssues === 0) {
    log('✓ All references are valid and in order!', 'green');
  } else {
    log(`✗ Found ${totalIssues} issue(s) to address`, 'red');
  }
  log('', 'reset');
}

// Run analysis
analyzeReferences();
