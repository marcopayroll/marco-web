/* Payroll Guide — Brazil page content (hr-knowledge-hub-payroll-guide-brazil.html) */
/* Empty values fall back to English. Fill in translations. */
window.MARCO_LANG_CN_PG_BRAZIL = {

  /* ── Hero ── */
  'pg.brazil.desc': `巴西薪资合规完整操作指南 - CLT实体设立、INSS与FGTS登记、eSocial实时申报、含2026年 Redutor Adicional 的累进税率表、13º Salário、Férias 1/3、员工休假权益及所有月度和年度申报要求。`,

  /* ── TOC ── */
  'pg.brazil.toc.scope':      `适用范围`,
  'pg.brazil.toc.setup':      `薪资设置`,
  'pg.brazil.toc.calculation':`薪资计算`,
  'pg.brazil.toc.processing': `薪资处理与合规`,

  /* ══════════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════════ */
  'pg.brazil.s1.h':   `适用范围`,
  'pg.brazil.s1.sub': `适用范围 · CLT · INSS · FGTS`,

  'pg.brazil.s1.b1': `
          <p class="article-p"><strong>本文件适用于：</strong></p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>已在巴西设立本地法律实体的公司（Ltda. / S.A.）</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>由本地实体直接雇用、适用《劳动法》（CLT - Consolidação das Leis do Trabalho）的员工</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>基于巴西联邦税法、INSS（社会保障）和FGTS（解雇赔偿基金）的薪资合规</span>
            </div>
          </div>
`,

  'pg.brazil.s1.b2': `<p class="article-p"><strong>本框架涵盖：</strong>企业如何在巴西完成薪资设置、工资计算、月度申报与缴款以及年度合规管理。</p>`,

  'pg.brazil.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">巴西薪资以雇主成本极高而闻名。包括 INSS + FGTS + 13º Salário + Férias 1/3 + Sistema S 在内的法定负担可使雇主总成本达到毛工资的70%-100%。自2026年起，IRRF引入 Redutor Adicional 机制：月收入≤R$5,000的员工实际免税，月收入在R$5,000至R$7,350之间的员工享受递减减免。薪资计算逻辑须相应更新。</p>
`,

  /* ══════════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════════ */
  'pg.brazil.s2.h':   `薪资设置`,
  'pg.brazil.s2.sub': `如何在巴西建立合法的薪资发放能力`,

  'pg.brazil.s2.b1': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">i.</span> 社会保障与基金登记（INSS · FGTS 登记）</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:25%"><col style="width:22%"><col style="width:13%"><col style="width:40%"></colgroup>
                <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>操作说明</th></tr></thead>
                <tbody>
                  <tr><td>CNPJ（公司注册号）</td><td>巴西本地实体</td><td>是</td><td>由 Receita Federal 签发；用于所有税务和社保申报</td></tr>
                  <tr><td>INSS 雇主登记</td><td>巴西本地实体</td><td>是</td><td>获得CNPJ后自动登记为INSS缴费义务人</td></tr>
                  <tr><td>FGTS 登记</td><td>巴西本地实体</td><td>是</td><td>通过 Conectividade Social / eSocial 登记</td></tr>
                  <tr><td>CEI / CAEPF</td><td>巴西本地实体</td><td>视情况而定</td><td>建筑工地或特定活动需额外登记</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s2.b2': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">ii.</span> 税务与 eSocial 登记</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:25%"><col style="width:22%"><col style="width:13%"><col style="width:40%"></colgroup>
                <thead><tr><th>项目</th><th>账户持有人</th><th>是否强制</th><th>说明</th></tr></thead>
                <tbody>
                  <tr><td>eSocial 访问权限</td><td>巴西本地实体</td><td>是</td><td>统一数字平台：劳动 + 社保 + 税务申报</td></tr>
                  <tr><td>IRRF 代扣义务</td><td>巴西本地实体</td><td>是</td><td>雇主作为所得税代扣代缴义务人</td></tr>
                  <tr><td>员工 CPF</td><td>员工</td><td>是</td><td>Cadastro de Pessoa Física（11位数字）；用于所有申报</td></tr>
                  <tr><td>CTPS（工作证）</td><td>员工</td><td>是</td><td>Carteira de Trabalho e Previdência Social；现为电子版</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s2.b3': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资银行账户与合规</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:30%"><col style="width:15%"><col style="width:55%"></colgroup>
                <thead><tr><th>项目</th><th>是否强制</th><th>操作说明</th></tr></thead>
                <tbody>
                  <tr><td>薪资银行账户</td><td>是</td><td>本地BRL账户</td></tr>
                  <tr><td>Holerite / Contracheque（工资单）</td><td>是</td><td>法定义务；须逐项列明所有收入和扣除项目</td></tr>
                  <tr><td>Livro de Registro</td><td>是</td><td>员工登记簿；现已通过 eSocial 数字化</td></tr>
                  <tr><td>ASO（职业健康检查）</td><td>是</td><td>入职、定期及离职体检均为法定要求</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  /* ══════════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════════ */
  'pg.brazil.s3.h':   `薪资计算`,
  'pg.brazil.s3.sub': `工资和员工权益的计算方式`,

  'pg.brazil.s3.b1': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">i.</span> 工资计算与工时</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>项目</th><th>规则</th></tr></thead>
                <tbody>
                  <tr><td>支付方式</td><td>月薪（Salário Mensal）为主要方式</td></tr>
                  <tr><td>支付周期</td><td>日历月；月薪按30天计算（法定标准月 = 30天）</td></tr>
                  <tr><td>法定工时</td><td>每天8小时，每周44小时（CLT第58条）</td></tr>
                  <tr><td>加班（Hora Extra）</td><td>工作日：+50%（最低）；周日/节假日：+100%</td></tr>
                  <tr><td>夜班津贴（Adicional Noturno）</td><td>22:00-05:00：+20%；1个夜班小时 = 52分30秒</td></tr>
                  <tr><td>Salário Mínimo（最低工资）</td><td>R$1,630/月（2026年联邦标准）；各州可设定更高标准</td></tr>
                  <tr><td>小数处理</td><td>四舍五入至2位小数（BRL Centavos）</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b2': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">ii.</span> 休假权益（Férias 与法定假期）</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>项目</th><th>规则</th></tr></thead>
                <tbody>
                  <tr><td>年假（Férias）</td><td>服务满12个月后：30个日历天</td></tr>
                  <tr><td>Terço de Férias（假期1/3奖金）</td><td>额外支付年假工资的1/3（法定强制）</td></tr>
                  <tr><td>年假拆分</td><td>可拆分为最多3个时段（1个时段≥14天，其余时段各≥5天）</td></tr>
                  <tr><td>Abono Pecuniário</td><td>员工可申请将最多1/3年假（10天）折算为现金</td></tr>
                  <tr><td>公共假日</td><td>每年约12-14天（联邦 + 州 + 市级假日合计）</td></tr>
                  <tr><td>产假（Licença-Maternidade）</td><td>120天（由INSS支付）；Empresa Cidadã 企业可延长至180天</td></tr>
                  <tr><td>陪产假（Licença-Paternidade）</td><td>5天（CLT）；Empresa Cidadã 可延长至20天</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Terço de Férias（假期1/3奖金）是巴西特有的法定义务。员工休假时，除正常工资外还需额外支付月薪的1/3作为假期奖金。这意味着30天年假的实际雇主成本 = 月薪 × 4/3。假期工资和1/3奖金须在休假开始前至少2天支付；逾期支付需双倍赔偿。</p>
`,

  'pg.brazil.s3.b4': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iii.</span> INSS 社会保障缴费（Instituto Nacional do Seguro Social）</p>
            <p class="article-p"><strong>员工INSS缴费（累进税率，2026年）：</strong></p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
                <thead><tr><th>月工资区间</th><th>税率</th><th>说明</th></tr></thead>
                <tbody>
                  <tr><td>≤ R$1,621.00</td><td>7.5%</td><td>最低工资档</td></tr>
                  <tr><td>R$1,621.01 - R$2,902.84</td><td>9%</td><td>累进计算（非全额适用）</td></tr>
                  <tr><td>R$2,902.85 - R$4,354.27</td><td>12%</td><td>累进计算</td></tr>
                  <tr><td>R$4,354.28 - R$8,475.55</td><td>14%</td><td>封顶档；超出部分不缴费</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b5': `
          <div class="au-table-group">
            <p class="article-p" style="margin-top:24px;"><strong>雇主INSS及附加缴费：</strong></p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
                <thead><tr><th>项目</th><th>税率</th><th>说明</th></tr></thead>
                <tbody>
                  <tr><td>INSS Patronal（雇主社保）</td><td>20%</td><td>基于薪资总额，无上限</td></tr>
                  <tr><td>RAT / SAT（职业风险）</td><td>1%-3%</td><td>按行业风险等级（轻度/中度/重度）</td></tr>
                  <tr><td>FAP 调整系数</td><td>×0.5-2.0</td><td>根据企业实际工伤记录调整RAT税率</td></tr>
                  <tr><td>Sistema S（第三方机构）</td><td>约5.8%</td><td>SESI/SENAI/SESC/SENAC等行业培训和社会机构</td></tr>
                  <tr><td>Salário-Educação</td><td>2.5%</td><td>教育基金，基于薪资总额</td></tr>
                  <tr><td>INCRA</td><td>0.2%</td><td>农业改革基金</td></tr>
                </tbody>
              </table>
            </div>
            <p class="article-p" style="margin-top:16px;">雇主总负担约为27%-29%（INSS Patronal 20% + RAT 1-3% + Sistema S 约5.8% + Salário-Educação 2.5%），无缴费上限。</p>
          </div>
`,

  'pg.brazil.s3.b6': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iv.</span> FGTS（解雇赔偿基金）- Fundo de Garantia do Tempo de Serviço</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>项目</th><th>规则</th></tr></thead>
                <tbody>
                  <tr><td>雇主缴费</td><td>月薪 × 8%，存入员工的FGTS个人账户（Caixa Econômica Federal）</td></tr>
                  <tr><td>缴费基数</td><td>所有报酬（含加班费、夜班津贴、13º Salário等），无上限</td></tr>
                  <tr><td>员工提取条件</td><td>无故解雇、退休、购房、重大疾病及其他法定情形</td></tr>
                  <tr><td>Multa 40%（解雇罚金）</td><td>无故解雇时，雇主须支付累计FGTS余额40%的罚金</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b7': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">FGTS 8%是雇主的月度法定义务，但真正的成本冲击来自解雇时的40%罚金，该罚金按员工任职期间累计的FGTS余额计算。例如，一名月薪R$10,000、工作5年的员工，累计FGTS约为R$48,000，解雇罚金为R$19,200。企业须在账簿上按月计提 Provisão de FGTS 40% 准备金。</p>
`,

  'pg.brazil.s3.b8': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">v.</span> 个人所得税（IRRF）- Imposto de Renda Retido na Fonte - 2026年新规</p>
            <p class="article-p"><strong>IRRF累进税率表（基础税率表不变）：</strong></p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:15%"><col style="width:50%"></colgroup>
                <thead><tr><th>月应税收入</th><th>税率</th><th>速算扣除数</th></tr></thead>
                <tbody>
                  <tr><td>≤ R$2,428.80</td><td>免税</td><td>—</td></tr>
                  <tr><td>R$2,428.81 - R$2,826.65</td><td>7.5%</td><td>R$182.16</td></tr>
                  <tr><td>R$2,826.66 - R$3,751.05</td><td>15%</td><td>R$394.16</td></tr>
                  <tr><td>R$3,751.06 - R$4,664.68</td><td>22.5%</td><td>R$675.49</td></tr>
                  <tr><td>&gt; R$4,664.68</td><td>27.5%</td><td>R$908.73</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s3.b9': `
          <div class="au-table-group">
            <p class="article-p" style="margin-top:24px;"><strong>2026年新增 Redutor Adicional（附加减免机制，Lei 15.270/2025）：</strong></p>
            <div class="au-bullet-list" style="margin-top:16px;">
              <div class="au-bullet-item">
                <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
                <span>月收入≤R$5,000：按基础税率表计算后，全额减免至零，实际免税。</span>
              </div>
              <div class="au-bullet-item">
                <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
                <span>月收入R$5,000.01 - R$7,350：适用递减减免（Redução Decrescente）；收入越接近R$7,350，减免金额越小。</span>
              </div>
              <div class="au-bullet-item">
                <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
                <span>月收入 &gt; R$7,350：无附加减免；仅适用基础累进税率表。</span>
              </div>
            </div>
            <p class="article-p" style="margin-top:16px;">应税收入 = 毛工资 - 员工INSS缴费 - 被抚养人扣除（R$189.59/人/月）或简化扣除（R$607.20），取较高者。</p>
          </div>
`,

  'pg.brazil.s3.b10': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">vi.</span> 13º Salário（第13个月工资）- 圣诞奖金 - 强制</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>项目</th><th>规则</th></tr></thead>
                <tbody>
                  <tr><td>金额</td><td>年度月薪 ÷ 12 × 已工作月数（按比例计算）</td></tr>
                  <tr><td>第一期（Adiantamento）</td><td>50%于2月至11月30日之间支付（通常在11月）</td></tr>
                  <tr><td>第二期（Parcela Final）</td><td>余额于12月20日前支付（扣除INSS + IRRF + FGTS后）</td></tr>
                  <tr><td>FGTS</td><td>每期13º均须缴纳8%的FGTS</td></tr>
                  <tr><td>税务处理</td><td>INSS和IRRF在第二期支付时统一计算（独立于月薪计算）</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  /* ══════════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════════ */
  'pg.brazil.s4.h':   `薪资处理与合规`,
  'pg.brazil.s4.sub': `月度执行、申报与缴款及会计处理`,

  'pg.brazil.s4.b1': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">i.</span> 薪资发放规则</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:25%"><col style="width:35%"><col style="width:40%"></colgroup>
                <thead><tr><th>项目</th><th>规则</th><th>说明</th></tr></thead>
                <tbody>
                  <tr><td>发放频率</td><td>按月</td><td>最迟须在次月第5个工作日（Dia Útil）前支付</td></tr>
                  <tr><td>Adiantamento（预支工资）</td><td>常见但非强制</td><td>通常在月中支付40%-50%，受 Convenção Coletiva 约束</td></tr>
                  <tr><td>支付方式</td><td>银行转账</td><td>Transferência Bancária 至员工账户</td></tr>
                  <tr><td>Holerite（工资单）</td><td>法定义务</td><td>须逐项列明所有 Proventos 和 Descontos</td></tr>
                  <tr><td>记录保存</td><td>5-30年</td><td>税务记录：5年；劳动/FGTS相关：最长30年</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s4.b2': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">ii.</span> 月度申报与缴款（eSocial 与 DCTFWeb）</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:18%"><col style="width:14%"><col style="width:14%"><col style="width:18%"><col style="width:36%"></colgroup>
                <thead><tr><th>项目</th><th>缴款方</th><th>频率</th><th>截止日期</th><th>操作说明</th></tr></thead>
                <tbody>
                  <tr><td>eSocial 事件申报</td><td>雇主</td><td>按月</td><td>次月15日</td><td>通过统一平台提交薪资、入职/离职及社保事件</td></tr>
                  <tr><td>DCTFWeb (INSS)</td><td>雇主</td><td>按月</td><td>次月15日</td><td>基于eSocial数据生成DARF缴款单</td></tr>
                  <tr><td>FGTS (FGTS Digital)</td><td>雇主</td><td>按月</td><td>次月20日</td><td>通过FGTS Digital向Caixa缴纳8%</td></tr>
                  <tr><td>IRRF（所得税）</td><td>雇主</td><td>按月</td><td>次月20日</td><td>通过DARF缴纳代扣所得税</td></tr>
                </tbody>
              </table>
            </div>
            <p class="article-p" style="margin-top:16px;">eSocial 整合了劳动部 / INSS / Receita Federal / FGTS 的数据。入职、薪资、离职等事件须实时或按月提交。</p>
          </div>
`,

  'pg.brazil.s4.b3': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iii.</span> 薪资日记账映射规则</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:50%"><col style="width:50%"></colgroup>
                <thead><tr><th>项目</th><th>科目</th></tr></thead>
                <tbody>
                  <tr><td>Salário Bruto + 13º + Férias 1/3</td><td>→ Despesa com Pessoal（费用）</td></tr>
                  <tr><td>INSS Patronal（约28%）+ FGTS（8%）</td><td>→ Despesa com Pessoal（费用）</td></tr>
                  <tr><td>Provisão FGTS Multa 40%</td><td>→ Despesa com Pessoal（费用）</td></tr>
                  <tr><td>INSS Empregado + IRRF</td><td>→ Obrigações Sociais（负债）</td></tr>
                  <tr><td>Salário Líquido（实发工资）</td><td>→ Caixa / Banco</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s4.b4': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">iv.</span> 年度合规</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:22%"><col style="width:18%"><col style="width:22%"><col style="width:38%"></colgroup>
                <thead><tr><th>项目</th><th>责任方</th><th>截止日期</th><th>说明</th></tr></thead>
                <tbody>
                  <tr><td>DIRF（年度代扣税申报表）</td><td>雇主</td><td>次年2月底</td><td>正逐步被 EFD-Reinf / eSocial 取代</td></tr>
                  <tr><td>Informe de Rendimentos</td><td>雇主</td><td>次年2月底</td><td>向每位员工提供的年度收入证明</td></tr>
                  <tr><td>RAIS / eSocial 替代</td><td>雇主</td><td>次年3月</td><td>年度社会信息报告；现已整合至eSocial</td></tr>
                  <tr><td>13º Salário</td><td>雇主</td><td>11月底 / 12月20日</td><td>按法律要求分两期支付第13个月工资</td></tr>
                  <tr><td>Salário Mínimo 更新</td><td>—</td><td>每年1月1日</td><td>联邦最低工资年度调整</td></tr>
                  <tr><td>Convenção Coletiva 更新</td><td>—</td><td>因行业而异</td><td>行业集体协议年度续签；可能调整薪资基准</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s4.b5': `
          <div class="au-table-group">
            <p class="au-table-title"><span class="au-table-num">v.</span> 离职结算（Rescisão）</p>
            <div class="au-table-wrap">
              <table class="au-table">
                <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
                <thead><tr><th>项目</th><th>规则</th></tr></thead>
                <tbody>
                  <tr><td>Aviso Prévio（通知期）</td><td>30天 + 每工作满1年额外3天（上限90天）</td></tr>
                  <tr><td>FGTS Multa 40%</td><td>无故解雇：按累计FGTS余额的40%支付罚金</td></tr>
                  <tr><td>13º Proporcional</td><td>按当年已工作月数按比例计算的13º Salário</td></tr>
                  <tr><td>Férias Proporcionais + 1/3</td><td>未休年假 + 按比例年假 + 1/3奖金，全部折现支付</td></tr>
                  <tr><td>Saldo de Salário</td><td>当月已工作天数的工资</td></tr>
                  <tr><td>结算期限</td><td>须在离职后10天内完成全部结算款支付</td></tr>
                </tbody>
              </table>
            </div>
          </div>
`,

  'pg.brazil.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">巴西的离职成本在全球名列前茅。无故解雇须支付：通知期工资（最长90天）+ FGTS 40%罚金 + 按比例13º Salário + 未休及按比例年假（含1/3奖金）+ 当月工资余额。例如，一名月薪R$10,000、工龄5年的员工，一次性结算金额可达R$50,000至R$80,000。企业须按月计提离职准备金。</p>
          </div>
`,

};
