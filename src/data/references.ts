/**
 * APA Citation References Database
 * Consolidated from original numbered references
 * Maps to internal reference numbers for scroll functionality
 */

export interface APAReference {
  id: number; // Internal ID for scroll linking
  author: string; // Author/Organization (for in-text citation)
  year: number; // Year (for in-text citation)
  title: string;
  fullCitation: string; // Complete APA formatted citation
  url: string;
  originalRefNumber?: number; // Track original ref number if different
}

export const references: APAReference[] = [
  {
    id: 1,
    author: "Vox",
    year: 2014,
    title: "How charging teenagers as adults works",
    fullCitation: "Vox. (2014). How charging teenagers as adults works. Retrieved from https://www.vox.com/2014/5/22/5740168/charging-teenagers-as-adults-direct-file-safety-recidivism-juvenile-justice",
    url: "https://www.vox.com/2014/5/22/5740168/charging-teenagers-as-adults-direct-file-safety-recidivism-juvenile-justice",
  },
  {
    id: 2,
    author: "Los Angeles Times",
    year: 2021,
    title: "California is closing state youth prisons",
    fullCitation: "Los Angeles Times. (2021, February 15). California is closing state youth prisons. Retrieved from https://www.latimes.com/california/story/2021-02-15/california-youth-prisons-closing-criminal-justice-reform",
    url: "https://www.latimes.com/california/story/2021-02-15/california-youth-prisons-closing-criminal-justice-reform",
  },
  {
    id: 3,
    author: "Children's Defense Fund",
    year: 2024,
    title: "The State of America's Children: Youth Justice",
    fullCitation: "Children's Defense Fund. (2024). The state of America's children: Youth justice. Retrieved from https://childrensdefense.org/tools-and-resources/the-state-of-americas-children/soac-youth-justice/",
    url: "https://childrensdefense.org/tools-and-resources/the-state-of-americas-children/soac-youth-justice/",
  },
  {
    id: 4,
    author: "GPB",
    year: 2016,
    title: "Can Kids Be Scared Straight?",
    fullCitation: "Georgia Public Broadcasting. (2016, September 14). Can kids be scared straight? Retrieved from https://www.gpb.org/news/2016/09/14/can-kids-be-scared-straight",
    url: "https://www.gpb.org/news/2016/09/14/can-kids-be-scared-straight",
  },
  {
    id: 5,
    author: "The Cincinnati Enquirer",
    year: 2023,
    title: "Ohio's youth prison detention centers struggle with injuries, neglect",
    fullCitation: "The Cincinnati Enquirer. (2023, November 11). Ohio's youth prison detention centers struggle with injuries, neglect. Retrieved from https://www.cincinnati.com/story/news/2023/11/11/ohios-youth-prison-detention-centers-struggle-with-injuries-neglect/70410221007/",
    url: "https://www.cincinnati.com/story/news/2023/11/11/ohios-youth-prison-detention-centers-struggle-with-injuries-neglect/70410221007/",
  },
  {
    id: 6,
    author: "Roth Legal",
    year: 2024,
    title: "Juvenile Crimes: How Courts Handle Offenders Under 18",
    fullCitation: "Roth Legal. (2024). Juvenile crimes: How courts handle offenders under 18. Retrieved from https://www.roth-legal.com/blog/juvenile-crimes-how-courts-handle-offenders-under-18/",
    url: "https://www.roth-legal.com/blog/juvenile-crimes-how-courts-handle-offenders-under-18/",
  },
  {
    id: 7,
    author: "Office of Juvenile Justice and Delinquency Prevention",
    year: 2015,
    title: "Trying Juveniles as Adults",
    fullCitation: "U.S. Department of Justice, Office of Juvenile Justice and Delinquency Prevention. (2015). Trying juveniles as adults. Retrieved from https://ojjdp.ojp.gov/sites/g/files/xyckuh176/files/pubs/tryingjuvasadult/transfer.html",
    url: "https://ojjdp.ojp.gov/sites/g/files/xyckuh176/files/pubs/tryingjuvasadult/transfer.html",
  },
  {
    id: 9,
    author: "Los Angeles Criminal Law Resource",
    year: 2024,
    title: "Juvenile Court Process",
    fullCitation: "Los Angeles Criminal Law Resource. (2024). Juvenile court process. Retrieved from https://childsafety.losangelescriminallawyer.pro/juvenile-court-process.html",
    url: "https://childsafety.losangelescriminallawyer.pro/juvenile-court-process.html",
  },
  {
    id: 11,
    author: "U.S. Department of Justice",
    year: 2024,
    title: "Trends in Youth Arrests",
    fullCitation: "U.S. Department of Justice. (2024). Trends in youth arrests. Retrieved from https://ojjdp.ojp.gov/publications/trends-in-youth-arrests.pdf",
    url: "https://ojjdp.ojp.gov/publications/trends-in-youth-arrests.pdf",
  },
  {
    id: 12,
    author: "Center for Health Journalism",
    year: 2024,
    title: "Juvenile Justice System Plagued by Racial and Health Disparities",
    fullCitation: "Center for Health Journalism. (2024). Juvenile justice system plagued by striking racial disparities health big one. Retrieved from https://centerforhealthjournalism.org/our-work/insights/juvenile-justice-system-plagued-striking-racial-disparities-health-big-one",
    url: "https://centerforhealthjournalism.org/our-work/insights/juvenile-justice-system-plagued-striking-racial-disparities-health-big-one",
  },
  {
    id: 14,
    author: "The Sentencing Project",
    year: 2024,
    title: "Why Youth Incarceration Fails: An Updated Review of the Evidence",
    fullCitation: "The Sentencing Project. (2024). Why youth incarceration fails: An updated review of the evidence. Retrieved from https://www.sentencingproject.org/reports/why-youth-incarceration-fails-an-updated-review-of-the-evidence/",
    url: "https://www.sentencingproject.org/reports/why-youth-incarceration-fails-an-updated-review-of-the-evidence/",
  },
  {
    id: 15,
    author: "Zinn Education Project",
    year: 2024,
    title: "The Kissing Case",
    fullCitation: "Zinn Education Project. (2024). The kissing case. Retrieved from https://www.zinnedproject.org/news/tdih/the-kissing-case/",
    url: "https://www.zinnedproject.org/news/tdih/the-kissing-case/",
  },
  {
    id: 16,
    author: "Equal Justice Initiative",
    year: 2024,
    title: "The Kiss",
    fullCitation: "Equal Justice Initiative. (2024). The kiss. Retrieved from https://eji.org/news/the-kiss/",
    url: "https://eji.org/news/the-kiss/",
  },
  {
    id: 17,
    author: "Juvenile Justice Information Exchange",
    year: 2017,
    title: "Juvenile Justice Reforms Went Backwards in the 90s",
    fullCitation: "Juvenile Justice Information Exchange. (2017, February 27). Juvenile justice reforms went backwards in the 90s. Retrieved from https://jjie.org/2017/02/27/juvenile-justice-reforms-went-backwards-in-the-90s/",
    url: "https://jjie.org/2017/02/27/juvenile-justice-reforms-went-backwards-in-the-90s/",
  },
  {
    id: 19,
    author: "Council on Criminal Justice",
    year: 2024,
    title: "Who Gets Arrested in America: Trends Across Four Decades (1980–2024)",
    fullCitation: "Council on Criminal Justice. (2024). Who gets arrested in America: Trends across four decades (1980–2024). Retrieved from https://counciloncj.org/who-gets-arrested-in-america-trends-across-four-decades-1980-2024/",
    url: "https://counciloncj.org/who-gets-arrested-in-america-trends-across-four-decades-1980-2024/",
  },
  {
    id: 20,
    author: "OJJDP",
    year: 2024,
    title: "Statistical Briefing Book Data Analysis Tools (EZAJCS)",
    fullCitation: "U.S. Department of Justice, Office of Juvenile Justice and Delinquency Prevention. (2024). Statistical briefing book data analysis tools (EZAJCS). Retrieved from https://ojjdp.ojp.gov/statistical-briefing-book/data-analysis-tools/ezajcs",
    url: "https://ojjdp.ojp.gov/statistical-briefing-book/data-analysis-tools/ezajcs",
  },
  {
    id: 21,
    author: "Annie E. Casey Foundation",
    year: 2024,
    title: "What Juvenile Justice Data Reveal and What the Numbers Can't Tell Us",
    fullCitation: "Annie E. Casey Foundation. (2024). What juvenile justice data reveal and what the numbers can't tell us. Retrieved from https://www.aecf.org/blog/what-juvenile-justice-data-reveal-and-what-the-numbers-cant-tell-us",
    url: "https://www.aecf.org/blog/what-juvenile-justice-data-reveal-and-what-the-numbers-cant-tell-us",
  },
  {
    id: 22,
    author: "OJJDP",
    year: 2024,
    title: "Court Statistics",
    fullCitation: "U.S. Department of Justice, Office of Juvenile Justice and Delinquency Prevention. (2024). Court statistics. Retrieved from https://www.ojjdp.gov/ojstatbb/court/JCSCF_Display.asp",
    url: "https://www.ojjdp.gov/ojstatbb/court/JCSCF_Display.asp",
  },
  {
    id: 23,
    author: "Office of Juvenile Justice and Delinquency Prevention",
    year: 2024,
    title: "Juvenile Justice 101",
    fullCitation: "U.S. Department of Justice, Office of Juvenile Justice and Delinquency Prevention. (2024). Juvenile justice 101. Retrieved from https://ojjdp.ojp.gov/juvenile-justice-101",
    url: "https://ojjdp.ojp.gov/juvenile-justice-101",
  },
  {
    id: 24,
    author: "OJJDP",
    year: 2024,
    title: "Statistical Briefing Book Glossary",
    fullCitation: "U.S. Department of Justice, Office of Juvenile Justice and Delinquency Prevention. (2024). Statistical briefing book glossary. Retrieved from https://www.ojjdp.gov/ojstatbb/glossary.html",
    url: "https://www.ojjdp.gov/ojstatbb/glossary.html",
  },
  {
    id: 25,
    author: "Georgia",
    year: 2020,
    title: "Georgia Code § 15-11-582",
    fullCitation: "Georgia. (2020). Georgia code § 15-11-582. Retrieved from https://law.justia.com/codes/georgia/2020/title-15/chapter-11/article-6/part-10/section-15-11-582/",
    url: "https://law.justia.com/codes/georgia/2020/title-15/chapter-11/article-6/part-10/section-15-11-582/",
  },
  {
    id: 26,
    author: "Georgia Department of Juvenile Justice",
    year: 2024,
    title: "Criminal Justice Process for Juveniles",
    fullCitation: "Georgia Department of Juvenile Justice. (2024). Criminal justice process for juveniles. Retrieved from https://djj.georgia.gov/criminal-justice-process-juveniles",
    url: "https://djj.georgia.gov/criminal-justice-process-juveniles",
  },
  {
    id: 27,
    author: "DeKalb County District Attorney",
    year: 2024,
    title: "SB 440 Unit",
    fullCitation: "DeKalb County District Attorney. (2024). SB 440 unit. Retrieved from https://www.dekalbda.org/divisions_special_units/special_units/sb440_unit/index.php",
    url: "https://www.dekalbda.org/divisions_special_units/special_units/sb440_unit/index.php",
  },
  {
    id: 28,
    author: "Office of Juvenile Justice and Delinquency Prevention",
    year: 2024,
    title: "Juvenile Justice Process Diagram",
    fullCitation: "U.S. Department of Justice, Office of Juvenile Justice and Delinquency Prevention. (2024). Juvenile justice process diagram. Retrieved from https://ojjdp.ojp.gov/sites/g/files/xyckuh176/files/images/2021-11/flowbluemedwebalt2.gif",
    url: "https://ojjdp.ojp.gov/sites/g/files/xyckuh176/files/images/2021-11/flowbluemedwebalt2.gif",
  },
  {
    id: 29,
    author: "BBC News",
    year: 2023,
    title: "Nebraska Teen Sentenced Over Abortion Case",
    fullCitation: "BBC News. (2023, December 6). Nebraska teen sentenced over abortion case. Retrieved from https://www.bbc.co.uk/news/world-us-canada-66271537",
    url: "https://www.bbc.co.uk/news/world-us-canada-66271537",
  },
  {
    id: 30,
    author: "Bureau of Justice Statistics",
    year: 2018,
    title: "Sexual Victimization Reported by Youth in Juvenile Facilities, 2018",
    fullCitation: "Bureau of Justice Statistics. (2018). Sexual victimization reported by youth in juvenile facilities, 2018 (Summary). Retrieved from https://bjs.ojp.gov/content/pub/pdf/svryjf18_sum.pdf",
    url: "https://bjs.ojp.gov/content/pub/pdf/svryjf18_sum.pdf",
  },
  {
    id: 31,
    author: "Bureau of Justice Statistics",
    year: 2009,
    title: "Sexual Victimization in Juvenile Facilities, 2009",
    fullCitation: "Bureau of Justice Statistics. (2009). Sexual victimization in juvenile facilities, 2009. Retrieved from https://bjs.ojp.gov/sites/g/files/xyckuh236/files/media/document/svjfry09pr.pdf",
    url: "https://bjs.ojp.gov/sites/g/files/xyckuh236/files/media/document/svjfry09pr.pdf",
  },
  {
    id: 32,
    author: "Bureau of Justice Statistics",
    year: 2024,
    title: "Sexual Victimization in Juvenile Facilities",
    fullCitation: "Bureau of Justice Statistics. (2024). Sexual victimization in juvenile facilities. Retrieved from https://bjs.ojp.gov/document/pdca24.pdf",
    url: "https://bjs.ojp.gov/document/pdca24.pdf",
  },
  {
    id: 33,
    author: "Child Safety Legal Resource",
    year: 2024,
    title: "Minors in Prison",
    fullCitation: "Child Safety Legal Resource. (2024). Minors in prison. Retrieved from https://childsafety.losangelescriminallawyer.pro/minors-in-prison.html",
    url: "https://childsafety.losangelescriminallawyer.pro/minors-in-prison.html",
  },
  {
    id: 34,
    author: "U.S. Code",
    year: 2024,
    title: "34 U.S.C. § 30301",
    fullCitation: "U.S. Code. (2024). 34 U.S.C. § 30301. Retrieved from https://uscode.house.gov/view.xhtml?req=(title:34%20section:30301%20edition:prelim)",
    url: "https://uscode.house.gov/view.xhtml?req=(title:34%20section:30301%20edition:prelim)",
  },
  {
    id: 35,
    author: "Office of Juvenile Justice and Delinquency Prevention",
    year: 2024,
    title: "Youth in Custody and Pregnancy Data",
    fullCitation: "U.S. Department of Justice, Office of Juvenile Justice and Delinquency Prevention. (2024). Youth in custody and pregnancy data. Retrieved from https://www.ojp.gov/pdffiles1/ojjdp/227730.pdf",
    url: "https://www.ojp.gov/pdffiles1/ojjdp/227730.pdf",
  },
  {
    id: 36,
    author: "Prison Policy Initiative",
    year: 2025,
    title: "Jail Births Media Project",
    fullCitation: "Prison Policy Initiative. (2025, July 1). Jail births media project. Retrieved from https://www.prisonpolicy.org/blog/2025/07/01/jail_births_media_project/",
    url: "https://www.prisonpolicy.org/blog/2025/07/01/jail_births_media_project/",
  },
  {
    id: 37,
    author: "Office of Juvenile Justice and Delinquency Prevention",
    year: 2025,
    title: "Easy Access to the Census of Juveniles in Residential Placement",
    fullCitation: "Puzzanchera, C., Sladky, T. J., & Kang, W. (2025). Easy access to the census of juveniles in residential placement. U.S. Office of Juvenile Justice and Delinquency Prevention. Retrieved from https://www.ojjdp.gov/ojstatbb/ezacjrp/",
    url: "https://www.ojjdp.gov/ojstatbb/ezacjrp/",
  },
  {
    id: 38,
    author: "The Sentencing Project",
    year: 2024,
    title: "Youth Justice by the Numbers",
    fullCitation: "The Sentencing Project. (2024). Youth justice by the numbers. Retrieved from https://www.sentencingproject.org/policy-brief/youth-justice-by-the-numbers/",
    url: "https://www.sentencingproject.org/policy-brief/youth-justice-by-the-numbers/",
  },
  {
    id: 39,
    author: "R Street Institute",
    year: 2024,
    title: "Abused by the State: The Hidden Crisis Inside America's Juvenile Detention System",
    fullCitation: "R Street Institute. (2024). Abused by the state: The hidden crisis inside America's juvenile detention system. Retrieved from https://www.rstreet.org/research/abused-by-the-state-the-hidden-crisis-inside-americas-juvenile-detention-system/",
    url: "https://www.rstreet.org/research/abused-by-the-state-the-hidden-crisis-inside-americas-juvenile-detention-system/",
  },
  {
    id: 40,
    author: "Annie E. Casey Foundation",
    year: 2011,
    title: "No Place for Kids: The Case for Reducing Juvenile Incarceration",
    fullCitation: "Annie E. Casey Foundation. (2011). No place for kids: The case for reducing juvenile incarceration. Retrieved from https://files.eric.ed.gov/fulltext/ED527944.pdf",
    url: "https://files.eric.ed.gov/fulltext/ED527944.pdf",
  },
  {
    id: 41,
    author: "Office of Juvenile Justice and Delinquency Prevention",
    year: 2024,
    title: "Patterns of Juvenile Court Referrals",
    fullCitation: "Office of Juvenile Justice and Delinquency Prevention. (2024). Patterns of juvenile court referrals. Retrieved from https://ojjdp.ojp.gov/publications/patterns-of-juvenile-court-referrals.pdf",
    url: "https://ojjdp.ojp.gov/publications/patterns-of-juvenile-court-referrals.pdf",
  },
  {
    id: 42,
    author: "The Sentencing Project",
    year: 2025,
    title: "Protect and Redirect: America's Growing Movement to Divert Youth Out of the Justice System",
    fullCitation: "The Sentencing Project. (2025). Protect and redirect: America's growing movement to divert youth out of the justice system. Retrieved from https://www.sentencingproject.org/reports/protect-and-redirect-americas-growing-movement-to-divert-youth-out-of-the-justice-system/",
    url: "https://www.sentencingproject.org/reports/protect-and-redirect-americas-growing-movement-to-divert-youth-out-of-the-justice-system/",
  },
  {
    id: 43,
    author: "Justice Policy Institute",
    year: 2020,
    title: "Sticker Shock: The Cost of Youth Incarceration",
    fullCitation: "Justice Policy Institute. (2020, July 30). Sticker shock: The cost of youth incarceration [Youth Justice, Community Reinvestment]. Retrieved from https://justicepolicy.org/research/policy-brief-2020-sticker-shock-the-cost-of-youth-incarceration",
    url: "https://justicepolicy.org/research/policy-brief-2020-sticker-shock-the-cost-of-youth-incarceration",
  },
  {
    id: 44,
    author: "Office of Juvenile Justice and Delinquency Prevention",
    year: 2025,
    title: "Offense Profile of Detained Youth",
    fullCitation: "Office of Juvenile Justice and Delinquency Prevention. (2025). Offense profile of detained youth. Retrieved from https://www.ojjdp.gov/ojstatbb/ezacjrp/asp/Offense_Detained.asp",
    url: "https://www.ojjdp.gov/ojstatbb/ezacjrp/asp/Offense_Detained.asp",
  },
  {
    id: 45,
    author: "Foy et al.",
    year: 2014,
    title: "Childhood Maltreatment and Juvenile Justice Outcomes",
    fullCitation: "Foy et al. (2014). Childhood maltreatment and juvenile justice outcomes. Law and Human Behavior. Retrieved from https://doi.org/10.1037/law0000002",
    url: "https://doi.org/10.1037/law0000002",
  },
  {
    id: 46,
    author: "Stevenson",
    year: 2014,
    title: "Just Mercy: A Story of Justice and Redemption",
    fullCitation: "Stevenson, B. (2014). Just mercy: A story of justice and redemption. New York, NY: Spiegel & Grau. Retrieved from https://www.penguinrandomhouse.com/books/314982/just-mercy-by-bryan-stevenson/",
    url: "https://www.penguinrandomhouse.com/books/314982/just-mercy-by-bryan-stevenson/",
  },
];

/**
 * Helper function to find a reference by ID
 */
export function getReference(id: number): APAReference | undefined {
  return references.find((ref) => ref.id === id);
}

/**
 * Helper function to get in-text citation format
 */
export function getInTextCitation(id: number): string {
  const ref = getReference(id);
  if (!ref) return `(Unknown, Unknown)`;
  return `(${ref.author}, ${ref.year})`;
}

/**
 * Helper function to generate full APA reference list
 */
export function generateAPAReferences(): string {
  const sorted = [...references].sort((a, b) => {
    const authorA = a.author.toLowerCase();
    const authorB = b.author.toLowerCase();
    if (authorA !== authorB) {
      return authorA.localeCompare(authorB);
    }
    return a.year - b.year;
  });

  return sorted
    .map(
      (ref) =>
        `${ref.author}. (${ref.year}). ${ref.title}. Retrieved from ${ref.url}`
    )
    .join("\n\n");
}
