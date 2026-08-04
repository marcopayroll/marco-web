/* Payroll Guide — Brazil page content (hr-knowledge-hub-payroll-guide-brazil.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_BRAZIL = {

  /* ── Hero ── */
  'pg.brazil.desc': `Complete operational guide to Brazil payroll compliance — CLT entity setup, INSS & FGTS registration, eSocial real-time reporting, progressive tax brackets with 2026 Redutor Adicional, 13º Salário, Férias 1/3, employee leave entitlements, and all monthly and annual filing requirements.`,

  /* ── TOC ── */
  'pg.brazil.toc.scope':      `Scope & Application`,
  'pg.brazil.toc.setup':      `Payroll Set-up`,
  'pg.brazil.toc.calculation':`Payroll Calculation`,
  'pg.brazil.toc.processing': `Payroll Processing & Compliance`,

  /* ══════════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════════ */
  'pg.brazil.s1.h':   `Scope & Application`,
  'pg.brazil.s1.sub': `SCOPE · CLT · INSS · FGTS`,

  'pg.brazil.s1.b1': `
          <p class="article-p"><strong>This document applies to:</strong></p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in Brazil (Ltda. / S.A.)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly hired by the local entity, subject to the Labour Code (CLT — Consolidação das Leis do Trabalho)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on Brazilian federal tax law, INSS (social security), and FGTS (severance indemnity fund)</span>
            </div>
          </div>
`,

  'pg.brazil.s1.b2': `<p class="article-p"><strong>This framework covers:</strong> how companies complete Payroll Set-up, salary calculation, monthly filing and payment, and annual compliance management in Brazil.</p>`,

  'pg.brazil.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Brazil's Payroll is known for extremely high employer costs. Statutory burdens including INSS + FGTS + 13º Salário + Férias 1/3 + Sistema S can bring total employer cost to 70%-100% of Gross Salary. Starting from 2026, the IRRF introduces a Redutor Adicional mechanism: employees with monthly income ≤ R$5,000 are effectively tax-exempt, and those earning between R$5,000 and R$7,350 receive a tapering reduction. Payroll calculation logic must be updated accordingly.</p>
