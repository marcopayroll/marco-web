window.MARCO_LANG_EN_PG_COTE_D_IVOIRE = {

  /* ── Hero ── */
  'pg.cote-d-ivoire.desc': 'Complete operational guide to Côte d\'Ivoire payroll &mdash; covering CEPICI entity setup, DGI tax registration, CNPS employer registration, ITS + CN monthly withholding (0%-32% progressive), CNPS pension contributions (14% combined), family allowance (5.75% employer), occupational injury insurance (2%-5%), CMU universal health coverage (XOF 1,000), 13ème mois year-end bonus, and OHADA-based severance under Code du Travail and Convention Collective agreements.',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.cote-d-ivoire.s1.h': 'Scope &amp; Application',

  'pg.cote-d-ivoire.s1.b1': `
          <p class="au-table-title">Scope and Legal Basis / OHADA &middot; Code du Travail &middot; CGI &middot; Code de Prévoyance Sociale</p>
          <p class="au-table-title" style="margin-top:16px;font-weight:600;">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:12px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in Côte d'Ivoire (SARL minimum capital XOF 1,000,000 / SA minimum XOF 10,000,000 / SAS flexible), following OHADA unified commercial law</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly hired by the local entity, subject to the Code du Travail (Loi 2015-532) and applicable Convention Collective collective agreements</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on the Code du Travail, CGI (General Tax Code), Code de Prévoyance Sociale, and regulations from DGI / CNPS / CMU</span>
            </div>
          </div>
  `,

  'pg.cote-d-ivoire.s1.b2': `This framework covers how companies complete Payroll Set-up in Côte d'Ivoire (CEPICI one-stop setup, DGI tax registration, CNPS employer registration), monthly salary calculation (ITS + CN + IGR + CNPS + CMU), monthly filing (DSF / DISA / e-CNPS), and annual compliance management (DSF Annuelle annual social security return).`,

  'pg.cote-d-ivoire.s1.b3': `
          <p class="au-data-cards-label">2026 KEY NUMBERS</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">SMIG Minimum Monthly Wage</span>
                <span class="au-dc-value">XOF 75,000</span>
                <span class="au-dc-note">non-agricultural; since 2023/1</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">SMAG Agricultural Minimum</span>
                <span class="au-dc-value">XOF 39,960</span>
                <span class="au-dc-note">agricultural sector</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">ITS Tax Brackets</span>
                <span class="au-dc-value">0% - 32%</span>
                <span class="au-dc-note">6-tier progressive</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">CN National Contribution Tax</span>
                <span class="au-dc-value">1.5%</span>
                <span class="au-dc-note">additional source withholding</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">CNPS Pension</span>
                <span class="au-dc-value">14%</span>
                <span class="au-dc-note">Employee 6.3% + Employer 7.7%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Family Allowance</span>
                <span class="au-dc-value">5.75%</span>
                <span class="au-dc-note">Employer-only</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Occupational Injury</span>
                <span class="au-dc-value">2% - 5%</span>
                <span class="au-dc-note">by industry; Employer-only</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">CMU Health Insurance</span>
                <span class="au-dc-value">XOF 1,000</span>
                <span class="au-dc-note">split employee/employer, each XOF 500</span>
              </div>
            </div>
          </div>
  `,

  'pg.cote-d-ivoire.s1.b4': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key characteristics of Côte d'Ivoire Payroll: (1) OHADA unified commercial law + West African Economic and Monetary Union (UEMOA) — the XOF West African franc is pegged to the euro at a fixed rate (1 EUR = 655.957 XOF), facilitating cross-border accounting; (2) After 2017 tax reform, ITS unified to replace the previous IS + CN + IGR three taxes; CN 1.5% remains separately assessed; (3) 13ème mois year-end double salary is not statutory but is an industry convention; most Convention Collective agreements and employment contracts explicitly include it.</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.cote-d-ivoire.s2.h': 'Payroll Set-up',
  'pg.cote-d-ivoire.s2.sub': 'How to establish legal payroll capability in Côte d\'Ivoire / Entity &middot; DGI &middot; CNPS &middot; CMU',

  'pg.cote-d-ivoire.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Entity, Tax &amp; CNPS Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18%"><col style="width:18%"><col style="width:14%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>CEPICI One-Stop Setup</td><td>Côte d'Ivoire local entity</td><td>Yes</td><td>Via Centre de Promotion des Investissements en CI; completed in 24-48 hours</td></tr>
                <tr><td>RCCM Commercial Registration Number</td><td>Côte d'Ivoire local entity</td><td>Yes</td><td>Registre du Commerce et du Crédit Mobilier; OHADA unified format</td></tr>
                <tr><td>DGI Tax Number + IFU</td><td>Côte d'Ivoire local entity</td><td>Yes</td><td>Numéro Compte Contribuable + Identifiant Fiscal Unique</td></tr>
                <tr><td>CNPS Employer Registration</td><td>Côte d'Ivoire local entity</td><td>Yes</td><td>Caisse Nationale de Prévoyance Sociale; obtain N° d'employeur</td></tr>
                <tr><td>Employee N° CNPS + CMU</td><td>Employee</td><td>Yes</td><td>Registered immediately upon onboarding; foreign workers also required</td></tr>
                <tr><td>Contrat de Travail</td><td>Employer + Employee</td><td>Yes</td><td>CDD / CDI; &gt; 3 months must be in writing and filed with Inspection du Travail</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> CNPS 3 Branches + Universal Health Coverage (CMU)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:25%"><col style="width:25%"><col style="width:25%"></colgroup>
              <thead><tr><th>Item</th><th>Employee Contribution</th><th>Employer Contribution</th><th>Contribution Base/Ceiling</th></tr></thead>
              <tbody>
                <tr><td>Pension Retraite</td><td>6.3%</td><td>7.7%</td><td>Monthly XOF 1,647,315 (combined 14%)</td></tr>
                <tr><td>Family Allowance Prestations Familiales</td><td>&mdash;</td><td>5.75%</td><td>Monthly ceiling XOF 70,000</td></tr>
                <tr><td>Occupational Injury Accidents du Travail</td><td>&mdash;</td><td>2% - 5%</td><td>Monthly ceiling XOF 70,000; by industry risk classification</td></tr>
                <tr><td>CMU Universal Health Coverage</td><td>XOF 500/person</td><td>XOF 500/person</td><td>Fixed XOF 1,000/person/month; includes spouse + children</td></tr>
                <tr><td>Typical Office Combined</td><td>6.3% + CMU</td><td>~14.45% + CMU</td><td>&mdash;</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Bank Account, Payslip &amp; Record Retention</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:75%"></colgroup>
              <thead><tr><th>Item</th><th>Requirement / Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>XOF Local Bank Account</td><td>Mandatory. West African franc electronic transfer; typically paid before month-end</td></tr>
                <tr><td>Bulletin de Paie Payslip</td><td>Mandatory per payment. Code du Travail Art. 32.9; itemize gross salary, ITS, CN, CNPS, net salary</td></tr>
                <tr><td>Payroll + Personnel File Retention</td><td>Mandatory 5 years. Code du Travail; tax / social security scope typically 10 years</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.cote-d-ivoire.s3.h': 'Payroll Calculation',
  'pg.cote-d-ivoire.s3.sub': 'How salary, tax, and employee entitlements are calculated / Salary &middot; Leave',

  'pg.cote-d-ivoire.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary, SMIG &amp; 13ème Mois</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Rule / 2026 Values</th></tr></thead>
              <tbody>
                <tr><td>Pay Cycle</td><td>Monthly (most common); must be paid within 8 days of the current month's work</td></tr>
                <tr><td>SMIG Minimum Monthly Wage</td><td>XOF 75,000 gross/month (non-agricultural; +25% from 60,000 as of 2023/1)</td></tr>
                <tr><td>SMAG Agricultural Minimum</td><td>XOF 39,960 gross/month</td></tr>
                <tr><td>13ème Mois Year-End Double Salary</td><td>Not statutory; most industry Convention Collective agreements specify it (with tenure &ge; 12 months)</td></tr>
                <tr><td>Calculation Method</td><td>Monthly salary &divide; 173.33 (standard monthly working hours) &times; actual hours worked</td></tr>
                <tr><td>Overtime Heures supplémentaires</td><td>+15% (first 6 hours) / +50% (thereafter) / +75% (nights / Sundays / public holidays)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:30%"><col style="width:35%"></colgroup>
              <thead><tr><th>Item</th><th>Duration / Period</th><th>Pay Ratio / Source</th></tr></thead>
              <tbody>
                <tr><td>Annual Leave Congés Payés</td><td>2.2 working days/month = 26.4 days/year</td><td>100% / Employer; +1 day per 5 years of service</td></tr>
                <tr><td>Public Holidays Jours Fériés</td><td>13 days/year (includes Independence Day, Tabaski, etc.)</td><td>100% / Employer</td></tr>
                <tr><td>Sick Leave Congé de Maladie</td><td>First 6 months 100% / 6-12 months 50% / thereafter none</td><td>100% by employer initially + CNPS involvement</td></tr>
                <tr><td>Maternity Leave Congé de Maternité</td><td>14 weeks (6 weeks pre + 8 weeks post)</td><td>100% / CNPS (50%) + Employer makes up difference (50%)</td></tr>
                <tr><td>Paternity Leave Congé de Paternité</td><td>2 days per child</td><td>100% / Employer</td></tr>
                <tr><td>Bereavement / Marriage Leave Permissions</td><td>Marriage 4 days / Spouse or child death 2 days</td><td>100% / Employer</td></tr>
                <tr><td>Unpaid Leave Congé Sans Solde</td><td>Subject to employer approval</td><td>0% / None</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Personal Income Tax (ITS) — Impôt sur Traitements &amp; Salaires — Monthly Brackets</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:40%"><col style="width:15%"><col style="width:45%"></colgroup>
              <thead><tr><th>Monthly Taxable Income (XOF)</th><th>Rate</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>&le; 75,000</td><td>0%</td><td>Aligned with SMIG; minimum wage is tax-exempt</td></tr>
                <tr><td>75,001 - 150,000</td><td>16%</td><td>&mdash;</td></tr>
                <tr><td>150,001 - 300,000</td><td>21%</td><td>&mdash;</td></tr>
                <tr><td>300,001 - 600,000</td><td>24%</td><td>&mdash;</td></tr>
                <tr><td>600,001 - 1,000,000</td><td>28%</td><td>&mdash;</td></tr>
                <tr><td>&gt; 1,000,000</td><td>32%</td><td>Top tax rate</td></tr>
                <tr><td>Additional: Contribution Nationale (CN)</td><td>+ 1.5%</td><td>Withheld on gross salary; filed together with ITS</td></tr>
              </tbody>
            </table>
          </div>
          <p class="au-table-title" style="margin-top:16px;">ITS Calculation Process:</p>
          <div class="au-numbered-list" style="margin-top:12px;">
            <div class="au-numbered-item">
              <span class="au-numbered-num">1.</span>
              <span>Salaire Brut (Gross Salary) minus 15% standard deduction (Abattement Forfaitaire, minimum XOF 5,000 / maximum XOF 25,000) = taxable base</span>
            </div>
            <div class="au-numbered-item">
              <span class="au-numbered-num">2.</span>
              <span>Taxable base calculated through 6-tier progressive ITS brackets</span>
            </div>
            <div class="au-numbered-item">
              <span class="au-numbered-num">3.</span>
              <span>Separately calculate CN at 1.5% of gross salary</span>
            </div>
            <div class="au-numbered-item">
              <span class="au-numbered-num">4.</span>
              <span>ITS + CN withheld by employer and remitted to DGI by 15th of following month</span>
            </div>
          </div>
  `,

  'pg.cote-d-ivoire.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> CNPS — Detailed Breakdown</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:18%"><col style="width:18%"><col style="width:36%"></colgroup>
              <thead><tr><th>Scheme</th><th>Employee</th><th>Employer</th><th>Base / Ceiling</th></tr></thead>
              <tbody>
                <tr><td>Pension Retraite</td><td>6.3%</td><td>7.7%</td><td>Total salary; monthly ceiling XOF 1,647,315</td></tr>
                <tr><td>Family Allowance Prestations Familiales</td><td>&mdash;</td><td>5.75%</td><td>Monthly ceiling XOF 70,000</td></tr>
                <tr><td>Occupational Injury Accidents du Travail</td><td>&mdash;</td><td>2% - 5%</td><td>Monthly ceiling XOF 70,000; by industry risk</td></tr>
                <tr><td>CMU Couverture Maladie Universelle</td><td>XOF 500/person</td><td>XOF 500/person</td><td>Fixed XOF 1,000/person/month</td></tr>
                <tr><td>Typical Office Combined</td><td>6.3% + CMU</td><td>~14.45% + CMU</td><td>&mdash;</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three commonly underestimated details in Côte d'Ivoire Payroll: (1) CMU (Couverture Maladie Universelle universal health coverage) has been mandatory since 2019 for all employees + direct family members; employer and employee each bear XOF 500/person/month, totaling XOF 4,000 for a typical 4-person household; (2) Abattement Forfaitaire 15% standard deduction has a dual ceiling of XOF 5,000 / 25,000 — high earners (gross &gt; XOF 167k) hit the XOF 25,000 cap; (3) Convention Collective Interprofessionnelle is Côte d'Ivoire's "constitutional" payroll document; industry agreements can significantly expand annual leave days / add bonuses / adjust notice periods, and employers must comply once signed.</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.cote-d-ivoire.s4.h': 'Payroll Processing &amp; Compliance',
  'pg.cote-d-ivoire.s4.sub': 'Monthly execution, filing and payment, and accounting treatment / Monthly Filings &amp; Journal',

  'pg.cote-d-ivoire.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:30%"><col style="width:45%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>Month-end / once monthly</td><td>Code du Travail Art. 31.5; must be paid within 8 days of current month's work</td></tr>
                <tr><td>Payment Method + Currency</td><td>Electronic transfer &middot; XOF</td><td>Mobile Money / bank transfer / cash all compliant; foreign currency prohibited</td></tr>
                <tr><td>Bulletin de Paie + Wage Deduction</td><td>Mandatory (Art. 32.9)</td><td>Deduction ceiling = 1/10 to 1/4 of net salary by wage category (progressive)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly DGI &amp; CNPS Reporting</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:18%"><col style="width:18%"><col style="width:14%"><col style="width:18%"><col style="width:32%"></colgroup>
              <thead><tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Remittance Institution</th></tr></thead>
              <tbody>
                <tr><td>ITS + CN + IGR Monthly Reporting</td><td>Employer</td><td>Monthly</td><td>15th of following month</td><td>DGI (via e-impots online)</td></tr>
                <tr><td>CNPS Monthly Reporting + Payment</td><td>Employer</td><td>Monthly</td><td>15th of following month</td><td>CNPS (via e-CNPS online)</td></tr>
                <tr><td>CMU Payment</td><td>Employer</td><td>Concurrent with CNPS</td><td>15th of following month</td><td>CNAM / CNPS</td></tr>
                <tr><td>FDFP Training Tax</td><td>Employer</td><td>Annually (April) / Monthly</td><td>15th of following month</td><td>Fonds de Développement de la Formation Professionnelle</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules (SYSCOHADA)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:35%"><col style="width:65%"></colgroup>
              <thead><tr><th>Item</th><th>Account (SYSCOHADA Unified Accounting Standards)</th></tr></thead>
              <tbody>
                <tr><td>Salaire Brut + Primes + 13ème Mois</td><td>Charges de Personnel — Rémunérations (66)</td></tr>
                <tr><td>CNPS Part Patronale (Employer)</td><td>Charges de Personnel — Cotisations sociales (664)</td></tr>
                <tr><td>FDFP / Taxes assises sur salaires</td><td>Charges de Personnel — Autres charges sociales (667)</td></tr>
                <tr><td>ITS + CN + IGR Withheld</td><td>Passif — État, impôts sur les salaires (442)</td></tr>
                <tr><td>CNPS + CMU Withheld (Employee Share)</td><td>Passif — Caisses sociales (431)</td></tr>
                <tr><td>Net Salary to Pay</td><td>Trésorerie — Banques (521)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Filings</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:18%"><col style="width:18%"><col style="width:36%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>DSF Déclaration Statistique &amp; Fiscale</td><td>Employer</td><td>April 30</td><td>Annual financial + payroll detail filing</td></tr>
                <tr><td>État 301 État Annuel des Salaires</td><td>Employer &rarr; DGI</td><td>April 30</td><td>Annual employee ITS / CN detail return</td></tr>
                <tr><td>DISA Déclaration Individuelle Salaires (CNPS)</td><td>Employer &rarr; CNPS</td><td>February 28</td><td>Employee annual CNPS contribution certificate</td></tr>
                <tr><td>FDFP Training Tax Annual Settlement</td><td>Employer</td><td>April 30</td><td>Calculated at 0.6% + 0.4% of total payroll</td></tr>
                <tr><td>Impôt BIC Corporate Tax</td><td>Employer</td><td>April 30 / June 20</td><td>Depends on accounting year-end date</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Termination &amp; Foreign Workers</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:35%"><col style="width:37%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Notice Period Préavis</td><td>8 days - 4 months</td><td>By employee category (Cat I-VI) + tenure; Cat I workers &ge; 6 months = 1 month</td></tr>
                <tr><td>Severance Indemnité de Licenciement</td><td>30% / 35% / 40% &times; monthly salary per year</td><td>1-5 years / 5-10 years / &gt; 10 years tenure; calculated from year 1</td></tr>
                <tr><td>Unused Annual Leave Cash-out</td><td>Mandatory</td><td>Current month daily rate &times; accumulated unused days; paid with Indemnité</td></tr>
                <tr><td>13ème Mois Pro-Rata</td><td>Pro-rated monthly</td><td>Calculated as months worked in termination year &divide; 12</td></tr>
                <tr><td>Inspection du Travail Appeal</td><td>Within 30 days</td><td>Labour inspection intervention &rarr; mediation &rarr; Tribunal du Travail</td></tr>
                <tr><td>Foreign Worker Permis de Travail</td><td>Conditional</td><td>Non-CEDEAO citizens require work permit + Carte de Séjour</td></tr>
              </tbody>
            </table>
          </div>
  `,

  'pg.cote-d-ivoire.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key changes to Côte d'Ivoire Payroll in 2026: (1) SMIG remains at XOF 75,000 (unchanged since 2023); market anticipates a potential new adjustment to XOF 90,000+ in the second half of 2026; (2) DGI has mandated since 2024 that all companies use e-impots online filing for ITS / CN / IGR; paper filing no longer accepted; CNPS simultaneously launched e-CNPS; (3) Convention Collective Interprofessionnelle 2023 revised version expanded 13ème Mois applicability to all company sizes (previously only &ge; 50 employees); HR must re-review contracts.</p>
  `,

};
