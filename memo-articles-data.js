// Shared data source for every Memo article page's "More From Marco" carousel.
// Add a new memo article here and it automatically appears in every other
// page's carousel — each page's own carousel excludes only itself (see
// memo-article.js, which reads window.MEMO_CURRENT_ARTICLE, set inline by
// each page before this file loads).
var MEMO_ARTICLES_DATA = [
  { file: 'hr-knowledge-hub-memo-vietnam-payroll-tax-update.html', title: 'Vietnam Payroll & Tax Update', readTime: '3 min read', img: 'assets/HR Knowledge Hub/Memo/images/vietnam-1.jpg' },
  { file: 'hr-knowledge-hub-memo-malaysia-lindung-opt-out.html', title: 'Malaysia - How to Opt Out of LINDUNG 24 JAM', readTime: '3 min read', img: 'assets/HR Knowledge Hub/Memo/images/malaysia-2.jpg' },
  { file: 'hr-knowledge-hub-memo-malaysia-lindung-update.html', title: 'Malaysia - LINDUNG 24 JAM Update: Now Voluntary for Local Employees', readTime: '3 min read', img: 'assets/HR Knowledge Hub/Memo/images/malaysia-1.webp' },
  { file: 'hr-knowledge-hub-memo-payroll-fraud.html', title: 'Payroll Fraud: A Global Threat', readTime: '4 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-5.webp' },
  { file: 'hr-knowledge-hub-memo-wrongful-dismissal.html', title: 'Over $3.1m awarded to finance veteran for wrongful dismissal', readTime: '3 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-19.jpg' },
  { file: 'hr-knowledge-hub-memo-poland-employee-capital-plan.html', title: "Poland's Employee Capital Plan", readTime: '4 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-10.png' },
  { file: 'hr-knowledge-hub-memo-italian-severance-payment-tfr.html', title: 'The Italian Severance Payment (TFR) Explained', readTime: '7 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-7.jpg' },
  { file: 'hr-knowledge-hub-memo-netherlands-30-ruling.html', title: '30% Ruling in the Netherlands', readTime: '5 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-11.webp' },
  { file: 'hr-knowledge-hub-memo-scammers-go-back-to-basics.html', title: 'Catch the Unsuspecting: Scammers Go Back to Basics', readTime: '2 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-4.jpg' },
  { file: 'hr-knowledge-hub-memo-peo.html', title: 'Professional Employer Organisations & its Origin', readTime: '3 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-1.jpg' },
  { file: 'hr-knowledge-hub-memo-employment-without-entity-poland.html', title: 'Employment Without Entity in Poland', readTime: '2 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-14.avif' },
  { file: 'hr-knowledge-hub-memo-ai-law.html', title: "World's First AI Law is Right on HR's Doorstep", readTime: '4 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-21.jpg' },
  { file: 'hr-knowledge-hub-memo-rsu-vs-esop-taxation.html', title: 'RSU vs ESOP Taxation: What are the Differences and Which One is Better?', readTime: '4 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-20.jpg' },
  { file: 'hr-knowledge-hub-memo-gdpr.html', title: 'General Data Protection Regulation (GDPR)', readTime: '4 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-18.jpg' },
  { file: 'hr-knowledge-hub-memo-at-will-employment-us.html', title: 'Are You Certain Your Staff Are Employed "At-Will" in the US?', readTime: '4 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-15.jpg' },
  { file: 'hr-knowledge-hub-memo-singapore-work-passes.html', title: "Comparing Singapore's Employment Pass, S-Pass and Work Permits", readTime: '2 min read', img: 'assets/HR Knowledge Hub/Memo/images/stock-13.jpg' }
];
