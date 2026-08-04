window.MARCO_LANG_CN_PG_FRANCE = {

  /* ── Hero ── */
  'pg.france.desc': '法国薪资运营完整指南 &mdash; 涵盖URSSAF登记、Convention Collective合规、Cotisations Sociales社保缴费、所得税代扣（PAS），以及月度DSN申报义务。',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.france.s1.h': '适用范围',
  'pg.france.s1.sub': '法律依据 / Code du Travail &middot; URSSAF &middot; Convention Collective &middot; DSN',

  /* Intro bullets + framework paragraph */
  'pg.france.s1.b1': `
          <p class="article-p">本文件适用于：</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>已在法国设立本地法律实体的公司（SAS / SARL / SA）</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>由本地实体直接雇用、适用《劳动法》（Code du Travail）及相关行业集体协议（Convention Collective）的员工</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>基于《社会保障法》（Code de la S&eacute;curit&eacute; Sociale）和所得税法的薪资合规</span>
            </div>
          </div>
          <p class="article-p" style="margin-top:20px;">本框架涵盖企业如何在法国完成薪资设置、工资计算、月度申报与缴款以及年度合规管理。</p>
  `,

  /* Marco Insight */
  'pg.france.s1.b2': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">法国薪资围绕Cotisations Sociales（社会保障缴费）展开 &mdash; 雇主社保负担约占毛工资的40%-45%，位居全球最高水平之列。此外，每家公司必须适用一份行业集体协议（Convention Collective），其中规定了最低工资分类、工时、休假、奖金等条款，可能高于法定标准。该协议是薪资计算的关键前提。</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.france.s2.h': '薪资设置',
  'pg.france.s2.sub': '如何在法国建立合法的薪资发放能力 / URSSAF &middot; Convention Collective &middot; 合规',

  /* i. URSSAF & Tax Registration */
  'pg.france.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> URSSAF与税务登记</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:12%"><col style="width:38%"></colgroup>
              <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>URSSAF登记</td><td>法国本地实体</td><td>是</td><td>社会保障缴费管理机构；登记后获得SIRET号下的雇主账户</td></tr>
                <tr><td>DPAE（入职申报）</td><td>雇主</td><td>是</td><td>D&eacute;claration Pr&eacute;alable &agrave; l&rsquo;Embauche（雇用前申报）须在员工入职前提交至URSSAF</td></tr>
                <tr><td>Pr&eacute;l&egrave;vement &agrave; la Source</td><td>雇主</td><td>是</td><td>所得税源头代扣（PAS）；自2019年起强制执行</td></tr>
                <tr><td>员工 Num&eacute;ro de S&eacute;curit&eacute; Sociale</td><td>员工</td><td>是</td><td>社会保障号码（NIR，13位数字）；入职时提供</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Convention Collective & Complementary Schemes */
  'pg.france.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Convention Collective与补充保障计划</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:16%"><col style="width:34%"></colgroup>
              <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>Convention Collective (CCN)</td><td>雇主</td><td>是</td><td>通过IDCC编码确认适用的行业集体协议</td></tr>
                <tr><td>Mutuelle（补充医疗保险）</td><td>雇主</td><td>是</td><td>法定强制；雇主须承担至少50%的保费</td></tr>
                <tr><td>Pr&eacute;voyance（补充风险保障）</td><td>雇主</td><td>是（仅Cadre）</td><td>管理层/高级职员（Cadre）强制；非Cadre视CCN而定</td></tr>
                <tr><td>Retraite Compl&eacute;mentaire</td><td>雇主</td><td>是</td><td>补充养老金；通过AGIRC-ARRCO汇缴</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iii. Payroll Bank Account & Compliance */
  'pg.france.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资银行账户与合规</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:14%"><col style="width:56%"></colgroup>
              <thead><tr><th>项目</th><th>是否强制</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>薪资银行账户</td><td>是</td><td>本地EUR账户</td></tr>
                <tr><td>Bulletin de Paie（工资单）</td><td>是</td><td>法定义务；格式和内容受法律严格规范</td></tr>
                <tr><td>Registre du Personnel</td><td>是</td><td>员工花名册；记录入职、离职及其他人事信息</td></tr>
                <tr><td>M&eacute;decine du Travail</td><td>是</td><td>职业健康服务；入职前须安排Visite d&rsquo;Information</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.france.s3.h': '薪资计算',
  'pg.france.s3.sub': '工资和员工权益的计算方式 / 工资 &middot; 休假 &middot; Cotisations Sociales',

  /* i. Salary Calculation & Working Hours */
  'pg.france.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 工资计算与工时</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th></tr></thead>
              <tbody>
                <tr><td>支付方式</td><td>月薪化（Mensualis&eacute;）：年薪 &divide; 12 或约定月薪</td></tr>
                <tr><td>法定工时</td><td>每周35小时（Dur&eacute;e L&eacute;gale），每月151.67小时</td></tr>
                <tr><td>计算方式</td><td>月薪 &divide; 151.67 &times; 实际工作小时数；或按日历日/工作日计算</td></tr>
                <tr><td>加班</td><td>36至43小时：+25%；44小时起：+50%</td></tr>
                <tr><td>RTT（工时补偿休假）</td><td>实际工时超过每周35小时的公司，通过RTT天数进行补偿</td></tr>
                <tr><td>SMIC（最低工资）</td><td>&euro;11.65/小时（2024年）；月毛工资约&euro;1,766.92</td></tr>
                <tr><td>小数处理</td><td>四舍五入至2位小数（EUR Cents）</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Leave Entitlements */
  'pg.france.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 休假权益（Cong&eacute;s Pay&eacute;s与法定假期）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th></tr></thead>
              <tbody>
                <tr><td>年假（Cong&eacute;s Pay&eacute;s）</td><td>每年25个工作日（= 5周）；按每月2.08天累积</td></tr>
                <tr><td>年假薪资</td><td>取"正常工资"或"前期工资的1/10"中较高者</td></tr>
                <tr><td>RTT休假</td><td>取决于公司工时安排；通常每年8至12天</td></tr>
                <tr><td>法定假日</td><td>每年11天法定；5月1日（劳动节）是唯一法定带薪公共假日</td></tr>
                <tr><td>病假</td><td>由社保支付IJSS（自第4天起：日工资的50%）；CCN或雇主可补足差额</td></tr>
                <tr><td>产假（Cong&eacute; Maternit&eacute;）</td><td>第1至2个孩子：产前6周 + 产后10周 = 16周；由CPAM支付</td></tr>
                <tr><td>陪产假（Cong&eacute; Paternit&eacute;）</td><td>25个日历天（含3天出生假）；由CPAM支付</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Marco Insight after leave table */
  'pg.france.s3.b2-insight': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">法国年假计算使用两种方式：按"实际工作日"或"工作日"（Jours Ouvr&eacute;s vs Jours Ouvrables）。大多数公司使用Jours Ouvr&eacute;s（每年25天）。假期累积周期为6月1日至次年5月31日 &mdash; 而非日历年。薪资系统须据此设置独立的假期周期。</p>
  `,

  /* iii. Social Security Contributions */
  'pg.france.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 社会保障缴费（Cotisations Sociales）&mdash; 主要险种（2024年税率，基于毛工资）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:34%"><col style="width:14%"><col style="width:14%"><col style="width:38%"></colgroup>
              <thead><tr><th>项目</th><th>雇主</th><th>员工</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>Maladie（医疗保险）</td><td>7.00%</td><td>&mdash;</td><td>收入 &le; 2.5 SMIC适用减低税率</td></tr>
                <tr><td>Vieillesse Plafonn&eacute;e（养老金，有上限）</td><td>8.55%</td><td>6.90%</td><td>缴费基数上限：PMSS（&euro;3,864/月，2024年）</td></tr>
                <tr><td>Vieillesse D&eacute;plafonn&eacute;e（养老金，无上限）</td><td>2.02%</td><td>0.40%</td><td>全部毛收入</td></tr>
                <tr><td>Allocations Familiales（家庭津贴）</td><td>3.45%</td><td>&mdash;</td><td>收入 &le; 3.5 SMIC适用减低税率</td></tr>
                <tr><td>Ch&ocirc;mage（失业保险）</td><td>4.05%</td><td>&mdash;</td><td>缴费基数上限：4&times; PMSS</td></tr>
                <tr><td>AGIRC-ARRCO T1（补充养老金）</td><td>4.72%</td><td>3.15%</td><td>基数 &le; 1&times; PMSS</td></tr>
                <tr><td>AGIRC-ARRCO T2（补充养老金）</td><td>12.95%</td><td>8.64%</td><td>基数1至8&times; PMSS</td></tr>
                <tr><td>CSG / CRDS</td><td>&mdash;</td><td>9.70%</td><td>基于98.25%毛工资 + 雇主Mutuelle部分</td></tr>
                <tr><td>AT/MP（工伤保险）</td><td>浮动</td><td>&mdash;</td><td>行业风险系数，通常0.9%-5%</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>雇主总负担约40%-45%</strong>（含Mutuelle / Pr&eacute;voyance）；员工负担约22%-25%（含CSG/CRDS）</p>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>关键减免：</strong></p>
          <div class="au-bullet-list" style="margin-top:8px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">R&eacute;duction G&eacute;n&eacute;rale（Fillon减免）：收入 &le; 1.6 SMIC的员工，雇主享有递减式社保减免</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span style="font-size:14px; color:#475072;">PMSS（月社保缴费上限）：&euro;3,864/月（2024年）；影响多项缴费基数上限</span>
            </div>
          </div>
  `,

  /* Marco Insight after social security table */
  'pg.france.s3.b3-insight': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">法国的Bulletin de Paie（工资单）是全球最复杂的之一 &mdash; 通常包含30至50行缴费明细。2018年政府推行了"简化工资单"改革，将行项压缩至约15个主要类别。然而底层计算逻辑不变；薪资系统仍须逐项计算。R&eacute;duction Fillon减免对低薪员工影响显著，可将雇主有效税率降低10至15个百分点。</p>
  `,

  /* iv. Personal Income Tax (PAS) */
  'pg.france.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 个人所得税（Pr&eacute;l&egrave;vement &agrave; la Source）&mdash; PAS &mdash; 所得税代扣</p>
          <p class="article-p" style="margin-bottom:12px;">自2019年起生效：月度源头代扣制度</p>
          <div class="au-bullet-list">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>累进税率：</strong>0%（&le; &euro;11,294）/ 11%（至&euro;28,797）/ 30%（至&euro;82,341）/ 41%（至&euro;177,106）/ 45%（以上）</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>税率来源：</strong>DGFiP（税务机关）通过DSN每月发送每位员工的个性化税率（Taux Personnalis&eacute;）</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>新入职员工：</strong>如无DGFiP税率，使用Taux Neutre（中性税率表）</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span><strong>雇主角色：</strong>雇主仅执行代扣；不参与员工税额计算 &mdash; 税率由税务机关直接确定</span>
            </div>
          </div>
  `,

  /* v. Pay Slip Structure */
  'pg.france.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> 工资单（Bulletin de Paie）结构</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>项目</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>Salaire Brut（毛工资）</td><td>基本工资 + 加班费 + 津贴 + 奖金</td></tr>
                <tr><td>Cotisations Patronales</td><td>雇主社保缴费总额（不从员工工资中扣除）</td></tr>
                <tr><td>Cotisations Salariales</td><td>员工社保缴费总额（从毛工资中扣除）</td></tr>
                <tr><td>Net Imposable（应税净收入）</td><td>毛工资 &minus; Cotisations Salariales + 不可抵扣的CSG部分</td></tr>
                <tr><td>PAS（所得税代扣）</td><td>Net Imposable &times; DGFiP个性化税率</td></tr>
                <tr><td>Net &agrave; Payer（实发工资）</td><td>Net Imposable &minus; PAS + 报销/津贴</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.france.s4.h': '薪资处理与合规',
  'pg.france.s4.sub': '月度执行、申报与缴款及会计处理 / DSN &middot; 日记账 &middot; 年度',

  /* i. Payroll Payment Rules */
  'pg.france.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪资发放规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:50%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>发放频率</td><td>按月</td><td>法定最少每月一次；管理层（Cadre）按月发放</td></tr>
                <tr><td>支付方式</td><td>银行转账/支票</td><td>银行转账（Virement Bancaire）为主要方式</td></tr>
                <tr><td>Bulletin de Paie</td><td>法定义务</td><td>格式受法律严格规范；须保留电子或纸质副本</td></tr>
                <tr><td>记录保存</td><td>5年</td><td>劳动法要求；社保记录建议保存更长时间</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Monthly Filing & Payment (DSN) */
  'pg.france.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 月度申报与缴款（DSN）&mdash; D&eacute;claration Sociale Nominative</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:18%"><col style="width:14%"><col style="width:16%"><col style="width:30%"></colgroup>
              <thead><tr><th>申报项目</th><th>责任方</th><th>频率</th><th>截止日期</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>DSN申报</td><td>雇主</td><td>按月</td><td>发薪月5日或15日</td><td>统一电子申报，替代此前所有表格（≥50名员工为5日；<50名员工为15日）</td></tr>
                <tr><td>URSSAF社保缴款</td><td>雇主</td><td>按月/按季</td><td>随DSN</td><td>≥50名员工按月；<50名员工可按季</td></tr>
                <tr><td>AGIRC-ARRCO</td><td>雇主</td><td>按月</td><td>随DSN</td><td>补充养老金随DSN一并汇缴</td></tr>
                <tr><td>PAS所得税</td><td>雇主</td><td>按月</td><td>随DSN</td><td>代扣所得税通过DSN汇缴至DGFiP</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>说明：</strong>DSN是法国唯一的社保 + 税务申报渠道（自2017年起替代DADS-U）；逾期缴款罚款起步为每人&euro;7.50。</p>
  `,

  /* iii. Payroll Journal Mapping Rules */
  'pg.france.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资日记账映射规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>项目</th><th>科目</th></tr></thead>
              <tbody>
                <tr><td>Salaire Brut</td><td>薪资费用 (641)</td></tr>
                <tr><td>Charges Patronales（约40%-45%）</td><td>薪资费用 (645)</td></tr>
                <tr><td>Cotisations Salariales + PAS</td><td>薪资负债 (43x)</td></tr>
                <tr><td>Net &agrave; Payer</td><td>现金/银行 (512)</td></tr>
                <tr><td>Provision Cong&eacute;s Pay&eacute;s</td><td>薪资费用/准备金 (428)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iv. Annual Compliance */
  'pg.france.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 年度合规</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:18%"><col style="width:32%"></colgroup>
              <thead><tr><th>项目</th><th>责任方</th><th>截止日期</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>SMIC更新</td><td>&mdash;</td><td>每年1月1日</td><td>法定最低工资年度调整；须在薪资系统中更新</td></tr>
                <tr><td>PMSS更新</td><td>&mdash;</td><td>每年1月1日</td><td>社保缴费上限年度调整</td></tr>
                <tr><td>DSN年度数据</td><td>雇主</td><td>&mdash;</td><td>无需单独年度申报；所有数据通过月度DSN完成</td></tr>
                <tr><td>Cong&eacute;s Pay&eacute;s周期结转</td><td>雇主</td><td>5月31日</td><td>假期累积周期结束；未休年假结转或作废</td></tr>
                <tr><td>Participation / Int&eacute;ressement</td><td>雇主</td><td>每年</td><td>≥50名员工的公司须执行法定利润分享（Participation）</td></tr>
                <tr><td>Entretien Professionnel</td><td>雇主</td><td>每2年</td><td>法定职业发展面谈；影响培训义务</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* v. Termination */
  'pg.france.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> 离职（Rupture du Contrat）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th></tr></thead>
              <tbody>
                <tr><td>通知期（Pr&eacute;avis）</td><td>CDI（无固定期限合同）：1至3个月（视CCN及工龄而定）；试用期有缩短的法定通知期</td></tr>
                <tr><td>法定遣散补偿（Indemnit&eacute; L&eacute;gale）</td><td>前10年每工作满1年支付1/4月薪 + 第10年起每年支付1/3月薪</td></tr>
                <tr><td>CCN遣散补偿</td><td>集体协议可规定更高标准；取CCN或法定标准中较高者</td></tr>
                <tr><td>Rupture Conventionnelle</td><td>协商解除：双方协商一致 + DREETS审批；遣散补偿不得低于法定标准</td></tr>
                <tr><td>未休年假折现</td><td>未休Cong&eacute;s Pay&eacute;s须全额支付（ICCP）</td></tr>
                <tr><td>离职文件</td><td>须提供Certificat de Travail + Attestation P&ocirc;le Emploi + Solde de Tout Compte</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Marco Insight */
  'pg.france.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Rupture Conventionnelle（协商解除）是法国特有的"友好分手"机制 &mdash; 双方协商一致终止CDI（无固定期限合同），须经DREETS（原DIRECCTE）审批。遣散补偿不得低于法定标准。该机制允许员工申领失业保险金，是法国最常见的非过错终止方式。雇主须允许15天法定撤回期 + 15个工作日的行政审批期。</p>
  `,

};
