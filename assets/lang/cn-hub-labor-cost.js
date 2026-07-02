/* HR Knowledge Hub — Labor Cost Calculator (hr-knowledge-hub-labor-cost-calculator.html) */
window.MARCO_LANG_CN_HUB_LABOR_COST = {

  /* ── Hero ── */
  'lcc.hero.label':            '劳动力成本计算器',
  'lcc.hero.title.white1':     '计算雇佣的<br>',
  'lcc.hero.title.blue':       '真实成本',
  'lcc.hero.title.white2':     ' ',
  'lcc.hero.subtitle':         '通过综合薪资、法定缴款及其他必要雇佣义务，估算雇主的总成本。',

  /* ── Calculator section header ── */
  'lcc.section.label':         '劳动力成本计算器',
  'lcc.section.h2':            '您想在哪里招聘？',
  'lcc.section.subtitle':      '请在下方输入基本招聘信息，以生成预估方案。',

  /* ── Form: Country ── */
  'lcc.form.country.label':       '您想在哪里招聘？',
  'lcc.form.country.placeholder': '选择国家',
  'lcc.form.country.search':      '搜索国家…',

  /* ── Form: Worker Type ── */
  'lcc.form.workertype.label':          '员工类型',
  'lcc.form.workertype.local.title':    '本地/永久居民',
  'lcc.form.workertype.local.desc':     '公民或永久居民',
  'lcc.form.workertype.foreign.title':  '外籍人士',
  'lcc.form.workertype.foreign.desc':   '持有效工作准证或签证',

  /* ── Form: Salary ── */
  'lcc.form.salary.label':       '薪资',
  'lcc.form.salary.monthly':     '月薪',
  'lcc.form.salary.annual':      '年薪',
  'lcc.form.salary.placeholder': '输入金额',

  /* ── Form: Buttons ── */
  'lcc.form.btn.calculate': '查看报告',
  'lcc.form.btn.reset':     '重置',

  /* ── Salary hints (JS-generated; {0} = formatted amount) ── */
  'lcc.hint.annual':   '年等价：USD {0}',
  'lcc.hint.monthly':  '月等价：USD {0}',

  /* ── FX hints (JS-generated) ── */
  /* {0} = currency code, {1} = formatted local amount, {2} = date string */
  'lcc.hint.fx.samecurrency': 'USD 为计算货币',
  'lcc.hint.fx.loading':      '正在获取汇率…',
  'lcc.hint.fx.result':       '≈ {0} {1}（基于 {2} 的汇率）',
  'lcc.hint.fx.disclaimer':   '汇率仅供参考，实际薪资结算金额可能因银行汇率和处理日期而有所不同。',
  'lcc.hint.fx.error':        '此货币汇率暂不可用，请稍后再试。',
  'lcc.hint.fx.error2':       '汇率暂不可用，请稍后再试。',

  /* ── Result card (JS-generated) ── */
  'lcc.result.total.label':         '总雇佣成本',
  'lcc.result.total.per':           '/月',
  'lcc.result.contributions.rate':  '雇主缴款率',
  'lcc.result.bar.base':            '基本薪资',
  'lcc.result.bar.statutory':       '法定缴款',
  'lcc.result.bar.benefits':        '福利及其他费用',
  'lcc.result.bar.statutory.rate':  '法定缴款（{0}）',
  'lcc.result.bar.benefits.est':    '福利及其他费用（预估 {0}）',
  'lcc.result.bar.benefits.na':     '此国家不适用',
  'lcc.report.subtitle.mo':         '/月基本薪资',
  'lcc.report.subtitle.annual':     '/月基本薪资（换算自年薪）',
  'lcc.result.summary.monthly':     '月度成本',
  'lcc.result.summary.annual':      '年度成本',
  'lcc.result.summary.mratio':      '倍率',
  'lcc.result.summary.statrate':    '法定费率',

  /* ── Worker type labels used in result display ── */
  'lcc.workertype.local':   '本地/永久居民',
  'lcc.workertype.foreign': '外籍人士',

  /* ── Report section ── */
  'lcc.report.label':           '劳动力成本报告',
  'lcc.report.btn.download':    '下载报告',
  'lcc.report.btn.generating':  '生成中…',
  'lcc.report.statutory.title': '法定缴款明细',
  'lcc.report.benefits.title':  '福利及预估费用',

  /* ── Report summary cards (JS-generated) ── */
  'lcc.report.card.monthly.total':  '月度总成本',
  'lcc.report.card.per.month':      '每月',
  'lcc.report.card.annual.total':   '年度总成本',
  'lcc.report.card.per.year':       '每年',
  'lcc.report.card.monthly.stat':   '月度法定',
  'lcc.report.card.contributions':  '缴款',
  'lcc.report.card.annual.stat':    '年度法定',
  'lcc.report.card.mratio':         '倍率',
  'lcc.report.card.multiplier':     '成本倍率',
  'lcc.report.card.benefits':       '福利（预估）',
  'lcc.report.card.of.base':        '占基本薪资',

  /* ── Report table headers (JS-generated) ── */
  'lcc.table.header.item':    '缴款项目',
  'lcc.table.header.rate':    '费率',
  'lcc.table.header.monthly': '月度金额',
  'lcc.table.header.annual':  '年度金额',

  /* ── Report table: no-contribution empty state ── */
  'lcc.table.empty.name': '无强制性雇主法定缴款',
  'lcc.table.empty.note': '此国家的缴款义务极少或有条件',

  /* ── Report table: totals row ── */
  'lcc.table.total.statutory': '法定缴款合计',
  'lcc.table.total.benefits':  '福利合计（预估）',

  /* ── Disclaimer ── */
  'lcc.disclaimer': '* 费率基于公开可获取的法定法规，仅供估算参考。实际雇主成本因当地法规、薪资门槛、员工年龄、行业分类及适用的双边社会保障协议而有所不同。政府会定期更新费率——在做出雇佣决策前，请务必咨询Marco当地薪资专家。',

  /* ── CTA section ── */
  'lcc.cta.label':        '需要更多说明？',
  'lcc.cta.heading.dark': '数字只是开始。',
  'lcc.cta.heading.blue': '让我们深入探讨细节。',
  'lcc.cta.body':         '法定费率只反映了部分情况。门槛值、双边协议、签证分类和集体谈判规则都会影响您的实际成本。我们的薪资专家可为您的团队提供准确的国家具体费用明细。',
  'lcc.cta.btn':          '联系我们',

};
