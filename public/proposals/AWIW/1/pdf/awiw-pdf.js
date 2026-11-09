/* AWIW website proposal: builds the PDF in the Purple Giraffe document template (header line, giraffe footer
   strip, Nordique Pro), with the options the reader selected on the page. Loaded only when Download PDF is clicked. */
(function () {
  var BASE = new URL('./', document.currentScript ? document.currentScript.src : location.href).href;
  var PURPLE = '#2E1A47', ACCENT = '#6B4E91', TEXT = '#343433', GREY = '#605E5C', MUTED = '#948794', TINT = '#F4F1F7', LINE = '#E4E0EA';
  var fmt = function (n) { return '$' + Math.round(n).toLocaleString('en-AU'); };

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

  // ---------- building blocks ----------
  function eyebrow(t) { return { text: t.toUpperCase(), fontSize: 7.5, characterSpacing: 1.2, color: ACCENT, margin: [0, 0, 0, 6] }; }
  function h1(t, opts) { return Object.assign({ text: t, font: 'NordiqueReg', bold: true, fontSize: 21, color: PURPLE, lineHeight: 1.05, margin: [0, 0, 0, 12], headlineLevel: 1 }, opts || {}); }
  function h2(t, opts) { return Object.assign({ text: t, font: 'NordiqueReg', bold: true, fontSize: 12.5, color: PURPLE, margin: [0, 14, 0, 6], headlineLevel: 2 }, opts || {}); }
  function p(t, opts) { return Object.assign({ text: t, fontSize: 9.5, lineHeight: 1.35, color: TEXT, margin: [0, 0, 0, 8] }, opts || {}); }
  function ul(items, opts) { return Object.assign({ ul: items.map(function (i) { return { text: i, margin: [0, 0, 0, 3] }; }), fontSize: 9, lineHeight: 1.3, color: TEXT, markerColor: ACCENT, margin: [0, 0, 0, 8] }, opts || {}); }
  function section(id, title, kicker, breakBefore) {
    var h = h1(title); delete h.headlineLevel;
    var s = { stack: [eyebrow(kicker), h], headlineLevel: 1, unbreakable: true, margin: [0, 0, 0, 0] };
    if (breakBefore) s.pageBreak = 'before';
    return [s];
  }
  function boxLayout(fill) {
    return {
      hLineWidth: function () { return 0.6; }, vLineWidth: function () { return 0.6; },
      hLineColor: function () { return LINE; }, vLineColor: function () { return LINE; },
      fillColor: function () { return fill || null; },
      paddingLeft: function () { return 10; }, paddingRight: function () { return 10; },
      paddingTop: function () { return 9; }, paddingBottom: function () { return 9; }
    };
  }
  // Cards in a grid: rows never split across pages.
  function grid(cards, cols, fill) {
    var body = [];
    for (var i = 0; i < cards.length; i += cols) {
      var row = cards.slice(i, i + cols);
      while (row.length < cols) row.push({ text: '' });
      body.push(row);
    }
    var widths = []; for (var k = 0; k < cols; k++) widths.push('*');
    return { table: { widths: widths, body: body, dontBreakRows: true }, layout: boxLayout(fill === undefined ? TINT : fill), margin: [0, 2, 0, 12] };
  }
  function card(num, title, body, extra) {
    var st = [];
    if (num) st.push({ text: num, fontSize: 7.5, color: ACCENT, margin: [0, 0, 0, 3] });
    st.push({ text: title, font: 'NordiqueReg', bold: true, fontSize: 10, color: PURPLE, margin: [0, 0, 0, 4] });
    if (body) st.push({ text: body, fontSize: 8.6, lineHeight: 1.3, color: TEXT });
    if (extra) st = st.concat(extra);
    return { stack: st };
  }
  function note(content) {
    return { table: { widths: ['*'], body: [[{ stack: [].concat(content) }]] }, layout: boxLayout('#EFEAF5'), margin: [0, 4, 0, 12] };
  }
  function kv(rows, widths) {
    return {
      table: { widths: widths || ['*', 92], body: rows },
      layout: {
        hLineWidth: function (i, node) { return i === 0 ? 0 : 0.6; }, vLineWidth: function () { return 0; },
        hLineColor: function () { return LINE; }, paddingLeft: function () { return 0; }, paddingRight: function () { return 0; },
        paddingTop: function () { return 6; }, paddingBottom: function () { return 6; }
      },
      margin: [0, 0, 0, 6]
    };
  }

  // ---------- the document ----------
  function build(sel) {
    var c = [];
    var gst = function (n) { return Math.round(n * 0.1); };
    var sched = sel.sched;

    // Cover
    c.push({ columns: [{ image: 'pgLogo', width: 64 }, { text: '×', fontSize: 16, color: MUTED, width: 26, alignment: 'center', margin: [0, 20, 0, 0] }, { image: 'awiwLogo', width: 150, margin: [0, 14, 0, 0] }], margin: [0, 10, 0, 34] });
    c.push(eyebrow('Website proposal'));
    c.push({ text: [{ text: 'A website built to grow\n' }, { text: 'Australian Women in Wine.', color: ACCENT }], font: 'NordiqueReg', bold: true, fontSize: 30, color: PURPLE, lineHeight: 1.05, margin: [0, 0, 0, 18] });
    c.push(p('A custom-designed website for AWIW, planned by marketers and built by our in-house team to be found on Google and in AI search.', { fontSize: 11 }));
    c.push(p('Nine pages on WordPress, with your existing copy placed and formatted, one permanent home for the National Symposium, and redirects so the years of history on your current website keep working. Launch in approximately 3 weeks of build time, once the proposal is signed and final copy and images are approved.'));
    c.push({ image: 'team', fit: [475, 190], alignment: 'center', margin: [0, 10, 0, 14] });
    c.push(kv([
      [{ text: 'Prepared for', color: GREY, fontSize: 8.5 }, { text: 'Australian Women in Wine', bold: true, color: PURPLE, fontSize: 9.5, alignment: 'right' }],
      [{ text: 'Prepared by', color: GREY, fontSize: 8.5 }, { text: 'Purple Giraffe', bold: true, color: PURPLE, fontSize: 9.5, alignment: 'right' }],
      [{ text: 'Proposal', color: GREY, fontSize: 8.5 }, { text: 'PG-WEB-2026-001', bold: true, color: PURPLE, fontSize: 9.5, alignment: 'right' }],
      [{ text: 'Date', color: GREY, fontSize: 8.5 }, { text: '3 November 2026', bold: true, color: PURPLE, fontSize: 9.5, alignment: 'right' }],
      [{ text: 'Valid until', color: GREY, fontSize: 8.5 }, { text: '3 December 2026', bold: true, color: PURPLE, fontSize: 9.5, alignment: 'right' }]
    ], ['*', 'auto']));

    // Thank you
    c = c.concat(section('thanks', 'Thank you', 'Introduction', true));
    c.push(p('Thank you for the opportunity to provide this proposal for a new Australian Women in Wine website.', { fontSize: 12, color: PURPLE, margin: [0, 0, 0, 12] }));
    c.push(p('The following pages contain information on who we are, how we\'ll build your website and our interpretation of our discussion of your needs.'));
    c.push(p('We have provided some options for your consideration. Our goal is to support your organisation as if we are your internal marketing team, we simply don\'t sit in your office. “When you win, we win.”'));
    c.push({ image: 'signature', width: 120, margin: [0, 10, 0, 2] });
    c.push({ text: 'Lynda Schenk', bold: true, color: PURPLE, fontSize: 10 });
    c.push({ text: 'Head Giraffe, Purple Giraffe', color: GREY, fontSize: 8.5, margin: [0, 0, 0, 22] });

    // Objective
    c = c.concat(section('objective', 'What the new website will give AWIW', 'Objective', false));
    c.push(grid([
      card('01', 'Built for the people you need to reach', 'Clear routes from the home page for event-goers, members, volunteers, partners and media.'),
      card('02', 'A design as considered as your brand', 'A custom design for AWIW, from a moodboard and two homepage concepts, with two design review rounds.'),
      card('03', 'Works on every device', 'Designed mobile first and tested on real phones, tablets and desktops before launch.'),
      card('04', 'Easy for your team to update', 'Built on WordPress, with recorded training videos your team can watch whenever they need them.'),
      card('05', 'A Symposium page that works every year', 'One permanent page for the National Symposium: tickets and program before the event, highlights and partner thanks after it.'),
      card('06', 'Accessible and secure', 'Built to WCAG 2.2 AA accessibility, with security updates, backups and monitoring on the care plan.')
    ], 2));

    // Why our websites are different
    c = c.concat(section('different', 'A website built with a marketing lens', 'Why our websites are different', true));
    c.push(h2('A marketing asset, not just a build', { margin: [0, 0, 0, 6] }));
    c.push(p('Most websites are built by developers to a brief. Ours are planned and built by a team of marketing consultants, so your website works as a marketing asset from day one.'));
    c.push(ul(['Planned around your audiences and the actions you want them to take', 'Clear routes for event-goers, members, partners and media', 'Set up to support your newsletter, events and partner programs']));
    c.push(h2('Found on Google and in AI search'));
    c.push(p('Our AI and digital team sets the website up for search from the start, including the AI tools more people now use to find organisations like AWIW.'));
    c.push(ul(['Page structure, meta titles and descriptions, and schema for SEO', 'Clear, well-structured answers for GEO and AEO', 'Optimised for performance: fast load times, mobile first, images compressed', 'Tracking from launch with GA4, Tag Manager and Search Console']));
    c.push(grid([
      card('SEO', 'Search engine optimisation', 'Helping you rank in Google and Bing.'),
      card('GEO', 'Generative engine optimisation', 'Helping ChatGPT, Perplexity and Google AI Overviews understand, reference and recommend you.'),
      card('AEO', 'Answer engine optimisation', 'Structuring content to directly answer the questions members, partners and media ask.')
    ], 3));

    // Recommendation
    c = c.concat(section('recommendation', 'Growth website, custom design, with Care', 'Our recommendation', true));
    c.push(note([
      { text: 'RECOMMENDED FOR AWIW', fontSize: 7, characterSpacing: 1, color: ACCENT, margin: [0, 0, 0, 4] },
      { text: 'Growth', font: 'NordiqueReg', bold: true, fontSize: 16, color: PURPLE },
      { text: '9 pages · WordPress · Custom design', fontSize: 9, color: GREY, margin: [0, 2, 0, 4] },
      { text: 'Approximately 3 weeks of build time, once the proposal is signed and final copy and images are approved.', fontSize: 9, color: TEXT }
    ]));
    c.push(h2('Why this fits AWIW'));
    c.push(grid([
      card('01', 'Growth fits the new structure', 'Seven menu pages, a privacy policy and a news article template sit inside Growth\'s 6 to 10 pages, with SEO and AI visibility set up and redirects from your current website included.'),
      card('02', 'Custom, for a site as considered as the brand', 'A moodboard, two homepage concepts and a design system built around AWIW, with two design review rounds before we build.'),
      card('03', 'Care keeps it current, without extra work', 'Plugin, theme and security updates, a monthly report and up to 45 minutes of small changes each month.')
    ], 1, null));

    // Sitemap
    c = c.concat(section('sitemap', 'Nine pages, one clear structure', 'Your new website', true));
    c.push(p('The new site keeps the structure the team already knows. Join Now becomes Get involved, a real Contact page is added, and a privacy policy sits in the footer. Every news post and media release uses one article template.'));
    var pages = [
      ['01', 'Rebuild', 'Home', '/', ['What AWIW is, in one clear line', 'What\'s on next', 'Four routes: attend, get involved, partner, read the research']],
      ['02', 'Rebuild', 'About', '/about/', ['Your story and what AWIW does', 'The board, with Person schema', 'Awards honour roll, 2015 to 2020']],
      ['03', 'Rebuild', 'National Symposium', '/symposium/', ['One permanent address, used every year', 'Tickets and program before the event', 'Highlights, photos and partner thanks after it', 'Event schema built in, past years archived']],
      ['04', 'Rebuild', 'Resources', '/resources/', ['Women in wine: the current numbers, sourced and dated', 'Gender Equity Toolkit links', 'Research library below']],
      ['05', 'Replaces Join Now', 'Get involved', '/get-involved/', ['What joining means and what it costs', 'Newsletter sign-up with consent', 'Volunteer, board and nominations', 'Partner with us: why, reach and enquiry']],
      ['06', 'Tidy', 'News', '/news/', ['Announcements and media releases', 'Named authors', 'Ten years of posts kept']],
      ['07', 'New', 'News article', '/news/<post-name>/', ['One template for every announcement and media release', 'Author, date, featured image and share links', 'Related posts, with Article schema for search']],
      ['08', 'New', 'Contact', '/contact/', ['Real email and enquiry form by topic', 'Media contact', 'Linked social profiles']],
      ['09', 'New', 'Privacy policy', '/privacy/ (linked in the footer)', ['What\'s collected and why', 'Linked from every form']]
    ];
    c.push(grid(pages.map(function (pg) {
      return { stack: [
        { columns: [{ text: pg[0], fontSize: 7.5, color: ACCENT }, { text: pg[1].toUpperCase(), fontSize: 6.5, color: ACCENT, alignment: 'right', characterSpacing: 0.6 }], margin: [0, 0, 0, 3] },
        { text: pg[2], font: 'NordiqueReg', bold: true, fontSize: 10, color: PURPLE },
        { text: pg[3], fontSize: 7.5, color: GREY, margin: [0, 1, 0, 5] },
        { ul: pg[4], fontSize: 8, lineHeight: 1.25, color: TEXT, markerColor: ACCENT }
      ] };
    }), 3));
    c.push(note([
      { text: 'Your copy', bold: true, color: PURPLE, fontSize: 9.5, margin: [0, 0, 0, 3] },
      { text: 'AWIW supplies the copy for each page, based on your existing website. We place it into the new design, format it for the web with headings, links and meta titles and descriptions, and flag anything that needs your attention. If you would like us to review and update the copy for SEO, GEO and AEO, this is an optional item in the investment.', fontSize: 8.8, lineHeight: 1.3, color: TEXT }
    ]));

    // Process
    c = c.concat(section('process', 'Four stages, approximately three weeks', 'How we\'ll build it', true));
    c.push(p('Timing starts once we have signed agreement to proceed, final approved copy and images. Purple Giraffe will provide updates across the stages identified below. The timeline pauses while we wait on AWIW\'s feedback or approvals.'));
    var stages = [
      ['Stage 1', 'About 3 days of build time', 'Discovery and setup', ['Kickoff call with your team to confirm goals, audiences, pages and timing around the 2027 Symposium', 'Access to your hosting provider, domain and current website', 'A staging site set up and hidden from search engines', 'Final sitemap and redirect map agreed'], 'Access details, your copy, images and brand assets, and one contact for feedback.', 'Invoiced when the proposal is signed: 25%', sched[0]],
      ['Stage 2', 'About 1 week of build time', 'Design', ['Moodboard and two homepage concepts', 'Design system and page templates for every page type', 'Two design review rounds before we build'], 'Feedback within 2 business days per review round.', 'Invoiced on completion: 25%', sched[1]],
      ['Stage 3', 'About 1 week of build time', 'Build and content', ['Nine pages built on WordPress from the approved design, including the news article template', 'Your copy placed and formatted, with meta titles and descriptions', 'Schema, forms and tracking set up', 'One round of feedback on the working website'], 'Review of the working website. Optional: our SEO, GEO and AEO copy review.', 'Invoiced on completion: 35%', sched[2]],
      ['Stage 4', 'About 3 days of build time', 'Launch and training', ['Redirects switched on and tested', 'Speed, image and mobile optimisation', 'Real-device testing and go-live, then checks within 48 hours', 'Recorded training videos and 30 days of fixes'], 'Sign-off to go live.', 'Invoiced on completion: 15%', sched[3]]
    ];
    c.push(grid(stages.map(function (st) {
      return { stack: [
        { columns: [{ text: st[0].toUpperCase(), fontSize: 7, color: ACCENT, characterSpacing: 0.8 }, { text: st[1], fontSize: 7, color: ACCENT, alignment: 'right' }], margin: [0, 0, 0, 4] },
        { text: st[2], font: 'NordiqueReg', bold: true, fontSize: 11, color: PURPLE, margin: [0, 0, 0, 5] },
        { ul: st[3], fontSize: 8.2, lineHeight: 1.25, color: TEXT, markerColor: ACCENT, margin: [0, 0, 0, 6] },
        { text: [{ text: 'From AWIW: ', bold: true }, st[4]], fontSize: 8, color: ACCENT, margin: [0, 0, 0, 4] },
        { text: [{ text: st[5] + ' of the build, ', bold: true }, fmt(st[6])], fontSize: 8, color: PURPLE }
      ] };
    }), 2));
    c.push(h2('The full scope, phase by phase'));
    c.push(grid([
      card(null, 'Strategy phase', null, [{ ul: ['Planning around AWIW\'s objectives, so the website works visually and in its content', 'User pathways and a sitemap that set the page structure, layout and flow of content', 'A dedicated project contact for the whole project'], fontSize: 8.2, lineHeight: 1.25, color: TEXT, markerColor: ACCENT }]),
      card(null, 'Design phase', null, [{ ul: ['Home page and internal page templates, based on the agreed sitemap', 'Designed to work on phone, tablet and computer', 'Your current branding applied throughout', 'Quick links to your main areas: attend, get involved, partner and research', 'Your own photography, or licensed stock at cost if needed'], fontSize: 8.2, lineHeight: 1.25, color: TEXT, markerColor: ACCENT }]),
      card(null, 'Development phase', null, [{ ul: ['WordPress, so your team can update pages, news and events through a simple login', 'On-page SEO: page titles, meta descriptions, headings and schema', 'GEO and AEO: clear answers and structured content AI tools can understand', 'Google Analytics 4, Tag Manager and Search Console', 'Enquiry forms emailed to you and stored as a safeguard', 'Newsletter sign-up connected to your mailing platform', 'Social links, click to call on mobile, and accessibility to WCAG 2.2 AA'], fontSize: 8.2, lineHeight: 1.25, color: TEXT, markerColor: ACCENT }]),
      card(null, 'Deployment phase', null, [{ ul: ['Your copy placed on all nine pages', 'Built on a staging site and moved live on your approval', 'Tested on current Chrome, Safari, Edge and Firefox', 'Permanent redirects from your current addresses', 'Recorded training videos for your team, and 30 days of fixes'], fontSize: 8.2, lineHeight: 1.25, color: TEXT, markerColor: ACCENT }])
    ], 2, null));

    // Why Purple Giraffe
    c = c.concat(section('why', 'A website with a marketing team behind it', 'Why Purple Giraffe', true));
    c.push(p('Purple Giraffe was founded in 2014 when marketing expert Lynda Schenk saw the growing need for outsourced marketing consultants. Now with offices in South Australia, Western Australia and Queensland, Purple Giraffe offers end-to-end outsourced marketing consulting services to our clients. We\'re strategically driven, and we adapt our offering to suit each client\'s needs, with their specific target market in mind.'));
    c.push(h2('Your project team'));
    c.push(grid([
      { columns: [{ image: 'suba', width: 52 }, { stack: [{ text: 'Suba Thiyagarajah', font: 'NordiqueReg', bold: true, fontSize: 10, color: PURPLE }, { text: 'AI and Digital Solutions Consultant', fontSize: 7.8, color: GREY, margin: [0, 1, 0, 4] }, { text: 'Suba brings over eight years of experience across digital project management, operations and AI. He has built and scaled delivery teams across the UK, Sri Lanka and Australia, with depth in the health and medical sector. At Purple Giraffe, Suba leads the way on AI and digital solutions for both the team and our clients, turning complex challenges into simple, practical solutions, whether that is implementing AI, delivering website projects or improving systems.', fontSize: 8, lineHeight: 1.28, color: TEXT }], margin: [10, 0, 0, 0] }] },
      { columns: [{ image: 'chloe', width: 52 }, { stack: [{ text: 'Chloé James', font: 'NordiqueReg', bold: true, fontSize: 10, color: PURPLE }, { text: 'Marketing Consultant', fontSize: 7.8, color: GREY, margin: [0, 1, 0, 4] }, { text: 'Chloé is a communications professional with over 20 years’ experience working in media, public relations, marketing, events, internal and external communications, corporate affairs, and leadership. A former Sky News Business Anchor, Chloé has lived and worked all over the world and has interviewed some of the world’s most successful business people. Her passion for brand building and story-telling is a true asset to the businesses she works with.', fontSize: 8, lineHeight: 1.28, color: TEXT }], margin: [10, 0, 0, 0] }] }
    ], 2));
    c.push(h2('What our clients say'));
    c.push(grid([
      card(null, '“They do everything to a very high quality. They get things done.”', 'Riverland Wine'),
      card(null, '“I would thoroughly recommend Purple Giraffe. Their staff is experienced and they understand our brand.”', 'PG client'),
      card(null, '“The return on investment that you will get with them is absolutely brilliant.”', 'PG client')
    ], 3));
    c.push(h2('Hear it from our clients'));
    var vids = [['Purple Giraffe testimonial highlights', 'https://vimeo.com/848960312/b4deaee89b'], ['Magain', 'https://vimeo.com/1161264603/415b14a6fb'], ['Treasure Boxes', 'https://vimeo.com/1123788160/a758795ade'], ['ARAS', 'https://vimeo.com/1116673613/370a7cb05d'], ['PRG Strategic Advisors', 'https://vimeo.com/1115071689/511a2dda3f']];
    c.push({ stack: vids.map(function (v) { return { text: [{ text: '▶  ', color: ACCENT }, { text: v[0], bold: true, color: PURPLE, link: v[1] }, { text: '   Watch the video testimonial', color: GREY, link: v[1] }], fontSize: 9, margin: [0, 0, 0, 5] }; }), margin: [0, 0, 0, 6] });
    c.push(p([{ text: 'Want to see more? ' }, { text: 'purplegiraffe.com.au/testimonial', color: ACCENT, decoration: 'underline', link: 'https://purplegiraffe.com.au/testimonial/' }], { fontSize: 9.5 }));

    // Protecting what's earned
    c = c.concat(section('protect', 'Nothing gets lost in the move', 'Protecting what\'s earned', false));
    c[c.length - 1].margin = [0, 18, 0, 0];
    c.push(p('Years of award winners, media releases and links from partner websites sit on your current website\'s addresses. Every address is reviewed with you: it moves to its new home with a permanent redirect, or, where a page may no longer be needed, we agree together whether to move it into the new design or retire it. It\'s the least glamorous part of the project, and we put the most care into it.'));
    c.push(kv([
      [{ text: 'News and resources posts', fontSize: 9, color: TEXT }, { text: 'kept, same address', fontSize: 9, color: ACCENT, alignment: 'right' }],
      [{ text: 'Past Symposium pages', fontSize: 9, color: TEXT }, { text: 'redirected to /symposium/', fontSize: 9, color: ACCENT, alignment: 'right' }],
      [{ text: 'Join Now', fontSize: 9, color: TEXT }, { text: 'redirected to /get-involved/', fontSize: 9, color: ACCENT, alignment: 'right' }],
      [{ text: 'Old pages with a new home', fontSize: 9, color: TEXT }, { text: 'redirected to their new page', fontSize: 9, color: ACCENT, alignment: 'right' }],
      [{ text: 'Other pages and resources', fontSize: 9, color: TEXT }, { text: 'reviewed with you: move or retire', fontSize: 9, color: ACCENT, alignment: 'right' }]
    ], ['*', 'auto']));

    // Investment: the reader's selection
    c = c.concat(section('investment', 'Your investment', 'Your selection', true));
    c.push(p('The package and options below are the ones selected in the online proposal. All prices are in Australian dollars and exclude GST unless shown otherwise.'));
    var one = [[{ text: 'One-off', bold: true, color: PURPLE, fontSize: 9.5 }, { text: '', fontSize: 9 }]];
    one.push([{ stack: [{ text: sel.pkg.name, fontSize: 9.5, color: TEXT }, { text: '9 pages · WordPress · approximately 3 weeks of build time. First-client price (regular price ' + fmt(sel.pkg.regular) + ').', fontSize: 7.8, color: GREY, margin: [0, 2, 0, 0] }] }, { text: fmt(sel.pkg.price), fontSize: 9.5, color: TEXT, alignment: 'right' }]);
    sel.extras.forEach(function (x) { one.push([{ stack: [{ text: x.name + ' × ' + x.qty, fontSize: 9.5, color: TEXT }, { text: fmt(x.price) + ' ' + x.unit + ', ex GST', fontSize: 7.8, color: GREY, margin: [0, 2, 0, 0] }] }, { text: fmt(x.amt), fontSize: 9.5, color: TEXT, alignment: 'right' }]); });
    if (!sel.extras.length) one.push([{ text: 'No extras selected', fontSize: 9, color: GREY }, { text: '' }]);
    one.push([{ text: 'One-off total, ex GST', bold: true, fontSize: 10, color: PURPLE }, { text: fmt(sel.oneOff), bold: true, fontSize: 11, color: PURPLE, alignment: 'right' }]);
    one.push([{ text: 'GST', fontSize: 8.5, color: GREY }, { text: fmt(gst(sel.oneOff)), fontSize: 8.5, color: GREY, alignment: 'right' }]);
    one.push([{ text: 'One-off total, inc GST', fontSize: 9, color: TEXT }, { text: fmt(sel.oneOff + gst(sel.oneOff)), fontSize: 9, color: TEXT, alignment: 'right' }]);
    c.push(kv(one));

    var mon = [[{ text: 'Monthly', bold: true, color: PURPLE, fontSize: 9.5 }, { text: '' }]];
    function monthlyRow(label, item, none) {
      if (!item) { mon.push([{ stack: [{ text: label, fontSize: 9.5, color: TEXT }, { text: none, fontSize: 7.8, color: GREY, margin: [0, 2, 0, 0] }] }, { text: '$0', fontSize: 9.5, color: TEXT, alignment: 'right' }]); return; }
      mon.push([{ stack: [{ text: label + ': ' + item.name, fontSize: 9.5, color: TEXT }, { text: (item.items || []).join(' · '), fontSize: 7.8, color: GREY, lineHeight: 1.25, margin: [0, 2, 0, 0] }] }, { text: fmt(item.m) + '/mth', fontSize: 9.5, color: TEXT, alignment: 'right' }]);
    }
    monthlyRow('Hosting', sel.host, 'Keeping your current hosting provider');
    monthlyRow('Care plan', sel.care, 'No care plan selected');
    monthlyRow('Ongoing support', sel.sup, 'No ongoing support selected. One-off changes are $185 per hour ex GST (1 hour minimum), or $930 ex GST for a 5-hour block used within 3 months.');
    mon.push([{ text: 'Monthly total, ex GST', bold: true, fontSize: 10, color: PURPLE }, { text: fmt(sel.monthly) + '/mth', bold: true, fontSize: 11, color: PURPLE, alignment: 'right' }]);
    mon.push([{ text: 'Monthly total, inc GST', fontSize: 9, color: TEXT }, { text: fmt(sel.monthly + gst(sel.monthly)) + '/mth', fontSize: 9, color: TEXT, alignment: 'right' }]);
    c.push(kv(mon));
    c.push(h2('Build payments'));
    c.push({ table: { widths: ['*', '*', '*', '*'], body: [
      [{ text: 'On signing · 25%', fontSize: 7.8, color: GREY }, { text: 'After design · 25%', fontSize: 7.8, color: GREY }, { text: 'After build · 35%', fontSize: 7.8, color: GREY }, { text: 'At go-live · 15%', fontSize: 7.8, color: GREY }],
      sched.map(function (v) { return { text: fmt(v), font: 'NordiqueReg', bold: true, fontSize: 12, color: PURPLE }; })
    ] }, layout: boxLayout(TINT), margin: [0, 0, 0, 8] });
    c.push(p('Third-party running costs (like domains and premium plugins) are paid directly by you. To start, we\'ll need access to your hosting account or hosting provider. Care, hosting and ongoing support are billed monthly, with 30 days\' notice to cancel.', { fontSize: 7.8, color: GREY, margin: [0, 0, 0, 0] }));

    // Terms
    c = c.concat(section('terms', 'Clear terms. No surprises.', 'How we work together', true));
    c.push(grid([
      card(null, 'Review rounds', 'Two design review rounds, plus one round on the working site. Extra rounds are $370 (ex GST) each.'),
      card(null, 'Feedback', 'One person on your side consolidates feedback and returns it within 2 business days per round. Delays move the timeline, not the price.'),
      card(null, 'Timeline', 'Approximately 3 weeks of build time, starting once the proposal is signed and final copy and images are approved. The timeline pauses while we wait on feedback or approvals.'),
      card(null, 'Defects and changes', 'A defect is something that doesn\'t work or doesn\'t match what was approved, and we fix it free. A change is anything new, and we quote it before starting.'),
      card(null, 'Warranty', '30 days of fixes after launch.'),
      card(null, 'You own your accounts', 'Your domain, analytics and other accounts stay in your name. We get access, never ownership.'),
      card(null, 'Ownership of your site', 'The design and content transfer to you on final payment. Licensed third-party items (like themes and fonts) stay under their own licences.'),
      card(null, 'Your content', 'AWIW supplies the copy and images. We place and format them, and flag anything that needs your attention.'),
      card(null, 'Training and handover', 'Recorded training videos for your team, and every login and account handed over at launch.')
    ], 3));

    // Next steps and sign-off
    c = c.concat(section('accept', 'Three steps to get started', 'Next steps', false));
    c[c.length - 1].margin = [0, 18, 0, 0];
    c.push(grid([card('1', 'Accept below', null), card('2', 'We send the scope and first invoice (25%)', null), card('3', 'We book your kickoff call with the board', null)], 3));
    var fld = function (label, val) { return { stack: [{ text: label.toUpperCase(), fontSize: 7, color: GREY, characterSpacing: 0.8 }, { text: val || ' ', fontSize: 10, color: PURPLE, margin: [0, 8, 0, 2] }, { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 220, y2: 0, lineWidth: 0.7, lineColor: MUTED }] }], margin: [0, 0, 0, 14] }; };
    c.push({ unbreakable: true, stack: [
      h2('Acceptance'),
      p('By signing, you confirm you have read and accept this proposal, the selection on the investment page and the pricing disclaimer. Sign and return this page to marketing@purplegiraffe.com.au, or accept online at websitedevelopment.purplegiraffetower.com/proposals/AWIW/1'),
      { columns: [fld('Name', sel.f.name), fld('Position', sel.f.position)], columnGap: 24 },
      { columns: [fld('Signature'), fld('Date')], columnGap: 24 },
      { text: 'Questions first? Call 08 8425 2970 or email marketing@purplegiraffe.com.au.', fontSize: 9, color: GREY, margin: [0, 4, 0, 0] }
    ] });

    // Disclaimer
    c = c.concat(section('disclaimer', 'Pricing disclaimer', 'Fine print', true));
    c.push(h2('This proposal does not include', { margin: [0, 0, 0, 6] }));
    c.push(ul(['Any variations to the scope set out in this proposal. All variations or additional fees will be quoted as a fixed price or hourly rate that you agree to in writing before any work starts', 'Graphic design such as infographics or iconography. This can be part of an outsourced marketing package or quoted as a standalone project', 'Any once-off or ongoing fees for third-party applications or website running costs (for example premium themes, plugins, domain registration, payment gateway fees and business email)', 'Any costs from delays caused by faults or defects in a third-party service', 'Any costs to Purple Giraffe from interruptions caused by the client\'s action or inaction', 'Custom web applications, portals, multilingual websites or complex platform migrations']));
    c.push(h2('You\'ll need to provide'));
    c.push(ul(['Copy for your terms and conditions and privacy policy', 'All branding, images and video for the website', 'Access to your domain, hosting and existing website accounts (these stay in your name)', 'One person to consolidate website feedback, returned within 2 business days per review round']));
    c.push(h2('Billing'));
    c.push(ul(['Website projects are billed in four parts: 25% when the proposal is signed, 25% after design approval, 35% after build and content, and 15% at go-live. Invoices are due within 7 days', 'Care, hosting and ongoing support are billed monthly, with 30 days\' notice to cancel']));
    c.push(h2('Typical running costs paid directly by you'));
    c.push(p('Indicative, so check current pricing: domain about $15 to $30 a year; premium plugins, budget $0 to $200 a month. Card fees depend on your payment gateway.'));
    c.push({ text: [{ text: 'When you win,\n' }, { text: 'we win.', color: ACCENT }], font: 'NordiqueReg', bold: true, fontSize: 24, color: PURPLE, alignment: 'center', margin: [0, 30, 0, 0] });

    return c;
  }

  function docDefinition(sel) {
    return {
      pageSize: 'A4',
      pageMargins: [60, 70, 60, 100],
      info: { title: 'Website proposal for Australian Women in Wine', author: 'Purple Giraffe', subject: 'PG-WEB-2026-001' },
      defaultStyle: { font: 'Nordique', fontSize: 9.5, color: TEXT },
      images: {
        pgLogo: BASE + 'pg-logo.png', awiwLogo: BASE + 'awiw-logo.jpg', team: BASE + 'team.jpg', suba: BASE + 'suba.jpg', chloe: BASE + 'chloe.jpg',
        signature: BASE + 'signature.png', strip: BASE + 'footer-strip.png'
      },
      // Template header: AWIW Proposal | Purple Giraffe | page N (right aligned)
      header: function (page) {
        if (page === 1) return null;
        return { text: [{ text: 'AWIW Proposal', color: GREY }, { text: '  |  ', color: MUTED }, { text: 'Purple Giraffe', color: GREY }, { text: '  |  ', color: MUTED }, { text: 'page ' + page, color: PURPLE, bold: true }], fontSize: 8, alignment: 'right', margin: [60, 32, 60, 0] };
      },
      // Template footer: giraffe strip with the contact line
      background: function () {
        return [
          { image: 'strip', width: 567, absolutePosition: { x: 14.2, y: 761 } },
          { text: [{ text: 'T  ' }, { text: '08 8425 2970', color: '#FFFFFF' }, { text: '   |   ', color: MUTED }, { text: 'e  ' }, { text: 'marketing@purplegiraffe.com.au', color: '#FFFFFF' }, { text: '   |   ', color: MUTED }, { text: 'www.purplegiraffe.com.au', color: '#FFFFFF' }], color: '#CFC6DA', fontSize: 7.5, absolutePosition: { x: 42, y: 791 } }
        ];
      },
      // Keep headings with what follows them
      pageBreakBefore: function (node, following) {
        return node.headlineLevel && following.length === 0;
      },
      content: build(sel)
    };
  }

  window.AWIWPDF = function (sel) {
    return loadPdfMake().then(function (pdfMake) {
      pdfMake.fonts = {
        Nordique: { normal: BASE + 'NordiquePro-Light.otf', bold: BASE + 'NordiquePro-Semibold.otf', italics: BASE + 'NordiquePro-Light.otf', bolditalics: BASE + 'NordiquePro-Semibold.otf' },
        NordiqueReg: { normal: BASE + 'NordiquePro-Regular.otf', bold: BASE + 'NordiquePro-Bold.otf', italics: BASE + 'NordiquePro-Regular.otf', bolditalics: BASE + 'NordiquePro-Bold.otf' }
      };
      var doc = pdfMake.createPdf(docDefinition(sel));
      return new Promise(function (res) { doc.download('AWIW-website-proposal-Purple-Giraffe.pdf', res); });
    });
  };
  window.AWIWPDF.definition = docDefinition;
})();
