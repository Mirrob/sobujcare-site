const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbynz6BgzE4CTS3EU6TLY9jDO39_5bepV7JnfcNsB_RH6ebTe05N8ijmbQqW3Fb-MQaT/exec";

const packagePricing = {
  single: { label: { en: "Single Bar", bn: "সিঙ্গেল বার" }, base: 199, units: 1, discount: 0 },
  starter: { label: { en: "Starter Pack (2)", bn: "স্টার্টার প্যাক (২)" }, base: 399, units: 2, discount: 19 },
  family: { label: { en: "Family Pack (4)", bn: "ফ্যামিলি প্যাক (৪)" }, base: 759, units: 4, discount: 77 },
  gift: { label: { en: "Gift Pack (6)", bn: "গিফট প্যাক (৬)" }, base: 1099, units: 6, discount: 95 }
};

const translations = {
  en: {
    navProducts: "Products",
    navGallery: "Gallery",
    navPackages: "Packages",
    navOrder: "Order",
    navAbout: "About",
    navContact: "Contact",
    navButton: "Order Now",
    heroEyebrow: "Herbal Soap Crafted for Everyday Skin Care",
    heroTitle: "Pure Care From Nature",
    heroText: "Discover SobujCare’s premium herbal soaps made for clean, gentle, and natural skin care. Start with our best-selling handmade herbal range and choose a package that fits your needs.",
    heroPrimary: "Explore Products",
    heroSecondary: "Calculate Order",
    point1Title: "Natural Ingredients",
    point1Text: "Neem, turmeric, charcoal, aloe vera and skin-friendly oils.",
    point2Title: "Eco Packaging",
    point2Text: "Minimal kraft packaging designed for a premium feel.",
    point3Title: "Flexible Packages",
    point3Text: "Single bars, bundles, and family packages with live pricing.",
    heroPriceLine1: "Starting from",
    heroPriceLine2: "Bundle savings",
    heroPriceLine2Value: "Up to 15%",
    heroPriceLine3: "Custom order form",
    heroPriceLine3Value: "Google Sheet Ready",
    productsTitle: "Our Herbal Soap Collection",
    productsText: "Start with a focused product line that is easy to market and simple for customers to understand.",
    p1Title: "Neem Antibacterial",
    p1Desc: "Made for oily skin and everyday freshness.",
    p1Badge: "Best Seller",
    p1L1: "Neem extract and skin-friendly oils",
    p1L2: "Helps support clean and refreshed skin",
    p1L3: "Ideal for daily use",
    p2Title: "Turmeric Glow",
    p2Desc: "A warm herbal blend for soft and bright-looking skin.",
    p2Badge: "Popular",
    p2L1: "Turmeric-inspired care for daily skincare",
    p2L2: "Comforting feel with premium packaging",
    p2L3: "Great for gifting and bundles",
    p3Title: "Activated Charcoal",
    p3Desc: "Detox-style herbal soap with a strong premium identity.",
    p3Badge: "Premium",
    p3L1: "Charcoal-based deep cleansing concept",
    p3L2: "Strong look for modern buyers",
    p3L3: "Perfect for combo offers",
    galleryTitle: "Packaging Preview",
    galleryText: "Use these sample visuals first, then replace them later with your final product photos and real packaging shots.",
    g1Title: "Neem Premium Box",
    g1Text: "Minimal kraft look with bold green strip for a strong shelf presence.",
    g2Title: "Turmeric Botanical Box",
    g2Text: "Warm botanical style with premium eco-friendly presentation.",
    g3Title: "Gift Bundle Mockup",
    g3Text: "A stronger premium presentation for combo sales and gifting campaigns.",
    packagesTitle: "Packages & Bundles",
    packagesText: "Use package pricing to increase average order value and make customer choice easier.",
    pack1Title: "Starter Pack",
    pack1Desc: "Perfect for first-time buyers who want to try one or two variants.",
    pack1L1: "2 soaps of any variant",
    pack1L2: "Standard eco packaging",
    pack1L3: "Entry-level discount",
    pack2Ribbon: "Most Loved",
    pack2Title: "Family Pack",
    pack2Desc: "Balanced option for regular customers and small households.",
    pack2L1: "4 soaps mixed variants",
    pack2L2: "Better per-piece value",
    pack2L3: "Great for repeat orders",
    pack3Title: "Gift / Premium Pack",
    pack3Desc: "Designed for gifting, premium orders, and social media campaigns.",
    pack3L1: "6 soaps mixed variants",
    pack3L2: "Premium eco presentation",
    pack3L3: "Best total savings",
    calcTitle: "Live Order Calculator",
    calcText: "Choose soaps, package type, and quantity to see the live estimated total.",
    variant1Label: "Variant 1",
    variant2Label: "Variant 2",
    packageLabel: "Package Type",
    quantityLabel: "Quantity",
    summaryPackage: "Selected Package",
    summaryPerPack: "Price Per Package",
    summaryQty: "Order Quantity",
    summaryDiscount: "Bundle Savings",
    summaryTotal: "Estimated Total",
    calcNote: "You can adjust the pricing rules easily in the JavaScript section before going live.",
    orderTitle: "Place an Order",
    orderText: "Orders can be sent straight to Google Sheets using your Google Apps Script web app URL.",
    nameLabel: "Full Name",
    phoneLabel: "Phone Number",
    emailLabel: "Email (Optional)",
    districtLabel: "District / Area",
    addressLabel: "Delivery Address",
    prefVariantLabel: "Preferred Variants",
    deliveryNoteLabel: "Delivery Note",
    orderSummaryLabel: "Order Summary",
    submitBtn: "Submit Order",
    aboutTitle: "About SobujCare",
    aboutText: "SobujCare is a Bangladesh-focused herbal soap brand built around clean design, natural positioning, and premium everyday care.",
    aboutL1: "Designed for local customers with future export-friendly branding",
    aboutL2: "Perfect for handmade herbal soap launch and later product expansion",
    aboutL3: "Easy to maintain website hosted free on GitHub Pages",
    webTitle: "Website Setup Notes",
    webText: "Before launch, replace the Google Script URL in the code and update your social links, contact details, and product photos.",
    webL1: "Host on GitHub Pages now, connect custom domain later",
    webL2: "Use your Google Sheet to store all orders in one place",
    webL3: "Edit prices and package rules easily in one script block",
    contactTitle: "Let’s Connect",
    contactText: "Add your real business contact details here before publishing.",
    contactPhoneTitle: "Phone",
    contactEmailTitle: "Email",
    contactSocialTitle: "Facebook",
    launchTitle: "Launch Tip",
    launchText: "Start with 3 soaps, 3 packages, and this simple order flow. Then improve based on customer response.",
    launchBtn: "Start Taking Orders",
    footerText: "Premium herbal soap website template with BN/EN toggle, live pricing calculator, and Google Sheets order capture.",
    submitSuccess: "Order submitted successfully.",
    submitError: "Order submission failed. Please check the Apps Script URL.",
    missingScript: "Please add your Google Apps Script web app URL before using the form."
  },
  bn: {
    navProducts: "পণ্যসমূহ",
    navGallery: "গ্যালারি",
    navPackages: "প্যাকেজ",
    navOrder: "অর্ডার",
    navAbout: "আমাদের সম্পর্কে",
    navContact: "যোগাযোগ",
    navButton: "অর্ডার করুন",
    heroEyebrow: "প্রতিদিনের ত্বকের যত্নে হারবাল সাবান",
    heroTitle: "প্রকৃতি থেকে বিশুদ্ধ যত্ন",
    heroText: "SobujCare এর প্রিমিয়াম হারবাল সাবান আপনার ত্বকের জন্য পরিষ্কার, কোমল এবং প্রাকৃতিক যত্ন নিয়ে এসেছে। আমাদের জনপ্রিয় হ্যান্ডমেড হারবাল রেঞ্জ থেকে পছন্দ করুন এবং আপনার জন্য উপযুক্ত প্যাকেজ বেছে নিন।",
    heroPrimary: "পণ্য দেখুন",
    heroSecondary: "মূল্য হিসাব করুন",
    point1Title: "প্রাকৃতিক উপাদান",
    point1Text: "নিম, হলুদ, চারকোল, অ্যালোভেরা ও ত্বক-বান্ধব তেল।",
    point2Title: "ইকো প্যাকেজিং",
    point2Text: "প্রিমিয়াম অনুভূতির জন্য মিনিমাল ক্রাফট প্যাকেজিং।",
    point3Title: "ফ্লেক্সিবল প্যাকেজ",
    point3Text: "সিঙ্গেল বার, বান্ডেল ও ফ্যামিলি প্যাকের লাইভ প্রাইসিং।",
    heroPriceLine1: "শুরু মাত্র",
    heroPriceLine2: "বান্ডেল সেভিংস",
    heroPriceLine2Value: "সর্বোচ্চ ১৫%",
    heroPriceLine3: "কাস্টম অর্ডার ফর্ম",
    heroPriceLine3Value: "গুগল শিট রেডি",
    productsTitle: "আমাদের হারবাল সাবান সংগ্রহ",
    productsText: "শুরুতে সহজে মার্কেটিং করা যায় এবং গ্রাহক সহজে বুঝতে পারে—এমন ফোকাসড প্রোডাক্ট লাইন রাখুন।",
    p1Title: "নিম অ্যান্টিব্যাকটেরিয়াল",
    p1Desc: "তৈলাক্ত ত্বক ও দৈনিক সতেজতার জন্য।",
    p1Badge: "বেস্ট সেলার",
    p1L1: "নিম এক্সট্র্যাক্ট ও ত্বক-বান্ধব তেল",
    p1L2: "ত্বককে সতেজ ও পরিষ্কার রাখতে সহায়ক",
    p1L3: "প্রতিদিন ব্যবহারের জন্য উপযোগী",
    p2Title: "টারমেরিক গ্লো",
    p2Desc: "ত্বকে নরম ও উজ্জ্বল অনুভূতির জন্য হারবাল ব্লেন্ড।",
    p2Badge: "জনপ্রিয়",
    p2L1: "দৈনিক স্কিনকেয়ারের জন্য হলুদের ধারণা",
    p2L2: "প্রিমিয়াম প্যাকেজিংসহ আরামদায়ক ফিল",
    p2L3: "গিফট ও বান্ডেলের জন্য উপযুক্ত",
    p3Title: "অ্যাক্টিভেটেড চারকোল",
    p3Desc: "ডিটক্স-স্টাইল হারবাল সাবান, প্রিমিয়াম লুকসহ।",
    p3Badge: "প্রিমিয়াম",
    p3L1: "চারকোল-ভিত্তিক ডিপ ক্লিনজিং কনসেপ্ট",
    p3L2: "আধুনিক ক্রেতাদের জন্য স্ট্রং লুক",
    p3L3: "কম্বো অফারের জন্য দারুণ",
    galleryTitle: "প্যাকেজিং প্রিভিউ",
    galleryText: "এখন এই স্যাম্পল ভিজ্যুয়াল ব্যবহার করুন, পরে আপনার ফাইনাল পণ্য ও আসল প্যাকেজিং ছবি দিয়ে বদলে দিন।",
    g1Title: "নিম প্রিমিয়াম বক্স",
    g1Text: "শক্তিশালী শেল্ফ উপস্থিতির জন্য বোল্ড সবুজ স্ট্রিপসহ মিনিমাল ক্রাফট লুক।",
    g2Title: "টারমেরিক বোটানিক্যাল বক্স",
    g2Text: "উষ্ণ বোটানিক্যাল স্টাইলসহ প্রিমিয়াম ইকো-ফ্রেন্ডলি প্রেজেন্টেশন।",
    g3Title: "গিফট বান্ডেল মকআপ",
    g3Text: "কম্বো সেলস ও গিফট ক্যাম্পেইনের জন্য আরও প্রিমিয়াম উপস্থাপন।",
    packagesTitle: "প্যাকেজ ও বান্ডেল",
    packagesText: "প্যাকেজ প্রাইসিং ব্যবহার করলে অর্ডার ভ্যালু বাড়ে এবং গ্রাহকের সিদ্ধান্ত নেওয়া সহজ হয়।",
    pack1Title: "স্টার্টার প্যাক",
    pack1Desc: "নতুন ক্রেতাদের জন্য, যারা ১–২টি ভ্যারিয়েন্ট ট্রাই করতে চান।",
    pack1L1: "যেকোনো ২টি সাবান",
    pack1L2: "স্ট্যান্ডার্ড ইকো প্যাকেজিং",
    pack1L3: "এন্ট্রি-লেভেল ডিসকাউন্ট",
    pack2Ribbon: "সবচেয়ে পছন্দের",
    pack2Title: "ফ্যামিলি প্যাক",
    pack2Desc: "নিয়মিত ক্রেতা ও ছোট পরিবারের জন্য ব্যালান্সড অপশন।",
    pack2L1: "মিক্সড ভ্যারিয়েন্ট ৪টি সাবান",
    pack2L2: "প্রতি পিসে ভালো ভ্যালু",
    pack2L3: "রিপিট অর্ডারের জন্য দারুণ",
    pack3Title: "গিফট / প্রিমিয়াম প্যাক",
    pack3Desc: "গিফট, প্রিমিয়াম অর্ডার ও সোশ্যাল মিডিয়া ক্যাম্পেইনের জন্য।",
    pack3L1: "মিক্সড ভ্যারিয়েন্ট ৬টি সাবান",
    pack3L2: "প্রিমিয়াম ইকো প্রেজেন্টেশন",
    pack3L3: "সর্বোচ্চ মোট সেভিংস",
    calcTitle: "লাইভ অর্ডার ক্যালকুলেটর",
    calcText: "সাবান, প্যাকেজ টাইপ ও পরিমাণ বেছে নিয়ে মোট মূল্য দেখুন।",
    variant1Label: "ভ্যারিয়েন্ট ১",
    variant2Label: "ভ্যারিয়েন্ট ২",
    packageLabel: "প্যাকেজ টাইপ",
    quantityLabel: "পরিমাণ",
    summaryPackage: "নির্বাচিত প্যাকেজ",
    summaryPerPack: "প্রতি প্যাকেজ মূল্য",
    summaryQty: "অর্ডারের পরিমাণ",
    summaryDiscount: "বান্ডেল সেভিংস",
    summaryTotal: "আনুমানিক মোট",
    calcNote: "লাইভের আগে JavaScript অংশে সহজেই মূল্য ও প্যাকেজের নিয়ম পরিবর্তন করতে পারবেন।",
    orderTitle: "অর্ডার করুন",
    orderText: "Google Apps Script web app URL ব্যবহার করে সরাসরি Google Sheet-এ অর্ডার পাঠানো যাবে।",
    nameLabel: "পূর্ণ নাম",
    phoneLabel: "ফোন নম্বর",
    emailLabel: "ইমেইল (ঐচ্ছিক)",
    districtLabel: "জেলা / এলাকা",
    addressLabel: "ডেলিভারি ঠিকানা",
    prefVariantLabel: "পছন্দের ভ্যারিয়েন্ট",
    deliveryNoteLabel: "ডেলিভারি নোট",
    orderSummaryLabel: "অর্ডার সারসংক্ষেপ",
    submitBtn: "অর্ডার সাবমিট করুন",
    aboutTitle: "SobujCare সম্পর্কে",
    aboutText: "SobujCare হলো বাংলাদেশ-কেন্দ্রিক হারবাল সাবান ব্র্যান্ড, যেখানে পরিষ্কার ডিজাইন, প্রাকৃতিক পজিশনিং এবং প্রিমিয়াম দৈনন্দিন যত্নকে গুরুত্ব দেওয়া হয়েছে।",
    aboutL1: "স্থানীয় গ্রাহকদের জন্য ডিজাইন, ভবিষ্যতে এক্সপোর্ট-ফ্রেন্ডলি ব্র্যান্ডিংসহ",
    aboutL2: "হ্যান্ডমেড হারবাল সাবান দিয়ে শুরু করে পরবর্তীতে পণ্য বাড়ানোর জন্য উপযুক্ত",
    aboutL3: "GitHub Pages এ ফ্রি হোস্ট করা সহজ ওয়েবসাইট",
    webTitle: "ওয়েবসাইট সেটআপ নোট",
    webText: "লাইভ করার আগে কোডে Google Script URL, সোশ্যাল লিংক, যোগাযোগ তথ্য ও প্রোডাক্ট ছবি আপডেট করুন।",
    webL1: "এখন GitHub Pages এ হোস্ট করুন, পরে custom domain যুক্ত করুন",
    webL2: "সব অর্ডার এক জায়গায় রাখতে Google Sheet ব্যবহার করুন",
    webL3: "একটি script block থেকেই মূল্য ও package rule edit করা যাবে",
    contactTitle: "যোগাযোগ করুন",
    contactText: "পাবলিশ করার আগে এখানে আপনার আসল ব্যবসায়িক যোগাযোগ তথ্য যুক্ত করুন।",
    contactPhoneTitle: "ফোন",
    contactEmailTitle: "ইমেইল",
    contactSocialTitle: "ফেসবুক",
    launchTitle: "লঞ্চ টিপ",
    launchText: "শুরুতে ৩টি সাবান, ৩টি প্যাকেজ এবং এই সহজ অর্ডার ফ্লো দিয়ে শুরু করুন। পরে গ্রাহক রেসপন্স দেখে উন্নতি করুন।",
    launchBtn: "অর্ডার নেওয়া শুরু করুন",
    footerText: "BN/EN toggle, live pricing calculator এবং Google Sheets order capture সহ প্রিমিয়াম হারবাল সাবান ওয়েবসাইট টেমপ্লেট।",
    submitSuccess: "অর্ডার সফলভাবে সাবমিট হয়েছে।",
    submitError: "অর্ডার সাবমিট করা যায়নি। Apps Script URL চেক করুন।",
    missingScript: "ফর্ম ব্যবহারের আগে Google Apps Script web app URL যুক্ত করুন।"
  }
};

