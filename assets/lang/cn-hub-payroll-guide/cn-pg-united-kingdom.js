/* Payroll Guide — United Kingdom page content (hr-knowledge-hub-payroll-guide-united-kingdom.html) */
/* CN translation — empty values fall back to English (baked in HTML). Fill in translations. Values on data-i18n-html keys are raw HTML. */
window.MARCO_LANG_CN_PG_UNITED_KINGDOM = {
  'pg.united-kingdom.desc': `英国薪资运营完整指南 - 涵盖HMRC PAYE登记、National Insurance Contributions (NICs)、累进所得税代扣（20%-45%）、Workplace Pension自动参加（雇主3% + 员工5%）、Statutory Leave权益，以及Real Time Information (RTI) FPS/EPS月度申报。`,

  'pg.united-kingdom.s1.h': `适用范围`,

  'pg.united-kingdom.s1.sub': `适用范围与法律依据 / Employment Rights Act &middot; Income Tax (Earnings and Pensions) Act &middot; SSCBA &middot; Pensions Act`,

  'pg.united-kingdom.s1.b1': `
          <p class="article-p">本文件适用于：</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>已在英国设立本地法律实体的公司（Private Limited Company Ltd / Branch / LLP），在Companies House注册</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>由本地实体直接雇用、适用Employment Rights Act 1996 (ERA)及Working Time Regulations 1998的员工</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>基于Income Tax (Earnings and Pensions) Act 2003 (ITEPA)、Social Security Contributions and Benefits Act 1992 (SSCBA)以及HMRC法规的薪资合规</span>
            </div>
          </div>
`,

  'pg.united-kingdom.s1.b2': `本框架涵盖企业如何在英国完成薪资设置（Companies House注册 + HMRC PAYE Scheme + Workplace Pension + Employment Allowance）、月度薪资计算（Income Tax + NICs + Student Loan + Pension）、RTI实时申报（FPS每次发薪 + EPS每月），以及年度合规管理（P60于5月31日前 + P11D于7月6日前）。`,

  'pg.united-kingdom.s1.b3': `
          <p class="au-data-cards-label">2026/27税务年度关键数值</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Personal Allowance</span>
                <span class="au-dc-value">&pound;12,570</span>
                <span class="au-dc-note">冻结至2028年4月</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Basic Rate</span>
                <span class="au-dc-value">20%</span>
                <span class="au-dc-note">&pound;12,571 &ndash; &pound;50,270</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Higher Rate</span>
                <span class="au-dc-value">40%</span>
                <span class="au-dc-note">&pound;50,271 &ndash; &pound;125,140</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Additional Rate</span>
                <span class="au-dc-value">45%</span>
                <span class="au-dc-note">&gt; &pound;125,140</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Employee NICs</span>
                <span class="au-dc-value">8%</span>
                <span class="au-dc-note">PT &pound;12,570 &ndash; UEL &pound;50,270</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Employer NICs</span>
                <span class="au-dc-value">15%</span>
                <span class="au-dc-note">自2025/4起（此前13.8%）；ST &pound;5,000</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Workplace Pension</span>
                <span class="au-dc-value">3% + 5%</span>
                <span class="au-dc-note">雇主3% + 员工5%（Qualifying Earnings）</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">National Living Wage</span>
                <span class="au-dc-value">&pound;12.21/小时</span>
                <span class="au-dc-note">21岁及以上；2025/4生效</span>
              </div>
            </div>
          </div>
`,

  'pg.united-kingdom.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">英国薪资的三大关键特征：（1）PAYE实时制 &mdash; 雇主每次发薪须通过RTI向HMRC提交Full Payment Submission (FPS)；不同于年度申报制度。（2）2025年4月Employer NICs从13.8%上调至15%，同时Secondary Threshold从&pound;9,100降至&pound;5,000 &mdash; 这对每位员工的雇主成本增加约&pound;900/年。（3）Tax Code系统：HMRC通过Tax Code（如1257L）告知雇主每位员工的免税额和调整项；雇主须严格按Tax Code执行代扣。</p>
`,

  'pg.united-kingdom.s2.h': `薪资设置`,

  'pg.united-kingdom.s2.sub': `如何在英国建立合法的薪资发放能力 / Companies House &middot; HMRC &middot; Pension &middot; RTI`,

  'pg.united-kingdom.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 实体、HMRC PAYE与雇主登记</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:32%"><col style="width:20%"><col style="width:10%"><col style="width:38%"></colgroup>
              <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>Companies House注册</td><td>英国本地实体</td><td>是</td><td>Ltd / LLP / Branch；无最低资本要求</td></tr>
                <tr><td>HMRC PAYE Scheme</td><td>英国本地实体</td><td>是</td><td>雇用首位员工前注册；获取PAYE Reference + Accounts Office Reference</td></tr>
                <tr><td>Corporation Tax登记</td><td>英国本地实体</td><td>是</td><td>公司成立后3个月内向HMRC注册</td></tr>
                <tr><td>Workplace Pension Scheme</td><td>英国本地实体</td><td>是</td><td>Auto Enrolment；须在首位员工入职前完成设置（NEST / 商业养老金）</td></tr>
                <tr><td>Employment Allowance</td><td>英国本地实体</td><td>可选</td><td>符合条件的雇主每年最高&pound;10,500 Employer NICs减免</td></tr>
                <tr><td>员工National Insurance Number</td><td>员工</td><td>是</td><td>NI Number用于所有PAYE和NICs申报</td></tr>
                <tr><td>劳动合同 + Written Statement</td><td>雇主 + 员工</td><td>是</td><td>ERA要求在入职首日或之前提供Written Statement of Particulars</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> National Insurance Contributions结构（2026/27）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:18%"><col style="width:18%"><col style="width:29%"></colgroup>
              <thead><tr><th>项目</th><th>员工 (Class 1)</th><th>雇主 (Class 1)</th><th>门槛/上限</th></tr></thead>
              <tbody>
                <tr><td>Primary Threshold (PT) 以下</td><td>0%</td><td>&mdash;</td><td>&le; &pound;12,570/年</td></tr>
                <tr><td>PT至Upper Earnings Limit (UEL)</td><td>8%</td><td>&mdash;</td><td>&pound;12,570 &ndash; &pound;50,270</td></tr>
                <tr><td>UEL以上</td><td>2%</td><td>&mdash;</td><td>&gt; &pound;50,270</td></tr>
                <tr><td>Secondary Threshold (ST) 以上</td><td>&mdash;</td><td>15%</td><td>&gt; &pound;5,000/年（2025/4起）</td></tr>
                <tr><td>Employer NICs无上限</td><td>&mdash;</td><td>15%</td><td>无上限</td></tr>
                <tr><td>Employment Allowance</td><td>&mdash;</td><td>最高-&pound;10,500</td><td>符合条件的雇主；2025/4起从&pound;5,000提高</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Workplace Pension Auto Enrolment</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:20%"><col style="width:45%"></colgroup>
              <thead><tr><th>项目</th><th>费率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>雇主最低供款</td><td>3%</td><td>基于Qualifying Earnings（&pound;6,240至&pound;50,270之间的收入）</td></tr>
                <tr><td>员工最低供款</td><td>5%</td><td>Tax Relief at Source或Net Pay Arrangement</td></tr>
                <tr><td>Qualifying Earnings Band</td><td>&pound;6,240 &ndash; &pound;50,270</td><td>2026/27年度；影响缴费基数</td></tr>
                <tr><td>Auto Enrolment年龄</td><td>22岁至State Pension Age</td><td>收入超过&pound;10,000/年的Eligible Jobholder自动参加</td></tr>
                <tr><td>Opt-out期限</td><td>1个月</td><td>员工可在Auto Enrolment后1个月内退出</td></tr>
                <tr><td>Re-enrolment</td><td>每3年</td><td>雇主须每3年重新登记已退出的员工</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s2.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 银行账户与记录保存</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
              <thead><tr><th>项目</th><th>要求</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>GBP本地银行账户</td><td>强制</td><td>BACS / Faster Payments转账；通常月底发放</td></tr>
                <tr><td>Payslip工资单</td><td>强制（ERA第8条）</td><td>须在发薪日当天或之前提供；逐项列明毛工资、扣除项、实发工资</td></tr>
                <tr><td>薪资记录保存</td><td>强制，3年 + 当前年度</td><td>HMRC要求；建议保存6年（诉讼时效）</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s3.h': `薪资计算`,

  'pg.united-kingdom.s3.sub': `工资、税务和员工权益的计算方式 / 工资 &middot; 休假 &middot; PAYE &middot; NICs`,

  'pg.united-kingdom.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 工资计算与National Living Wage</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>项目</th><th>规则 / 2026年数值</th></tr></thead>
              <tbody>
                <tr><td>支付周期</td><td>按月最常见；周薪/双周薪/四周薪也合规</td></tr>
                <tr><td>National Living Wage（21岁及以上）</td><td>&pound;12.21/小时（2025/4生效）</td></tr>
                <tr><td>National Minimum Wage（18-20岁）</td><td>&pound;10.00/小时（2025/4生效）</td></tr>
                <tr><td>Apprentice Rate</td><td>&pound;7.55/小时</td></tr>
                <tr><td>第13个月/年终奖</td><td>非法定；按合同/公司政策</td></tr>
                <tr><td>加班</td><td>无法定溢价；按合同/行业惯例</td></tr>
                <tr><td>小数处理</td><td>四舍五入至便士（&pound;0.01）</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 法定休假权益</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:35%"><col style="width:35%"></colgroup>
              <thead><tr><th>项目</th><th>天数/时长</th><th>薪资比例/来源</th></tr></thead>
              <tbody>
                <tr><td>年假（法定）</td><td>5.6周（= 28天含Bank Holidays，或20天 + 8天Bank Holidays）</td><td>100% / 雇主</td></tr>
                <tr><td>Bank Holidays</td><td>8天（英格兰/威尔士）</td><td>通常含在5.6周内；合同可另行约定</td></tr>
                <tr><td>病假 SSP</td><td>最长28周</td><td>&pound;118.75/周（2025/26）；自第4天起</td></tr>
                <tr><td>产假 SMP</td><td>52周（39周带薪）</td><td>前6周90%平均周薪 + 33周&pound;187.18/周</td></tr>
                <tr><td>陪产假 SPP</td><td>2周</td><td>&pound;187.18/周或90%平均周薪，取较低者</td></tr>
                <tr><td>Shared Parental Leave</td><td>最长50周（37周带薪）</td><td>&pound;187.18/周或90%，取较低者</td></tr>
                <tr><td>Neonatal Care Leave</td><td>最长12周（2025/4新增）</td><td>按法定费率</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Income Tax &mdash; PAYE累进税率（2026/27）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:40%"><col style="width:18%"><col style="width:42%"></colgroup>
              <thead><tr><th>年应税收入 (GBP)</th><th>税率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>&pound;0 &ndash; &pound;12,570</td><td>0%</td><td>Personal Allowance（冻结至2028/4）</td></tr>
                <tr><td>&pound;12,571 &ndash; &pound;50,270</td><td>20%</td><td>Basic Rate</td></tr>
                <tr><td>&pound;50,271 &ndash; &pound;125,140</td><td>40%</td><td>Higher Rate</td></tr>
                <tr><td>&gt; &pound;125,140</td><td>45%</td><td>Additional Rate</td></tr>
                <tr><td>Personal Allowance递减</td><td>&mdash;</td><td>收入超过&pound;100,000后，每多&pound;2收入减少&pound;1免税额；&pound;125,140以上完全取消</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>Tax Code机制：</strong>HMRC通过P9X / Coding Notice向雇主发送每位员工的Tax Code（如1257L = &pound;12,570免税额）。雇主须严格按Tax Code执行PAYE代扣。员工个人情况变更（Marriage Allowance Transfer / Student Loan / Benefits in Kind）均通过Tax Code调整反映。</p>
`,

  'pg.united-kingdom.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Student Loan与Postgraduate Loan</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:25%"><col style="width:25%"></colgroup>
              <thead><tr><th>计划类型</th><th>起扣门槛</th><th>扣除率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>Plan 1</td><td>&pound;24,990/年</td><td>9%</td><td>2012年前英格兰/威尔士 + 苏格兰/北爱尔兰</td></tr>
                <tr><td>Plan 2</td><td>&pound;27,295/年</td><td>9%</td><td>2012年后英格兰/威尔士</td></tr>
                <tr><td>Plan 4</td><td>&pound;31,395/年</td><td>9%</td><td>2024年后苏格兰</td></tr>
                <tr><td>Plan 5</td><td>&pound;25,000/年</td><td>9%</td><td>2023年后英格兰/威尔士</td></tr>
                <tr><td>Postgraduate Loan</td><td>&pound;21,000/年</td><td>6%</td><td>硕士/博士贷款</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">英国薪资中三个常被低估的细节：（1）Employer NICs自2025/4起为15%且无收入上限 &mdash; 高薪员工的雇主成本显著增加；Employment Allowance从&pound;5,000提高至&pound;10,500以部分抵消。（2）Student Loan代扣需要正确的Plan Type &mdash; 员工入职时通过Starter Checklist申报；错误的Plan导致多扣或少扣。（3）Benefits in Kind（如公司车、私人医疗保险）须通过P11D申报或Payrolling BIK注册，否则面临HMRC罚款。</p>
`,

  'pg.united-kingdom.s4.h': `薪资处理与合规`,

  'pg.united-kingdom.s4.sub': `月度执行、RTI申报与缴款及会计处理 / FPS &middot; EPS &middot; 年度申报`,

  'pg.united-kingdom.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪资发放规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:30%"><col style="width:42%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>发放频率</td><td>按月 / 按周 / 其他</td><td>由合同确定；月薪最常见</td></tr>
                <tr><td>支付方式 + 币种</td><td>BACS / Faster Payments &middot; GBP</td><td>支票合规但少见；不允许外币结算</td></tr>
                <tr><td>Payslip + 工资扣除</td><td>强制（ERA Part I）</td><td>须在发薪日当天或之前提供；Itemised Pay Statement</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> RTI实时申报 &mdash; FPS与EPS</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:16%"><col style="width:14%"><col style="width:16%"><col style="width:26%"></colgroup>
              <thead><tr><th>申报项目</th><th>责任方</th><th>频率</th><th>截止日期</th><th>渠道</th></tr></thead>
              <tbody>
                <tr><td>Full Payment Submission (FPS)</td><td>雇主</td><td>每次发薪</td><td>发薪日当天或之前</td><td>HMRC RTI（通过薪资软件）</td></tr>
                <tr><td>Employer Payment Summary (EPS)</td><td>雇主</td><td>按月</td><td>次月19日前</td><td>HMRC RTI；用于申报SMP/SSP/CIS抵扣</td></tr>
                <tr><td>PAYE + NICs缴款</td><td>雇主</td><td>按月/按季</td><td>次月22日（电子）/ 19日（非电子）</td><td>HMRC（Direct Debit / BACS / CHAPS）</td></tr>
                <tr><td>Pension缴款</td><td>雇主</td><td>按月</td><td>按养老金计划时间表</td><td>NEST / 商业养老金提供商</td></tr>
                <tr><td>Starter / Leaver通知</td><td>雇主</td><td>按事件触发</td><td>随FPS一并提交</td><td>HMRC RTI</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资日记账映射规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:55%"><col style="width:45%"></colgroup>
              <thead><tr><th>项目</th><th>科目</th></tr></thead>
              <tbody>
                <tr><td>毛工资 + 奖金 + 津贴</td><td>薪资费用 &mdash; Salaries &amp; Wages</td></tr>
                <tr><td>Employer NICs（15%）</td><td>薪资费用 &mdash; Employer NI</td></tr>
                <tr><td>Employer Pension（3%）</td><td>薪资费用 &mdash; Pension Contributions</td></tr>
                <tr><td>Employee PAYE + NICs + Student Loan + Pension（代扣）</td><td>负债 &mdash; PAYE/NI Payable to HMRC</td></tr>
                <tr><td>实发工资</td><td>现金/银行 &mdash; GBP</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 年度申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:18%"><col style="width:18%"><col style="width:34%"></colgroup>
              <thead><tr><th>项目</th><th>责任方</th><th>截止日期</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>P60年度税务证明</td><td>雇主 &rarr; 员工</td><td>5月31日</td><td>每位在4月5日税务年度末仍在职的员工</td></tr>
                <tr><td>P11D福利申报</td><td>雇主 &rarr; HMRC</td><td>7月6日</td><td>Benefits in Kind年度申报（除非已注册Payrolling BIK）</td></tr>
                <tr><td>P11D(b) Class 1A NICs</td><td>雇主 &rarr; HMRC</td><td>7月19日/22日</td><td>对BIK缴纳15% Class 1A NICs</td></tr>
                <tr><td>Final FPS / EPS</td><td>雇主</td><td>4月19日</td><td>税务年度最终申报；标记"Final Submission"</td></tr>
                <tr><td>Pension Re-enrolment</td><td>雇主</td><td>每3年</td><td>重新登记已退出的员工</td></tr>
                <tr><td>National Living Wage更新</td><td>&mdash;</td><td>每年4月</td><td>Low Pay Commission建议；HMRC公布</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> 离职与外籍员工</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:30%"><col style="width:42%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>法定通知期</td><td>1周至12周</td><td>每满1年工龄+1周；上限12周（ERA第86条）</td></tr>
                <tr><td>Statutory Redundancy Pay</td><td>每年0.5至1.5周薪</td><td>22岁以下每年0.5周 / 22-40岁每年1周 / 41岁以上每年1.5周；周薪上限&pound;700</td></tr>
                <tr><td>未休年假折现</td><td>强制</td><td>按日薪计算未休Statutory Holiday</td></tr>
                <tr><td>P45离职税务表</td><td>离职时提供</td><td>记录本税务年度累计收入和代扣税款</td></tr>
                <tr><td>Settlement Agreement</td><td>视情况而定</td><td>前&pound;30,000遣散补偿免税；超出部分须缴纳Income Tax + Class 1A NICs</td></tr>
                <tr><td>外籍员工</td><td>Skilled Worker Visa / ICT / Global Talent</td><td>Points-Based Immigration System；雇主须持Sponsor Licence</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.united-kingdom.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">2026年英国薪资三大关键变化：（1）Employer NICs自2025/4起为15%（+1.2%），Secondary Threshold降至&pound;5,000（此前&pound;9,100）；Employment Allowance从&pound;5,000提高至&pound;10,500以抵消部分成本 &mdash; 但仅适用于上年度Employer NICs≤&pound;100,000的雇主。（2）Neonatal Care Leave自2025/4起生效：员工可享受最长12周带薪新生儿护理假。（3）Personal Allowance和Higher Rate Threshold继续冻结至2028/4（"fiscal drag"效应），这意味着更多员工将进入Higher Rate税档。</p>
`,
};
