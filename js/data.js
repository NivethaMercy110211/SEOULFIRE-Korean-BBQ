/* SEOULFIRE Korean BBQ — demo data layer.
   All content below is demonstration data for the template.
   Replace with live restaurant data before production use. */
'use strict';

window.SF = window.SF || {};

SF.DATA = {
  restaurant: {
    name: 'SEOULFIRE Korean BBQ',
    tagline: 'Grill. Share. Seoul.',
    phone: '(213) 555-0140',
    email: 'tables@seoulfire.example',
    address: '410 Wilshire Blvd, Los Angeles, CA',
    hours: [
      { d: 'Monday', h: 'Closed' },
      { d: 'Tuesday – Thursday', h: '5:00 PM – 11:00 PM' },
      { d: 'Friday – Saturday', h: '5:00 PM – 1:00 AM' },
      { d: 'Sunday', h: '4:00 PM – 10:00 PM' },
    ],
  },

  /* ---- availability (demo: deterministic per date) ---- */
  times: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM'],

  seating: [
    { id: 'standard', name: 'Standard Grill Table', desc: 'Built-in charcoal grill, parties up to 6.' },
    { id: 'group', name: 'Large Group Table', desc: 'Extended table with double grill, 7–12 guests.' },
    { id: 'private', name: 'Private Dining Room', desc: 'Enclosed room, dedicated server, 8–16 guests.' },
  ],

  menu: [
    /* BBQ sets */
    { id: 'set-signature', cat: 'sets', name: 'Signature Fire Set', kr: null, price: 92, unit: 'for 2–3', img: 'assets/images/pages/category1_03.png', desc: 'A generous spread of house cuts, ssam greens and eight banchan — the full table, start to finish.', badges: ['popular'], diet: [], serve: 'Serves 2–3 · grill time ~90 min' },
    { id: 'set-family', cat: 'sets', name: 'Family Gathering Set', kr: null, price: 148, unit: 'for 4–5', img: 'assets/images/pages/category1_02.png', desc: 'Beef, pork and chicken picks with double banchan and stew — built for lively tables.', badges: [], diet: [], serve: 'Serves 4–5' },
    { id: 'set-date', cat: 'sets', name: 'Date Night Set', kr: null, price: 74, unit: 'for 2', img: 'assets/images/pages/category1_01.png', desc: 'Two premium cuts, ssam board, one stew and dessert to finish the night properly.', badges: [], diet: [], serve: 'Serves 2' },
    { id: 'set-late', cat: 'sets', name: 'Late-Night Table Set', kr: null, price: 68, unit: 'after 10 PM', img: 'assets/images/pages/category1_04.png', desc: 'A lighter spread for night owls — quick cuts, one banchan flight and drinks nearby.', badges: ['few tables'], diet: [], serve: 'Serves 2–3 · after 10 PM only' },
    /* beef */
    { id: 'la-galbi', cat: 'beef', name: 'LA Galbi', kr: null, price: 38, unit: 'per portion', img: 'assets/images/meat/la-galbi.jpg', desc: 'Flanken-cut short rib, thin and fast-grilling with a deep caramelized edge.', badges: ['popular'], diet: [], serve: '1–2 per portion · marinade: none' },
    { id: 'chadol', cat: 'beef', name: 'Chadol Bagi', kr: null, price: 26, unit: 'per portion', img: 'assets/images/meat/chadol.jpg', desc: 'Paper-thin unmarinated brisket. Ten seconds a side; wraps up best in perilla.', badges: [], diet: [], serve: '1–2 per portion · unmarinated' },
    { id: 'ribeye', cat: 'beef', name: 'Ribeye Roll Cut', kr: null, price: 44, unit: 'per portion', img: 'assets/images/meat/ribeye.jpg', desc: 'Rich marbling through every slice — a short, hot grill keeps it buttery.', badges: [], diet: [], serve: '1–2 per portion · unmarinated' },
    /* pork */
    { id: 'samgyeopsal', cat: 'pork', name: 'Samgyeopsal', kr: null, price: 22, unit: 'per portion', img: 'assets/images/meat/samgyeopsal.jpg', desc: 'Thick pork belly. Grill slow, snip with scissors, dip in sesame oil and salt.', badges: ['popular'], diet: [], serve: '1–2 per portion · unmarinated' },
    { id: 'moksal', cat: 'pork', name: 'Moksal', kr: null, price: 24, unit: 'per portion', img: 'assets/images/meat/moksal.jpg', desc: 'Pork collar — tender with just enough fat to keep the grill singing.', badges: [], diet: [], serve: '1–2 per portion · unmarinated' },
    { id: 'yangnyeom-dwaeji', cat: 'pork', name: 'Yangnyeom Pork', kr: null, price: 25, unit: 'per portion', img: 'assets/images/meat/yangnyeom.jpg', desc: 'House-marinated pork in gochujang, garlic and pear — sweet heat, sticky glaze.', badges: ['marinated'], diet: [], serve: '1–2 per portion · marinated' },
    /* chicken */
    { id: 'dak-galbi', cat: 'chicken', name: 'Dak Bulgogi', kr: null, price: 20, unit: 'per portion', img: 'assets/images/meat/dak.jpg', desc: 'Soy-pear marinated chicken thigh, grilled through and finished with scallion.', badges: ['marinated'], diet: [], serve: '1–2 per portion · marinated' },
    /* seafood */
    { id: 'saewoo-gui', cat: 'seafood', name: 'Saewoo Gui', kr: null, price: 24, unit: 'per portion', img: 'assets/images/meat/saewoo.jpg', desc: 'Whole salted shrimp straight onto the grill — shells char, flesh stays sweet.', badges: [], diet: [], serve: '6–8 pieces · seasonal' },
    /* banchan */
    { id: 'b-kimchi', cat: 'banchan', name: 'Kimchi Trio', kr: null, price: 6, unit: 'per flight', img: 'assets/images/banchan/menu-kimchi.jpg', desc: 'Napa, radish and cucumber kimchi at three stages of ferment.', badges: [], diet: ['vegan option'], serve: 'Refills on request' },
    { id: 'b-greens', cat: 'banchan', name: 'Sesame Spinach', kr: null, price: 5, unit: 'per bowl', img: 'assets/images/banchan/menu-greens.jpg', desc: 'Blanched greens dressed in sesame oil, garlic and toasted seed.', badges: [], diet: ['vegan'], serve: 'Refills on request' },
    { id: 'b-radish', cat: 'banchan', name: 'Pickled Radish', kr: null, price: 4, unit: 'per bowl', img: 'assets/images/banchan/menu-radish.jpg', desc: 'Cold, crisp cubes that reset the palate between cuts.', badges: [], diet: ['vegan'], serve: 'Refills on request' },
    { id: 'b-ssam', cat: 'banchan', name: 'Ssam Greens & Sauces', kr: null, price: 8, unit: 'per board', img: 'assets/images/banchan/menu-ssam.jpg', desc: 'Red leaf, perilla, ssamjang and sesame oil — the wrap station at your table.', badges: ['popular'], diet: ['vegan'], serve: 'Serves the whole table' },
    /* rice & noodles */
    { id: 'rice-stone', cat: 'rice', name: 'Dolsot Bibimbap', kr: null, price: 17, unit: 'per bowl', img: 'assets/images/menu/rice-tile.jpg', desc: 'Stone-bowl rice with vegetables, egg and gochujang — crackle it against the hot stone.', badges: [], diet: ['vegetarian option'], serve: 'One per guest' },
    { id: 'noodle-cold', cat: 'rice', name: 'Naengmyeon', kr: null, price: 14, unit: 'per bowl', img: 'assets/images/menu/noodle-tile.jpg', desc: 'Buckwheat noodles in icy broth — the traditional cool-down after heavy grilling.', badges: [], diet: [], serve: 'One per guest' },
    /* soups & stews */
    { id: 'stew-tofu', cat: 'soups', name: 'Sundubu Jjigae', kr: null, price: 15, unit: 'per pot', img: 'assets/images/menu/soups-tofu.jpg', desc: 'Bubbling soft-tofu stew, ordered by heat level and cracked with egg at the table.', badges: ['popular'], diet: ['vegetarian option'], serve: 'Serves 1–2' },
    { id: 'stew-doengjang', cat: 'soups', name: 'Doenjang Jjigae', kr: null, price: 13, unit: 'per pot', img: 'assets/images/menu/soups-tile.jpg', desc: 'Soybean-paste stew with vegetables — deep, earthy, quietly essential.', badges: [], diet: ['vegetarian'], serve: 'Serves 1–2' },
    /* vegetarian */
    { id: 'veg-mushroom', cat: 'vegetarian', name: 'Grilling Mushroom Platter', kr: null, price: 16, unit: 'per platter', img: 'assets/images/menu/vegetarian-tile.jpg', desc: 'King oyster, shiitake and enoki built for the same grill as everything else.', badges: [], diet: ['vegan'], serve: 'Serves 2–3' },
    /* desserts */
    { id: 'des-ice', cat: 'desserts', name: 'Injeolmi Bingsu', kr: null, price: 12, unit: 'per bowl', img: 'assets/images/menu/desserts-tile.jpg', desc: 'Shaved milk ice with roasted rice cake and toasted soybean powder.', badges: [], diet: ['vegetarian'], serve: 'Serves 2' },
    /* drinks */
    { id: 'dr-soju', cat: 'drinks', name: 'Soju Flight', kr: null, price: 21, unit: '3 × 60ml', img: 'assets/images/pages/Soj_ Flight.png', desc: 'Three house pours to compare — clean, citron and plum.', badges: [], diet: [], serve: '21+ only' },
    { id: 'dr-makgeolli', cat: 'drinks', name: 'Makgeolli', kr: null, price: 12, unit: 'per bowl', img: 'assets/images/pages/makgeolli.png', desc: 'Cloudy rice wine served cold in a brass bowl.', badges: [], diet: [], serve: '21+ only' },
  ],

  /* meat study entries (cut-level detail; ids link to menu items) */
  meats: {
    'la-galbi': { cut: 'Beef short rib, flanken cut', marbling: 'Moderate marbling through a thin cut', flavor: 'Sweet soy-garlic caramelization at the edges', cooking: 'Grill 1–2 min per side over high heat', pairing: 'Pickled radish and ssamjang', serving: '2 people per portion' },
    'chadol': { cut: 'Beef brisket, paper-thin', marbling: 'Fine fat lines, delicate texture', flavor: 'Clean beef, sweet finish', cooking: '10–15 seconds per side', pairing: 'Perilla leaf, sesame oil dip', serving: '2 people per portion' },
    'ribeye': { cut: 'Ribeye roll, slice cut', marbling: 'Heavy marbling, buttery fat', flavor: 'Rich, deeply beefy', cooking: '30–45 seconds per side, rest briefly', pairing: 'Flaky salt only', serving: '2 people per portion' },
    'samgyeopsal': { cut: 'Pork belly, thick cut', marbling: 'Layered fat and lean', flavor: 'Savory, rich, crisp when rendered', cooking: 'Low-medium heat, 3–4 min per side', pairing: 'Sesame oil + salt dip, raw garlic', serving: '2 people per portion' },
    'moksal': { cut: 'Pork collar (neck)', marbling: 'Even fat through the muscle', flavor: 'Tender, mild sweetness', cooking: '2–3 min per side, medium heat', pairing: 'Ssam greens and doenjang', serving: '2 people per portion' },
    'yangnyeom-dwaeji': { cut: 'Pork shoulder, marinated', marbling: 'Lean cut carrying the glaze', flavor: 'Gochujang heat, pear sweetness', cooking: '2 min per side; watch the sugars', pairing: 'Cool pickled radish', serving: '2 people per portion' },
    'dak-galbi': { cut: 'Chicken thigh, boneless', marbling: '—', flavor: 'Soy, garlic and pear marinade', cooking: 'Grill fully through, ~4 min per side', pairing: 'Sesame spinach and rice', serving: '2 people per portion' },
    'saewoo-gui': { cut: 'Whole salted shrimp', marbling: '—', flavor: 'Sweet, briny, charred shell', cooking: '1–2 min per side until shells curl', pairing: 'Citrus soy dip', serving: '1–2 people per portion' },
  },

  /* banchan explorer entries */
  banchan: [
    { id: 'b-kimchi', name: 'Napa Kimchi', main: 'Fermented napa cabbage, gochugaru', flavor: 'Bright, deep, gently funky', pairing: 'Cuts through rich beef', img: 'assets/images/banchan/kimchi.jpg' },
    { id: 'b-greens', name: 'Sesame Spinach', main: 'Blanched spinach, sesame oil, garlic', flavor: 'Toasty, mellow', pairing: 'Rounds out lean cuts', img: 'assets/images/banchan/greens.jpg' },
    { id: 'b-radish', name: 'Pickled Radish', main: 'Daikon, vinegar, sweet brine', flavor: 'Cold, crisp, clean', pairing: 'Palate reset between cuts', img: 'assets/images/banchan/radish.jpg' },
    { id: 'b-ssam', name: 'Ssam Greens', main: 'Red leaf lettuce, perilla', flavor: 'Fresh, slightly peppery', pairing: 'The wrap for every grill piece', img: 'assets/images/banchan/ssam.jpg' },
    { id: 'b-sauces', name: 'House Sauces', main: 'Ssamjang, sesame oil, citrus soy', flavor: 'Savory, nutty, bright', pairing: 'One dip per cut', img: 'assets/images/banchan/sauces.jpg' },
    { id: 'b-egg', name: 'Steamed Egg', main: 'Egg, scallion, broth', flavor: 'Airy, warm, comforting', pairing: 'Settles the spice', img: 'assets/images/banchan/egg.jpg' },
    { id: 'b-stew', name: 'Doenjang Jjigae', main: 'Soybean paste, vegetables, tofu', flavor: 'Earthy, deep, savory', pairing: 'The quiet center of the table', img: 'assets/images/banchan/stew.jpg' },
    { id: 'b-rice', name: 'Rice & Grains', main: 'Short-grain rice, barley, beans', flavor: 'Warm, neutral, grounding', pairing: 'The base of every ssam', img: 'assets/images/banchan/rice.jpg' },
  ],

  /* loyalty (demo values) */
  loyalty: {
    program: 'SeoulFire Grill Club',
    points: 1240,
    earned: 2380,
    redeemed: 1140,
    nextRewardAt: 1500,
    history: [
      { date: 'Sep 24, 2026', desc: 'Dinner — Table 12', ref: 'SF-2481', pts: +180, bal: 1240 },
      { date: 'Sep 24, 2026', desc: 'Reward redeemed — Sesame Spinach flight', ref: 'SF-2481', pts: -60, bal: 1060 },
      { date: 'Aug 30, 2026', desc: 'Dinner — Private Room', ref: 'SF-2109', pts: +240, bal: 1120 },
      { date: 'Aug 09, 2026', desc: 'Birthday bonus', ref: '—', pts: +100, bal: 880 },
      { date: 'Jul 19, 2026', desc: 'Dinner — Table 04', ref: 'SF-1743', pts: +150, bal: 780 },
      { date: 'Jun 28, 2026', desc: 'Reward redeemed — Date Night Set', ref: 'SF-1518', pts: -500, bal: 630 },
      { date: 'Jun 28, 2026', desc: 'Dinner — Table 07', ref: 'SF-1518', pts: +350, bal: 1130 },
    ],
    rewards: [
      { name: 'Banchan flight upgrade', cost: 300, desc: 'Double banchan service for your table.', ready: true },
      { name: 'Date Night Set', cost: 500, desc: 'The two-person set on any weeknight.', ready: true },
      { name: 'Private room upgrade', cost: 1200, desc: 'Waived minimum for the Private Dining Room.', ready: false },
    ],
  },

  payments: [
    { date: 'Sep 24, 2026', desc: 'Dinner — Table 12', amount: '$186.40', ref: 'SF-2481', status: 'Paid', method: '•••• 4021' },
    { date: 'Aug 30, 2026', desc: 'Private Dining Room', amount: '$412.75', ref: 'SF-2109', status: 'Paid', method: '•••• 4021' },
    { date: 'Aug 09, 2026', desc: 'Dinner — Table 04', amount: '$154.20', ref: 'SF-1966', status: 'Refunded', refNote: 'Duplicate hold', method: '•••• 4021' },
    { date: 'Jul 19, 2026', desc: 'Dinner — Table 04', amount: '$203.90', ref: 'SF-1743', status: 'Paid', method: '•••• 4021' },
  ],

  visits: [
    { date: 'Sep 24, 2026', party: 4, ref: 'SF-2481', points: 180, dishes: ['LA Galbi', 'Samgyeopsal', 'Kimchi Trio', 'Naengmyeon'] },
    { date: 'Aug 30, 2026', party: 8, ref: 'SF-2109', points: 240, dishes: ['Signature Fire Set', 'Doenjang Jjigae', 'Soju Flight'] },
    { date: 'Jul 19, 2026', party: 2, ref: 'SF-1743', points: 150, dishes: ['Ribeye Roll Cut', 'Chadol Bagi', 'Injeolmi Bingsu'] },
    { date: 'Jun 28, 2026', party: 6, ref: 'SF-1518', points: 350, dishes: ['Family Gathering Set', 'Sundubu Jjigae', 'Makgeolli'] },
  ],

  favorites: ['la-galbi', 'b-ssam', 'set-date'],
};

/* deterministic demo availability: a date string -> times that are fully booked */
SF.availability = (dateStr, party) => {
  if (!dateStr) return [];
  let h = 0; for (let i = 0; i < dateStr.length; i++) h = (h * 31 + dateStr.charCodeAt(i)) >>> 0;
  const closed = (h % 7) === 0; // one in seven days is fully booked
  return SF.DATA.times.filter((t, i) => !closed && ((h >> i) % 5) !== 0);
};
