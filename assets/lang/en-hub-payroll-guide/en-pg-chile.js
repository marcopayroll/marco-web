window.MARCO_LANG_EN_PG_CHILE = {

  /* ── Hero ── */
  'pg.chile.desc': 'Complete operational guide to Chile payroll &mdash; covering RUT tax registration, Previred social security submissions (AFP pensions / Fonasa-Isapre health / AFC unemployment), UF and UTM inflation-adjusted salary ceilings, monthly income tax withholding (Impuesto Único), Gratificación statutory profit-sharing, and termination settlements (Finiquito) under the Labour Code.',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.chile.s1.h': 'Scope &amp; Application',

  'pg.chile.s1.b1': `
          <p class="au-table-title">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in Chile (SpA / Ltda. / S.A.).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly hired by the local entity, subject to the Labour Code (C&oacute;digo del Trabajo).</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on Chilean tax law (Ley sobre Impuesto a la Renta) and social security regulations (D.L. 3500 pensions / Ley 18.933 health insurance).</span>
            </div>
          </div>
  `,

  'pg.chile.s1.b2': `This framework covers how companies complete Payroll Set-up, salary calculation, monthly filing and payment, and annual compliance management in Chile.`,

  'pg.chile.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Chilean Payroll operates on the UF (Unidad de Fomento, inflation-adjusted unit) as the core measurement standard. Social security contribution ceilings, Gratificaci&oacute;n ceilings, tax thresholds, and other statutory limits are all expressed in UF values, which fluctuate daily. As of 2026, the Tope Imponible has been adjusted to 90 UF (pensions/health insurance) and 135.2 UF (unemployment insurance). Payroll systems must dynamically convert based on the current day&rsquo;s UF value.</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.chile.s2.h': 'Payroll Set-up',
  'pg.chile.s2.sub': 'How to establish legal payroll capability in Chile',

  'pg.chile.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Social Security &amp; Tax Registration (Previred &middot; AFP &middot; SII Registration)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:18%"><col style="width:13%"><col style="width:44%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>RUT (Tax Registration Number)</td><td>Chile local entity</td><td>Yes</td><td>Register with SII (Servicio de Impuestos Internos)</td></tr>
                <tr><td>Previred Registration</td><td>Chile local entity</td><td>Yes</td><td>Unified social security contribution platform; required for all monthly payments</td></tr>
                <tr><td>Direcci&oacute;n del Trabajo Registration</td><td>Chile local entity</td><td>Yes</td><td>Labour Department employer registration; electronic employment contracts filing</td></tr>
                <tr><td>Employee RUT / RUN</td><td>Employee</td><td>Yes</td><td>ID number; used for all social security and tax filing</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> AFP &amp; Isapre / Fonasa Selection</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:18%"><col style="width:13%"><col style="width:44%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>AFP (Pension Fund)</td><td>Employee&rsquo;s choice</td><td>Yes</td><td>Employee selects one AFP (e.g., Habitat/Cuprum/ProVida, etc.)</td></tr>
                <tr><td>Fonasa (Public Health Insurance)</td><td>Employee&rsquo;s choice</td><td>Either/or</td><td>Public health insurance; flat 7% rate</td></tr>
                <tr><td>Isapre (Private Health Insurance)</td><td>Employee&rsquo;s choice</td><td>Either/or</td><td>Private health insurance; &ge; 7% (may be higher); plan customizable</td></tr>
                <tr><td>AFC (Unemployment Insurance)</td><td>Auto-registered</td><td>Yes</td><td>Automatically registered via AFC Chile</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Bank Account &amp; Compliance</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:15%"><col style="width:55%"></colgroup>
              <thead><tr><th>Item</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Payroll Bank Account</td><td>Yes</td><td>Local CLP account</td></tr>
                <tr><td>Liquidaci&oacute;n de Sueldo (Payslip)</td><td>Yes</td><td>Statutory obligation; must itemize all Haberes and Descuentos</td></tr>
                <tr><td>Reglamento Interno</td><td>Yes (&ge; 10 employees)</td><td>Companies with &ge; 10 employees must establish and file internal regulations with the Labour Department</td></tr>
                <tr><td>Comit&eacute; Paritario</td><td>Yes (&ge; 25 employees)</td><td>&ge; 25 employees must establish labour-management joint safety committee</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.chile.s3.h': 'Payroll Calculation',
  'pg.chile.s3.sub': 'How salary and employee entitlements are calculated',

  'pg.chile.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary, Minimum Wage &amp; Working Hours</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:72%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Pay Method</td><td>Monthly salary (Sueldo Mensual) is the primary method</td></tr>
                <tr><td>Pay Cycle</td><td>Calendar month; maximum of once per month</td></tr>
                <tr><td>Statutory Working Hours</td><td>45 hours per week (post-labour reform, gradually reducing to 40 hours by 2028)</td></tr>
                <tr><td>Overtime (Horas Extras)</td><td>Hourly rate &times; 1.5 (+50%); requires written agreement and maximum 2 hours per day</td></tr>
                <tr><td>Ingreso M&iacute;nimo Mensual</td><td>CLP $500,000/month (2024); monitor annual adjustments</td></tr>
                <tr><td>Gratificaci&oacute;n Legal</td><td>Statutory profit distribution: Art. 50 method pays 25% of monthly salary per month, or Art. 47 method pays 30% of annual taxable profit (capped at 4.75 IMM per person per year)</td></tr>
                <tr><td>Decimal Handling</td><td>Round to CLP $1 (Chilean peso has no decimal places)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Leave Entitlements (Feriado Anual &amp; Statutory Leave)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:72%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Annual Leave (Feriado Anual)</td><td>After 1 year of service: 15 working days (consecutive, with Saturdays counted within)</td></tr>
                <tr><td>Feriado Progresivo</td><td>+1 day for each 3 years of service (with same or different employer); applies from 13th year onwards</td></tr>
                <tr><td>Leave Accumulation</td><td>Maximum accumulation of 2 years of unused annual leave</td></tr>
                <tr><td>Public Holidays (Feriados)</td><td>16 days/year (including Fiestas Patrias national holidays, Christmas, etc.)</td></tr>
                <tr><td>Sick Leave (Licencia M&eacute;dica)</td><td>First 3 days unpaid (Carencia); from day 4 onwards Fonasa/Isapre pays a Subsidio</td></tr>
                <tr><td>Maternity Leave (Pre/Postnatal)</td><td>6 weeks pre-natal + 12 weeks post-natal = 18 weeks + Postnatal Parental 12/18 weeks</td></tr>
                <tr><td>Paternity Leave</td><td>5 days paid</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Mid-section insight after Leave table */
  'pg.chile.s3.b2-insight': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Chilean annual leave is 15 working days but operates under a &ldquo;consecutive leave&rdquo; system where Saturdays count as leave days (even if work is not required), making the actual calendar time available approximately 3 weeks. Employers must grant annual leave after the employee completes 1 year, but it may be split (with at least one period &ge; 10 consecutive days). Unused annual leave may accumulate for a maximum of 2 years; beyond that, employers face penalty risks.</p>
  `,

  'pg.chile.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Social Security Contributions (Cotizaciones Previsionales) &mdash; January 2026 onwards</p>
          <p class="au-bold-label">Remuneración Imponible (Taxable Remuneration) Definition:</p>
          <div class="au-bullet-list" style="margin-top:16px; margin-bottom:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Taxable remuneration = Fixed salary + bonuses + commissions + other taxable allowances</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Monthly ceiling: Tope Imponible (floats by UF value)</span>
            </div>
          </div>
          <p class="au-bold-label">Employee Social Security Withholdings:</p>
          <div class="au-table-wrap" style="margin-top:12px;">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:18%"><col style="width:54%"></colgroup>
              <thead><tr><th>Item</th><th>Rate</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>AFP (Pension Fund)</td><td>~11.5%&ndash;12.5%</td><td>10% mandatory savings + AFP management fee (varies by AFP, approx. 1.5%&ndash;2.5%)</td></tr>
                <tr><td>Salud (Health Insurance)</td><td>7%</td><td>Fonasa or Isapre (Isapre may be &gt; 7%; difference paid by employee)</td></tr>
                <tr><td>AFC Employee Share</td><td>0.6%</td><td>Unemployment insurance employee contribution (indefinite-term contracts)</td></tr>
                <tr><td>Tope AFP / Salud</td><td colspan="2">90 UF/month as of 2026</td></tr>
                <tr><td>Tope AFC</td><td colspan="2">135.2 UF/month as of 2026</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-bold-label" style="margin-top:24px;">Employer Social Security Contributions:</p>
          <div class="au-table-wrap" style="margin-top:12px;">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:18%"><col style="width:54%"></colgroup>
              <thead><tr><th>Item</th><th>Rate</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>AFC Employer Share</td><td>2.4%</td><td>Unemployment insurance employer contribution (indefinite-term contracts)</td></tr>
                <tr><td>AFC (Fixed-term contracts)</td><td>3%</td><td>Employer bears full amount for fixed-term contracts (employee does not contribute)</td></tr>
                <tr><td>SIS (Occupational Injury/Survivor Insurance)</td><td>1.54%</td><td>Adjusted to 1.54% as of January 2026; employer-funded</td></tr>
                <tr><td>Mutual (Occupational Insurance)</td><td>0.95% + add-ons</td><td>Base 0.95% + industry add-on (0%&ndash;3.4%); employer-funded</td></tr>
                <tr><td>SANNA (Severe Child Illness Insurance)</td><td>0.03%</td><td>Ley 21.063; employer-funded</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Mid-section insight after Social Security table */
  'pg.chile.s3.b3-insight': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Starting 2026, the Tope Imponible increased from 81.6 UF to 90 UF (AFP/health insurance) and 135.2 UF (AFC unemployment insurance); the SIS rate was adjusted from 1.53% to 1.54%. The UF value fluctuates daily (approximately CLP $38,800 in early 2026); payroll must convert the monthly Tope based on the UF value on the last day of the pay month. Chilean pension reform (Reforma Previsional) is ongoing, and additional employer contributions may be gradually introduced.</p>
  `,

  'pg.chile.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Personal Income Tax (Impuesto &Uacute;nico de Segunda Categor&iacute;a) &mdash; Monthly Income Tax Withholding</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:12%"><col style="width:58%"></colgroup>
              <thead><tr><th>Monthly Taxable Income (UTM)</th><th>Rate</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>&le; 13.5 UTM</td><td>Exempt</td><td>Approximately CLP $930,000/month or below is tax-exempt</td></tr>
                <tr><td>13.5 &ndash; 30 UTM</td><td>4%</td><td>&mdash;</td></tr>
                <tr><td>30 &ndash; 50 UTM</td><td>8%</td><td>&mdash;</td></tr>
                <tr><td>50 &ndash; 70 UTM</td><td>13.5%</td><td>&mdash;</td></tr>
                <tr><td>70 &ndash; 90 UTM</td><td>23%</td><td>&mdash;</td></tr>
                <tr><td>90 &ndash; 120 UTM</td><td>30.4%</td><td>&mdash;</td></tr>
                <tr><td>&gt; 120 UTM</td><td>35%</td><td>Maximum marginal tax rate (reduced from 40% as of 2024)</td></tr>
              </tbody>
            </table>
          </div>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Taxable income = Remuneración Imponible - AFP - Salud (calculated after statutory deductions)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>UTM (Unidad Tributaria Mensual, monthly tax unit) is published monthly by SII; payroll must reference the current month&rsquo;s UTM value</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employers withhold (Retención) on a monthly basis; no annual reconciliation &mdash; employees may self-file for tax refunds if applicable</span>
            </div>
          </div>
  `,

  'pg.chile.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Gratificación Legal (Statutory Profit-Sharing Obligation)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:72%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Art. 47 Method</td><td>Annual taxable profit &times; 30%, distributed to employees based on salary proportion (capped at 4.75 IMM/person/year)</td></tr>
                <tr><td>Art. 50 Method (Most Common)</td><td>Monthly payment of monthly salary &times; 25%, regardless of company profitability (employer guarantee)</td></tr>
                <tr><td>Monthly Ceiling</td><td>Art. 50 monthly ceiling = 4.75 IMM &divide; 12 (approximately CLP $198,000/month)</td></tr>
                <tr><td>Social Security Treatment</td><td>Gratificación is included in Remuneración Imponible and subject to social security and tax</td></tr>
              </tbody>
            </table>
          </div>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>The vast majority of employers choose the Art. 50 method (25% monthly guarantee) because it is predictable and does not depend on annual profit.</span>
            </div>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.chile.s4.h': 'Payroll Processing &amp; Compliance',
  'pg.chile.s4.sub': 'Monthly execution, filing and payment, and accounting treatment',

  'pg.chile.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:40%"><col style="width:38%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Monthly</td><td>Maximum once per month; can agree on mid-month advance payment</td></tr>
                <tr><td>Payment Method</td><td>Bank transfer</td><td>Transferencia Bancaria to employee account</td></tr>
                <tr><td>Liquidaci&oacute;n de Sueldo</td><td>Statutory obligation</td><td>Must itemize Haberes (income items) and Descuentos (deduction items)</td></tr>
                <tr><td>Record Retention</td><td>5 years</td><td>Required by labour law and tax law</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Filing &amp; Payment &mdash; Previred</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18%"><col style="width:13%"><col style="width:13%"><col style="width:24%"><col style="width:32%"></colgroup>
              <thead><tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Previred Social Security Payment</td><td>Employer</td><td>Monthly</td><td>10&ndash;13 of following month</td><td>Combined submission: AFP + Health insurance + AFC + SIS + Mutual via Previred</td></tr>
                <tr><td>F29 (Income Tax)</td><td>Employer</td><td>Monthly</td><td>12th of following month</td><td>Submit and remit monthly withheld income tax (Impuesto &Uacute;nico) to SII</td></tr>
                <tr><td>Libro de Remuneraciones</td><td>Employer</td><td>Monthly</td><td>&mdash;</td><td>Electronic payroll register; must be updated monthly</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-bold-label" style="margin-top:16px;">Previred Core Notes:</p>
          <div class="au-bullet-list" style="margin-top:12px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Previred is Chile&rsquo;s unified social security contribution platform that consolidates payments for AFP + Salud + AFC + SIS + Mutual + SANNA</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Late payment incurs interest and penalties; employer bears personal liability for unpaid social security contributions</span>
            </div>
          </div>
  `,

  'pg.chile.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>Item</th><th>Account</th></tr></thead>
              <tbody>
                <tr><td>Sueldo Bruto + Gratificaci&oacute;n</td><td>&rarr; Gasto de Remuneraciones (Expense)</td></tr>
                <tr><td>Employer AFC + SIS + Mutual + SANNA</td><td>&rarr; Gasto de Remuneraciones (Expense)</td></tr>
                <tr><td>Employee AFP + Salud + AFC + Impuesto</td><td>&rarr; Retenciones por Pagar (Liability)</td></tr>
                <tr><td>Sueldo L&iacute;quido (Net Pay)</td><td>&rarr; Banco</td></tr>
                <tr><td>Provisi&oacute;n Indemnizaci&oacute;n</td><td>&rarr; Provisiones (Provision)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Compliance &amp; Termination</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:16%"><col style="width:22%"><col style="width:40%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>DJ1887 (Annual Payroll Return)</td><td>Employer</td><td>March of following year</td><td>Submit annual employee payroll and withholding summary to SII</td></tr>
                <tr><td>Certificado de Sueldos</td><td>Employer</td><td>March of following year</td><td>Provide annual income certificate to each employee</td></tr>
                <tr><td>Ingreso M&iacute;nimo Update</td><td>&mdash;</td><td>Typically March&ndash;May each year</td><td>Minimum wage annual adjustment</td></tr>
                <tr><td>UF / UTM Update</td><td>&mdash;</td><td>Daily / Monthly</td><td>UF fluctuates daily; UTM published monthly by SII</td></tr>
                <tr><td>Tope Imponible Update</td><td>&mdash;</td><td>As per policy</td><td>As of 2026: 90 UF / 135.2 UF</td></tr>
              </tbody>
            </table>
          </div>
          <div class="au-table-group" style="margin-top:24px;">
            <p class="au-table-title">Termination Settlement (Finiquito):</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:25%"><col style="width:75%"></colgroup>
                <thead><tr><th>Item</th><th>Rule</th></tr></thead>
                <tbody>
                  <tr><td>Notice Period (Aviso Previo)</td><td>30 days written notice; failure to provide notice requires payment of 1 month compensation-in-lieu</td></tr>
                  <tr><td>Indemnización por Años de Servicio</td><td>1 month salary for each full year of service (capped at 11 years = 11 months); monthly salary capped at 90 UF</td></tr>
                  <tr><td>Applicable Circumstances</td><td>Mandatory when dismissal is for business needs (Art. 161); other circumstances subject to contract terms</td></tr>
                  <tr><td>Unused Annual Leave Cash-out</td><td>Unused Feriado Anual must be fully paid out (Feriado Proporcional)</td></tr>
                  <tr><td>Finiquito Execution</td><td>Must be executed at a notary public or labour office (Inspección del Trabajo); payment required within 10 working days</td></tr>
                </tbody>
              </table>
            </div>
          </div>
  `,

  'pg.chile.s4.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">The monthly salary ceiling for Chilean Indemnizaci&oacute;n (severance) is also 90 UF as of 2026, meaning the severance calculation base is capped at 90 UF. For highly compensated employees, actual severance may be less than monthly salary &times; years of service. The Finiquito (termination settlement document) must be executed at a notary public or labour authority (Inspecci&oacute;n del Trabajo) to be valid; otherwise the employer faces the risk of double payment.</p>
  `,

};
