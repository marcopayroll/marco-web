window.MARCO_LANG_CN_PG_CANADA = {

  /* ── Hero ── */
  'pg.canada.desc': '加拿大薪资完整操作指南 &mdash; 涵盖CRA商业编号注册、CPP / CPP2 / EI缴费、联邦及省级所得税代扣、魁北克双重申报（T4 + RL-1）、WCB / WSIB工伤保险，以及联邦和各省《就业标准法》下的法定休假权益。',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.canada.s1.h': '适用范围',

  'pg.canada.s1.b1': `
          <p class="au-table-title">本文件适用于：</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>已在加拿大设立本地法律实体的公司（Federal Inc. / Provincial Inc. / Extra-Provincial Registration / Branch）。</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>由本地实体直接雇用、适用联邦《加拿大劳动法》或各省《就业标准法》（13个省/地区 + 联邦双轨制）的员工。</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>基于ITA（《所得税法》）、CPP法、EI法以及CRA / Service Canada / 各省厅局法规的薪资合规。</span>
            </div>
          </div>
  `,

  'pg.canada.s1.b2': `本框架涵盖企业如何在加拿大完成薪资设置（CRA商业编号 + RP / RT / RC账户 + 省级注册 + WCB / WSIB注册）、月度薪资计算（联邦 + 省级所得税 + CPP / CPP2 + EI + 省级QPP / QPIP / EHT等）、月度/季度申报与汇缴（PD7A汇缴表），以及年度合规管理（T4表于3月初到期、ROE离职登记）。`,

  'pg.canada.s1.b3': `
          <p class="au-table-title">2026年关键数值</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>项目</th><th>数值</th></tr></thead>
              <tbody>
                <tr><td>CPP基础税率</td><td>5.95% &times; 2（员工 + 雇主；上限$4,230.45）</td></tr>
                <tr><td>CPP2增强税率</td><td>4.0% &times; 2（$74,600 &ndash; $85,000区间；上限$416）</td></tr>
                <tr><td>EI员工税率</td><td>1.63%（上限$1,123.07；雇主 &times; 1.4）</td></tr>
                <tr><td>YMPE上限</td><td>CAD 74,600（CPP第一层级）</td></tr>
                <tr><td>YAMPE上限</td><td>CAD 85,000（CPP第二层级）</td></tr>
                <tr><td>联邦最低税率</td><td>14%（2026年永久性降低，此前为15%）</td></tr>
                <tr><td>基本个人免税额</td><td>CAD 16,452（2026年联邦）</td></tr>
                <tr><td>T4截止日期</td><td>3月2日（2025收入年度；次年2/28或3/2）</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">加拿大薪资的三大关键特征：（1）联邦 + 省级双轨制 &mdash; 联邦税通过CRA一站式汇缴，但魁北克是例外（QPP / QPIP / 魁北克所得税须分别向 Revenu Qu&eacute;bec 申报；员工同时收到T4和RL-1）；（2）CPP自2024年起实行双层制（CPP1 + CPP2）：收入超过YMPE $74,600进入CPP2，雇主/员工各缴4%，上限至YAMPE $85,000；（3）工伤保险（WCB / WSIB / CNESST）完全由雇主承担，行业风险分类税率从0.2%到8%以上不等，须按省分别注册。</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.canada.s2.h': '薪资设置',
  'pg.canada.s2.sub': '如何在加拿大建立合法的薪资发放能力',

  'pg.canada.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 实体、CRA商业编号与省级注册</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:20%"><col style="width:16%"><col style="width:16%"><col style="width:48%"></colgroup>
              <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>公司注册（Federal/Provincial Inc.）</td><td>加拿大本地实体</td><td>是</td><td>联邦通过 Corporations Canada 或省级 Corporate Registry 注册</td></tr>
                <tr><td>CRA商业编号 (BN)</td><td>加拿大本地实体</td><td>是</td><td>9位数字 + 子账户后缀；通过BRO在线注册</td></tr>
                <tr><td>RP账户（薪资账户）</td><td>加拿大本地实体</td><td>是</td><td>用于员工薪资代扣；须在首位员工入职前开设</td></tr>
                <tr><td>RT账户 (GST/HST)</td><td>加拿大本地实体</td><td>视收入而定</td><td>年收入超过CAD 30,000时强制注册</td></tr>
                <tr><td>WCB / WSIB / CNESST</td><td>加拿大本地实体</td><td>是</td><td>按省注册；行业风险分类；仅雇主缴费</td></tr>
                <tr><td>魁北克注册号 (NEQ)</td><td>适用于雇用魁北克员工的情况</td><td>是</td><td>Registraire des entreprises + RQ号码</td></tr>
                <tr><td>书面劳动合同</td><td>雇主 + 员工</td><td>建议</td><td>大多数省份非强制，但实践中强烈建议</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> CPP + CPP2 + EI + 省级保费（2026年）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:22%"><col style="width:22%"><col style="width:34%"></colgroup>
              <thead><tr><th>项目</th><th>员工缴费</th><th>雇主缴费</th><th>基数/上限</th></tr></thead>
              <tbody>
                <tr><td>CPP1（基础）</td><td>5.95%</td><td>5.95%</td><td>$3,500 &ndash; $74,600；上限$4,230.45/人</td></tr>
                <tr><td>CPP2（增强）</td><td>4.0%</td><td>4.0%</td><td>$74,600 &ndash; $85,000；上限$416/人</td></tr>
                <tr><td>EI（联邦，加拿大魁北克除外）</td><td>1.63%</td><td>1.4 &times; 员工税率</td><td>$0 &ndash; $68,900；员工上限$1,123.07</td></tr>
                <tr><td>QPP（魁北克，替代CPP）</td><td>6.4%</td><td>6.4%</td><td>魁北克员工；含5.4%基础 + 1%增强</td></tr>
                <tr><td>QPIP（魁北克父母保险）</td><td>2026年降低约 &ndash;8%</td><td>雇主 &asymp; 1.4 &times; 员工税率</td><td>仅魁北克；MIE $98,000</td></tr>
                <tr><td>EHT（安大略省）</td><td>&mdash;</td><td>&le; 1.95%</td><td>仅雇主缴费；年薪资总额超过$1M时适用；起征点因省而异</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.canada.s3.h': '薪资计算',
  'pg.canada.s3.sub': '工资、税务和员工权益的计算方式',

  'pg.canada.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 工资、最低工资与年假薪资</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:72%"></colgroup>
              <thead><tr><th>项目</th><th>规则 / 2026年数值</th></tr></thead>
              <tbody>
                <tr><td>薪资周期</td><td>双周薪最为常见；周薪/半月薪/月薪也符合规定</td></tr>
                <tr><td>最低工资</td><td>按省：BC $18.25（2026/6/1生效）/ ON $17.95（2026/10/1生效）/ QC $16.60（2026/5/1生效）/ AB $15.00</td></tr>
                <tr><td>年假薪资</td><td>&ge; 4%（2周），递增至6%（3周）；根据工龄递增</td></tr>
                <tr><td>加班</td><td>通常1.5倍；ON超过44小时 / BC超过40小时 / 联邦超过40小时</td></tr>
                <tr><td>法定假日薪资</td><td>按省级公式计算：ON = 4周收入 &divide; 20；BC = 前30天收入 &divide; 工作天数</td></tr>
                <tr><td>第13个月工资</td><td>非法定；由雇主自行决定；绩效奖金常见，而非保证第13个月工资</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 法定休假权益</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:38%"><col style="width:40%"></colgroup>
              <thead><tr><th>项目</th><th>时长/期限</th><th>薪资比例/来源</th></tr></thead>
              <tbody>
                <tr><td>年假</td><td>每年2至3周（根据工龄）</td><td>100% / 雇主；按工资的4% / 6%计算</td></tr>
                <tr><td>法定假日</td><td>5天联邦 + 5至9天省级</td><td>100% / 雇主；按省级公式计算</td></tr>
                <tr><td>病假</td><td>&ge; 3天（许多省份规定5至10天带薪）</td><td>100% / 雇主；ON有3天无薪 + 雇主自定政策</td></tr>
                <tr><td>产假</td><td>17至18周</td><td>55%由EI支付，上限$63,300 / 18个月选项</td></tr>
                <tr><td>陪产假 (QC)</td><td>5周 (QC RQAP)</td><td>70% / QPIP；联邦EI育儿假分担</td></tr>
                <tr><td>育儿假</td><td>标准35周 / 延长61周</td><td>EI 55%（上限）或33%（延长）</td></tr>
                <tr><td>丧假/婚假/投票假</td><td>每次3至5天</td><td>部分省份适用；详见各省ESA规定</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 联邦所得税 &mdash; 2026年税率档</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:14%"><col style="width:56%"></colgroup>
              <thead><tr><th>年应税收入 (CAD)</th><th>税率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>&le; 58,523</td><td>14%</td><td>2026年永久性降低（此前为15%）</td></tr>
                <tr><td>58,523 &ndash; 117,045</td><td>20.5%</td><td>&mdash;</td></tr>
                <tr><td>117,045 &ndash; 181,440</td><td>26%</td><td>&mdash;</td></tr>
                <tr><td>181,440 &ndash; 258,482</td><td>29%</td><td>&mdash;</td></tr>
                <tr><td>&gt; 258,482</td><td>33%</td><td>最高档</td></tr>
                <tr><td>基本个人免税额</td><td>CAD 16,452</td><td>收入超过$177,882时递减</td></tr>
                <tr><td>省级税</td><td>4% &ndash; 25.75%</td><td>按省而异；BC / ON / AB / QC各不相同；雇主同步代扣</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s3.b4': `联邦 + 省级税计算流程：（1）毛工资减去RPP / RRSP / 工会会费 / 托儿费用 = 净收入；（2）减去基本个人免税额 = 应税收入；（3）适用联邦5档累进税率 + 省级税率（例如BC 5.06% &ndash; 20.5%；ON 5.05% &ndash; 13.16%；AB 统一10% + 累进；QC 15% &ndash; 25.75%）；（4）适用CPP / EI / 慈善捐赠等税收抵免。CRA发布T4127薪资扣除公式及TOD在线计算器供参考。`,

  'pg.canada.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> CPP、CPP2与EI &mdash; 2026年操作细节</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:30%"><col style="width:40%"></colgroup>
              <thead><tr><th>项目</th><th>2026年数值</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>CPP YMPE / YAMPE</td><td>$74,600 / $85,000</td><td>双层制；YAMPE比YMPE高14%</td></tr>
                <tr><td>CPP1 员工 + 雇主</td><td>5.95% / 5.95%</td><td>上限$4,230.45/人/年</td></tr>
                <tr><td>CPP2 员工 + 雇主</td><td>4.00% / 4.00%</td><td>$74,600 &ndash; $85,000区间；上限$416/人</td></tr>
                <tr><td>EI 员工（魁北克除外）</td><td>1.63%</td><td>上限$1,123.07；MIE = $68,900</td></tr>
                <tr><td>EI 雇主（魁北克除外）</td><td>2.282%（1.4倍）</td><td>可通过行业EI保费减免计划调整</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s3.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">加拿大薪资中三个常被低估的细节：（1）魁北克是"双重申报"省份 &mdash; 员工同时收到T4和RL-1；雇主须分别向CRA和 Revenu Qu&eacute;bec 汇缴；（2）CPP2于2024年引入；年薪超过$74,600进入第二层级，员工/雇主各额外缴纳4%；（3）EHT（雇主健康税）存在于ON / QC / MB / BC / NL，仅雇主缴纳；ON在年薪资总额超过$1M时按1.95%适用。</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.canada.s4.h': '薪资处理与合规',
  'pg.canada.s4.sub': '月度执行、申报与缴款及会计处理',

  'pg.canada.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪资发放规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:40%"><col style="width:38%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>发放频率</td><td>双周薪/周薪最为常见</td><td>按各省ESA规定；ON要求至少每月一次</td></tr>
                <tr><td>支付方式 + 币种</td><td>直接存入 &middot; CAD</td><td>支票合规但少见；外币支付需员工书面同意</td></tr>
                <tr><td>工资单</td><td>强制</td><td>须逐项列明毛工资、扣除明细、实发工资；YTD累计总额</td></tr>
                <tr><td>工资扣除限额</td><td>按省而异；通常 &le; 实发工资的30%</td><td>需员工书面同意（法定扣除除外）</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 月度汇缴至CRA与 Revenu Qu&eacute;bec</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18%"><col style="width:13%"><col style="width:13%"><col style="width:24%"><col style="width:32%"></colgroup>
              <thead><tr><th>申报项目</th><th>责任方</th><th>频率</th><th>截止日期</th><th>汇缴机构</th></tr></thead>
              <tbody>
                <tr><td>PD7A联邦汇缴</td><td>雇主</td><td>按薪资规模</td><td>次月15日 / 每月25日 / 季度</td><td>CRA（含联邦税 + CPP + EI）</td></tr>
                <tr><td>TPZ-1015魁北克汇缴</td><td>雇主</td><td>按薪资规模</td><td>次月15日 / 每月25日</td><td>Revenu Qu&eacute;bec（含QC税 + QPP + QPIP）</td></tr>
                <tr><td>ROE离职记录</td><td>雇主 &rarr; ESDC</td><td>离职后5天内</td><td>在线提交</td><td>Service Canada</td></tr>
                <tr><td>WCB / WSIB / CNESST</td><td>雇主</td><td>按月/按季</td><td>按省而异</td><td>BC WorkSafe / ON WSIB / QC CNESST</td></tr>
                <tr><td>EHT（省级）</td><td>雇主</td><td>按月/按季</td><td>按省而异</td><td>ON Ministry of Finance等</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资日记账映射规则（ASPE / IFRS）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>项目</th><th>科目（ASPE / IFRS标准）</th></tr></thead>
              <tbody>
                <tr><td>工资 + 奖金 + 年假薪资</td><td>员工福利费用 / 工资费用</td></tr>
                <tr><td>CPP / CPP2 / EI 雇主部分</td><td>雇主缴费费用</td></tr>
                <tr><td>WCB / WSIB 保费</td><td>工伤保险费用</td></tr>
                <tr><td>EHT（雇主健康税）</td><td>薪资税费用</td></tr>
                <tr><td>联邦 + 省级代扣税</td><td>负债 &mdash; 应缴政府款项</td></tr>
                <tr><td>应付实发工资</td><td>银行 &mdash; RBC / TD / BMO / Scotia / CIBC</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 年度申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:16%"><col style="width:22%"><col style="width:40%"></colgroup>
              <thead><tr><th>项目</th><th>责任方</th><th>截止日期</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>T4 + T4 Summary</td><td>雇主 &rarr; CRA</td><td>次年2月28日（2026年：3/2）</td><td>所有员工的年度收入 + 扣除明细</td></tr>
                <tr><td>RL-1（魁北克）</td><td>雇主 &rarr; Revenu Qu&eacute;bec</td><td>次年2月最后一个工作日</td><td>魁北克员工的省级税务表</td></tr>
                <tr><td>T4A（其他收入）</td><td>雇主 &rarr; CRA</td><td>次年2月28日</td><td>非雇佣收入：津贴/自雇/养老金</td></tr>
                <tr><td>WCB / WSIB 年度申报</td><td>雇主</td><td>按省而异（通常3月至4月）</td><td>年度实际薪资总额对账</td></tr>
                <tr><td>EHT年度申报（安大略省）</td><td>雇主</td><td>次年3月15日</td><td>EHT年度净额对账</td></tr>
                <tr><td>企业T2税务申报</td><td>雇主/公司</td><td>财年结束后6个月</td><td>联邦企业所得税申报</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> 离职与外籍员工</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:40%"><col style="width:38%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>通知期</td><td>根据工龄1至8周</td><td>按各省ESA而异；ON = 每年1周，上限8周</td></tr>
                <tr><td>遣散费 (ON)</td><td>每工作满1年支付1周工资</td><td>年薪资总额超过$2.5M或员工≥50人时强制</td></tr>
                <tr><td>未休年假折现</td><td>强制</td><td>按累计未休年假的4% / 6%计算</td></tr>
                <tr><td>ROE离职记录</td><td>离职后5天内</td><td>在线提交至Service Canada；含离职原因代码</td></tr>
                <tr><td>最终工资发放期限</td><td>按各省ESA规定</td><td>ON须在正常发薪日支付；BC要求即时支付</td></tr>
                <tr><td>外籍员工签证</td><td>Work Permit (LMIA) / GTS</td><td>开放式工作许可/雇主限定；须在签证到期前续签</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.canada.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">2026年加拿大薪资三大关键变化：（1）联邦最低税率从15%永久降至14%，BPA提高至$16,452，员工每年可节省约$400至$840；（2）CPP YMPE提高至$74,600 / YAMPE $85,000，CPP2进入第三个完整年度；（3）魁北克QPIP税率降低约 &ndash;8%，但QPP保持不变 &mdash; 建议魁北克雇主重新核验RL-1代扣计算。</p>
  `,

};