let currentLang = 'en';

const langButtons = document.querySelectorAll('[data-lang-btn]');
const i18nNodes = document.querySelectorAll('[data-i18n]');
const yearEl = document.getElementById('year');
const packageTypeEl = document.getElementById('packageType');
const quantityEl = document.getElementById('quantity');
const variant1El = document.getElementById('variant1');
const variant2El = document.getElementById('variant2');
const summaryPackageEl = document.getElementById('summaryPackage');
const summaryPerPackEl = document.getElementById('summaryPerPack');
const summaryQtyEl = document.getElementById('summaryQty');
const summaryDiscountEl = document.getElementById('summaryDiscount');
const summaryTotalEl = document.getElementById('summaryTotal');
const orderSummaryEl = document.getElementById('orderSummary');
const orderForm = document.getElementById('orderForm');
const formStatus = document.getElementById('formStatus');
const customerNameEl = document.getElementById('customerName');
const phoneEl = document.getElementById('phone');
const addressEl = document.getElementById('address');
const preferredVariantEl = document.getElementById('preferredVariant');
const deliveryNoteEl = document.getElementById('deliveryNote');
const whatsappOrderBtn = document.getElementById('whatsappOrderBtn');
const WHATSAPP_NUMBER = '94761419422';

yearEl.textContent = new Date().getFullYear();

