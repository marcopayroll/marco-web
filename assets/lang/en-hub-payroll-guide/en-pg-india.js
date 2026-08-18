/* Payroll Guide — India page content (hr-knowledge-hub-payroll-guide-india.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_INDIA = {
  'pg.india.desc': `A complete guide to running payroll in India — covering EPF and ESI registration, CTC salary structure, TDS withholding under Section 192, professional tax by state, and annual compliance including Form 24Q, Form 16, and the April–March financial year cycle.`,

  'pg.india.s1.h': `Scope & Application`,

  'pg.india.s1.sub': `Scope and Legal Basis / Income Tax Act · EPF & MP Act · ESI Act · Shops & Establishments Acts`,

  'pg.india.s1.b1': `
          <p class="article-p">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in India (Private Limited Company / LLP)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly hired by the local entity, subject to federal and state labour laws</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on the Income Tax Act, EPF &amp; MP Act, ESI Act, and various state Shops &amp; Establishments Acts</span>
            </div>
          </div>
`,

  'pg.india.s1.b2': `This framework covers how companies complete Payroll Set-up, salary calculation, monthly filing and payment, and annual compliance management in India.`,

  'pg.india.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Indian Payroll complexity is extremely high &mdash; federal and state laws run in parallel, and the salary structure (CTC breakdown) directly impacts tax and social security costs. The four Labour Codes passed in 2020 aim to unify and replace the current 29 labour laws, but state-level implementation timelines vary. Companies must monitor both current law and new code developments simultaneously.</p>
`,

  'pg.india.s2.h': `Payroll Set-up`,

  'pg.india.s2.sub': `How to establish legal payroll capability in India / EPF · ESI · TAN · State Registration`,

  'pg.india.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Social Insurance & Provident Fund Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:12%"><col style="width:38%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>EPF Registration</td><td>India local entity</td><td>Yes (&ge; 20 employees)</td><td>Register with EPFO; voluntary registration for &lt; 20 employees</td></tr>
                <tr><td>ESI Registration</td><td>India local entity</td><td>Yes (&ge; 10 employees)</td><td>Register with ESIC; applies to employees with monthly salary &le; &#8377;21,000</td></tr>
                <tr><td>Employee UAN</td><td>Employer to organize</td><td>Yes</td><td>Universal Account Number; unique EPF identifier</td></tr>
                <tr><td>Employee ESI IP Number</td><td>Employer to organize</td><td>Yes</td><td>Insured Person Number; ESI identifier</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Income Tax & Professional Tax Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:12%"><col style="width:38%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>TAN (Tax Deduction Account Number)</td><td>India local entity</td><td>Yes</td><td>TDS (Tax Deducted at Source) registration number</td></tr>
                <tr><td>PAN (Permanent Account Number)</td><td>Company + Employee</td><td>Yes</td><td>Tax identification number</td></tr>
                <tr><td>Professional Tax Registration</td><td>India local entity</td><td>Varies by state</td><td>Independent state-level levy (e.g., Maharashtra, Karnataka)</td></tr>
                <tr><td>Employee Aadhaar</td><td>Employee</td><td>Yes</td><td>Linked to EPF/ESI; KYC compliance</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> State-Level Compliance & Bank Account</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Shops &amp; Establishments Registration</td><td>Yes</td><td>State-level regulation; register in state where business operates</td></tr>
                <tr><td>Labour Welfare Fund (LWF)</td><td>Varies by state</td><td>Some states require contribution; rates very low (&#8377; tens per person per half-year)</td></tr>
                <tr><td>Payroll Bank Account</td><td>Yes</td><td>Local INR account</td></tr>
                <tr><td>Pay Slip</td><td>Yes</td><td>Statutory obligation; monthly itemized pay statement required</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s3.h': `Payroll Calculation`,

  'pg.india.s3.sub': `How salary and employee entitlements are calculated / CTC · EPF · ESI · TDS`,

  'pg.india.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary Structure & Cost to Company (CTC)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>CTC (Cost to Company)</td><td>Total employment cost = Gross Salary + Employer EPF/ESI + Gratuity provision + other benefits</td></tr>
                <tr><td>Gross Salary</td><td>Basic + HRA + Special Allowance + other allowances</td></tr>
                <tr><td>Basic Salary</td><td>Typically 40%&ndash;50% of CTC; forms the base for EPF/Gratuity calculation</td></tr>
                <tr><td>HRA (House Rent Allowance)</td><td>Typically 40%&ndash;50% of Basic; eligible for Section 10(13A) tax exemption</td></tr>
                <tr><td>Special Allowance</td><td>Fully taxable flexible allowance</td></tr>
                <tr><td>Minimum Wage</td><td>Determined independently by state and occupation (Minimum Wages Act)</td></tr>
                <tr><td>Calculation Method</td><td>Monthly salary &divide; calendar days in month &times; actual working days (or &divide; 30 fixed base)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s3.b2': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">In Indian salary structure, Basic Salary proportion directly impacts EPF/Gratuity costs and employee tax burden &mdash; the higher the Basic percentage, the higher EPF contributions (increasing employer cost), but employees receive better retirement protection. The new Labour Code on Wages proposes Basic &ge; 50% of CTC; once implemented, this will significantly increase employer social security costs.</p>
`,

  'pg.india.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Earned Leave (Annual Leave)</td><td>Varies by state; typically 1 day per 20 days worked (approximately 15&ndash;21 days/year)</td></tr>
                <tr><td>Sick Leave</td><td>Varies by state; typically 7&ndash;12 days/year</td></tr>
                <tr><td>Casual Leave</td><td>Varies by state; typically 7&ndash;12 days/year</td></tr>
                <tr><td>Public Holidays</td><td>Republic Day, Independence Day, Gandhi Jayanti are federal holidays; remainder determined by state</td></tr>
                <tr><td>Maternity Leave</td><td>26 weeks paid (first two children); 12 weeks from third child onwards</td></tr>
                <tr><td>Paternity Leave</td><td>No federal statutory provision; some employers provide voluntarily</td></tr>
                <tr><td>Annual Leave Cash-out</td><td>Earned Leave may be carried forward and monetized (subject to state law and company policy)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> EPF (Employees&rsquo; Provident Fund)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:18%"><col style="width:18%"><col style="width:34%"></colgroup>
              <thead><tr><th>Item</th><th>Employer</th><th>Employee</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>EPF (Provident Fund)</td><td>3.67%</td><td>12%</td><td>Based on Basic + DA</td></tr>
                <tr><td>EPS (Pension Scheme)</td><td>8.33%</td><td>&mdash;</td><td>8.33% of employer&rsquo;s 12% contribution allocated to EPS (ceiling &#8377;15,000 base)</td></tr>
                <tr><td>EDLI (Life Insurance)</td><td>0.50%</td><td>&mdash;</td><td>Ceiling &#8377;15,000 base</td></tr>
                <tr><td>EPF Admin Charge</td><td>0.50%</td><td>&mdash;</td><td>Administrative fee</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s3.b5': `<strong>Total employer EPF: 13% of Basic + DA (including admin fee); employee: 12% of Basic + DA.</strong> Monthly salary exceeding &#8377;15,000 employees may still voluntarily participate (Voluntary PF); contribution ceiling applies to EPS portion only (&#8377;15,000 base), while EPF portion may use actual Basic.`,

  'pg.india.s3.b6': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> ESI (Employees&rsquo; State Insurance)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18%"><col style="width:46%"><col style="width:18%"><col style="width:18%"></colgroup>
              <thead><tr><th>Item</th><th>Employer</th><th>Employee</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>ESI Contribution</td><td>3.25%</td><td>0.75%</td><td>Based on Gross Salary</td></tr>
                <tr><td>Applicability</td><td>Applies to employees with monthly salary &le; &#8377;21,000; covers medical, sick leave, maternity, occupational injury</td><td>&mdash;</td><td>&mdash;</td></tr>
                <tr><td>Contribution Periods</td><td>Two contribution periods: April&ndash;September / October&ndash;March</td><td>&mdash;</td><td>&mdash;</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s3.b7': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Personal Income Tax (TDS) &mdash; Section 192</p>
          <p class="article-p" style="margin-top:8px; font-size:14px; color:#475072;"><strong>New Tax Regime (Default, FY 2024&ndash;25):</strong></p>
          <div class="au-bullet-list" style="margin-top:8px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">0% (&le; &#8377;3 lakh)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">5% (&#8377;3 lakh &ndash; &#8377;7 lakh)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">10% (&#8377;7 lakh &ndash; &#8377;10 lakh)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">15% (&#8377;10 lakh &ndash; &#8377;12 lakh)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">20% (&#8377;12 lakh &ndash; &#8377;15 lakh)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">30% (above &#8377;15 lakh)</span>
            </div>
          </div>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>Old Tax Regime (Optional):</strong> Retains Section 80C/80D/HRA deductions; rates 5%&ndash;30%</p>
          <p class="article-p" style="margin-top:8px; font-size:14px; color:#475072;"><strong>Withholding Process:</strong> Employer estimates annual taxable income and apportions TDS evenly across 12 months</p>
          <p class="article-p" style="margin-top:8px; font-size:14px; color:#475072;"><strong>Surcharge:</strong> Annual income exceeding &#8377;50 lakh incurs additional 10%&ndash;25% surcharge; Health &amp; Education Cess 4% applies</p>
`,

  'pg.india.s3.b8': `
          <p class="au-table-title"><span class="au-table-num">vi.</span> Professional Tax (State-Level)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>State</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>General Limit</td><td>&#8377;2,500/year maximum (constitutionally mandated)</td></tr>
                <tr><td>Maharashtra</td><td>Monthly salary &gt; &#8377;10,000: &#8377;200/month (&#8377;300 in 2 months)</td></tr>
                <tr><td>Karnataka</td><td>Monthly salary &gt; &#8377;15,000: &#8377;200/month</td></tr>
                <tr><td>Payment</td><td>Employer deducts and remits monthly to state government</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s4.h': `Payroll Processing & Compliance`,

  'pg.india.s4.sub': `Monthly execution, filing and payment, and accounting treatment / Monthly Filings & Journal`,

  'pg.india.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:30%"><col style="width:45%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Monthly</td><td>State regulations require payment by 7th or 10th of following month</td></tr>
                <tr><td>Payment Method</td><td>Bank Transfer</td><td>NEFT / IMPS / UPI mandated by law</td></tr>
                <tr><td>Pay Slip</td><td>Statutory obligation</td><td>Monthly statement required; must include EPF/ESI/TDS details</td></tr>
                <tr><td>Record Retention</td><td>3 years (Payment of Wages Act)</td><td>Some states require longer retention</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Filing & Payment</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:18%"><col style="width:14%"><col style="width:16%"><col style="width:30%"></colgroup>
              <thead><tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>EPF Contribution</td><td>Employer</td><td>Monthly</td><td>15th of following month</td><td>Remit via EPFO unified portal online</td></tr>
                <tr><td>ESI Contribution</td><td>Employer</td><td>Monthly</td><td>15th of following month</td><td>Remit via ESIC portal online</td></tr>
                <tr><td>TDS Income Tax</td><td>Employer</td><td>Monthly</td><td>7th of following month</td><td>Remit via Challan 26AS online to Income Tax Department</td></tr>
                <tr><td>Professional Tax</td><td>Employer</td><td>Monthly</td><td>Varies by state</td><td>Deduct and remit to state government</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:55%"><col style="width:45%"></colgroup>
              <thead><tr><th>Item</th><th>Account</th></tr></thead>
              <tbody>
                <tr><td>Gross Salary (Basic + HRA + Allowances)</td><td>Payroll Expense</td></tr>
                <tr><td>Employer EPF (13%) + ESI (3.25%)</td><td>Payroll Expense</td></tr>
                <tr><td>Gratuity Provision (4.81%)</td><td>Payroll Expense</td></tr>
                <tr><td>Employee EPF + ESI + TDS + PT</td><td>Payroll Liability</td></tr>
                <tr><td>Net Pay</td><td>Cash / Bank</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Compliance (Financial Year: April &ndash; March)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:20%"><col style="width:16%"><col style="width:36%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>TDS Quarterly Return (24Q)</td><td>Employer</td><td>31 days after quarter-end</td><td>Form 24Q; quarterly TDS summary by employee</td></tr>
                <tr><td>Form 16 (Annual Tax Certificate)</td><td>Employer</td><td>June 15</td><td>Provide annual TDS certificate to each employee</td></tr>
                <tr><td>EPF Annual Return</td><td>Employer</td><td>April 25</td><td>Prior year EPF contribution summary</td></tr>
                <tr><td>ESI Half-Year Return</td><td>Employer</td><td>May 11 / November 11</td><td>Half-year contribution summary</td></tr>
                <tr><td>Gratuity Provision Update</td><td>Employer</td><td>Annually</td><td>Actuarial assessment or formula-based provision update</td></tr>
                <tr><td>Minimum Wage Update</td><td>&mdash;</td><td>Varies by state</td><td>Monitor state Gazette notifications</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.india.s4.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Gratuity applies to employees with 5+ years of service: each year of service = last month&rsquo;s salary (Basic + DA) &times; 15/26. Maximum &#8377;20 lakh. Companies must conduct actuarial assessments per AS 15 / Ind AS 19 and recognize provisions in financial statements. This is a substantial hidden employment cost often overlooked.</p>
`,
};
