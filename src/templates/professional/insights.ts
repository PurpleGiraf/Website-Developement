// Full text of each Insights article, keyed by slug (see featuredPost and posts in data.ts).
// General information only: review against current ATO guidance before publishing for a real firm.

export type Block =
  | { p: string }
  | { h2: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } };

export type ArticleBody = {
  dek: string;
  body: Block[];
};

export const articleBodies: Record<string, ArticleBody> = {
  'division-7a-loans-before-30-june': {
    dek: 'Money drawn from your company can be treated as an unfranked dividend. Here’s how to put a complying loan agreement in place.',
    body: [
      { p: 'If you run your business through a private company, it is easy to treat the company bank account as your own. You pay a personal bill, transfer money to the family account, or the company pays for something you use privately. Under Division 7A of the tax law, those amounts can be treated as a dividend paid to you, and that dividend is generally unfranked. In plain terms, you can end up paying tax on money you thought was simply a loan.' },
      { p: 'The good news is that Division 7A problems are usually fixable if you act before the company lodges its tax return. This article explains what counts, what the fix looks like and what to do before 30 June.' },
      { h2: 'What Division 7A covers' },
      { p: 'Division 7A can apply when a private company does any of the following for a shareholder or an associate of a shareholder, such as a spouse, relative or a related trust:' },
      { ul: [
        'Pays them money or transfers property to them.',
        'Lends them money, including amounts drawn through the business bank account.',
        'Forgives a debt they owe the company.',
        'Lets them use a company asset, such as a holiday house or boat, for little or no cost.',
      ] },
      { p: 'Unpaid trust distributions owed to a company by a related family trust can also be caught in some circumstances, which is why trust and company groups need particular care.' },
      { h2: 'The fix: a complying loan agreement' },
      { p: 'A loan from the company will not be treated as a dividend if, before the company’s lodgment day for the year the loan was made, it is either repaid in full or put under a written loan agreement that meets the Division 7A rules. The lodgment day is the earlier of the due date for the company’s return and the day it is actually lodged.' },
      { p: 'A complying agreement must be in writing and set out the key terms. In summary:' },
      { table: {
        head: ['Term', 'Unsecured loan', 'Loan secured by real property'],
        rows: [
          ['Maximum term', '7 years', '25 years'],
          ['Interest', 'At least the benchmark rate each year', 'At least the benchmark rate each year'],
          ['Repayments', 'Minimum yearly repayment by 30 June', 'Minimum yearly repayment by 30 June'],
          ['Security', 'Not required', 'Registered mortgage over property worth at least 110% of the loan'],
        ],
      } },
      { p: 'The benchmark interest rate is published by the ATO and changes each income year. Check the current rate on the ATO website, or ask us, rather than relying on last year’s figure.' },
      { h2: 'Why 30 June matters' },
      { p: 'Once a loan is under a complying agreement, the minimum yearly repayment must be made by 30 June each year. If you miss it, the shortfall can be treated as a dividend. Repayments can be made in cash, or by the company declaring a dividend or paying you salary that is offset against the loan. Each option has different tax outcomes, so it is worth planning the mix rather than defaulting to whatever is easiest on the day.' },
      { h2: 'A checklist before year end' },
      { ul: [
        'Reconcile your director’s loan account so you know the real balance.',
        'Identify any new amounts drawn this year that need an agreement.',
        'Calculate the minimum yearly repayment on existing loans.',
        'Decide how the repayment will be funded: cash, dividend or salary.',
        'Make sure agreements are signed before the company’s lodgment day.',
        'Check whether any unpaid trust distributions to the company need attention.',
      ] },
      { h2: 'If something has already gone wrong' },
      { p: 'If a loan was missed or a repayment was not made, do not ignore it. The Commissioner has discretion to disregard a deemed dividend or allow it to be franked in some cases where the breach was an honest mistake, and the ATO also offers a self-correction process for certain errors. The sooner a problem is identified, the more options there usually are.' },
      { p: 'Division 7A is one of the most common issues we fix when new company clients join us. If your loan account has grown without a plan, a short review can usually tell you where you stand and what to do next.' },
    ],
  },

  'payday-super-employers-july-2026': {
    dek: 'Super guarantee now has to be paid with wages, not quarterly. Here is what employers need to change in payroll and cashflow.',
    body: [
      { p: 'From 1 July 2026, employers must pay superannuation guarantee (SG) contributions at the same time as wages, rather than up to 28 days after the end of each quarter. The change, known as payday super, is designed to stop unpaid super going unnoticed and to help employees’ balances grow sooner. For employers, it mainly changes timing, systems and cashflow.' },
      { h2: 'What has changed' },
      { p: 'Under the quarterly system, many businesses paid super four times a year. Under payday super, each time you pay ordinary time earnings, the matching super contribution needs to be paid as well. In general, the contribution must reach the employee’s super fund within seven days of payday. There are some exceptions, such as a longer window for a new employee’s first contribution.' },
      { table: {
        head: ['', 'Before 1 July 2026', 'From 1 July 2026'],
        rows: [
          ['When super is paid', 'Quarterly, by the 28th day after quarter end', 'With each pay run'],
          ['When it must arrive', 'By the quarterly due date', 'Generally within 7 days of payday'],
          ['If it is late', 'Super guarantee charge after the quarterly due date', 'Super guarantee charge can apply much sooner'],
        ],
      } },
      { p: 'The ATO’s Small Business Superannuation Clearing House is closing as part of the change. If you have been using it, you will need another way to pay, usually through your payroll software or a commercial clearing house. Check the ATO’s current guidance for the exact dates and rules that apply to your business.' },
      { h2: 'The cashflow effect' },
      { p: 'For many businesses, the biggest change is cashflow. Under quarterly payments, super sat in your bank account for up to four months before it was paid. That money is now paid out every pay cycle. For a business with a $60,000 monthly payroll, the super that used to accumulate before each quarterly payment can be a meaningful amount of working capital.' },
      { p: 'If you have been relying on that float, even without meaning to, build the change into your cashflow forecast now rather than discovering it at the end of the first quarter.' },
      { h2: 'Practical steps for employers' },
      { ul: [
        'Check your payroll software supports payday super and that it is switched on.',
        'Confirm every employee’s super fund details, including stapled fund details for new starters.',
        'Make sure your bank account is set up to pay super promptly after each pay run.',
        'Review contractors who may be employees for super purposes.',
        'Update your cashflow forecast to show super leaving with wages.',
        'Set up a monthly check that every contribution has been received by the fund.',
      ] },
      { h2: 'Late payments cost more than the super itself' },
      { p: 'If super is paid late or not at all, the employer may have to pay the super guarantee charge, which includes the shortfall, interest and an administration component, and is not tax deductible. Late payments can also lose their deduction. With payday super, the window for getting it right is much shorter, so a payroll error that would once have been caught at quarter end can now trigger a charge within weeks.' },
      { h2: 'How we help' },
      { p: 'For payroll clients, we review your setup before your first payday super cycle and check each month that contributions have cleared. For everyone else, a one-off payroll health check covers fund details, employee classification and your cashflow forecast, so the transition is uneventful.' },
    ],
  },

  'instant-asset-write-off': {
    dek: 'How the instant asset write-off works for small businesses, what qualifies and the timing mistakes that cost a deduction.',
    body: [
      { p: 'The instant asset write-off lets eligible small businesses claim an immediate deduction for the business portion of an asset’s cost, instead of depreciating it over several years. It is one of the most useful year-end tools for business owners, and also one of the most misunderstood.' },
      { p: 'The threshold and the end date have been set by the government year by year, and they have changed several times. Before you buy anything, check the current threshold and eligibility rules on the ATO website or with us.' },
      { h2: 'Who can use it' },
      { p: 'The write-off is available to small businesses using the simplified depreciation rules. Eligibility is based on aggregated turnover, which includes the turnover of connected and affiliated businesses, not just the entity buying the asset. If you run a group of companies or trusts, check the combined figure.' },
      { h2: 'What qualifies' },
      { ul: [
        'The asset must cost less than the threshold. The test applies per asset, so you can claim several assets that each fall under the limit.',
        'It must be first used, or installed ready for use, in the income year you claim it. Ordering or paying for it is not enough.',
        'If you are registered for GST, the cost is measured excluding the GST you can claim back.',
        'Only the business-use portion is deductible. A vehicle used 70% for business can only be written off at 70%.',
      ] },
      { p: 'Cars have their own limit for depreciation purposes, so an expensive car will not qualify in full even if you use it entirely for work.' },
      { h2: 'The most common mistakes' },
      { table: {
        head: ['Mistake', 'What happens'],
        rows: [
          ['Buying in late June but delivery is in July', 'The asset is not installed ready for use until next year, so the deduction moves to next year'],
          ['Splitting one asset into several invoices', 'The ATO looks at the whole asset, not the invoices'],
          ['Ignoring private use', 'The deduction is overstated and may be adjusted later'],
          ['Buying only for the deduction', 'A deduction reduces tax by your tax rate, not by the full price'],
        ],
      } },
      { p: 'That last point matters. If your company pays tax at the small business rate, a $15,000 purchase reduces tax by a fraction of that amount. If you did not need the asset, you are still out of pocket. The write-off makes a good purchase cheaper. It does not turn an unnecessary one into a good one.' },
      { h2: 'Assets that cost more than the threshold' },
      { p: 'Assets above the threshold go into the small business depreciation pool, where they are depreciated at a set rate in the first year and a higher rate in later years. That still gives you a deduction, just spread over time.' },
      { h2: 'Before you buy' },
      { ul: [
        'Check the current threshold and that your business is eligible.',
        'Confirm the asset will arrive and be ready to use before 30 June.',
        'Work out the business-use percentage honestly.',
        'Look at your cashflow forecast: can you afford the purchase as well as the tax bill?',
        'Ask us to estimate the actual tax saving before you commit.',
      ] },
      { p: 'Our year-end tax planning meetings cover this in May and early June each year, while there is still time to act.' },
    ],
  },

  'selling-your-business-cgt-planning': {
    dek: 'The small business CGT concessions can make a large difference to what you keep from a sale. Most of the work happens years before you sell.',
    body: [
      { p: 'When owners think about selling a business, they usually focus on the price. In our experience, the after-tax result depends just as much on decisions made years earlier: how the business is structured, what assets it holds and whether the records support a clean sale. Starting three years out gives you time to fix problems while they are still cheap to fix.' },
      { h2: 'The four small business CGT concessions' },
      { p: 'Eligible small business owners may be able to reduce, or in some cases eliminate, capital gains tax on the sale of active business assets using four concessions:' },
      { table: {
        head: ['Concession', 'In short'],
        rows: [
          ['15-year exemption', 'The gain may be fully exempt if the asset was held for at least 15 years and you are 55 or over and retiring, or permanently incapacitated'],
          ['50% active asset reduction', 'Reduces the capital gain by half, on top of the general 50% discount where that applies'],
          ['Retirement exemption', 'Exempts gains up to a lifetime limit. If you are under 55, the amount must go into super'],
          ['Rollover', 'Defers the gain if you buy a replacement active asset or make capital improvements within the allowed period'],
        ],
      } },
      { p: 'The concessions can be combined in many cases. Applied together, they can make a substantial difference to the tax payable on a sale.' },
      { h2: 'The basic conditions' },
      { p: 'To access the concessions, you generally need to meet one of two tests: a turnover test based on aggregated turnover, or a maximum net asset value test, which counts the net assets of you and your connected entities and affiliates. The asset being sold must also be an active asset, meaning it is used in carrying on a business.' },
      { p: 'If you are selling shares in a company or units in a trust rather than the business itself, there are additional tests. One of the most important is that at least 80% of the entity’s assets, by market value, must be active assets. Surplus cash and investments held inside the trading company can cause you to fail this test.' },
      { h2: 'What to do in the three years before a sale' },
      { ul: [
        'Check which test you are likely to meet, and whether growth could take you over the limit.',
        'Look at what sits inside the trading entity. Cash, shares and investment property may need to be moved.',
        'Clean up related-party loans and old Division 7A balances.',
        'Gather records of when assets were acquired and their cost base.',
        'Consider whether the sale should be of the business assets or of the shares.',
        'Think about super contribution timing, as some concession amounts can go into super.',
      ] },
      { h2: 'Records affect price as well as tax' },
      { p: 'Buyers and their advisers will review your financial statements, contracts and tax position in due diligence. Several years of consistent, reconciled accounts, documented customer contracts and no outstanding ATO issues make a business easier to value and easier to sell. A buyer who finds surprises usually responds by reducing the price or adding conditions.' },
      { h2: 'Where to start' },
      { p: 'An exit readiness review looks at your structure, records and likely eligibility for the concessions, then gives you a clear list of what to fix and when. If a buyer has already approached you, it is still worth doing, as some steps can be taken quickly.' },
    ],
  },

  'family-trust-distributions-ato-focus': {
    dek: 'Trust distributions are under close ATO attention. What trustees should check before 30 June and how to document decisions properly.',
    body: [
      { p: 'Discretionary family trusts remain a common and legitimate way to run a business or hold investments. They also remain an area of close attention for the ATO, particularly where income is distributed to one beneficiary on paper but the money ends up benefiting someone else. If you are a trustee, the decisions you make before 30 June each year matter.' },
      { h2: 'Get the resolution right, and on time' },
      { p: 'Most family trust deeds require the trustee to decide how income will be distributed by 30 June. If a valid resolution is not made in time, the trust deed’s default beneficiaries may be entitled to the income, or the trustee may be taxed at the top rate. Check your deed, because some require resolutions earlier than 30 June.' },
      { ul: [
        'Make the resolution in writing and keep it with the trust records.',
        'Make sure it follows the trust deed, including how income is defined.',
        'Name beneficiaries who are actually eligible under the deed.',
        'Consider whether capital gains or franked dividends should be streamed.',
      ] },
      { h2: 'Section 100A and reimbursement agreements' },
      { p: 'Section 100A targets arrangements where a beneficiary is made entitled to trust income, but the benefit of that income is actually provided to another person, often someone on a higher tax rate. The ATO has published guidance on how it applies the rule, including examples of arrangements it considers low and high risk.' },
      { p: 'Distributions to adult children who then hand the money back to their parents, or to beneficiaries who never actually receive their entitlement, are examples that warrant care. The key question is whether the beneficiary genuinely receives and benefits from the money.' },
      { h2: 'Unpaid entitlements to companies' },
      { p: 'Many groups distribute trust income to a related company to cap the tax rate on that income. If the trust does not actually pay the money to the company, the unpaid amount can be treated as a loan for Division 7A purposes. That can create a deemed dividend unless it is paid or put under a complying loan agreement in time.' },
      { h2: 'Other areas worth checking' },
      { table: {
        head: ['Area', 'What to check'],
        rows: [
          ['Beneficiary TFNs', 'Trustees must report beneficiary TFN details to the ATO. Missing TFNs can mean tax is withheld'],
          ['Family trust elections', 'Whether an election is in place, and who sits inside the family group'],
          ['Distributions to minors', 'Special rules apply to unearned income of children under 18'],
          ['Foreign beneficiaries', 'Distributions to non-residents have different tax treatment, and some states impose surcharges'],
        ],
      } },
      { h2: 'Keep good records' },
      { p: 'If the ATO reviews your trust, the records you keep are your best defence: the trust deed and any variations, each year’s distribution resolutions, evidence of payments to beneficiaries and how the money was used. Trusts that are well documented are generally simpler and cheaper to review.' },
      { h2: 'A short annual review' },
      { p: 'Before each 30 June, we meet with trust clients to agree the distribution plan, prepare the resolution and check that the outcome reflects what actually happens to the money. It takes an hour, and it is far easier than unwinding a distribution after the fact.' },
    ],
  },

  'smsf-property-borrowing-rules': {
    dek: 'SMSFs can borrow to buy property, but only under strict rules. A plain-English guide to limited recourse borrowing.',
    body: [
      { p: 'Self-managed super funds are generally not allowed to borrow. The main exception is a limited recourse borrowing arrangement, often called an LRBA, which lets a fund borrow to buy a single asset such as a property. The rules are strict, and getting them wrong can be expensive. This guide covers the essentials.' },
      { h2: 'How an LRBA works' },
      { p: 'The property is bought and held by a separate holding trust, sometimes called a bare trust, on behalf of the SMSF. The fund makes the loan repayments and receives the rental income. Once the loan is repaid, ownership can be transferred to the fund.' },
      { p: 'The loan is limited recourse. If the fund defaults, the lender’s rights are limited to the property itself. It cannot pursue the fund’s other assets. Because of this, lenders often ask for personal guarantees from members, which you should understand before signing.' },
      { h2: 'The key rules' },
      { ul: [
        'The loan must be used to buy a single acquirable asset, or a collection of identical assets with the same market value.',
        'Borrowed money can be used to repair and maintain the property, but not to improve it in a way that changes its character.',
        'Improvements can only be paid for with the fund’s own money, not borrowed funds.',
        'The investment must meet the sole purpose test: it must be for members’ retirement benefits.',
        'The fund’s investment strategy must allow for the investment and consider liquidity and diversification.',
      ] },
      { h2: 'Residential versus business property' },
      { table: {
        head: ['', 'Residential property', 'Business real property'],
        rows: [
          ['Buy from a related party', 'Not allowed', 'Allowed at market value'],
          ['Lease to a member or relative', 'Not allowed', 'Allowed at market rent, on commercial terms'],
          ['Members live in or holiday there', 'Not allowed', 'Not applicable'],
        ],
      } },
      { p: 'This is why SMSF property is particularly popular with business owners. The fund can own the business premises and lease them to the business, provided the lease is commercial and the rent is actually paid.' },
      { h2: 'Costs to factor in' },
      { p: 'An SMSF property purchase costs more than the deposit. Allow for stamp duty, legal fees for the holding trust and loan documents, a higher interest rate than many home loans, and ongoing insurance, rates, repairs and property management. Because the fund cannot easily draw on members’ personal savings, it needs enough cash to cover these costs, and any period without a tenant, on its own.' },
      { h2: 'Related-party loans' },
      { p: 'Some funds borrow from a member or related entity rather than a bank. This is allowed, but the loan must be on arm’s length terms. The ATO has published safe harbour terms for interest rates, loan-to-value ratios and repayment terms. If the terms are more generous than arm’s length, the income from the property may be taxed at the top rate as non-arm’s length income.' },
      { h2: 'Questions to ask before borrowing' },
      { ul: [
        'Will the fund have enough cash for repayments, costs and member benefits, including if the property is vacant?',
        'Does the fund have enough other assets to remain diversified?',
        'What happens if a member needs to retire or leaves the fund?',
        'Have you compared the after-cost return with simpler investment options?',
      ] },
      { p: 'Whether an SMSF should buy property is a financial advice decision, and personal advice must come from someone authorised under an Australian financial services licence. We work with your adviser on the structure, documentation and ongoing compliance, so the arrangement is set up correctly and stays that way.' },
    ],
  },

  '13-week-cashflow-forecast': {
    dek: 'A simple, rolling 13-week forecast is the most useful financial tool most small businesses do not have. How to build one and keep it alive.',
    body: [
      { p: 'Most business owners can tell you their sales last month. Far fewer can tell you their bank balance in eight weeks. A 13-week cashflow forecast answers that question. It is short enough to be accurate, long enough to see problems coming, and simple enough to update every week.' },
      { h2: 'Why 13 weeks' },
      { p: 'Thirteen weeks is one quarter. It covers a full BAS cycle, most supplier terms and a typical customer payment cycle. It is far enough ahead to act on a shortfall, by chasing debtors, delaying a purchase or arranging finance, but close enough that the numbers are based on known invoices and commitments rather than guesswork.' },
      { h2: 'What goes in it' },
      { table: {
        head: ['Section', 'Examples'],
        rows: [
          ['Opening balance', 'Bank balance at the start of each week'],
          ['Cash in', 'Customer receipts based on when they actually pay, not invoice dates'],
          ['Cash out: regular', 'Wages, super, rent, loan repayments, subscriptions'],
          ['Cash out: suppliers', 'Bills due, based on your actual payment habits'],
          ['Cash out: tax', 'GST, PAYG withholding, PAYG instalments, income tax'],
          ['Closing balance', 'Opening balance plus cash in, less cash out'],
        ],
      } },
      { p: 'The most common mistake is forecasting receipts based on invoice terms. If your terms are 14 days but customers actually pay in 35, the forecast should say 35.' },
      { h2: 'Build it in five steps' },
      { ul: [
        'Start with this week’s actual bank balance.',
        'List known receipts from your debtors report, placed in the week you realistically expect them.',
        'Add regular payments: payroll dates, super, rent and loans.',
        'Add supplier bills and tax obligations in the week they will be paid.',
        'Add estimates for new sales and costs beyond the known items, and mark them clearly as estimates.',
      ] },
      { h2: 'Keep it alive' },
      { p: 'A forecast that is built once and never updated is worse than none, because it gives false confidence. The habit that matters is a weekly update: replace last week’s forecast with actuals, roll a new week onto the end and look at what changed. Fifteen minutes on a Monday morning is usually enough.' },
      { p: 'It also helps to compare forecast and actual each week. If you are consistently out on the same line, such as customer receipts, fix the assumption rather than the number.' },
      { h2: 'What to do with it' },
      { ul: [
        'Spot a low point early and decide how to cover it.',
        'Time large purchases for weeks with headroom.',
        'Set aside money for BAS and tax as it builds up, not when it falls due.',
        'Have a clearer conversation with your bank before you need them.',
        'Make hiring decisions with the cash impact in front of you.',
      ] },
      { h2: 'Spreadsheet or software' },
      { p: 'A spreadsheet works well for most small businesses and keeps the logic visible. Forecasting tools that connect to Xero or MYOB can save time once the business has more moving parts. The tool matters far less than the weekly habit.' },
      { p: 'Our advisory clients get a 13-week forecast built from their own data in the first month, and we review it with them each quarter. If you would like to see what one looks like for your business, bring your last three months of bank statements to a free consultation.' },
    ],
  },
};

export const wordCount = (a: ArticleBody) =>
  a.body
    .map((b) => ('p' in b ? b.p : 'h2' in b ? b.h2 : 'ul' in b ? b.ul.join(' ') : [...b.table.head, ...b.table.rows.flat()].join(' ')))
    .join(' ')
    .split(/\s+/).length;
