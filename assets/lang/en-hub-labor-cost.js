/* HR Knowledge Hub — Labor Cost Calculator (hr-knowledge-hub-labor-cost-calculator.html)
   EN is the source language; strings here are for reference only — never loaded at runtime. */
window.MARCO_LANG_EN_HUB_LABOR_COST = {

  /* ── Hero ── */
  'lcc.hero.label':            'LABOR COST CALCULATOR',
  'lcc.hero.title.white1':     'Calculate the ',
  'lcc.hero.title.blue':       'True Cost ',
  'lcc.hero.title.white2':     'of Hiring',
  'lcc.hero.subtitle':         'Estimate total employer cost by combining salary, statutory contributions, and other required employment obligations.',

  /* ── Calculator section header ── */
  'lcc.section.label':         'Labor Cost Calculator',
  'lcc.section.h2':            'Where would you like to hire?',
  'lcc.section.subtitle':      'Enter the basic hiring details below to generate an estimated proposal.',

  /* ── Form: Country ── */
  'lcc.form.country.label':       'Where would you like to hire?',
  'lcc.form.country.placeholder': 'Select a country',
  'lcc.form.country.search':      'Search country…',

  /* ── Form: Worker Type ── */
  'lcc.form.workertype.label':          'Worker Type',
  'lcc.form.workertype.local.title':    'Local/ PR',
  'lcc.form.workertype.local.desc':     'Citizen or permanent resident',
  'lcc.form.workertype.foreign.title':  'Foreign National',
  'lcc.form.workertype.foreign.desc':   'Valid work pass or visa holder',

  /* ── Form: Salary ── */
  'lcc.form.salary.label':       'Salary',
  'lcc.form.salary.monthly':     'Monthly',
  'lcc.form.salary.annual':      'Annual',
  'lcc.form.salary.placeholder': 'Enter amount',

  /* ── Form: Buttons ── */
  'lcc.form.btn.calculate': 'View Report',
  'lcc.form.btn.reset':     'Reset',

  /* ── Salary hints (JS-generated; {0} = formatted amount) ── */
  'lcc.hint.annual':   'Annual equivalent: USD {0}',
  'lcc.hint.monthly':  'Monthly equivalent: USD {0}',

  /* ── FX hints (JS-generated) ── */
  /* {0} = currency code, {1} = formatted local amount, {2} = date string */
  'lcc.hint.fx.samecurrency': 'USD is used as the calculation currency',
  'lcc.hint.fx.loading':      'Fetching exchange rate…',
  'lcc.hint.fx.result':       '≈ {0} {1} based on exchange rate dated {2}',
  'lcc.hint.fx.disclaimer':   'Exchange rate is for reference only. Final payroll funding may vary by bank rate and processing date.',
  'lcc.hint.fx.error':        'Exchange rate unavailable for this currency. Please try again later.',
  'lcc.hint.fx.error2':       'Exchange rate unavailable. Please try again later.',

  /* ── Result card (JS-generated) ── */
  'lcc.result.total.label':         'TOTAL EMPLOYMENT COST',
  'lcc.result.total.per':           '/mo',
  'lcc.result.contributions.rate':  'employer contributions rate',
  'lcc.result.bar.base':            'Base Salary',
  'lcc.result.bar.statutory':       'Statutory Contributions',
  'lcc.result.bar.benefits':        'Benefits & Other Costs',
  'lcc.result.bar.statutory.rate':  'Statutory Contributions ({0})',
  'lcc.result.bar.benefits.est':    'Benefits & Other Costs (est. {0})',
  'lcc.result.bar.benefits.na':     'Not applicable for this country',
  'lcc.report.subtitle.mo':         '/mo base salary',
  'lcc.report.subtitle.annual':     '/mo base salary (from annual)',
  'lcc.result.summary.monthly':     'Monthly Cost',
  'lcc.result.summary.annual':      'Annual Cost',
  'lcc.result.summary.mratio':      'M Ratio',
  'lcc.result.summary.statrate':    'Statutory Rate',

  /* ── Worker type labels used in result display ── */
  'lcc.workertype.local':   'Local / PR',
  'lcc.workertype.foreign': 'Foreign National',

  /* ── Report section ── */
  'lcc.report.label':           'LABOR COST REPORT',
  'lcc.report.btn.download':    'Download Report',
  'lcc.report.btn.generating':  'Generating . . .',
  'lcc.report.statutory.title': 'Statutory Contribution Breakdown',
  'lcc.report.benefits.title':  'Benefits & Estimated Costs',

  /* ── Report summary cards (JS-generated) ── */
  'lcc.report.card.monthly.total':  'Monthly Total Cost',
  'lcc.report.card.per.month':      'per month',
  'lcc.report.card.annual.total':   'Annual Total Cost',
  'lcc.report.card.per.year':       'per year',
  'lcc.report.card.monthly.stat':   'Monthly Statutory',
  'lcc.report.card.contributions':  'contributions',
  'lcc.report.card.annual.stat':    'Annual Statutory',
  'lcc.report.card.mratio':         'M Ratio',
  'lcc.report.card.multiplier':     'cost multiplier',
  'lcc.report.card.benefits':       'Benefits (Est.)',
  'lcc.report.card.of.base':        'of base salary',

  /* ── Report table headers (JS-generated) ── */
  'lcc.table.header.item':    'Contribution Item',
  'lcc.table.header.rate':    'Rate',
  'lcc.table.header.monthly': 'Monthly Amount',
  'lcc.table.header.annual':  'Annual Amount',

  /* ── Report table: no-contribution empty state ── */
  'lcc.table.empty.name': 'No mandatory employer statutory contributions',
  'lcc.table.empty.note': 'Contribution obligations are minimal or conditional for this country',

  /* ── Report table: totals row ── */
  'lcc.table.total.statutory': 'Total Statutory Contributions',
  'lcc.table.total.benefits':  'Total Benefits (Est.)',

  /* ── Disclaimer ── */
  'lcc.disclaimer': '* Rates are based on publicly available statutory regulations and are for estimation purposes only. Actual employer costs vary based on local regulations, salary thresholds, employee age, industry classification, and applicable bilateral Social Security Agreements. Rates are periodically updated by governments — always verify with Marco\'s local payroll specialists before making employment decisions.',

  /* ── CTA section ── */
  'lcc.cta.label':        'NEED MORE CLARITY?',
  'lcc.cta.heading.dark': 'Numbers are a start.',
  'lcc.cta.heading.blue': 'Let\'s talk through the details.',
  'lcc.cta.body':         'Statutory rates only tell part of the story. Thresholds, bilateral agreements, visa classifications, and collective bargaining rules all affect your real cost. Our payroll specialists can walk you through an accurate, country-specific breakdown for your team.',
  'lcc.cta.btn':          'Contact us',

};
