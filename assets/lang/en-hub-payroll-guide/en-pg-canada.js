window.MARCO_LANG_EN_PG_CANADA = {

  /* ── Hero ── */
  'pg.canada.desc': 'Complete operational guide to Canada payroll &mdash; covering CRA Business Number registration, CPP / CPP2 / EI contributions, federal and provincial income tax withholding, Quebec dual-filing (T4 + RL-1), WCB / WSIB workers&rsquo; compensation, and statutory leave entitlements under federal and provincial Employment Standards Acts.',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.canada.s1.h': 'Scope &amp; Application',

  'pg.canada.s1.b1': `
          <p class="au-table-title">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in Canada (Federal Inc. / Provincial Inc. / Extra-Provincial Registration / Branch).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly hired by the local entity, subject to the federal Canada Labour Code or provincial Employment Standards Act (13 provinces/territories + federal dual-track system).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on the ITA (Income Tax Act), CPP Act, EI Act, and regulations from CRA / Service Canada / Provincial Ministries.</span>
            </div>
          </div>
  `,

  'pg.canada.s1.b2': `This framework covers how companies complete Payroll Set-up in Canada (CRA Business Number + RP / RT / RC accounts + provincial registration + WCB / WSIB registration), monthly payroll calculation (federal + provincial income tax + CPP / CPP2 + EI + provincial QPP / QPIP / EHT, etc.), monthly/quarterly filing and remittance (PD7A remittance form), and annual compliance management (T4 form due early March, ROE separation registration).`,

  'pg.canada.s1.b3': `
          <p class="au-table-title">2026 Key Numbers</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>CPP Base Rate</td><td>5.95% &times; 2 (employee + employer; max $4,230.45)</td></tr>
                <tr><td>CPP2 Enhanced Rate</td><td>4.0% &times; 2 ($74,600 &ndash; $85,000 range; max $416)</td></tr>
                <tr><td>EI Employee Rate</td><td>1.63% (max $1,123.07; employer &times; 1.4)</td></tr>
                <tr><td>YMPE Ceiling</td><td>CAD 74,600 (CPP first tier)</td></tr>
                <tr><td>YAMPE Ceiling</td><td>CAD 85,000 (CPP second tier)</td></tr>
                <tr><td>Federal Lowest Tax Rate</td><td>14% (2026 permanent reduction, previously 15%)</td></tr>
                <tr><td>Basic Personal Amount</td><td>CAD 16,452 (2026 federal)</td></tr>
                <tr><td>T4 Deadline</td><td>Mar 2 (2025 income year; following year 2/28 or 3/2)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key characteristics of Canadian Payroll: (1) Federal + provincial dual-track system &mdash; federal tax is remitted through CRA as a one-stop process, but Quebec is the exception (QPP / QPIP / Quebec Income Tax must be filed separately with Revenu Qu&eacute;bec; employees receive both a T4 and an RL-1); (2) CPP has been a two-tier system since 2024 (CPP1 + CPP2): earnings exceeding YMPE $74,600 enter CPP2, with employer/employee each paying 4% up to YAMPE $85,000; (3) Workers&rsquo; compensation insurance (WCB / WSIB / CNESST) is entirely employer-funded, with industry risk classification rates ranging from 0.2% to 8%+, and must be registered separately by province.</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.canada.s2.h': 'Payroll Set-up',
  'pg.canada.s2.sub': 'How to establish legal payroll capability in Canada',

  'pg.canada.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Entity, CRA Business Number &amp; Provincial Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:20%"><col style="width:16%"><col style="width:16%"><col style="width:48%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Company Registration (Federal/Provincial Inc.)</td><td>Canada local entity</td><td>Yes</td><td>Federal via Corporations Canada or provincial Corporate Registry</td></tr>
                <tr><td>CRA Business Number (BN)</td><td>Canada local entity</td><td>Yes</td><td>9 digits + sub-account suffix; register online via BRO</td></tr>
                <tr><td>RP Account (Payroll Account)</td><td>Canada local entity</td><td>Yes</td><td>For employee payroll withholding; must be opened before the first employee&rsquo;s start date</td></tr>
                <tr><td>RT Account (GST/HST)</td><td>Canada local entity</td><td>Depends on revenue</td><td>Mandatory if annual revenue &gt; CAD 30,000</td></tr>
                <tr><td>WCB / WSIB / CNESST</td><td>Canada local entity</td><td>Yes</td><td>By province; industry risk classification; employer-only contribution</td></tr>
                <tr><td>Quebec Registration Number (NEQ)</td><td>Applicable if employing Quebec employees</td><td>Yes</td><td>Registraire des entreprises + RQ number</td></tr>
                <tr><td>Written Employment Contract</td><td>Employer + Employee</td><td>Recommended</td><td>Not mandatory in most provinces, but highly recommended in practice</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> CPP + CPP2 + EI + Provincial Premiums (2026)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:22%"><col style="width:22%"><col style="width:34%"></colgroup>
              <thead><tr><th>Item</th><th>Employee Contribution</th><th>Employer Contribution</th><th>Base / Ceiling</th></tr></thead>
              <tbody>
                <tr><td>CPP1 (Base)</td><td>5.95%</td><td>5.95%</td><td>$3,500 &ndash; $74,600; max $4,230.45/person</td></tr>
                <tr><td>CPP2 (Enhanced)</td><td>4.0%</td><td>4.0%</td><td>$74,600 &ndash; $85,000; max $416/person</td></tr>
                <tr><td>EI (Federal, Canada excluding Quebec)</td><td>1.63%</td><td>1.4 &times; employee rate</td><td>$0 &ndash; $68,900; employee max $1,123.07</td></tr>
                <tr><td>QPP (Quebec, replaces CPP)</td><td>6.4%</td><td>6.4%</td><td>Quebec employees; includes 5.4% base + 1% enhanced</td></tr>
                <tr><td>QPIP (Quebec Parental Insurance)</td><td>2026 reduced by approx. &ndash;8%</td><td>Employer &asymp; 1.4 &times; employee rate</td><td>Quebec only; MIE $98,000</td></tr>
                <tr><td>EHT (Ontario)</td><td>&mdash;</td><td>&le; 1.95%</td><td>Employer-only contribution; applies when annual payroll &gt; $1M; threshold varies by province</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.canada.s3.h': 'Payroll Calculation',
  'pg.canada.s3.sub': 'How salary, tax, and employee entitlements are calculated',

  'pg.canada.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary, Minimum Wage &amp; Vacation Pay</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:72%"></colgroup>
              <thead><tr><th>Item</th><th>Rule / 2026 Values</th></tr></thead>
              <tbody>
                <tr><td>Pay Cycle</td><td>Bi-weekly is the most common; Weekly / Semi-monthly / Monthly are also compliant</td></tr>
                <tr><td>Minimum Wage</td><td>By province: BC $18.25 (effective 2026/6/1) / ON $17.95 (effective 2026/10/1) / QC $16.60 (effective 2026/5/1) / AB $15.00</td></tr>
                <tr><td>Annual Leave Vacation Pay</td><td>&ge; 4% (2 weeks), increasing to 6% (3 weeks); incremental based on years of service</td></tr>
                <tr><td>Overtime</td><td>Typically 1.5&times;; ON &gt; 44h / BC &gt; 40h / Federal &gt; 40h</td></tr>
                <tr><td>Public Holiday Stat Holiday Pay</td><td>Calculated by provincial formula: ON = 4 weeks&rsquo; earnings &divide; 20; BC = earnings in prior 30 days &divide; working days</td></tr>
                <tr><td>13th Month</td><td>Not statutory; at employer&rsquo;s discretion; performance bonuses are common rather than a guaranteed 13th month salary</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:38%"><col style="width:40%"></colgroup>
              <thead><tr><th>Item</th><th>Duration / Period</th><th>Pay Ratio / Source</th></tr></thead>
              <tbody>
                <tr><td>Annual Leave Vacation</td><td>2&ndash;3 weeks/year (based on years of service)</td><td>100% / Employer; calculated at 4% / 6% of wages</td></tr>
                <tr><td>Public Holidays</td><td>5 federal + 5&ndash;9 provincial days</td><td>100% / Employer; calculated by provincial formula</td></tr>
                <tr><td>Sick Leave</td><td>&ge; 3 days (many provinces mandate 5&ndash;10 paid days)</td><td>100% / Employer; ON has 3 unpaid days + employer-defined policy</td></tr>
                <tr><td>Maternity Leave</td><td>17&ndash;18 weeks</td><td>55% via EI, max $63,300 / 18-month option</td></tr>
                <tr><td>Paternity Leave (QC)</td><td>5 weeks (QC RQAP)</td><td>70% / QPIP; federal EI parental leave sharing</td></tr>
                <tr><td>Parental Leave</td><td>Standard 35w / Extended 61w</td><td>EI 55% (max) or 33% (extended)</td></tr>
                <tr><td>Bereavement / Marriage / Voting Leave</td><td>3&ndash;5 days per occurrence</td><td>Some provinces; refer to provincial ESA for details</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Federal Income Tax &mdash; 2026 Brackets</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:14%"><col style="width:56%"></colgroup>
              <thead><tr><th>Annual Taxable Income (CAD)</th><th>Rate</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>&le; 58,523</td><td>14%</td><td>2026 permanent reduction (previously 15%)</td></tr>
                <tr><td>58,523 &ndash; 117,045</td><td>20.5%</td><td>&mdash;</td></tr>
                <tr><td>117,045 &ndash; 181,440</td><td>26%</td><td>&mdash;</td></tr>
                <tr><td>181,440 &ndash; 258,482</td><td>29%</td><td>&mdash;</td></tr>
                <tr><td>&gt; 258,482</td><td>33%</td><td>Highest bracket</td></tr>
                <tr><td>Basic Personal Amount</td><td>CAD 16,452</td><td>Clawed back above $177,882</td></tr>
                <tr><td>Provincial Tax</td><td>4% &ndash; 25.75%</td><td>By province; BC / ON / AB / QC each differ; employer withholds simultaneously</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s3.b4': `Federal + Provincial Tax Calculation Process: (1) Gross Pay minus RPP / RRSP / Union Dues / Childcare = Net Income; (2) Minus Basic Personal Amount = Taxable Income; (3) Apply federal 5-bracket progressive rates + provincial rates (e.g., BC 5.06% &ndash; 20.5%; ON 5.05% &ndash; 13.16%; AB flat 10% + progressive; QC 15% &ndash; 25.75%); (4) Apply tax credits for CPP / EI / charitable donations, etc. CRA publishes the T4127 Payroll Deductions Formulas and the TOD online calculator for reference.`,

  'pg.canada.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> CPP, CPP2 &amp; EI &mdash; 2026 Operational Detail</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:30%"><col style="width:40%"></colgroup>
              <thead><tr><th>Item</th><th>2026 Values</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>CPP YMPE / YAMPE</td><td>$74,600 / $85,000</td><td>Two-tier system; YAMPE is 14% higher than YMPE</td></tr>
                <tr><td>CPP1 Employee + Employer</td><td>5.95% / 5.95%</td><td>Max $4,230.45/person/year</td></tr>
                <tr><td>CPP2 Employee + Employer</td><td>4.00% / 4.00%</td><td>$74,600 &ndash; $85,000 range; max $416/person</td></tr>
                <tr><td>EI Employee (excluding Quebec)</td><td>1.63%</td><td>Max $1,123.07; MIE = $68,900</td></tr>
                <tr><td>EI Employer (excluding Quebec)</td><td>2.282% (1.4&times;)</td><td>Adjustable via industry EI premium reduction program</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s3.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three commonly underestimated details in Canadian Payroll: (1) Quebec is a &ldquo;dual-filing&rdquo; province &mdash; employees receive both a T4 and an RL-1; employers must remit to both CRA and Revenu Qu&eacute;bec; (2) CPP2 was introduced in 2024; annual salary exceeding $74,600 enters the second tier, with employee/employer each paying an additional 4%; (3) EHT (Employer Health Tax) exists in ON / QC / MB / BC / NL and is employer-only; in ON it applies at 1.95% when annual payroll exceeds $1M.</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.canada.s4.h': 'Payroll Processing &amp; Compliance',
  'pg.canada.s4.sub': 'Monthly execution, filing and payment, and accounting treatment',

  'pg.canada.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:40%"><col style="width:38%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Bi-weekly / Weekly most common</td><td>By provincial ESA; ON requires at least once per month</td></tr>
                <tr><td>Payment Method + Currency</td><td>Direct deposit &middot; CAD</td><td>Cheque is compliant but rare; foreign currency requires employee written consent</td></tr>
                <tr><td>Pay Stub</td><td>Mandatory</td><td>Must itemize gross pay, deduction details, net pay; YTD cumulative totals</td></tr>
                <tr><td>Wage Deduction Limit</td><td>By province; typically &le; 30% of net pay</td><td>Requires employee written consent (unless statutory deduction)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Remittance to CRA &amp; Revenu Qu&eacute;bec</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18%"><col style="width:13%"><col style="width:13%"><col style="width:24%"><col style="width:32%"></colgroup>
              <thead><tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Remittance Institution</th></tr></thead>
              <tbody>
                <tr><td>PD7A Federal Remittance</td><td>Employer</td><td>By payroll size</td><td>15th of following month / 25th of each month / quarterly</td><td>CRA (includes federal tax + CPP + EI)</td></tr>
                <tr><td>TPZ-1015 Quebec Remittance</td><td>Employer</td><td>By payroll size</td><td>15th of following month / 25th of each month</td><td>Revenu Qu&eacute;bec (includes QC tax + QPP + QPIP)</td></tr>
                <tr><td>ROE Record of Employment</td><td>Employer &rarr; ESDC</td><td>Within 5 days of separation</td><td>Online submission</td><td>Service Canada</td></tr>
                <tr><td>WCB / WSIB / CNESST</td><td>Employer</td><td>Monthly / Quarterly</td><td>By province</td><td>BC WorkSafe / ON WSIB / QC CNESST</td></tr>
                <tr><td>EHT (Provincial)</td><td>Employer</td><td>Monthly / Quarterly</td><td>By province</td><td>ON Ministry of Finance, etc.</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules (ASPE / IFRS)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>Item</th><th>Account (ASPE / IFRS Standards)</th></tr></thead>
              <tbody>
                <tr><td>Salary + Bonus + Vacation Pay</td><td>Employee Benefits Expense / Wages</td></tr>
                <tr><td>CPP / CPP2 / EI Employer Portion</td><td>Employer Contributions Expense</td></tr>
                <tr><td>WCB / WSIB Premiums</td><td>Workers&rsquo; Compensation Expense</td></tr>
                <tr><td>EHT (Employer Health Tax)</td><td>Payroll Taxes Expense</td></tr>
                <tr><td>Federal + Provincial Tax Withheld</td><td>Liability &mdash; Government Remittances Payable</td></tr>
                <tr><td>Net Salary Payable</td><td>Bank &mdash; RBC / TD / BMO / Scotia / CIBC</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Filings</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:16%"><col style="width:22%"><col style="width:40%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>T4 + T4 Summary</td><td>Employer &rarr; CRA</td><td>February 28 of following year (2026: 3/2)</td><td>All employees&rsquo; annual income + deduction details</td></tr>
                <tr><td>RL-1 (Quebec)</td><td>Employer &rarr; Revenu Qu&eacute;bec</td><td>Last business day of February of following year</td><td>Quebec employees&rsquo; provincial tax form</td></tr>
                <tr><td>T4A (Other Income)</td><td>Employer &rarr; CRA</td><td>February 28 of following year</td><td>Non-employment income: allowances / self-employment / pensions</td></tr>
                <tr><td>WCB / WSIB Annual Return</td><td>Employer</td><td>By province (typically March&ndash;April)</td><td>Annual actual payroll reconciliation</td></tr>
                <tr><td>EHT Annual Return (Ontario)</td><td>Employer</td><td>March 15 of following year</td><td>Annual EHT net reconciliation</td></tr>
                <tr><td>Corporate T2 Tax Return</td><td>Employer / Company</td><td>6 months after fiscal year-end</td><td>Federal Corporate Income Tax Return</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Termination &amp; Foreign Workers</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:40%"><col style="width:38%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Notice Period</td><td>1&ndash;8 weeks based on years of service</td><td>Varies by provincial ESA; ON = 1 week/year, capped at 8 weeks</td></tr>
                <tr><td>Severance Pay (ON)</td><td>1 week per year of service</td><td>Mandatory when annual payroll &gt; $2.5M or &ge; 50 employees</td></tr>
                <tr><td>Unused Vacation Cash-out</td><td>Mandatory</td><td>Calculated based on accumulated unused vacation pay at 4% / 6%</td></tr>
                <tr><td>ROE Record of Employment</td><td>Within 5 days of separation</td><td>Submit online to Service Canada; includes Reason Code</td></tr>
                <tr><td>Final Pay Deadline</td><td>By provincial ESA</td><td>ON must pay on the regular pay date; BC requires immediate payment</td></tr>
                <tr><td>Foreign Worker Visa</td><td>Work Permit (LMIA) / GTS</td><td>Open work permit / employer-specific; must renew before visa expiry</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key changes to Canadian Payroll in 2026: (1) Federal lowest tax rate permanently reduced from 15% to 14%, BPA increased to $16,452, saving employees approximately $400&ndash;840 annually; (2) CPP YMPE increased to $74,600 / YAMPE $85,000, with CPP2 entering its third full year; (3) Quebec QPIP rate reduced by approximately &ndash;8%, but QPP remains unchanged &mdash; Quebec employers are advised to re-verify RL-1 withholding calculations.</p>
  `,

};
