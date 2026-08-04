window.MARCO_LANG_EN_PG_HONG_KONG = {

  // ── Hero ──────────────────────────────────────────────────────────────────
  "pg.hong-kong.desc": `A complete guide to running payroll in Hong Kong — covering Companies Registry and BR registration, MPF trustee setup, Salaries Tax progressive rates (2%–17%), statutory leave entitlements under the Employment Ordinance, and annual IRD filing obligations including BIR56A and IR56B.`,

  // ── Section 1: Scope & Application ───────────────────────────────────────
  "pg.hong-kong.s1.h":   `Scope &amp; Application`,
  "pg.hong-kong.s1.sub": `Scope and Legal Basis / Employment Ordinance &middot; IRO &middot; MPFSO &middot; MWO`,

  // Intro paragraph + bullet list + framework paragraph
  "pg.hong-kong.s1.b1": `
<p class="article-p">This document applies to:</p>
<div class="au-bullet-list" style="margin-top:16px;">
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span>Companies that have established a local legal entity in Hong Kong (Hong Kong Limited Company / Branch Office / Representative Office)</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span>Employees directly hired by the local entity, protected by the Employment Ordinance Cap. 57 and &ldquo;Continuous Contract&rdquo; (Rule 468)</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span>Payroll compliance based on the Employment Ordinance, Mandatory Provident Fund Ordinance Cap. 485, Inland Revenue Ordinance Cap. 112 (IRO), and regulations from IRD / MPFA / Labour Department</span>
  </div>
</div>
<p class="article-p" style="margin-top:20px;">This framework covers how companies complete Payroll Set-up in Hong Kong (Companies Registry + BR + IRD + MPF Trustee), monthly salary calculation (Salaries Tax + 5% MPF + statutory holidays + annual leave), monthly MPF contribution (by 10th of following month), and annual compliance management (Employer&rsquo;s Return of Income Form BIR56A + IR56B issued in April, deadline early May).</p>
`,

  // Data cards wrap — 2026 KEY NUMBERS (8 cards)
  "pg.hong-kong.s1.b2": `
<p class="au-data-cards-label">2026 KEY NUMBERS</p>
<div class="au-data-cards-grid">
  <div class="au-data-cards-row">
    <div class="au-data-card">
      <span class="au-dc-name">Statutory Minimum Wage SMW</span>
      <span class="au-dc-value">HK$43.1/hr</span>
      <span class="au-dc-note">as of 2026/5/1; first annual adjustment</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">MPF Contribution</span>
      <span class="au-dc-value">5% + 5%</span>
      <span class="au-dc-note">employee + employer; monthly ceiling HK$1,500</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">MPF Income Limits</span>
      <span class="au-dc-value">7,100 &ndash; 30,000</span>
      <span class="au-dc-note">under review for increase to 10,500&ndash;40,000</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">Salaries Tax Brackets</span>
      <span class="au-dc-value">2% &ndash; 17%</span>
      <span class="au-dc-note">5 brackets, progressive from HK$50,000</span>
    </div>
  </div>
  <div class="au-data-cards-row">
    <div class="au-data-card">
      <span class="au-dc-name">Standard Tax Rate</span>
      <span class="au-dc-value">15% / 16%</span>
      <span class="au-dc-note">first HK$5M / thereafter, two-tier system</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">Basic Personal Allowance</span>
      <span class="au-dc-value">HK$145,000</span>
      <span class="au-dc-note">2025/26 tax year, single</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">Statutory Holidays</span>
      <span class="au-dc-value">15 days</span>
      <span class="au-dc-note">as of 2026/1/1, includes Easter Monday</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">Annual Leave</span>
      <span class="au-dc-value">7 &ndash; 14 days</span>
      <span class="au-dc-note">continuous contract 12+ months, increases by tenure</span>
    </div>
  </div>
</div>
`,

  // Marco Insight — S1
  "pg.hong-kong.s1.b3": `
<p class="au-mi-label">MARCO INSIGHT</p>
<p class="au-mi-text">Three key characteristics of Hong Kong Payroll: (1) Simple low-tax system &mdash; Salaries Tax is borne by employee only; employer has no payroll tax or social security burden; the only mandatory employer contribution is 5% MPF (monthly ceiling HK$1,500); (2) &ldquo;Continuous Contract&rdquo; (&#36830;&#32493;&#24615;&#21512;&#32422;) is a core concept: as of 2026/1/1, the rule relaxed to &ldquo;68 hours accumulated in 4 weeks&rdquo; (previously required 18 hours/week &times; 4 weeks), making it easier for employees to trigger annual leave / sick leave / statutory holidays / severance rights; (3) Tax year runs April 1 &ndash; March 31; employer must submit IR56B within 1 month of receiving BIR56A (typically early May).</p>
`,

  // ── Section 2: Payroll Set-up ─────────────────────────────────────────────
  "pg.hong-kong.s2.h":   `Payroll Set-up`,
  "pg.hong-kong.s2.sub": `How to establish legal payroll capability in Hong Kong / Entity &middot; IRD &middot; MPF &middot; BR`,

  // Table i — Entity, BR & IRD Registration
  "pg.hong-kong.s2.b1": `
<p class="au-table-title"><span class="au-table-num">i.</span> Entity, BR &amp; IRD Registration</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:22%"><col style="width:12%"><col style="width:38%"></colgroup>
    <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
    <tbody>
      <tr><td>Companies Registry (CR) Registration</td><td>Hong Kong local entity</td><td>Yes</td><td>Hong Kong Limited Company; minimum paid-up capital HK$1</td></tr>
      <tr><td>Business Registration Certificate (BR)</td><td>Hong Kong local entity</td><td>Yes</td><td>Issued by IRD; annual fee HK$2,200</td></tr>
      <tr><td>IRD Employer File</td><td>Hong Kong local entity</td><td>Yes</td><td>Notify IRD via Form IR1 within 3 months of hiring first employee</td></tr>
      <tr><td>MPF Trustee</td><td>Hong Kong local entity</td><td>Yes</td><td>Must register with MPF scheme within 60 days of hiring employees (28 approved schemes available)</td></tr>
      <tr><td>Written Employment Contract + Work Visa</td><td>Employer + Employee</td><td>Recommended</td><td>Employment Ordinance Section 44 recommends; foreign workers require GEP / Talented Hong Kong / Talent Programme</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table ii — MPF Contribution Structure
  "pg.hong-kong.s2.b2": `
<p class="au-table-title"><span class="au-table-num">ii.</span> Mandatory Provident Fund (MPF) &mdash; Contribution Structure</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:30%"><col style="width:22%"><col style="width:22%"><col style="width:26%"></colgroup>
    <thead><tr><th>Item</th><th>Employee Contribution</th><th>Employer Contribution</th><th>Base / Notes</th></tr></thead>
    <tbody>
      <tr><td>Minimum Level of Relevant Income</td><td>0%</td><td>5%</td><td>&lt; HK$7,100/month: employee exempt; employer still contributes 5%</td></tr>
      <tr><td>Relevant Income HK$7,100 &ndash; 30,000</td><td>5%</td><td>5%</td><td>Contribution based on monthly salary proportion</td></tr>
      <tr><td>Maximum Level of Relevant Income</td><td>5% (ceiling HK$1,500)</td><td>5% (ceiling HK$1,500)</td><td>&gt; HK$30,000/month: both parties capped at HK$1,500 monthly</td></tr>
      <tr><td>Contribution Categories</td><td>Mandatory + Voluntary</td><td>Mandatory + Voluntary</td><td>Voluntary contributions receive tax relief</td></tr>
      <tr><td>Payment Deadline</td><td>10th of following month</td><td>10th of following month</td><td>Late payment incurs 5% surcharge after 30 days</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table iii — Payslip & Record Retention
  "pg.hong-kong.s2.b3": `
<p class="au-table-title"><span class="au-table-num">iii.</span> Payslip &amp; Record Retention</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:22%"><col style="width:50%"></colgroup>
    <thead><tr><th>Item</th><th>Requirement</th><th>Operational Notes</th></tr></thead>
    <tbody>
      <tr><td>Bank Account (HKD)</td><td>Mandatory</td><td>Hong Kong local bank; electronic transfer / cheque payment</td></tr>
      <tr><td>Payslip</td><td>Required (Employment Ordinance Sec. 49B)</td><td>Must itemize gross salary, MPF deduction, overtime, allowances, etc.</td></tr>
      <tr><td>Wage &amp; Employment Records</td><td>Retain 7 years</td><td>As of 2026/5/1, monthly salary &lt; HK$17,600 must keep daily hours record</td></tr>
    </tbody>
  </table>
</div>
`,

  // ── Section 3: Payroll Calculation ───────────────────────────────────────
  "pg.hong-kong.s3.h":   `Payroll Calculation`,
  "pg.hong-kong.s3.sub": `How salary, tax, and employee entitlements are calculated / Salary &middot; Leave`,

  // Table i — Salary, Minimum Wage & Double Pay
  "pg.hong-kong.s3.b1": `
<p class="au-table-title"><span class="au-table-num">i.</span> Salary, Minimum Wage &amp; Double Pay</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
    <thead><tr><th>Item</th><th>Rule / 2026 Values</th></tr></thead>
    <tbody>
      <tr><td>Pay Cycle</td><td>Monthly (most common); weekly / daily also compliant</td></tr>
      <tr><td>Payment Deadline</td><td>Employment Ordinance Sec. 23: within 7 days of end of wage period</td></tr>
      <tr><td>Statutory Minimum Wage SMW</td><td>HK$43.1/hour (as of 2026/5/1; previously HK$42.1)</td></tr>
      <tr><td>Double Pay / Bonus 13th Month</td><td>Not statutory; customarily defined by contract / collective agreement; if specified, legally binding</td></tr>
      <tr><td>Overtime</td><td>Employment Ordinance does not mandate overtime pay; depends on contract / industry</td></tr>
      <tr><td>Company Benefits</td><td>Housing allowance / education allowance / medical insurance &mdash; taxable under IRO Section 9</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table ii — Statutory Leave Entitlements
  "pg.hong-kong.s3.b2": `
<p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:36%"><col style="width:36%"></colgroup>
    <thead><tr><th>Item</th><th>Duration / Period</th><th>Pay Ratio / Source</th></tr></thead>
    <tbody>
      <tr><td>Annual Leave</td><td>7 days (1 year) to 14 days (9+ years)</td><td>100% / Employer, based on 12-month average daily wage</td></tr>
      <tr><td>Statutory Holidays</td><td>15 days/year (as of 2026, includes Easter Monday)</td><td>100% / Employer; applies after 3 months continuous contract</td></tr>
      <tr><td>Sick Leave</td><td>Cumulative maximum 120 days</td><td>80% average daily wage / Employer; 4+ days requires medical certificate</td></tr>
      <tr><td>Maternity Leave</td><td>14 weeks (expanded by 4 weeks since 2020)</td><td>80% / Employer; weeks 11&ndash;14 capped at HK$80,000 government subsidy</td></tr>
      <tr><td>Paternity Leave</td><td>5 days per child</td><td>80% / Employer; continuous contract &ge; 40 weeks</td></tr>
      <tr><td>Rest Days</td><td>&ge; 1 day per 7 days</td><td>Designated by employer; applies to continuous contract employees</td></tr>
      <tr><td>Unpaid Leave</td><td>Subject to employer approval</td><td>0% / None</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table iii — Salaries Tax progressive rates + calculation bullets
  "pg.hong-kong.s3.b3": `
<p class="au-table-title"><span class="au-table-num">iii.</span> Salaries Tax &mdash; Progressive Rates 2025/26</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:38%"><col style="width:16%"><col style="width:46%"></colgroup>
    <thead><tr><th>Annual Taxable Income (HKD)</th><th>Rate</th><th>Cumulative Tax</th></tr></thead>
    <tbody>
      <tr><td>First HK$50,000</td><td>2%</td><td>HK$1,000</td></tr>
      <tr><td>Next HK$50,000</td><td>6%</td><td>HK$4,000</td></tr>
      <tr><td>Next HK$50,000</td><td>10%</td><td>HK$9,000</td></tr>
      <tr><td>Next HK$50,000</td><td>14%</td><td>HK$16,000</td></tr>
      <tr><td>Remainder</td><td>17%</td><td>&mdash;</td></tr>
      <tr><td><strong>Standard Rate (Two-tier)</strong></td><td><strong>15% / 16%</strong></td><td>First HK$5M = 15% / thereafter = 16%</td></tr>
      <tr><td><strong>Actual Tax Liability</strong></td><td><strong>Lower of both</strong></td><td>Progressive or Standard, whichever is lower &mdash; automatically calculated on Form BIR60</td></tr>
    </tbody>
  </table>
</div>
<p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>Salaries Tax Calculation Process:</strong></p>
<div class="au-bullet-list" style="margin-top:8px;">
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span style="font-size:14px; color:#475072;">Assessable Income (includes double pay, bonuses, allowances, housing benefit taxable value at 4% / 8% / 10%) minus mandatory MPF employee contribution (ceiling HK$18,000/year) + charitable donations + voluntary MPF + provident fund + life insurance, etc. = Net Income</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span style="font-size:14px; color:#475072;">Minus personal allowances (basic HK$145,000 / married HK$290,000 / dependent child HK$130,000/person) = Net Chargeable Income</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span style="font-size:14px; color:#475072;">Apply 5-tier progressive or two-tier standard rates, whichever is lower</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span style="font-size:14px; color:#475072;">2025/26: 100% tax reduction, maximum HK$3,000</span>
  </div>
</div>
`,

  // Table iv — MPF Operational Details
  "pg.hong-kong.s3.b4": `
<p class="au-table-title"><span class="au-table-num">iv.</span> MPF &mdash; Operational Details</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:30%"><col style="width:35%"><col style="width:35%"></colgroup>
    <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>New Employee Waiting Period</td><td>60 days</td><td>Contributions commence from 1st of following month after hire</td></tr>
      <tr><td>First 30 Days Employee Exemption</td><td>Employee exempt / Employer contributes</td><td>New employees exempt from employee portion first 30 days; employer 5% still required</td></tr>
      <tr><td>Offsetting Mechanism</td><td>Cancelled as of 2025/5/1</td><td>Employer may no longer use employer MPF portion to offset severance/long service payment</td></tr>
      <tr><td>Annual Reconciliation</td><td>Trustee issues</td><td>Annual Benefit Statement issued by December 31</td></tr>
      <tr><td>Contribution Limits Review</td><td>Under review for 2026</td><td>Proposed increase from 7,100/30,000 to 10,500/40,000; monthly ceiling may increase from HK$1,500 to HK$2,000</td></tr>
    </tbody>
  </table>
</div>
`,

  // Marco Insight — S3
  "pg.hong-kong.s3.b5": `
<p class="au-mi-label">MARCO INSIGHT</p>
<p class="au-mi-text">Three commonly underestimated details in Hong Kong Payroll: (1) &ldquo;Place of Residence&rdquo; housing benefit is not taxed at market value; instead, taxable value calculated at 4% / 8% / 10% of income &mdash; key tax saving point for expat employees; (2) MPF offsetting mechanism cancelled as of 2025/5/1, but employer portion accumulated before 2025/4/30 may still be offset; HR must recalculate severance; (3) Self-employed sole proprietors who are also company directors must separately report profits tax and salaries tax to IRD.</p>
`,

  // ── Section 4: Payroll Processing & Compliance ────────────────────────────
  "pg.hong-kong.s4.h":   `Payroll Processing &amp; Compliance`,
  "pg.hong-kong.s4.sub": `Monthly execution, filing and payment, and accounting treatment / Monthly Filings &amp; Journal`,

  // Table i — Payroll Payment Rules
  "pg.hong-kong.s4.b1": `
<p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:25%"><col style="width:30%"><col style="width:45%"></colgroup>
    <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>Payment Frequency</td><td>Once per month / weekly / daily</td><td>Employment Ordinance Sec. 23</td></tr>
      <tr><td>Payment Deadline</td><td>Within 7 days of end of wage period</td><td>Late payment may be penalized by IRD / Labour Department</td></tr>
      <tr><td>Payment Method + Currency</td><td>Electronic transfer &middot; HKD</td><td>Autopay / Cheque / Cash; foreign currency requires employee written consent</td></tr>
      <tr><td>Wage Deduction Limit</td><td>&le; 1/2 monthly salary</td><td>Employment Ordinance Sec. 32; includes MPF, tax deductions</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table ii — Monthly Filing & Payment
  "pg.hong-kong.s4.b2": `
<p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Filing &amp; Payment (No Monthly Tax Filing)</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:26%"><col style="width:18%"><col style="width:16%"><col style="width:16%"><col style="width:24%"></colgroup>
    <thead><tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Remittance Institution</th></tr></thead>
    <tbody>
      <tr><td>MPF Mandatory Contribution</td><td>Employer</td><td>Monthly</td><td>10th of following month</td><td>MPF Trustee (28 companies)</td></tr>
      <tr><td>Salaries Tax Withholding</td><td>Not withheld</td><td>&mdash;</td><td>&mdash;</td><td>Employee self-files on Form BIR60</td></tr>
      <tr><td>New Employee Notification IR56E</td><td>Employer</td><td>Within 3 months of hire</td><td>&mdash;</td><td>IRD (online e-Tax)</td></tr>
      <tr><td>Separation Notification IR56F</td><td>Employer</td><td>Event-triggered</td><td>1 month before separation</td><td>IRD</td></tr>
      <tr><td>Departure Notification IR56G</td><td>Employer</td><td>Event-triggered</td><td>1 month before permanent departure</td><td>IRD; withhold final salary + tax</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table iii — Payroll Journal Mapping Rules (HKFRS)
  "pg.hong-kong.s4.b3": `
<p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules (HKFRS)</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:48%"><col style="width:52%"></colgroup>
    <thead><tr><th>Item</th><th>Account (HKFRS / IFRS Standards)</th></tr></thead>
    <tbody>
      <tr><td>Salary + Allowances + Bonus + 13th Month</td><td>Employee Benefits Expense / Salaries</td></tr>
      <tr><td>MPF Employer Contribution 5%</td><td>Defined Contribution Plan Expense</td></tr>
      <tr><td>MPF Employee Contribution 5%</td><td>Liability &mdash; MPF Trustee Payable</td></tr>
      <tr><td>Salaries Tax Withholding (if any)</td><td>&mdash; (HK does not withhold; employee self-pays)</td></tr>
      <tr><td>Severance / Long Service Payment</td><td>Provisions for Employee Benefits</td></tr>
      <tr><td>Net Salary Payable</td><td>Bank &mdash; HSBC / BOC / SC HK</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table iv — Annual Filings
  "pg.hong-kong.s4.b4": `
<p class="au-table-title"><span class="au-table-num">iv.</span> Annual Filings</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:22%"><col style="width:16%"><col style="width:34%"></colgroup>
    <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>BIR56A Employer&rsquo;s Return of Income</td><td>Employer &rarr; IRD</td><td>Within 1 month of receipt</td><td>2025/26 tax year typically deadline 5/4</td></tr>
      <tr><td>IR56B Employee Annual Income Statement</td><td>Employer &rarr; IRD</td><td>Concurrent with BIR56A</td><td>All employees employed at any time during tax year</td></tr>
      <tr><td>IR56E New Employee Notification</td><td>Employer &rarr; IRD</td><td>Within 3 months of hire</td><td>Notification of new employee appointment</td></tr>
      <tr><td>IR56F Separation Notification</td><td>Employer &rarr; IRD</td><td>1 month before separation</td><td>Report unemployment / retirement / separation circumstances</td></tr>
      <tr><td>IR56G Departure Notification</td><td>Employer &rarr; IRD</td><td>1 month before departure</td><td>Withhold final salary + applicable taxes</td></tr>
      <tr><td>Company Profits Tax</td><td>Employer / Company</td><td>4&ndash;8 months after fiscal year-end</td><td>Form BIR51 + financial statements</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table v — Termination & Foreign Workers
  "pg.hong-kong.s4.b5": `
<p class="au-table-title"><span class="au-table-num">v.</span> Termination &amp; Foreign Workers</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:28%"><col style="width:44%"></colgroup>
    <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>Notice Period</td><td>&ge; 7 days / 1 month</td><td>Employment Ordinance Sec. 6; probation period 7 days</td></tr>
      <tr><td>Severance Payment</td><td>2/3 monthly salary &times; years of service</td><td>Employer retrenchment; continuous contract &ge; 24 months; monthly salary capped at HK$22,500</td></tr>
      <tr><td>Long Service Payment</td><td>2/3 monthly salary &times; years of service</td><td>Non-retrenchment separation; continuous &ge; 5 years; monthly salary capped at HK$22,500</td></tr>
      <tr><td>Unused Annual Leave Cash-out</td><td>Mandatory</td><td>Calculated based on 12-month average daily wage</td></tr>
      <tr><td>IR56F Separation Notification</td><td>Within 1 month before separation</td><td>Must itemize final salary + final tax payment</td></tr>
      <tr><td>Foreign Worker Visa</td><td>GEP / Talented Hong Kong / Talent Programme</td><td>Must coordinate with IR56G departure notification mechanism</td></tr>
    </tbody>
  </table>
</div>
`,

  // Marco Insight — S4
  "pg.hong-kong.s4.b6": `
<p class="au-mi-label">MARCO INSIGHT</p>
<p class="au-mi-text">Four key changes to Hong Kong Payroll in 2026: (1) Statutory Minimum Wage increased to HK$43.1/hour as of 2026/5/1 (+2.36%); adopts &ldquo;annual review&rdquo; mechanism for first time; wage record threshold simultaneously rises to HK$17,600; (2) Statutory Holidays increase to 15 days as of 2026/1/1 (adding Easter Monday), matching number of public holidays; (3) MPF income limits under review, proposed increase from 7,100/30,000 to 10,500/40,000; monthly contribution ceiling may rise from HK$1,500 to HK$2,000; (4) &ldquo;Continuous Contract Rule 468&rdquo; effective 2026/1/1 (68 hours accumulated in 4 weeks replaces 18&times;4 weeks); more part-time employees will qualify for statutory rights.</p>
`,

};