function formatBDT(value) {
  return `৳${Number(value).toLocaleString('en-US')}`;
}

function applyTranslations(lang) {
  currentLang = lang;
  i18nNodes.forEach(node => {
    const key = node.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });

  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });

  updateCalculator();
}

function updateCalculator() {
  const packKey = packageTypeEl.value;
  const qty = Math.max(1, parseInt(quantityEl.value || '1', 10));
  const pack = packagePricing[packKey];
  const total = pack.base * qty;
  const savings = pack.discount * qty;

  summaryPackageEl.textContent = pack.label[currentLang];
  summaryPerPackEl.textContent = formatBDT(pack.base);
  summaryQtyEl.textContent = qty;
  summaryDiscountEl.textContent = formatBDT(savings);
  summaryTotalEl.textContent = formatBDT(total);

  const nameVal = customerNameEl ? customerNameEl.value.trim() : '';
  const phoneVal = phoneEl ? phoneEl.value.trim() : '';
  const addressVal = addressEl ? addressEl.value.trim() : '';
  const preferredVal = preferredVariantEl ? preferredVariantEl.value.trim() : '';
  const noteVal = deliveryNoteEl ? deliveryNoteEl.value.trim() : '';

  const summaryText = currentLang === 'bn'
    ? `নাম: ${nameVal || '-'}
ফোন: ${phoneVal || '-'}
প্যাকেজ: ${pack.label.bn}
ভ্যারিয়েন্ট: ${variant1El.value}, ${variant2El.value}
পরিমাণ: ${qty}
পছন্দের ভ্যারিয়েন্ট: ${preferredVal || '-'}
ঠিকানা: ${addressVal || '-'}
ডেলিভারি নোট: ${noteVal || '-'}
মোট: ${formatBDT(total)}
সেভিংস: ${formatBDT(savings)}`
    : `Name: ${nameVal || '-'}
Phone: ${phoneVal || '-'}
Package: ${pack.label.en}
Variants: ${variant1El.value}, ${variant2El.value}
Quantity: ${qty}
Preferred Variants: ${preferredVal || '-'}
Address: ${addressVal || '-'}
Delivery Note: ${noteVal || '-'}
Total: ${formatBDT(total)}
Savings: ${formatBDT(savings)}`;

  orderSummaryEl.value = summaryText;
}

