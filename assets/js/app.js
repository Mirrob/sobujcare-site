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

    heroEyebrow: "Organic-Inspired Soap Crafted for Everyday Skin Care",
    heroTitle: "Pure Care From Nature",
    heroText: "Discover SobujCare’s premium soaps made with herbal tradition and organic-inspired care for clean, gentle, and natural daily skincare. Start with our best-selling range and choose a package that fits your needs.",
    heroPrimary: "Explore Products",
    heroSecondary: "Calculate Order",
    heroTrust1: "Natural ingredients",
    heroTrust2: "Gentle daily care",
    heroTrust3: "Made for Bangladesh",
    heroPhotoBadge: "Premium Herbal Collection",

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
    heroSupportLabel: "WhatsApp support",
    heroSupportValue: "Fast response",
    heroBundleLabel: "Premium bundles",
    heroBundleValue: "Gift-ready look",

    productsKicker: "Featured Range",
    productsTitle: "Our Soap Collection",
    productsText: "Discover SobujCare’s carefully selected soap range designed for daily care, natural freshness, and a premium bathing experience.",
    orderVariantLink: "Order this variant",

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
    p3Desc: "Detox-style soap with a strong premium identity.",
    p3Badge: "Premium",
    p3L1: "Charcoal-based deep cleansing concept",
    p3L2: "Strong look for modern buyers",
    p3L3: "Perfect for combo offers",

    p4Title: "Aloe Vera",
    p4Desc: "Soothing soap for hydration and fresh glowing skin.",
    p4Badge: "Natural",
    p4L1: "Hydrates and refreshes skin deeply",
    p4L2: "Cooling and soothing effect",
    p4L3: "Perfect for daily gentle skincare",

    galleryKicker: "Premium Presentation",
    galleryTitle: "Packaging Preview",
    galleryText: "Our packaging is designed to give SobujCare a clean, premium, and gift-worthy look that feels attractive from the very first impression.",
    g1Title: "Neem Premium Box",
    g1Text: "Minimal kraft look with bold green strip for a strong shelf presence.",
    g2Title: "Turmeric Botanical Box",
    g2Text: "Warm botanical style with premium eco-friendly presentation.",
    g3Title: "Gift Bundle Mockup",
    g3Text: "A stronger premium presentation for combo sales and gifting campaigns.",

    packagesKicker: "Smart Bundles",
    packagesTitle: "Packages & Bundles",
    packagesText: "Choose the package that matches your needs, whether for personal use, family care, or premium gifting.",
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

    calcKicker: "Easy Ordering",
    calcSectionTitle: "Calculate Your Order & Place It Instantly",
    calcSectionText: "Choose your preferred soap variants, see bundle savings live, and send your order with a clean premium experience.",
    calcTitle: "Live Order Calculator",
    calcText: "Choose soaps, package type, and quantity to see the live estimated total.",
    calcTrust1: "Fast order process",
    calcTrust2: "WhatsApp support",
    calcTrust3: "Bundle savings",
    calcTrust1Detail: "Submit your order in seconds and our team will confirm it quickly with a simple follow-up.",
    calcTrust2Detail: "Need help before ordering? Tap to chat with us on WhatsApp for quick product and delivery support.",
    calcTrust3Detail: "Family and gift packs give better value per soap, making larger orders feel smarter and more premium.",

    variant1Label: "Variant 1",
    variant2Label: "Variant 2",
    packageLabel: "Package Type",
    quantityLabel: "Quantity",
    summaryPackage: "Selected Package",
    summaryPerPack: "Price Per Package",
    summaryQty: "Order Quantity",
    summaryDiscount: "Bundle Savings",
    summaryTotal: "Estimated Total",
    deliveryNote: "Enjoy free delivery on orders of 50+ items.",

    orderTitle: "Place an Order",
    orderText: "Fill in your details and place your order easily. Our team will confirm and process your order shortly.",
    nameLabel: "Full Name",
    phoneLabel: "Phone Number",
    emailLabel: "Email (Optional)",
    districtLabel: "District / Area",
    addressLabel: "Delivery Address",
    prefVariantLabel: "Preferred Variants",
    deliveryNoteLabel: "Delivery Note",
    orderSummaryLabel: "Final Order Summary",
    submitBtn: "Submit Order",
    whatsappBtn: "Order via WhatsApp",

    aboutKicker: "Why SobujCare",
    aboutSectionTitle: "Natural Care With A Premium Feel",
    aboutSectionText: "SobujCare is positioned as a clean, modern soap brand for customers who want gentle daily care, attractive packaging, and simple ordering.",
    aboutTitle: "About SobujCare",
    aboutText: "SobujCare is a Bangladesh-focused soap brand built around clean design, natural positioning, and premium everyday care.",
    aboutL1: "Designed for local customers with future export-friendly branding",
    aboutL2: "Perfect for a premium soap launch and later product expansion",
    aboutL3: "Clean visual identity suitable for online sales and gifting",
    aboutRightTitle: "Why Customers Will Love It",
    aboutRightText: "A premium soap brand should look trustworthy, giftable, and easy to order. This layout helps support that first impression.",
    aboutRightL1: "Clean and premium product presentation",
    aboutRightL2: "Easy bundle selection for higher order value",
    aboutRightL3: "Modern design that feels attractive on desktop and mobile",

    contactKick: "Support & Contact",
    contactSectionTitle: "Order & Support",
    contactSectionText: "Get in touch for orders, delivery updates, and product inquiries. We’re here to help you choose the right SobujCare soap for your daily care.",
    contactTitle: "Contact SobujCare",
    contactText: "For orders, support, and business inquiries, reach us through the contact details below.",
    contactPhoneTitle: "Phone",
    contactEmailTitle: "Email",
    contactSocialTitle: "Facebook",

    launchTitle: "Why Order From Us",
    launchText: "Premium soaps for daily care, clean packaging for personal use or gifting, and easy ordering with quick support.",
    launchBtn: "Order Now",

    footerText: "SobujCare offers premium soaps crafted with herbal tradition and organic-inspired care for gentle daily freshness and a clean premium feel.",

    submitSuccess: "Order submitted successfully.",
    submitError: "Order submission failed. Please check the Apps Script URL.",
    missingScript: "Please add your Google Apps Script web app URL before using the form.",
    checkStatusError: "Could not check current order status.",
    statusPending: "Order submitted successfully. Status: Pending",
    connectionError: "Connection error. Please try again."
  },

  bn: {
    navProducts: "পণ্যসমূহ",
    navGallery: "গ্যালারি",
    navPackages: "প্যাকেজ",
    navOrder: "অর্ডার",
    navAbout: "আমাদের সম্পর্কে",
    navContact: "যোগাযোগ",
    navButton: "অর্ডার করুন",

    heroEyebrow: "দৈনন্দিন ত্বকের যত্নের জন্য অর্গানিক-অনুপ্রাণিত সাবান",
    heroTitle: "প্রকৃতি থেকে বিশুদ্ধ যত্ন",
    heroText: "SobujCare-এর প্রিমিয়াম সাবান হারবাল ঐতিহ্য ও অর্গানিক-অনুপ্রাণিত যত্নে তৈরি, যা পরিষ্কার, কোমল এবং প্রাকৃতিক দৈনন্দিন ত্বকের যত্নে সহায়তা করে। আমাদের জনপ্রিয় রেঞ্জ থেকে আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন।",
    heroPrimary: "পণ্য দেখুন",
    heroSecondary: "মূল্য হিসাব করুন",
    heroTrust1: "প্রাকৃতিক উপাদান",
    heroTrust2: "কোমল দৈনন্দিন যত্ন",
    heroTrust3: "বাংলাদেশের জন্য তৈরি",
    heroPhotoBadge: "প্রিমিয়াম হারবাল কালেকশন",

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
    heroSupportLabel: "হোয়াটসঅ্যাপ সাপোর্ট",
    heroSupportValue: "দ্রুত সাড়া",
    heroBundleLabel: "প্রিমিয়াম বান্ডেল",
    heroBundleValue: "উপহারের জন্য উপযোগী",

    productsKicker: "নির্বাচিত সংগ্রহ",
    productsTitle: "আমাদের সাবান সংগ্রহ",
    productsText: "SobujCare-এর যত্নসহকারে বাছাই করা সাবান সংগ্রহ দৈনন্দিন যত্ন, প্রাকৃতিক সতেজতা এবং প্রিমিয়াম গোসলের অভিজ্ঞতার জন্য তৈরি।",
    orderVariantLink: "এই ভ্যারিয়েন্ট অর্ডার করুন",

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
    p3Desc: "ডিটক্স-স্টাইল সাবান, প্রিমিয়াম লুকসহ।",
    p3Badge: "প্রিমিয়াম",
    p3L1: "চারকোল-ভিত্তিক ডিপ ক্লিনজিং কনসেপ্ট",
    p3L2: "আধুনিক ক্রেতাদের জন্য স্ট্রং লুক",
    p3L3: "কম্বো অফারের জন্য দারুণ",

    p4Title: "অ্যালোভেরা",
    p4Desc: "হাইড্রেশন ও সতেজ উজ্জ্বল ত্বকের জন্য কোমল সাবান।",
    p4Badge: "প্রাকৃতিক",
    p4L1: "ত্বক গভীরভাবে আর্দ্র ও সতেজ রাখে",
    p4L2: "শীতল ও স্নিগ্ধ অনুভূতি দেয়",
    p4L3: "প্রতিদিনের কোমল স্কিনকেয়ারের জন্য উপযুক্ত",

    galleryKicker: "প্রিমিয়াম উপস্থাপন",
    galleryTitle: "প্যাকেজিং প্রিভিউ",
    galleryText: "SobujCare-এর প্যাকেজিং এমনভাবে ডিজাইন করা হয়েছে যাতে প্রথম দেখাতেই এটি পরিচ্ছন্ন, প্রিমিয়াম এবং উপহার দেওয়ার মতো আকর্ষণীয় মনে হয়।",
    g1Title: "নিম প্রিমিয়াম বক্স",
    g1Text: "শক্তিশালী শেল্ফ উপস্থিতির জন্য বোল্ড সবুজ স্ট্রিপসহ মিনিমাল ক্রাফট লুক।",
    g2Title: "টারমেরিক বোটানিক্যাল বক্স",
    g2Text: "উষ্ণ বোটানিক্যাল স্টাইলসহ প্রিমিয়াম ইকো-ফ্রেন্ডলি প্রেজেন্টেশন।",
    g3Title: "গিফট বান্ডেল মকআপ",
    g3Text: "কম্বো সেলস ও গিফট ক্যাম্পেইনের জন্য আরও প্রিমিয়াম উপস্থাপন।",

    packagesKicker: "স্মার্ট বান্ডেল",
    packagesTitle: "প্যাকেজ ও বান্ডেল",
    packagesText: "আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন—ব্যক্তিগত ব্যবহার, পারিবারিক যত্ন বা প্রিমিয়াম উপহারের জন্য।",
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

    calcKicker: "সহজ অর্ডার",
    calcSectionTitle: "আপনার অর্ডার হিসাব করুন ও সাথে সাথে অর্ডার দিন",
    calcSectionText: "পছন্দের সাবান ভ্যারিয়েন্ট বেছে নিন, লাইভ সেভিংস দেখুন এবং সুন্দর প্রিমিয়াম অভিজ্ঞতায় অর্ডার পাঠান।",
    calcTitle: "লাইভ অর্ডার ক্যালকুলেটর",
    calcText: "সাবান, প্যাকেজ টাইপ ও পরিমাণ বেছে নিয়ে মোট মূল্য দেখুন।",
    calcTrust1: "দ্রুত অর্ডার প্রক্রিয়া",
    calcTrust2: "হোয়াটসঅ্যাপ সাপোর্ট",
    calcTrust3: "বান্ডেল সেভিংস",
    calcTrust1Detail: "মাত্র কয়েক সেকেন্ডে অর্ডার পাঠান, তারপর আমাদের টিম দ্রুত যোগাযোগ করে কনফার্ম করবে।",
    calcTrust2Detail: "অর্ডারের আগে সহায়তা দরকার? WhatsApp-এ দ্রুত পণ্য ও ডেলিভারি সহায়তা পেতে ট্যাপ করুন।",
    calcTrust3Detail: "ফ্যামিলি ও গিফট প্যাকে প্রতি সাবানে বেশি ভ্যালু পাওয়া যায়, তাই বড় অর্ডার আরও স্মার্ট ও প্রিমিয়াম মনে হয়।",

    variant1Label: "ভ্যারিয়েন্ট ১",
    variant2Label: "ভ্যারিয়েন্ট ২",
    packageLabel: "প্যাকেজ টাইপ",
    quantityLabel: "পরিমাণ",
    summaryPackage: "নির্বাচিত প্যাকেজ",
    summaryPerPack: "প্রতি প্যাকেজ মূল্য",
    summaryQty: "অর্ডারের পরিমাণ",
    summaryDiscount: "বান্ডেল সেভিংস",
    summaryTotal: "আনুমানিক মোট",
    deliveryNote: "৫০ বা তার বেশি অর্ডারে ফ্রি ডেলিভারি উপভোগ করুন।",
    

    orderTitle: "অর্ডার করুন",
    orderText: "আপনার তথ্য পূরণ করে সহজেই অর্ডার করুন। আমাদের টিম দ্রুত আপনার অর্ডার নিশ্চিত করে প্রসেস করবে।",
    nameLabel: "পূর্ণ নাম",
    phoneLabel: "ফোন নম্বর",
    emailLabel: "ইমেইল (ঐচ্ছিক)",
    districtLabel: "জেলা / এলাকা",
    addressLabel: "ডেলিভারি ঠিকানা",
    prefVariantLabel: "পছন্দের ভ্যারিয়েন্ট",
    deliveryNoteLabel: "ডেলিভারি নোট",
    orderSummaryLabel: "চূড়ান্ত অর্ডার সারসংক্ষেপ",
    submitBtn: "অর্ডার সাবমিট করুন",
    whatsappBtn: "হোয়াটসঅ্যাপে অর্ডার করুন",

    aboutKicker: "কেন SobujCare",
    aboutSectionTitle: "প্রাকৃতিক যত্নের সাথে প্রিমিয়াম অনুভূতি",
    aboutSectionText: "SobujCare একটি পরিচ্ছন্ন ও আধুনিক সাবান ব্র্যান্ড, যা কোমল দৈনন্দিন যত্ন, আকর্ষণীয় প্যাকেজিং এবং সহজ অর্ডার অভিজ্ঞতা দেয়।",
    aboutTitle: "SobujCare সম্পর্কে",
    aboutText: "SobujCare হলো বাংলাদেশ-কেন্দ্রিক একটি সাবান ব্র্যান্ড, যা পরিচ্ছন্ন ডিজাইন, প্রাকৃতিক অবস্থান এবং প্রিমিয়াম দৈনন্দিন যত্নকে কেন্দ্র করে গড়ে উঠেছে।",
    aboutL1: "স্থানীয় গ্রাহকদের জন্য ডিজাইন, ভবিষ্যতে এক্সপোর্ট-ফ্রেন্ডলি ব্র্যান্ডিংসহ",
    aboutL2: "প্রিমিয়াম সাবান ব্র্যান্ড লঞ্চ এবং পরবর্তী পণ্য সম্প্রসারণের জন্য উপযুক্ত",
    aboutL3: "অনলাইন বিক্রয় ও উপহারের জন্য উপযোগী পরিচ্ছন্ন ভিজ্যুয়াল পরিচিতি",
    aboutRightTitle: "গ্রাহকরা কেন এটি পছন্দ করবেন",
    aboutRightText: "একটি প্রিমিয়াম সাবান ব্র্যান্ডকে বিশ্বাসযোগ্য, উপহার উপযোগী এবং সহজে অর্ডারযোগ্য দেখাতে হয়। এই লেআউট সেই প্রথম ধারণাকে শক্তিশালী করে।",
    aboutRightL1: "পরিচ্ছন্ন ও প্রিমিয়াম পণ্য উপস্থাপন",
    aboutRightL2: "উচ্চ অর্ডার ভ্যালুর জন্য সহজ বান্ডেল নির্বাচন",
    aboutRightL3: "ডেস্কটপ ও মোবাইলে আকর্ষণীয় আধুনিক ডিজাইন",

    contactKick: "সহায়তা ও যোগাযোগ",
    contactSectionTitle: "অর্ডার ও সহায়তা",
    contactSectionText: "অর্ডার, ডেলিভারি আপডেট এবং পণ্য সম্পর্কিত যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন। আপনার দৈনন্দিন যত্নের জন্য উপযুক্ত SobujCare সাবান বেছে নিতে আমরা সহায়তা করব।",
    contactTitle: "SobujCare যোগাযোগ",
    contactText: "অর্ডার, সহায়তা এবং ব্যবসায়িক যোগাযোগের জন্য নিচের তথ্য ব্যবহার করুন।",
    contactPhoneTitle: "ফোন",
    contactEmailTitle: "ইমেইল",
    contactSocialTitle: "ফেসবুক",

    launchTitle: "কেন আমাদের থেকে অর্ডার করবেন",
    launchText: "দৈনন্দিন যত্নের জন্য প্রিমিয়াম সাবান, ব্যক্তিগত ব্যবহার বা উপহারের জন্য পরিচ্ছন্ন প্যাকেজিং, এবং দ্রুত সহায়তাসহ সহজ অর্ডার ব্যবস্থা।",
    launchBtn: "এখনই অর্ডার করুন",

    footerText: "SobujCare নিয়ে এসেছে প্রিমিয়াম সাবান, যা হারবাল ঐতিহ্য ও অর্গানিক-অনুপ্রাণিত যত্নে তৈরি, দৈনন্দিন সতেজতা এবং প্রিমিয়াম অনুভূতির জন্য।",

    submitSuccess: "অর্ডার সফলভাবে সাবমিট হয়েছে।",
    submitError: "অর্ডার সাবমিট করা যায়নি। Apps Script URL চেক করুন।",
    missingScript: "ফর্ম ব্যবহারের আগে Google Apps Script web app URL যুক্ত করুন।",
    checkStatusError: "বর্তমান অর্ডারের স্ট্যাটাস যাচাই করা যায়নি।",
    statusPending: "অর্ডার সফলভাবে সাবমিট হয়েছে। স্ট্যাটাস: Pending",
    connectionError: "সংযোগে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
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
const menuToggle = document.getElementById('menuToggle');
const navPanel = document.getElementById('mobileNavPanel');
const navOverlay = document.getElementById('navOverlay');
const navLinkItems = document.querySelectorAll('.nav-links a, .nav-actions .btn');
const trustNoteToggles = document.querySelectorAll('.trust-note-toggle');
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

function openMobileMenu() {
  if (!menuToggle || !navPanel || !navOverlay) return;
  menuToggle.classList.add('active');
  navPanel.classList.add('open');
  navOverlay.classList.add('show');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

function closeMobileMenu() {
  if (!menuToggle || !navPanel || !navOverlay) return;
  menuToggle.classList.remove('active');
  navPanel.classList.remove('open');
  navOverlay.classList.remove('show');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function toggleMobileMenu() {
  if (!navPanel) return;
  if (navPanel.classList.contains('open')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMobileMenu);
}

if (navOverlay) {
  navOverlay.addEventListener('click', closeMobileMenu);
}

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 760) {
      closeMobileMenu();
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    closeMobileMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});


function setActiveTrustCard(card) {
  if (!card) return;
  trustNoteToggles.forEach(item => {
    const isActive = item === card;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });
}

trustNoteToggles.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      card.setAttribute('aria-expanded', 'false');
      return;
    }
    setActiveTrustCard(card);
  });
});


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

  return currentLang === 'bn'
    ? `হ্যালো, আমি SobujCare থেকে অর্ডার করতে চাই।

নাম: ${nameVal || '-'}
ফোন: ${phoneVal || '-'}
প্যাকেজ: ${pack.label.bn}
ভ্যারিয়েন্ট: ${variant1El.value}, ${variant2El.value}
পরিমাণ: ${qty}
পছন্দের ভ্যারিয়েন্ট: ${preferredVal || '-'}
ঠিকানা: ${addressVal || '-'}
ডেলিভারি নোট: ${noteVal || '-'}
মোট: ${formatBDT(total)}
সেভিংস: ${formatBDT(savings)}`
    : `Hello, I want to order from SobujCare.

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
      showStatus('error', translations[currentLang].checkStatusError);
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
      showStatus('success', translations[currentLang].statusPending);
    } else if (submitData.status === 'blocked') {
      showStatus(
        'error',
        `Current Status: ${submitData.currentStatus} | ${submitData.currentMessage}`
      );
    } else {
      showStatus('error', submitData.message || translations[currentLang].submitError);
    }

  } catch (err) {
    showStatus('error', translations[currentLang].connectionError);
  }
});

applyTranslations('en');
