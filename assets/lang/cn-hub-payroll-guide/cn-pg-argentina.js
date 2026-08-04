/* Payroll Guide — Argentina page content (hr-knowledge-hub-payroll-guide-argentina.html) */
/* Empty values fall back to English. Fill in translations. Values on data-i18n-html keys are raw HTML. */
window.MARCO_LANG_CN_PG_ARGENTINA = {
	  'pg.argentina.desc': `阿根廷薪酬管理完整实务指南——涵盖 AFIP 注册、CCT 集体劳动协议、社会保障缴费（退休金 Jubilación、医疗保险 Obra Social、职业风险保险 ART）、Ganancias 所得税预扣、SAC（Aguinaldo）年终奖金计算，以及《第20.744号法律》规定的法定离职补偿和休假权益。`,

	  'pg.argentina.s1.h': `适用范围`,

	  'pg.argentina.s1.b1': `
			  <p class="au-table-title">本文件适用于：</p>
			  <div class="au-bullet-list" style="margin-top:16px;">
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>已在阿根廷设立本地法人实体（S.A. / S.R.L.）的公司。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>员工由该本地实体直接雇佣，并受适用行业集体劳动协议（CCT）的约束。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>薪酬管理以遵守《第20.744号劳动合同法》（Ley de Contrato de Trabajo N&deg; 20.744）为基础。</span>
				</div>
			  </div>
	`,

	  'pg.argentina.s1.b2': `本框架说明企业如何在阿根廷完成薪酬设置、薪资计算、每月申报与缴款，以及年度合规管理。`,

	  'pg.argentina.s1.b3': `
			  <p class="au-mi-label">MARCO INSIGHT</p>
			  <p class="au-mi-text">阿根廷的薪酬管理深受行业集体劳动协议（Convenio Colectivo de Trabajo，CCT）影响。最低工资、奖金结构及福利可能因行业而存在较大差异。企业应首先确认适用的 CCT。</p>
	`,

	  'pg.argentina.s2.h': `薪酬设置`,

	  'pg.argentina.s2.sub': `如何在阿根廷建立合法合规的薪酬管理能力`,

	  'pg.argentina.s2.b1': `
			  <p class="au-table-title"><span class="au-table-num">i.</span> 法定社会保障登记（AFIP / ANSES）</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:16%"><col style="width:18%"><col style="width:14%"><col style="width:22%"><col style="width:30%"></colgroup>
				  <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>适用员工</th><th>实务说明</th></tr></thead>
				  <tbody>
					<tr><td>退休金（Jubilaci&oacute;n）</td><td>本地实体</td><td>是</td><td>所有正式员工</td><td>统一 SIPA 制度下的养老保险</td></tr>
					<tr><td>医疗保险（Obra Social）</td><td>本地实体</td><td>是</td><td>所有正式员工</td><td>通过行业工会分配的医疗保障</td></tr>
					<tr><td>PAMI</td><td>本地实体</td><td>是</td><td>所有正式员工</td><td>退休人员医疗基金</td></tr>
					<tr><td>家庭津贴（Asignaciones Familiares）</td><td>本地实体</td><td>是</td><td>所有正式员工</td><td>由 ANSES 管理的家庭津贴</td></tr>
					<tr><td>ART</td><td>本地实体</td><td>是</td><td>所有正式员工</td><td>工伤保险。雇主必须与 ART 服务提供商签订合同</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s2.b2': `
			  <p class="au-table-title"><span class="au-table-num">ii.</span> 税务登记（AFIP）</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:25%"><col style="width:25%"><col style="width:15%"><col style="width:35%"></colgroup>
				  <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>说明</th></tr></thead>
				  <tbody>
					<tr><td>雇主 CUIT</td><td>阿根廷本地实体</td><td>是</td><td>统一税务识别号码</td></tr>
					<tr><td>Ganancias 所得税预扣</td><td>本地实体</td><td>是</td><td>第四类所得税的每月预扣</td></tr>
					<tr><td>营业额税（Ingresos Brutos）</td><td>本地实体</td><td>是</td><td>由雇主承担的省级营业额税</td></tr>
					<tr><td>员工 CUIL</td><td>员工</td><td>是</td><td>必须在入职过程中提供</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s2.b3': `
			  <p class="au-table-title"><span class="au-table-num">iii.</span> 银行账户、工会及保险</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:30%"><col style="width:20%"><col style="width:50%"></colgroup>
				  <thead><tr><th>项目</th><th>是否强制</th><th>实务说明</th></tr></thead>
				  <tbody>
					<tr><td>薪资银行账户</td><td>是</td><td>阿根廷比索本地账户。薪资必须通过银行转账支付</td></tr>
					<tr><td>员工银行账户</td><td>是</td><td>Cuenta Sueldo 免费薪资账户。雇主应协助员工开设账户</td></tr>
					<tr><td>工会会费（Cuota Sindical）</td><td>取决于 CCT</td><td>从员工薪资中代扣并汇缴至工会</td></tr>
					<tr><td>ART 保险合同</td><td>是</td><td>必须与持牌 ART 服务提供商签订合同</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s3.h': `薪资计算`,

	  'pg.argentina.s3.sub': `薪资及员工法定权益的计算方式`,

	  'pg.argentina.s3.b1': `
			  <p class="au-table-title"><span class="au-table-num">i.</span> 薪资计算及按比例计算规则</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
				  <thead><tr><th>项目</th><th>规则</th></tr></thead>
				  <tbody>
					<tr><td>计薪基础</td><td>月薪（Sueldo Mensual）</td></tr>
					<tr><td>计薪周期</td><td>自然月</td></tr>
					<tr><td>按比例计算情形</td><td>入职月份、离职月份、无薪休假</td></tr>
					<tr><td>按比例计算基础</td><td>当月实际日历天数</td></tr>
					<tr><td>日薪计算</td><td>月薪 &divide; 当月日历天数，例如 28/30/31 天</td></tr>
					<tr><td>最低工资</td><td>SMVM（Salario M&iacute;nimo Vital y M&oacute;vil，最低生活及流动工资），经常调整</td></tr>
					<tr><td>小数处理</td><td>四舍五入至小数点后两位</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s3.b2': `
			  <p class="au-table-title">税前总薪酬（Remuneraci&oacute;n Bruta）包括：</p>
			  <div class="au-bullet-list" style="margin-top:12px;">
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>基本工资（Sueldo B&aacute;sico）+ CCT 约定的额外津贴（Adicionales）。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>常见额外项目：工龄津贴（Antig&uuml;edad）、全勤奖金（Presentismo）、交通津贴等。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>非应税项目（No Remunerativo）：部分 CCT 谈判结果会以非应税形式支付。</span>
				</div>
			  </div>
	`,

	  'pg.argentina.s3.b3': `
			  <p class="au-mi-label">MARCO INSIGHT</p>
			  <p class="au-mi-text">在阿根廷的高通胀环境下，最低工资（SMVM）及 CCT 工资标准会频繁调整，有时甚至每月调整。薪酬系统必须具备快速响应薪资调整的能力。</p>
	`,

	  'pg.argentina.s3.b4': `<span class="au-table-num">ii.</span> 法定休假及福利`,

	  'pg.argentina.s3.b5': `
			  <p class="au-table-subtitle">年假（Vacaciones）</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
				  <thead><tr><th>项目</th><th>规则</th></tr></thead>
				  <tbody>
					<tr><td>休假权益</td><td>服务年限 &lt;5 年：14 天；5&ndash;10 年：21 天；10&ndash;20 年：28 天；&gt;20 年：35 天（日历天）</td></tr>
					<tr><td>资格条件</td><td>员工必须在该年度工作超过一半时间，才能获得完整年假</td></tr>
					<tr><td>休假期间</td><td>由雇主安排，通常在 10 月 1 日至次年 4 月 30 日之间</td></tr>
					<tr><td>休假工资</td><td>日薪 &times; 1.25（Plus Vacacional，额外增加 25%）</td></tr>
					<tr><td>离职结算</td><td>按比例支付未使用年假 + 25% Plus Vacacional</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s3.b6': `
			  <p class="au-table-subtitle">年度奖金（Aguinaldo / SAC）</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
				  <thead><tr><th>项目</th><th>规则</th></tr></thead>
				  <tbody>
					<tr><td>全称</td><td>补充年度工资（Sueldo Anual Complementario，SAC）</td></tr>
					<tr><td>计算方法</td><td>半年期间内最高月薪的 50%</td></tr>
					<tr><td>支付频率</td><td>每年支付两次，分别于 6 月 30 日及 12 月 18 日前支付</td></tr>
					<tr><td>服务期不足半年</td><td>根据实际工作天数按比例计算</td></tr>
					<tr><td>离职结算</td><td>按比例计算并一次性支付</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s3.b7': `
			  <p class="au-table-subtitle">离职补偿（Indemnizaci&oacute;n）</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
				  <thead><tr><th>项目</th><th>规则</th></tr></thead>
				  <tbody>
					<tr><td>无正当理由解雇</td><td>每满一个完整服务年度 = 1 个月最佳应税月薪，最低为 1 个月薪资</td></tr>
					<tr><td>月薪上限</td><td>不得超过员工适用 CCT 规定的最高月工资标准的 67%</td></tr>
					<tr><td>代通知金</td><td>试用期内：15 天；服务年限 &lt;5 年的正式员工：1 个月；服务年限 &ge;5 年：2 个月</td></tr>
					<tr><td>未使用年假补偿</td><td>按比例计算的年假 + 25% Plus Vacacional</td></tr>
					<tr><td>SAC 比例</td><td>还必须支付与代通知金及补偿金相对应的 SAC 比例</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s3.b8': `
			  <p class="au-mi-label">MARCO INSIGHT</p>
			  <p class="au-mi-text">阿根廷的 SAC（Aguinaldo）按照半年期间内最高月薪的 50% 计算，而不是按照固定天数计算。员工离职时，还必须结算与代通知金相关的 SAC 比例，因此计算过程更加复杂。</p>
	`,

	  'pg.argentina.s3.b9': `
			  <p class="au-table-title"><span class="au-table-num">iii.</span> 法定缴费明细</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:28%"><col style="width:18%"><col style="width:18%"><col style="width:36%"></colgroup>
				  <thead><tr><th>项目</th><th>雇主</th><th>员工</th><th>说明</th></tr></thead>
				  <tbody>
					<tr><td>退休金（Jubilaci&oacute;n）</td><td>10.17%</td><td>11%</td><td>统一 SIPA 养老保险制度</td></tr>
					<tr><td>PAMI</td><td>1.5%</td><td>3%</td><td>退休人员医疗基金</td></tr>
					<tr><td>医疗保险（Obra Social）</td><td>6%</td><td>3%</td><td>行业工会医疗保障</td></tr>
					<tr><td>家庭津贴（Asignaciones Familiares）</td><td>4.44%</td><td>-</td><td>家庭津贴基金</td></tr>
					<tr><td>ART（工伤保险）</td><td>按合同确定</td><td>-</td><td>费率因行业及 ART 合同而异</td></tr>
					<tr><td>工会会费（Cuota Sindical）</td><td>-</td><td>2%&ndash;3%</td><td>取决于 CCT。雇主代表工会代扣</td></tr>
				  </tbody>
				</table>
			  </div>
			  <p class="au-section-sub">雇主合计（不含 ART）：约 24%；员工合计（不含工会会费）：约 17%</p>
	`,

	  'pg.argentina.s3.b10': `
			  <p class="au-table-title"><span class="au-table-num">iv.</span> 个人所得税计算</p>
			  <p class="au-section-sub">所得税（Impuesto a las Ganancias）&mdash; 第四类所得</p>
			  <div class="au-bullet-list">
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>累进税率：5%&ndash;35%。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>计税基础：每月应税收入 &minus; 社会保障扣款 &minus; 法定个人扣除额（Deducciones Personales）。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>预扣方式：根据 RG 4003（AFIP）规定按月预扣。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>免税门槛：低于特定水平的薪资可能完全免税；该门槛每年调整。</span>
				</div>
			  </div>
			  <p class="au-table-title" style="margin-top:16px;">简化计算逻辑：</p>
			  <div class="au-numbered-list" style="margin-top:12px;">
				<div class="au-numbered-item">
				  <span class="au-numbered-num">1.</span>
				  <span>每月税前总收入 &minus; 员工社会保障缴费部分 = 应税净收入。</span>
				</div>
				<div class="au-numbered-item">
				  <span class="au-numbered-num">2.</span>
				  <span>扣除非应税所得额（Ganancia No Imponible）+ 特别扣除额（Deducci&oacute;n Especial）+ 家庭扣除额。</span>
				</div>
				<div class="au-numbered-item">
				  <span class="au-numbered-num">3.</span>
				  <span>对累计应税金额应用年度累进税率表。</span>
				</div>
				<div class="au-numbered-item">
				  <span class="au-numbered-num">4.</span>
				  <span>扣除已缴税款，以确定当月的 ISR 预扣税额。</span>
				</div>
			  </div>
	`,

	  'pg.argentina.s3.b11': `
			  <p class="au-mi-label">MARCO INSIGHT</p>
			  <p class="au-mi-text">阿根廷 Ganancias 所得税采用年度累计计算方式（Acumulativo）。每月计算时必须累计全年收入及已缴税款。发放 SAC 的 6 月和 12 月通常会产生较高税额，因此应提前进行规划。</p>
	`,

	  'pg.argentina.s4.h': `薪酬处理及合规`,

	  'pg.argentina.s4.sub': `每月薪酬执行、申报、缴款及会计处理`,

	  'pg.argentina.s4.b1': `
			  <p class="au-table-title"><span class="au-table-num">i.</span> 薪资支付规则</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:25%"><col style="width:25%"><col style="width:50%"></colgroup>
				  <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
				  <tbody>
					<tr><td>支付频率</td><td>每月支付（部分行业每半月支付）</td><td>法定支付间隔不得超过 1 个月</td></tr>
					<tr><td>发薪日期</td><td>次月第 4 个工作日前</td><td>法定最迟期限</td></tr>
					<tr><td>支付方式</td><td>银行转账（强制）</td><td>通过 Cuenta Sueldo 支付。不允许使用现金支付</td></tr>
					<tr><td>工资单</td><td>工资收据（Recibo de Sueldo）</td><td>必须由双方签署并保存 10 年</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s4.b2': `
			  <p class="au-table-title"><span class="au-table-num">ii.</span> AFIP 每月申报（F931）</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:20%"><col style="width:18%"><col style="width:14%"><col style="width:20%"><col style="width:28%"></colgroup>
				  <thead><tr><th>项目</th><th>缴款方</th><th>频率</th><th>截止日期</th><th>实务说明</th></tr></thead>
				  <tbody>
					<tr><td>DDJJ F931</td><td>雇主</td><td>每月</td><td>根据 CUIT 最后一位数字而异</td><td>通过 AFIP 系统申报所有社会保障及税务项目</td></tr>
					<tr><td>ART 缴费</td><td>雇主</td><td>每月</td><td>与 F931 期限一致</td><td>根据 ART 合同缴纳的工伤保险费用</td></tr>
					<tr><td>工会会费代扣</td><td>由雇主代扣</td><td>每月</td><td>次月 15 日前</td><td>从员工薪资中扣除并汇缴至工会</td></tr>
				  </tbody>
				</table>
			  </div>
			  <p class="au-table-title">实务说明：</p>
			  <div class="au-bullet-list" style="margin-top:8px;">
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>F931 是阿根廷薪酬管理的核心申报表，涵盖社会保障 + Ganancias 所得税 + Obra Social 医疗保险 + ART 工伤保险信息。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>AFIP 根据雇主 CUIT 的最后一位数字确定申报截止日期。</span>
				</div>
				<div class="au-bullet-item">
				  <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
				  <span>逾期申报会产生利息及罚款。严重延误可能触发 AFIP 执法程序。</span>
				</div>
			  </div>
	`,

	  'pg.argentina.s4.b3': `
			  <p class="au-table-title"><span class="au-table-num">iii.</span> Ganancias 所得税每月预扣</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:25%"><col style="width:20%"><col style="width:15%"><col style="width:15%"><col style="width:25%"></colgroup>
				  <thead><tr><th>项目</th><th>缴款方</th><th>频率</th><th>截止日期</th><th>实务说明</th></tr></thead>
				  <tbody>
					<tr><td>Ganancias 所得税预扣</td><td>雇主</td><td>每月</td><td>与 F931 一并处理</td><td>通过 F931 一并申报及缴纳</td></tr>
					<tr><td>SIRADIG（员工端）</td><td>员工</td><td>按需要</td><td>-</td><td>员工通过该系统申报扣除项目</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s4.b4': `
			  <p class="au-table-title"><span class="au-table-num">iv.</span> 薪酬会计分录映射规则</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:55%"><col style="width:45%"></colgroup>
				  <thead><tr><th>项目</th><th>会计科目</th></tr></thead>
				  <tbody>
					<tr><td>税前总薪资 + SAC + 额外津贴（Adicionales）</td><td>薪酬费用</td></tr>
					<tr><td>雇主缴费（AFIP + ART）</td><td>薪酬费用</td></tr>
					<tr><td>员工扣款（社会保障 + Ganancias 所得税 + 工会会费）</td><td>薪酬负债</td></tr>
					<tr><td>实发薪资</td><td>现金 / 银行存款</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s4.b5': `
			  <p class="au-table-title"><span class="au-table-num">v.</span> 年度核算</p>
			  <div class="au-table-wrap">
				<table class="au-table">
				  <colgroup><col style="width:25%"><col style="width:22%"><col style="width:18%"><col style="width:35%"></colgroup>
				  <thead><tr><th>项目</th><th>负责方</th><th>截止日期</th><th>说明</th></tr></thead>
				  <tbody>
					<tr><td>Ganancias 所得税年度调整</td><td>雇主</td><td>次年 4 月</td><td>年度结算（Liquidaci&oacute;n Anual）。退还多缴税款或补收不足税款</td></tr>
					<tr><td>SAC 第一笔款项</td><td>雇主</td><td>6 月 30 日</td><td>上半年最高月薪 &times; 50%</td></tr>
					<tr><td>SAC 第二笔款项</td><td>雇主</td><td>12 月 18 日</td><td>下半年最高月薪 &times; 50%</td></tr>
					<tr><td>CCT 工资表更新</td><td>-</td><td>根据 CCT 谈判周期</td><td>行业最低工资通常每季度或每半年更新</td></tr>
					<tr><td>SMVM 更新</td><td>-</td><td>不定期</td><td>Consejo del Salario 发布决议后生效</td></tr>
				  </tbody>
				</table>
			  </div>
	`,

	  'pg.argentina.s4.b6': `
			  <p class="au-mi-label">MARCO INSIGHT</p>
			  <p class="au-mi-text">阿根廷的高通胀及频繁的 CCT / SMVM 工资调整，使薪酬合规管理极为复杂。企业应维护每月合规检查清单，并密切关注 AFIP、劳动主管部门及行业工会发布的最新通知。</p>
	`,
	};