`,

  /* ══════════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════════ */
  'pg.brazil.s2.h':   `Payroll Set-up`,
  'pg.brazil.s2.sub': `How to establish legal payroll capability in Brazil`,

  'pg.brazil.s2.b1': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">i.</span> Social Security & Fund Registration (INSS · FGTS Registration)</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:25%"><col style="width:22%"><col style="width:13%"><col style="width:40%"></colgroup>
                <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
                <tbody>
                  <tr><td>CNPJ (Company Registration Number)</td><td>Brazil local entity</td><td>Yes</td><td>Issued by Receita Federal; used for all tax and social security filings</td></tr>
                  <tr><td>INSS Employer Registration</td><td>Brazil local entity</td><td>Yes</td><td>Automatically registered as INSS contribution obligor upon CNPJ issuance</td></tr>
                  <tr><td>FGTS Registration</td><td>Brazil local entity</td><td>Yes</td><td>Registered via Conectividade Social / eSocial</td></tr>
                  <tr><td>CEI / CAEPF</td><td>Brazil local entity</td><td>Conditional</td><td>Additional registration required for construction sites or specific activities</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s2.b2': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">ii.</span> Tax & eSocial Registration</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:25%"><col style="width:22%"><col style="width:13%"><col style="width:40%"></colgroup>
                <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>eSocial Access</td><td>Brazil local entity</td><td>Yes</td><td>Unified digital platform: labour + social security + tax filing</td></tr>
                  <tr><td>IRRF Withholding Obligation</td><td>Brazil local entity</td><td>Yes</td><td>Employer acts as income tax withholding agent</td></tr>
                  <tr><td>Employee CPF</td><td>Employee</td><td>Yes</td><td>Cadastro de Pessoa Física (11 digits); used for all filings</td></tr>
                  <tr><td>CTPS (Work Card)</td><td>Employee</td><td>Yes</td><td>Carteira de Trabalho e Previdência Social; now in electronic format</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s2.b3': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Bank Account & Compliance</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:30%"><col style="width:15%"><col style="width:55%"></colgroup>
                <thead><tr><th>Item</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
                <tbody>
                  <tr><td>Payroll Bank Account</td><td>Yes</td><td>Local BRL account</td></tr>
                  <tr><td>Holerite / Contracheque (Payslip)</td><td>Yes</td><td>Statutory obligation; must itemize all income and deduction components</td></tr>
                  <tr><td>Livro de Registro</td><td>Yes</td><td>Employee register; now digitized via eSocial</td></tr>
                  <tr><td>ASO (Occupational Health Examination)</td><td>Yes</td><td>Onboarding, periodic, and offboarding medical examinations are all statutory requirements</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  /* ══════════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════════ */
  'pg.brazil.s3.h':   `Payroll Calculation`,
  'pg.brazil.s3.sub': `How salary and employee entitlements are calculated`,

  'pg.brazil.s3.b1': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">i.</span> Salary Calculation & Working Hours</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>Item</th><th>Rule</th></tr></thead>
                <tbody>
                  <tr><td>Pay Method</td><td>Monthly salary (Salário Mensal) is the primary method</td></tr>
                  <tr><td>Pay Cycle</td><td>Calendar month; monthly salary calculated based on 30 days (statutory standard month = 30 days)</td></tr>
                  <tr><td>Statutory Working Hours</td><td>8 hours per day, 44 hours per week (CLT Art. 58)</td></tr>
                  <tr><td>Overtime (Hora Extra)</td><td>Weekdays: +50% (minimum); Sundays/Holidays: +100%</td></tr>
                  <tr><td>Night Shift Premium (Adicional Noturno)</td><td>22:00-05:00: +20%; 1 night hour = 52 minutes 30 seconds</td></tr>
                  <tr><td>Salário Mínimo (Minimum Wage)</td><td>R$1,630/month (2026 federal standard); states may set higher rates</td></tr>
                  <tr><td>Decimal Handling</td><td>Round to 2 decimal places (BRL Centavos)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b2': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">ii.</span> Leave Entitlements (Férias & Statutory Leave)</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>Item</th><th>Rule</th></tr></thead>
                <tbody>
                  <tr><td>Annual Leave (Férias)</td><td>After 12 months of service: 30 calendar days</td></tr>
                  <tr><td>Terço de Férias (Holiday 1/3 Bonus)</td><td>Additional 1/3 of annual leave pay (statutory mandatory)</td></tr>
                  <tr><td>Leave Splitting</td><td>May be split into up to 3 periods (1 period ≥ 14 days, remaining periods ≥ 5 days each)</td></tr>
                  <tr><td>Abono Pecuniário</td><td>Employee may request to convert up to 1/3 of annual leave (10 days) into cash</td></tr>
                  <tr><td>Public Holidays</td><td>Approximately 12-14 days/year (federal + state + municipal holidays combined)</td></tr>
                  <tr><td>Maternity Leave (Licença-Maternidade)</td><td>120 days (paid by INSS); Empresa Cidadã companies may extend to 180 days</td></tr>
                  <tr><td>Paternity Leave (Licença-Paternidade)</td><td>5 days (CLT); Empresa Cidadã may extend to 20 days</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Terço de Férias (Holiday 1/3 Bonus) is a statutory obligation unique to Brazil. When an employee takes leave, they receive an additional 1/3 of their monthly salary as a holiday bonus on top of regular pay. This means the actual employer cost for 30 days of annual leave = monthly salary × 4/3. Holiday pay and the 1/3 bonus must be paid at least 2 days before the leave begins; late payment requires double compensation.</p>
`,

  'pg.brazil.s3.b4': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iii.</span> INSS Social Security Contributions (Instituto Nacional do Seguro Social)</p>
            <p class="article-p"><strong>Employee INSS Contributions (Progressive Rates, 2026):</strong></p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
                <thead><tr><th>Monthly Salary Range</th><th>Rate</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>≤ R$1,621.00</td><td>7.5%</td><td>Minimum wage bracket</td></tr>
                  <tr><td>R$1,621.01 - R$2,902.84</td><td>9%</td><td>Progressive calculation (not applied to full amount)</td></tr>
                  <tr><td>R$2,902.85 - R$4,354.27</td><td>12%</td><td>Progressive calculation</td></tr>
                  <tr><td>R$4,354.28 - R$8,475.55</td><td>14%</td><td>Ceiling bracket; amounts exceeding this are not subject to contributions</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b5': `
          <div class="au-table-group">
            <p class="article-p" style="margin-top:24px;"><strong>Employer INSS & Additional Contributions:</strong></p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
                <thead><tr><th>Item</th><th>Rate</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>INSS Patronal (Employer Social Security)</td><td>20%</td><td>Based on total Payroll amount, no ceiling</td></tr>
                  <tr><td>RAT / SAT (Occupational Risk)</td><td>1%-3%</td><td>By industry risk level (light/moderate/severe)</td></tr>
                  <tr><td>FAP Adjustment Factor</td><td>×0.5-2.0</td><td>Adjusts RAT rate based on the company's actual injury record</td></tr>
                  <tr><td>Sistema S (Third-party Institutions)</td><td>~5.8%</td><td>SESI/SENAI/SESC/SENAC and other industry training and social institutions</td></tr>
                  <tr><td>Salário-Educação</td><td>2.5%</td><td>Education fund, based on total Payroll amount</td></tr>
                  <tr><td>INCRA</td><td>0.2%</td><td>Agricultural reform fund</td></tr>
                </tbody>
              </table>
            </div>
            <p class="article-p" style="margin-top:16px;">Total employer burden is approximately 27%-29% (INSS Patronal 20% + RAT 1-3% + Sistema S ~5.8% + Salário-Educação 2.5%), with no contribution ceiling.</p>
          </div>
