/**
 * pricebook-data.js
 * Single source of truth for Marco proposal pricing.
 *
 * Sources:
 *   EOR & Workforce Services  → price-global-workforce-solution.html  (v2026.2.3 Fixed Price · Customer Pricing)
 *   Global Managed Payroll    → price-global-managed-payroll-service.html (v2026.2.2 · Customer Pricing)
 *
 * Currency rule (applies throughout):
 *   EUR for Eurozone countries · USD for all other regions
 *   FX markup: 2.5% on billing-date commercial bank rate if conversion required.
 *
 * To update: edit this file whenever a new pricebook version is published.
 * The Proposal Builder reads PRICEBOOK_DATA at runtime — no UI code changes needed.
 */

const PRICEBOOK_DATA = {

  // ─────────────────────────────────────────────────────────
  // META
  // ─────────────────────────────────────────────────────────
  meta: {
    workforce_version:  '2026.2.3',
    payroll_version:    '2026.2.2',
    validity:           '1 April 2026 – 30 June 2026',
    last_updated:       '4 June 2026',
    currency_rule:      'EUR for Eurozone countries; USD for all other regions.',
    fx_markup_pct:      2.5,          // applied when currency conversion required
    small_entity_discount_pct: 10,   // applies when < 10 employees annually (annual upfront payment)
    notes: [
      'Prices are Customer (end-client) rates unless noted otherwise.',
      'Partner rates exist separately in the pricebook pages.',
      'Quoted-upon-request items are excluded from automated calculations.',
    ]
  },

  // ─────────────────────────────────────────────────────────
  // 1. EOR LOCAL  (Employer of Record — local national hire)
  //    Source: GWS v2026.2.3 Fixed Price → EOR - Local table
  //    Fee type: ONE-TIME setup + MONTHLY per person
  // ─────────────────────────────────────────────────────────
  eor_local: {
    label: 'EOR – Local',
    fee_type: 'setup_plus_monthly',
    setup_fee: 99,          // USD or EUR depending on country
    regions: {
      'Asia – Japan, South Korea, Singapore, Taiwan': {
        monthly_fee: 399,
        countries: ['Japan', 'South Korea', 'Singapore', 'Taiwan']
      },
      'Asia – Central Asia & Middle East': {
        monthly_fee: 299,
        countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Turkey', 'Kazakhstan', 'Jordan', 'Israel', 'Egypt', 'Bahrain', 'Kuwait', 'Oman']
      },
      'Asia – Southeast Asia & South Asia': {
        monthly_fee: 199,
        countries: ['Malaysia', 'Thailand', 'Indonesia', 'Philippines', 'Vietnam', 'Cambodia', 'Bangladesh', 'Brunei', 'Sri Lanka', 'Pakistan', 'India', 'China', 'Hong Kong']
      },
      'North America – Canada & United States': {
        monthly_fee: 299,
        countries: ['Canada', 'USA']
      },
      'South America – Latin American countries': {
        monthly_fee: 399,
        countries: ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Mexico', 'Peru']
      },
      'Europe – All countries': {
        monthly_fee: 399,
        countries: [
          'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
          'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary',
          'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta',
          'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia',
          'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine',
          'United Kingdom'
        ]
      },
      'Africa – All countries': {
        monthly_fee: 399,
        countries: ['Algeria', 'Kenya', 'Nigeria', 'South Africa', 'Tunisia', 'Egypt']
      },
      'Oceania – Australia & New Zealand': {
        monthly_fee: 399,
        countries: ['Australia', 'New Zealand']
      }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 2. EOR EXPAT  (Employer of Record — foreign national/expat)
  //    Source: GWS v2026.2.3 Fixed Price → EOR Expat table
  //    Fee type: ONE-TIME setup + MONTHLY per person (fixed fee)
  //    Min charge: 6 months of service fees.
  // ─────────────────────────────────────────────────────────
  eor_expat: {
    label: 'EOR Expat – Foreign Nationals',
    fee_type: 'setup_plus_monthly',
    setup_fee: 99,           // USD or EUR
    minimum_months: 6,       // early termination still charged 6 months
    groups: {
      'Europe – Ireland & United Kingdom': {
        monthly_fee: 799,
        countries: ['Ireland', 'United Kingdom']
      },
      'Europe – European Union': {
        monthly_fee: 799,
        countries: [
          'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
          'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary',
          'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands',
          'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'
        ]
      },
      'Latin America – Brazil, Chile, Mexico & Peru': {
        monthly_fee: 799,
        countries: ['Brazil', 'Chile', 'Mexico', 'Peru']
      },
      'Oceania – Australia & New Zealand': {
        monthly_fee: 799,
        countries: ['Australia', 'New Zealand']
      },
      'Asia – Thailand': {
        monthly_fee: 699,
        countries: ['Thailand']
      },
      'Asia – Central Asia, Qatar, Saudi Arabia & Turkey': {
        monthly_fee: 699,
        countries: ['Kazakhstan', 'Qatar', 'Saudi Arabia', 'Turkey']
      },
      'Asia – United Arab Emirates': {
        monthly_fee: 499,
        countries: ['UAE']
      },
      'Asia – Japan, Malaysia & South Korea': {
        monthly_fee: 499,
        countries: ['Japan', 'Malaysia', 'South Korea']
      },
      'Asia – Indonesia, Philippines & Vietnam': {
        monthly_fee: 499,
        countries: ['Indonesia', 'Philippines', 'Vietnam']
      }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 3. IC MANAGEMENT  (Independent Contractor engagement)
  //    Source: GWS v2026.2.3 → IC Management
  //    Fee type: PER TRANSACTION
  // ─────────────────────────────────────────────────────────
  ic_management: {
    label: 'IC Management',
    fee_type: 'per_transaction',
    services: {
      'Contractor Engagement (Marco IC)': {
        fee: 99,
        unit: 'per engagement',
        description: 'Full contractor onboarding and management via Marco'
      },
      'Contractor Payment (Client IC)': {
        fee: 19.9,
        unit: 'per payment',
        description: 'Payment processing for client-managed contractors'
      }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 4. EXPENSE PROCESSING  (Workforce pricebook)
  //    Source: GWS v2026.2.3 → Expense Processing
  //    Fee type: PERCENTAGE of expense total
  // ─────────────────────────────────────────────────────────
  expense_processing_workforce: {
    label: 'Expense Processing (Workforce)',
    fee_type: 'percentage',
    services: {
      'Cash Advance':       { fee: null,  unit: 'included', label: 'INCLUDED' },
      'Company Debit Card': { fee: null,  unit: 'included', label: 'INCLUDED' },
      'Compliance Review & Payment – Standard (1x/month)':     { fee: 5,  unit: 'pct_of_expense_total' },
      'Compliance Review & Payment – Non-standard (2x/month)': { fee: 6,  unit: 'pct_of_expense_total' },
      'Compliance Review & Payment – Non-standard (3x/month)': { fee: 7,  unit: 'pct_of_expense_total' },
      'Expense Payment Only': { fee: 3, unit: 'pct_of_expense_total' }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 5. MARCO OS  (Workforce pricebook)
  //    Source: GWS v2026.2.3 → Marco OS
  // ─────────────────────────────────────────────────────────
  marco_os_workforce: {
    label: 'Marco OS (Workforce)',
    services: {
      'Basic Platform Use': { fee: null, unit: 'free', label: 'FREE' },
      'IT Support':         { fee: 120,  unit: 'per_hour', min_hours: null }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 6. GLOBAL MOBILITY  (Visa services — per person, one-time)
  //    Source: GWS v2026.2.3 → Global Mobility
  //    Fee type: ONE-TIME per person (work visa arrangement)
  // ─────────────────────────────────────────────────────────
  global_mobility: {
    label: 'Global Mobility – Work Visa',
    fee_type: 'one_time_per_person',
    note: 'Does not include translation, certification, notarization, courier, medical, embassy government fees, airport pickup, bank account opening, or additional insurance fees.',
    countries: {
      // EUR countries
      'Ireland':        { fee: 5500, currency: 'EUR' },
      'Austria':        { fee: 5000, currency: 'EUR' },
      'Italy':          { fee: 4500, currency: 'EUR' },
      'Belgium':        { fee: 3500, currency: 'EUR' },
      'France':         { fee: 3500, currency: 'EUR' },
      'Germany':        { fee: 3500, currency: 'EUR' },
      'Netherlands':    { fee: 3500, currency: 'EUR' },
      'Croatia':        { fee: 3500, currency: 'EUR' },
      'Slovenia':       { fee: 3500, currency: 'EUR' },
      'Romania':        { fee: 3500, currency: 'EUR' },
      'Czech Republic': { fee: 3500, currency: 'EUR' },
      'Sweden':         { fee: 3500, currency: 'EUR' },
      'Denmark':        { fee: 3500, currency: 'EUR' },
      'Finland':        { fee: 3500, currency: 'EUR' },
      'Spain':          { fee: 3500, currency: 'EUR' },
      'Portugal':       { fee: 3500, currency: 'EUR' },
      'Greece':         { fee: 3500, currency: 'EUR' },
      'Hungary':        { fee: 3500, currency: 'EUR' },
      // USD countries
      'United Kingdom': { fee: 9500, currency: 'USD' },
      'Australia':      { fee: 9000, currency: 'USD' },
      'New Zealand':    { fee: 9000, currency: 'USD' },
      'Canada':         { fee: 9000, currency: 'USD' },
      'Jordan':         { fee: 5500, currency: 'USD' },
      'Indonesia':      { fee: 4500, currency: 'USD' },
      'Turkey':         { fee: 4500, currency: 'USD' },
      'Japan':          { fee: 3500, currency: 'USD' },
      'Vietnam':        { fee: 3500, currency: 'USD' },
      'Philippines':    { fee: 3500, currency: 'USD' },
      'Kazakhstan':     { fee: 3500, currency: 'USD' },
      'Chile':          { fee: 3500, currency: 'USD' },
      'Brazil':         { fee: 3500, currency: 'USD' },
      'Saudi Arabia':   { fee: 3500, currency: 'USD' },
      'Qatar':          { fee: 3500, currency: 'USD' },
      'Malaysia':       { fee: 3000, currency: 'USD' },
      'Thailand':       { fee: 3000, currency: 'USD' },
      'UAE':            { fee: 3000, currency: 'USD' }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 7. PAYROLL SET-UP  (Payroll pricebook)
  //    Source: GMPS v2026.2.2 Customer Pricing → Payroll Set-Up
  //    Fee type: ONE-TIME
  // ─────────────────────────────────────────────────────────
  payroll_setup: {
    label: 'Payroll Set-Up',
    fee_type: 'one_time',
    services: {
      'Employer Social Security & Income Tax Account Set-up': {
        fee: 799,
        currency: 'USD',
        unit: 'per account'
      },
      'Setup Cost Per Entity – Payroll Project Transfer': {
        fee: 399,
        currency: 'USD',
        unit: 'per entity',
        notes: 'Capped at 10 hours. Bespoke projects: USD 150/hour.'
      }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 8. PAYROLL PROCESSING  (Payroll pricebook)
  //    Source: GMPS v2026.2.2 Customer Pricing → Payroll Processing
  //    Fee type: MONTHLY per payslip (covers all 5 standard services)
  //    The fee is per payslip and covers the full processing package.
  // ─────────────────────────────────────────────────────────
  payroll_processing: {
    label: 'Payroll Processing',
    fee_type: 'per_payslip_monthly',
    note: 'The payslip price covers the full Payroll Processing package (all 5 services). Charged per payslip, not per individual service.',
    tiers: {
      'up_to_50_employees':   { fee: 19.9, currency: 'USD', unit: 'per payslip', headcount_max: 50 },
      'more_than_50_employees': { fee: 9.9,  currency: 'USD', unit: 'per payslip', headcount_min: 51 }
    },
    services_included: [
      'Employee Headcount Registrations & De-Registrations (Social Security & Income Tax)',
      'Collect Client Payroll & Employee Expense Data',
      'Submit Payroll Reports to Client for Approval',
      'Provide Final Payroll Report, Invoice & Payslip',
      'Monthly Social Security & Income Tax Application'
    ]
  },

  // ─────────────────────────────────────────────────────────
  // 9. EXPENSE PROCESSING  (Payroll pricebook)
  //    Source: GMPS v2026.2.2 → Expense Processing
  // ─────────────────────────────────────────────────────────
  expense_processing_payroll: {
    label: 'Expense Processing (Payroll)',
    fee_type: 'percentage',
    services: {
      'Expense Compliance Review': {
        fee: 2.5,
        unit: 'pct_of_expense_total',
        notes: '2.5% of the total reimbursement amount'
      }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 10. PAYMENT PROCESSING / MANAGEMENT  (Payroll pricebook)
  //     Source: GMPS v2026.2.2 → Payment Processing/Management
  // ─────────────────────────────────────────────────────────
  payment_processing: {
    label: 'Payment Processing / Management',
    services: {
      'Configure Direct Debits':                   { fee: 799,  currency: 'USD', unit: 'per account' },
      'Prepare Bank Files & Payment Notifications': { fee: 25,   currency: 'USD', unit: 'per payslip' },
      'Social Contribution Payment on Behalf':     { fee: null,  unit: 'free', label: 'FREE' },
      'Employee Income Tax Payment on Behalf':     { fee: null,  unit: 'free', label: 'FREE' },
      'Salary Payment on Behalf':                  { fee: null,  unit: 'free', label: 'FREE' },
      'Off Cycle Payroll Payment':                  { fee: 99,   currency: 'USD', unit: 'per occurrence' },
      'Reimbursement Payment on Behalf':            { fee: null,  unit: 'free', label: 'FREE' },
      'Business Card Issuance':                     { fee: null,  unit: 'free', label: 'FREE' },
      'Payroll Payment Arrangement':                { fee: null,  unit: 'quoted', label: 'Quoted upon request' }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 11. MARCO OS  (Payroll pricebook)
  //     Source: GMPS v2026.2.2 → Marco OS
  // ─────────────────────────────────────────────────────────
  marco_os_payroll: {
    label: 'Marco OS (Payroll)',
    services: {
      'Marco OS User Access':                     { fee: null, unit: 'free', label: 'FREE' },
      'Marco OS Integration & Training':           { fee: 150, currency: 'USD', unit: 'per hour', min_hours: 2 },
      'Vendor Platform Setup & Configuration':     { fee: 150, currency: 'USD', unit: 'per hour', min_hours: 2 },
      'Customer Platform Setup & Configuration':   { fee: 150, currency: 'USD', unit: 'per hour', min_hours: 2 },
      'System Integration & Migration Support':    { fee: 150, currency: 'USD', unit: 'per hour', min_hours: 2 },
      'Data Cloud Set Up & Customization':         { fee: 150, currency: 'USD', unit: 'per hour', min_hours: 2 },
      'BI Dashboard Setup & Customization':        { fee: 150, currency: 'USD', unit: 'per hour', min_hours: 2 },
      'Support, Training & Documentation':         { fee: 150, currency: 'USD', unit: 'per hour', min_hours: 2 }
    }
  },

  // ─────────────────────────────────────────────────────────
  // 12. ADDITIONAL HRO SERVICES  (Payroll pricebook · Customer rate)
  //     Source: GMPS v2026.2.2 Customer Pricing → Additional HRO services
  //     Rate: USD 150 / hour (most items; see quoted exceptions)
  // ─────────────────────────────────────────────────────────
  hro_services: {
    label: 'Additional HRO Services',
    default_rate: { fee: 150, currency: 'USD', unit: 'per hour' },
    services: [
      { name: 'Social Security & Income Tax Account Administrator',                            min: 'Min. 2 hours / month' },
      { name: 'Offline Counter Assistance for SS & Income Tax Account Setup',                  min: 'Min. 4 hours / session' },
      { name: 'SS & Income Tax Account Setup Authorization Letter Assistance',                 min: 'Min. 2 hours / session' },
      { name: 'Additional Labor Declaration',                                                  min: 'Min. 1 hour / session' },
      { name: 'Shadow Payroll Advisory Services',                                              min: 'Min. 1 hour / session' },
      { name: 'Monthly Payroll FAQ',                                                           min: 'Min. 1 hour / session' },
      { name: 'Employee Benefit Calculation (e.g. Car/Fuel allowance)',                        min: 'Min. 1 hour / session' },
      { name: 'Payroll Cost Analysis and Estimation',                                          min: 'Min. 1 hour / session' },
      { name: 'Annual Tax Filing',                                                             min: 'Min. 4 hours / session' },
      { name: 'Issue Social Insurance and Tax Certificate',                                    min: 'Min. 1 hour / session' },
      { name: 'General Ledger (GL) File and Related Tax Filing',                               min: 'Min. 2 hours / session' },
      { name: 'Reserve a Medical Check-up',                                                    min: 'Min. 1 hour / session' },
      { name: 'Issuing Employment Offer (Marco Liaison)',                                      min: 'Min. 1 hour / session' },
      { name: 'Interpretation of Employment Contract & Company Welfare Policy',                min: 'Min. 1 hour / session' },
      { name: 'Drafting and Signing Employment Contract (Marco Liaison)',                      min: 'Min. 2 hours / session' },
      { name: 'Employee Onboarding (Marco Liaison)',                                           min: 'Min. 2 hours / session' },
      { name: 'Managing Employee Termination (Marco Liaison)',                                 min: 'Min. 2 hours / session' },
      { name: 'Advisory & Documentation for Time-off & Attendance Management Policy',         min: 'Min. 2 hours / session' },
      { name: 'Attendance & Overtime Records (Marco Liaison)',                                 min: 'Min. 2 hours / session' },
      { name: 'Leave & Holiday Record Management (Marco System)',                              min: 'Min. 1 hour / session' },
      { name: 'Compensation Reminder Service (Contract Agreed)',                               min: 'Min. 1 hour / session' },
      { name: 'On-site HR Service',                                                            fee: null, unit: 'quoted', label: 'Quoted upon request', note: 'Based on on-site employee level' },
      { name: 'Employee Compensation & Benefits Consultation and Setup',                       min: 'Min. 2 hours / session', note: '+ external vendor costs' },
      { name: 'Assistance in Arranging Commercial Insurance',                                  min: 'Min. 2 hours / session', note: '+ external vendor costs' },
      { name: 'Assistance in Establishing Private Pension Funds',                              min: 'Min. 2 hours / session', note: '+ external vendor costs' },
      { name: 'Cross-Border Tax Filing & Consultation (Domestic & Expat)',                     min: 'Min. 2 hours / session', note: '+ external vendor costs' },
      { name: 'Labor Reporting Services',                                                      min: 'Min. 2 hours / session', note: '+ external vendor costs' },
      { name: 'Privacy and Data Compliance Advisory',                                          min: 'Min. 2 hours / session', note: '+ external vendor costs' },
      { name: 'Professional HRO Agent Service (Europe)',                                       min: 'Min. 2 hours / session', note: '+ external vendor costs' },
      { name: 'Translation Assistance Services',                                               min: 'Min. 2 hours / session', note: '+ external vendor costs' },
      { name: 'Employee Handbook Assistance',                                                  fee: null, unit: 'quoted', label: 'Quoted upon request' },
      { name: 'Consultation & Documentation on Union Related Matters',                         min: 'Min. 2 hours / session', note: '+ external vendor costs' }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // HELPERS: Country lookup utilities
  // ─────────────────────────────────────────────────────────

  /**
   * Eurozone countries — use EUR
   */
  eurozone_countries: [
    'Austria', 'Belgium', 'Croatia', 'Cyprus', 'Estonia', 'Finland', 'France',
    'Germany', 'Greece', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg',
    'Malta', 'Netherlands', 'Portugal', 'Slovakia', 'Slovenia', 'Spain'
  ],

  /**
   * Look up the EOR Local monthly fee for a given country name.
   * Returns { monthly_fee, setup_fee, currency, region_label } or null.
   */
  getEorLocalRate(country) {
    const regions = this.eor_local.regions;
    for (const [label, data] of Object.entries(regions)) {
      if (data.countries.includes(country)) {
        const currency = this.eurozone_countries.includes(country) ? 'EUR' : 'USD';
        return {
          region_label: label,
          setup_fee:    this.eor_local.setup_fee,
          monthly_fee:  data.monthly_fee,
          currency
        };
      }
    }
    return null;
  },

  /**
   * Look up the EOR Expat monthly fee for a given country name.
   * Returns { monthly_fee, setup_fee, currency, group_label, minimum_months } or null.
   */
  getEorExpatRate(country) {
    const groups = this.eor_expat.groups;
    for (const [label, data] of Object.entries(groups)) {
      if (data.countries.includes(country)) {
        const currency = this.eurozone_countries.includes(country) ? 'EUR' : 'USD';
        return {
          group_label:    label,
          setup_fee:      this.eor_expat.setup_fee,
          monthly_fee:    data.monthly_fee,
          currency,
          minimum_months: this.eor_expat.minimum_months
        };
      }
    }
    return null;
  },

  /**
   * Look up the currency for a country.
   * Returns 'EUR' for Eurozone countries, 'USD' otherwise.
   */
  getCurrency(country) {
    return this.eurozone_countries.includes(country) ? 'EUR' : 'USD';
  },

  /**
   * Get payroll processing fee for a given headcount.
   * Returns { fee, currency, unit }
   */
  getPayrollProcessingRate(headcount) {
    const tiers = this.payroll_processing.tiers;
    if (headcount <= 50) {
      return { ...tiers.up_to_50_employees };
    }
    return { ...tiers.more_than_50_employees };
  }

};

// Make available as ES module or global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRICEBOOK_DATA;
}
