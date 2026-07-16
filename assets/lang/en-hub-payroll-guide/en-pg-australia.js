/* Payroll Guide — Australia page content (hr-knowledge-hub-payroll-guide-australia.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_AUSTRALIA = {
  'pg.australia.desc': `Complete operational guide to Australia payroll compliance — entity setup, STP Phase 2 real-time reporting, Super Guarantee, Modern Awards, tax brackets, employee leave entitlements, and all monthly and annual filing requirements.`,

  'pg.australia.s1.h': `Scope & Application`,

  'pg.australia.s1.sub': `Legal Basis / Fair Work Act · ATO · STP Phase 2 · Super`,

  'pg.australia.s1.b1': `
          <p class="article-p">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have already established a local legal entity in Australia (Pty Ltd / Public Ltd / Branch / Trust structure)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly employed by that local entity and governed by the federal Fair Work Act 2009, National Employment Standards (NES), and Modern Awards</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on the ITAA, Superannuation Guarantee Act, Fair Work Act, and rules issued by the ATO / Fair Work Commission / state Revenue Offices</span>
            </div>
          </div>
`,

  'pg.australia.s1.b2': `This framework explains how companies complete Payroll Set-up (ASIC registration + ABN + TFN + PAYG Withholding + Super Fund + Workers Comp), monthly payroll calculation (PAYG + 12% Super + Award Wages + Leave Entitlements), monthly reporting and payment (STP Phase 2 each pay run + BAS + quarterly Super / Payday Super from 2026/7/1), and annual compliance management (STP Finalisation on 14 July, Payment Summary).`,

  'pg.australia.s1.b3': `
          <p class="au-data-cards-label">2026 KEY NUMBERS</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Super Guarantee</span>
                <span class="au-dc-value">12.0%</span>
                <span class="au-dc-note">from 2025/7/1; final target rate</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">National Minimum Wage</span>
                <span class="au-dc-value">AUD 24.95/hr</span>
                <span class="au-dc-note">from 2025/7/1; 948/week</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Tax-free Threshold</span>
                <span class="au-dc-value">AUD 18,200</span>
                <span class="au-dc-note">Tax-free threshold</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Second Bracket Tax Rate</span>
                <span class="au-dc-value">16%</span>
                <span class="au-dc-note">18,201 - 45,000; from 2024</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Top Tax Rate</span>
                <span class="au-dc-value">45%</span>
                <span class="au-dc-note">&gt; AUD 190,000</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Medicare Levy</span>
                <span class="au-dc-value">2%</span>
                <span class="au-dc-note">health levy; low-income exemption</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Annual Leave</span>
                <span class="au-dc-value">4 weeks/yr</span>
                <span class="au-dc-note">NES standard; shift workers 5 weeks</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Payday Super</span>
                <span class="au-dc-value">2026/7/1</span>
                <span class="au-dc-note">Super must follow each pay run</span>
              </div>
            </div>
          </div>
`,

  'pg.australia.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Australia Payroll has three major characteristics: (1) STP Phase 2 real-time tax reporting - mandatory since 2022; each pay run reports employee gross pay, tax withheld, Super, and related details to the ATO, and the employee year-end Income Statement appears automatically in myGov; (2) 121 Modern Awards cover almost all industries, with state labor rules layered on top. Award Rates / Loadings / Penalties must be strictly followed, and penalties for breaches may reach AUD 939,000 per entity; (3) Payday Super from 2026/7/1 is a major reform - quarterly Super payment is removed, and 12% Super must be paid into the employee fund with each pay run. Late payment directly triggers SGC charges.</p>
`,

  'pg.australia.s2.h': `Payroll Set-up`,

  'pg.australia.s2.sub': `How to establish legal payroll capability in Australia / Entity · ATO · Super · WorkCover`,

  'pg.australia.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Entity, ABN, TFN &amp; PAYG Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28.4%"><col style="width:28.4%"><col style="width:14.9%"><col style="width:28.4%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Company registration (Pty Ltd)</td><td>Australian local entity</td><td>Yes</td><td>ASIC registration; minimum share capital AUD 1; two directors, one must be Australian resident</td></tr>
                <tr><td>ABN Australian Business Number</td><td>Australian local entity</td><td>Yes</td><td>11-digit ABN; online application through ABR; usually within 24h</td></tr>
                <tr><td>TFN Tax File Number</td><td>Australian local entity</td><td>Yes</td><td>Tax File Number; normally applied together with ABN</td></tr>
                <tr><td>PAYG Withholding registration</td><td>Australian local entity</td><td>Yes</td><td>Before hiring employees; through ATO Business Portal</td></tr>
                <tr><td>Default Super Fund</td><td>Australian local entity</td><td>Yes</td><td>Select a Default Fund, e.g. AustralianSuper / Hostplus</td></tr>
                <tr><td>WorkCover / WorkSafe registration</td><td>Australian local entity</td><td>Yes</td><td>State-based (VIC / NSW / QLD, etc.); industry risk rates apply</td></tr>
                <tr><td>State Payroll Tax registration</td><td>Australian local entity</td><td>Conditional</td><td>Required when total annual wages exceed state thresholds (NSW $1.2M / VIC $700k, etc.)</td></tr>
                <tr><td>Fair Work Information Statement</td><td>New employee onboarding</td><td>Yes</td><td>Issued to every new employee at onboarding; casual employees also receive the casual statement</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Entity, ABN, TFN &amp; PAYG Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:19.8%"><col style="width:19.8%"><col style="width:19.8%"><col style="width:40.6%"></colgroup>
              <thead><tr><th>Item</th><th>Employee</th><th>Employer</th><th>Base / Cap</th></tr></thead>
              <tbody>
                <tr><td>Super Guarantee (SG)</td><td>-</td><td>12.0%</td><td>Ordinary Time Earnings; maximum quarterly contribution base AUD 62,500/q until 2026/6/30</td></tr>
                <tr><td>PAYG Withholding</td><td>According to ATO tables</td><td>-</td><td>Employer withholds; employee Income Statement is transparent</td></tr>
                <tr><td>State Payroll Tax</td><td>-</td><td>4.75% - 6.5%</td><td>State-based; NSW 5.45% / VIC 4.85% / QLD 4.75%</td></tr>
                <tr><td>WorkCover / workers compensation</td><td>-</td><td>0.2% - 8%+</td><td>By state and industry risk; employer-only</td></tr>
                <tr><td>Medicare Levy</td><td>2%</td><td>-</td><td>Included in income-tax withholding; reconciled in employee annual tax return</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s3.h': `Payroll Calculation`,

  'pg.australia.s3.sub': `How salary, tax, and employee entitlements are calculated / Salary · Leave`,

  'pg.australia.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary, Minimum Wage &amp; Award Rates</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:29.7%"><col style="width:70.3%"></colgroup>
              <thead><tr><th>Item</th><th>Rule / 2026 Value</th></tr></thead>
              <tbody>
                <tr><td>Pay cycle</td><td>Weekly / Fortnightly are most common; Monthly is common for executives</td></tr>
                <tr><td>National Minimum Wage (NMW)</td><td>AUD 24.95 / hour; 38h/week = AUD 948 + 25% Casual Loading</td></tr>
                <tr><td>Modern Award Rates</td><td>121 industry minimum-wage instruments + Loadings / Penalties / Allowances</td></tr>
                <tr><td>Overtime</td><td>Set by Award; usually 1.5x for first 2h + 2x thereafter / weekends often 2x</td></tr>
                <tr><td>13th Month</td><td>Not statutory; for executives often replaced by Bonus / Commission</td></tr>
                <tr><td>Annual Leave Loading</td><td>Many Awards require an additional +17.5% during annual leave</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements (NES Standard)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.3%"></colgroup>
              <thead><tr><th>Item</th><th>Days / Period</th><th>Pay Rate / Source</th></tr></thead>
              <tbody>
                <tr><td>Annual Leave</td><td>4 weeks / year (shift workers 5 weeks)</td><td>100% / employer; many Awards add +17.5% Loading</td></tr>
                <tr><td>Public Holidays</td><td>8 national holidays + 3-5 state holidays</td><td>100% / employer</td></tr>
                <tr><td>Personal / Carer's Leave</td><td>10 days / year (FT)</td><td>100% / employer; accumulates</td></tr>
                <tr><td>Compassionate Leave</td><td>2 days / occasion</td><td>100% / employer</td></tr>
                <tr><td>Parental Leave</td><td>52 weeks (up to 24 months)</td><td>Government Paid Parental Leave 24 weeks; employer may top up</td></tr>
                <tr><td>Dad &amp; Partner Pay</td><td>&le; 24 weeks (shared with PPL)</td><td>From 2025/7, 24 weeks; 55% via Centrelink</td></tr>
                <tr><td>Long Service Leave</td><td>8.67 weeks / 10 years</td><td>State-based; 100% / employer</td></tr>
                <tr><td>FDV Leave</td><td>10 paid days / year</td><td>100% / employer (mandatory for all employees since 2023)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s3.b3': `PAYG + Super / Income Tax &amp; Super Detail`,

  'pg.australia.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Personal Income Tax &mdash; FY 2025-26 Brackets</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:40.1%"><col style="width:19.8%"><col style="width:40.1%"></colgroup>
              <thead><tr><th>Annual Taxable Income (AUD)</th><th>Tax Rate</th><th>Accumulated Tax (lower)</th></tr></thead>
              <tbody>
                <tr><td>0 - 18,200</td><td>0%</td><td>Tax-free threshold</td></tr>
                <tr><td>18,201 - 45,000</td><td>16%</td><td>0</td></tr>
                <tr><td>45,001 - 135,000</td><td>30%</td><td>AUD 4,288</td></tr>
                <tr><td>135,001 - 190,000</td><td>37%</td><td>AUD 31,288</td></tr>
                <tr><td>&gt; 190,000</td><td>45%</td><td>AUD 51,638</td></tr>
                <tr><td>Medicare Levy</td><td>+ 2%</td><td>Based on total taxable income (low-income exemption &lt; $29,207)</td></tr>
                <tr><td>Medicare Levy Surcharge</td><td>+ 1% - 1.5%</td><td>Single taxpayer earning &gt; $101,000 without hospital cover</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Super &mdash; Operational Details</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.3%"></colgroup>
              <thead><tr><th>Item</th><th>2025-26 Value</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>SG standard rate</td><td>12.0%</td><td>From 2025/7/1; OTE &times; 12%</td></tr>
                <tr><td>Maximum contribution base</td><td>AUD 62,500 / quarter</td><td>Valid until 2026/6/30; excess portion not mandatory</td></tr>
                <tr><td>Concessional Cap</td><td>AUD 30,000 / year</td><td>Pre-tax contribution cap, including SG + voluntary amounts</td></tr>
                <tr><td>Non-Concessional Cap</td><td>AUD 120,000 / year</td><td>After-tax voluntary contribution; three-year bring-forward may apply</td></tr>
                <tr><td>SuperStream</td><td>Mandatory electronic contribution</td><td>SBR reporting + ATO electronic payment</td></tr>
                <tr><td>Payday Super</td><td>From 2026/7/1</td><td>Paid with each payroll; must reach Super Fund within 7 business days</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s3.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three Australia Payroll details are often underestimated: (1) Casual Loading 25% - casual employees do not receive annual leave / sick leave / public holiday pay, but their hourly wage is increased by 25%; from 2024, Casual Conversion gives eligible workers the right to request permanent status (after &ge; 6 months); (2) State Payroll Tax is a cross-state trap: NSW, VIC, and QLD have different thresholds / rates, and cross-state employment may require separate registrations with grouped threshold calculation; (3) Wage Theft was criminalized from 2025/1/1 - intentional underpayment can lead to up to 10 years&rsquo; imprisonment and AUD 8.25M corporate penalties.</p>
`,

  'pg.australia.s4.h': `Payroll Processing & Compliance`,

  'pg.australia.s4.sub': `Monthly execution, reporting, payment, and journal entries / STP, BAS & Journal`,

  'pg.australia.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:24.8%"><col style="width:24.8%"><col style="width:50.5%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment frequency</td><td>Weekly / Fortnightly / Monthly</td><td>Fair Work Act; most Awards require no less frequently than monthly</td></tr>
                <tr><td>Payment method + currency</td><td>Direct deposit &middot; AUD</td><td>Cheque / cash is compliant but rare</td></tr>
                <tr><td>Payslip</td><td>Fair Work Reg s.536 mandatory</td><td>Electronic or paper payslip within 1 business day after each pay run</td></tr>
                <tr><td>Wage deductions</td><td>Only specific items</td><td>Employee written authorization required; cannot deduct more than actual amount owed</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> STP, BAS, Super &amp; State Filings</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18.6%"><col style="width:18.6%"><col style="width:18.6%"><col style="width:18.6%"><col style="width:25.7%"></colgroup>
              <thead><tr><th>Filing Item</th><th>Responsible</th><th>Frequency</th><th>Due Date</th><th>Payment Authority</th></tr></thead>
              <tbody>
                <tr><td>STP Phase 2</td><td>Employer</td><td>Each pay run</td><td>Pay date</td><td>ATO (online STP-enabled software)</td></tr>
                <tr><td>BAS Business Activity Statement</td><td>Employer</td><td>Monthly / quarterly</td><td>21st / 28th of following period</td><td>ATO (PAYG + GST + FBT)</td></tr>
                <tr><td>Super (Payday from 2026/7)</td><td>Employer</td><td>Each pay run</td><td>Within 7 business days after payday</td><td>Super Fund directly / Clearing House</td></tr>
                <tr><td>State Payroll Tax</td><td>Employer</td><td>Monthly / annual</td><td>7th of following month</td><td>NSW Revenue / SRO VIC, etc.</td></tr>
                <tr><td>WorkCover Premium</td><td>Employer</td><td>Annual + renewal</td><td>Varies by state</td><td>WorkSafe VIC / icare NSW, etc.</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules (AASB / IFRS)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:50%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Account (AASB Australian GAAP)</th></tr></thead>
              <tbody>
                <tr><td>Salary + Wages + Bonus + Annual Leave</td><td>Employee Benefits - Salaries &amp; Wages</td></tr>
                <tr><td>Super Guarantee 12%</td><td>Employee Benefits - Superannuation Expense</td></tr>
                <tr><td>State Payroll Tax</td><td>Employee Benefits - Payroll Tax</td></tr>
                <tr><td>WorkCover / WorkSafe Premium</td><td>Employee Benefits - Workers Compensation</td></tr>
                <tr><td>PAYG Withholding</td><td>Liability - PAYG Withholding Payable</td></tr>
                <tr><td>Net Pay</td><td>Bank - CBA / ANZ / NAB / Westpac</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s4.b4': `Annual filings, termination settlement, and foreign workers / Annual Filings &amp; Termination`,

  'pg.australia.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Filings</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:25%"><col style="width:25%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>STP Finalisation</td><td>Employer &rarr; ATO</td><td>14 July following year</td><td>Finalizes employee annual Income Statement</td></tr>
                <tr><td>TPAR (contractor reporting)</td><td>Employer &rarr; ATO</td><td>28 August following year</td><td>Building / Cleaning / Courier and related industries</td></tr>
                <tr><td>FBT return</td><td>Employer &rarr; ATO</td><td>21 May following year</td><td>Fringe Benefits Tax; FBT year 4/1 - 3/31</td></tr>
                <tr><td>State Payroll Tax Annual Reconciliation</td><td>Employer</td><td>July following year</td><td>Annual reconciliation by state</td></tr>
                <tr><td>WorkCover Premium Renewal</td><td>Employer</td><td>By state</td><td>Annual actual wage reconciliation + renewal</td></tr>
                <tr><td>Company Income Tax Return</td><td>Company</td><td>By end of April after year-end</td><td>Corporate tax; standard financial year ends 6/30</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s4.b6': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Termination &amp; Foreign Workers</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.3%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Notice</td><td>1-5 weeks</td><td>Based on service (NES Sec. 117) + 1 week if age 45+</td></tr>
                <tr><td>Redundancy Pay</td><td>4-16 weeks</td><td>Based on service; NES Sec. 119 standard</td></tr>
                <tr><td>Unused Annual Leave payout</td><td>Mandatory</td><td>At base rate + 17.5% Loading if applicable</td></tr>
                <tr><td>Unused LSL Long Service Leave</td><td>Mandatory by state</td><td>State rules; usually triggered from 10 years</td></tr>
                <tr><td>Final Pay + ETP</td><td>Within 7 days after termination</td><td>Employment Termination Payment (ETP) tax applies</td></tr>
                <tr><td>Foreign workers</td><td>482 / 186 / TSS Skills in Demand Visa</td><td>From 2024/12/7, TSS 482 replaced by SID by stream</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.australia.s4.b7': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key changes for Australia Payroll in 2026: (1) Payday Super is mandatory from 2026/7/1 - 12% Super must be paid into the employee fund with each pay run and received within 7 business days; quarterly payment is abolished; (2) Award minimum wages increased by +3.5% from 2025/7/1 - national minimum wage is AUD 24.95 / hour (948/week), and 121 Modern Awards increased together; (3) Wage Theft criminalization took effect on 2025/1/1 - intentional underpayment can expose companies to penalties up to AUD 8.25M and individuals to 10 years&rsquo; imprisonment.</p>
`,
};