`,

  'pg.brazil.s3.b6': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iv.</span> FGTS (Severance Indemnity Fund) — Fundo de Garantia do Tempo de Serviço</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>Item</th><th>Rule</th></tr></thead>
                <tbody>
                  <tr><td>Employer Contribution</td><td>Monthly salary × 8%, deposited into the employee's FGTS individual account (Caixa Econômica Federal)</td></tr>
                  <tr><td>Contribution Base</td><td>All remuneration (including overtime, night shift premium, 13º Salário, etc.), no ceiling</td></tr>
                  <tr><td>Employee Withdrawal Conditions</td><td>Dismissal without cause, retirement, home purchase, serious illness, and other statutory circumstances</td></tr>
                  <tr><td>Multa 40% (Dismissal Penalty)</td><td>Upon dismissal without cause, employer must pay a penalty of 40% of the accumulated FGTS balance</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b7': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">The FGTS 8% is a monthly statutory obligation for employers, but the real cost impact comes from the 40% penalty upon dismissal, calculated on the employee's accumulated FGTS balance during their tenure. For example, an employee earning R$10,000/month who has worked for 5 years would have an accumulated FGTS of approximately R$48,000, resulting in a dismissal penalty of R$19,200. Companies must accrue a monthly Provisão de FGTS 40% provision on their books.</p>
`,

  'pg.brazil.s3.b8': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">v.</span> Personal Income Tax (IRRF) — Imposto de Renda Retido na Fonte — New Rules from 2026</p>
            <p class="article-p"><strong>IRRF Progressive Tax Table (Base Table Unchanged):</strong></p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
                <thead><tr><th>Monthly Taxable Income</th><th>Rate</th><th>Quick Deduction</th></tr></thead>
                <tbody>
                  <tr><td>≤ R$2,428.80</td><td>Exempt</td><td>—</td></tr>
                  <tr><td>R$2,428.81 - R$2,826.65</td><td>7.5%</td><td>R$182.16</td></tr>
                  <tr><td>R$2,826.66 - R$3,751.05</td><td>15%</td><td>R$394.16</td></tr>
                  <tr><td>R$3,751.06 - R$4,664.68</td><td>22.5%</td><td>R$675.49</td></tr>
                  <tr><td>&gt; R$4,664.68</td><td>27.5%</td><td>R$908.73</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b9': `
          <div class="au-table-group">
            <p class="article-p" style="margin-top:24px;"><strong>2026 New Redutor Adicional (Additional Reduction Mechanism, Lei 15.270/2025):</strong></p>
            <div class="au-bullet-list" style="margin-top:16px;">
              <div class="au-bullet-item">
                <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
                <span>Monthly income ≤ R$5,000: After calculation using the base tax table, the full amount is reduced to zero, making it effectively tax-exempt.</span>
              </div>
              <div class="au-bullet-item">
                <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
                <span>Monthly income R$5,000.01 - R$7,350: A tapering reduction (Redução Decrescente) applies; the closer income is to R$7,350, the smaller the reduction.</span>
              </div>
              <div class="au-bullet-item">
                <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
                <span>Monthly income &gt; R$7,350: No additional reduction; only the base progressive tax table applies.</span>
              </div>
            </div>
            <p class="article-p" style="margin-top:16px;">Taxable income = Gross - Employee INSS contribution - Dependent deduction (R$189.59/person/month) or simplified deduction (R$607.20), whichever is higher.</p>
          </div>
