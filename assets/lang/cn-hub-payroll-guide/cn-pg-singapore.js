/* Payroll Guide — Singapore page content (hr-knowledge-hub-payroll-guide-singapore.html) */
/* CN translation — empty values fall back to English (baked in HTML). Fill in translations. Values on data-i18n-html keys are raw HTML. */
window.MARCO_LANG_CN_PG_SINGAPORE = {
  'pg.singapore.desc': `新加坡薪资运营完整指南 - 涵盖ACRA注册、CPF双向缴费（员工20% + 雇主17%）、OW上限S$8,000、Skills Development Levy、AIS自动纳入IR8A申报、累进所得税（0%-24%），以及2026年更新（包括新的Shared Parental Leave和55-65岁年龄段修订后的CPF费率）。`,

  'pg.singapore.s1.h': `适用范围`,

  'pg.singapore.s1.sub': `适用范围与法律依据 / Employment Act &middot; CPF Act &middot; ITA &middot; MOM &middot; IRAS`,

  'pg.singapore.s1.b1': `
          <p class="au-section-sep">本文件适用于：</p>
          <div class="au-bullet-list">
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>已在新加坡设立本地法律实体的公司（Private Limited Company / Branch Office / Subsidiary）</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>由本地实体直接雇用、适用Employment Act（月薪≤S$4,500全面保障 / Part IV）和Retirement &amp; Re-employment Act的员工</span></div>
            <div class="au-bullet-item"><div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div><span>基于Employment Act、CPF Act、Income Tax Act以及MOM / IRAS / CPF Board法规的薪资合规</span></div>
          </div>
`,

  'pg.singapore.s1.b2': `<strong>本框架涵盖：</strong>企业如何在新加坡完成薪资设置（ACRA注册 + UEN + GIRO + CPF + Skills Development Levy + FWL）、月度工资计算（CPF员工 + 雇主缴费 + SDL + 个人所得税IRAS）、月度汇缴（CPF + SDL于次月14日前 / Auto-Inclusion AIS申报），以及年度合规管理（IR8A截止3月1日）。`,

  'pg.singapore.s1.b3': `
          <p class="au-data-cards-label">2026年关键数值</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card"><p class="au-dc-name">CPF员工费率</p><p class="au-dc-value">20%</p><p class="au-dc-note">≤55岁；雇主17%；合计37%</p></div>
              <div class="au-data-card"><p class="au-dc-name">CPF雇主费率</p><p class="au-dc-value">17%</p><p class="au-dc-note">≤55岁；55-60岁升至16.5%</p></div>
              <div class="au-data-card"><p class="au-dc-name">OW月度上限</p><p class="au-dc-value">S$8,000</p><p class="au-dc-note">自2026/1/1起；此前S$7,400</p></div>
              <div class="au-data-card"><p class="au-dc-name">AW年度上限</p><p class="au-dc-value">S$102,000</p><p class="au-dc-note">工资总额上限</p></div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card"><p class="au-dc-name">最高个人税率</p><p class="au-dc-value">24%</p><p class="au-dc-note">&gt; S$1M；累进0-24%</p></div>
              <div class="au-data-card"><p class="au-dc-name">免税门槛</p><p class="au-dc-value">S$20,000</p><p class="au-dc-note">年应税收入≤0%</p></div>
              <div class="au-data-card"><p class="au-dc-name">SDL技能税</p><p class="au-dc-value">0.25%</p><p class="au-dc-note">仅雇主；最低S$2 / 最高S$11.25</p></div>
              <div class="au-data-card"><p class="au-dc-name">IR8A截止日期</p><p class="au-dc-value">3月1日</p><p class="au-dc-note">年度员工收入申报</p></div>
            </div>
          </div>
`,

  'pg.singapore.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">新加坡薪资的三大关键特征：（1）CPF双向缴费 &mdash; 员工20% + 雇主17%，合计37%位居全球最高强制储蓄率之列；55岁以上分档递减（55-60 / 60-65 / 65-70 / &gt;70档），自2027年1月起继续逐步上调；（2）"公民身份区分"：CPF仅适用于新加坡公民和PR（永久居民）；外籍员工（EP / SP / WP）完全免缴CPF，但SP/WP须缴纳Foreign Worker Levy；（3）实时Auto-Inclusion Scheme (AIS) &mdash; 雇主须将员工IR8A数据直接传输至IRAS；员工无需个人申报。</p>
`,

  'pg.singapore.s2.h': `薪资设置`,

  'pg.singapore.s2.sub': `如何在新加坡建立合法的薪资发放能力 / 实体 &middot; ACRA &middot; CPF &middot; MOM`,

  'pg.singapore.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> 实体、UEN、CPF与GIRO登记</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>操作说明</th></tr>
              </thead>
              <tbody>
                <tr><td>公司注册（Pte Ltd）</td><td>新加坡本地实体</td><td>是</td><td>ACRA注册；最低资本S$1；至少1名本地董事</td></tr>
                <tr><td>UEN统一实体编号</td><td>新加坡本地实体</td><td>是</td><td>统一实体编号；ACRA注册时自动生成</td></tr>
                <tr><td>CPF雇主登记</td><td>新加坡本地实体</td><td>是</td><td>雇用新加坡公民/PR员工前完成；通过my cpf在线注册</td></tr>
                <tr><td>GIRO自动扣款授权</td><td>新加坡本地实体</td><td>是</td><td>CPF + SDL自动扣款；避免每月手动付款</td></tr>
                <tr><td>IRAS雇主档案</td><td>新加坡本地实体</td><td>是</td><td>雇用员工后自动生成；用于IR8A AIS</td></tr>
                <tr><td>SDL技能发展税</td><td>新加坡本地实体</td><td>是</td><td>通过CPF Board与CPF一并汇缴</td></tr>
                <tr><td>FWL工作准证</td><td>外籍员工</td><td>是</td><td>向MOM申请EP / S Pass / WP；S/WP须缴纳FWL</td></tr>
                <tr><td>KETs关键雇佣条款</td><td>新员工</td><td>是</td><td>Employment Act第95A条要求书面KETs</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">02</span> CPF按年龄段缴费率（2026年）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>年龄段</th><th>员工缴费</th><th>雇主缴费</th><th>合计</th></tr>
              </thead>
              <tbody>
                <tr><td>≤55岁</td><td>20%</td><td>17%</td><td>37%</td></tr>
                <tr><td>55-60岁</td><td>17.5%</td><td>16.5%</td><td>34%（2026/1上调）</td></tr>
                <tr><td>60-65岁</td><td>12%</td><td>12.5%</td><td>24.5%（2026/1上调）</td></tr>
                <tr><td>65-70岁</td><td>7.5%</td><td>9%</td><td>16.5%</td></tr>
                <tr><td>&gt;70岁</td><td>5%</td><td>7.5%</td><td>12.5%</td></tr>
                <tr><td>附加SDL</td><td>&mdash;</td><td>0.25%（每名员工每月最高S$11.25）</td><td>&mdash;</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s3.h': `薪资计算`,

  'pg.singapore.s3.sub': `工资、税务和员工权益的计算方式 / 工资 &middot; 休假`,

  'pg.singapore.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> 工资计算与奖金</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>项目</th><th>规则 / 2026年数值</th></tr>
              </thead>
              <tbody>
                <tr><td>支付周期</td><td>按月（最常见）；7天内支付 + 工资调整支付（第21条）</td></tr>
                <tr><td>最低工资</td><td>无 &mdash; 仅清洁/保安/物业管理行业实施PWM渐进式工资模式</td></tr>
                <tr><td>OW月度上限</td><td>S$8,000（自2026/1/1起；此前S$7,400）</td></tr>
                <tr><td>AW年度上限</td><td>工资总额上限 = S$102,000 &minus; 年度累计OW</td></tr>
                <tr><td>第13个月 / AWS</td><td>非法定；按雇主/合同惯例；通常12月前发放</td></tr>
                <tr><td>加班</td><td>Part IV员工（月薪≤S$2,600）：1.5倍标准时薪</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">02</span> 法定休假权益</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>项目</th><th>时长/期限</th><th>薪资比例/来源</th></tr>
              </thead>
              <tbody>
                <tr><td>年假</td><td>7至14天（按工龄递增）</td><td>100% / 雇主；连续服务≥3个月</td></tr>
                <tr><td>法定假日</td><td>每年11天</td><td>100% / 雇主；假日逢周日则补假</td></tr>
                <tr><td>病假</td><td>门诊 + 住院每年14 + 60天</td><td>100% / 雇主；须提供医疗证明</td></tr>
                <tr><td>产假（公民）</td><td>16周GPML</td><td>政府补贴（≥第2个孩子全额补贴）</td></tr>
                <tr><td>产假（非公民）</td><td>12周</td><td>≤第2个孩子；此后50%员工自付</td></tr>
                <tr><td>陪产假</td><td>4周GPPL</td><td>政府补贴；2024年升级至4周</td></tr>
                <tr><td>Shared Parental Leave SPL</td><td>10周（2026/4/1生效）</td><td>新增；父母双方共享 + 产假/陪产假</td></tr>
                <tr><td>育儿假</td><td>每年6天</td><td>100% / 雇主；适用于孩子<7岁</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">03</span> 个人所得税 &mdash; YA 2026（居民）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>年应税收入 (SGD)</th><th>税率</th><th>累计税额（下限档）</th></tr>
              </thead>
              <tbody>
                <tr><td>0 &ndash; 20,000</td><td>0%</td><td>免税门槛</td></tr>
                <tr><td>20,001 &ndash; 30,000</td><td>2%</td><td>S$0</td></tr>
                <tr><td>30,001 &ndash; 40,000</td><td>3.5%</td><td>S$200</td></tr>
                <tr><td>40,001 &ndash; 80,000</td><td>7%</td><td>S$550</td></tr>
                <tr><td>80,001 &ndash; 120,000</td><td>11.5%</td><td>S$3,350</td></tr>
                <tr><td>120,001 &ndash; 320,000</td><td>15% &ndash; 22%</td><td>5档累进</td></tr>
                <tr><td>320,001 &ndash; 1,000,000</td><td>23% &ndash; 24%</td><td>3档累进</td></tr>
                <tr><td>&gt; 1,000,000</td><td>24%</td><td>最高档（2024年新增）</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-section-sep"><strong>YA2026税务减免：</strong>60%减免（最高S$200）自动适用于所有税务居民。</p>
`,

  'pg.singapore.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">04</span> CPF与FWL操作细节</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>项目</th><th>2026年数值</th><th>说明</th></tr>
              </thead>
              <tbody>
                <tr><td>OW上限</td><td>S$8,000/月</td><td>自2026/1/1起增加S$600；达到最终目标</td></tr>
                <tr><td>AW上限</td><td>S$102,000 &minus; 年度OW</td><td>年度工资总额上限</td></tr>
                <tr><td>FWL（按行业/层级）</td><td>S$250至950/月</td><td>建筑/制造/服务业各异</td></tr>
                <tr><td>非居民税</td><td>15% / 累进（取较高者）</td><td>&lt;183天；雇佣收入统一15%</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">新加坡薪资中三个常被低估的细节：（1）Part IV界限：月薪≤S$2,600的员工享有加班1.5倍、休息日溢价；其他员工仅享Part XII权益（年假/病假/产假/法定假日）；（2）AIS Auto-Inclusion强制门槛 &mdash; 自2022年起≥5名员工强制参加；雇主IR8A数据直接传输至IRAS；员工无需个人申报；（3）Skills Development Levy SDL 0.25%适用于所有员工（含外籍），每月最高S$11.25；金额虽小但不缴纳将产生罚款。</p>
`,

  'pg.singapore.s4.h': `薪资处理与合规`,

  'pg.singapore.s4.sub': `月度执行、申报与缴款及会计处理 / 月度申报与日记账`,

  'pg.singapore.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">01</span> 薪资发放规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>项目</th><th>规则</th><th>说明</th></tr>
              </thead>
              <tbody>
                <tr><td>发放频率</td><td>按月</td><td>最常见；Employment Act第20-21条；7天内支付</td></tr>
                <tr><td>支付方式 + 币种</td><td>FAST / GIRO &middot; SGD</td><td>支票合规但少见；强烈不建议现金支付</td></tr>
                <tr><td>工资单</td><td>强制（第96条）</td><td>须逐项列明毛工资、CPF、扣除项、实发工资 + Itemised Pay Slip</td></tr>
                <tr><td>工资扣除限额</td><td>≤毛工资的25%</td><td>Employment Act第27条；含CPF/税</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">02</span> 月度申报与缴款</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>申报项目</th><th>责任方</th><th>频率</th><th>截止日期</th><th>汇缴机构</th></tr>
              </thead>
              <tbody>
                <tr><td>CPF月度缴费</td><td>雇主</td><td>按月</td><td>次月14日</td><td>CPF Board (PAL/UEN)</td></tr>
                <tr><td>SDL技能税</td><td>雇主</td><td>按月</td><td>次月14日（与CPF同步）</td><td>CPF Board / SSG</td></tr>
                <tr><td>FWL外籍劳工税</td><td>雇主</td><td>按月</td><td>次月14日</td><td>MOM（GIRO自动扣款）</td></tr>
                <tr><td>所得税代扣（仅非居民）</td><td>雇主</td><td>离职前（提前1个月通知）</td><td>离职后30天内</td><td>IRAS</td></tr>
                <tr><td>IRAS税务申报（居民）</td><td>无月度申报</td><td>&mdash;</td><td>&mdash;</td><td>员工在IR8A后自行申报</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">03</span> 薪资日记账映射规则（SFRS / IFRS）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>项目</th><th>科目（SFRS新加坡准则）</th></tr>
              </thead>
              <tbody>
                <tr><td>基本工资 + AWS + 津贴 + 奖金</td><td>员工福利 &mdash; Salaries &amp; Wages</td></tr>
                <tr><td>CPF雇主缴费17%</td><td>员工福利 &mdash; CPF Contribution</td></tr>
                <tr><td>SDL技能发展税0.25%</td><td>员工福利 &mdash; SDL</td></tr>
                <tr><td>FWL外籍劳工税</td><td>员工福利 &mdash; FWL</td></tr>
                <tr><td>CPF员工缴费20%</td><td>负债 &mdash; CPF Payable</td></tr>
                <tr><td>实发工资</td><td>银行 &mdash; DBS / UOB / OCBC / Stan Chart SG</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">04</span> 年度申报</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>项目</th><th>责任方</th><th>截止日期</th><th>说明</th></tr>
              </thead>
              <tbody>
                <tr><td>IR8A员工年度收入</td><td>雇主 &rarr; IRAS</td><td>3月1日</td><td>Auto-Inclusion AIS强制（≥5名员工）</td></tr>
                <tr><td>Appendix 8A / 8B / IR8S</td><td>雇主 &rarr; IRAS</td><td>随IR8A一并提交</td><td>住房福利/股票期权/CPF超额缴费附件</td></tr>
                <tr><td>IR21离境税务清算</td><td>雇主 &rarr; IRAS</td><td>离境前1个月</td><td>外籍员工离境；扣起最终工资 + 相关税款</td></tr>
                <tr><td>CPF年度账户对账</td><td>CPF Board</td><td>年底前</td><td>12月通过PAL系统对账</td></tr>
                <tr><td>公司所得税（Form C）</td><td>公司</td><td>11月30日</td><td>预估应课税收入3个月内 + 最终11/30</td></tr>
                <tr><td>FWL配额对账</td><td>雇主</td><td>每年</td><td>按MOM Dependency Ratio Ceiling</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">05</span> 离职与外籍员工</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <thead>
                <tr><th>项目</th><th>规则</th><th>说明</th></tr>
              </thead>
              <tbody>
                <tr><td>通知期</td><td>1天至4周</td><td>按工龄确定（第10条）；<26周 / 26周-2年 / 2-5年 / &gt;5年</td></tr>
                <tr><td>遣散/裁员补偿</td><td>每年2周至1个月</td><td>非法定；行业惯例为每年2个月工资</td></tr>
                <tr><td>未休年假折现</td><td>强制</td><td>按月薪 / 26 &times; 累计未休天数计算</td></tr>
                <tr><td>IR21离境税务通知</td><td>离境前1个月</td><td>适用于外籍员工；扣起最终工资 + 相关税款</td></tr>
                <tr><td>最终工资 + Final Pay</td><td>离职当日支付</td><td>Employment Act第23条</td></tr>
                <tr><td>外籍员工</td><td>EP / SP / WP按MOM配额</td><td>EP最低S$5,600 / SP最低S$3,650 / WP因行业而异</td></tr>
              </tbody>
            </table>
          </div>
`,

  'pg.singapore.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">2026年新加坡薪资三大关键变化：（1）CPF OW上限自2026/1/1起提高至S$8,000（此前S$7,400）；预计2027年1月起进一步上调；（2）Shared Parental Leave SPL自2026/4/1生效 &mdash; 父母双方共享10周 + 4周陪产假；（3）55-65岁CPF缴费率自2026/1/1起上调 &mdash; 55-60岁现为34%，60-65岁现为24.5%；持续向2030年目标费率推进。</p>
`,
};
