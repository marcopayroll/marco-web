window.MARCO_LANG_CN_PG_HONG_KONG = {

  // ── Hero ──────────────────────────────────────────────────────────────────
  "pg.hong-kong.desc": `香港薪资运营完整指南 - 涵盖公司注册处及商业登记、强积金受托人设立、薪俸税累进税率（2%-17%）、《雇佣条例》下的法定休假权益，以及年度税务局申报义务（包括BIR56A和IR56B）。`,

  // ── Section 1: Scope & Application ───────────────────────────────────────
  "pg.hong-kong.s1.h":   `适用范围`,
  "pg.hong-kong.s1.sub": `适用范围与法律依据 / 《雇佣条例》 &middot; IRO &middot; MPFSO &middot; MWO`,

  // Intro paragraph + bullet list + framework paragraph
  "pg.hong-kong.s1.b1": `
<p class="article-p">本文件适用于：</p>
<div class="au-bullet-list" style="margin-top:16px;">
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span>已在香港设立本地法律实体的公司（香港有限公司 / 分公司 / 代表处）</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span>由本地实体直接雇用、受《雇佣条例》（第57章）及"连续性合约"（418规则）保障的员工</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span>基于《雇佣条例》、《强制性公积金计划条例》（第485章）、《税务条例》（第112章，IRO）以及税务局 / 积金局 / 劳工处法规的薪资合规</span>
  </div>
</div>
<p class="article-p" style="margin-top:20px;">本框架涵盖企业如何在香港完成薪资设置（公司注册处 + 商业登记 + 税务局 + 强积金受托人）、月度工资计算（薪俸税 + 5%强积金 + 法定假日 + 年假）、月度强积金供款（次月10日前）以及年度合规管理（雇主薪酬报税表BIR56A + IR56B于4月发出，截止日期为5月初）。</p>
`,

  // Data cards wrap — 2026 KEY NUMBERS (8 cards)
  "pg.hong-kong.s1.b2": `
<p class="au-data-cards-label">2026年关键数值</p>
<div class="au-data-cards-grid">
  <div class="au-data-cards-row">
    <div class="au-data-card">
      <span class="au-dc-name">法定最低工资 SMW</span>
      <span class="au-dc-value">HK$43.1/小时</span>
      <span class="au-dc-note">自2026/5/1起；首次年度调整</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">强积金供款</span>
      <span class="au-dc-value">5% + 5%</span>
      <span class="au-dc-note">员工 + 雇主；月度上限HK$1,500</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">强积金入息上下限</span>
      <span class="au-dc-value">7,100 &ndash; 30,000</span>
      <span class="au-dc-note">正检讨调整至10,500-40,000</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">薪俸税税率档</span>
      <span class="au-dc-value">2% &ndash; 17%</span>
      <span class="au-dc-note">5档累进，自HK$50,000起</span>
    </div>
  </div>
  <div class="au-data-cards-row">
    <div class="au-data-card">
      <span class="au-dc-name">标准税率</span>
      <span class="au-dc-value">15% / 16%</span>
      <span class="au-dc-note">首HK$5M / 其后，两级制</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">基本个人免税额</span>
      <span class="au-dc-value">HK$145,000</span>
      <span class="au-dc-note">2025/26课税年度，单身</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">法定假日</span>
      <span class="au-dc-value">15天</span>
      <span class="au-dc-note">自2026/1/1起，包括耶稣受难节翌日</span>
    </div>
    <div class="au-data-card">
      <span class="au-dc-name">年假</span>
      <span class="au-dc-value">7 &ndash; 14天</span>
      <span class="au-dc-note">连续性合约满12个月以上，按年资递增</span>
    </div>
  </div>
</div>
`,

  // Marco Insight — S1
  "pg.hong-kong.s1.b3": `
<p class="au-mi-label">MARCO INSIGHT</p>
<p class="au-mi-text">香港薪资的三大关键特征：（1）简单低税制 &mdash; 薪俸税仅由员工承担；雇主无薪资税或社保负担；唯一的强制雇主供款为5%强积金（月度上限HK$1,500）；（2）"连续性合约"（&#36830;&#32493;&#24615;&#21512;&#32422;）是核心概念：自2026/1/1起，规则放宽为"4周内累计工作68小时"（此前要求每周18小时 &times; 4周），使更多员工更容易触发年假/病假/法定假日/遣散权益；（3）课税年度为4月1日至3月31日；雇主须在收到BIR56A后1个月内提交IR56B（通常截止日期为5月初）。</p>
`,

  // ── Section 2: Payroll Set-up ─────────────────────────────────────────────
  "pg.hong-kong.s2.h":   `薪资设置`,
  "pg.hong-kong.s2.sub": `如何在香港建立合法的薪资发放能力 / 实体 &middot; 税务局 &middot; 强积金 &middot; 商业登记`,

  // Table i — Entity, BR & IRD Registration
  "pg.hong-kong.s2.b1": `
<p class="au-table-title"><span class="au-table-num">i.</span> 实体、商业登记与税务局登记</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:22%"><col style="width:12%"><col style="width:38%"></colgroup>
    <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>操作说明</th></tr></thead>
    <tbody>
      <tr><td>公司注册处 (CR) 登记</td><td>香港本地实体</td><td>是</td><td>香港有限公司；最低实缴资本HK$1</td></tr>
      <tr><td>商业登记证 (BR)</td><td>香港本地实体</td><td>是</td><td>由税务局签发；年费HK$2,200</td></tr>
      <tr><td>税务局雇主档案</td><td>香港本地实体</td><td>是</td><td>雇用首位员工后3个月内通过IR1表格通知税务局</td></tr>
      <tr><td>强积金受托人</td><td>香港本地实体</td><td>是</td><td>雇用员工后60天内须登记强积金计划（共28个核准计划可选）</td></tr>
      <tr><td>书面劳动合同 + 工作签证</td><td>雇主 + 员工</td><td>建议</td><td>《雇佣条例》第44条建议；外籍员工须持GEP / 高才通 / 人才入境计划</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table ii — MPF Contribution Structure
  "pg.hong-kong.s2.b2": `
<p class="au-table-title"><span class="au-table-num">ii.</span> 强制性公积金（MPF）&mdash; 供款结构</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:30%"><col style="width:22%"><col style="width:22%"><col style="width:26%"></colgroup>
    <thead><tr><th>项目</th><th>员工供款</th><th>雇主供款</th><th>基数/说明</th></tr></thead>
    <tbody>
      <tr><td>有关入息最低水平</td><td>0%</td><td>5%</td><td>月入 &lt; HK$7,100：员工免供；雇主仍须供5%</td></tr>
      <tr><td>有关入息HK$7,100至30,000</td><td>5%</td><td>5%</td><td>按月薪比例供款</td></tr>
      <tr><td>有关入息最高水平</td><td>5%（上限HK$1,500）</td><td>5%（上限HK$1,500）</td><td>月入 &gt; HK$30,000：双方均以HK$1,500为上限</td></tr>
      <tr><td>供款类别</td><td>强制 + 自愿</td><td>强制 + 自愿</td><td>自愿供款可获税务扣减</td></tr>
      <tr><td>缴款截止日期</td><td>次月10日</td><td>次月10日</td><td>逾期30天后加收5%附加费</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table iii — Payslip & Record Retention
  "pg.hong-kong.s2.b3": `
<p class="au-table-title"><span class="au-table-num">iii.</span> 工资单与记录保存</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:22%"><col style="width:50%"></colgroup>
    <thead><tr><th>项目</th><th>要求</th><th>操作说明</th></tr></thead>
    <tbody>
      <tr><td>银行账户 (HKD)</td><td>强制</td><td>香港本地银行；电子转账/支票支付</td></tr>
      <tr><td>工资单</td><td>必须（《雇佣条例》第49B条）</td><td>须逐项列明毛工资、强积金扣除、加班费、津贴等</td></tr>
      <tr><td>工资及雇佣记录</td><td>保存7年</td><td>自2026/5/1起，月薪低于HK$17,600须保存每日工时记录</td></tr>
    </tbody>
  </table>
</div>
`,

  // ── Section 3: Payroll Calculation ───────────────────────────────────────
  "pg.hong-kong.s3.h":   `薪资计算`,
  "pg.hong-kong.s3.sub": `工资、税务和员工权益的计算方式 / 工资 &middot; 休假`,

  // Table i — Salary, Minimum Wage & Double Pay
  "pg.hong-kong.s3.b1": `
<p class="au-table-title"><span class="au-table-num">i.</span> 工资、最低工资与双粮</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
    <thead><tr><th>项目</th><th>规则 / 2026年数值</th></tr></thead>
    <tbody>
      <tr><td>支付周期</td><td>按月（最常见）；按周/按日也合规</td></tr>
      <tr><td>支付期限</td><td>《雇佣条例》第23条：工资期届满后7天内</td></tr>
      <tr><td>法定最低工资 SMW</td><td>HK$43.1/小时（自2026/5/1起；此前HK$42.1）</td></tr>
      <tr><td>双粮/花红/第13个月工资</td><td>非法定；通常由合同/集体协议约定；一经约定即具法律约束力</td></tr>
      <tr><td>加班</td><td>《雇佣条例》不强制加班费；视合同/行业而定</td></tr>
      <tr><td>公司福利</td><td>房屋津贴/教育津贴/医疗保险 &mdash; 根据IRO第9条属应课税</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table ii — Statutory Leave Entitlements
  "pg.hong-kong.s3.b2": `
<p class="au-table-title"><span class="au-table-num">ii.</span> 法定休假权益</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:36%"><col style="width:36%"></colgroup>
    <thead><tr><th>项目</th><th>时长/期限</th><th>薪资比例/来源</th></tr></thead>
    <tbody>
      <tr><td>年假</td><td>7天（1年）至14天（9年以上）</td><td>100% / 雇主，按12个月平均每日工资计算</td></tr>
      <tr><td>法定假日</td><td>每年15天（自2026年起，包括耶稣受难节翌日）</td><td>100% / 雇主；连续性合约满3个月后适用</td></tr>
      <tr><td>病假</td><td>累积上限120天</td><td>平均每日工资的80% / 雇主；连续4天以上须提供医生证明</td></tr>
      <tr><td>产假</td><td>14周（自2020年起延长4周）</td><td>80% / 雇主；第11至14周上限HK$80,000政府补贴</td></tr>
      <tr><td>侍产假</td><td>每个孩子5天</td><td>80% / 雇主；连续性合约≥40周</td></tr>
      <tr><td>休息日</td><td>每7天≥1天</td><td>由雇主指定；适用于连续性合约员工</td></tr>
      <tr><td>无薪假</td><td>须经雇主批准</td><td>0% / 无</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table iii — Salaries Tax progressive rates + calculation bullets
  "pg.hong-kong.s3.b3": `
<p class="au-table-title"><span class="au-table-num">iii.</span> 薪俸税 &mdash; 2025/26年度累进税率</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:38%"><col style="width:16%"><col style="width:46%"></colgroup>
    <thead><tr><th>年应课税入息 (HKD)</th><th>税率</th><th>累计税款</th></tr></thead>
    <tbody>
      <tr><td>首HK$50,000</td><td>2%</td><td>HK$1,000</td></tr>
      <tr><td>其后HK$50,000</td><td>6%</td><td>HK$4,000</td></tr>
      <tr><td>其后HK$50,000</td><td>10%</td><td>HK$9,000</td></tr>
      <tr><td>其后HK$50,000</td><td>14%</td><td>HK$16,000</td></tr>
      <tr><td>余额</td><td>17%</td><td>&mdash;</td></tr>
      <tr><td><strong>标准税率（两级制）</strong></td><td><strong>15% / 16%</strong></td><td>首HK$5M = 15% / 其后 = 16%</td></tr>
      <tr><td><strong>实际税款</strong></td><td><strong>取较低者</strong></td><td>累进或标准税率，取较低者 &mdash; 在BIR60表格上自动计算</td></tr>
    </tbody>
  </table>
</div>
<p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>薪俸税计算流程：</strong></p>
<div class="au-bullet-list" style="margin-top:8px;">
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span style="font-size:14px; color:#475072;">应评税入息（包括双粮、花红、津贴、居所福利应课税价值按入息的4% / 8% / 10%计算）减去强制性强积金员工供款（年度上限HK$18,000）+ 认可慈善捐款 + 自愿性强积金 + 公积金 + 人寿保险等 = 入息净额</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span style="font-size:14px; color:#475072;">减去个人免税额（基本HK$145,000 / 已婚HK$290,000 / 供养子女每人HK$130,000）= 应课税入息实额</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span style="font-size:14px; color:#475072;">适用5档累进税率或两级标准税率，取较低者</span>
  </div>
  <div class="au-bullet-item">
    <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
    <span style="font-size:14px; color:#475072;">2025/26年度：100%税款宽减，上限HK$3,000</span>
  </div>
</div>
`,

  // Table iv — MPF Operational Details
  "pg.hong-kong.s3.b4": `
<p class="au-table-title"><span class="au-table-num">iv.</span> 强积金 &mdash; 操作细节</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:30%"><col style="width:35%"><col style="width:35%"></colgroup>
    <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
    <tbody>
      <tr><td>新员工等候期</td><td>60天</td><td>入职后次月1日起开始供款</td></tr>
      <tr><td>首30天员工豁免</td><td>员工豁免 / 雇主供款</td><td>新员工首30天豁免员工部分；雇主5%仍须缴纳</td></tr>
      <tr><td>对冲机制</td><td>自2025/5/1起取消</td><td>雇主不得再以雇主强积金供款部分抵销遣散费/长期服务金</td></tr>
      <tr><td>年度对账</td><td>受托人发出</td><td>年度权益结算书于12月31日前发出</td></tr>
      <tr><td>供款上下限检讨</td><td>2026年检讨中</td><td>拟从7,100/30,000调整至10,500/40,000；月度上限可能从HK$1,500提高至HK$2,000</td></tr>
    </tbody>
  </table>
</div>
`,

  // Marco Insight — S3
  "pg.hong-kong.s3.b5": `
<p class="au-mi-label">MARCO INSIGHT</p>
<p class="au-mi-text">香港薪资中三个常被低估的细节：（1）"居所"房屋福利并非按市值征税；而是按入息的4% / 8% / 10%计算应课税价值 &mdash; 这是外派员工的关键节税要点；（2）强积金对冲机制自2025/5/1起取消，但2025/4/30前累积的雇主供款部分仍可用于对冲；人力资源须重新计算遣散费；（3）身兼公司董事的自雇独资经营者须分别向税务局申报利得税和薪俸税。</p>
`,

  // ── Section 4: Payroll Processing & Compliance ────────────────────────────
  "pg.hong-kong.s4.h":   `薪资处理与合规`,
  "pg.hong-kong.s4.sub": `月度执行、申报与缴款及会计处理 / 月度申报与日记账`,

  // Table i — Payroll Payment Rules
  "pg.hong-kong.s4.b1": `
<p class="au-table-title"><span class="au-table-num">i.</span> 薪资发放规则</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:25%"><col style="width:30%"><col style="width:45%"></colgroup>
    <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
    <tbody>
      <tr><td>发放频率</td><td>每月一次 / 每周 / 每日</td><td>《雇佣条例》第23条</td></tr>
      <tr><td>支付期限</td><td>工资期届满后7天内</td><td>逾期支付可能被税务局/劳工处处罚</td></tr>
      <tr><td>支付方式 + 币种</td><td>电子转账 &middot; HKD</td><td>自动转账 / 支票 / 现金；外币支付须员工书面同意</td></tr>
      <tr><td>工资扣除限额</td><td>&le; 月薪的1/2</td><td>《雇佣条例》第32条；包括强积金、税务扣除</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table ii — Monthly Filing & Payment
  "pg.hong-kong.s4.b2": `
<p class="au-table-title"><span class="au-table-num">ii.</span> 月度申报与缴款（无月度税务申报）</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:26%"><col style="width:18%"><col style="width:16%"><col style="width:16%"><col style="width:24%"></colgroup>
    <thead><tr><th>申报项目</th><th>责任方</th><th>频率</th><th>截止日期</th><th>汇缴机构</th></tr></thead>
    <tbody>
      <tr><td>强积金强制供款</td><td>雇主</td><td>按月</td><td>次月10日</td><td>强积金受托人（28家公司）</td></tr>
      <tr><td>薪俸税代扣</td><td>不代扣</td><td>&mdash;</td><td>&mdash;</td><td>员工自行通过BIR60表格申报</td></tr>
      <tr><td>新员工通知 IR56E</td><td>雇主</td><td>入职后3个月内</td><td>&mdash;</td><td>税务局（网上e-Tax）</td></tr>
      <tr><td>离职通知 IR56F</td><td>雇主</td><td>按事件触发</td><td>离职前1个月</td><td>税务局</td></tr>
      <tr><td>离港通知 IR56G</td><td>雇主</td><td>按事件触发</td><td>永久离港前1个月</td><td>税务局；须扣起最终工资 + 税款</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table iii — Payroll Journal Mapping Rules (HKFRS)
  "pg.hong-kong.s4.b3": `
<p class="au-table-title"><span class="au-table-num">iii.</span> 薪资日记账映射规则（HKFRS）</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:48%"><col style="width:52%"></colgroup>
    <thead><tr><th>项目</th><th>科目（HKFRS / IFRS标准）</th></tr></thead>
    <tbody>
      <tr><td>工资 + 津贴 + 花红 + 第13个月工资</td><td>员工福利费用 / 薪酬</td></tr>
      <tr><td>强积金雇主供款5%</td><td>界定供款计划费用</td></tr>
      <tr><td>强积金员工供款5%</td><td>负债 &mdash; 应付强积金受托人</td></tr>
      <tr><td>薪俸税代扣（如有）</td><td>&mdash;（香港不代扣；员工自行缴纳）</td></tr>
      <tr><td>遣散费 / 长期服务金</td><td>员工福利拨备</td></tr>
      <tr><td>应付实发工资</td><td>银行 &mdash; HSBC / BOC / SC HK</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table iv — Annual Filings
  "pg.hong-kong.s4.b4": `
<p class="au-table-title"><span class="au-table-num">iv.</span> 年度申报</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:22%"><col style="width:16%"><col style="width:34%"></colgroup>
    <thead><tr><th>项目</th><th>责任方</th><th>截止日期</th><th>说明</th></tr></thead>
    <tbody>
      <tr><td>BIR56A雇主薪酬报税表</td><td>雇主 &rarr; 税务局</td><td>收到后1个月内</td><td>2025/26课税年度通常截止日期为5/4</td></tr>
      <tr><td>IR56B员工年度入息申报</td><td>雇主 &rarr; 税务局</td><td>随BIR56A一并提交</td><td>课税年度内任何时间受雇的所有员工</td></tr>
      <tr><td>IR56E新员工通知</td><td>雇主 &rarr; 税务局</td><td>入职后3个月内</td><td>通知新员工受聘</td></tr>
      <tr><td>IR56F离职通知</td><td>雇主 &rarr; 税务局</td><td>离职前1个月</td><td>报告失业/退休/离职情况</td></tr>
      <tr><td>IR56G离港通知</td><td>雇主 &rarr; 税务局</td><td>离港前1个月</td><td>扣起最终工资 + 相关税款</td></tr>
      <tr><td>公司利得税</td><td>雇主/公司</td><td>财政年度结束后4至8个月</td><td>BIR51表格 + 财务报表</td></tr>
    </tbody>
  </table>
</div>
`,

  // Table v — Termination & Foreign Workers
  "pg.hong-kong.s4.b5": `
<p class="au-table-title"><span class="au-table-num">v.</span> 离职与外籍员工</p>
<div class="au-table-wrap">
  <table class="au-table">
    <colgroup><col style="width:28%"><col style="width:28%"><col style="width:44%"></colgroup>
    <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
    <tbody>
      <tr><td>通知期</td><td>≥7天 / 1个月</td><td>《雇佣条例》第6条；试用期为7天</td></tr>
      <tr><td>遣散费</td><td>月薪的2/3 &times; 服务年资</td><td>雇主裁员；连续性合约≥24个月；月薪上限HK$22,500</td></tr>
      <tr><td>长期服务金</td><td>月薪的2/3 &times; 服务年资</td><td>非裁员离职；连续服务≥5年；月薪上限HK$22,500</td></tr>
      <tr><td>未休年假折现</td><td>强制</td><td>按12个月平均每日工资计算</td></tr>
      <tr><td>IR56F离职通知</td><td>离职前1个月内</td><td>须逐项列明最终工资 + 最终税款</td></tr>
      <tr><td>外籍员工签证</td><td>GEP / 高才通 / 人才入境计划</td><td>须配合IR56G离港通知机制</td></tr>
    </tbody>
  </table>
</div>
`,

  // Marco Insight — S4
  "pg.hong-kong.s4.b6": `
<p class="au-mi-label">MARCO INSIGHT</p>
<p class="au-mi-text">2026年香港薪资四大关键变化：（1）法定最低工资自2026/5/1起提高至HK$43.1/小时（+2.36%）；首次采用"一年一检"机制；工资记录门槛同步提高至HK$17,600；（2）法定假日自2026/1/1起增至15天（新增耶稣受难节翌日），与公众假期天数一致；（3）强积金入息上下限正在检讨中，拟从7,100/30,000调整至10,500/40,000；月度供款上限可能从HK$1,500提高至HK$2,000；（4）"连续性合约418规则"自2026/1/1起生效（4周内累计68小时取代18&times;4周）；更多兼职员工将符合法定权益资格。</p>
`,

};