`,

  'pg.brazil.s3.b10': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">vi.</span> 13º Salário (13th Month Salary) — Christmas Bonus — Mandatory</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>Item</th><th>Rule</th></tr></thead>
                <tbody>
                  <tr><td>Amount</td><td>Annual monthly salary ÷ 12 × months worked (pro-rated)</td></tr>
                  <tr><td>1st Instalment (Adiantamento)</td><td>50% paid between February and November 30 (typically November)</td></tr>
                  <tr><td>2nd Instalment (Parcela Final)</td><td>Remaining balance paid by December 20 (after deducting INSS + IRRF + FGTS)</td></tr>
                  <tr><td>FGTS</td><td>8% FGTS must be paid on each instalment of 13º</td></tr>
                  <tr><td>Tax Treatment</td><td>INSS and IRRF are calculated collectively upon payment of the 2nd instalment (independent of monthly salary calculation)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  /* ══════════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════════ */
  'pg.brazil.s4.h':   `Payroll Processing & Compliance`,
  'pg.brazil.s4.sub': `Monthly execution, filing and payment, and accounting treatment`,

  'pg.brazil.s4.b1': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:25%"><col style="width:35%"><col style="width:40%"></colgroup>
                <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>Payment Frequency</td><td>Monthly</td><td>Must be paid by the 5th business day (Dia Útil) of the following month at the latest</td></tr>
                  <tr><td>Adiantamento (Advance Payment)</td><td>Common but not mandatory</td><td>Typically 40%-50% paid mid-month, subject to Convenção Coletiva</td></tr>
                  <tr><td>Payment Method</td><td>Bank transfer</td><td>Transferência Bancária to employee account</td></tr>
                  <tr><td>Holerite (Payslip)</td><td>Statutory obligation</td><td>Must itemize all Proventos and Descontos</td></tr>
                  <tr><td>Record Retention</td><td>5-30 years</td><td>Tax records: 5 years; labour/FGTS related: up to 30 years</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s4.b2': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Filing & Payment (eSocial & DCTFWeb)</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:18%"><col style="width:14%"><col style="width:14%"><col style="width:18%"><col style="width:36%"></colgroup>
                <thead><tr><th>Item</th><th>Payer</th><th>Frequency</th><th>Deadline</th><th>Operational Notes</th></tr></thead>
                <tbody>
                  <tr><td>eSocial Event Filing</td><td>Employer</td><td>Monthly</td><td>15th of the following month</td><td>Submit payroll, onboarding/offboarding, and social security events via the unified platform</td></tr>
                  <tr><td>DCTFWeb (INSS)</td><td>Employer</td><td>Monthly</td><td>15th of the following month</td><td>DARF payment slip generated based on eSocial data</td></tr>
                  <tr><td>FGTS (FGTS Digital)</td><td>Employer</td><td>Monthly</td><td>20th of the following month</td><td>Pay 8% to Caixa via FGTS Digital</td></tr>
                  <tr><td>IRRF (Income Tax)</td><td>Employer</td><td>Monthly</td><td>20th of the following month</td><td>Pay withheld income tax via DARF</td></tr>
                </tbody>
              </table>
            </div>
            <p class="article-p" style="margin-top:16px;">eSocial integrates data across the Ministry of Labour / INSS / Receita Federal / FGTS. Events such as onboarding, payroll, and offboarding must be submitted in real-time or monthly.</p>
          </div>
`,

  'pg.brazil.s4.b3': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:50%"><col style="width:50%"></colgroup>
                <thead><tr><th>Item</th><th>Account</th></tr></thead>
                <tbody>
                  <tr><td>Salário Bruto + 13º + Férias 1/3</td><td>→ Despesa com Pessoal (Expense)</td></tr>
                  <tr><td>INSS Patronal (~28%) + FGTS (8%)</td><td>→ Despesa com Pessoal (Expense)</td></tr>
                  <tr><td>Provisão FGTS Multa 40%</td><td>→ Despesa com Pessoal (Expense)</td></tr>
                  <tr><td>INSS Empregado + IRRF</td><td>→ Obrigações Sociais (Liability)</td></tr>
                  <tr><td>Salário Líquido (Net Pay)</td><td>→ Caixa / Banco</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s4.b4': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Compliance</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:22%"><col style="width:18%"><col style="width:22%"><col style="width:38%"></colgroup>
                <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>DIRF (Annual Withholding Tax Return)</td><td>Employer</td><td>End of February the following year</td><td>Gradually being replaced by EFD-Reinf / eSocial</td></tr>
                  <tr><td>Informe de Rendimentos</td><td>Employer</td><td>End of February the following year</td><td>Annual income statement provided to each employee</td></tr>
                  <tr><td>RAIS / eSocial Replacement</td><td>Employer</td><td>March the following year</td><td>Annual social information report; now integrated into eSocial</td></tr>
                  <tr><td>13º Salário</td><td>Employer</td><td>End of November / December 20</td><td>13th month salary paid in two instalments as required by law</td></tr>
                  <tr><td>Salário Mínimo Update</td><td>—</td><td>January 1 each year</td><td>Annual federal minimum wage adjustment</td></tr>
                  <tr><td>Convenção Coletiva Update</td><td>—</td><td>Varies by industry</td><td>Annual renewal of industry collective agreements; may adjust salary benchmarks</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s4.b5': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">v.</span> Termination Settlement (Rescisão)</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>Item</th><th>Rule</th></tr></thead>
                <tbody>
                  <tr><td>Aviso Prévio (Notice Period)</td><td>30 days + 3 additional days per year of service (capped at 90 days)</td></tr>
                  <tr><td>FGTS Multa 40%</td><td>Dismissal without cause: 40% penalty on accumulated FGTS balance</td></tr>
                  <tr><td>13º Proporcional</td><td>Pro-rated 13º Salário for months worked in the current year</td></tr>
                  <tr><td>Férias Proporcionais + 1/3</td><td>Unused annual leave + pro-rated annual leave + 1/3 bonus, all paid in cash</td></tr>
                  <tr><td>Saldo de Salário</td><td>Salary for days worked in the current month</td></tr>
                  <tr><td>Settlement Deadline</td><td>Full settlement payment must be completed within 10 days of termination</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Brazil's termination costs are among the highest globally. Dismissal without cause requires payment of: notice period salary (up to 90 days) + FGTS 40% penalty + pro-rated 13º Salário + unused and pro-rated annual leave including the 1/3 bonus + current month salary balance. For example, an employee earning R$10,000/month with 5 years of tenure could result in a one-time settlement of R$50,000-R$80,000. Companies must accrue monthly termination provisions.</p>
`,

};
