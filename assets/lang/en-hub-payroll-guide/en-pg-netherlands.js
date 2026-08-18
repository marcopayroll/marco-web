/* Payroll Guide — Netherlands page content (hr-knowledge-hub-payroll-guide-netherlands.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_NETHERLANDS = {
  'pg.netherlands.desc': `A practical guide to Netherlands payroll compliance — covering B.V. entity set-up, wage tax (loonbelasting) and national insurance withholding, employer contributions (AWf, Aof, Zvw), vakantiegeld 8%, statutory sick pay continuity for up to 2 years, the 30% Ruling for incoming talent, and annual Loonaangifte filings with the Belastingdienst.`,

  'pg.netherlands.s1.h': `Scope & Application`,

  'pg.netherlands.s1.sub': `Applicable Scope and Legal Basis / Wet op de loonbelasting &middot; Sociale Verzekeringswetten &middot; Zvw`,

  'pg.netherlands.s1.b1': `
          <p class="article-p">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in the Netherlands (B.V. &mdash; Besloten Vennootschap)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly employed by the Dutch local entity, subject to the Dutch Civil Code Book 7 (Burgerlijk Wetboek Boek 7)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on the Wage Tax Act (Wet op de loonbelasting), Social Insurance Acts, and the Health Insurance Act (Zvw)</span>
            </div>
          </div>
`,

  'pg.netherlands.s1.b2': `This framework explains how companies complete Payroll Set-up in the Netherlands (KvK + Belastingdienst registration + mandatory insurance), monthly payroll calculation (loonbelasting + national insurance + employer social premiums + vakantiegeld), monthly filing and payment (Loonaangifte to the Belastingdienst), and annual compliance management (Jaaropgave + WKR settlement).`,

  'pg.netherlands.s1.b3': `
          <p class="au-data-cards-label">2026 KEY NUMBERS</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Minimum Wage</span>
                <span class="au-dc-value">EUR 14.71/hour</span>
                <span class="au-dc-note">Age 21+; effective January 2026</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Vakantiegeld</span>
                <span class="au-dc-value">8%</span>
                <span class="au-dc-note">Statutory holiday allowance; accrued monthly</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Zvw Healthcare</span>
                <span class="au-dc-value">6.10%</span>
                <span class="au-dc-note">Employer-borne; cap EUR 79,412/year</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">National Insurance</span>
                <span class="au-dc-value">27.65%</span>
                <span class="au-dc-note">AOW + Anw + Wlz; Bracket 1 only</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Employer Total Burden</span>
                <span class="au-dc-value">&asymp; 17% &ndash; 23%</span>
                <span class="au-dc-note">AWf + Aof + Whk + Zvw combined</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Sick Pay Continuation</span>
                <span class="au-dc-value">Up to 2 years</span>
                <span class="au-dc-note">Minimum 70% of salary; most CAOs 100%/70%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Transition Payment</span>
                <span class="au-dc-value">1/3 month/year</span>
                <span class="au-dc-note">Transitievergoeding; no cap since 2020</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">30% Ruling</span>
                <span class="au-dc-value">Up to 5 years</span>
                <span class="au-dc-note">Salary threshold EUR 48,013/year</span>
              </div>
            </div>
          </div>
`,

  'pg.netherlands.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">The Netherlands Payroll system is multi-layered, operating under a PAYE withholding regime. Employers must withhold wage tax (loonbelasting) and national insurance contributions (volksverzekeringen) from employee salaries on a monthly basis, while also bearing employer-side employee insurance (werknemersverzekeringen) and healthcare contributions (Zvw reduced to 6.10% in 2026, with total employer burden approximately 17&ndash;23% of salary). In addition, there is a statutory mandatory 8% holiday allowance (vakantiegeld), minimum 20 days annual leave, and sick pay continuation for up to 2 years. Special attention must be paid to industry collective labour agreements (CAO) which may impose additional obligations.</p>
`,

  'pg.netherlands.s2.h': `Payroll Set-up`,

  'pg.netherlands.s2.sub': `How to establish legal payroll capability in the Netherlands / KvK &middot; Belastingdienst &middot; Insurance &amp; Pension`,

  'pg.netherlands.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> KvK &amp; Belastingdienst Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:32%"><col style="width:20%"><col style="width:12%"><col style="width:36%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>KvK Registration</td><td>Dutch B.V.</td><td>Yes</td><td>Register with the Dutch Chamber of Commerce (Kamer van Koophandel) to obtain a KvK number</td></tr>
                <tr><td>Tax Authority Registration</td><td>Dutch B.V.</td><td>Yes</td><td>Obtain a Loonheffingennummer (wage tax number)</td></tr>
                <tr><td>BSN Collection</td><td>Processed by employer</td><td>Yes</td><td>Collect each employee&rsquo;s Burgerservicenummer (citizen service number)</td></tr>
                <tr><td>Employment Contract</td><td>Employer</td><td>Yes</td><td>Written contract is mandatory, specifying salary, working hours, and duties</td></tr>
                <tr><td>Payroll Software / Service Provider</td><td>Employer</td><td>Yes</td><td>Must support Dutch tax tables and electronic filing</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Mandatory Insurance &amp; Pension</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Health Insurance (Zvw)</td><td>Yes</td><td>Employees must hold Dutch basic health insurance; employer must contribute at 6.10% (2026)</td></tr>
                <tr><td>Employee Insurance (WW/WIA/ZW)</td><td>Yes</td><td>Borne solely by the employer; covers unemployment, disability, and sick leave</td></tr>
                <tr><td>Occupational Pension</td><td>Industry-dependent</td><td>If subject to an industry pension fund (Bedrijfstakpensioenfonds), enrolment is mandatory</td></tr>
                <tr><td>Employer Liability Insurance</td><td>Recommended</td><td>Not mandatory, but a market-standard practice</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Bank Account &amp; Record Keeping</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>EUR Payroll Bank Account</td><td>Yes</td><td>Local euro account for paying employee salaries</td></tr>
                <tr><td>Payroll Record Retention</td><td>Yes</td><td>All payroll records must be retained for at least 7 years</td></tr>
                <tr><td>Pay Slip (Loonstrook)</td><td>Yes</td><td>A detailed pay slip must be provided each pay period (paper or electronic)</td></tr>
                <tr><td>Monthly Tax Filing</td><td>Yes</td><td>Filed electronically to the Belastingdienst via payroll software</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s3.h': `Payroll Calculation`,

  'pg.netherlands.s3.sub': `How salary, tax, and employee entitlements are calculated / Salary &middot; Leave &middot; Loonbelasting &middot; Employer Contributions`,

  'pg.netherlands.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary Calculation &amp; Components</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule / 2026 Value</th></tr></thead>
              <tbody>
                <tr><td>Pay Basis</td><td>Monthly salary is most common; some industries use a 4-week pay cycle</td></tr>
                <tr><td>Pay Cycle</td><td>Calendar Month</td></tr>
                <tr><td>Proration Scenarios</td><td>Month of onboarding, month of termination, unpaid leave</td></tr>
                <tr><td>Proration Basis</td><td>Based on contractually agreed working days or calendar days</td></tr>
                <tr><td>Holiday Allowance (Vakantiegeld)</td><td>Statutory minimum 8%; typically paid in May; accrued monthly</td></tr>
                <tr><td>13th Month / Year-end Bonus</td><td>Not statutory; common industry practice (usually stipulated by CAO or contract)</td></tr>
                <tr><td>Minimum Wage</td><td>EUR 14.71/hour (January 2026, age 21 and above); adjusted semi-annually</td></tr>
                <tr><td>Decimal Handling</td><td>Rounded to 2 decimal places (EUR)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s3.b2': `
          <p class="article-p"><strong>Wage (Loon) Components:</strong></p>
          <div class="au-bullet-list">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Base salary, overtime pay, shift allowances, commission, bonuses</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Holiday allowance (8% vakantiegeld), accrued monthly, paid annually or monthly</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>13th month (if stipulated by contract / CAO)</span>
            </div>
          </div>
`,

  'pg.netherlands.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:35%"><col style="width:35%"></colgroup>
              <thead><tr><th>Leave Type</th><th>Days / Rules</th><th>Leave Pay</th></tr></thead>
              <tbody>
                <tr><td>Annual Leave (Statutory)</td><td>Minimum 20 days (weekly hours &times; 4); most employers offer 25&ndash;30 days</td><td>100% normal salary</td></tr>
                <tr><td>Annual Leave Expiry</td><td>Statutory leave must be used within 6 months after the accrual year ends</td><td>&mdash;</td></tr>
                <tr><td>Public Holidays</td><td>No statutory entitlement; typically 8&ndash;9 days per CAO / contract</td><td>Per contract</td></tr>
                <tr><td>Sick Leave</td><td>Up to 2 years (104 weeks)</td><td>Year 1: at least 70%; Year 2: at least 70% (most CAOs: 100%/70%)</td></tr>
                <tr><td>Maternity Leave</td><td>16 weeks (4&ndash;6 weeks prenatal + 10&ndash;12 weeks postnatal)</td><td>UWV pays 100% (capped at maximum daily wage)</td></tr>
                <tr><td>Paternity Leave</td><td>1 week paid + 5 weeks additional (UWV 70%)</td><td>1 week at 100% by employer; 5 weeks at 70% by UWV</td></tr>
                <tr><td>Parental Leave</td><td>26 &times; weekly working hours per child (until age 8)</td><td>First 9 weeks at 70% by UWV; remainder unpaid</td></tr>
                <tr><td>Short-term Care Leave</td><td>2 &times; weekly working hours per year</td><td>70% of salary (not less than minimum wage)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Loonbelasting &amp; Volksverzekeringen (Employee Side)</p>
          <p class="article-p">The Netherlands operates a PAYE system. Employers withhold wage tax and national insurance contributions from employee salaries each month and remit them to the tax authority (Belastingdienst).</p>
          <p class="au-table-title">2026 Combined Wage Tax + National Insurance Rates (Below Retirement Age):</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18%"><col style="width:37%"><col style="width:18%"><col style="width:27%"></colgroup>
              <thead><tr><th>Bracket</th><th>Annual Taxable Income</th><th>Combined Rate</th><th>Composition</th></tr></thead>
              <tbody>
                <tr><td>Bracket 1</td><td>Up to EUR 38,883</td><td>35.75%</td><td>Wage tax 8.10% + National insurance 27.65%</td></tr>
                <tr><td>Bracket 2</td><td>EUR 38,883 &ndash; 78,426</td><td>37.56%</td><td>Wage tax only (national insurance does not apply beyond Bracket 1)</td></tr>
                <tr><td>Bracket 3</td><td>Above EUR 78,426</td><td>49.50%</td><td>Wage tax only</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-table-title">National Insurance (Volksverzekeringen) Breakdown:</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:20%"><col style="width:45%"></colgroup>
              <thead><tr><th>Insurance Item</th><th>Rate (2026)</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td>AOW (State Pension)</td><td>17.90%</td><td>State pension</td></tr>
                <tr><td>Anw (Survivors&rsquo; Insurance)</td><td>0.10%</td><td>Survivors&rsquo; benefits</td></tr>
                <tr><td>Wlz (Long-term Care)</td><td>9.65%</td><td>Long-term care insurance</td></tr>
                <tr><td><strong>Total</strong></td><td><strong>27.65%</strong></td><td>Levied only on Bracket 1 income (up to EUR 38,883)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Unlike Hong Kong, the Netherlands operates a full PAYE withholding system. Employers must calculate, withhold, and remit wage tax and national insurance contributions monthly. National insurance is levied only on Bracket 1 income (up to EUR 38,883). Tax credits (algemene heffingskorting up to EUR 3,115, arbeidskorting up to EUR 5,685) significantly reduce the effective tax burden and are automatically factored in through the wage tax tables.</p>
`,

  'pg.netherlands.s3.b6': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Werknemersverzekeringen &amp; Zvw (Employer Side)</p>
          <p class="article-p">The following contributions are borne entirely by the employer and may not be deducted from employee salaries. 2026 maximum contribution base: EUR 79,412/year.</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:18%"><col style="width:37%"></colgroup>
              <thead><tr><th>Contribution Item</th><th>Rate (2026)</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>AWf Low Rate (Unemployment)</td><td>2.74%</td><td>Indefinite contracts, non-on-call</td></tr>
                <tr><td>AWf High Rate (Unemployment)</td><td>7.74%</td><td>Flexible / temporary contracts</td></tr>
                <tr><td>Aof High Rate (Large/Medium Employers, Disability)</td><td>7.63%</td><td>WIA/WAO fund</td></tr>
                <tr><td>Aof Low Rate (Small Employers, Disability)</td><td>6.27%</td><td>Applicable to small employers</td></tr>
                <tr><td>Wko Surcharge (Childcare)</td><td>0.50%</td><td>Added on top of Aof</td></tr>
                <tr><td>Whk (Return-to-Work Fund)</td><td>Average &asymp; 1.33%</td><td>Differentiated by industry and employer size</td></tr>
                <tr><td>Zvw (Healthcare Contribution)</td><td>6.10%</td><td>Income-based; contribution base cap EUR 79,412</td></tr>
                <tr><td>Employer Total Burden (Estimate)</td><td>&asymp; 17&ndash;23%</td><td>Varies by contract type, employer size, and industry</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s4.h': `Payroll Processing & Compliance`,

  'pg.netherlands.s4.sub': `Monthly execution, filing and payment, and accounting treatment / Loonaangifte &middot; Annual Filing &middot; Termination &middot; 30% Ruling`,

  'pg.netherlands.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:28%"><col style="width:42%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Monthly</td><td>Typically paid on the last business day of each month</td></tr>
                <tr><td>Payment Method</td><td>Bank transfer</td><td>Transferred to the employee&rsquo;s euro account</td></tr>
                <tr><td>Pay Slip (Loonstrook)</td><td>Statutorily required</td><td>Must show gross pay, deductions, net pay, and applicable tax credits</td></tr>
                <tr><td>Holiday Allowance Payment</td><td>May&ndash;June each year</td><td>8% of annual salary; may be distributed monthly by agreement</td></tr>
                <tr><td>Record Retention</td><td>7 years</td><td>Includes payroll records, tax filings, and contracts</td></tr>
                <tr><td>Wage Deduction Restrictions</td><td>Subject to statutory limitations</td><td>Only deductions permitted under the Dutch Civil Code</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Loonaangifte (Wage Tax Filing)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:18%"><col style="width:14%"><col style="width:16%"><col style="width:22%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Wage Tax Filing</td><td>Employer</td><td>Monthly</td><td>Last day of following month</td><td>Filed electronically via payroll software</td></tr>
                <tr><td>Wage Tax + National Insurance Payment</td><td>Employer</td><td>Monthly</td><td>Last day of following month</td><td>Combined remittance to the Belastingdienst</td></tr>
                <tr><td>Employee Insurance Contributions</td><td>Employer</td><td>Monthly</td><td>Synchronized with Loonaangifte</td><td>AWf / Aof / Whk calculated per employee</td></tr>
                <tr><td>Zvw Contribution</td><td>Employer</td><td>Monthly</td><td>Synchronized with Loonaangifte</td><td>6.10% income-related contribution</td></tr>
                <tr><td>Pension Contributions</td><td>Employer</td><td>Monthly</td><td>Per pension plan schedule</td><td>If applicable, remitted to the pension institution</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:55%"><col style="width:45%"></colgroup>
              <thead><tr><th>Item</th><th>Account</th></tr></thead>
              <tbody>
                <tr><td>Gross Salary + Holiday Allowance (Vakantiegeld)</td><td>Payroll Expense</td></tr>
                <tr><td>Employer Social Security (AWf, Aof, Whk)</td><td>Payroll Expense</td></tr>
                <tr><td>Employer Zvw (6.10%)</td><td>Payroll Expense</td></tr>
                <tr><td>Employer Pension Contribution</td><td>Payroll Expense</td></tr>
                <tr><td>Employee Wage Tax + NI (withheld)</td><td>Payroll Tax Liability</td></tr>
                <tr><td>Employee Pension (withheld)</td><td>Pension Liability</td></tr>
                <tr><td>Net Pay</td><td>Cash / Bank</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s4.b4': `Note: Unlike Hong Kong, the Netherlands operates a PAYE system, so the journal always includes a Payroll Tax Liability account. Employer-side social insurance adds approximately 17&ndash;23% in additional costs.`,

  'pg.netherlands.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Filing &amp; Reporting</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:18%"><col style="width:18%"><col style="width:29%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Annual Wage Summary (Jaaropgave)</td><td>Employer</td><td>End of January following year</td><td>Issue to each employee: annual summary of wages, taxes, and social security</td></tr>
                <tr><td>Annual Loonaangifte Correction</td><td>Employer</td><td>Before 1 February following year</td><td>Correct errors in monthly filings</td></tr>
                <tr><td>WKR Work-related Costs Filing</td><td>Employer</td><td>With final monthly Loonaangifte</td><td>Annual WKR settlement; 80% final levy on amounts exceeding the tax-free allowance</td></tr>
                <tr><td>UWV Annual Filing</td><td>Employer</td><td>Per UWV schedule</td><td>Employee insurance data</td></tr>
                <tr><td>Personal Income Tax Filing</td><td>Employee</td><td>Before 1 May following year</td><td>Employee&rsquo;s annual personal tax return</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s4.b6': `
          <p class="article-p"><strong>Work-related Costs Scheme (WKR / Werkkostenregeling):</strong></p>
          <div class="au-bullet-list">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Tax-free allowance: 2% of the first EUR 400,000 of total wage bill, 1.8% on the excess</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Covers tax-free benefits: employee events, mobile phones, parking, gifts, etc.</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Amounts exceeding the tax-free allowance are subject to 80% final levy payable by the employer</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Specific exemptions (e.g. travel allowance EUR 0.23/km, professional training) do not count against the allowance</span>
            </div>
          </div>
`,

  'pg.netherlands.s4.b7': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Termination Settlement</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:32%"><col style="width:68%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Termination Routes</td><td>Mutual agreement / UWV approval (economic redundancy) / Court (personal reasons) / Probation period / Urgent cause</td></tr>
                <tr><td>Notice Period</td><td>Employee: 1 month; Employer: 1&ndash;4 months based on tenure; adjustable by contract / CAO</td></tr>
                <tr><td>Transition Payment (Transitievergoeding)</td><td>1/3 monthly salary per full year of service (cap removed since 2020); applies to all termination scenarios</td></tr>
                <tr><td>Unused Annual Leave Cash-out</td><td>All unused leave (statutory + non-statutory) settled upon termination</td></tr>
                <tr><td>Holiday Allowance</td><td>Prorated vakantiegeld settled and paid with the final salary</td></tr>
                <tr><td>Final Payment Deadline</td><td>By the next regular pay date or as stipulated by contract</td></tr>
                <tr><td>Non-compete Clause</td><td>Must be agreed in writing; enforceability is limited; fixed-term contracts require additional justification</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s4.b8': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Employee protection in the Netherlands is very strict. The transition payment (transitievergoeding) applies to nearly all termination scenarios, including non-renewal of fixed-term contracts. The formula is 1/3 monthly salary per full year of service, calculated from the first day of employment. Unlike Hong Kong&rsquo;s severance pay / long service payment system, the Netherlands has no service year cap (the monetary cap was removed in 2020). Employers must also strictly comply with procedural requirements: terminations without UWV or court approval can be reversed.</p>
`,

  'pg.netherlands.s4.b9': `
          <p class="au-table-title"><span class="au-table-num">vi.</span> 30% Ruling &mdash; Special Tax Facility for Incoming Employees</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Eligibility Criteria</td><td>Recruited from abroad; possesses specific professional expertise; meets minimum salary threshold</td></tr>
                <tr><td>Benefit</td><td>Up to 30% of salary treated as tax-free allowance (compensation for extraterritorial costs)</td></tr>
                <tr><td>Maximum Duration</td><td>5 years</td></tr>
                <tr><td>Salary Threshold (2026)</td><td>Taxable income EUR 48,013/year (EUR 36,497 for those under 30 with a master&rsquo;s degree)</td></tr>
                <tr><td>Salary Cap</td><td>EUR 262,000/year (Balkenendenorm standard)</td></tr>
                <tr><td>Major Change in 2027</td><td>Benefit percentage reduced from 30% to 27%; partial foreign taxpayer transitional rules expire at end of 2026</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.netherlands.s4.b10': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">The 30% Ruling can still deliver significant tax savings for employers recruiting international talent, but the benefit is being tightened. Since 2025, the partial foreign taxpayer status option has been abolished (transitional rules apply until end of 2026). From 2027, the benefit percentage will be reduced from 30% to 27%. Additionally, the 2026 ETK regime has been tightened: certain extraterritorial cost items such as utility bills and home-country phone calls have lost their tax-exempt status. Employers must ensure all eligibility documentation is complete and may only apply the ruling in Payroll after receiving Belastingdienst approval.</p>
`,
};
