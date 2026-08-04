window.MARCO_LANG_CN_PG_GERMANY = {

  /* ── Hero ── */
  'pg.germany.desc': '德国薪资运营完整指南 &mdash; 涵盖Handelsregister商业登记、五项强制社会保险（Pflichtversicherungen）、六类税级下的Lohnsteuer代扣、ELSTER月度申报，以及2026年更新的MiLoG、Grundfreibetrag和BBG上限费率。',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.germany.s1.h': '适用范围',
  'pg.germany.s1.sub': '适用范围与法律依据 / EStG &middot; SGB &middot; BGB &middot; MiLoG &middot; KSchG',

  /* Intro bullets + framework paragraph */
  'pg.germany.s1.b1': `
          <p class="article-p">本文件适用于：</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>已在德国设立本地法律实体的公司（GmbH最低资本&euro;25,000 / UG &euro;1 / AG最低&euro;50,000），在Handelsregister注册</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>由本地实体直接雇用、适用《民法典》（BGB）+《解雇保护法》（KSchG）+《最低工资法》（MiLoG）的员工</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>基于EStG（所得税法）、SGB（《社会法典》第V/VI/III/XI卷）以及Finanzamt / Krankenkasse / DRV / Bundesagentur f&uuml;r Arbeit法规的薪资合规</span>
            </div>
          </div>
          <p class="article-p" style="margin-top:20px;">本框架涵盖企业如何在德国完成薪资设置（Finanzamt税务登记、Betriebsnummer雇主编号、Krankenkasse医疗保险登记、Steuer-ID / Sozialversicherungsnummer员工识别）、月度工资计算（Lohnsteuer + Solidarit&auml;tszuschlag + Kirchensteuer + 五大社会保险）、ELSTER / DE&Uuml;V月度申报，以及Lohnsteuerjahresausgleich年度汇算。</p>
  `,

  /* 2026 Key Numbers */
  'pg.germany.s1.b2': `
          <p class="au-data-cards-label">2026年关键数值</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">最低工资 MiLoG</span>
                <span class="au-dc-value">&euro;13.90/小时</span>
                <span class="au-dc-note">自2026/1起，+0.92%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Grundfreibetrag</span>
                <span class="au-dc-value">&euro;12,348</span>
                <span class="au-dc-note">免税额，+&euro;252</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">所得税税率档</span>
                <span class="au-dc-value">0% &ndash; 45%</span>
                <span class="au-dc-note">累进税率 + Soli 5.5%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Krankenversicherung</span>
                <span class="au-dc-value">14.6% + Zusatz</span>
                <span class="au-dc-note">医疗保险 + 附加约1.7%</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Rentenversicherung</span>
                <span class="au-dc-value">18.6%</span>
                <span class="au-dc-note">养老保险，雇主雇员各半</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Pflegeversicherung</span>
                <span class="au-dc-value">3.4% / 4.0%</span>
                <span class="au-dc-note">长期护理保险 / 23岁以上无子女者+0.6%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Arbeitslosen</span>
                <span class="au-dc-value">2.6%</span>
                <span class="au-dc-note">失业保险</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">BBG上限</span>
                <span class="au-dc-value">&euro;96,600</span>
                <span class="au-dc-note">养老/失业保险上限</span>
              </div>
            </div>
          </div>
  `,

  /* Marco Insight */
  'pg.germany.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">德国薪资的三大关键特征：（1）六类Lohnsteuerklassen税级（I单身、II单亲、III/V已婚夫妇、IV已婚等收入、VI第二雇主）决定Lohnsteuer代扣力度；（2）五大社会保险由不同机构管理 &mdash; Krankenkasse医疗保险公司（员工自选）、DRV养老保险、BA失业保险、Pflegekasse长期护理保险、BG工伤保险（仅雇主承担）；（3）缴费基数上限Beitragsbemessungsgrenze在2026年统一为&euro;96,600（养老/失业）、&euro;66,150（医疗/护理）。</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.germany.s2.h': '薪资设置',
  'pg.germany.s2.sub': '如何在德国建立合法的薪资发放能力 / 实体 &middot; Finanzamt &middot; 五大保险',

  /* i. Entity, Tax & Employer Registration */
  'pg.germany.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 实体、税务与雇主登记</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:12%"><col style="width:38%"></colgroup>
              <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>Handelsregister商业登记</td><td>德国本地实体</td><td>是</td><td>经Notar公证后向当地法院申请；GmbH最低资本&euro;25,000</td></tr>
                <tr><td>Finanzamt税务登记</td><td>德国本地实体</td><td>是</td><td>8周内提交Fragebogen zur steuerlichen Erfassung；获取Steuernummer</td></tr>
                <tr><td>Betriebsnummer雇主编号</td><td>德国本地实体</td><td>是</td><td>向Bundesagentur f&uuml;r Arbeit (BA)申请；8位数字</td></tr>
                <tr><td>Krankenkasse医疗保险登记</td><td>德国本地实体</td><td>是</td><td>雇主须将每位员工注册至其选择的Krankenkasse（双向选择）</td></tr>
                <tr><td>员工Steuer-ID + SV-Nummer</td><td>员工</td><td>是</td><td>11位Steuer-ID终身唯一；12位Sozialversicherungsnummer</td></tr>
                <tr><td>Arbeitsvertrag劳动合同</td><td>雇主 + 员工</td><td>是</td><td>Nachweisgesetz（《证明法》）要求书面记录关键条款；2022年起扩大范围</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Five Major Social Insurances */
  'pg.germany.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 五大社会保险（Pflichtversicherungen）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:14%"><col style="width:28%"><col style="width:30%"></colgroup>
              <thead><tr><th>险种（2026年）</th><th>总费率</th><th>员工/雇主分担</th><th>缴费基数上限 (BBG)</th></tr></thead>
              <tbody>
                <tr><td>Krankenversicherung（医疗）</td><td>14.6% + Zusatz约1.7%</td><td>员工/雇主各半</td><td>月&euro;5,512.50（年&euro;66,150）</td></tr>
                <tr><td>Pflegeversicherung（长期护理）</td><td>3.4%（23岁以上无子女者4.0%）</td><td>员工/雇主各半（无子女者全额缴纳）</td><td>月&euro;5,512.50</td></tr>
                <tr><td>Rentenversicherung（养老）</td><td>18.6%</td><td>9.3% + 9.3%</td><td>月&euro;8,050（年&euro;96,600，东西部统一）</td></tr>
                <tr><td>Arbeitslosenversicherung（失业）</td><td>2.6%</td><td>1.3% + 1.3%</td><td>月&euro;8,050</td></tr>
                <tr><td>Unfallversicherung（工伤）</td><td>按行业（BG）</td><td>100%雇主承担</td><td>无上限</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iii. Bank Account & Record Retention */
  'pg.germany.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 银行账户与记录保存</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:20%"><col style="width:50%"></colgroup>
              <thead><tr><th>项目</th><th>要求</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>EUR本地银行账户</td><td>强制</td><td>SEPA转账；通常月底/次月初发放</td></tr>
                <tr><td>Lohn/Gehaltsabrechnung工资单</td><td>强制（&sect;108 GewO）</td><td>须逐项列明毛工资、税款、社保、实发工资</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.germany.s3.h': '薪资计算',
  'pg.germany.s3.sub': '工资、税务和员工权益的计算方式 / 工资 &middot; 休假',

  /* i. Salary, Minimum Wage & Bonuses */
  'pg.germany.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 工资、最低工资与奖金</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>项目</th><th>规则 / 2026年数值</th></tr></thead>
              <tbody>
                <tr><td>支付周期</td><td>按月（最常见）；通常月底/次月初发放</td></tr>
                <tr><td>最低工资 MiLoG</td><td>&euro;13.90/小时（自2026/1起，此前&euro;12.82）；40小时 &times; 4.33周 &asymp; &euro;2,409/月</td></tr>
                <tr><td>13. Monatsgehalt / Weihnachtsgeld</td><td>非法定；多数Tarifvertrag协议规定50%-100%月薪作为圣诞奖金</td></tr>
                <tr><td>Urlaubsgeld假期津贴</td><td>非法定；行业协议中常见（月薪的50%）</td></tr>
                <tr><td>&Uuml;berstunden加班</td><td>BGB &sect;612默认补偿；许多Tarifvertrag规定+25% / +50%</td></tr>
                <tr><td>Minijob迷你工作</td><td>&le; &euro;556/月；雇主缴费约28%；员工免缴社保 + 税</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Statutory Leave Entitlements */
  'pg.germany.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 法定休假权益</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:35%"><col style="width:35%"></colgroup>
              <thead><tr><th>项目</th><th>时长/期限</th><th>薪资比例/来源</th></tr></thead>
              <tbody>
                <tr><td>年假 Urlaub</td><td>20天（每周5天工作制）/ 24天（每周6天工作制）</td><td>100% / 雇主</td></tr>
                <tr><td>法定假日 Gesetzliche Feiertage</td><td>9至13天（因联邦州而异）</td><td>100% / 雇主</td></tr>
                <tr><td>病假工资续付 Lohnfortzahlung（前6周）</td><td>前6周</td><td>100% / 雇主（<30名员工的公司可通过U1获得报销）</td></tr>
                <tr><td>病假津贴 Krankengeld（6周后）</td><td>最长78周 / 3年</td><td>约毛工资的70% / Krankenkasse</td></tr>
                <tr><td>产假 Mutterschutz</td><td>产前6周 + 产后8周（多胞胎产后12周）</td><td>100% / Krankenkasse + 雇主补足差额</td></tr>
                <tr><td>育儿假 Elternzeit + Elterngeld</td><td>至孩子3岁；Elterngeld 12至14个月</td><td>净工资的65%（&le; &euro;1,800/月）/ Bundesagentur</td></tr>
                <tr><td>护理假 Pflegezeit</td><td>最长10天紧急护理 + 6个月长期护理</td><td>部分带薪（10天）/ 无薪（长期）</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iii. Personal Income Tax (Lohnsteuer) */
  'pg.germany.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 个人所得税（Lohnsteuer）&mdash; &sect;32a EStG</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:40%"><col style="width:15%"><col style="width:45%"></colgroup>
              <thead><tr><th>年应税收入（zu versteuerndes Einkommen）</th><th>税率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>&euro;0 &ndash; &euro;12,348</td><td>0%</td><td>Grundfreibetrag 2026年免税额</td></tr>
                <tr><td>&euro;12,349 &ndash; &euro;17,005</td><td>14% &ndash; 24%</td><td>Progressionszone I &mdash; 公式累进</td></tr>
                <tr><td>&euro;17,006 &ndash; &euro;68,480</td><td>24% &ndash; 42%</td><td>Progressionszone II &mdash; 公式累进</td></tr>
                <tr><td>&euro;68,481 &ndash; &euro;277,825</td><td>42%</td><td>Spitzensteuersatz最高税率</td></tr>
                <tr><td>&euro;277,826及以上</td><td>45%</td><td>Reichensteuer富人税</td></tr>
                <tr><td><strong>附加：Solidarit&auml;tszuschlag</strong></td><td><strong>+5.5%</strong></td><td>基于所得税额；年应税收入 &gt; 约&euro;66,761时适用</td></tr>
                <tr><td><strong>附加：Kirchensteuer</strong></td><td><strong>+8-9%</strong></td><td>基于所得税额；仅Katholisch / Evangelisch教会成员适用</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>Lohnsteuerklassen（税级）：</strong>I（单身）、II（单亲）、III/V（已婚夫妇；III为主要收入方、V为次要收入方）、IV（已婚等收入）、IV+Faktor（公平分配）、VI（第二雇主）。雇主根据员工Steuer-ID在ELStAM数据库中查询对应税级，立即执行Lohnsteuer代扣。</p>
  `,

  /* iv. Five Mandatory Social Insurances (2026) */
  'pg.germany.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 五大强制社会保险（2026年）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:34%"><col style="width:16%"><col style="width:16%"><col style="width:34%"></colgroup>
              <thead><tr><th>险种</th><th>员工</th><th>雇主</th><th>BBG上限</th></tr></thead>
              <tbody>
                <tr><td>Krankenversicherung基础</td><td>7.30%</td><td>7.30%</td><td>月&euro;5,512.50</td></tr>
                <tr><td>Krankenversicherung附加</td><td>约0.85%</td><td>约0.85%</td><td>月&euro;5,512.50</td></tr>
                <tr><td>Pflegeversicherung长期护理</td><td>1.70-2.30%</td><td>1.70%</td><td>月&euro;5,512.50</td></tr>
                <tr><td>Rentenversicherung养老</td><td>9.30%</td><td>9.30%</td><td>月&euro;8,050（东西部统一）</td></tr>
                <tr><td>Arbeitslosenversicherung失业</td><td>1.30%</td><td>1.30%</td><td>月&euro;8,050</td></tr>
                <tr><td>Unfallversicherung工伤</td><td>&mdash;</td><td>按行业（0.5-9%）</td><td>无上限</td></tr>
                <tr><td><strong>典型办公室合计</strong></td><td><strong>约20.5%</strong></td><td><strong>约20.5% + 工伤保险</strong></td><td>&mdash;</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Marco Insight */
  'pg.germany.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">德国薪资中三个常被低估的细节：（1）Krankenkasse医疗保险由员工自选（AOK / TK / Barmer等，90余家公司）；雇主须将每位员工分别注册至其选择的基金；（2）Pflegeversicherung设有"无子女附加费"（Kinderlose Zuschlag）&mdash; 23岁以上无子女的员工额外缴纳0.6%；2023/7改革后增设"子女考虑减免"（Kinder-Ber&uuml;cksichtigung），2个及以上子女的按月递减；（3）Lohnsteuer并非简单代扣年底退税 &mdash; 员工须主动提交Lohnsteuerм&auml;&szlig;igung以提前申报工资/通勤/被抚养人扣除；否则全年金额将被多扣，之后再退还。</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.germany.s4.h': '薪资处理与合规',
  'pg.germany.s4.sub': '月度执行、申报与缴款及会计处理 / 月度申报与日记账',

  /* i. Payroll Payment Rules */
  'pg.germany.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪资发放规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:30%"><col style="width:45%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>发放频率</td><td>至少每月一次</td><td>BGB &sect;614事后原则；通常月底/次月初发放</td></tr>
                <tr><td>支付方式 + 币种</td><td>SEPA转账 &middot; EUR</td><td>现金原则上允许但极为罕见；不允许外币结算</td></tr>
                <tr><td>Entgeltabrechnung工资单</td><td>强制（&sect;108 GewO）</td><td>须逐项列明毛工资、税款、社保、实发工资；电子或纸质</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Monthly Tax & Insurance Reporting */
  'pg.germany.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 月度税务与社保申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:26%"><col style="width:18%"><col style="width:16%"><col style="width:16%"><col style="width:24%"></colgroup>
              <thead><tr><th>申报项目</th><th>责任方</th><th>频率</th><th>截止日期</th><th>汇缴机构</th></tr></thead>
              <tbody>
                <tr><td>ELSTER Lohnsteueranmeldung</td><td>雇主</td><td>按月/按季</td><td>次月10日</td><td>Finanzamt</td></tr>
                <tr><td>Beitragsnachweis社保月度申报</td><td>雇主</td><td>按月</td><td>当月最后3个工作日</td><td>Krankenkasse + DRV</td></tr>
                <tr><td>DE&Uuml;V-Meldungen</td><td>雇主</td><td>按事件触发</td><td>入职/离职/变更后≤6周</td><td>对应Krankenkasse</td></tr>
                <tr><td>U1 / U2雇主报销</td><td>雇主</td><td>随社保缴款</td><td>按月</td><td>Krankenkasse</td></tr>
                <tr><td>BG工伤保险</td><td>雇主</td><td>年度预估</td><td>每年2月15日</td><td>行业Berufsgenossenschaft</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iii. Payroll Journal Mapping Rules (SKR 04) */
  'pg.germany.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资日记账映射规则（推荐SKR 04）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>项目</th><th>科目</th></tr></thead>
              <tbody>
                <tr><td>Bruttolohn + Sonderzahlungen</td><td>Personalaufwand &mdash; L&ouml;hne und Geh&auml;lter (6020)</td></tr>
                <tr><td>Arbeitgeberanteile SV（约20%）</td><td>Personalaufwand &mdash; Gesetzliche Sozialaufwendungen (6110)</td></tr>
                <tr><td>BG / Unfallversicherung</td><td>Personalaufwand &mdash; Beitr&auml;ge zur Berufsgenossenschaft (6120)</td></tr>
                <tr><td>Lohnsteuer + Soli + KiSt代扣</td><td>Verbindlichkeiten &mdash; gegen&uuml;ber Finanzamt (3730)</td></tr>
                <tr><td>SV-Beitr&auml;ge AN-Anteil代扣</td><td>Verbindlichkeiten &mdash; Krankenkasse (3740)</td></tr>
                <tr><td>实发工资</td><td>Bank (1200)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iv. Annual Filings */
  'pg.germany.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 年度申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:16%"><col style="width:34%"></colgroup>
              <thead><tr><th>项目</th><th>责任方</th><th>截止日期</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>Lohnsteuerbescheinigung</td><td>雇主 &rarr; 员工 + Finanzamt</td><td>2月底</td><td>每位员工的年度税务汇总；通过ELSTER电子提交</td></tr>
                <tr><td>Lohnsteuer-Jahresausgleich</td><td>雇主（可选）</td><td>12月工资</td><td>有条件的自动汇算；员工可选择退出并自行申报ESt</td></tr>
                <tr><td>Einkommensteuerkl&auml;rung</td><td>员工</td><td>7月31日</td><td>ESt综合所得申报；雇主无义务但常通过ELSTER协助</td></tr>
                <tr><td>BG工伤保险年度结算</td><td>雇主</td><td>2月15日</td><td>根据上年实际工资调整BG保费</td></tr>
                <tr><td>SV-Jahresmeldung</td><td>雇主</td><td>2月15日</td><td>每位员工的Bruttolohn年度社保申报</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* v. Termination & Foreign Workers */
  'pg.germany.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> 离职与外籍员工</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:30%"><col style="width:40%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>通知期 K&uuml;ndigungsfrist（&sect;622 BGB）</td><td>最低4周</td><td>随工龄递增：<2年4周；≥20年7个月；雇主单方面</td></tr>
                <tr><td>K&uuml;ndigungsschutz解雇保护</td><td>适用于≥10名员工的公司（KSchG）</td><td>解雇须有社会正当理由：经营原因/个人原因/行为原因</td></tr>
                <tr><td>Abfindung遣散补偿</td><td>非法定</td><td>&sect;1a KSchG建议每工龄年0.5个月薪；实践中通常0.5至1.5个月</td></tr>
                <tr><td>未休年假折现</td><td>强制</td><td>按净日薪计算</td></tr>
                <tr><td>Arbeitszeugnis工作证明</td><td>强制</td><td>须客观、善意；间接评价用语在业内广为人知</td></tr>
                <tr><td>外籍员工 Aufenthaltstitel</td><td>视情况而定</td><td>EU / EEA公民免签；非EU公民须持Arbeitserlaubnis</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Marco Insight */
  'pg.germany.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">2026年德国薪资三大关键变化：（1）MiLoG最低工资自2026/1起从&euro;12.82提高至&euro;13.90（+8.4%，由Mindestlohnkommission确定）；（2）Grundfreibetrag免税额从&euro;12,096提高至&euro;12,348（+&euro;252）；所有Lohnsteuer公式参数相应调整；（3）Beitragsbemessungsgrenze缴费基数上限统一：养老/失业&euro;96,600（自2025年起东西部统一），医疗/护理&euro;66,150。</p>
  `,

};
