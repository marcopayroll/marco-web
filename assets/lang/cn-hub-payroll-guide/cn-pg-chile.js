window.MARCO_LANG_CN_PG_CHILE = {

  /* ── Hero ── */
  'pg.chile.desc': '智利薪资完整操作指南 &mdash; 涵盖RUT税务登记、Previred社保缴费提交（AFP养老金 / Fonasa-Isapre医疗保险 / AFC失业保险）、UF和UTM通胀调整薪资上限、月度所得税代扣（Impuesto Único）、Gratificación法定利润分配，以及《劳动法》下的离职结算（Finiquito）。',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.chile.s1.h': '适用范围',

  'pg.chile.s1.b1': `
          <p class="au-table-title">本文件适用于：</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>已在智利设立本地法律实体的公司（SpA / Ltda. / S.A.）。</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>由本地实体直接雇用、适用《劳动法》（C&oacute;digo del Trabajo）的员工。</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>基于智利税法（Ley sobre Impuesto a la Renta）和社会保障法规（D.L. 3500养老金 / Ley 18.933医疗保险）的薪资合规。</span>
            </div>
          </div>
  `,

  'pg.chile.s1.b2': `本框架涵盖企业如何在智利完成薪资设置、工资计算、月度申报与缴款以及年度合规管理。`,

  'pg.chile.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">智利薪资以UF（Unidad de Fomento，通胀调整单位）作为核心计量标准。社保缴费上限、Gratificaci&oacute;n上限、税率起征点及其他法定限额均以UF值表示，而UF值每日浮动。截至2026年，Tope Imponible已调整为90 UF（养老金/医疗保险）和135.2 UF（失业保险）。薪资系统须根据当日UF值进行动态换算。</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.chile.s2.h': '薪资设置',
  'pg.chile.s2.sub': '如何在智利建立合法的薪资发放能力',

  'pg.chile.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 社会保障与税务登记（Previred · AFP · SII登记）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:18%"><col style="width:13%"><col style="width:44%"></colgroup>
              <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>RUT（税务登记号）</td><td>智利本地实体</td><td>是</td><td>在SII（Servicio de Impuestos Internos）注册</td></tr>
                <tr><td>Previred登记</td><td>智利本地实体</td><td>是</td><td>统一社保缴费平台；所有月度缴款均须通过此平台</td></tr>
                <tr><td>Direcci&oacute;n del Trabajo登记</td><td>智利本地实体</td><td>是</td><td>劳动部雇主登记；电子劳动合同备案</td></tr>
                <tr><td>员工RUT / RUN</td><td>员工</td><td>是</td><td>身份证号码；用于所有社保和税务申报</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> AFP与Isapre / Fonasa选择</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:18%"><col style="width:13%"><col style="width:44%"></colgroup>
              <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>AFP（养老基金）</td><td>员工自选</td><td>是</td><td>员工选择一家AFP（如Habitat/Cuprum/ProVida等）</td></tr>
                <tr><td>Fonasa（公共医疗保险）</td><td>员工自选</td><td>二选一</td><td>公共医疗保险；固定7%费率</td></tr>
                <tr><td>Isapre（私人医疗保险）</td><td>员工自选</td><td>二选一</td><td>私人医疗保险；&ge; 7%（可能更高）；方案可定制</td></tr>
                <tr><td>AFC（失业保险）</td><td>自动登记</td><td>是</td><td>通过AFC Chile自动登记</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资银行账户与合规</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:15%"><col style="width:55%"></colgroup>
              <thead><tr><th>项目</th><th>是否强制</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>薪资银行账户</td><td>是</td><td>本地CLP账户</td></tr>
                <tr><td>Liquidaci&oacute;n de Sueldo（工资单）</td><td>是</td><td>法定义务；须逐项列明所有 Haberes 和 Descuentos</td></tr>
                <tr><td>Reglamento Interno</td><td>是（&ge; 10名员工）</td><td>员工≥10人的公司须制定内部规章并向劳动部备案</td></tr>
                <tr><td>Comit&eacute; Paritario</td><td>是（&ge; 25名员工）</td><td>员工≥25人须成立劳资联合安全委员会</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.chile.s3.h': '薪资计算',
  'pg.chile.s3.sub': '工资和员工权益的计算方式',

  'pg.chile.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 工资、最低工资与工时</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:72%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th></tr></thead>
              <tbody>
                <tr><td>支付方式</td><td>月薪（Sueldo Mensual）为主要方式</td></tr>
                <tr><td>支付周期</td><td>日历月；最多每月一次</td></tr>
                <tr><td>法定工时</td><td>每周45小时（劳动改革后，将逐步降至2028年的40小时）</td></tr>
                <tr><td>加班（Horas Extras）</td><td>时薪 &times; 1.5（+50%）；需书面协议且每天最多2小时</td></tr>
                <tr><td>Ingreso M&iacute;nimo Mensual</td><td>CLP $500,000/月（2024年）；关注年度调整</td></tr>
                <tr><td>Gratificaci&oacute;n Legal</td><td>法定利润分配：第50条方式每月支付月薪的25%，或第47条方式支付年度应税利润的30%（每人每年上限4.75 IMM）</td></tr>
                <tr><td>小数处理</td><td>四舍五入至CLP $1（智利比索无小数位）</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 休假权益（Feriado Anual与法定假期）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:72%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th></tr></thead>
              <tbody>
                <tr><td>年假（Feriado Anual）</td><td>服务满1年后：15个工作日（连续休假，其中包含周六）</td></tr>
                <tr><td>Feriado Progresivo</td><td>每工作满3年+1天（同一或不同雇主均可）；从第13年起适用</td></tr>
                <tr><td>年假累积</td><td>最多累积2年未休年假</td></tr>
                <tr><td>法定假日（Feriados）</td><td>每年16天（含 Fiestas Patrias 国庆节、圣诞节等）</td></tr>
                <tr><td>病假（Licencia M&eacute;dica）</td><td>前3天无薪（Carencia）；第4天起由Fonasa/Isapre支付 Subsidio</td></tr>
                <tr><td>产假（Pre/Postnatal）</td><td>产前6周 + 产后12周 = 18周 + Postnatal Parental 12/18周</td></tr>
                <tr><td>陪产假</td><td>5天带薪</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Mid-section insight after Leave table */
  'pg.chile.s3.b2-insight': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">智利年假为15个工作日，但采用"连续休假"制度，其中周六也计为休假日（即使无需上班），因此实际日历时间约为3周。雇主须在员工服务满1年后批准年假，但可以拆分（至少一个时段≥10个连续天）。未休年假最多累积2年；超过后雇主面临处罚风险。</p>
  `,

  'pg.chile.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 社会保障缴费（Cotizaciones Previsionales）- 2026年1月起</p>
          <p class="au-bold-label">Remuneración Imponible（应税报酬）定义：</p>
          <div class="au-bullet-list" style="margin-top:16px; margin-bottom:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>应税报酬 = 固定工资 + 奖金 + 佣金 + 其他应税津贴</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>月度上限：Tope Imponible（随UF值浮动）</span>
            </div>
          </div>
          <p class="au-bold-label">员工社保代扣项：</p>
          <div class="au-table-wrap" style="margin-top:12px;">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:18%"><col style="width:54%"></colgroup>
              <thead><tr><th>项目</th><th>税率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>AFP（养老基金）</td><td>约11.5%&ndash;12.5%</td><td>10%强制储蓄 + AFP管理费（因AFP而异，约1.5%至2.5%）</td></tr>
                <tr><td>Salud（医疗保险）</td><td>7%</td><td>Fonasa或Isapre（Isapre可能 &gt; 7%；差额由员工承担）</td></tr>
                <tr><td>AFC员工部分</td><td>0.6%</td><td>失业保险员工缴费（无固定期限合同）</td></tr>
                <tr><td>Tope AFP / Salud</td><td colspan="2">2026年起为90 UF/月</td></tr>
                <tr><td>Tope AFC</td><td colspan="2">2026年起为135.2 UF/月</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-bold-label" style="margin-top:24px;">雇主社保缴费项：</p>
          <div class="au-table-wrap" style="margin-top:12px;">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:18%"><col style="width:54%"></colgroup>
              <thead><tr><th>项目</th><th>税率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>AFC雇主部分</td><td>2.4%</td><td>失业保险雇主缴费（无固定期限合同）</td></tr>
                <tr><td>AFC（固定期限合同）</td><td>3%</td><td>固定期限合同由雇主全额承担（员工不缴费）</td></tr>
                <tr><td>SIS（工伤/遗属保险）</td><td>1.54%</td><td>2026年1月起调整为1.54%；雇主承担</td></tr>
                <tr><td>Mutual（职业保险）</td><td>0.95% + 附加</td><td>基础0.95% + 行业附加（0%至3.4%）；雇主承担</td></tr>
                <tr><td>SANNA（严重儿童疾病保险）</td><td>0.03%</td><td>Ley 21.063；雇主承担</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Mid-section insight after Social Security table */
  'pg.chile.s3.b3-insight': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">自2026年起，Tope Imponible从81.6 UF提高至90 UF（AFP/医疗保险）和135.2 UF（AFC失业保险）；SIS费率从1.53%调整为1.54%。UF值每日浮动（2026年初约为CLP $38,800）；薪资须按发薪月最后一天的UF值换算月度Tope。智利养老金改革（Reforma Previsional）仍在推进中，额外的雇主缴费可能将逐步引入。</p>
  `,

  'pg.chile.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 个人所得税（Impuesto &Uacute;nico de Segunda Categor&iacute;a）- 月度所得税代扣</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:12%"><col style="width:58%"></colgroup>
              <thead><tr><th>月应税收入 (UTM)</th><th>税率</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>&le; 13.5 UTM</td><td>免税</td><td>约CLP $930,000/月及以下免税</td></tr>
                <tr><td>13.5 &ndash; 30 UTM</td><td>4%</td><td>&mdash;</td></tr>
                <tr><td>30 &ndash; 50 UTM</td><td>8%</td><td>&mdash;</td></tr>
                <tr><td>50 &ndash; 70 UTM</td><td>13.5%</td><td>&mdash;</td></tr>
                <tr><td>70 &ndash; 90 UTM</td><td>23%</td><td>&mdash;</td></tr>
                <tr><td>90 &ndash; 120 UTM</td><td>30.4%</td><td>&mdash;</td></tr>
                <tr><td>&gt; 120 UTM</td><td>35%</td><td>最高边际税率（2024年起从40%降低）</td></tr>
              </tbody>
            </table>
          </div>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>应税收入 = Remuneración Imponible - AFP - Salud（在法定扣除后计算）</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>UTM（Unidad Tributaria Mensual，月税务单位）由SII按月公布；薪资须引用当月UTM值</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>雇主按月代扣（Retención）；无年度汇算 &mdash; 员工如有需要可自行申请退税</span>
            </div>
          </div>
  `,

  'pg.chile.s3.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Gratificación Legal（法定利润分配义务）</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:72%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th></tr></thead>
              <tbody>
                <tr><td>第47条方式</td><td>年度应税利润 &times; 30%，按工资比例分配给员工（每人每年上限4.75 IMM）</td></tr>
                <tr><td>第50条方式（最常用）</td><td>每月支付月薪 &times; 25%，不论公司是否盈利（雇主保底）</td></tr>
                <tr><td>月度上限</td><td>第50条月度上限 = 4.75 IMM &divide; 12（约CLP $198,000/月）</td></tr>
                <tr><td>社保处理</td><td>Gratificación计入Remuneración Imponible，须缴纳社保和税款</td></tr>
              </tbody>
            </table>
          </div>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>绝大多数雇主选择第50条方式（25%月度保底），因其可预测且不依赖年度利润。</span>
            </div>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.chile.s4.h': '薪资处理与合规',
  'pg.chile.s4.sub': '月度执行、申报与缴款及会计处理',

  'pg.chile.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> 薪资发放规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:40%"><col style="width:38%"></colgroup>
              <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>发放频率</td><td>按月</td><td>最多每月一次；可约定月中预支</td></tr>
                <tr><td>支付方式</td><td>银行转账</td><td>Transferencia Bancaria至员工账户</td></tr>
                <tr><td>Liquidaci&oacute;n de Sueldo</td><td>法定义务</td><td>须逐项列明Haberes（收入项）和Descuentos（扣除项）</td></tr>
                <tr><td>记录保存</td><td>5年</td><td>劳动法和税法要求</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> 月度申报与缴款 - Previred</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18%"><col style="width:13%"><col style="width:13%"><col style="width:24%"><col style="width:32%"></colgroup>
              <thead><tr><th>申报项目</th><th>责任方</th><th>频率</th><th>截止日期</th><th>操作说明</th></tr></thead>
              <tbody>
                <tr><td>Previred社保缴款</td><td>雇主</td><td>按月</td><td>次月10日至13日</td><td>合并提交：AFP + 医疗保险 + AFC + SIS + Mutual，均通过Previred</td></tr>
                <tr><td>F29（所得税）</td><td>雇主</td><td>按月</td><td>次月12日</td><td>向SII提交并缴纳月度代扣所得税（Impuesto &Uacute;nico）</td></tr>
                <tr><td>Libro de Remuneraciones</td><td>雇主</td><td>按月</td><td>&mdash;</td><td>电子薪资登记簿；须按月更新</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-bold-label" style="margin-top:16px;">Previred核心说明：</p>
          <div class="au-bullet-list" style="margin-top:12px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Previred是智利统一的社保缴费平台，整合了AFP + Salud + AFC + SIS + Mutual + SANNA的缴款</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>逾期缴款将产生利息和罚款；雇主对未缴社保承担个人责任</span>
            </div>
          </div>
  `,

  'pg.chile.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资日记账映射规则</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>项目</th><th>科目</th></tr></thead>
              <tbody>
                <tr><td>Sueldo Bruto + Gratificaci&oacute;n</td><td>&rarr; Gasto de Remuneraciones（费用）</td></tr>
                <tr><td>雇主AFC + SIS + Mutual + SANNA</td><td>&rarr; Gasto de Remuneraciones（费用）</td></tr>
                <tr><td>员工AFP + Salud + AFC + Impuesto</td><td>&rarr; Retenciones por Pagar（负债）</td></tr>
                <tr><td>Sueldo L&iacute;quido（实发工资）</td><td>&rarr; Banco</td></tr>
                <tr><td>Provisi&oacute;n Indemnizaci&oacute;n</td><td>&rarr; Provisiones（准备金）</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.chile.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> 年度合规与离职</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:22%"><col style="width:16%"><col style="width:22%"><col style="width:40%"></colgroup>
              <thead><tr><th>项目</th><th>责任方</th><th>截止日期</th><th>说明</th></tr></thead>
              <tbody>
                <tr><td>DJ1887（年度薪资申报）</td><td>雇主</td><td>次年3月</td><td>向SII提交年度员工薪资及代扣汇总</td></tr>
                <tr><td>Certificado de Sueldos</td><td>雇主</td><td>次年3月</td><td>向每位员工提供年度收入证明</td></tr>
                <tr><td>Ingreso M&iacute;nimo更新</td><td>&mdash;</td><td>通常每年3月至5月</td><td>最低工资年度调整</td></tr>
                <tr><td>UF / UTM更新</td><td>&mdash;</td><td>每日/每月</td><td>UF每日浮动；UTM由SII按月公布</td></tr>
                <tr><td>Tope Imponible更新</td><td>&mdash;</td><td>按政策调整</td><td>2026年起：90 UF / 135.2 UF</td></tr>
              </tbody>
            </table>
          </div>
          <div class="au-table-group" style="margin-top:24px;">
            <p class="au-table-title">离职结算（Finiquito）：</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:25%"><col style="width:75%"></colgroup>
                <thead><tr><th>项目</th><th>规则</th></tr></thead>
                <tbody>
                  <tr><td>通知期（Aviso Previo）</td><td>30天书面通知；未提供通知须支付1个月代通知金</td></tr>
                  <tr><td>Indemnización por Años de Servicio</td><td>每满1年工龄支付1个月工资（上限11年 = 11个月）；月薪上限90 UF</td></tr>
                  <tr><td>适用情形</td><td>因经营需要解雇时强制适用（第161条）；其他情形视合同条款而定</td></tr>
                  <tr><td>未休年假折现</td><td>未休Feriado Anual须全额支付（Feriado Proporcional）</td></tr>
                  <tr><td>Finiquito执行</td><td>须在公证处或劳动监察机构（Inspección del Trabajo）办理；须在10个工作日内完成支付</td></tr>
                </tbody>
              </table>
            </div>
          </div>
  `,

  'pg.chile.s4.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">智利Indemnizaci&oacute;n（遣散补偿）的月薪上限自2026年起同样为90 UF，即遣散计算基数上限为90 UF。对于高薪员工，实际遣散金额可能低于月薪 &times; 工龄年数。Finiquito（离职结算文件）须在公证处或劳动监察机构（Inspecci&oacute;n del Trabajo）办理方为有效；否则雇主面临双倍支付的风险。</p>
  `,

};