[packageTypeEl, quantityEl, variant1El, variant2El].forEach(el => {
  el.addEventListener('input', updateCalculator);
  el.addEventListener('change', updateCalculator);
});

[
  customerNameEl,
  phoneEl,
  addressEl,
  preferredVariantEl,
  deliveryNoteEl
].forEach(el => {
  if (el) {
    el.addEventListener('input', updateCalculator);
    el.addEventListener('change', updateCalculator);
  }
});

langButtons.forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.dataset.langBtn));
});

function showStatus(type, message) {
  formStatus.className = `status show ${type}`;
  formStatus.textContent = message;
}

function buildWhatsAppMessage() {
  const packKey = packageTypeEl.value;
  const qty = Math.max(1, parseInt(quantityEl.value || '1', 10));
  const pack = packagePricing[packKey];
  const total = pack.base * qty;
  const savings = pack.discount * qty;

  const nameVal = customerNameEl ? customerNameEl.value.trim() : '';
  const phoneVal = phoneEl ? phoneEl.value.trim() : '';
  const addressVal = addressEl ? addressEl.value.trim() : '';
  const preferredVal = preferredVariantEl ? preferredVariantEl.value.trim() : '';
  const noteVal = deliveryNoteEl ? deliveryNoteEl.value.trim() : '';

  return `Hello, I want to order from SobujCare.

Name: ${nameVal || '-'}
Phone: ${phoneVal || '-'}
Package: ${pack.label.en}
Variants: ${variant1El.value}, ${variant2El.value}
Quantity: ${qty}
Preferred Variants: ${preferredVal || '-'}
Address: ${addressVal || '-'}
Delivery Note: ${noteVal || '-'}
Total: ${formatBDT(total)}
Savings: ${formatBDT(savings)}`;
}

