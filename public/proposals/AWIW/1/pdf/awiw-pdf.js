/* AWIW website proposal PDF, in the Purple Giraffe report template (as used for the Spectrum Consultants audit):
   cover with logos, title and contents; numbered sections; purple-header tables; header line and giraffe footer strip.
   Built in the browser with the options the reader selected. Loaded only when Download PDF is clicked. */
(function () {
  var BASE = new URL('./', document.currentScript ? document.currentScript.src : location.href).href;
  var PURPLE = '#2E1A47', HEAD = '#311849', TEXT = '#343433', GREY = '#545454', MUTED = '#948794', ZEBRA = '#F4F1F6', RULE = '#D9D3E0';
  var DOC_TITLE = 'AWIW Website Proposal';
  var fmt = function (n) { return '$' + Math.round(n).toLocaleString('en-AU'); };
  var gst = function (n) { return Math.round(n * 0.1); };

  function loadPdfMake() {
    if (window.pdfMake) return Promise.resolve(window.pdfMake);
    return new Promise(function (res, rej) {
      var sc = document.createElement('script');
      sc.src = BASE + 'pdfmake.min.js';
      sc.onload = function () { res(window.pdfMake); };
      sc.onerror = function () { rej(new Error('Could not load the PDF tool')); };
      document.head.appendChild(sc);
    });
  }

  var SECTIONS = [
    'Thank you', 'What the new website will give AWIW', 'Why our websites are different', 'Our recommendation',
    'Your new website', 'How we\'ll build it', 'Why Purple Giraffe', 'Nothing gets lost in the move',
    'Your investment', 'How we work together', 'Next steps and acceptance', 'Pricing disclaimer'
  ];
  var n = 0;
  function h1(t) { n += 1; return { text: n + '. ' + t, style: 'h1', headlineLevel: 1, pageBreak: 'before' }; }
  function h1Flow(t) { n += 1; return { text: n + '. ' + t, style: 'h1', headlineLevel: 1, margin: [0, 22, 0, 10] }; }
  function h2(t) { return { text: t, style: 'h2', headlineLevel: 2 }; }
  function p(t, o) { return Object.assign({ text: t, style: 'body' }, o || {}); }
  function ul(items) { return { ul: items, style: 'list' }; }
  function cell(t, o) { return Object.assign({ text: t, style: 'td' }, o || {}); }
  function bullets(arr) { return { ul: arr, fontSize: 9, lineHeight: 1.25, color: TEXT }; }
  // Report table: purple header row, lavender zebra rows, thin rules. Rows never split across pages.
  function table(headers, rows, widths) {
    var body = [headers.map(function (h) { return { text: h, style: 'th' }; })].concat(rows.map(function (r) { return r.map(function (c) { return typeof c === 'string' ? cell(c) : c; }); }));
    return {
      table: { headerRows: 1, widths: widths, body: body, dontBreakRows: true },
      layout: {
        fillColor: function (i) { return i === 0 ? PURPLE : (i % 2 === 0 ? ZEBRA : null); },
        hLineWidth: function () { return 0.5; }, vLineWidth: function () { return 0.5; },
        hLineColor: function (i) { return i <= 1 ? PURPLE : RULE; }, vLineColor: function () { return RULE; },
        paddingLeft: function () { return 6; }, paddingRight: function () { return 6; },
        paddingTop: function () { return 5; }, paddingBottom: function () { return 5; }
      },
      margin: [0, 2, 0, 12]
    };
  }

  function build(sel) {
    n = 0;
    var c = [];
    var sched = sel.sched;

    // Cover (no header or footer strip)
    c.push({ columns: [{ image: 'pgLogo', width: 150 }, { stack: [{ image: 'awiwLogo', width: 175, alignment: 'right', margin: [0, 62, 0, 0] }] }], margin: [0, 0, 0, 22] });
    c.push({ text: 'Website Proposal', bold: true, fontSize: 36, color: PURPLE, lineHeight: 1, margin: [0, 0, 0, 6] });
    c.push({ text: 'A website built to grow Australian Women in Wine', bold: true, fontSize: 13, color: MUTED, margin: [0, 0, 0, 24] });
    var half = Math.ceil(SECTIONS.length / 2), tocRows = [];
    for (var i = 0; i < half; i++) {
      var r = [];
      [i, i + half].forEach(function (k) {
        if (k < SECTIONS.length) {
          r.push({ text: (k + 1 < 10 ? '0' : '') + (k + 1), bold: true, fontSize: 14, color: PURPLE, lineHeight: 1 });
          r.push({ text: SECTIONS[k], fontSize: 10, color: TEXT, margin: [0, 2, 8, 0] });
        } else { r.push({ text: '' }); r.push({ text: '' }); }
      });
      tocRows.push(r);
    }
    c.push({
      table: { widths: ['*'], body: [[{ stack: [
        { text: 'Contents', bold: true, fontSize: 16, color: TEXT, margin: [0, 0, 0, 10] },
        { table: { widths: [26, '*', 26, '*'], body: tocRows }, layout: { hLineWidth: function () { return 0; }, vLineWidth: function () { return 0; }, paddingTop: function () { return 5; }, paddingBottom: function () { return 5; }, paddingLeft: function () { return 0; }, paddingRight: function () { return 0; } } }
      ] }]] },
      layout: { fillColor: function () { return ZEBRA; }, hLineWidth: function () { return 0; }, vLineWidth: function () { return 0; }, paddingLeft: function () { return 16; }, paddingRight: function () { return 16; }, paddingTop: function () { return 14; }, paddingBottom: function () { return 14; } },
      margin: [0, 0, 0, 20]
    });
    c.push({ text: 'Prepared for: Australian Women in Wine', bold: true, fontSize: 9, color: MUTED });
    c.push({ text: 'Proposal: PG-WEB-2026-001', bold: true, fontSize: 9, color: MUTED });
    c.push({ text: 'Date: 3 November 2026 · Valid until 3 December 2026', bold: true, fontSize: 9, color: MUTED });

    // 1. Thank you
    c.push(h1(SECTIONS[0]));
    c.push(p('Thank you for the opportunity to provide this proposal for a new Australian Women in Wine website.', { bold: true, color: PURPLE }));
    c.push(p('The following pages contain information on who we are, how we\'ll build your website and our interpretation of our discussion of your needs.'));
    c.push(p('We have provided some options for your consideration. Our goal is to support your organisation as if we are your internal marketing team, we simply don\'t sit in your office. “When you win, we win.”'));
    c.push({ image: 'signature', width: 115, margin: [0, 6, 0, 0] });
    c.push({ text: 'Lynda Schenk', bold: true, color: PURPLE, fontSize: 10 });
    c.push({ text: 'Head Giraffe, Purple Giraffe', color: MUTED, fontSize: 9, margin: [0, 0, 0, 6] });

    // 2. Objective (same page)
    c.push(h1Flow(SECTIONS[1]));
    c.push(table(['Outcome', 'What it means for AWIW'], [
      ['Built for the people you need to reach', 'Clear routes from the home page for event-goers, members, volunteers, partners and media.'],
      ['A design as considered as your brand', 'A custom design for AWIW, from a moodboard and two homepage concepts, with two design review rounds.'],
      ['Works on every device', 'Designed mobile first and tested on real phones, tablets and desktops before launch.'],
      ['Easy for your team to update', 'Built on WordPress, with recorded training videos your team can watch whenever they need them.'],
      ['A Symposium page that works every year', 'One permanent page for the National Symposium: tickets and program before the event, highlights and partner thanks after it.'],
      ['Accessible and secure', 'Built to WCAG 2.2 AA accessibility, with security updates, backups and monitoring on the care plan.']
    ], [160, '*']));

    // 3. Different
    c.push(h1(SECTIONS[2]));
    c.push(h2('A marketing asset, not just a build'));
    c.push(p('Most websites are built by developers to a brief. Ours are planned and built by a team of marketing consultants, so your website works as a marketing asset from day one.'));
    c.push(ul(['Planned around your audiences and the actions you want them to take', 'Clear routes for event-goers, members, partners and media', 'Set up to support your newsletter, events and partner programs']));
    c.push(h2('Found on Google and in AI search'));
    c.push(p('Our AI and digital team sets the website up for search from the start, including the AI tools more people now use to find organisations like AWIW.'));
    c.push(ul(['Page structure, meta titles and descriptions, and schema for SEO', 'Clear, well-structured answers for GEO and AEO', 'Optimised for performance: fast load times, mobile first, images compressed', 'Tracking from launch with GA4, Tag Manager and Search Console']));
    c.push(table(['Term', 'Stands for', 'What it does'], [
      ['SEO', 'Search engine optimisation', 'Helping you rank in Google and Bing.'],
      ['GEO', 'Generative engine optimisation', 'Helping ChatGPT, Perplexity and Google AI Overviews understand, reference and recommend you.'],
      ['AEO', 'Answer engine optimisation', 'Structuring content to directly answer the questions members, partners and media ask.']
    ], [40, 140, '*']));

    // 4. Recommendation
    c.push(h1(SECTIONS[3]));
    c.push(p([{ text: 'Growth website, custom design, with Care. ', bold: true, color: PURPLE }, '9 pages on WordPress with a custom design. Approximately 3 weeks of build time, once the proposal is signed and final copy and images are approved.']));
    c.push(table(['Why this fits AWIW', ''], [
      ['Growth fits the new structure', 'Seven menu pages, a privacy policy and a news article template sit inside Growth\'s 6 to 10 pages, with SEO and AI visibility set up and redirects from your current website included.'],
      ['Custom, for a site as considered as the brand', 'A moodboard, two homepage concepts and a design system built around AWIW, with two design review rounds before we build.'],
      ['Care keeps it current, without extra work', 'Plugin, theme and security updates, a monthly report and up to 45 minutes of small changes each month.']
    ], [160, '*']));

    // 5. Sitemap
    c.push(h1(SECTIONS[4]));
    c.push(p('Nine pages, one clear structure. The new site keeps the structure the team already knows. Join Now becomes Get involved, a real Contact page is added, and a privacy policy sits in the footer. Every news post and media release uses one article template.'));
    c.push(table(['Page', 'Address', 'What\'s on it', 'Status'], [
      [cell('Home', { bold: true }), '/', bullets(['What AWIW is, in one clear line', 'What\'s on next', 'Four routes: attend, get involved, partner, read the research']), 'Rebuild'],
      [cell('About', { bold: true }), '/about/', bullets(['Your story and what AWIW does', 'The board, with Person schema', 'Awards honour roll, 2015 to 2020']), 'Rebuild'],
      [cell('National Symposium', { bold: true }), '/symposium/', bullets(['One permanent address, used every year', 'Tickets and program before the event', 'Highlights, photos and partner thanks after it', 'Event schema built in, past years archived']), 'Rebuild'],
      [cell('Resources', { bold: true }), '/resources/', bullets(['Women in wine: the current numbers, sourced and dated', 'Gender Equity Toolkit links', 'Research library below']), 'Rebuild'],
      [cell('Get involved', { bold: true }), '/get-involved/', bullets(['What joining means and what it costs', 'Newsletter sign-up with consent', 'Volunteer, board and nominations', 'Partner with us: why, reach and enquiry']), 'Replaces Join Now'],
      [cell('News', { bold: true }), '/news/', bullets(['Announcements and media releases', 'Named authors', 'Ten years of posts kept']), 'Tidy'],
      [cell('News article', { bold: true }), '/news/<post-name>/', bullets(['One template for every announcement and media release', 'Author, date, featured image and share links', 'Related posts, with Article schema for search']), 'New'],
      [cell('Contact', { bold: true }), '/contact/', bullets(['Real email and enquiry form by topic', 'Media contact', 'Linked social profiles']), 'New'],
      [cell('Privacy policy', { bold: true }), '/privacy/ (linked in the footer)', bullets(['What\'s collected and why', 'Linked from every form']), 'New']
    ], [82, 88, '*', 62]));
    c.push(h2('Your copy'));
    c.push(p('AWIW supplies the copy for each page, based on your existing website. We place it into the new design, format it for the web with headings, links and meta titles and descriptions, and flag anything that needs your attention. If you would like us to review and update the copy for SEO, GEO and AEO, this is an optional item in the investment.'));

    // 6. Process
    c.push(h1(SECTIONS[5]));
    c.push(p('Four stages, approximately three weeks. Timing starts once we have signed agreement to proceed, final approved copy and images. Purple Giraffe will provide updates across the stages identified below. The timeline pauses while we wait on AWIW\'s feedback or approvals.'));
    c.push(table(['Stage', 'What happens', 'From AWIW', 'Invoiced'], [
      [cell([{ text: '1. Discovery and setup\n', bold: true }, { text: 'About 3 days of build time', color: MUTED }]), bullets(['Kickoff call to confirm goals, audiences, pages and timing around the 2027 Symposium', 'Access to your hosting provider, domain and current website', 'A staging site set up and hidden from search engines', 'Final sitemap and redirect map agreed']), 'Access details, your copy, images and brand assets, and one contact for feedback.', cell([{ text: '25% on signing\n' }, { text: fmt(sched[0]), bold: true }])],
      [cell([{ text: '2. Design\n', bold: true }, { text: 'About 1 week of build time', color: MUTED }]), bullets(['Moodboard and two homepage concepts', 'Design system and page templates for every page type', 'Two design review rounds before we build']), 'Feedback within 2 business days per review round.', cell([{ text: '25% after design\n' }, { text: fmt(sched[1]), bold: true }])],
      [cell([{ text: '3. Build and content\n', bold: true }, { text: 'About 1 week of build time', color: MUTED }]), bullets(['Nine pages built on WordPress from the approved design, including the news article template', 'Your copy placed and formatted, with meta titles and descriptions', 'Schema, forms and tracking set up', 'One round of feedback on the working website']), 'Review of the working website. Optional: our SEO, GEO and AEO copy review.', cell([{ text: '35% after build\n' }, { text: fmt(sched[2]), bold: true }])],
      [cell([{ text: '4. Launch and training\n', bold: true }, { text: 'About 3 days of build time', color: MUTED }]), bullets(['Redirects switched on and tested', 'Speed, image and mobile optimisation', 'Real-device testing and go-live, then checks within 48 hours', 'Recorded training videos and 30 days of fixes']), 'Sign-off to go live.', cell([{ text: '15% at go-live\n' }, { text: fmt(sched[3]), bold: true }])]
    ], [92, '*', 100, 66]));
    c.push(h2('The full scope, phase by phase'));
    c.push(table(['Phase', 'Included'], [
      [cell('Strategy', { bold: true }), bullets(['Planning around AWIW\'s objectives, so the website works visually and in its content', 'User pathways and a sitemap that set the page structure, layout and flow of content', 'A dedicated project contact for the whole project'])],
      [cell('Design', { bold: true }), bullets(['Home page and internal page templates, based on the agreed sitemap', 'Designed to work on phone, tablet and computer', 'Your current branding applied throughout', 'Quick links to your main areas: attend, get involved, partner and research', 'Your own photography, or licensed stock at cost if needed'])],
      [cell('Development', { bold: true }), bullets(['WordPress, so your team can update pages, news and events through a simple login', 'On-page SEO: page titles, meta descriptions, headings and schema', 'GEO and AEO: clear answers and structured content AI tools can understand', 'Google Analytics 4, Tag Manager and Search Console', 'Enquiry forms emailed to you and stored as a safeguard', 'Newsletter sign-up connected to your mailing platform', 'Social links, click to call on mobile, and accessibility to WCAG 2.2 AA'])],
      [cell('Deployment', { bold: true }), bullets(['Your copy placed on all nine pages', 'Built on a staging site and moved live on your approval', 'Tested on current Chrome, Safari, Edge and Firefox', 'Permanent redirects from your current addresses', 'Recorded training videos for your team, and 30 days of fixes'])]
    ], [80, '*']));

    // 7. Why Purple Giraffe
    c.push(h1(SECTIONS[6]));
    c.push(p('Purple Giraffe was founded in 2014 when marketing expert Lynda Schenk saw the growing need for outsourced marketing consultants. Now with offices in South Australia, Western Australia and Queensland, Purple Giraffe offers end-to-end outsourced marketing consulting services to our clients. We\'re strategically driven, and we adapt our offering to suit each client\'s needs, with their specific target market in mind.'));
    c.push({ image: 'team', fit: [451, 190], alignment: 'center', margin: [0, 2, 0, 12] });
    c.push(h2('Your project team'));
    [['suba', 'Suba Thiyagarajah', 'AI and Digital Solutions Consultant', 'Suba brings over eight years of experience across digital project management, operations and AI. He has built and scaled delivery teams across the UK, Sri Lanka and Australia, with depth in the health and medical sector. At Purple Giraffe, Suba leads the way on AI and digital solutions for both the team and our clients, turning complex challenges into simple, practical solutions, whether that is implementing AI, delivering website projects or improving systems.'],
     ['chloe', 'Chloé James', 'Marketing Consultant', 'Chloé is a communications professional with over 20 years’ experience working in media, public relations, marketing, events, internal and external communications, corporate affairs, and leadership. A former Sky News Business Anchor, Chloé has lived and worked all over the world and has interviewed some of the world’s most successful business people. Her passion for brand building and story-telling is a true asset to the businesses she works with.']
    ].forEach(function (m) {
      c.push({ unbreakable: true, columns: [{ image: m[0], width: 58 }, { stack: [{ text: m[1], bold: true, fontSize: 10.5, color: PURPLE }, { text: m[2], fontSize: 8.5, color: MUTED, margin: [0, 1, 0, 4] }, { text: m[3], style: 'small' }], margin: [12, 0, 0, 0] }], margin: [0, 0, 0, 12] });
    });
    c.push(h2('What our clients say'));
    c.push(table(['Client', 'What they said'], [
      ['Riverland Wine', '“They do everything to a very high quality. They get things done.”'],
      ['PG client', '“I would thoroughly recommend Purple Giraffe. Their staff is experienced and they understand our brand.”'],
      ['PG client', '“The return on investment that you will get with them is absolutely brilliant.”']
    ], [100, '*']));
    c.push(h2('Hear it from our clients'));
    var vids = [['Purple Giraffe testimonial highlights', 'https://vimeo.com/848960312/b4deaee89b'], ['Magain', 'https://vimeo.com/1161264603/415b14a6fb'], ['Treasure Boxes', 'https://vimeo.com/1123788160/a758795ade'], ['ARAS', 'https://vimeo.com/1116673613/370a7cb05d'], ['PRG Strategic Advisors', 'https://vimeo.com/1115071689/511a2dda3f']];
    c.push({ ul: vids.map(function (v) { return { text: [{ text: v[0], bold: true, color: PURPLE, link: v[1] }, { text: ': watch the video testimonial', link: v[1] }] }; }), style: 'list' });
    c.push(p([{ text: 'Want to see more? Visit ' }, { text: 'purplegiraffe.com.au/testimonial', color: PURPLE, decoration: 'underline', link: 'https://purplegiraffe.com.au/testimonial/' }]));

    // 8. Protect
    c.push(h1(SECTIONS[7]));
    c.push(p('Years of award winners, media releases and links from partner websites sit on your current website\'s addresses. Every address is reviewed with you: it moves to its new home with a permanent redirect, or, where a page may no longer be needed, we agree together whether to move it into the new design or retire it. It\'s the least glamorous part of the project, and we put the most care into it.'));
    c.push(table(['Current addresses', 'What happens'], [
      ['News and resources posts', 'Kept, at the same address'],
      ['Past Symposium pages', 'Permanent redirect to /symposium/'],
      ['Join Now', 'Permanent redirect to /get-involved/'],
      ['Old pages with a new home', 'Permanent redirect to their new page'],
      ['Other pages and resources', 'Reviewed with you, then moved into the new design or retired']
    ], [190, '*']));

    // 9. Investment: the reader's selection
    c.push(h1(SECTIONS[8]));
    c.push(p('The package and options below are the ones selected in the online proposal. All prices are in Australian dollars and exclude GST unless shown otherwise.'));
    c.push(h2('One-off'));
    var one = [[cell([{ text: sel.pkg.name, bold: true }, { text: '\n9 pages · WordPress · approximately 3 weeks of build time. First-client price (regular price ' + fmt(sel.pkg.regular) + ').', color: MUTED }]), cell('1'), cell(fmt(sel.pkg.price), { alignment: 'right' })]];
    sel.extras.forEach(function (x) { one.push([cell([{ text: x.name, bold: true }, { text: '\n' + fmt(x.price) + ' ' + x.unit + ', ex GST', color: MUTED }]), cell(String(x.qty)), cell(fmt(x.amt), { alignment: 'right' })]); });
    if (!sel.extras.length) one.push([cell('No extras selected', { color: MUTED }), cell(''), cell('$0', { alignment: 'right' })]);
    one.push([cell('One-off total, ex GST', { bold: true, color: PURPLE }), cell(''), cell(fmt(sel.oneOff), { bold: true, color: PURPLE, alignment: 'right' })]);
    one.push([cell('GST'), cell(''), cell(fmt(gst(sel.oneOff)), { alignment: 'right' })]);
    one.push([cell('One-off total, inc GST', { bold: true }), cell(''), cell(fmt(sel.oneOff + gst(sel.oneOff)), { bold: true, alignment: 'right' })]);
    c.push(table(['Item', 'Qty', 'Amount'], one, ['*', 30, 80]));
    c.push(h2('Monthly'));
    var mon = [];
    function mrow(label, item, none) {
      if (!item) { mon.push([cell([{ text: label, bold: true }, { text: '\n' + none, color: MUTED }]), cell('$0', { alignment: 'right' })]); return; }
      mon.push([cell([{ text: label + ': ' + item.name, bold: true }, { text: '\n' + (item.items || []).join('; '), color: MUTED }]), cell(fmt(item.m) + '/mth', { alignment: 'right' })]);
    }
    mrow('Hosting', sel.host, 'Keeping your current hosting provider');
    mrow('Care plan', sel.care, 'No care plan selected');
    mrow('Ongoing support', sel.sup, 'None selected. One-off changes are $185 per hour ex GST (1 hour minimum), or $930 ex GST for a 5-hour block used within 3 months.');
    mon.push([cell('Monthly total, ex GST', { bold: true, color: PURPLE }), cell(fmt(sel.monthly) + '/mth', { bold: true, color: PURPLE, alignment: 'right' })]);
    mon.push([cell('Monthly total, inc GST', { bold: true }), cell(fmt(sel.monthly + gst(sel.monthly)) + '/mth', { bold: true, alignment: 'right' })]);
    c.push(table(['Service', 'Amount'], mon, ['*', 90]));
    c.push(h2('Build payments'));
    c.push(table(['On signing (25%)', 'After design (25%)', 'After build (35%)', 'At go-live (15%)'], [sched.map(function (v) { return cell(fmt(v), { bold: true, color: PURPLE, fontSize: 11 }); })], ['*', '*', '*', '*']));
    c.push(p('Third-party running costs (like domains and premium plugins) are paid directly by you. To start, we\'ll need access to your hosting account or hosting provider. Care, hosting and ongoing support are billed monthly, with 30 days\' notice to cancel.', { style: 'small' }));

    // 10. Terms
    c.push(h1(SECTIONS[9]));
    c.push(p('Clear terms. No surprises.', { bold: true, color: PURPLE }));
    c.push(table(['Term', 'What it means'], [
      ['Review rounds', 'Two design review rounds, plus one round on the working site. Extra rounds are $370 (ex GST) each.'],
      ['Feedback', 'One person on your side consolidates feedback and returns it within 2 business days per round. Delays move the timeline, not the price.'],
      ['Timeline', 'Approximately 3 weeks of build time, starting once the proposal is signed and final copy and images are approved. The timeline pauses while we wait on feedback or approvals.'],
      ['Defects and changes', 'A defect is something that doesn\'t work or doesn\'t match what was approved, and we fix it free. A change is anything new, and we quote it before starting.'],
      ['Warranty', '30 days of fixes after launch.'],
      ['You own your accounts', 'Your domain, analytics and other accounts stay in your name. We get access, never ownership.'],
      ['Ownership of your site', 'The design and content transfer to you on final payment. Licensed third-party items (like themes and fonts) stay under their own licences.'],
      ['Your content', 'AWIW supplies the copy and images. We place and format them, and flag anything that needs your attention.'],
      ['Training and handover', 'Recorded training videos for your team, and every login and account handed over at launch.']
    ], [130, '*']));

    // 11. Next steps and acceptance
    c.push(h1(SECTIONS[10]));
    c.push({ ol: ['Accept below.', 'We send the scope and first invoice (25%).', 'We book your kickoff call with the board.'], style: 'list' });
    var line = function (label, val) { return { stack: [{ text: label, fontSize: 8, color: MUTED, bold: true }, { text: val || ' ', fontSize: 10.5, color: PURPLE, margin: [0, 8, 0, 3] }, { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 205, y2: 0, lineWidth: 0.6, lineColor: MUTED }] }], margin: [0, 0, 0, 16] }; };
    c.push({ unbreakable: true, stack: [
      h2('Acceptance'),
      p('By signing, you confirm you have read and accept this proposal, the selection in section 9 and the pricing disclaimer. Sign and return this page to marketing@purplegiraffe.com.au, or accept online at websitedevelopment.purplegiraffetower.com/proposals/AWIW/1'),
      { columns: [line('Name', sel.f.name), line('Position', sel.f.position)], columnGap: 24, margin: [0, 8, 0, 0] },
      { columns: [line('Organisation', 'Australian Women in Wine'), line('Date')], columnGap: 24 },
      { columns: [line('Signature'), { text: '' }], columnGap: 24 },
      p('Questions first? Call 08 8425 2970 or email marketing@purplegiraffe.com.au.', { style: 'small' })
    ] });

    // 12. Disclaimer
    c.push(h1(SECTIONS[11]));
    c.push(h2('This proposal does not include'));
    c.push(ul(['Any variations to the scope set out in this proposal. All variations or additional fees will be quoted as a fixed price or hourly rate that you agree to in writing before any work starts', 'Graphic design such as infographics or iconography. This can be part of an outsourced marketing package or quoted as a standalone project', 'Any once-off or ongoing fees for third-party applications or website running costs (for example premium themes, plugins, domain registration, payment gateway fees and business email)', 'Any costs from delays caused by faults or defects in a third-party service', 'Any costs to Purple Giraffe from interruptions caused by the client\'s action or inaction', 'Custom web applications, portals, multilingual websites or complex platform migrations']));
    c.push(h2('You\'ll need to provide'));
    c.push(ul(['Copy for your terms and conditions and privacy policy', 'All branding, images and video for the website', 'Access to your domain, hosting and existing website accounts (these stay in your name)', 'One person to consolidate website feedback, returned within 2 business days per review round']));
    c.push(h2('Billing'));
    c.push(ul(['Website projects are billed in four parts: 25% when the proposal is signed, 25% after design approval, 35% after build and content, and 15% at go-live. Invoices are due within 7 days', 'Care, hosting and ongoing support are billed monthly, with 30 days\' notice to cancel']));
    c.push(h2('Typical running costs paid directly by you'));
    c.push(p('Indicative, so check current pricing: domain about $15 to $30 a year; premium plugins, budget $0 to $200 a month. Card fees depend on your payment gateway.'));
    c.push({ text: [{ text: 'When you win, ' }, { text: 'we win.', color: MUTED }], bold: true, fontSize: 18, color: PURPLE, margin: [0, 24, 0, 0] });

    // Keep small tables whole, and keep a subheading with the table under it.
    var out = [];
    for (var k = 0; k < c.length; k++) {
      var node = c[k], next = c[k + 1];
      var small = function (x) { return x && x.table && x.table.body && x.table.body.length <= 7; };
      if (node && node.style === 'h2' && small(next)) { out.push({ unbreakable: true, stack: [node, next] }); k++; continue; }
      if (small(node) && node.table.headerRows) { out.push({ unbreakable: true, stack: [node] }); continue; }
      out.push(node);
    }
    return out;
  }

  function docDefinition(sel) {
    return {
      pageSize: 'A4',
      pageMargins: [72, 72, 72, 90],
      info: { title: 'Website proposal for Australian Women in Wine', author: 'Purple Giraffe', subject: 'PG-WEB-2026-001' },
      defaultStyle: { font: 'Body', fontSize: 10, color: TEXT, lineHeight: 1.3 },
      styles: {
        h1: { bold: true, fontSize: 16, color: PURPLE, margin: [0, 0, 0, 10] },
        h2: { bold: true, fontSize: 12, color: MUTED, margin: [0, 8, 0, 6] },
        body: { fontSize: 10, color: TEXT, lineHeight: 1.35, margin: [0, 0, 0, 8] },
        small: { fontSize: 8.5, color: GREY, lineHeight: 1.3 },
        list: { fontSize: 10, color: TEXT, lineHeight: 1.35, margin: [0, 0, 0, 8] },
        th: { bold: true, fontSize: 9, color: '#FFFFFF' },
        td: { fontSize: 9, color: TEXT, lineHeight: 1.25 }
      },
      images: {
        pgLogo: BASE + 'pg-logo-stacked.png', awiwLogo: BASE + 'awiw-logo.jpg', team: BASE + 'team.jpg', suba: BASE + 'suba.jpg', chloe: BASE + 'chloe.jpg',
        signature: BASE + 'signature.png', strip: BASE + 'footer-strip.png'
      },
      // From page 2: "AWIW Website Proposal | Purple Giraffe | page N", numbered from 1 after the cover.
      header: function (page) {
        if (page === 1) return null;
        return { text: [{ text: DOC_TITLE, color: GREY }, { text: '  |  ', color: MUTED }, { text: 'Purple Giraffe', color: GREY }, { text: '  |  ', color: MUTED }, { text: 'page ' + (page - 1), color: HEAD }], bold: true, fontSize: 8.5, alignment: 'right', margin: [72, 34, 40, 0] };
      },
      // Footer strip with the three office numbers from page 2; the cover carries only the confidential line.
      background: function (page) {
        if (page === 1) return { text: 'Confidential: prepared for Australian Women in Wine', fontSize: 8, color: TEXT, absolutePosition: { x: 72, y: 790 } };
        return { image: 'strip', width: 610, absolutePosition: { x: 0, y: 778 } };
      },
      pageBreakBefore: function (node, following) { return !!node.headlineLevel && following.length === 0; },
      content: build(sel)
    };
  }

  window.AWIWPDF = function (sel) {
    return loadPdfMake().then(function (pdfMake) {
      pdfMake.fonts = { Body: { normal: BASE + 'NordiquePro-Regular.otf', bold: BASE + 'NordiquePro-Semibold.otf', italics: BASE + 'NordiquePro-Regular.otf', bolditalics: BASE + 'NordiquePro-Semibold.otf' } };
      var doc = pdfMake.createPdf(docDefinition(sel));
      return new Promise(function (res) { doc.download('AWIW-website-proposal-Purple-Giraffe.pdf', res); });
    });
  };
  window.AWIWPDF.definition = docDefinition;
})();
