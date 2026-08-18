/* Payroll Guide — Singapore page content (hr-knowledge-hub-payroll-guide-singapore.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_SINGAPORE = {
  'pg.singapore.desc': `A complete guide to running payroll in Singapore — covering ACRA registration, CPF dual contributions (employee 20% + employer 17%), OW ceiling S$8,000, Skills Development Levy, AIS Auto-Inclusion IR8A filing, progressive income tax (0%–24%), and 2026 updates including the new Shared Parental Leave and revised CPF rates for 55–65 year age groups.`,

  'pg.singapore.s1.h': `Scope & Application`,

  'pg.singapore.s1.sub': `Scope and Legal Basis / Employment Act &middot; CPF Act &middot; ITA &middot; MOM &middot; IRAS`,

  'pg.singapore.s1.b1': `
          <p class="au-section-sep">This document applies to:</p>
          <div class="au-bullet-list">
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Companies that have established a local legal entity in Singapore (Private Limited Company / Branch Office / Subsidiary)</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Employees directly hired by the local entity, subject to the Employment Act (salary &le; S$4,500 fully protected / Part IV) and Retirement &amp; Re-employment Act</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Payroll compliance based on Employment Act, CPF Act, Income Tax Act, and regulations from MOM / IRAS / CPF Board</span></div>
          </div>
`,

  'pg.singapore.s1.b2': `<strong>This framework covers:</strong> how companies complete Payroll Set-up in Singapore (ACRA registration + UEN + GIRO + CPF + Skills Development Levy + FWL), monthly salary calculation (CPF employee + employer contribution + SDL + personal income tax IRAS), monthly remittance (CPF + SDL by 14th of following month / Auto-Inclusion AIS filing), and annual compliance management (IR8A due March 1).`,

  'pg.singapore.s1.b3': `
          <p class="au-data-cards-label">2026 KEY NUMBERS</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card"><p class="au-dc-name">CPF Employee Rate</p><p class="au-dc-value">20%</p><p class="au-dc-note">&le; 55 years; employer 17%; combined 37%</p></div>
              <div class="au-data-card"><p class="au-dc-name">CPF Employer Rate</p><p class="au-dc-value">17%</p><p class="au-dc-note">&le; 55 years; 55&ndash;60 increases to 16%</p></div>
              <div class="au-data-card"><p class="au-dc-name">OW Monthly Ceiling</p><p class="au-dc-value">S$8,000</p><p class="au-dc-note">As of 2026/1/1; previously S$7,400</p></div>
              <div class="au-data-card"><p class="au-dc-name">AW Annual Ceiling</p><p class="au-dc-value">S$102,000</p><p class="au-dc-note">Total Wage Cap</p></div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card"><p class="au-dc-name">Maximum Personal Tax</p><p class="au-dc-value">24%</p><p class="au-dc-note">&gt; S$1M; progressive 0&ndash;24%</p></div>
              <div class="au-data-card"><p class="au-dc-name">Tax Exemption Threshold</p><p class="au-dc-value">S$20,000</p><p class="au-dc-note">Annual taxable income &le; 0%</p></div>
              <div class="au-data-card"><p class="au-dc-name">SDL Skills Tax</p><p class="au-dc-value">0.25%</p><p class="au-dc-note">Employer-only; min S$2 / max S$11.25</p></div>
              <div class="au-data-card"><p class="au-dc-name">IR8A Deadline</p><p class="au-dc-value">March 1</p><p class="au-dc-note">Annual employee income declaration</p></div>
            </div>
          </div>
`,

  'pg.singapore.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key characteristics of Singapore Payroll: (1) CPF dual contribution &mdash; employee 20% + employer 17%, combined 37% is among the highest mandatory savings rates globally; 55+ tiered reduction (55&ndash;60 / 60&ndash;65 / 65&ndash;70 / &gt;70 brackets), continuing to escalate from January 2027 onwards; (2) &ldquo;Citizenship segregation&rdquo;: CPF applies only to SG Citizens and PR (Singapore Permanent Resident); foreign workers (EP / SP / WP) completely exempt from CPF but SP/WP must pay Foreign Worker Levy; (3) Real-time Auto-Inclusion Scheme (AIS) &mdash; employer must transmit employee IR8A data directly to IRAS; employee does not need to file personally.</p>
`,

  'pg.singapore.s2.h': `Payroll Set-up`,

  'pg.singapore.s2.sub': `How to establish legal payroll capability in Singapore / Entity &middot; ACRA &middot; CPF &middot; MOM`,

  'pg.singapore.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> Entity, UEN, CPF &amp; GIRO Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Company Registration (Pte Ltd)</td><td>Singapore local entity</td><td>Yes</td><td>ACRA registration; minimum capital S$1; at least 1 local director</td></tr>
                <tr><td>UEN Unique Entity Number</td><td>Singapore local entity</td><td>Yes</td><td>Unique Entity Number; auto-generated upon ACRA registration</td></tr>
                <tr><td>CPF Employer Registration</td><td>Singapore local entity</td><td>Yes</td><td>Before hiring SG Citizen / PR employee; register online via my cpf</td></tr>
                <tr><td>GIRO Auto-Debit Authorization</td><td>Singapore local entity</td><td>Yes</td><td>Auto-debit for CPF + SDL; avoids monthly manual payment</td></tr>
                <tr><td>IRAS Employer File</td><td>Singapore local entity</td><td>Yes</td><td>Auto-generated upon hiring employees; for IR8A AIS</td></tr>
                <tr><td>SDL Skills Development Levy</td><td>Singapore local entity</td><td>Yes</td><td>Remitted together with CPF via CPF Board</td></tr>
                <tr><td>FWL Work Pass</td><td>Foreign employees</td><td>Yes</td><td>MOM application for EP / S Pass / WP; S/WP must pay FWL</td></tr>
                <tr><td>KETs Key Employment Terms</td><td>New employees</td><td>Yes</td><td>Employment Act Sec. 95A mandates written KETs</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">02</span> CPF Contribution Rates by Age Group (2026)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Age Group</th><th>Employee Contribution</th><th>Employer Contribution</th><th>Total</th></tr>
              </thead>
              <tbody>
                <tr><td>&le; 55 years</td><td>20%</td><td>17%</td><td>37%</td></tr>
                <tr><td>55&ndash;60 years</td><td>17.5%</td><td>16.5%</td><td>34% (increased 2026/1)</td></tr>
                <tr><td>60&ndash;65 years</td><td>12%</td><td>12.5%</td><td>24.5% (increased 2026/1)</td></tr>
                <tr><td>65&ndash;70 years</td><td>7.5%</td><td>9%</td><td>16.5%</td></tr>
                <tr><td>&gt; 70 years</td><td>5%</td><td>7.5%</td><td>12.5%</td></tr>
                <tr><td>Additional SDL</td><td>&mdash;</td><td>0.25% (max S$11.25/employee/month)</td><td>&mdash;</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s3.h': `Payroll Calculation`,

  'pg.singapore.s3.sub': `How salary, tax, and employee entitlements are calculated / Salary &middot; Leave`,

  'pg.singapore.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> Salary Calculation &amp; Bonuses</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Rule / 2026 Values</th></tr>
              </thead>
              <tbody>
                <tr><td>Pay Cycle</td><td>Monthly (most common); payment within 7 days + wage adjustment payment (Sec. 21)</td></tr>
                <tr><td>Minimum Wage</td><td>None &mdash; only cleaning / security / property management sectors have PWM Progressive Wage Model</td></tr>
                <tr><td>OW Monthly Ceiling</td><td>S$8,000 (as of 2026/1/1; previously S$7,400)</td></tr>
                <tr><td>AW Annual Ceiling</td><td>Total Wage Cap = S$102,000 &minus; annual cumulative OW</td></tr>
                <tr><td>13 Month / AWS</td><td>Not statutory; customary per employer / contract; typically paid before December</td></tr>
                <tr><td>Overtime</td><td>Part IV employees (salary &le; S$2,600/month): 1.5&times; standard hourly rate</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">02</span> Statutory Leave Entitlements</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Duration / Period</th><th>Pay Ratio / Source</th></tr>
              </thead>
              <tbody>
                <tr><td>Annual Leave</td><td>7&ndash;14 days (increases by years of service)</td><td>100% / Employer; continuous service &ge; 3 months</td></tr>
                <tr><td>Public Holidays</td><td>11 days/year</td><td>100% / Employer; if holiday falls on Sunday, compensatory day off</td></tr>
                <tr><td>Sick Leave</td><td>Outpatient + Hospital 14 + 60 days/year</td><td>100% / Employer; requires medical certificate</td></tr>
                <tr><td>Maternity Leave (Citizen)</td><td>16 weeks GPML</td><td>Government subsidy (&ge; 2nd child fully subsidized)</td></tr>
                <tr><td>Maternity Leave (Non-Citizen)</td><td>12 weeks</td><td>&le; 2nd child; thereafter 50% employee self-pay</td></tr>
                <tr><td>Paternity Leave</td><td>4 weeks GPPL</td><td>Government subsidy; upgraded to 4 weeks in 2024</td></tr>
                <tr><td>Shared Parental Leave SPL</td><td>10 weeks (effective 2026/4/1)</td><td>New; shared between both parents + maternity/paternity leave</td></tr>
                <tr><td>Childcare Leave</td><td>6 days/year</td><td>100% / Employer; for children &lt; 7 years</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">03</span> Personal Income Tax &mdash; YA 2026 (Resident)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Annual Taxable Income (SGD)</th><th>Tax Rate</th><th>Cumulative Tax (Lower Bracket)</th></tr>
              </thead>
              <tbody>
                <tr><td>0 &ndash; 20,000</td><td>0%</td><td>Tax-free threshold</td></tr>
                <tr><td>20,001 &ndash; 30,000</td><td>2%</td><td>S$0</td></tr>
                <tr><td>30,001 &ndash; 40,000</td><td>3.5%</td><td>S$200</td></tr>
                <tr><td>40,001 &ndash; 80,000</td><td>7%</td><td>S$550</td></tr>
                <tr><td>80,001 &ndash; 120,000</td><td>11.5%</td><td>S$3,350</td></tr>
                <tr><td>120,001 &ndash; 320,000</td><td>15% &ndash; 22%</td><td>Progressive 5 brackets</td></tr>
                <tr><td>320,001 &ndash; 1,000,000</td><td>23% &ndash; 24%</td><td>Progressive 3 brackets</td></tr>
                <tr><td>&gt; 1,000,000</td><td>24%</td><td>Top bracket (new from 2024)</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-section-sep"><strong>YA2026 Tax Relief:</strong> 60% relief (max S$200) auto-applied to all tax residents.</p>
`,

  'pg.singapore.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">04</span> CPF &amp; FWL Operational Details</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>2026 Values</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>OW Ceiling</td><td>S$8,000/month</td><td>Increased S$600 as of 2026/1/1; achieved ultimate target</td></tr>
                <tr><td>AW Ceiling</td><td>S$102,000 &minus; Annual OW</td><td>Annual total salary ceiling</td></tr>
                <tr><td>FWL (by industry/tier)</td><td>S$250 &ndash; 950/month</td><td>Construction / Manufacturing / Services vary</td></tr>
                <tr><td>Non-Resident Tax</td><td>15% / progressive (higher)</td><td>&lt; 183 days; employment income flat 15%</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three commonly underestimated details in Singapore Payroll: (1) Part IV boundary: salary &le; S$2,600/month workers enjoy Overtime 1.5&times;, Rest Day Premium; other employees only enjoy Part XII (annual leave / sick leave / maternity / public holidays); (2) AIS Auto-Inclusion mandatory threshold &mdash; employees &ge; 5 mandatory enrollment from 2022 onwards; employer IR8A data transmits directly to IRAS; employee does not file personally; (3) Skills Development Levy SDL 0.25% applies to all employees (including foreign), monthly max S$11.25; small amount but non-payment incurs penalties.</p>
`,

  'pg.singapore.s4.h': `Payroll Processing & Compliance`,

  'pg.singapore.s4.sub': `Monthly execution, filing and payment, and accounting treatment / Monthly Filings &amp; Journal`,

  'pg.singapore.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Rule</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Monthly</td><td>Most common; Employment Act Sec. 20&ndash;21; payment within 7 days</td></tr>
                <tr><td>Payment Method + Currency</td><td>FAST / GIRO &middot; SGD</td><td>Cheque compliant but rare; cash strongly not recommended</td></tr>
                <tr><td>Payslip</td><td>Mandatory (Sec. 96)</td><td>Must itemize gross salary, CPF, deductions, net salary + Itemised Pay Slip</td></tr>
                <tr><td>Wage Deduction Limit</td><td>&le; 25% gross salary</td><td>Employment Act Sec. 27; includes CPF / tax</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">02</span> Monthly Filing &amp; Payment</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Remittance Institution</th></tr>
              </thead>
              <tbody>
                <tr><td>CPF Monthly Contribution</td><td>Employer</td><td>Monthly</td><td>14th of following month</td><td>CPF Board (PAL/UEN)</td></tr>
                <tr><td>SDL Skills Tax</td><td>Employer</td><td>Monthly</td><td>14th of following month (concurrent with CPF)</td><td>CPF Board / SSG</td></tr>
                <tr><td>FWL Foreign Worker Levy</td><td>Employer</td><td>Monthly</td><td>14th of following month</td><td>MOM (auto-deducted from GIRO)</td></tr>
                <tr><td>Income Tax Withholding (Non-Resident only)</td><td>Employer</td><td>Before separation (1 month notice)</td><td>Within 30 days of separation</td><td>IRAS</td></tr>
                <tr><td>IRAS Tax Filing (Resident)</td><td>No monthly filing</td><td>&mdash;</td><td>&mdash;</td><td>Employees self-file post-IR8A</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">03</span> Payroll Journal Mapping Rules (SFRS / IFRS)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Account (SFRS Singapore Standards)</th></tr>
              </thead>
              <tbody>
                <tr><td>Basic Salary + AWS + Allowances + Bonus</td><td>Employee Benefits &mdash; Salaries &amp; Wages</td></tr>
                <tr><td>CPF Employer Contribution 17%</td><td>Employee Benefits &mdash; CPF Contribution</td></tr>
                <tr><td>SDL Skills Development Levy 0.25%</td><td>Employee Benefits &mdash; SDL</td></tr>
                <tr><td>FWL Foreign Worker Levy</td><td>Employee Benefits &mdash; FWL</td></tr>
                <tr><td>CPF Employee Contribution 20%</td><td>Liability &mdash; CPF Payable</td></tr>
                <tr><td>Net Salary</td><td>Bank &mdash; DBS / UOB / OCBC / Stan Chart SG</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">04</span> Annual Filings</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>IR8A Employee Annual Income</td><td>Employer &rarr; IRAS</td><td>March 1</td><td>Auto-Inclusion AIS mandatory (&ge; 5 employees)</td></tr>
                <tr><td>Appendix 8A / 8B / IR8S</td><td>Employer &rarr; IRAS</td><td>Concurrent with IR8A</td><td>Housing benefits / Stock options / CPF overpayment attachments</td></tr>
                <tr><td>IR21 Departure Tax Clearance</td><td>Employer &rarr; IRAS</td><td>1 month before departure</td><td>Foreign employees departing; withhold final salary + applicable tax</td></tr>
                <tr><td>CPF Annual Account Reconciliation</td><td>CPF Board</td><td>Before year-end</td><td>December reconciliation via PAL system</td></tr>
                <tr><td>Company Income Tax (Form C)</td><td>Company</td><td>November 30</td><td>Estimated Chargeable Income within 3 months + Final 11/30</td></tr>
                <tr><td>FWL Quota Reconciliation</td><td>Employer</td><td>Annually</td><td>Per MOM Dependency Ratio Ceiling</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">05</span> Termination &amp; Foreign Workers</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Rule</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Notice Period</td><td>1 day &ndash; 4 weeks</td><td>Based on years of service (Sec. 10); &lt; 26 weeks / 26 weeks&ndash;2 years / 2&ndash;5 years / &gt; 5 years</td></tr>
                <tr><td>Severance / Retrenchment</td><td>2 weeks &ndash; 1 month per year</td><td>Not statutory; 2 months salary/year is industry practice</td></tr>
                <tr><td>Unused Annual Leave Cash-out</td><td>Mandatory</td><td>Calculated as monthly salary / 26 &times; accumulated unused days</td></tr>
                <tr><td>IR21 Departure Tax Notice</td><td>1 month before departure</td><td>For foreign employees; withhold final salary + applicable taxes</td></tr>
                <tr><td>Final Salary + Final Pay</td><td>Paid on separation date</td><td>Employment Act Sec. 23</td></tr>
                <tr><td>Foreign Worker</td><td>EP / SP / WP per MOM quota</td><td>EP minimum S$5,600 / SP minimum S$3,650 / WP varies by industry</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key changes to Singapore Payroll in 2026: (1) CPF OW Ceiling increased to S$8,000 as of 2026/1/1 (previously S$7,400); expected further increase from January 2027; (2) Shared Parental Leave SPL effective 2026/4/1 &mdash; 10 weeks for both parents (shared) + 4 weeks paternity leave; (3) CPF contribution rates for 55&ndash;65 years increased as of 2026/1/1 &mdash; 55&ndash;60 years now 34%, 60&ndash;65 years now 24.5%; continuing towards 2030 target rates.</p>
`,
};
