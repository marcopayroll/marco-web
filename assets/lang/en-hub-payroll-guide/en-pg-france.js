window.MARCO_LANG_EN_PG_FRANCE = {

  /* ── Hero ── */
  'pg.france.desc': 'A complete guide to running payroll in France &mdash; covering URSSAF registration, Convention Collective compliance, Cotisations Sociales, income tax withholding (PAS), and monthly DSN filing obligations.',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.france.s1.h': 'Scope &amp; Application',
  'pg.france.s1.sub': 'Legal Basis / Code du Travail &middot; URSSAF &middot; Convention Collective &middot; DSN',

  /* Intro bullets + framework paragraph */
  'pg.france.s1.b1': `
          <p class="article-p">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in France (SAS / SARL / SA)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly hired by the local entity, subject to the Labour Code (Code du Travail) and applicable industry collective agreement (Convention Collective)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on the Social Security Code (Code de la S&eacute;curit&eacute; Sociale) and income tax law</span>
            </div>
          </div>
          <p class="article-p" style="margin-top:20px;">This framework covers how companies complete Payroll Set-up, salary calculation, monthly filing and payment, and annual compliance management in France.</p>
  `,

  /* Marco Insight */
  'pg.france.s1.b2': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">French Payroll revolves around Cotisations Sociales (social security contributions) &mdash; the employer social security burden accounts for approximately 40%&ndash;45% of Gross Salary, among the highest levels globally. Additionally, every company must apply an industry collective agreement (Convention Collective) that specifies minimum wage classifications, working hours, leave, bonuses, and other terms that may exceed statutory standards. This agreement is a critical prerequisite for payroll calculation.</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.france.s2.h': 'Payroll Set-up',
  'pg.france.s2.sub': 'How to establish legal payroll capability in France / URSSAF &middot; Convention Collective &middot; Compliance',

  /* i. URSSAF & Tax Registration */
  'pg.france.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> URSSAF &amp; Tax Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:12%"><col style="width:38%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>URSSAF Registration</td><td>France local entity</td><td>Yes</td><td>Social security contribution authority; upon registration, obtain employer account under SIRET number</td></tr>
                <tr><td>DPAE (Onboarding Declaration)</td><td>Employer</td><td>Yes</td><td>D&eacute;claration Pr&eacute;alable &agrave; l&rsquo;Embauche (Prior Declaration of Hiring) must be submitted to URSSAF before employee starts work</td></tr>
                <tr><td>Pr&eacute;l&egrave;vement &agrave; la Source</td><td>Employer</td><td>Yes</td><td>Income tax withholding (PAS); mandatory since 2019</td></tr>
                <tr><td>Employee Num&eacute;ro de S&eacute;curit&eacute; Sociale</td><td>Employee</td><td>Yes</td><td>Social security number (NIR, 13 digits); provided at onboarding</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Convention Collective & Complementary Schemes */
  'pg.france.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Convention Collective &amp; Complementary Schemes</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:16%"><col style="width:34%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Convention Collective (CCN)</td><td>Employer</td><td>Yes</td><td>Confirm applicable industry collective agreement by IDCC code</td></tr>
                <tr><td>Mutuelle (Supplemental Health Insurance)</td><td>Employer</td><td>Yes</td><td>Statutorily mandatory; employer must cover at least 50% of premium</td></tr>
                <tr><td>Pr&eacute;voyance (Supplemental Risk Protection)</td><td>Employer</td><td>Yes (Cadre only)</td><td>Mandatory for management/executive staff (Cadre); for non-Cadre, subject to CCN</td></tr>
                <tr><td>Retraite Compl&eacute;mentaire</td><td>Employer</td><td>Yes</td><td>Supplemental pension; remitted via AGIRC-ARRCO</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iii. Payroll Bank Account & Compliance */
  'pg.france.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Bank Account &amp; Compliance</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:14%"><col style="width:56%"></colgroup>
              <thead><tr><th>Item</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Payroll Bank Account</td><td>Yes</td><td>Local EUR account</td></tr>
                <tr><td>Bulletin de Paie (Payslip)</td><td>Yes</td><td>Statutory obligation; format and content strictly regulated</td></tr>
                <tr><td>Registre du Personnel</td><td>Yes</td><td>Employee roster; records onboarding, separation, and other personnel information</td></tr>
                <tr><td>M&eacute;decine du Travail</td><td>Yes</td><td>Occupational health service; arrange Visite d&rsquo;Information before onboarding</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.france.s3.h': 'Payroll Calculation',
  'pg.france.s3.sub': 'How salary and employee entitlements are calculated / Salary &middot; Leave &middot; Cotisations Sociales',

  /* i. Salary Calculation & Working Hours */
  'pg.france.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary Calculation &amp; Working Hours</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Pay Method</td><td>Mensualized (Mensualis&eacute;): annual salary &divide; 12 or agreed monthly salary</td></tr>
                <tr><td>Statutory Working Hours</td><td>35 hours/week (Dur&eacute;e L&eacute;gale), 151.67 hours/month</td></tr>
                <tr><td>Calculation Method</td><td>Monthly salary &divide; 151.67 &times; actual hours worked; or by calendar/working days</td></tr>
                <tr><td>Overtime</td><td>36&ndash;43 hours: +25%; 44 hours onwards: +50%</td></tr>
                <tr><td>RTT (Time-off Compensation)</td><td>For companies with actual working hours &gt; 35 hours/week, compensation through RTT days</td></tr>
                <tr><td>SMIC (Minimum Wage)</td><td>&euro;11.65/hour (2024); monthly gross approximately &euro;1,766.92</td></tr>
                <tr><td>Decimal Handling</td><td>Round to 2 decimal places (EUR Cents)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Leave Entitlements */
  'pg.france.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Leave Entitlements (Cong&eacute;s Pay&eacute;s &amp; Statutory Leave)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Annual Leave (Cong&eacute;s Pay&eacute;s)</td><td>25 working days/year (= 5 weeks); accrues at 2.08 days/month</td></tr>
                <tr><td>Annual Leave Pay</td><td>Higher of &ldquo;normal salary&rdquo; or &ldquo;1/10 of previous period salary&rdquo;</td></tr>
                <tr><td>RTT Leave</td><td>Depends on company working hour arrangement; typically 8&ndash;12 days/year</td></tr>
                <tr><td>Public Holidays</td><td>11 days/year statutory; May 1 (Labour Day) is the only mandatorily paid public holiday</td></tr>
                <tr><td>Sick Leave</td><td>Paid by Social Security as IJSS (from day 4: 50% daily wage); CCN or employer may top up</td></tr>
                <tr><td>Maternity Leave (Cong&eacute; Maternit&eacute;)</td><td>1st&ndash;2nd child: 6 weeks pre-natal + 10 weeks post-natal = 16 weeks; paid by CPAM</td></tr>
                <tr><td>Paternity Leave (Cong&eacute; Paternit&eacute;)</td><td>25 calendar days (includes 3-day birth leave); paid by CPAM</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Marco Insight after leave table */
  'pg.france.s3.b2-insight': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">French annual leave calculation uses two methods: by &ldquo;actual working days&rdquo; or &ldquo;working days&rdquo; (Jours Ouvr&eacute;s vs Jours Ouvrables). Most companies use Jours Ouvr&eacute;s (25 days/year). The leave accrual period runs from June 1 to May 31 of the following year &mdash; not a calendar year. Payroll must set up an independent leave cycle accordingly.</p>
  `,

  /* iii. Social Security Contributions — includes note paragraphs + key reductions bullets */
  'pg.france.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Social Security Contributions (Cotisations Sociales) &mdash; Main Schemes (2024 Rates, Based on Gross Salary)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:34%"><col style="width:14%"><col style="width:14%"><col style="width:38%"></colgroup>
              <thead><tr><th>Item</th><th>Employer</th><th>Employee</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Maladie (Health Insurance)</td><td>7.00%</td><td>&mdash;</td><td>Reduced rate applies for earnings &le; 2.5 SMIC</td></tr>
                <tr><td>Vieillesse Plafonn&eacute;e (Pension Capped)</td><td>8.55%</td><td>6.90%</td><td>Contribution base ceiling: PMSS (&euro;3,864/month, 2024)</td></tr>
                <tr><td>Vieillesse D&eacute;plafonn&eacute;e (Pension Uncapped)</td><td>2.02%</td><td>0.40%</td><td>All gross income</td></tr>
                <tr><td>Allocations Familiales (Family Allowance)</td><td>3.45%</td><td>&mdash;</td><td>Reduced rate applies for earnings &le; 3.5 SMIC</td></tr>
                <tr><td>Ch&ocirc;mage (Unemployment Insurance)</td><td>4.05%</td><td>&mdash;</td><td>Contribution base ceiling: 4&times; PMSS</td></tr>
                <tr><td>AGIRC-ARRCO T1 (Supplemental Pension)</td><td>4.72%</td><td>3.15%</td><td>Base &le; 1&times; PMSS</td></tr>
                <tr><td>AGIRC-ARRCO T2 (Supplemental Pension)</td><td>12.95%</td><td>8.64%</td><td>Base 1&ndash;8&times; PMSS</td></tr>
                <tr><td>CSG / CRDS</td><td>&mdash;</td><td>9.70%</td><td>Based on 98.25% Gross + Employer Mutuelle</td></tr>
                <tr><td>AT/MP (Occupational Injury)</td><td>Variable</td><td>&mdash;</td><td>Industry risk coefficient, typically 0.9%&ndash;5%</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>Total employer burden approximately 40%&ndash;45%</strong> (including Mutuelle / Pr&eacute;voyance); employee burden approximately 22%&ndash;25% (including CSG/CRDS)</p>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>Key Reductions:</strong></p>
          <div class="au-bullet-list" style="margin-top:8px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">R&eacute;duction G&eacute;n&eacute;rale (Fillon Reduction): For employees earning &le; 1.6 SMIC, employer enjoys a tapering social security reduction</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">PMSS (Monthly social security ceiling): &euro;3,864/month (2024); affects multiple contribution base caps</span>
            </div>
          </div>
  `,

  /* Marco Insight after social security table */
  'pg.france.s3.b3-insight': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">The French Bulletin de Paie (payslip) is among the most complex globally &mdash; typically containing 30&ndash;50 lines of contribution detail. In 2018, the government implemented a &ldquo;simplified payslip&rdquo; reform, compressing line items to approximately 15 main categories. However, the underlying calculation logic remains unchanged; payroll systems must still calculate each item individually. R&eacute;duction Fillon reduction has significant impact on low-wage employees, potentially reducing the employer&rsquo;s effective rate by 10&ndash;15 percentage points.</p>
  `,

  /* iv. Personal Income Tax (PAS) — intro paragraph + 4 bullets */
  'pg.france.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Personal Income Tax (Pr&eacute;l&egrave;vement &agrave; la Source) &mdash; PAS &mdash; Income Tax Withholding</p>
          <p class="article-p" style="margin-bottom:12px;">Effective from 2019: Monthly source withholding system</p>
          <div class="au-bullet-list">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>Progressive rates:</strong> 0% (&le; &euro;11,294) / 11% (up to &euro;28,797) / 30% (up to &euro;82,341) / 41% (up to &euro;177,106) / 45% (above)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>Tax rate source:</strong> DGFiP (tax authority) sends each employee&rsquo;s personalized rate (Taux Personnalis&eacute;) monthly via DSN</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>New hires:</strong> If no DGFiP rate available, use Taux Neutre (neutral tax rate table)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>Employer role:</strong> Employer only executes withholding; does not participate in employee tax calculation &mdash; rate is determined directly by tax authority</span>
            </div>
          </div>
  `,

  /* v. Pay Slip Structure */
  'pg.france.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Pay Slip (Bulletin de Paie) Structure</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Salaire Brut (Gross Salary)</td><td>Base salary + overtime + allowances + bonuses</td></tr>
                <tr><td>Cotisations Patronales</td><td>Total employer social security contributions (not deducted from employee salary)</td></tr>
                <tr><td>Cotisations Salariales</td><td>Total employee social security contributions (deducted from Gross)</td></tr>
                <tr><td>Net Imposable (Taxable Net Income)</td><td>Gross &minus; Cotisations Salariales + non-deductible CSG portion</td></tr>
                <tr><td>PAS (Income Tax Withholding)</td><td>Net Imposable &times; DGFiP personalized tax rate</td></tr>
                <tr><td>Net &agrave; Payer (Net Take-Home)</td><td>Net Imposable &minus; PAS + reimbursements/allowances</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.france.s4.h': 'Payroll Processing &amp; Compliance',
  'pg.france.s4.sub': 'Monthly execution, filing and payment, and accounting treatment / DSN &middot; Journal &middot; Annual',

  /* i. Payroll Payment Rules */
  'pg.france.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Monthly</td><td>Statutory minimum once per month; management (Cadre) paid monthly</td></tr>
                <tr><td>Payment Method</td><td>Bank transfer / Cheque</td><td>Bank transfer (Virement Bancaire) is primary method</td></tr>
                <tr><td>Bulletin de Paie</td><td>Statutory obligation</td><td>Format strictly regulated by law; must retain electronic or paper copy</td></tr>
                <tr><td>Record Retention</td><td>5 years</td><td>Required by labour law; social security records recommended to retain longer</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Monthly Filing & Payment (DSN) — includes note paragraph */
  'pg.france.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Filing &amp; Payment (DSN) &mdash; D&eacute;claration Sociale Nominative</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:18%"><col style="width:14%"><col style="width:16%"><col style="width:30%"></colgroup>
              <thead><tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>DSN Reporting</td><td>Employer</td><td>Monthly</td><td>5th or 15th of pay month</td><td>Unified electronic filing, replaces all prior forms (&ge; 50 employees by 5th; &lt; 50 employees by 15th)</td></tr>
                <tr><td>URSSAF Social Security Payment</td><td>Employer</td><td>Monthly / Quarterly</td><td>With DSN</td><td>&ge; 50 employees monthly; &lt; 50 employees may be quarterly</td></tr>
                <tr><td>AGIRC-ARRCO</td><td>Employer</td><td>Monthly</td><td>With DSN</td><td>Supplemental pension remitted together with DSN</td></tr>
                <tr><td>PAS Income Tax</td><td>Employer</td><td>Monthly</td><td>With DSN</td><td>Withheld income tax remitted to DGFiP via DSN</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>Note:</strong> DSN is France&rsquo;s sole social security + tax filing channel (replacing DADS-U since 2017); late payment penalties start at &euro;7.50 per person.</p>
  `,

  /* iii. Payroll Journal Mapping Rules */
  'pg.france.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>Item</th><th>Account</th></tr></thead>
              <tbody>
                <tr><td>Salaire Brut</td><td>Payroll Expense (641)</td></tr>
                <tr><td>Charges Patronales (~40%&ndash;45%)</td><td>Payroll Expense (645)</td></tr>
                <tr><td>Cotisations Salariales + PAS</td><td>Payroll Liability (43x)</td></tr>
                <tr><td>Net &agrave; Payer</td><td>Cash / Bank (512)</td></tr>
                <tr><td>Provision Cong&eacute;s Pay&eacute;s</td><td>Payroll Expense / Provision (428)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iv. Annual Compliance */
  'pg.france.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Compliance</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:18%"><col style="width:32%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>SMIC Update</td><td>&mdash;</td><td>January 1 each year</td><td>Statutory minimum wage annual adjustment; must update in payroll</td></tr>
                <tr><td>PMSS Update</td><td>&mdash;</td><td>January 1 each year</td><td>Social security contribution ceiling annual adjustment</td></tr>
                <tr><td>DSN Annual Data</td><td>Employer</td><td>&mdash;</td><td>No separate annual report; all data completed through monthly DSN filings</td></tr>
                <tr><td>Cong&eacute;s Pay&eacute;s Period Carryover</td><td>Employer</td><td>May 31</td><td>Leave accrual period ends; unused leave carries over or is forfeited</td></tr>
                <tr><td>Participation / Int&eacute;ressement</td><td>Employer</td><td>Annually</td><td>Statutory profit-sharing (Participation) for companies &ge; 50 employees</td></tr>
                <tr><td>Entretien Professionnel</td><td>Employer</td><td>Every 2 years</td><td>Statutory professional development review; affects training obligations</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* v. Termination */
  'pg.france.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Termination (Rupture du Contrat)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Notice Period (Pr&eacute;avis)</td><td>CDI (permanent): 1&ndash;3 months (depends on CCN and tenure); probation period has shortened statutory period</td></tr>
                <tr><td>Statutory Severance (Indemnit&eacute; L&eacute;gale)</td><td>1/4 monthly salary per year of service (first 10 years) + 1/3 monthly salary per year (from 10 years onwards)</td></tr>
                <tr><td>CCN Severance</td><td>Collective agreement may specify higher standards; higher of CCN or statutory amount applies</td></tr>
                <tr><td>Rupture Conventionnelle</td><td>Negotiated termination: mutual agreement + DREETS approval; severance &ge; statutory standard</td></tr>
                <tr><td>Unused Annual Leave Cash-out</td><td>Unused Cong&eacute;s Pay&eacute;s must be fully paid out (ICCP)</td></tr>
                <tr><td>Termination Documents</td><td>Must provide Certificat de Travail + Attestation P&ocirc;le Emploi + Solde de Tout Compte</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Marco Insight */
  'pg.france.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Rupture Conventionnelle (negotiated termination) is a unique French mechanism for &ldquo;friendly separation&rdquo; &mdash; both parties mutually agree to terminate a CDI (permanent contract) and requires DREETS (formerly DIRECCTE) approval. Severance cannot be less than the statutory standard. This mechanism allows the employee to claim unemployment benefits and is the most common method of non-fault termination in France. Employer must allow 15 days statutory withdrawal period + 15 working days for administrative approval.</p>
  `,

};
