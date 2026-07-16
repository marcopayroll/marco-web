/* Payroll Guide — Argentina page content (hr-knowledge-hub-payroll-guide-argentina.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_ARGENTINA = {
  'pg.argentina.desc': `Complete operational guide to Argentina payroll — covering AFIP registrations, CCT collective agreements, social security contributions (Jubilación, Obra Social, ART), Ganancias income tax withholding, SAC (Aguinaldo) bonus calculations, and statutory severance and leave entitlements under Ley 20.744.`,

  'pg.argentina.s1.h': `Scope & Application`,

  'pg.argentina.s1.b1': `
          <p class="au-table-title">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in Argentina (S.A. / S.R.L.).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees are directly employed by that local entity and are subject to the applicable industry collective agreement (CCT).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Compensation is managed on the compliance basis of Ley de Contrato de Trabajo N&deg; 20.744.</span>
            </div>
          </div>
`,

  'pg.argentina.s1.b2': `This framework explains how companies complete Payroll Set-up, salary calculation, monthly filing and payment, and annual compliance management in Argentina.`,

  'pg.argentina.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Payroll in Argentina is strongly shaped by industry collective agreements (Convenio Colectivo de Trabajo, CCT). Minimum wages, bonus structures, and benefits can vary greatly by industry. Companies should first confirm the applicable CCT.</p>
`,

  'pg.argentina.s2.h': `Payroll Set-up`,

  'pg.argentina.s2.sub': `How to build legal payroll capability in Argentina`,

  'pg.argentina.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Statutory Social Security Registration (AFIP / ANSES)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:16%"><col style="width:18%"><col style="width:14%"><col style="width:22%"><col style="width:30%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Applicable Employees</th><th>Practical Notes</th></tr></thead>
              <tbody>
                <tr><td>Jubilaci&oacute;n</td><td>Local entity</td><td>Yes</td><td>All regular employees</td><td>Pension insurance under the unified SIPA system</td></tr>
                <tr><td>Obra Social</td><td>Local entity</td><td>Yes</td><td>All regular employees</td><td>Health coverage assigned through the industry union</td></tr>
                <tr><td>PAMI</td><td>Local entity</td><td>Yes</td><td>All regular employees</td><td>Medical fund for retirees</td></tr>
                <tr><td>Asignaciones Familiares</td><td>Local entity</td><td>Yes</td><td>All regular employees</td><td>Family allowances managed by ANSES</td></tr>
                <tr><td>ART</td><td>Local entity</td><td>Yes</td><td>All regular employees</td><td>Work injury insurance. The employer must sign with an ART provider</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Tax Registration (AFIP)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:15%"><col style="width:35%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Employer CUIT</td><td>Argentine local entity</td><td>Yes</td><td>Unified tax identification number</td></tr>
                <tr><td>Ganancias withholding</td><td>Local entity</td><td>Yes</td><td>Monthly withholding for fourth-category income tax</td></tr>
                <tr><td>Ingresos Brutos</td><td>Local entity</td><td>Yes</td><td>Provincial turnover tax at employer level</td></tr>
                <tr><td>Employee CUIL</td><td>Employee</td><td>Yes</td><td>Must be provided during onboarding</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Bank Account, Union &amp; Insurance</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:20%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Mandatory</th><th>Practical Notes</th></tr></thead>
              <tbody>
                <tr><td>Payroll bank account</td><td>Yes</td><td>Local ARS account. Salary must be paid by bank transfer</td></tr>
                <tr><td>Employee bank account</td><td>Yes</td><td>Cuenta Sueldo, a free salary account. Employer should assist with setup</td></tr>
                <tr><td>Union dues (Cuota Sindical)</td><td>Depends on CCT</td><td>Withheld from employee salary and remitted to the union</td></tr>
                <tr><td>ART insurance contract</td><td>Yes</td><td>Must be signed with a licensed ART provider</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s3.h': `Payroll Calculation`,

  'pg.argentina.s3.sub': `How salary and employee entitlements are calculated`,

  'pg.argentina.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary Calculation &amp; Proration Logic</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Pay basis</td><td>Monthly salary (Sueldo Mensual)</td></tr>
                <tr><td>Payroll period</td><td>Calendar month</td></tr>
                <tr><td>Proration scenarios</td><td>Joining month, leaving month, unpaid leave</td></tr>
                <tr><td>Proration base</td><td>Actual calendar days in the month</td></tr>
                <tr><td>Daily salary calculation</td><td>Monthly salary &divide; calendar days in that month, such as 28/30/31</td></tr>
                <tr><td>Minimum wage</td><td>SMVM (Salario M&iacute;nimo Vital y M&oacute;vil), adjusted frequently</td></tr>
                <tr><td>Decimal handling</td><td>Round to 2 decimal places</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s3.b2': `
          <p class="au-table-title">Remuneraci&oacute;n Bruta includes:</p>
          <div class="au-bullet-list" style="margin-top:12px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Base salary (Sueldo B&aacute;sico) + CCT-agreed additional payments (Adicionales).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Common additional items: seniority allowance (Antig&uuml;edad), attendance bonus (Presentismo), transport allowance, etc.</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Non-taxable items (No Remunerativo): some CCT negotiation results are paid in non-taxable form.</span>
            </div>
          </div>
`,

  'pg.argentina.s3.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">In Argentina&rsquo;s high-inflation environment, minimum wage (SMVM) and CCT wage scales are adjusted frequently, sometimes monthly. Payroll systems need the ability to respond quickly to salary updates.</p>
`,

  'pg.argentina.s3.b4': `<span class="au-table-num">ii.</span> Statutory Leave &amp; Benefits`,

  'pg.argentina.s3.b5': `
          <p class="au-table-subtitle">Annual Leave (Vacaciones)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Leave entitlement</td><td>Service &lt;5 years: 14 days; 5&ndash;10 years: 21 days; 10&ndash;20 years: 28 days; &gt;20 years: 35 days (calendar days)</td></tr>
                <tr><td>Eligibility condition</td><td>Employee must have worked more than half of the year to receive full annual leave</td></tr>
                <tr><td>Leave period</td><td>Scheduled by employer, between 10/1 and 4/30</td></tr>
                <tr><td>Vacation pay</td><td>Daily salary &times; 1.25 (Plus Vacacional, extra 25%)</td></tr>
                <tr><td>Final settlement</td><td>Prorated unused leave payout + 25% Plus Vacacional</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s3.b6': `
          <p class="au-table-subtitle">Annual Bonus (Aguinaldo / SAC)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Full name</td><td>Sueldo Anual Complementario (SAC)</td></tr>
                <tr><td>Calculation method</td><td>50% of the highest monthly salary in the half-year period</td></tr>
                <tr><td>Payment frequency</td><td>Twice per year, by June 30 and by December 18</td></tr>
                <tr><td>Less than half-year service</td><td>Prorated based on days worked</td></tr>
                <tr><td>Final settlement</td><td>Calculated proportionally and paid in one lump sum</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s3.b7': `
          <p class="au-table-subtitle">Severance Compensation (Indemnizaci&oacute;n)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Dismissal without cause</td><td>For each full year of service = 1 month of the best taxable monthly salary, minimum 1 month</td></tr>
                <tr><td>Monthly salary cap</td><td>Cannot exceed 67% of the highest monthly wage level under the employee&rsquo;s applicable CCT</td></tr>
                <tr><td>Payment in lieu of notice</td><td>During probation: 15 days; regular employee &lt;5 years: 1 month; &ge;5 years: 2 months</td></tr>
                <tr><td>Unused leave payout</td><td>Prorated annual leave + 25% Plus Vacacional</td></tr>
                <tr><td>SAC proportion</td><td>Corresponding SAC proportion on notice pay and compensation must also be paid</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s3.b8': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Argentina&rsquo;s SAC (Aguinaldo) is calculated as 50% of the highest monthly salary in the half-year period, not by a fixed number of days. At termination, the SAC proportion connected to notice pay must also be settled, making the calculation more complex.</p>
`,

  'pg.argentina.s3.b9': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Statutory Contributions Breakdown</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:18%"><col style="width:18%"><col style="width:36%"></colgroup>
              <thead><tr><th>Item</th><th>Employer</th><th>Employee</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Jubilaci&oacute;n (Pension)</td><td>10.17%</td><td>11%</td><td>Unified SIPA pension system</td></tr>
                <tr><td>PAMI</td><td>1.5%</td><td>3%</td><td>Medical fund for retirees</td></tr>
                <tr><td>Obra Social (Health)</td><td>6%</td><td>3%</td><td>Industry union health coverage</td></tr>
                <tr><td>Asignaciones Familiares</td><td>4.44%</td><td>-</td><td>Family allowance fund</td></tr>
                <tr><td>ART (Work Injury)</td><td>By contract</td><td>-</td><td>Rate varies by industry and ART contract</td></tr>
                <tr><td>Cuota Sindical (Union dues)</td><td>-</td><td>2%&ndash;3%</td><td>Depends on CCT. Employer withholds on behalf of union</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-section-sub">Employer total (excluding ART): approx. 24%; employee total (excluding union dues): approx. 17%</p>
`,

  'pg.argentina.s3.b10': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Individual Income Tax Calculation</p>
          <p class="au-section-sub">Impuesto a las Ganancias &mdash; Cuarta Categor&iacute;a</p>
          <div class="au-bullet-list">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Progressive tax rates: 5%&ndash;35%.</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Tax base: monthly taxable income &minus; social security deductions &minus; statutory personal deductions (Deducciones Personales).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Withholding method: monthly withholding based on RG 4003 (AFIP).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Exemption threshold: salaries below a certain level may be fully tax-exempt; this threshold is adjusted every year.</span>
            </div>
          </div>
          <p class="au-table-title" style="margin-top:16px;">Simplified calculation logic:</p>
          <div class="au-numbered-list" style="margin-top:12px;">
            <div class="au-numbered-item">
              <span class="au-numbered-num">1.</span>
              <span>Monthly gross income &minus; employee social security portion = net taxable income.</span>
            </div>
            <div class="au-numbered-item">
              <span class="au-numbered-num">2.</span>
              <span>Deduct Ganancia No Imponible + Deducci&oacute;n Especial + family deductions.</span>
            </div>
            <div class="au-numbered-item">
              <span class="au-numbered-num">3.</span>
              <span>Apply the annual progressive tax table to the accumulated taxable amount.</span>
            </div>
            <div class="au-numbered-item">
              <span class="au-numbered-num">4.</span>
              <span>Deduct tax already paid to determine the current month&rsquo;s ISR withholding.</span>
            </div>
          </div>
`,

  'pg.argentina.s3.b11': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Argentina&rsquo;s Ganancias uses an annual cumulative method (Acumulativo). Each monthly calculation must accumulate the full-year income and tax already paid. SAC months, June and December, often trigger higher tax amounts and should be planned in advance.</p>
`,

  'pg.argentina.s4.h': `Payroll Processing & Compliance`,

  'pg.argentina.s4.sub': `Monthly execution, filing, payment, and accounting treatment`,

  'pg.argentina.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment frequency</td><td>Monthly (some industries semi-monthly)</td><td>The legal interval cannot exceed 1 month</td></tr>
                <tr><td>Pay date</td><td>Before the 4th working day of the following month</td><td>Statutory latest deadline</td></tr>
                <tr><td>Payment method</td><td>Bank transfer (mandatory)</td><td>Cuenta Sueldo. Cash payment is not allowed</td></tr>
                <tr><td>Payslip</td><td>Recibo de Sueldo</td><td>Must be signed by both parties and kept for 10 years</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly AFIP Filing (F931)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:20%"><col style="width:18%"><col style="width:14%"><col style="width:20%"><col style="width:28%"></colgroup>
              <thead><tr><th>Item</th><th>Payer</th><th>Frequency</th><th>Deadline</th><th>Practical Notes</th></tr></thead>
              <tbody>
                <tr><td>DDJJ F931</td><td>Employer</td><td>Monthly</td><td>Varies by final CUIT digit</td><td>Filed through the AFIP system for all social security and tax items</td></tr>
                <tr><td>ART contribution</td><td>Employer</td><td>Monthly</td><td>Aligned with F931</td><td>Work injury insurance contribution based on ART contract</td></tr>
                <tr><td>Union dues withholding</td><td>Employer withholds</td><td>Monthly</td><td>By the 15th of next month</td><td>Deducted from employee salary and remitted to the union</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-table-title">Practical notes:</p>
          <div class="au-bullet-list" style="margin-top:8px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>F931 is the core payroll filing form in Argentina, covering social security + Ganancias + Obra Social + ART information.</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>AFIP sets filing deadlines based on the last digit of the employer CUIT.</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Late filing creates interest and penalties. Serious delays can trigger AFIP enforcement procedures.</span>
            </div>
          </div>
`,

  'pg.argentina.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Ganancias Monthly Withholding</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:20%"><col style="width:15%"><col style="width:15%"><col style="width:25%"></colgroup>
              <thead><tr><th>Item</th><th>Payer</th><th>Frequency</th><th>Deadline</th><th>Practical Notes</th></tr></thead>
              <tbody>
                <tr><td>Ganancias withholding</td><td>Employer</td><td>Monthly</td><td>With F931</td><td>Declared and paid together in F931</td></tr>
                <tr><td>SIRADIG (employee side)</td><td>Employee</td><td>As needed</td><td>-</td><td>Employee reports deductions through this system</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Payroll Journal Mapping Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:55%"><col style="width:45%"></colgroup>
              <thead><tr><th>Item</th><th>Account</th></tr></thead>
              <tbody>
                <tr><td>Gross Salary + SAC + Adicionales</td><td>Payroll Expense</td></tr>
                <tr><td>Employer Contributions (AFIP + ART)</td><td>Payroll Expense</td></tr>
                <tr><td>Employee Deductions (SS + Ganancias + Union)</td><td>Payroll Liability</td></tr>
                <tr><td>Net Pay</td><td>Cash / Bank</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Annual Reconciliation</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:22%"><col style="width:18%"><col style="width:35%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Ganancias annual adjustment</td><td>Employer</td><td>April of following year</td><td>Liquidaci&oacute;n Anual. Refund overpaid tax or collect shortfall</td></tr>
                <tr><td>SAC first installment</td><td>Employer</td><td>June 30</td><td>Highest monthly salary in first half-year &times; 50%</td></tr>
                <tr><td>SAC second installment</td><td>Employer</td><td>December 18</td><td>Highest monthly salary in second half-year &times; 50%</td></tr>
                <tr><td>CCT wage table update</td><td>-</td><td>By CCT negotiation cycle</td><td>Industry minimum wage usually updates quarterly or semi-annually</td></tr>
                <tr><td>SMVM update</td><td>-</td><td>Irregular</td><td>Effective after Consejo del Salario resolution</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.argentina.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Argentina&rsquo;s high inflation and frequent CCT / SMVM wage adjustments make payroll compliance highly complex. Companies should maintain a monthly compliance checklist and closely monitor the latest notices from AFIP, the labor authority, and industry unions.</p>
`,
};
