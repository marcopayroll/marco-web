/* Payroll Guide — Malaysia page content (hr-knowledge-hub-payroll-guide-malaysia.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_MALAYSIA = {
  'pg.malaysia.desc': `A complete guide to running payroll in Malaysia — covering EPF, SOCSO, and EIS registration, monthly salary proration logic, PCB progressive income tax withholding (0%–30%), statutory leave accrual and cash-out rules, and annual compliance including the EA Form and LHDN reconciliation.`,

  'pg.malaysia.s1.h': `Scope & Application`,

  'pg.malaysia.s1.sub': `Scope and Legal Basis / EPF &middot; SOCSO &middot; EIS &middot; LHDN`,

  'pg.malaysia.s1.b1': `
        <p class="au-section-sep">This document applies to:</p>
        <div class="au-bullet-list">
          <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Companies that have established a local legal entity in Malaysia</span></div>
          <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Employees directly hired by the local entity</span></div>
          <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Payroll compliance based on Malaysian law</span></div>
        </div>
`,

  'pg.malaysia.s1.b2': `<strong>This framework covers:</strong> how companies complete Payroll Set-up, salary calculation, monthly filing and payment, and annual compliance management in Malaysia.`,

  'pg.malaysia.s2.h': `Payroll Set-up`,

  'pg.malaysia.s2.sub': `How to establish legal payroll capability in Malaysia`,

  'pg.malaysia.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> Social Security Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Account Holder</th>
                  <th>Mandatory</th>
                  <th>Applicable Employees</th>
                  <th>Operational Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EPF</td>
                  <td>Malaysia local entity</td>
                  <td>Yes</td>
                  <td>Local employees / Foreign employees (subject to contract)</td>
                  <td>Complete registration upon employee onboarding</td>
                </tr>
                <tr>
                  <td>SOCSO</td>
                  <td>Malaysia local entity</td>
                  <td>Yes</td>
                  <td>Local employees</td>
                  <td>Occupational injury and social security protection</td>
                </tr>
                <tr>
                  <td>EIS</td>
                  <td>Malaysia local entity</td>
                  <td>Yes</td>
                  <td>Local employees</td>
                  <td>Employment insurance</td>
                </tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">02</span> Tax &amp; PCB Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Account Holder</th>
                  <th>Mandatory</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LHDN Employer Tax Number</td>
                  <td>Malaysia local entity</td>
                  <td>Yes</td>
                  <td>For tax filing purposes</td>
                </tr>
                <tr>
                  <td>PCB Withholding Status</td>
                  <td>Malaysia local entity</td>
                  <td>Yes</td>
                  <td>For monthly personal income tax withholding</td>
                </tr>
                <tr>
                  <td>Employee Tax Number</td>
                  <td>Employee</td>
                  <td>Varies</td>
                  <td>Not mandatory but recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">03</span> Payroll Bank Account</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Requirement</th>
                  <th>Operational Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Payroll Bank Account</td>
                  <td>Local bank account</td>
                  <td>Recommend separating from operations account</td>
                </tr>
                <tr>
                  <td>Payroll Payment Records</td>
                  <td>Must retain</td>
                  <td>For audit and tax verification purposes</td>
                </tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s2.b4': `
          <p class="au-table-title"><span class="au-table-num">04</span> Employee Insurance</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Mandatory</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Statutory Occupational / Medical Insurance</td>
                  <td>Varies by applicable regulation</td>
                  <td>Typically associated with SOCSO</td>
                </tr>
                <tr>
                  <td>Supplemental Commercial Insurance</td>
                  <td>No</td>
                  <td>Subject to company benefits policy</td>
                </tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s3.h': `Payroll Calculation`,

  'pg.malaysia.s3.sub': `How salary and employee entitlements are calculated`,

  'pg.malaysia.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> Salary Calculation &amp; Proration Logic</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Rule</th></tr>
              </thead>
              <tbody>
                <tr><td>Pay Method</td><td>Monthly salary</td></tr>
                <tr><td>Pay Cycle</td><td>Calendar month</td></tr>
                <tr><td>Proration Scenarios</td><td>Onboarding month, separation month, unpaid leave</td></tr>
                <tr><td>Proration Base</td><td>Actual working days in the month</td></tr>
                <tr><td>Daily Salary Calculation</td><td>Monthly salary &divide; actual working days in month</td></tr>
                <tr><td>Fixed Days</td><td>Not applicable</td></tr>
                <tr><td>Rounding</td><td>Typically retain 2 decimal places</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s3.b2': `
        <p class="au-section-sep"><strong>Working Days Definition:</strong></p>
        <div class="au-bullet-list">
          <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Typically Monday to Friday</span></div>
          <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Exclude weekends and statutory public holidays</span></div>
          <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Monthly working days variable (generally 22&ndash;23 days)</span></div>
        </div>
`,

  'pg.malaysia.s3.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Malaysian law does not prescribe a unified proration formula; proration logic should be based on employment contract and company Payroll Policy, applied consistently.</p>
`,

  'pg.malaysia.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">02</span> Employee Leave Accrual, Utilisation &amp; Settlement</p>

          <p class="au-section-sep"><strong>Leave Accrual:</strong></p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Rule</th></tr>
              </thead>
              <tbody>
                <tr><td>Leave Composition</td><td>Statutory annual leave + additional leave per contract</td></tr>
                <tr><td>Accrual Method</td><td>Accumulate based on proportion of service</td></tr>
                <tr><td>Accrual Frequency</td><td>Monthly</td></tr>
                <tr><td>Calculation Formula</td><td>Annual leave available &divide; 12</td></tr>
                <tr><td>Less Than One Year</td><td>Accrue pro-rata</td></tr>
              </tbody>
            </table>
          </div>

          <p class="au-section-sep"><strong>Leave Utilisation:</strong></p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Rule</th></tr>
              </thead>
              <tbody>
                <tr><td>Annual Leave</td><td>Paid; does not affect salary</td></tr>
                <tr><td>Unpaid Leave</td><td>Triggers salary proration; handled per Working Days rule</td></tr>
                <tr><td>Employee Can Only Use</td><td>Already accrued leave balance</td></tr>
                <tr><td>Deduction After Use</td><td>Balance reduced in real-time</td></tr>
              </tbody>
            </table>
          </div>

          <p class="au-section-sep"><strong>Leave Settlement:</strong></p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Rule</th></tr>
              </thead>
              <tbody>
                <tr><td>Mandatory Settlement</td><td>Yes</td></tr>
                <tr><td>Unused Annual Leave</td><td>Cash-out payment</td></tr>
                <tr><td>Cash-out Base</td><td>Employee daily wage</td></tr>
                <tr><td>Payment Timing</td><td>Included in final paycheck</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Leave cash-out is a mandatory settlement item; separation is merely the settlement timing point, not the starting point of calculation logic.</p>
`,

  'pg.malaysia.s3.b6': `
          <p class="au-table-title"><span class="au-table-num">03</span> Statutory Contributions Breakdown</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Employer</th><th>Employee</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>EPF</td><td>12% / 13%</td><td>11%</td><td>Related to salary range and age</td></tr>
                <tr><td>SOCSO</td><td>1.75%</td><td>0.5%</td><td>Occupational injury and disability protection</td></tr>
                <tr><td>EIS</td><td>0.2%</td><td>0.2%</td><td>Unemployment protection</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s3.b7': `
          <p class="au-table-title"><span class="au-table-num">04</span> Individual Income Tax Calculation (PCB)</p>
          <p class="au-section-sep"><strong>Simplified Calculation Logic:</strong></p>
          <div class="au-bullet-list">
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Annualize monthly salary</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Deduct statutory reliefs (such as EPF)</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Calculate annual tax amount using tax rate table</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Apportion as monthly PCB</span></div>
          </div>
          <p class="au-section-sep"><strong>Key Features:</strong></p>
          <div class="au-bullet-list">
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Progressive rates: 0%&ndash;30%</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Tax base: Annual taxable income</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Withholding method: Monthly PCB</span></div>
          </div>
`,

  'pg.malaysia.s3.b8': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">PCB is a pre-withholding mechanism for annual tax liability, not the final tax amount.</p>
`,

  'pg.malaysia.s4.h': `Payroll Processing & Compliance`,

  'pg.malaysia.s4.sub': `Monthly execution, filing and payment, and accounting treatment`,

  'pg.malaysia.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> Monthly Payroll Payment</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Rule</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Monthly</td><td>As per employment contract</td></tr>
                <tr><td>Pay Date</td><td>Company-determined</td><td>Recommend fixed date</td></tr>
                <tr><td>Payment Amount</td><td>Net Salary</td><td>Already deducted for taxes and fees</td></tr>
                <tr><td>Payslip</td><td>Mandatory</td><td>Must provide</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">02</span> Monthly Social Insurance Filing &amp; Payment</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Filing Item</th><th>Filer</th><th>Frequency</th><th>Statutory Deadline</th><th>Operational Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>EPF</td><td>Employer</td><td>Monthly</td><td>15th of following month</td><td>File based on salary payment month</td></tr>
                <tr><td>SOCSO</td><td>Employer</td><td>Monthly</td><td>15th of following month</td><td>Includes occupational injury and general social protection</td></tr>
                <tr><td>EIS</td><td>Employer</td><td>Monthly</td><td>15th of following month</td><td>Filed concurrently with SOCSO</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-section-sep"><strong>Operational Key Points:</strong></p>
          <div class="au-bullet-list">
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Contribution amounts calculated based on salary in contribution month</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Late payment incurs penalties and interest</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>EPF, SOCSO, EIS are mandatory contributions</span></div>
          </div>
`,

  'pg.malaysia.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">03</span> Monthly Income Tax (PCB) Filing &amp; Payment</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Filing Item</th><th>Filer</th><th>Frequency</th><th>Statutory Deadline</th><th>Operational Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>PCB</td><td>Employer</td><td>Monthly</td><td>15th of following month</td><td>File and remit via LHDN system</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-section-sep"><strong>Operational Key Points:</strong></p>
          <div class="au-bullet-list">
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Remittance amount calculated based on accrued salary for the month</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Late or missed payment incurs penalties and interest</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>PCB is mandatory withholding and remittance item</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>Delay or omission constitutes tax non-compliance</span></div>
          </div>
`,

  'pg.malaysia.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">04</span> Payroll Journal Mapping Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Account</th></tr>
              </thead>
              <tbody>
                <tr><td>Gross Salary</td><td>Payroll Expense</td></tr>
                <tr><td>Employer Contributions</td><td>Payroll Expense</td></tr>
                <tr><td>Employee Deductions</td><td>Payroll Liability</td></tr>
                <tr><td>Net Pay</td><td>Cash / Bank</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.malaysia.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">05</span> Annual Tax &amp; Statutory Reconciliation</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>EA Form / Annual PCB Summary</td><td>Employer</td><td>Before end of February following year</td><td>Provide employee annual income and tax withheld information</td></tr>
                <tr><td>Social Insurance Annual Reconciliation</td><td>Employer</td><td>After year-end</td><td>Ensure full-year filing and payment consistency</td></tr>
                <tr><td>Employee Personal Tax Filing</td><td>Employee</td><td>Typically April&ndash;May</td><td>Employee completes annual filing independently</td></tr>
              </tbody>
            </table>
          </div>
`,
};
