/* Payroll Guide — Sweden page content (hr-knowledge-hub-payroll-guide-sweden.html) */
/* CN translation — empty values fall back to English (baked in HTML). Fill in translations. Values on data-i18n-html keys are raw HTML. */
window.MARCO_LANG_CN_PG_SWEDEN = {
  'pg.sweden.desc': `本框架用于说明：企业如何在瑞典完成 Payroll Set-up（Bolagsverket / Skatteverket 登记、F-skatt、personnummer 员工识别）、月度薪酬计算（PAYE 代扣 + arbetsgivaravgifter 31.42% 雇主缴费）、AGI 月度申报及年度合规管理。`,

  'pg.sweden.s1.h': `适用范围`,

  'pg.sweden.s1.sub': `适用范围与法律基础 / Lag om anst&auml;llningsskydd &middot; Semesterlag &middot; Inkomstskattelag`,

  'pg.sweden.s1.b1': `
          <p class="article-p">本文件适用于：</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>在瑞典已设立本地法人实体的企业（Aktiebolag AB / Handelsbolag / Kommanditbolag），并在 Bolagsverket 完成注册</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>员工由该本地实体直接雇佣，受《雇佣保护法》（LAS）及适用的集体协议（kollektivavtal）约束</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>薪酬合规以 LAS、《年假法》（Semesterlag）、《所得税法》（Inkomstskattelag）及 Skatteverket / F&ouml;rs&auml;kringskassan 规定为基础</span>
            </div>
          </div>
`,

  'pg.sweden.s1.b2': `本框架用于说明：企业如何在瑞典完成 Payroll Set-up（Bolagsverket / Skatteverket 登记、F-skatt、personnummer 员工识别）、月度薪酬计算（PAYE 代扣 + arbetsgivaravgifter 31.42% 雇主缴费）、AGI 月度申报及年度合规管理。`,

  'pg.sweden.s1.b3': `
          <p class="au-data-cards-label">2026 关键数据</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">PBB 基本金额（Prisbasbelopp）</span>
                <span class="au-dc-value">SEK 59,200</span>
                <span class="au-dc-note">（2026）</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">FPBB 提高金额（F&ouml;rh&ouml;jt PBB）</span>
                <span class="au-dc-value">SEK 60,500</span>
                <span class="au-dc-note">（2026）</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">市政税</span>
                <span class="au-dc-value">32.38%</span>
                <span class="au-dc-note">区间 28.93-35.65%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">国家税起征点</span>
                <span class="au-dc-value">SEK 643,000</span>
                <span class="au-dc-note">超出部分 +20%</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">雇主社会缴费</span>
                <span class="au-dc-value">31.42%</span>
                <span class="au-dc-note">（Arbetsgivaravgifter）</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">67+ 雇主费率</span>
                <span class="au-dc-value">10.21%</span>
                <span class="au-dc-note">仅养老金部分</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">SINK 非居民税</span>
                <span class="au-dc-value">22.5%</span>
                <span class="au-dc-note">2026 年下调（此前 25%）</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Expertskatt</span>
                <span class="au-dc-value">30%</span>
                <span class="au-dc-note">拟于 2026 年生效</span>
              </div>
            </div>
          </div>
`,

  'pg.sweden.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">瑞典 Payroll 三大特征：(1) 无法定最低工资；最低薪酬由行业级 kollektivavtal（集体协议）确定。(2) 社会缴费无上限：arbetsgivaravgifter 31.42% 适用于每一克朗的薪资、奖金和应税福利。(3) 所得税以市政税（约 32%）为主，仅高收入者（年收入 &gt;SEK 643,000）需额外缴纳 20% 国家税。</p>
`,

  'pg.sweden.s2.h': `薪资设置`,

  'pg.sweden.s2.sub': `如何在瑞典具备合法发薪能力 / Entity &middot; Skatteverket &middot; Pension`,

  'pg.sweden.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 公司、税务与雇主登记</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28.4%"><col style="width:28.4%"><col style="width:14.9%"><col style="width:28.4%"></colgroup>
              <thead><tr><th>项目</th><th>账户主体</th><th>强制</th><th>实操说明</th></tr></thead>
              <tbody>
                <tr><td>Bolagsverket 注册</td><td>瑞典本地实体</td><td>是</td><td>AB 最低股本 SEK 25,000；获发 organisationsnummer（组织号码）</td></tr>
                <tr><td>F-skattsedel（F-税证书）</td><td>瑞典本地实体</td><td>是</td><td>向 Skatteverket 申请，确认公司自行处理税务事宜</td></tr>
                <tr><td>Arbetsgivarregistrering（雇主登记）</td><td>瑞典本地实体</td><td>是</td><td>雇主登记，激活 AGI 月度申报义务</td></tr>
                <tr><td>员工 Personnummer</td><td>员工</td><td>是</td><td>10 位个人识别号码；外国人可使用 samordningsnummer（协调号码）</td></tr>
                <tr><td>劳动合同（Anst&auml;llningsavtal）</td><td>雇主 + 员工</td><td>是</td><td>须书面签订，注明薪资和工时；多数行业受 kollektivavtal 覆盖</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 保险与职业养老金</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.4%"></colgroup>
              <thead><tr><th>项目</th><th>强制 / 自愿</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>国家养老金（Allm&auml;n pension）</td><td>强制</td><td>已包含在 arbetsgivaravgifter 中，费率 10.21%</td></tr>
                <tr><td>职业养老金（ITP / SAF-LO）</td><td>kollektivavtal 下强制</td><td>ITP 1：月薪 &le; SEK 52,125 部分 4.5%；超出部分 30%</td></tr>
                <tr><td>AGS / TGL 集体保险</td><td>kollektivavtal 下强制</td><td>病假、寿险及补充工伤保险，工资的 0.4-1.5%</td></tr>
                <tr><td>特殊群体减免</td><td>有条件</td><td>67+ 员工：仅 10.21%；19-23 岁群体：2026 年 4 月起享受减免</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 银行账户、工资单与记录保存</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.4%"></colgroup>
              <thead><tr><th>项目</th><th>要求</th><th>实操说明</th></tr></thead>
              <tbody>
                <tr><td>SEK 本地银行账户</td><td>强制</td><td>工资以瑞典克朗电子转账支付；通常每月 25 日发薪</td></tr>
                <tr><td>工资单（L&ouml;nespecifikation）</td><td>每次发薪</td><td>须列明总薪、PAYE 代扣、净薪、年假累计及 ITP</td></tr>
                <tr><td>薪酬 + 人事档案保存</td><td>强制，7 年</td><td>依据 Bokf&ouml;ringslag（簿记法）要求</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s3.h': `薪酬计算`,

  'pg.sweden.s3.sub': `薪酬、税务与员工权益如何计算 / Salary &middot; Leave`,

  'pg.sweden.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪酬、假期工资与折算</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:29.7%"><col style="width:70.3%"></colgroup>
              <thead><tr><th>项目</th><th>规则 / 2026 数值</th></tr></thead>
              <tbody>
                <tr><td>计薪周期</td><td>月薪（最常见），通常每月 25 日发放</td></tr>
                <tr><td>最低工资</td><td>无法定最低工资；由各行业 kollektivavtal（集体协议）确定</td></tr>
                <tr><td>折算方式</td><td>月薪 &divide; 当月工作日 &times; 实际出勤天数；加班溢价依 kollektivavtal 执行</td></tr>
                <tr><td>基本金额 Prisbasbelopp（PBB）</td><td>SEK 59,200（2026），社会保险 / 病假工资 / 育儿津贴上限基准</td></tr>
                <tr><td>提高金额 F&ouml;rh&ouml;jt PBB（FPBB）</td><td>SEK 60,500（2026），用于养老金计算上限</td></tr>
                <tr><td>假期工资（Semesterers&auml;ttning）</td><td>累计未休年假 &times; 上年薪资的 12%；离职时一次性结算</td></tr>
                <tr><td>假期补贴（Semestertill&auml;gg）</td><td>每休假日额外 0.43% &times; 月薪 + 休假期间浮动薪酬（奖金等）的 12%</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 法定假期</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.4%"></colgroup>
              <thead><tr><th>项目</th><th>天数 / 期间</th><th>工资比例 / 来源</th></tr></thead>
              <tbody>
                <tr><td>年假 Semester（累计公式）</td><td>（受雇天数 - 无薪缺勤天数）&divide; 365 &times; 25（闰年 366）</td><td>100% + Semestertill&auml;gg / 雇主</td></tr>
                <tr><td>8 月 31 日后入职员工</td><td>当期仅享 5 天法定年假</td><td>100% / 雇主</td></tr>
                <tr><td>公共假日</td><td>13 天（含 Midsommar、Lucia）</td><td>100% / 雇主</td></tr>
                <tr><td>病假工资 Sjukl&ouml;n（前 14 天）</td><td>第 1 天：karensavdrag 扣除周薪的 20%</td><td>80%（上限 SEK 725/天）/ 雇主</td></tr>
                <tr><td>病假津贴 Sjukpenning（第 15 天起）</td><td>最长约 1 年，特殊情况可延长</td><td>约 80% / F&ouml;rs&auml;kringskassan</td></tr>
                <tr><td>育儿假（F&ouml;r&auml;ldraledighet）</td><td>每子 480 天（父母各保留 90 天）</td><td>约 80%（上限 7.5 &times; PBB）/ F&ouml;rs&auml;kringskassan</td></tr>
                <tr><td>照看患病子女 VAB</td><td>每子每年 120 天（12 岁以下）</td><td>约 80% / F&ouml;rs&auml;kringskassan</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 个人所得税 — 市政税 + 国家税</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:20%"><col style="width:46.7%"></colgroup>
              <thead><tr><th>税档（2026）</th><th>税率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>市政税（Kommunalskatt）</td><td>约 32.38%</td><td>因市镇而异：28.93%（&Ouml;ster&aring;ker）至 35.65%（Munkedal）</td></tr>
                <tr><td>国家税（Statlig skatt）</td><td>+20%</td><td>年收入超过 SEK 643,000 部分征收（skiktgr&auml;ns 2026）</td></tr>
                <tr><td>基本扣除额（Grundavdrag）</td><td>最高 SEK 47,100</td><td>按收入水平分级，自动适用</td></tr>
                <tr><td>就业税收抵免（Jobbskatteavdrag）</td><td>最高 SEK 36,800</td><td>仅适用于雇佣收入，自动适用；可将实际税率降至 22-28%</td></tr>
                <tr><td>SINK（非居民特别税）</td><td>22.5%</td><td>2026 年下调（此前 25%），2027 年进一步降至 20%</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Arbetsgivaravgifter — 明细分拆</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:20%"><col style="width:46.7%"></colgroup>
              <thead><tr><th>组成部分</th><th>费率</th><th>说明 / 2026</th></tr></thead>
              <tbody>
                <tr><td>老年养老金（&Aring;lderspension）</td><td>10.21%</td><td>67+ 员工唯一适用项</td></tr>
                <tr><td>遗属养老金（Efterlevandepension）</td><td>0.60%</td><td>&ndash;</td></tr>
                <tr><td>疾病保险（Sjukf&ouml;rs&auml;kring）</td><td>3.55%</td><td>前 14 天病假工资（Sjukl&ouml;n）由雇主承担</td></tr>
                <tr><td>育儿保险（F&ouml;r&auml;ldraf&ouml;rs&auml;kring）</td><td>2.60%</td><td>用于 F&ouml;r&auml;ldrapenning 资金</td></tr>
                <tr><td>工伤保险（Arbetsskadef&ouml;rs&auml;kring）</td><td>0.20%</td><td>&ndash;</td></tr>
                <tr><td>劳动力市场缴费（Arbetsmarknadsavgift）</td><td>2.64%</td><td>&ndash;</td></tr>
                <tr><td>一般工资税（Allm&auml;n l&ouml;neavgift）</td><td>11.62%</td><td>非保险性质的税费</td></tr>
                <tr><td>Arbetsgivaravgifter 合计</td><td>31.42%</td><td>无缴费上限；无常驻雇主的外籍员工：18.8%</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">瑞典 Payroll 三个常被低估的细节：(1) 雇主社会缴费 31.42% 完全无缴费上限：即便百万克朗薪资也按全额费率缴纳，使其成为高薪雇员雇主的最大成本项。(2) 同样无社保收入上限，但 Jobbskatteavdrag + Grundavdrag 双重减免意味着月薪 SEK 50,000 的雇员实际税率约 26-28%，远低于 32%+20% 的「名义税率」。(3) Kollektivavtal（行业集体协议）实质上具有强制效力：签约企业须额外缴纳 ITP（白领约 4.5%-30%）和 AGS/TGL（约 1%），使实际雇主成本超过 36%。</p>
`,

  'pg.sweden.s4.h': `薪酬处理与合规`,

  'pg.sweden.s4.sub': `月度执行、申报缴纳与账务处理 / Monthly Filings &amp; Journal`,

  'pg.sweden.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪酬支付规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:24.8%"><col style="width:24.8%"><col style="width:50.4%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>支付频率</td><td>每月至少一次</td><td>通常 25 日；kollektivavtal 可能约定 20 日</td></tr>
                <tr><td>支付方式 + 货币</td><td>电子转账 &middot; SEK</td><td>Bankgiro / Plusgiro / Swish 均常用；以瑞典克朗结算</td></tr>
                <tr><td>工资单 + 扣款上限</td><td>强制，Kronofogden 框架</td><td>L&ouml;nespecifikation 为法定要求；扣款后须保留 forbeh&aring;llsbelopp（保护金额）</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 月度 AGI 与 PAYE 申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:19.5%"><col style="width:15%"><col style="width:23.5%"><col style="width:20%"></colgroup>
              <thead><tr><th>申报项</th><th>责任方</th><th>频率</th><th>截止日</th><th>申报机构</th></tr></thead>
              <tbody>
                <tr><td>AGI 月度个人申报</td><td>雇主</td><td>每月</td><td>次月 12 日</td><td>Skatteverket</td></tr>
                <tr><td>PAYE 代扣税款缴纳</td><td>雇主</td><td>每月</td><td>次月 12 日</td><td>Skatteverket</td></tr>
                <tr><td>Arbetsgivaravgifter 缴纳</td><td>雇主</td><td>每月</td><td>次月 12 日</td><td>Skatteverket</td></tr>
                <tr><td>ITP / SAF-LO 缴费</td><td>雇主</td><td>每月</td><td>次月月末（Fora/Collectum）</td><td>Fora / Collectum</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪酬账务处理</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:50%"><col style="width:50%"></colgroup>
              <thead><tr><th>项目</th><th>科目</th></tr></thead>
              <tbody>
                <tr><td>总薪 + 假期工资 + 福利</td><td>薪酬费用</td></tr>
                <tr><td>Arbetsgivaravgifter (31.42%)</td><td>薪酬费用 &ndash; 社会缴费</td></tr>
                <tr><td>ITP / 职业养老金（&asymp;4.5-30%）</td><td>薪酬费用 &ndash; 养老金</td></tr>
                <tr><td>PAYE 税款代扣</td><td>薪酬负债 &ndash; Skatteverket</td></tr>
                <tr><td>净薪</td><td>现金 / 银行 &ndash; SEK</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 年度申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:25%"><col style="width:25%"></colgroup>
              <thead><tr><th>项目</th><th>责任方</th><th>截止日</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>AGI 全年汇总</td><td>雇主</td><td>次年 1 月底</td><td>12 个月度报告汇总；员工据此自动收到 Inkomstdeklaration 1</td></tr>
                <tr><td>员工个人申报（Inkomstdeklaration 1）</td><td>员工</td><td>5 月 2 日</td><td>可通过 mina sidor 一键确认</td></tr>
                <tr><td>KU10 控制信息（特殊情况）</td><td>雇主</td><td>1 月 31 日</td><td>适用于 AGI 未涵盖的特殊报酬</td></tr>
                <tr><td>F-skatt 年度调整</td><td>雇主</td><td>5 月 / 11 月</td><td>调整后续年度 F-tax 预缴金额</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> 离职结算与 Expertskatt（外籍专家税）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.4%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>通知期（Upps&auml;gningstid，LAS）</td><td>1 / 2 / 3 / 4 / 5 / 6 个月</td><td>按工龄：<2 / 2-4 / 4-6 / 6-8 / 8-10 / &ge;10 年</td></tr>
                <tr><td>遣散费</td><td>无法定要求</td><td>通常通过 kollektivavtal 协商（如 Omst&auml;llningsavtal）</td></tr>
                <tr><td>未休年假现金折算</td><td>强制</td><td>Semesterers&auml;ttning 按累计未休天数 &times; 12% 计算</td></tr>
                <tr><td>争议解决</td><td>Arbetsdomstolen（劳动法院）</td><td>工会代表协商优先；诉讼前须经仲裁</td></tr>
                <tr><td>Expertskatt（外籍专家税）</td><td>30% 免税，最长 7 年</td><td>门槛 &ge; 1.5 倍平均工资（约 SEK 132,150/月）或博士级专业能力</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.sweden.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">2026 年瑞典 Payroll 三个关键变化：(1) SINK 非居民特别税从 25% 降至 22.5%（2027 年进一步降至 20%），适用于在瑞典工作但永久居住在海外的跨境员工。(2) Expertskatt 提案 2026 年生效，免税比例从 25% 提高至 30%，并简化资格条件（研发类博士候选人可豁免薪资门槛）。(3) 自 2026 年 1 月 1 日起，雇用 67+ 员工的雇主仅缴 10.21% 养老金部分（此前为全额 31.42%）；2026 年 4 月起针对 19-23 岁青年就业减免生效，持续至 2027 年 9 月。</p>
`,
};

