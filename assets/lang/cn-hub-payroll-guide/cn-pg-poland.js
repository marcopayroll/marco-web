/* Payroll Guide — Poland page content (hr-knowledge-hub-payroll-guide-poland.html) */
/* CN translation — empty values fall back to English (baked in HTML). Fill in translations. Values on data-i18n-html keys are raw HTML. */
window.MARCO_LANG_CN_PG_POLAND = {
  'pg.poland.desc': `本框架用于说明：企业如何在波兰完成 Payroll Set-up（KRS / NIP / ZUS 登记、PESEL/NIP 员工识别）、月度薪酬计算（ZUS / NFZ 健康保险 / PIT 代扣）、以及 ZUS DRA 月度申报和 PIT-11 / PIT-4R 年度合规管理。`,

  'pg.poland.s1.h': `适用范围`,

  'pg.poland.s1.sub': `适用范围与法律基础 / Polish Labour Code &middot; ZUS Act &middot; Personal Income Tax Act`,

  'pg.poland.s1.b1': `
          <p class="article-p">本文件适用于：</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>在波兰已设立本地法人实体的企业（Sp. z o.o. / S.A. / Sp. j. / Sp. k.），并在 KRS（Krajowy Rejestr S&#261;dowy，国家法院登记册）完成注册</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>员工由该本地实体依据劳动合同（umowa o prac&#281;）直接雇佣，受《劳动法》（Kodeks pracy）约束</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>薪酬合规以《劳动法》、《社会保险法》（Ustawa o systemie ubezpiecze&#324; spo&#322;ecznych）及《个人所得税法》（Ustawa o PIT）为基础</span>
            </div>
          </div>
`,

  'pg.poland.s1.b2': `本框架用于说明：企业如何在波兰完成 Payroll Set-up（KRS / NIP / ZUS 登记、PESEL/NIP 员工识别）、月度薪酬计算（ZUS / NFZ 健康保险 / PIT 代扣）、以及 ZUS DRA 月度申报和 PIT-11 / PIT-4R 年度合规管理。`,

  'pg.poland.s1.b3': `
          <p class="au-data-cards-label">2026 关键数据</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">最低月薪</span>
                <span class="au-dc-value">PLN 4,806</span>
                <span class="au-dc-note">较 2025 年 +3%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">最低时薪</span>
                <span class="au-dc-value">PLN 31.40</span>
                <span class="au-dc-note">亦适用于民事合同</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">PIT 税档</span>
                <span class="au-dc-value">12% / 32%</span>
                <span class="au-dc-note">免税额 PLN 30,000</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">雇员 ZUS</span>
                <span class="au-dc-value">13.71%</span>
                <span class="au-dc-note">+ 健康保险 9%</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">雇主 ZUS</span>
                <span class="au-dc-value">20.48%</span>
                <span class="au-dc-note">工伤保险因行业而异</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">年度缴费上限</span>
                <span class="au-dc-value">PLN 282,600</span>
                <span class="au-dc-note">仅适用于养老 + 伤残保险</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Ulga dla m&#322;odych</span>
                <span class="au-dc-value">PLN 85,528</span>
                <span class="au-dc-note">26 岁以下雇员 PIT 免税</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">PPK 雇主</span>
                <span class="au-dc-value">1.5%</span>
                <span class="au-dc-note">雇员 2%（可选择退出）</span>
              </div>
            </div>
          </div>
`,

  'pg.poland.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">波兰 Payroll 由三套独立并行体系构成：ZUS（社会保险）+ NFZ（健康保险）+ Urz&#261;d Skarbowy（税务局）。同一份薪资需分别向 3 个不同机构申报和缴款，且截止日期各异（ZUS DRA 次月 15 日，PIT 次月 20 日）。养老 + 伤残保险的合计缴费基数年度上限为 PLN 282,600，达到上限后当年剩余月份对应缴费停止，但工伤、病假及健康保险缴费继续。</p>
`,

  'pg.poland.s2.h': `薪资设置`,

  'pg.poland.s2.sub': `如何在波兰具备合法发薪能力 / Entity &middot; Tax &middot; ZUS &middot; PPK`,

  'pg.poland.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 公司、税务与 ZUS 登记</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28.4%"><col style="width:28.4%"><col style="width:14.9%"><col style="width:28.4%"></colgroup>
              <thead><tr><th>项目</th><th>账户主体</th><th>强制</th><th>实操说明</th></tr></thead>
              <tbody>
                <tr><td>KRS 登记</td><td>波兰本地实体</td><td>是</td><td>向 Krajowy Rejestr S&#261;dowy（国家法院登记册）申请</td></tr>
                <tr><td>NIP（税号）+ REGON</td><td>波兰本地实体</td><td>是</td><td>向 Urz&#261;d Skarbowy 申请；GUS 自动分配 REGON</td></tr>
                <tr><td>ZUS 雇主登记</td><td>波兰本地实体</td><td>是</td><td>首次雇佣后 7 日内提交 ZUS ZPA / ZUS ZFA</td></tr>
                <tr><td>员工 PESEL + ZUS ZUA</td><td>雇主代为办理</td><td>是</td><td>11 位 PESEL；入职后 7 日内提交 ZUS ZUA</td></tr>
                <tr><td>劳动合同（umowa o prac&#281;）</td><td>雇主 + 员工</td><td>是</td><td>须书面签订，注明薪资、工时及岗位类型</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 保险与 PPK 自动加入</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.4%"></colgroup>
              <thead><tr><th>项目</th><th>强制 / 自愿</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>ZUS 养老 + 伤残保险（emerytalne + rentowe）</td><td>强制</td><td>雇员 11.26% + 雇主 16.26%；年度缴费基数上限 PLN 282,600</td></tr>
                <tr><td>ZUS 病假 + 工伤 + 劳动基金</td><td>强制</td><td>雇员 2.45%；雇主 0.67-3.33% + FP 2.45% + FG&#346;P 0.10%</td></tr>
                <tr><td>健康保险 NFZ（sk&#322;adka zdrowotna）</td><td>强制</td><td>雇员 9%，无上限；自 2022 年 Polski &#321;ad 改革后不得从 PIT 中扣除</td></tr>
                <tr><td>PPK 员工资本计划</td><td>自动加入，可选择退出</td><td>雇主 1.5% + 雇员 2%；政府激励 PLN 250 + PLN 240/年</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 银行账户、工资单与记录保存</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.4%"></colgroup>
              <thead><tr><th>项目</th><th>要求</th><th>实操说明</th></tr></thead>
              <tbody>
                <tr><td>PLN 本地银行账户</td><td>强制</td><td>工资以兹罗提电子转账支付（现金支付须经员工书面同意）</td></tr>
                <tr><td>工资单（Pasek wynagrodze&#324;）</td><td>每次发薪</td><td>须列明总薪、ZUS、健康保险、PIT 及净薪</td></tr>
                <tr><td>薪酬 + 人事档案保存</td><td>强制，10 年</td><td>Akta osobowe；2019 年起为 10 年（此前为 50 年）</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s3.h': `薪酬计算`,

  'pg.poland.s3.sub': `薪酬、税务与员工权益如何计算 / Salary &middot; Leave`,

  'pg.poland.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪酬、最低工资与折算</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:29.7%"><col style="width:70.3%"></colgroup>
              <thead><tr><th>项目</th><th>规则 / 2026 数值</th></tr></thead>
              <tbody>
                <tr><td>计薪周期 / 方式</td><td>月薪（劳动合同最常见）；民事合同（umowa zlecenie）适用时薪</td></tr>
                <tr><td>折算方式</td><td>月薪 &divide; 当月工作日 &times; 实际出勤天数；加班 +50%（工作日）/ +100%（休息日 / 夜班 / 公共假日）</td></tr>
                <tr><td>全国最低月薪</td><td>PLN 4,806/月（税前，2026 年 1 月 1 日起生效，全年一次调整）</td></tr>
                <tr><td>全国最低时薪</td><td>PLN 31.40/小时（适用于所有合同类型，含民事合同）</td></tr>
                <tr><td>第 13 / 14 月薪</td><td>非法定；仅由集体协议或公共部门法规规定（如教育、公务员系统）</td></tr>
                <tr><td>小数处理</td><td>四舍五入至 2 位小数（PLN gr）；ZUS 申报精确至 gr</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 法定假期</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.4%"></colgroup>
              <thead><tr><th>项目</th><th>天数 / 期间</th><th>工资比例 / 来源</th></tr></thead>
              <tbody>
                <tr><td>年假（Urlop wypoczynkowy）</td><td>20 天（工龄 <10 年）/ 26 天（工龄 &ge;10 年）</td><td>100% / 雇主</td></tr>
                <tr><td>公共假日</td><td>14 天（含 2025 年起新增平安夜）</td><td>100% / 雇主</td></tr>
                <tr><td>病假 - chorobowe（前 33 天）</td><td>每年前 33 天（50 岁以上：14 天）</td><td>80% / 雇主</td></tr>
                <tr><td>病假 - zasi&#322;ek chorobowy（第 34 天起）</td><td>第 34 天起，最长 182 天</td><td>80% / ZUS</td></tr>
                <tr><td>产假（Urlop macierzy&#324;ski）</td><td>20-37 周（视生育胎数而定）</td><td>100% 或 81.5% / ZUS</td></tr>
                <tr><td>陪产假（Urlop ojcowski）</td><td>14 天（须在孩子满 12 个月前使用）</td><td>100% / ZUS</td></tr>
                <tr><td>育儿假（Urlop rodzicielski）</td><td>41 / 43 周，其中 9 周保留给父亲</td><td>70% 或 81.5% / ZUS</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 个人所得税 (PIT) — 累进税率</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:40.1%"><col style="width:19.8%"><col style="width:40.1%"></colgroup>
              <thead><tr><th>税档（年应税所得）</th><th>税率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>PLN 0 - 30,000</td><td>0%</td><td>kwota wolna（免税额），相当于 PLN 3,600 税额减免</td></tr>
                <tr><td>PLN 30,001 - 120,000</td><td>12%</td><td>提交 PIT-2 声明后，每月适用 PLN 300 税额抵扣</td></tr>
                <tr><td>PLN 120,000 以上</td><td>32%</td><td>适用于超过 PLN 120,000 的部分</td></tr>
                <tr><td>附加税：Danina solidarno&#347;ciowa（团结税）</td><td>+4%</td><td>对年应税所得超过 PLN 1,000,000 的部分加征</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p">雇主作为 p&#322;atnik，在每次发薪时代扣 PIT 预缴税款，并于次月 20 日前向 Urz&#261;d Skarbowy 缴纳。</p>
          <p class="article-p">特殊优惠：Ulga dla m&#322;odych（26 岁以下零 PIT）适用于 umowa o prac&#281; / umowa zlecenie 的雇佣收入，年度免税上限为 PLN 85,528。</p>
`,

  'pg.poland.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 雇主 ZUS — 明细分拆</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:25%"><col style="width:25%"></colgroup>
              <thead><tr><th>保险类型</th><th>雇员部分</th><th>雇主部分</th><th>缴费基数上限</th></tr></thead>
              <tbody>
                <tr><td>养老保险（emerytalne）</td><td>9.76%</td><td>9.76%</td><td>年度 PLN 282,600</td></tr>
                <tr><td>伤残 / 遗属保险（rentowe）</td><td>1.50%</td><td>6.50%</td><td>年度 PLN 282,600</td></tr>
                <tr><td>病假保险（chorobowe）</td><td>2.45%</td><td>&ndash;</td><td>无上限</td></tr>
                <tr><td>工伤 + FP + FG&#346;P</td><td>&ndash;</td><td>约 3.22%（因行业而异）</td><td>无上限</td></tr>
                <tr><td>合计（典型中小微企业）</td><td>13.71%</td><td>约 20.48%</td><td>&ndash;</td></tr>
                <tr><td>健康保险 NFZ</td><td>9%（基于扣除 ZUS 后收入）</td><td>&ndash;</td><td>无上限，不可抵扣</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">波兰 ZUS / 健康保险三个常被低估的细节：(1) 养老 + 伤残保险合计年度缴费基数上限为 PLN 282,600（约 PLN 23,550/月），达到上限后对应缴费停止，但工伤、病假及健康保险继续缴纳；(2) 9% 健康保险自 2022 年 Polski &#321;ad 改革后不得从 PIT 中扣除；(3) 26 岁以下员工免缴 PIT，但 ZUS 和健康保险缴费仍然适用。</p>
`,

  'pg.poland.s4.h': `薪酬处理与合规`,

  'pg.poland.s4.sub': `月度执行、申报缴纳与账务处理 / Monthly Filings &amp; Journal`,

  'pg.poland.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪酬支付规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:24.8%"><col style="width:24.8%"><col style="width:50.4%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>支付频率</td><td>每月至少一次</td><td>工资须于次月 10 日前结清（Kodeks pracy Art. 85）</td></tr>
                <tr><td>支付方式 + 货币</td><td>电子转账 &middot; PLN</td><td>现金支付须经员工书面同意；外币结算不允许</td></tr>
                <tr><td>工资单 + 扣款上限</td><td>强制，&le; 净薪 50%</td><td>Pasek wynagrodze&#324;；赡养费例外可达 60%</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 月度 ZUS 与 PIT 申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18.6%"><col style="width:18.6%"><col style="width:18.6%"><col style="width:18.6%"><col style="width:25.6%"></colgroup>
              <thead><tr><th>申报项</th><th>责任方</th><th>频率</th><th>截止日</th><th>申报机构</th></tr></thead>
              <tbody>
                <tr><td>ZUS DRA / RCA / RSA</td><td>雇主</td><td>每月</td><td>次月 15 日</td><td>ZUS</td></tr>
                <tr><td>PIT-4R 月度代扣缴款</td><td>雇主</td><td>每月</td><td>次月 20 日</td><td>Urz&#261;d Skarbowy</td></tr>
                <tr><td>PPK 月度缴款</td><td>雇主</td><td>每月</td><td>次月 15 日</td><td>指定 PPK 机构</td></tr>
                <tr><td>健康保险 NFZ</td><td>并入 ZUS DRA 一起</td><td>每月</td><td>次月 15 日</td><td>ZUS &rarr; NFZ</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪酬账务处理</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:50%"><col style="width:50%"></colgroup>
              <thead><tr><th>项目</th><th>科目</th></tr></thead>
              <tbody>
                <tr><td>总薪 + 津贴 + 雇主 ZUS + PPK</td><td>薪酬费用</td></tr>
                <tr><td>雇员 ZUS (13.71%) 代扣</td><td>薪酬负债 &ndash; ZUS</td></tr>
                <tr><td>健康保险 (9%) 代扣</td><td>薪酬负债 &ndash; NFZ</td></tr>
                <tr><td>PIT 预缴代扣</td><td>薪酬负债 &ndash; Urz&#261;d Skarbowy</td></tr>
                <tr><td>净薪</td><td>现金 / 银行</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 年度申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:25%"><col style="width:25%"></colgroup>
              <thead><tr><th>项目</th><th>责任方</th><th>截止日</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>PIT-4R 年度雇主代扣汇总</td><td>雇主</td><td>1 月 31 日</td><td>全年全体员工 PIT 预缴总额</td></tr>
                <tr><td>PIT-11 员工年度收入报表</td><td>雇主 &rarr; 员工 / 税务局</td><td>1 月 31 日（税务局）&middot; 2 月 28 日（员工）</td><td>员工据此申报 PIT-37</td></tr>
                <tr><td>员工 PIT-37 / PIT-36</td><td>员工</td><td>4 月 30 日</td><td>通过 Tw&oacute;j e-PIT 或会计师申报</td></tr>
                <tr><td>PFRON 月度 / 年度申报</td><td>雇主（&gt;25 名员工）</td><td>次月 20 日 / 1 月 20 日</td><td>残障人士雇佣比例低于 6% 时须缴款</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> 离职与最终结算</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:33.3%"><col style="width:33.3%"><col style="width:33.4%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>通知期</td><td>2 周 / 1 个月 / 3 个月</td><td>按工龄：<6 个月 / 6 个月至 3 年 / &ge;3 年；可以代通知金替代</td></tr>
                <tr><td>遣散费（&ge;20 名员工，非员工过失）</td><td>1 / 2 / 3 个月薪资</td><td>工龄 <2 / 2-8 / >8 年；上限为 15 倍最低月薪</td></tr>
                <tr><td>未休年假现金折算</td><td>强制</td><td>ekwiwalent pieni&#281;&#380;ny，按当月平均薪资计算</td></tr>
                <tr><td>集体裁员（Zwolnienia grupowe）</td><td>特殊程序</td><td>&ge;20 名员工企业中 30 日内裁减 10 / 10% / 30 人时触发</td></tr>
                <tr><td>争议解决</td><td>S&#261;d Pracy（劳动法院）</td><td>员工可在 21 日内对解雇决定提出申诉</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.poland.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">2026 年波兰 Payroll 三个关键变化：(1) 最低工资于 2026 年 1 月 1 日提高至 PLN 4,806（+3%，时薪 PLN 31.40），全年一次调整，不再沿用 2023-2024 年年中二次调整模式；(2) ZUS 年度缴费基数上限提高至 PLN 282,600（此前为 PLN 260,190）；(3) 平安夜（12 月 24 日）自 2025 年起成为新的法定公共假日，全年公共假日从 13 天增至 14 天。建议在 6 月底前完成 Payroll 系统全面更新。</p>
`,
};

