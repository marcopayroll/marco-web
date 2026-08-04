window.MARCO_LANG_EN_PG_GERMANY = {

  /* ── Hero ── */
  'pg.germany.desc': 'A complete guide to running payroll in Germany &mdash; covering Handelsregister registration, five mandatory social insurances (Pflichtversicherungen), Lohnsteuer withholding across six tax classes, ELSTER monthly reporting, and 2026 updated rates for MiLoG, Grundfreibetrag, and BBG ceilings.',

  /* ══════════════════════════════════════════
     SECTION 1 — Scope & Application
  ══════════════════════════════════════════ */
  'pg.germany.s1.h': 'Scope &amp; Application',
  'pg.germany.s1.sub': 'Scope and Legal Basis / EStG &middot; SGB &middot; BGB &middot; MiLoG &middot; KSchG',

  /* Intro bullets + framework paragraph */
  'pg.germany.s1.b1': `
          <p class="article-p">This document applies to:</p>
          <div class="au-bullet-list" style="margin-top:16px;">
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Companies that have established a local legal entity in Germany (GmbH minimum capital &euro;25,000 / UG &euro;1 / AG minimum &euro;50,000), registered in the Handelsregister</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Employees directly hired by the local entity, subject to the Civil Code (BGB) + Termination Protection Law (KSchG) + Minimum Wage Law (MiLoG)</span>
            </div>
            <div class="au-bullet-item">
              <div class="au-bullet-dot-wrap"><div class="au-bullet-dot"></div></div>
              <span>Payroll compliance based on EStG (income tax), SGB (Social Code volumes V/VI/III/XI), and regulations from Finanzamt / Krankenkasse / DRV / Bundesagentur f&uuml;r Arbeit</span>
            </div>
          </div>
          <p class="article-p" style="margin-top:20px;">This framework covers how companies complete Payroll Set-up in Germany (Finanzamt tax registration, Betriebsnummer employer number, Krankenkasse health insurance registration, Steuer-ID / Sozialversicherungsnummer employee identification), monthly salary calculation (Lohnsteuer + Solidarit&auml;tszuschlag + Kirchensteuer + 5 major social insurances), ELSTER / DE&Uuml;V monthly reporting, and Lohnsteuerjahresausgleich annual reconciliation.</p>
  `,

  /* 2026 Key Numbers — au-data-cards-wrap */
  'pg.germany.s1.b2': `
          <p class="au-data-cards-label">2026 KEY NUMBERS</p>
          <div class="au-data-cards-grid">
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Minimum Wage MiLoG</span>
                <span class="au-dc-value">&euro;13.90/hr</span>
                <span class="au-dc-note">as of 2026/1, +0.92%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Grundfreibetrag</span>
                <span class="au-dc-value">&euro;12,348</span>
                <span class="au-dc-note">tax exemption threshold, +&euro;252</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Income Tax Brackets</span>
                <span class="au-dc-value">0% &ndash; 45%</span>
                <span class="au-dc-note">progressive + Soli 5.5%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Krankenversicherung</span>
                <span class="au-dc-value">14.6% + Zusatz</span>
                <span class="au-dc-note">health insurance + add-on ~1.7%</span>
              </div>
            </div>
            <div class="au-data-cards-row">
              <div class="au-data-card">
                <span class="au-dc-name">Rentenversicherung</span>
                <span class="au-dc-value">18.6%</span>
                <span class="au-dc-note">pension, shared equally</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Pflegeversicherung</span>
                <span class="au-dc-value">3.4% / 4.0%</span>
                <span class="au-dc-note">long-term care / 23+ childless +0.6%</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">Arbeitslosen</span>
                <span class="au-dc-value">2.6%</span>
                <span class="au-dc-note">unemployment insurance</span>
              </div>
              <div class="au-data-card">
                <span class="au-dc-name">BBG Ceiling</span>
                <span class="au-dc-value">&euro;96,600</span>
                <span class="au-dc-note">pension/unemployment ceiling</span>
              </div>
            </div>
          </div>
  `,

  /* Marco Insight */
  'pg.germany.s1.b3': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key characteristics of German Payroll: (1) Six Lohnsteuerklassen tax classes (I single, II single parent, III/V married couples, IV married equal, VI second employer) determine Lohnsteuer withholding intensity; (2) Five major social insurances are administered by different institutions &mdash; Krankenkasse health insurance companies (employee choice), DRV pension insurance, BA unemployment insurance, Pflegekasse long-term care, BG occupational injury insurance (employer-only); (3) The contribution base ceiling Beitragsbemessungsgrenze is unified in 2026 at &euro;96,600 (pension/unemployment), &euro;66,150 (health/long-term care).</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 2 — Payroll Set-up
  ══════════════════════════════════════════ */
  'pg.germany.s2.h': 'Payroll Set-up',
  'pg.germany.s2.sub': 'How to establish legal payroll capability in Germany / Entity &middot; Finanzamt &middot; 5 Insurances',

  /* i. Entity, Tax & Employer Registration */
  'pg.germany.s2.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Entity, Tax &amp; Employer Registration</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:12%"><col style="width:38%"></colgroup>
              <thead><tr><th>Item</th><th>Account Holder</th><th>Mandatory</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>Handelsregister Commercial Registration</td><td>Germany local entity</td><td>Yes</td><td>Apply to local court after notarization by Notar; GmbH minimum capital &euro;25,000</td></tr>
                <tr><td>Finanzamt Tax Registration</td><td>Germany local entity</td><td>Yes</td><td>Submit Fragebogen zur steuerlichen Erfassung within 8 weeks; obtain Steuernummer</td></tr>
                <tr><td>Betriebsnummer Employer Number</td><td>Germany local entity</td><td>Yes</td><td>Apply to Bundesagentur f&uuml;r Arbeit (BA); 8-digit number</td></tr>
                <tr><td>Krankenkasse Health Insurance Registration</td><td>Germany local entity</td><td>Yes</td><td>Employer must register each employee with their chosen Krankenkasse (bilateral choice)</td></tr>
                <tr><td>Employee Steuer-ID + SV-Nummer</td><td>Employee</td><td>Yes</td><td>11-digit Steuer-ID is unique for lifetime; 12-digit Sozialversicherungsnummer</td></tr>
                <tr><td>Arbeitsvertrag Employment Contract</td><td>Employer + Employee</td><td>Yes</td><td>Nachweisgesetz (Proof Law) requires written documentation of key terms; expanded scope since 2022</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Five Major Social Insurances */
  'pg.germany.s2.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Five Major Social Insurances (Pflichtversicherungen)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:14%"><col style="width:28%"><col style="width:30%"></colgroup>
              <thead><tr><th>Insurance (2026)</th><th>Total Rate</th><th>Employee / Employer Split</th><th>Contribution Base Ceiling (BBG)</th></tr></thead>
              <tbody>
                <tr><td>Krankenversicherung (Health)</td><td>14.6% + Zusatz ~1.7%</td><td>Employee/Employer split equally</td><td>Monthly &euro;5,512.50 (annual &euro;66,150)</td></tr>
                <tr><td>Pflegeversicherung (Long-term Care)</td><td>3.4% (23+ childless 4.0%)</td><td>Employee/Employer split equally (all contribute if childless)</td><td>Monthly &euro;5,512.50</td></tr>
                <tr><td>Rentenversicherung (Pension)</td><td>18.6%</td><td>9.3% + 9.3%</td><td>Monthly &euro;8,050 (annual &euro;96,600, unified East/West)</td></tr>
                <tr><td>Arbeitslosenversicherung (Unemployment)</td><td>2.6%</td><td>1.3% + 1.3%</td><td>Monthly &euro;8,050</td></tr>
                <tr><td>Unfallversicherung (Occupational Injury)</td><td>Industry-specific (BG)</td><td>100% Employer</td><td>No ceiling</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iii. Bank Account & Record Retention */
  'pg.germany.s2.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Bank Account &amp; Record Retention</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:20%"><col style="width:50%"></colgroup>
              <thead><tr><th>Item</th><th>Requirement</th><th>Operational Notes</th></tr></thead>
              <tbody>
                <tr><td>EUR Local Bank Account</td><td>Mandatory</td><td>SEPA transfer; typically paid end of month / beginning of next month</td></tr>
                <tr><td>Lohn/Gehaltsabrechnung Payslip</td><td>Mandatory (&sect;108 GewO)</td><td>Must itemize gross salary, tax, social insurance, net salary</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ══════════════════════════════════════════
     SECTION 3 — Payroll Calculation
  ══════════════════════════════════════════ */
  'pg.germany.s3.h': 'Payroll Calculation',
  'pg.germany.s3.sub': 'How salary, tax, and employee entitlements are calculated / Salary &middot; Leave',

  /* i. Salary, Minimum Wage & Bonuses */
  'pg.germany.s3.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Salary, Minimum Wage &amp; Bonuses</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:70%"></colgroup>
              <thead><tr><th>Item</th><th>Rule / 2026 Values</th></tr></thead>
              <tbody>
                <tr><td>Pay Cycle</td><td>Monthly (most common); typically paid end of month / beginning of next month</td></tr>
                <tr><td>Minimum Wage MiLoG</td><td>&euro;13.90/hour (as of 2026/1, previously &euro;12.82); 40h &times; 4.33 weeks &asymp; &euro;2,409/month</td></tr>
                <tr><td>13. Monatsgehalt / Weihnachtsgeld</td><td>Not statutory; most Tarifvertrag agreements specify 50&ndash;100% monthly Christmas bonus</td></tr>
                <tr><td>Urlaubsgeld Vacation Allowance</td><td>Not statutory; common in industry agreements (50% monthly salary)</td></tr>
                <tr><td>&Uuml;berstunden Overtime</td><td>BGB &sect;612 default compensation; many Tarifvertrag specify +25% / +50%</td></tr>
                <tr><td>Minijob Marginal Employment</td><td>&le; &euro;556/month; employer contribution ~28%; employee exempt from social insurance + tax</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Statutory Leave Entitlements */
  'pg.germany.s3.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Statutory Leave Entitlements</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:35%"><col style="width:35%"></colgroup>
              <thead><tr><th>Item</th><th>Duration / Period</th><th>Pay Ratio / Source</th></tr></thead>
              <tbody>
                <tr><td>Annual Leave Urlaub</td><td>20 days (5-day week) / 24 days (6-day week)</td><td>100% / Employer</td></tr>
                <tr><td>Public Holidays Gesetzliche Feiertage</td><td>9&ndash;13 days (varies by federal state)</td><td>100% / Employer</td></tr>
                <tr><td>Sick Leave Lohnfortzahlung (First 6 weeks)</td><td>First 6 weeks</td><td>100% / Employer (U1 reimbursement for companies &lt; 30 employees)</td></tr>
                <tr><td>Sick Leave Krankengeld (After 6 weeks)</td><td>Up to 78 weeks / 3 years</td><td>Approximately 70% Gross / Krankenkasse</td></tr>
                <tr><td>Maternity Leave Mutterschutz</td><td>6 weeks pre + 8 weeks post (multiple births 12 weeks post)</td><td>100% / Krankenkasse + Employer makes up difference</td></tr>
                <tr><td>Parental Leave Elternzeit + Elterngeld</td><td>Until child age 3; Elterngeld 12&ndash;14 months</td><td>65% net salary (&le; &euro;1,800/month) / Bundesagentur</td></tr>
                <tr><td>Care Leave Pflegezeit</td><td>Up to 10 days emergency + 6 months long-term care</td><td>Partially paid (10 days) / unpaid (long-term)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iii. Personal Income Tax (Lohnsteuer) — table + note paragraph */
  'pg.germany.s3.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Personal Income Tax (Lohnsteuer) &mdash; &sect;32a EStG</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:40%"><col style="width:15%"><col style="width:45%"></colgroup>
              <thead><tr><th>Annual Taxable Income (zu versteuerndes Einkommen)</th><th>Rate</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>&euro;0 &ndash; &euro;12,348</td><td>0%</td><td>Grundfreibetrag 2026 tax exemption</td></tr>
                <tr><td>&euro;12,349 &ndash; &euro;17,005</td><td>14% &ndash; 24%</td><td>Progressionszone I &mdash; formula progressive</td></tr>
                <tr><td>&euro;17,006 &ndash; &euro;68,480</td><td>24% &ndash; 42%</td><td>Progressionszone II &mdash; formula progressive</td></tr>
                <tr><td>&euro;68,481 &ndash; &euro;277,825</td><td>42%</td><td>Spitzensteuersatz top tax rate</td></tr>
                <tr><td>&euro;277,826 and above</td><td>45%</td><td>Reichensteuer wealth tax</td></tr>
                <tr><td><strong>Additional: Solidarit&auml;tszuschlag</strong></td><td><strong>+5.5%</strong></td><td>On income tax amount; for annual taxable income &gt; ~&euro;66,761</td></tr>
                <tr><td><strong>Additional: Kirchensteuer</strong></td><td><strong>+8&ndash;9%</strong></td><td>On income tax amount; only for Katholisch / Evangelisch members</td></tr>
              </tbody>
            </table>
          </div>
          <p class="article-p" style="margin-top:12px; font-size:14px; color:#475072;"><strong>Lohnsteuerklassen (Tax Classes):</strong> I (single), II (single parent), III/V (married couples; III primary earner, V secondary), IV (married equal), IV+Faktor (fair split), VI (second employer). Employer withholds Lohnsteuer immediately based on employee&rsquo;s Steuer-ID query in ELStAM database for the corresponding tax class.</p>
  `,

  /* iv. Five Mandatory Social Insurances (2026) — detailed rates table */
  'pg.germany.s3.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Five Mandatory Social Insurances (2026)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:34%"><col style="width:16%"><col style="width:16%"><col style="width:34%"></colgroup>
              <thead><tr><th>Scheme</th><th>Employee</th><th>Employer</th><th>BBG Ceiling</th></tr></thead>
              <tbody>
                <tr><td>Krankenversicherung Base</td><td>7.30%</td><td>7.30%</td><td>Monthly &euro;5,512.50</td></tr>
                <tr><td>Krankenversicherung Add-on</td><td>~0.85%</td><td>~0.85%</td><td>Monthly &euro;5,512.50</td></tr>
                <tr><td>Pflegeversicherung Long-term Care</td><td>1.70&ndash;2.30%</td><td>1.70%</td><td>Monthly &euro;5,512.50</td></tr>
                <tr><td>Rentenversicherung Pension</td><td>9.30%</td><td>9.30%</td><td>Monthly &euro;8,050 (West/East unified)</td></tr>
                <tr><td>Arbeitslosenversicherung Unemployment</td><td>1.30%</td><td>1.30%</td><td>Monthly &euro;8,050</td></tr>
                <tr><td>Unfallversicherung Occupational Injury</td><td>&mdash;</td><td>Industry-specific (0.5&ndash;9%)</td><td>No ceiling</td></tr>
                <tr><td><strong>Typical Office Combined</strong></td><td><strong>~20.5%</strong></td><td><strong>~20.5% + Occupational Injury</strong></td><td>&mdash;</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Marco Insight */
  'pg.germany.s3.b5': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three commonly underestimated details in German Payroll: (1) Krankenkasse health insurance is chosen by the employee (AOK / TK / Barmer, etc., 90+ companies); employer must separately register each employee with their chosen fund; (2) Pflegeversicherung has a &ldquo;childless surcharge&rdquo; (Kinderlose Zuschlag) &mdash; employees 23+ without children pay an additional 0.6%; after 2023/7 reform, a &ldquo;child consideration reduction&rdquo; (Kinder-Ber&uuml;cksichtigung) was added (decreasing monthly for 2+ children); (3) Lohnsteuer is not simply withheld and tax-refunded at year-end &mdash; employees must proactively submit Lohnsteuerм&auml;&szlig;igung to claim salary/commute/dependent deductions in advance; otherwise the full year&rsquo;s amount is over-withheld and refunded later.</p>
  `,

  /* ══════════════════════════════════════════
     SECTION 4 — Payroll Processing & Compliance
  ══════════════════════════════════════════ */
  'pg.germany.s4.h': 'Payroll Processing &amp; Compliance',
  'pg.germany.s4.sub': 'Monthly execution, filing and payment, and accounting treatment / Monthly Filings &amp; Journal',

  /* i. Payroll Payment Rules */
  'pg.germany.s4.b1': `
          <p class="au-table-title"><span class="au-table-num">i.</span> Payroll Payment Rules</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:25%"><col style="width:30%"><col style="width:45%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Payment Frequency</td><td>At least once monthly</td><td>BGB &sect;614 ex post principle; typically end of month / beginning of next month</td></tr>
                <tr><td>Payment Method + Currency</td><td>SEPA Transfer &middot; EUR</td><td>Cash is allowed in principle but extremely rare; foreign currency settlement not permitted</td></tr>
                <tr><td>Entgeltabrechnung Payslip</td><td>Mandatory (&sect;108 GewO)</td><td>Must itemize gross salary, tax, social insurance, net salary; electronic or paper</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* ii. Monthly Tax & Insurance Reporting */
  'pg.germany.s4.b2': `
          <p class="au-table-title"><span class="au-table-num">ii.</span> Monthly Tax &amp; Insurance Reporting</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:26%"><col style="width:18%"><col style="width:16%"><col style="width:16%"><col style="width:24%"></colgroup>
              <thead><tr><th>Filing Item</th><th>Responsible Party</th><th>Frequency</th><th>Deadline</th><th>Remittance Institution</th></tr></thead>
              <tbody>
                <tr><td>ELSTER Lohnsteueranmeldung</td><td>Employer</td><td>Monthly / Quarterly</td><td>10th of following month</td><td>Finanzamt</td></tr>
                <tr><td>Beitragsnachweis Social Security Monthly Return</td><td>Employer</td><td>Monthly</td><td>Last 3 working days of month</td><td>Krankenkasse + DRV</td></tr>
                <tr><td>DE&Uuml;V-Meldungen</td><td>Employer</td><td>Event-triggered</td><td>Onboarding / separation / changes &le; 6 weeks</td><td>Respective Krankenkasse</td></tr>
                <tr><td>U1 / U2 Employer Reimbursement</td><td>Employer</td><td>With social insurance payment</td><td>Monthly</td><td>Krankenkasse</td></tr>
                <tr><td>BG Occupational Insurance</td><td>Employer</td><td>Annual estimate</td><td>February 15 annually</td><td>Industry Berufsgenossenschaft</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iii. Payroll Journal Mapping Rules (SKR 04) */
  'pg.germany.s4.b3': `
          <p class="au-table-title"><span class="au-table-num">iii.</span> Payroll Journal Mapping Rules (SKR 04 Recommended)</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:45%"><col style="width:55%"></colgroup>
              <thead><tr><th>Item</th><th>Account</th></tr></thead>
              <tbody>
                <tr><td>Bruttolohn + Sonderzahlungen</td><td>Personalaufwand &mdash; L&ouml;hne und Geh&auml;lter (6020)</td></tr>
                <tr><td>Arbeitgeberanteile SV (~20%)</td><td>Personalaufwand &mdash; Gesetzliche Sozialaufwendungen (6110)</td></tr>
                <tr><td>BG / Unfallversicherung</td><td>Personalaufwand &mdash; Beitr&auml;ge zur Berufsgenossenschaft (6120)</td></tr>
                <tr><td>Lohnsteuer + Soli + KiSt Withheld</td><td>Verbindlichkeiten &mdash; gegen&uuml;ber Finanzamt (3730)</td></tr>
                <tr><td>SV-Beitr&auml;ge AN-Anteil Withheld</td><td>Verbindlichkeiten &mdash; Krankenkasse (3740)</td></tr>
                <tr><td>Net Pay</td><td>Bank (1200)</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* iv. Annual Filings */
  'pg.germany.s4.b4': `
          <p class="au-table-title"><span class="au-table-num">iv.</span> Annual Filings</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:28%"><col style="width:22%"><col style="width:16%"><col style="width:34%"></colgroup>
              <thead><tr><th>Item</th><th>Responsible Party</th><th>Deadline</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Lohnsteuerbescheinigung</td><td>Employer &rarr; Employee + Finanzamt</td><td>End of February</td><td>Annual tax summary for each employee; electronic submission via ELSTER</td></tr>
                <tr><td>Lohnsteuer-Jahresausgleich</td><td>Employer (optional)</td><td>December salary</td><td>Conditional automatic reconciliation; employee may opt out for ESt return</td></tr>
                <tr><td>Einkommensteuerkl&auml;rung</td><td>Employee</td><td>July 31</td><td>ESt comprehensive income return; employer not obligated but often assists via ELSTER</td></tr>
                <tr><td>BG Occupational Insurance Annual Settlement</td><td>Employer</td><td>February 15</td><td>Adjust BG premium based on prior year actual wages</td></tr>
                <tr><td>SV-Jahresmeldung</td><td>Employer</td><td>February 15</td><td>Annual social insurance report per employee for Bruttolohn</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* v. Termination & Foreign Workers */
  'pg.germany.s4.b5': `
          <p class="au-table-title"><span class="au-table-num">v.</span> Termination &amp; Foreign Workers</p>
          <div class="au-table-wrap">
            <table class="au-table">
              <colgroup><col style="width:30%"><col style="width:30%"><col style="width:40%"></colgroup>
              <thead><tr><th>Item</th><th>Rule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Notice Period K&uuml;ndigungsfrist (&sect;622 BGB)</td><td>4 weeks minimum</td><td>Increases with tenure: &lt; 2 years 4 weeks; &ge; 20 years 7 months; employer unilateral</td></tr>
                <tr><td>K&uuml;ndigungsschutz Dismissal Protection</td><td>Applies to companies &ge; 10 employees (KSchG)</td><td>Dismissal must be socially justified: economic / personal / conduct-based</td></tr>
                <tr><td>Abfindung Severance</td><td>Not statutory</td><td>&sect;1a KSchG recommends 0.5 monthly salary/year; practice typically 0.5&ndash;1.5 months</td></tr>
                <tr><td>Unused Annual Leave Cash-out</td><td>Mandatory</td><td>Calculated based on net daily wage</td></tr>
                <tr><td>Arbeitszeugnis Reference Letter</td><td>Mandatory</td><td>Must be objective, goodwill-based; indirect evaluation codes widely understood in industry</td></tr>
                <tr><td>Foreign Worker Aufenthaltstitel</td><td>Conditional</td><td>EU / EEA citizens exempt from visas; non-EU require Arbeitserlaubnis</td></tr>
              </tbody>
            </table>
          </div>
  `,

  /* Marco Insight */
  'pg.germany.s4.b6': `
          <p class="au-mi-label">MARCO INSIGHT</p>
          <p class="au-mi-text">Three key changes to German Payroll in 2026: (1) MiLoG minimum wage increased from &euro;12.82 to &euro;13.90 as of 2026/1 (+8.4%, determined by Mindestlohnkommission); (2) Grundfreibetrag tax exemption threshold increased from &euro;12,096 to &euro;12,348 (+&euro;252); all Lohnsteuer formula parameters adjusted accordingly; (3) Beitragsbemessungsgrenze contribution base ceiling unified: pension/unemployment &euro;96,600 (West/East unified as of 2025), health/long-term care &euro;66,150.</p>
  `,

};
