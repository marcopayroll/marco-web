/* Payroll Guide — Turkey page content (hr-knowledge-hub-payroll-guide-turkey.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_TURKEY = {
  'pg.turkey.desc': `This framework explains: how companies complete Payroll Set-up, salary calculation, monthly filing and payment, and annual compliance management in Türkiye.`,

  'pg.turkey.s1.h': `Scope & Application`,

  'pg.turkey.s1.b1': `
          <p class="article-p">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in Türkiye (Limited Şirketi / Anonim Şirketi)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly employed by the local entity, subject to the Labour Law (İş Kanunu No. 4857)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on the Turkish Income Tax Law, and the Social Insurance and Universal Health Insurance Law (SGK, No. 5510)</span>
            </div>
          </div>
`,

  'pg.turkey.s1.b2': `This framework explains: how companies complete Payroll Set-up, salary calculation, monthly filing and payment, and annual compliance management in Türkiye.`,

  'pg.turkey.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Türkiye&rsquo;s Payroll system operates on a dual-track filing basis centred on SGK (social security) and GİB (tax authority). In the context of high inflation in recent years, the minimum wage is adjusted frequently (up to twice a year), and the portion of salary at or below the minimum wage is exempt from income tax and stamp duty. Payroll calculation logic must adapt dynamically.</p>
`,

  'pg.turkey.s2.h': `Payroll Set-up`,

  'pg.turkey.s2.sub': `How to establish legal payroll capability in Türkiye`,

  'pg.turkey.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> SGK (Sosyal Güvenlik Kurumu) Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28.4%"><col style="width:28.4%"><col style="width:14.9%"><col style="width:28.4%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>SGK Employer Registration</td><td>Türkiye local entity</td><td>Yes</td><td>Register with SGK as a workplace (İşyeri Tescili)</td></tr>
                <tr><td>Employee SGK Enrolment</td><td>Processed by employer</td><td>Yes</td><td>SGK İşe Giriş Bildirgesi must be completed 1 day before the employee&rsquo;s start date</td></tr>
                <tr><td>İŞKUR Registration</td><td>Employer</td><td>Yes</td><td>Turkish Employment Agency, related to unemployment insurance</td></tr>
                <tr><td>BES (Supplementary Pension)</td><td>Employer</td><td>Yes</td><td>Auto-enrolment system (Otomatik BES); employees may opt out within 2 months</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> GİB (Gelir İdaresi Başkanlığı) Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28.4%"><col style="width:28.4%"><col style="width:14.9%"><col style="width:28.4%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Vergi Levhası (Tax Registration)</td><td>Türkiye local entity</td><td>Yes</td><td>Register with the tax office to obtain a Vergi Numarası (tax number)</td></tr>
                <tr><td>Stopaj Withholding Obligation</td><td>Türkiye local entity</td><td>Yes</td><td>Employer acts as the income tax withholding agent</td></tr>
                <tr><td>Employee T.C. Kimlik No.</td><td>Employee</td><td>Yes</td><td>Turkish national ID number (11 digits), used for all filings</td></tr>
                <tr><td>Employee IBAN</td><td>Employee</td><td>Yes</td><td>Bank transfer must be made to the employee&rsquo;s own IBAN account</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Bank Account &amp; Insurance</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:16.7%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Payroll Bank Account</td><td>Yes</td><td>Local TRY account; companies with &ge;5 employees must pay salaries via bank transfer</td></tr>
                <tr><td>Bordro (Pay Slip)</td><td>Yes</td><td>Statutory obligation; detailed monthly salary breakdown must be provided</td></tr>
                <tr><td>İSG (Occupational Safety and Health)</td><td>Yes</td><td>Must employ İSG professionals or outsource to a certified provider</td></tr>
                <tr><td>İşyeri Hekimi (Occupational Physician)</td><td>Yes</td><td>Statutory requirement; larger companies require higher-level staffing</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s3.h': `Payroll Calculation`,

  'pg.turkey.s3.sub': `How salary and employee entitlements are calculated`,

  'pg.turkey.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary Calculation &amp; Proration Logic</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:29.7%"><col style="width:70.3%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Pay Basis</td><td>Primarily monthly salary (Aylık Ücret)</td></tr>
                <tr><td>Pay Cycle</td><td>Calendar month</td></tr>
                <tr><td>Proration Method</td><td>Monthly salary &divide; 30 &times; actual working days (Türkiye legally calculates each month as 30 days)</td></tr>
                <tr><td>Overtime Pay</td><td>Normal hourly rate &times; 1.5 (statutory); rest day overtime &times; 2.0</td></tr>
                <tr><td>Working Hour Limits</td><td>45 hours/week; hours exceeding this are overtime; annual overtime cap 270 hours</td></tr>
                <tr><td>Minimum Wage (Asgari Ücret)</td><td>Announced by the government annually (or semi-annually) (2024: TRY 20,002.50/month Gross)</td></tr>
                <tr><td>Decimal Handling</td><td>Rounded to 2 decimal places (TRY Kuruş)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:29.7%"><col style="width:70.3%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Annual Leave (Yıllık İzin)</td><td>1-5 years: 14 days; 5-15 years: 20 days; &gt;15 years: 26 days (calendar days)</td></tr>
                <tr><td>Annual Leave Pay</td><td>Paid; pre-paid in a lump sum before the leave period</td></tr>
                <tr><td>Public Holidays</td><td>15 days per year (including religious holidays Bayram + National Day, etc.)</td></tr>
                <tr><td>Sick Leave</td><td>SGK pays temporary incapacity allowance (İş Göremezlik Ödeneği)</td></tr>
                <tr><td>Maternity Leave (Doğum İzni)</td><td>8 weeks prenatal + 8 weeks postnatal = 16 weeks; SGK pays 2/3 of daily wage</td></tr>
                <tr><td>Breastfeeding Leave</td><td>1.5 hours paid breastfeeding leave per day until the child turns 1</td></tr>
                <tr><td>Severance Pay (Kıdem Tazminatı)</td><td>30 days&rsquo; Gross salary per year of service; subject to an annual cap</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s3.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Türkiye&rsquo;s severance pay (Kıdem Tazminatı) is a significant employment cost. Employees with 1+ year of service are entitled to it upon no-fault termination, retirement, military service, and other qualifying events. It amounts to 30 days&rsquo; salary per year, with a semi-annually adjusted cap (2024 H1: TRY 35,058.58). Companies must accrue provisions on their books monthly.</p>
`,

  'pg.turkey.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Social Security Contribution Breakdown</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:25%"><col style="width:25%"></colgroup>
              <thead><tr><th>Item</th><th>Employer</th><th>Employee</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Short-term Insurance (Kısa Vadeli)</td><td>2%</td><td>&ndash;</td><td>Work injury / occupational disease / maternity</td></tr>
                <tr><td>Long-term Insurance - Disability / Old-age / Survivors</td><td>11%</td><td>9%</td><td>Malullük, Yaşlılık, Ölüm (MYÖ)</td></tr>
                <tr><td>Universal Health Insurance (GSS)</td><td>7.5%</td><td>5%</td><td>Genel Sağlık Sigortası</td></tr>
                <tr><td>Unemployment Insurance (İşsizlik Sigortası)</td><td>2%</td><td>1%</td><td>Managed by İŞKUR</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p">Employer total: 22.5%; Employee total: 15%; Grand total: 37.5% (based on Gross Salary)</p>
          <div class="au-bullet-list">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>5% Employer Incentive:</strong> Qualifying employers may enjoy a 5% long-term insurance reduction (İşveren Teşviki), effectively reducing the employer rate to approximately 17.5%</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>SGK Base Ceiling:</strong> Minimum wage &times; 7.5 is the monthly contribution cap</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>SGK Base Floor:</strong> Must not be lower than the current minimum wage</span>
            </div>
          </div>
`,

  'pg.turkey.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Income Tax Withholding (Gelir Vergisi Stopajı)</p>
          <div class="au-bullet-list">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>Progressive Tax Rates:</strong> 15% (&le;TRY 110,000) / 20% (up to 230,000) / 27% (up to 580,000) / 35% (up to 3,000,000) / 40% (excess)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>Minimum Wage Tax Exemption:</strong> The portion at or below the minimum wage is exempt from income tax (from 2024)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>Withholding Method:</strong> Monthly withholding (Stopaj), calculated on an annual cumulative progressive basis</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>Damga Vergisi (Stamp Duty):</strong> Gross salary &times; 0.759% (minimum wage portion exempt)</span>
            </div>
          </div>
`,

  'pg.turkey.s3.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">From 2024, the portion of salary at or below the minimum wage is exempt from income tax and stamp duty. This means all employees enjoy at least the minimum wage amount as a tax-free threshold. Payroll calculation must split wages into &ldquo;within minimum wage&rdquo; and &ldquo;excess portion&rdquo; and process them separately. This is a calculation logic unique to Türkiye.</p>
`,

  'pg.turkey.s3.b7': `
          <p class="au-table-title"><span class="au-table-num">v.</span> BES Supplementary Pension (Bireysel Emeklilik Sistemi) - Auto-Enrolment</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:29.7%"><col style="width:70.3%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Auto-Enrolment (Otomatik BES)</td><td>Employees under 45 are automatically enrolled; employer must withhold from salary</td></tr>
                <tr><td>Employee Contribution</td><td>3% of Gross salary</td></tr>
                <tr><td>Government Subsidy</td><td>25% matching of employee contribution by the government</td></tr>
                <tr><td>Opt-out Right</td><td>Employee may apply to opt out within 2 months of enrolment</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s4.h': `Payroll Processing & Compliance`,

  'pg.turkey.s4.sub': `Monthly execution, filing and payment, and accounting treatment`,

  'pg.turkey.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:24.8%"><col style="width:24.8%"><col style="width:50.4%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Monthly</td><td>Must be paid at least once per month; no later than 20 days after the pay month</td></tr>
                <tr><td>Payment Method</td><td>Bank transfer</td><td>Companies with &ge;5 employees are legally required to pay via bank transfer</td></tr>
                <tr><td>Bordro (Pay Slip)</td><td>Statutory obligation</td><td>Must be provided monthly, including SGK/tax deduction details</td></tr>
                <tr><td>Record Retention</td><td>10 years</td><td>Both labour law and tax law require long-term retention</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Filing &amp; Payment</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:14%"><col style="width:12%"><col style="width:19%"><col style="width:33%"></colgroup>
              <thead><tr><th>Item</th><th>Filing Entity</th><th>Frequency</th><th>Deadline</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>MUHSGK Filing</td><td>Employer</td><td>Monthly</td><td>End of the following month</td><td>SGK monthly service and income declaration (Muhtasar + SGK combined)</td></tr>
                <tr><td>SGK Contribution Payment</td><td>Employer</td><td>Monthly</td><td>End of the following month</td><td>Employer + employee social security contributions paid together</td></tr>
                <tr><td>Stopaj (Income Tax)</td><td>Employer</td><td>Monthly</td><td>26th of the following month</td><td>Filed and paid via Muhtasar Beyanname</td></tr>
                <tr><td>Damga Vergisi (Stamp Duty)</td><td>Employer</td><td>Monthly</td><td>26th of the following month</td><td>Filed and paid together with income tax</td></tr>
                <tr><td>BES Contribution</td><td>Employer</td><td>Monthly</td><td>Promptly after payroll</td><td>Withheld and remitted to the BES management institution</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:50%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Account</th></tr></thead>
              <tbody>
                <tr><td>Gross Salary</td><td>&rarr; Payroll Expense</td></tr>
                <tr><td>Employer SGK (~22.5%)</td><td>&rarr; Payroll Expense</td></tr>
                <tr><td>Kıdem Tazminatı Provision</td><td>&rarr; Payroll Expense</td></tr>
                <tr><td>Employee SGK + Gelir Vergisi + Damga + BES</td><td>&rarr; Payroll Liability</td></tr>
                <tr><td>Net Pay</td><td>&rarr; Cash / Bank</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Compliance</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:18%"><col style="width:22%"><col style="width:32%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Yıllık Gelir Vergisi (Annual Income Tax)</td><td>Employee (if applicable)</td><td>March following year</td><td>Most salaried employees are settled through monthly Stopaj and do not need to file</td></tr>
                <tr><td>Asgari Ücret Update</td><td>&ndash;</td><td>January each year (/ July)</td><td>Government announces new minimum wage; Payroll must be updated simultaneously</td></tr>
                <tr><td>SGK Base Floor/Ceiling Update</td><td>&ndash;</td><td>January each year (/ July)</td><td>Adjusted in line with minimum wage; contribution base floor and ceiling change accordingly</td></tr>
                <tr><td>Kıdem Tazminatı Cap Update</td><td>&ndash;</td><td>Semi-annually</td><td>Severance pay monthly cap adjusted in line with minimum wage / civil service coefficient</td></tr>
                <tr><td>BES Contribution Rate Review</td><td>Employer</td><td>Annual</td><td>Confirm employee BES status and contribution rates</td></tr>
                <tr><td>İSG Annual Report</td><td>Employer</td><td>March following year</td><td>Occupational safety and health annual assessment report</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Termination Settlement</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:29.7%"><col style="width:70.3%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th></tr></thead>
              <tbody>
                <tr><td>Notice Period (İhbar Süresi)</td><td>&lt;6 months: 2 weeks; 6 months-1.5 years: 4 weeks; 1.5-3 years: 6 weeks; &gt;3 years: 8 weeks</td></tr>
                <tr><td>Notice Compensation (İhbar Tazminatı)</td><td>The party that fails to provide advance notice must pay the corresponding notice period wages as compensation</td></tr>
                <tr><td>Severance Pay (Kıdem Tazminatı)</td><td>30 days&rsquo; Gross salary per year of service (including all fixed allowances); subject to semi-annual cap</td></tr>
                <tr><td>Unused Annual Leave Cash-out</td><td>All unused annual leave must be converted to cash and paid upon termination</td></tr>
                <tr><td>Settlement Timeline</td><td>All outstanding amounts must be settled in a lump sum at the time of termination</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.turkey.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Türkiye&rsquo;s termination cost consists of three components: İhbar Tazminatı (notice compensation) + Kıdem Tazminatı (severance pay) + unused annual leave cash-out. Severance pay is subject to income tax and stamp duty in full, but the SGK treatment of notice compensation and severance pay differs: severance pay is exempt from SGK, while notice compensation is subject to SGK contributions. This distinction must be strictly maintained in calculations.</p>
`,
};