if (whatsappOrderBtn) {
  whatsappOrderBtn.addEventListener('click', () => {
    const message = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  });
}

orderForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('PASTE_YOUR')) {
    showStatus('error', translations[currentLang].missingScript);
    return;
  }

  const formData = new FormData(orderForm);

  const payload = {
    name: formData.get('customerName') || '',
    phone: formData.get('phone') || '',
    product: formData.get('preferredVariant') || '',
    quantity: document.getElementById('quantity').value || '1',
    address: formData.get('address') || '',
    message: formData.get('deliveryNote') || ''
  };

  try {
    const checkRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'checkOrder',
        phone: payload.phone
      })
    });

    const checkData = await checkRes.json();

    if (checkData.status !== 'ok') {
      showStatus('error', 'Could not check current order status.');
      return;
    }

    if (!checkData.canOrder) {
      showStatus(
        'error',
        `Current Status: ${checkData.currentStatus} | ${checkData.currentMessage}`
      );
      return;
    }

    const submitRes = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({
        action: 'submitOrder',
        ...payload
      })
    });

    const submitData = await submitRes.json();

    if (submitData.status === 'success') {
      orderForm.reset();
      document.getElementById('quantity').value = 1;
      updateCalculator();
      showStatus('success', 'Order submitted successfully. Status: Pending');
    } else if (submitData.status === 'blocked') {
      showStatus(
        'error',
        `Current Status: ${submitData.currentStatus} | ${submitData.currentMessage}`
      );
    } else {
      showStatus('error', submitData.message || 'Order submission failed.');
    }

  } catch (err) {
    showStatus('error', 'Connection error. Please try again.');
  }
});

applyTranslations('en');
