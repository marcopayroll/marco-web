(function () {
  /* ── Synchronously inject nav HTML at top of <body> ── */
  var NAV_HTML = [
    '<nav class="nav" id="main-nav">',
    '  <div class="nav-container">',
    '    <div class="nav-tabbar">',
    '      <a class="nav-logo" href="index.html">',
    '        <div class="nav-logo-inner">',
    '          <img src="assets/menu-bar-marco-logo.svg" alt="Marco" />',
    '        </div>',
    '      </a>',
    '      <div class="nav-menu">',

    /* Services */
    '        <div class="nav-tab nav-tab-services">',
    '          <div class="nav-tab-inner">',
    '            <span data-i18n="nav.services">Services</span>',
    '            <div class="nav-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    '          </div>',
    '          <div class="nav-services-dropdown">',
    '            <p class="nav-dropdown-label" data-i18n="nav.services">Services</p>',
    '            <div class="nav-dropdown-divider"></div>',
    '            <div class="nav-services-columns">',
    '              <div class="nav-services-col">',
    '                <a class="nav-services-item" href="service-global-payroll.html">',
    '                  <div class="nav-services-item-icon"><img src="assets/Services/drop-down/global payroll.svg" alt="" /></div>',
    '                  <div class="nav-services-item-text"><span class="nav-services-item-title" data-i18n="nav.dd.payroll.title">Global Payroll</span><span class="nav-services-item-desc" data-i18n="nav.dd.payroll.desc">End-to-end payroll in 150+ countries</span></div>',
    '                </a>',
    '                <a class="nav-services-item" href="service-employer-of-record.html">',
    '                  <div class="nav-services-item-icon"><img src="assets/Services/drop-down/eor.svg" alt="" /></div>',
    '                  <div class="nav-services-item-text"><span class="nav-services-item-title" data-i18n="nav.dd.eor.title">Employer of Record (EOR)</span><span class="nav-services-item-desc" data-i18n="nav.dd.eor.desc">Hire globally without a local entity</span></div>',
    '                </a>',
    '                <a class="nav-services-item" href="service-independent-contractor.html">',
    '                  <div class="nav-services-item-icon"><img src="assets/Services/drop-down/ic.svg" alt="" /></div>',
    '                  <div class="nav-services-item-text"><span class="nav-services-item-title" data-i18n="nav.dd.ic.title">Independent Contractor (IC)</span><span class="nav-services-item-desc" data-i18n="nav.dd.ic.desc">Compliant contractor engagement</span></div>',
    '                </a>',
    '                <a class="nav-services-item" href="service-global-mobility.html">',
    '                  <div class="nav-services-item-icon"><img src="assets/Services/drop-down/global mobility.svg" alt="" /></div>',
    '                  <div class="nav-services-item-text"><span class="nav-services-item-title" data-i18n="nav.dd.mobility.title">Global Mobility</span><span class="nav-services-item-desc" data-i18n="nav.dd.mobility.desc">Seamless cross-border movements</span></div>',
    '                </a>',
    '              </div>',
    '              <div class="nav-services-col">',
    '                <a class="nav-services-item" href="service-expense-processing.html">',
    '                  <div class="nav-services-item-icon"><img src="assets/Services/drop-down/Expense Processing.svg" alt="" /></div>',
    '                  <div class="nav-services-item-text"><span class="nav-services-item-title" data-i18n="nav.dd.expense.title">Expense Processing</span><span class="nav-services-item-desc" data-i18n="nav.dd.expense.desc">Streamlined global expense management</span></div>',
    '                </a>',
    '                <a class="nav-services-item" href="service-hr-operations.html">',
    '                  <div class="nav-services-item-icon"><img src="assets/Services/drop-down/HRO Support.svg" alt="" /></div>',
    '                  <div class="nav-services-item-text"><span class="nav-services-item-title" data-i18n="nav.dd.hro.title">HR Operation Support</span><span class="nav-services-item-desc" data-i18n="nav.dd.hro.desc">Comprehensive HR administration</span></div>',
    '                </a>',
    '                <a class="nav-services-item" href="service-service-delivery-model.html">',
    '                  <div class="nav-services-item-icon"><img src="assets/Services/drop-down/Service Delivery Model.svg" alt="" /></div>',
    '                  <div class="nav-services-item-text"><span class="nav-services-item-title" data-i18n="nav.dd.sdm.title">Service Delivery Model</span><span class="nav-services-item-desc" data-i18n="nav.dd.sdm.desc">Our partnership approach</span></div>',
    '                </a>',
    '              </div>',
    '            </div>',
    '          </div>',
    '        </div>',

    /* Compliance */
    '        <div class="nav-tab nav-tab-compliance">',
    '          <div class="nav-tab-inner">',
    '            <span data-i18n="nav.compliance">Compliance</span>',
    '            <div class="nav-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    '          </div>',
    '          <div class="nav-compliance-dropdown">',
    '            <p class="nav-dropdown-label" data-i18n="nav.compliance">Compliance</p>',
    '            <div class="nav-dropdown-divider"></div>',
    '            <div class="nav-dropdown-list">',
    '              <a class="nav-compliance-item" href="compliance-data-protection.html">',
    '                <div class="nav-compliance-item-icon"><img src="assets/Compliance/data-protection-privacy-icon.svg" alt=""></div>',
    '                <div class="nav-compliance-item-text"><span class="nav-compliance-item-title" data-i18n="nav.dd.dataprot.title">Data Protection &amp; Privacy</span><span class="nav-compliance-item-desc" data-i18n="nav.dd.dataprot.desc">Privacy controls for sensitive workforce data</span></div>',
    '              </a>',
    '              <a class="nav-compliance-item" href="compliance-operational-governance.html">',
    '                <div class="nav-compliance-item-icon"><img src="assets/Compliance/operational-governance-icon.svg" alt=""></div>',
    '                <div class="nav-compliance-item-text"><span class="nav-compliance-item-title" data-i18n="nav.dd.opgov.title">Operational Governance</span><span class="nav-compliance-item-desc" data-i18n="nav.dd.opgov.desc">Controls, accountability, and audit trails</span></div>',
    '              </a>',
    '              <a class="nav-compliance-item" href="compliance-licensing-regulatory.html">',
    '                <div class="nav-compliance-item-icon"><img src="assets/Compliance/licensing-regulatory-compliance-icon.svg" alt=""></div>',
    '                <div class="nav-compliance-item-text"><span class="nav-compliance-item-title" data-i18n="nav.dd.lic.title">Licensing &amp; Regulatory Compliance</span><span class="nav-compliance-item-desc" data-i18n="nav.dd.lic.desc">Local licenses and regulatory authorizations</span></div>',
    '              </a>',
    '            </div>',
    '          </div>',
    '        </div>',

    /* Resources */
    '        <div class="nav-tab nav-tab-resources">',
    '          <div class="nav-tab-inner">',
    '            <span data-i18n="nav.resources">Resources</span>',
    '            <div class="nav-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    '          </div>',
    '          <div class="nav-resources-dropdown">',
    '            <p class="nav-dropdown-label" data-i18n="nav.resources">Resources</p>',
    '            <div class="nav-dropdown-divider"></div>',
    '            <div class="nav-dropdown-list">',
    '              <a class="nav-resources-item" href="https://help.marcopayroll.com/" target="_blank" rel="noopener noreferrer">',
    '                <div class="nav-resources-item-icon"><img src="assets/Resources/help-center-icon.svg" alt=""></div>',
    '                <div class="nav-resources-item-text"><span class="nav-resources-item-title" data-i18n="nav.dd.help.title">Help Center</span><span class="nav-resources-item-desc" data-i18n="nav.dd.help.desc">Manual guides, FAQs, and product support</span></div>',
    '              </a>',
    '              <a class="nav-resources-item" href="https://developer.marcopayroll.com/" target="_blank" rel="noopener noreferrer">',
    '                <div class="nav-resources-item-icon"><img src="assets/Resources/developer-portal-icon.svg" alt=""></div>',
    '                <div class="nav-resources-item-text"><span class="nav-resources-item-title" data-i18n="nav.dd.dev.title">Developer Portal</span><span class="nav-resources-item-desc" data-i18n="nav.dd.dev.desc">API documentation and integration resources</span></div>',
    '              </a>',
    '              <a class="nav-resources-item" href="https://test.tryglobalworkforce.com/" target="_blank" rel="noopener noreferrer">',
    '                <div class="nav-resources-item-icon"><img src="assets/Resources/demo-site-icon.svg" alt=""></div>',
    '                <div class="nav-resources-item-text"><span class="nav-resources-item-title" data-i18n="nav.dd.demo.title">Demo Site</span><span class="nav-resources-item-desc" data-i18n="nav.dd.demo.desc">A test environment to explore Marco OS</span></div>',
    '              </a>',
    '              <a class="nav-resources-item" href="https://engine.marcopayroll.com/" target="_blank" rel="noopener noreferrer">',
    '                <div class="nav-resources-item-icon"><img src="assets/Resources/processing-integration-engines-icon.svg" alt=""></div>',
    '                <div class="nav-resources-item-text"><span class="nav-resources-item-title" data-i18n="nav.dd.engine.title">Processing &amp; Integration Engines</span><span class="nav-resources-item-desc" data-i18n="nav.dd.engine.desc">Systems that power payroll and data workflows</span></div>',
    '              </a>',
    '              <a class="nav-resources-item" href="#">',
    '                <div class="nav-resources-item-icon"><img src="assets/Resources/marco-copilot-icon.svg" alt=""></div>',
    '                <div class="nav-resources-item-text"><span class="nav-resources-item-title" data-i18n="nav.dd.copilot.title">Marco Copilot (AI Assistant)</span><span class="nav-resources-item-desc" data-i18n="nav.dd.copilot.desc">AI support for global workforce operations</span></div>',
    '              </a>',
    '            </div>',
    '          </div>',
    '        </div>',

    /* HR Knowledge Hub */
    '        <div class="nav-tab nav-tab-hub">',
    '          <div class="nav-tab-inner">',
    '            <span data-i18n="nav.hub">HR Knowledge Hub</span>',
    '            <div class="nav-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    '          </div>',
    '          <div class="nav-hub-dropdown">',
    '            <p class="nav-dropdown-label" data-i18n="nav.hub">HR Knowledge Hub</p>',
    '            <div class="nav-dropdown-divider"></div>',
    '            <div class="nav-hub-columns">',
    '              <div class="nav-hub-col">',
    '                <a href="hr-knowledge-hub-labor-cost-calculator.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Labor Cost Calculator.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.lcc.title">Labor Cost Calculator</span><span class="nav-hub-item-desc" data-i18n="nav.dd.lcc.desc">Estimate employment costs by country</span></div></a>',
    '                <a href="hr-knowledge-hub-country-guide.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Country Guide.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.country.title">Country Guide</span><span class="nav-hub-item-desc" data-i18n="nav.dd.country.desc">Country-specific employment and payroll insights</span></div></a>',
    '                <a href="hr-knowledge-hub-visa-guide.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Visa Guide.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.visa.title">Visa Guide</span><span class="nav-hub-item-desc" data-i18n="nav.dd.visa.desc">Work visa requirements and application guidance</span></div></a>',
    '                <a href="hr-knowledge-hub-payroll-guide.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Payroll Guide.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.payguide.title">Payroll Guide</span><span class="nav-hub-item-desc" data-i18n="nav.dd.payguide.desc">Payroll rules, cycles, and statutory requirements</span></div></a>',
    '                <a href="hr-knowledge-hub-freelancer-guide.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Freelancer Guide.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.freelancer.title">Freelancer Guide</span><span class="nav-hub-item-desc" data-i18n="nav.dd.freelancer.desc">Independent contractor rules by country</span></div></a>',
    '                <a href="hr-knowledge-hub-employment-contract-matrix.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Employment Contract.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.contract.title">Employment Contract Matrix</span><span class="nav-hub-item-desc" data-i18n="nav.dd.contract.desc">Employment contract rules and required clauses by country</span></div></a>',
    '                <a href="hr-knowledge-hub-work-schedule.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Work Schedule.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.schedule.title">Work Schedule</span><span class="nav-hub-item-desc" data-i18n="nav.dd.schedule.desc">Working hours, rest days, and schedule rules</span></div></a>',
    '              </div>',
    '              <div class="nav-hub-col">',
    '                <a href="hr-knowledge-hub-public-holiday-calendar-2026.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Public Holiday Calendar.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.holiday.title">Public Holiday Calendar</span><span class="nav-hub-item-desc" data-i18n="nav.dd.holiday.desc">Official holidays by country and year</span></div></a>',
    '                <a href="hr-knowledge-hub-leave-policy.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Leave Policy.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.leave.title">Leave Policy</span><span class="nav-hub-item-desc" data-i18n="nav.dd.leave.desc">Annual leave, sick leave, and statutory time off</span></div></a>',
    '                <a href="hr-knowledge-hub-travel-expense-policy.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Travel &amp; Expense Policy.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.travel.title">Travel &amp; Expense Policy</span><span class="nav-hub-item-desc" data-i18n="nav.dd.travel.desc">Business travel and reimbursement guidelines</span></div></a>',
    '                <a href="hr-knowledge-hub-benefits-plan.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Benefits Plan.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.benefits.title">Benefits Plan</span><span class="nav-hub-item-desc" data-i18n="nav.dd.benefits.desc">Mandatory and common employee benefits</span></div></a>',
    '                <a href="hr-knowledge-hub-government-claim-update.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Government Claim.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.govclaim.title">Government Claim Update</span><span class="nav-hub-item-desc" data-i18n="nav.dd.govclaim.desc">Government reimbursements, subsidies, and claim updates</span></div></a>',
    '                <a href="hr-knowledge-hub-vendor-list.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Vendor List.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.vendor.title">Vendor List</span><span class="nav-hub-item-desc" data-i18n="nav.dd.vendor.desc">Approved vendors and service partners</span></div></a>',
    '                <a href="hr-knowledge-hub-memo.html" class="nav-hub-item"><div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Memo.svg" alt=""></div><div class="nav-hub-item-text"><span class="nav-hub-item-title" data-i18n="nav.dd.memo.title">Memo</span><span class="nav-hub-item-desc" data-i18n="nav.dd.memo.desc">HR updates, notes, and internal references</span></div></a>',
    '              </div>',
    '            </div>',
    '          </div>',
    '        </div>',

    /* Price */
    '        <div class="nav-tab nav-tab-price">',
    '          <div class="nav-tab-inner">',
    '            <span data-i18n="nav.price">Price</span>',
    '            <div class="nav-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    '          </div>',
    '          <div class="nav-price-dropdown">',
    '            <p class="nav-dropdown-label" data-i18n="nav.price">Price</p>',
    '            <div class="nav-dropdown-divider"></div>',
    '            <div class="nav-dropdown-list">',
    '              <a class="nav-dropdown-item" href="price-global-workforce-solution.html"><span class="nav-dropdown-item-title" data-i18n="nav.dd.gws.title">Global Workforce Solution</span><span class="nav-dropdown-item-desc" data-i18n="nav.dd.gws.desc">Service pricing for global workforce administration</span></a>',
    '              <a class="nav-dropdown-item" href="price-global-managed-payroll-service.html"><span class="nav-dropdown-item-title" data-i18n="nav.dd.gmps.title">Global Managed Payroll Service</span><span class="nav-dropdown-item-desc" data-i18n="nav.dd.gmps.desc">Managed payroll pricing for global teams</span></a>',
    '              <a class="nav-dropdown-item" href="price-proposal-builder.html"><span class="nav-dropdown-item-title" data-i18n="nav.dd.proposal.title">Proposal Builder</span><span class="nav-dropdown-item-desc" data-i18n="nav.dd.proposal.desc">Build a tailored service pricing proposal</span></a>',
    '            </div>',
    '          </div>',
    '        </div>',

    /* Company */
    '        <div class="nav-tab nav-tab-about">',
    '          <div class="nav-tab-inner">',
    '            <span data-i18n="nav.company">Company</span>',
    '            <div class="nav-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    '          </div>',
    '          <div class="nav-about-dropdown">',
    '            <p class="nav-dropdown-label" data-i18n="nav.company">Company</p>',
    '            <div class="nav-dropdown-divider"></div>',
    '            <div class="nav-dropdown-list">',
    '              <a class="nav-about-item" href="company-vision-values.html"><div class="nav-about-item-icon"><img src="assets/Company/vision-&-values-icon.svg" alt=""></div><div class="nav-about-item-text"><span class="nav-about-item-title" data-i18n="nav.dd.vision.title">Vision &amp; Values</span><span class="nav-about-item-desc" data-i18n="nav.dd.vision.desc">Our purpose and guiding principles</span></div></a>',
    '              <a class="nav-about-item" href="company-journey.html"><div class="nav-about-item-icon"><img src="assets/Company/our-journey-icon.svg" alt=""></div><div class="nav-about-item-text"><span class="nav-about-item-title" data-i18n="nav.dd.journey.title">Marco\'s Journey</span><span class="nav-about-item-desc" data-i18n="nav.dd.journey.desc">The story behind Marco</span></div></a>',
    '              <a class="nav-about-item" href="company-entity-network.html"><div class="nav-about-item-icon"><img src="assets/Company/entity-network-icon.svg" alt=""></div><div class="nav-about-item-text"><span class="nav-about-item-title" data-i18n="nav.dd.entity.title">Entity Network</span><span class="nav-about-item-desc" data-i18n="nav.dd.entity.desc">Global entities and operational service centers</span></div></a>',
    '              <a class="nav-about-item" href="company-organization.html"><div class="nav-about-item-icon"><img src="assets/Company/organization-icon.svg" alt=""></div><div class="nav-about-item-text"><span class="nav-about-item-title" data-i18n="nav.dd.org.title">Organization</span><span class="nav-about-item-desc" data-i18n="nav.dd.org.desc">Leadership and structure</span></div></a>',
    '              <a class="nav-about-item" href="company-contact-us.html"><div class="nav-about-item-icon"><img src="assets/Company/contact-us-icon.svg" alt=""></div><div class="nav-about-item-text"><span class="nav-about-item-title" data-i18n="nav.dd.contact.title">Contact Us</span><span class="nav-about-item-desc" data-i18n="nav.dd.contact.desc">Get in touch with the Marco team</span></div></a>',
    '            </div>',
    '          </div>',
    '        </div>',

    '      </div>',  /* /nav-menu */
    '    </div>',   /* /nav-tabbar */

    /* Desktop right: lang + sign in */
    '    <div class="nav-right">',
    '      <div class="nav-lang" id="nav-lang-trigger">',
    '        <div class="nav-lang-inner">',
    '          <div class="nav-lang-flag"><img src="assets/flag-en.png" alt="" /></div>',
    '          <span>EN</span>',
    '        </div>',
    '        <div class="nav-lang-dropdown" id="nav-lang-dropdown" aria-hidden="true">',
    '          <div class="nav-lang-dd-row is-active"><div class="nav-lang-dd-flag flag-en"><img src="assets/flag-en.png" alt="" /></div><span class="nav-lang-dd-label">EN</span></div>',
    '          <div class="nav-lang-dd-row"><div class="nav-lang-dd-flag flag-cn"><img src="assets/flag-cn.webp" alt="" /></div><span class="nav-lang-dd-label">CN</span></div>',
    '        </div>',
    '      </div>',
    '      <div class="nav-signin-wrapper">',
    '        <a class="nav-signin" href="https://app.marcopayroll.com/login" target="_blank" rel="noopener noreferrer" data-i18n="nav.signin">Sign in</a>',
    '      </div>',
    '    </div>',

    /* Mobile/tablet right: lang + hamburger */
    '    <div class="nav-mobile-right" id="nav-mobile-right">',
    '      <div class="nav-mobile-lang" id="nav-mobile-lang-trigger">',
    '        <div class="nav-lang-flag"><img src="assets/flag-en.png" alt="" /></div>',
    '        <span>EN</span>',
    '        <div class="nav-lang-dropdown" id="nav-mobile-lang-dropdown" aria-hidden="true">',
    '          <div class="nav-lang-dd-row is-active"><div class="nav-lang-dd-flag flag-en"><img src="assets/flag-en.png" alt="" /></div><span class="nav-lang-dd-label">EN</span></div>',
    '          <div class="nav-lang-dd-row"><div class="nav-lang-dd-flag flag-cn"><img src="assets/flag-cn.webp" alt="" /></div><span class="nav-lang-dd-label">CN</span></div>',
    '        </div>',
    '      </div>',
    '      <button class="nav-hamburger" id="nav-hamburger" aria-label="Open navigation menu" aria-expanded="false">',
    '        <img class="nav-hamburger-icon-tablet" src="assets/tablet-menu-icon.svg" alt="" width="24" height="24" />',
    '        <img class="nav-hamburger-icon-mobile" src="assets/mobile-menu-icon.svg" alt="" width="20" height="20" />',
    '      </button>',
    '    </div>',

    '  </div>', /* /nav-container */
    '</nav>',

    /* Mobile overlay + panel */
    '<div class="nav-mobile-overlay" id="nav-mobile-overlay"></div>',
    '<div class="nav-mobile-panel" id="nav-mobile-panel" aria-hidden="true">',
    '  <div class="nav-mob-acc">',

    /* Services */
    '    <div class="nav-mob-row">',
    '      <div class="nav-mob-header" data-mob-acc><span class="nav-mob-header-label" data-i18n="nav.services">Services</span><div class="nav-mob-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>',
    '      <div class="nav-mob-body">',
    '        <a class="nav-mob-sub-item" href="service-global-payroll.html"><div class="nav-mob-sub-icon"><img src="assets/Services/drop-down/global payroll.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.payroll.title">Global Payroll</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.payroll.desc">End-to-end payroll in 150+ countries</span></div></a>',
    '        <a class="nav-mob-sub-item" href="service-employer-of-record.html"><div class="nav-mob-sub-icon"><img src="assets/Services/drop-down/eor.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.eor.title">Employer of Record (EOR)</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.eor.desc">Hire globally without a local entity</span></div></a>',
    '        <a class="nav-mob-sub-item" href="service-independent-contractor.html"><div class="nav-mob-sub-icon"><img src="assets/Services/drop-down/ic.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.ic.title">Independent Contractor (IC)</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.ic.desc">Compliant contractor engagement</span></div></a>',
    '        <a class="nav-mob-sub-item" href="service-global-mobility.html"><div class="nav-mob-sub-icon"><img src="assets/Services/drop-down/global mobility.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.mobility.title">Global Mobility</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.mobility.desc">Seamless cross-border movements</span></div></a>',
    '        <a class="nav-mob-sub-item" href="service-expense-processing.html"><div class="nav-mob-sub-icon"><img src="assets/Services/drop-down/Expense Processing.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.expense.title">Expense Processing</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.expense.desc">Streamlined expense management</span></div></a>',
    '        <a class="nav-mob-sub-item" href="service-hr-operations.html"><div class="nav-mob-sub-icon"><img src="assets/Services/drop-down/HRO Support.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.hro.title">HR Operation Support</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.hro.desc">Outsourced HR operations</span></div></a>',
    '        <a class="nav-mob-sub-item" href="service-service-delivery-model.html"><div class="nav-mob-sub-icon"><img src="assets/Services/drop-down/Service Delivery Model.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.sdm.title">Service Delivery Model</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.sdm.desc">How Marco delivers its services</span></div></a>',
    '      </div>',
    '    </div>',

    /* Compliance */
    '    <div class="nav-mob-row">',
    '      <div class="nav-mob-header" data-mob-acc><span class="nav-mob-header-label" data-i18n="nav.compliance">Compliance</span><div class="nav-mob-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>',
    '      <div class="nav-mob-body">',
    '        <a class="nav-mob-sub-item" href="compliance-data-protection.html"><div class="nav-mob-sub-icon"><img src="assets/Compliance/data-protection-privacy-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.dataprot.title">Data Protection &amp; Privacy</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.dataprot.desc">Privacy controls for sensitive workforce data</span></div></a>',
    '        <a class="nav-mob-sub-item" href="compliance-operational-governance.html"><div class="nav-mob-sub-icon"><img src="assets/Compliance/operational-governance-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.opgov.title">Operational Governance</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.opgov.desc">Controls, accountability, and audit trails</span></div></a>',
    '        <a class="nav-mob-sub-item" href="compliance-licensing-regulatory.html"><div class="nav-mob-sub-icon"><img src="assets/Compliance/licensing-regulatory-compliance-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.lic.title">Licensing &amp; Regulatory Compliance</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.lic.desc">Local licenses and regulatory authorizations</span></div></a>',
    '      </div>',
    '    </div>',

    /* Resources */
    '    <div class="nav-mob-row">',
    '      <div class="nav-mob-header" data-mob-acc><span class="nav-mob-header-label" data-i18n="nav.resources">Resources</span><div class="nav-mob-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>',
    '      <div class="nav-mob-body">',
    '        <a class="nav-mob-sub-item" href="https://help.marcopayroll.com/" target="_blank" rel="noopener noreferrer"><div class="nav-mob-sub-icon"><img src="assets/Resources/help-center-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.help.title">Help Center</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.help.desc">Manual guides, FAQs, and product support</span></div></a>',
    '        <a class="nav-mob-sub-item" href="https://developer.marcopayroll.com/" target="_blank" rel="noopener noreferrer"><div class="nav-mob-sub-icon"><img src="assets/Resources/developer-portal-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.dev.title">Developer Portal</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.dev.desc">API documentation and integration resources</span></div></a>',
    '        <a class="nav-mob-sub-item" href="https://test.tryglobalworkforce.com/" target="_blank" rel="noopener noreferrer"><div class="nav-mob-sub-icon"><img src="assets/Resources/demo-site-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.demo.title">Demo Site</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.demo.desc">A test environment to explore Marco OS</span></div></a>',
    '        <a class="nav-mob-sub-item" href="https://engine.marcopayroll.com/" target="_blank" rel="noopener noreferrer"><div class="nav-mob-sub-icon"><img src="assets/Resources/processing-integration-engines-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.engine.title">Processing &amp; Integration Engines</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.engine.desc">Systems that power payroll and data workflows</span></div></a>',
    '        <a class="nav-mob-sub-item" href="#"><div class="nav-mob-sub-icon"><img src="assets/Resources/marco-copilot-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.copilot.title">Marco Copilot (AI Assistant)</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.copilot.desc">AI support for global workforce operations</span></div></a>',
    '      </div>',
    '    </div>',

    /* HR Knowledge Hub */
    '    <div class="nav-mob-row">',
    '      <div class="nav-mob-header" data-mob-acc><span class="nav-mob-header-label" data-i18n="nav.hub">HR Knowledge Hub</span><div class="nav-mob-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>',
    '      <div class="nav-mob-body">',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-labor-cost-calculator.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Labor Cost Calculator.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.lcc.title">Labor Cost Calculator</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.lcc.desc">Estimate employment costs by country</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-country-guide.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Country Guide.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.country.title">Country Guide</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.country.desc">Country-specific employment and payroll insights</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-visa-guide.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Visa Guide.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.visa.title">Visa Guide</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.visa.desc">Work visa requirements and application guidance</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-payroll-guide.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Payroll Guide.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.payguide.title">Payroll Guide</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.payguide.desc">Payroll rules, cycles, and statutory requirements</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-freelancer-guide.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Freelancer Guide.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.freelancer.title">Freelancer Guide</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.freelancer.desc">Independent contractor rules by country</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-employment-contract-matrix.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Employment Contract.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.contract.title">Employment Contract Matrix</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.contract.desc">Employment contract rules and required clauses by country</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-work-schedule.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Work Schedule.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.schedule.title">Work Schedule</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.schedule.desc">Working hours, rest days, and schedule rules</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-public-holiday-calendar-2026.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Public Holiday Calendar.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.holiday.title">Public Holiday Calendar</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.holiday.desc">Official holidays by country and year</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-leave-policy.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Leave Policy.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.leave.title">Leave Policy</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.leave.desc">Annual leave, sick leave, and statutory time off</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-travel-expense-policy.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Travel &amp; Expense Policy.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.travel.title">Travel &amp; Expense Policy</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.travel.desc">Business travel and reimbursement guidelines</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-benefits-plan.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Benefits Plan.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.benefits.title">Benefits Plan</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.benefits.desc">Mandatory and common employee benefits</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-government-claim-update.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Government Claim.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.govclaim.title">Government Claim Update</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.govclaim.desc">Government reimbursements, subsidies, and claim updates</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-vendor-list.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Vendor List.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.vendor.title">Vendor List</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.vendor.desc">Approved vendors and service partners</span></div></a>',
    '        <a class="nav-mob-sub-item" href="hr-knowledge-hub-memo.html"><div class="nav-mob-sub-icon"><img src="assets/HR Knowledge Hub/Memo.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.memo.title">Memo</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.memo.desc">HR updates, notes, and internal references</span></div></a>',
    '      </div>',
    '    </div>',

    /* Price */
    '    <div class="nav-mob-row">',
    '      <div class="nav-mob-header" data-mob-acc><span class="nav-mob-header-label" data-i18n="nav.price">Price</span><div class="nav-mob-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>',
    '      <div class="nav-mob-body">',
    '        <a class="nav-mob-sub-item-noicon" href="price-global-workforce-solution.html"><span class="nav-mob-sub-title-noicon" data-i18n="nav.dd.gws.title">Global Workforce Solution</span><span class="nav-mob-sub-desc-noicon" data-i18n="nav.dd.gws.desc">Service pricing for global workforce administration</span></a>',
    '        <a class="nav-mob-sub-item-noicon" href="price-global-managed-payroll-service.html"><span class="nav-mob-sub-title-noicon" data-i18n="nav.dd.gmps.title">Global Managed Payroll Service</span><span class="nav-mob-sub-desc-noicon" data-i18n="nav.dd.gmps.desc">Managed payroll pricing for global teams</span></a>',
    '        <a class="nav-mob-sub-item-noicon" href="price-proposal-builder.html"><span class="nav-mob-sub-title-noicon" data-i18n="nav.dd.proposal.title">Proposal Builder</span><span class="nav-mob-sub-desc-noicon" data-i18n="nav.dd.proposal.desc">Build a tailored service pricing proposal</span></a>',
    '      </div>',
    '    </div>',

    /* Company */
    '    <div class="nav-mob-row">',
    '      <div class="nav-mob-header" data-mob-acc><span class="nav-mob-header-label" data-i18n="nav.company">Company</span><div class="nav-mob-chevron"><svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>',
    '      <div class="nav-mob-body">',
    '        <a class="nav-mob-sub-item" href="company-vision-values.html"><div class="nav-mob-sub-icon"><img src="assets/Company/vision-&-values-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.vision.title">Vision &amp; Values</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.vision.desc">Our purpose and guiding principles</span></div></a>',
    '        <a class="nav-mob-sub-item" href="company-journey.html"><div class="nav-mob-sub-icon"><img src="assets/Company/our-journey-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.journey.title">Marco\'s Journey</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.journey.desc">The story behind Marco</span></div></a>',
    '        <a class="nav-mob-sub-item" href="company-entity-network.html"><div class="nav-mob-sub-icon"><img src="assets/Company/entity-network-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.entity.title">Entity Network</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.entity.desc">Global entities and operational service centers</span></div></a>',
    '        <a class="nav-mob-sub-item" href="company-organization.html"><div class="nav-mob-sub-icon"><img src="assets/Company/organization-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.org.title">Organization</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.org.desc">Leadership and structure</span></div></a>',
    '        <a class="nav-mob-sub-item" href="company-contact-us.html"><div class="nav-mob-sub-icon"><img src="assets/Company/contact-us-icon.svg" alt=""></div><div class="nav-mob-sub-text"><span class="nav-mob-sub-title" data-i18n="nav.dd.contact.title">Contact Us</span><span class="nav-mob-sub-desc" data-i18n="nav.dd.contact.desc">Get in touch with the Marco team</span></div></a>',
    '      </div>',
    '    </div>',

    '  </div>', /* /nav-mob-acc */
    '  <div class="nav-mob-signin-wrap">',
    '    <a class="nav-mob-signin" href="https://app.marcopayroll.com/login" target="_blank" rel="noopener noreferrer" data-i18n="nav.signin">Sign in</a>',
    '  </div>',
    '</div>' /* /nav-mobile-panel */
  ].join('\n');

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  /* Apply fixed background immediately for Type B pages (no scroll transparency) */
  var nav = document.getElementById('main-nav');
  if (document.body.dataset.navBg === 'fixed') {
    nav.classList.add('nav-fixed-bg');
  }

  /* Set up all interactive behaviors after DOM is ready */
  document.addEventListener('DOMContentLoaded', function () {
    var nav       = document.getElementById('main-nav');
    var hamburger = document.getElementById('nav-hamburger');
    var overlay   = document.getElementById('nav-mobile-overlay');
    var panel     = document.getElementById('nav-mobile-panel');

    /* Scroll behavior — transparent at top, gradient after scrolling */
    if (nav) {
      var hero = document.getElementById('hero');
      var scrollThreshold = hero ? (hero.offsetTop + hero.offsetHeight * 0.25) : 80;
      function updateNavState() {
        nav.classList.toggle('nav-scrolled', window.scrollY >= scrollThreshold);
      }
      window.addEventListener('scroll', updateNavState, { passive: true });
      if (hero) {
        window.addEventListener('resize', function () {
          scrollThreshold = hero.offsetTop + hero.offsetHeight * 0.25;
          updateNavState();
        });
      }
      updateNavState();
    }

    /* Mobile hamburger toggle + accordion */
    if (hamburger && overlay && panel) {
      function openPanel() {
        hamburger.classList.add('is-open');
        overlay.classList.add('is-open');
        panel.classList.add('is-open');
        if (nav) nav.classList.add('nav-panel-open');
        hamburger.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
      function closePanel() {
        hamburger.classList.remove('is-open');
        overlay.classList.remove('is-open');
        panel.classList.remove('is-open');
        if (nav) nav.classList.remove('nav-panel-open');
        hamburger.setAttribute('aria-expanded', 'false');
        panel.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      hamburger.addEventListener('click', function () {
        panel.classList.contains('is-open') ? closePanel() : openPanel();
      });
      overlay.addEventListener('click', closePanel);

      document.querySelectorAll('[data-mob-acc]').forEach(function (header) {
        header.addEventListener('click', function () {
          var row    = header.closest('.nav-mob-row');
          var isOpen = row.classList.contains('is-open');
          document.querySelectorAll('.nav-mob-row.is-open').forEach(function (r) { r.classList.remove('is-open'); });
          if (!isOpen) row.classList.add('is-open');
        });
      });

      var resizeTimer;
      window.addEventListener('resize', function () {
        panel.style.transition = 'none';
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () { panel.style.transition = ''; }, 100);
      });
    }

    /* Language dropdown — mobile trigger (desktop uses CSS hover) */
    var mTrigger  = document.getElementById('nav-mobile-lang-trigger');
    var mDropdown = document.getElementById('nav-mobile-lang-dropdown');
    if (mTrigger && mDropdown) {
      mTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var opening = !mDropdown.classList.contains('is-open');
        mDropdown.classList.toggle('is-open');
        mTrigger.classList.toggle('is-open');
        mDropdown.setAttribute('aria-hidden', opening ? 'false' : 'true');
      });
      mDropdown.addEventListener('click', function (e) { e.stopPropagation(); });
    }
    document.addEventListener('click', function () {
      document.querySelectorAll('.nav-lang-dropdown.is-open').forEach(function (d) {
        d.classList.remove('is-open');
        d.setAttribute('aria-hidden', 'true');
      });
      if (mTrigger) mTrigger.classList.remove('is-open');
    });
  });
})();
