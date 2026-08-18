/* Payroll Guide — Japan page content (hr-knowledge-hub-payroll-guide-japan.html) */
/* EN is the source language; reference only — never loaded at runtime. */
window.MARCO_LANG_EN_PG_JAPAN = {
  'pg.japan.desc': `A complete guide to running payroll in Japan — covering four-office registration (税務署, 年金事務所, ハローワーク, 労基署), 標準報酬月額 social insurance grades, progressive income tax with 2.1% Special Reconstruction levy, 年末調整 year-end tax adjustment, and 2026 reforms including the new 子ども・子育て拠出金 childcare contribution and revised health insurance premium rates.`,

  'pg.japan.s1.h': `Scope & Application`,

  'pg.japan.s1.sub': `Scope and Legal Basis / 労像基準法 · 所得稀法 · 健康保険法 · 历生年金保険法`,

  'pg.japan.s1.b1': `
          <p class="article-p">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in Japan (株式会社 KK / 合同会社 GK / 合資会社), with obtained 法人番号 (13-digit)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly hired by the local entity, subject to the Labour Standards Act (労働基準法) and applicable employment rules (就業規則)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on Labour Standards Act, Income Tax Act, Health Insurance Act, Employees&rsquo; Pension Insurance Act, Employment Insurance Act, Workers&rsquo; Compensation Insurance Act, and regulations from 国稀庁 (National Tax Agency) / 年金事務所 (Pension Office)</span>
            </div>
          </div>
`,

  'pg.japan.s1.b2': `This framework covers how companies complete Payroll Set-up in Japan (registration at four offices: 税務署 tax office, 年金事務所 pension office, ハローワーク employment office, 労基署 labour standards office; マイナンバー employee identification), monthly salary calculation (withholding income tax, resident tax, social insurance), monthly filing, 年末調整 (year-end tax adjustment), and 退職金 (severance settlement).`,

  'pg.japan.s1.b3': `
          <p class="au-data-cards-label">2026 KEY NUMBERS</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Minimum Wage (Tokyo)</span>
                <span class="au-dc-value">&yen;1,226/hr</span>
                <span class="au-dc-note">Okinawa minimum &yen;1,023</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Tax Exemption Threshold</span>
                <span class="au-dc-value">&yen;1,780,000</span>
                <span class="au-dc-note">2026 tax reform increase</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Income Tax Brackets</span>
                <span class="au-dc-value">5% &ndash; 45%</span>
                <span class="au-dc-note">+ Special Reconstruction Tax 2.1%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Resident Tax</span>
                <span class="au-dc-value">10%</span>
                <span class="au-dc-note">previous year income, collected from June onwards</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Health Insurance (Tokyo)</span>
                <span class="au-dc-value">9.85%</span>
                <span class="au-dc-note">employee/employer split equally</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Employees&rsquo; Pension</span>
                <span class="au-dc-value">18.30%</span>
                <span class="au-dc-note">employee/employer split equally</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Employment Insurance</span>
                <span class="au-dc-value">1.55%</span>
                <span class="au-dc-note">Employee 0.55% + Employer 1.00%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Childcare Insurance</span>
                <span class="au-dc-value">0.23%</span>
                <span class="au-dc-note">new from 2026/4</span>
              </div>
            </div>
          </div>
`,

  'pg.japan.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key characteristics of Japanese Payroll: (1) Social insurance &ldquo;three-piece set&rdquo; + labour insurance &ldquo;two-piece set&rdquo; &mdash; Health Insurance / Employees&rsquo; Pension / Long-term Care Insurance managed by 年金事務所 (Pension Office) + 健康保険組合 (Health Insurance Association); Employment Insurance / Workers&rsquo; Compensation Insurance managed by ハローワーク (Employment Office) + 労基署 (Labour Standards Office); registration required at 4 separate offices; (2) Resident tax is not withheld and calculated by employer but notified by local government based on prior year income; employer must withhold monthly from June onwards of following year; (3) 年末調整 (Year-End Tax Adjustment) is a uniquely Japanese tax checkpoint &mdash; employer reconciles each employee&rsquo;s full-year income tax in December and makes multi-payment or refunds.</p>
`,

  'pg.japan.s2.h': `Payroll Set-up`,

  'pg.japan.s2.sub': `How to establish legal payroll capability in Japan / Entity · Tax Office · 4 Insurances`,

  'pg.japan.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Entity, Tax &amp; 4-Office Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:20%"><col style="width:12%"><col style="width:40%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>法務局 Corporate Registration</td><td>Japan local entity</td><td>Yes</td><td>Apply to 法務局 (Legal Affairs Bureau); KK minimum registration capital &yen;1 (practice typically &yen;1M); obtain 法人番号 (13-digit)</td></tr>
                <tr><td>税務署 Corporate Tax Registration</td><td>Japan local entity</td><td>Yes</td><td>Submit within 2 months of establishment; include &ldquo;給与支払事務所等の開設届出書&rdquo; (notification of payroll office opening)</td></tr>
                <tr><td>年金事務所 Health &amp; Pension Insurance Enrollment</td><td>Japan local entity</td><td>Yes</td><td>Mandatory for 5+ employees or all corporations; Social Insurance Office (年金事務所)</td></tr>
                <tr><td>ハローワーク Employment Insurance</td><td>Japan local entity</td><td>Yes</td><td>Register within 10 days of hiring first employee</td></tr>
                <tr><td>労働基準監督署 Workers&rsquo; Compensation Insurance</td><td>Japan local entity</td><td>Yes</td><td>Register within 10 days of hiring first employee</td></tr>
                <tr><td>マイナンバー Collection</td><td>Employee</td><td>Yes</td><td>12-digit individual number (My Number); required for withholding income tax; foreign workers also required</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Insurance &amp; Severance Schemes</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:20%"><col style="width:45%"></colgroup>
              <thead><tr><th>Item</th><th>Mandatory / Voluntary</th><th>Notes (2026)</th></tr></thead>
              <tbody>
                <tr><td>Health Insurance + Long-term Care (40+)</td><td>Mandatory</td><td>Tokyo 9.85%; split equally between employee/employer; Long-term Care 1.62% (additional levy for ages 40&ndash;64)</td></tr>
                <tr><td>Employees&rsquo; Pension Insurance</td><td>Mandatory</td><td>18.30%; split equally; managed centrally by 年金事務所</td></tr>
                <tr><td>Childcare / Child-rearing Contribution</td><td>Mandatory (employer)</td><td>0.36% (practical); employer-borne; employee contribution 0.115% as of 2026/4</td></tr>
                <tr><td>Employment Insurance / Workers&rsquo; Compensation</td><td>Mandatory</td><td>Employment 1.55% (employee 0.55% + employer 1.00%); Workers&rsquo; Compensation 0.25%&ndash;8.8% (employer full)</td></tr>
                <tr><td>Severance / Defined Contribution Pension DC</td><td>Non-statutory / customary</td><td>No statutory requirement; most companies have severance + 401k provisions in 就業規則 (employment rules)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Bank Account &amp; Record Retention</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:20%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Requirement</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>JPY Local Bank Account</td><td>Mandatory</td><td>Salary paid by electronic transfer in Japanese yen; typically on 25th or last day of month</td></tr>
                <tr><td>給与明細書 Payslip</td><td>Required every payment</td><td>Labour Standards Act &sect;24 mandates; itemize gross salary, withholding tax, social insurance, net salary</td></tr>
                <tr><td>Payroll &amp; Personnel File Retention</td><td>Mandatory 5 years</td><td>Labour Standards Act &sect;109; tax-related 7 years (certified accounting 10 years)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s3.h': `Payroll Calculation`,

  'pg.japan.s3.sub': `How salary, tax, and employee entitlements are calculated / Salary · Leave`,

  'pg.japan.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary Calculation &amp; Bonuses</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule / 2026 Values</th></tr></thead>
              <tbody>
                <tr><td>Pay Cycle</td><td>Monthly (most common); Labour Standards Act requires at least once monthly</td></tr>
                <tr><td>Minimum Wage (by Prefecture)</td><td>National average &yen;1,118; Tokyo &yen;1,226 / Okinawa &yen;1,023 (post-2025/10 revision)</td></tr>
                <tr><td>標準報酬月額 Standard Remuneration Monthly Amount</td><td>Social insurance contribution base; 2026 Health Insurance 50 grades / Pension 32 grades</td></tr>
                <tr><td>賞与 Bonus (Shoyo)</td><td>Not statutory; customarily paid in summer (June) + winter (December), typically 1&ndash;3 months salary</td></tr>
                <tr><td>Overtime Increment (残業割増)</td><td>+25% (weekday) / +35% (night 22:00&ndash;05:00) / +35% (holidays)</td></tr>
                <tr><td>Excess Overtime (60+ hours/month)</td><td>Small/medium enterprises 2023/4 onwards: +50% for portion exceeding 60 hours</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:38%"><col style="width:32%"><col style="width:30%"></colgroup>
              <thead><tr><th>Item</th><th>Duration / Period</th><th>Pay Ratio / Source</th></tr></thead>
              <tbody>
                <tr><td>年次有給休暇 Annual Paid Leave (6+ months service)</td><td>10 days minimum; maximum 20 days (6.5+ years service)</td><td>100% / Employer</td></tr>
                <tr><td>Mandatory Annual Leave Taking</td><td>Employer must ensure employee takes minimum 5 days/year</td><td>100% / Employer</td></tr>
                <tr><td>国民の祝日 National Holidays</td><td>16 days/year (includes New Year, Golden Week)</td><td>100% / Employer</td></tr>
                <tr><td>Pre/Postnatal Leave (産前産後休業)</td><td>6 weeks pre-natal + 8 weeks post-natal (multiple births 14+8)</td><td>66.67% / Health Insurance (maternity allowance)</td></tr>
                <tr><td>Childbirth One-time Allowance (出産育健一時金)</td><td>&yen;500,000 per child (as of 2023/4)</td><td>Health Insurance</td></tr>
                <tr><td>Childcare Leave (育児休業)</td><td>Until child age 1 (special extension to age 2)</td><td>67% (first 6 months) / 50% (thereafter) / Employment Insurance</td></tr>
                <tr><td>Paternity Leave on Birth (出生時育児休業)</td><td>4 weeks within 8 weeks of birth (can split into 2 periods)</td><td>67% / Employment Insurance; 80% as of 2025/4 under special conditions</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Personal Income Tax (National + Inhabitant Tax)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>Annual Taxable Income (課稀所得)</th><th>National Tax Rate + Special Reconstruction Tax (&times; 2.1%)</th></tr></thead>
              <tbody>
                <tr><td>&le; &yen;1,950,000</td><td>5% &times; 1.021 = 5.105%</td></tr>
                <tr><td>&yen;1.95M &ndash; &yen;3.3M</td><td>10% &times; 1.021 = 10.21%</td></tr>
                <tr><td>&yen;3.3M &ndash; &yen;6.95M</td><td>20% &times; 1.021 = 20.42%</td></tr>
                <tr><td>&yen;6.95M &ndash; &yen;9M</td><td>23% &times; 1.021 = 23.48%</td></tr>
                <tr><td>&yen;9M &ndash; &yen;18M</td><td>33% &times; 1.021 = 33.69%</td></tr>
                <tr><td>&yen;18M &ndash; &yen;40M</td><td>40% &times; 1.021 = 40.84%</td></tr>
                <tr><td>&gt; &yen;40M</td><td>45% &times; 1.021 = 45.945%</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s3.b4': `<strong>Additional: Resident Tax (住民稀)</strong> &mdash; 10% flat tax (Municipal Tax 6% + Prefectural Tax 4%) + Resident Per Capita Tax approximately &yen;5,000/year. Not calculated by employer in real-time; local government notifies based on prior year income; employer withholds monthly from June of following year through May of year after.`,

  'pg.japan.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Social Insurance &amp; Labour Insurance</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:14%"><col style="width:14%"><col style="width:44%"></colgroup>
              <thead><tr><th>Insurance</th><th>Employee</th><th>Employer</th><th>Notes (2026)</th></tr></thead>
              <tbody>
                <tr><td>Health Insurance (Tokyo)</td><td>4.925%</td><td>4.925%</td><td>Varies by prefecture; monthly income ceiling &yen;1,390,000</td></tr>
                <tr><td>Long-term Care Insurance (40+)</td><td>0.81%</td><td>0.81%</td><td>2026 increases to 1.62% total; additional levy for ages 40&ndash;64</td></tr>
                <tr><td>Employees&rsquo; Pension</td><td>9.15%</td><td>9.15%</td><td>Monthly income ceiling &yen;650,000; 標準報酬月額 32 grades</td></tr>
                <tr><td>Childcare Contribution (new 2026/4)</td><td>0.115%</td><td>0.115%</td><td>New provision; withheld together with health insurance</td></tr>
                <tr><td>Employment Insurance</td><td>0.55%</td><td>1.00%</td><td>Construction industry employers 1.15%; actual cost calculation</td></tr>
                <tr><td>Workers&rsquo; Compensation Insurance</td><td>&mdash;</td><td>0.25%&ndash;8.8%</td><td>Industry-specific; employer-borne fully; actual cost calculation</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s3.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three commonly underestimated details in Japanese Payroll: (1) Social insurance contribution base is fixed 標準報酬月額 (Standard Remuneration Monthly Amount) on 50/32-grade tables, updated once annually in July (定時決定); applied for full year &mdash; this causes timing lag when salary changes after premium determination; (2) 賞与 (bonuses) also incur social insurance, but Employees&rsquo; Pension bonus ceiling &yen;1.5M per payment, Health Insurance annual combined &yen;5.73M; (3) Resident tax is employee-exempt in first year (year of hire), withholding begins June of following year &mdash; foreign workers often experience &ldquo;surprise&rdquo; resident tax collection in second year; HR must provide advance notice.</p>
`,

  'pg.japan.s4.h': `Payroll Processing & Compliance`,

  'pg.japan.s4.sub': `Monthly execution, filing and payment, and accounting treatment / Monthly Filings & Journal`,

  'pg.japan.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:30%"><col style="width:42%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>At least once monthly (毎月1回以上)</td><td>Labour Standards Act &sect;24; typically 25th or month-end (月末払い)</td></tr>
                <tr><td>Payment Method + Currency</td><td>Electronic transfer &middot; JPY</td><td>Cash allowed in principle; employee consent required for transfer; foreign currency settlement not permitted in principle</td></tr>
                <tr><td>給与明細 Payslip + Wage Deduction</td><td>Mandatory (Labour Standards Act &sect;24)</td><td>Wage deduction &ldquo;賃金からの控除&rdquo; requires agreement (協定書); may not exceed statutory items</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Tax &amp; Insurance Reporting</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:26%"><col style="width:16%"><col style="width:13%"><col style="width:16%"><col style="width:29%"></colgroup>
              <thead><tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Remittance Institution</th></tr></thead>
              <tbody>
                <tr><td>Withholding Income Tax (所得稀源泉徴取)</td><td>Employer</td><td>Monthly</td><td>10th of following month</td><td>税務署 (Tax Office)</td></tr>
                <tr><td>Resident Tax Special Collection (住民稀特別徴取)</td><td>Employer</td><td>Monthly</td><td>10th of following month</td><td>市区町村所 (Municipal Office)</td></tr>
                <tr><td>Social Insurance (Health + Pension + Long-term Care)</td><td>Employer</td><td>Monthly</td><td>Last day of following month</td><td>年金事務所 / 健保組合 (Pension Office / Health Insurance Association)</td></tr>
                <tr><td>Employment Insurance</td><td>Employer</td><td>Annual estimate (April&ndash;June)</td><td>July 10 annually</td><td>労働局 (Labour Bureau)</td></tr>
                <tr><td>Workers&rsquo; Compensation Insurance</td><td>Employer</td><td>Annual estimate</td><td>July 10 annually</td><td>労働局 (Labour Bureau)</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:55%"><col style="width:45%"></colgroup>
              <thead><tr><th>Item</th><th>Account</th></tr></thead>
              <tbody>
                <tr><td>Gross Salary + Allowances + 賞与 Bonus</td><td>Payroll Expense &mdash; 給料手当 / 賞与</td></tr>
                <tr><td>Employer Legal Benefits (~15%&ndash;16%)</td><td>Payroll Expense &mdash; 法定福利費</td></tr>
                <tr><td>Withholding Income Tax + Reconstruction Tax</td><td>Payroll Liability &mdash; 預り金 (所得稀)</td></tr>
                <tr><td>Resident Tax Special Collection (住民稀)</td><td>Payroll Liability &mdash; 預り金 (住民稀)</td></tr>
                <tr><td>Social Insurance (employee portion) Withheld</td><td>Payroll Liability &mdash; 預り金 (社保)</td></tr>
                <tr><td>Net Take-home (手取り)</td><td>Cash / Bank &mdash; 現金 / 普通銀金</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Year-End Tax Adjustment &amp; Annual Filings</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:18%"><col style="width:16%"><col style="width:36%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>年末調整 Year-End Tax Adjustment</td><td>Employer</td><td>December payroll</td><td>Employee submits 扶養 (dependent) / 保険料控除 (insurance deduction) declaration; employer reconciles and makes multi-payment or refunds</td></tr>
                <tr><td>源泉徴取票 Withholding Tax Certificate</td><td>Employer &rarr; Employee + Tax Office</td><td>January 31</td><td>Full-year withholding record certificate</td></tr>
                <tr><td>給与支払報告書 Salary Payment Report</td><td>Employer &rarr; Municipal Office</td><td>January 31</td><td>For local government to calculate resident tax collection from June</td></tr>
                <tr><td>法定調書合計表 Legal Report Summary</td><td>Employer &rarr; Tax Office</td><td>January 31</td><td>Comprehensive statement of all employees&rsquo; salary and remuneration</td></tr>
                <tr><td>算定基礎届 / 月額変更届</td><td>Employer &rarr; Pension Office</td><td>July 10 annually</td><td>標準報酬月額 annual review (定時決定) + ad-hoc revisions</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Termination &amp; Foreign Workers</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:30%"><col style="width:42%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>解除予告 Termination Notice Period</td><td>30 days minimum</td><td>Labour Standards Act &sect;20; if insufficient, pay &ldquo;termination notice allowance&rdquo; (解除予告手当) to cover difference</td></tr>
                <tr><td>退職金 Severance</td><td>No statutory requirement</td><td>Determined by 就業規則 (employment rules); typical formula: Basic Salary &times; Years of Service &times; Coefficient</td></tr>
                <tr><td>退職所得控除 Severance Tax Deduction</td><td>Mandatory</td><td>Within 20 years &yen;400,000/year + above 20 years &yen;700,000/year; 1/2 taxable</td></tr>
                <tr><td>Unused Annual Leave Buy-out</td><td>Generally not allowed</td><td>May buy-out at separation if permitted by 就業規則</td></tr>
                <tr><td>Dispute Resolution</td><td>Labour Standards Office / Labour Tribunal</td><td>&ldquo;Unfair dismissal&rdquo; claims within 1 year of dismissal</td></tr>
                <tr><td>Foreign Worker Residency Tax</td><td>183-day / 5-year dual test</td><td>Non-residents within 5 years exempt from foreign-source income tax; subject to RAU exceptions</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.japan.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key changes to Japanese Payroll in 2026: (1) 2026 tax reform increases personal income tax exemption threshold from &yen;1,030,000 to &yen;1,780,000, with corresponding adjustments to spouse allowance and other deductions; (2) As of 2026/4, new &ldquo;子ども・子育て拠出金&rdquo; (Childcare Contribution) with employee share 0.115% + employer share 0.115%, mandatory for all employees, withheld together with health insurance; (3) Health insurance premium rates 2026/3 revision: Tokyo 9.91% &rarr; 9.85%, 40 prefectures nationwide reduced; Long-term Care 1.59% &rarr; 1.62%.</p>
`,
};
