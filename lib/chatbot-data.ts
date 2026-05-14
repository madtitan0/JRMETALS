export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

export interface ChatRule {
  patterns: string[];
  response: string;
}

export const CHATBOT_RULES: ChatRule[] = [
  {
    patterns: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "namaste", "vanakkam"],
    response: "Hello! Welcome to JR Metal Chennai. I'm here to help you with information about our premium steel products, pricing, and services. How can I assist you today?"
  },
  {
    patterns: ["tmt", "tmt bar", "tmt bars", "tmt steel", "thermo"],
    response: "Our **JR TMT Bars** are manufactured using advanced **TempCore Technology**, offering:\n\n• **PowerLock Ribs** for superior concrete bonding\n• **FlexCore Performance** — excellent bendability\n• **Triple Shield Protection** against corrosion, temperature & seismic forces\n• **Fire resistant** up to 500°C\n• **25% higher tensile strength** with Copper & Vanadium alloy\n\nGrades available: Fe-415, Fe-500, Fe-550, Fe-500D, Fe-550D\nSizes: 8mm to 40mm\n\nWould you like to know about pricing or place an inquiry?"
  },
  {
    patterns: ["crs", "crs rebar", "crs re-bar", "corrosion", "coastal", "anti-corrosion"],
    response: "**JR CRS Re-Bars (Corrosion Resistant Steel)** are specially designed for:\n\n• **Coastal construction** — withstands saline environments\n• **Industrial structures** in harsh chemical environments\n• **Bridges, ports & marine structures**\n• Extended lifespan for reinforced concrete\n\nIdeal for Chennai's coastal climate and high-humidity regions. Our CRS Re-Bars carry BIS certification and exceed IS standards.\n\nFor specifications or bulk pricing, please contact us at **+91 9888 988 810**."
  },
  {
    patterns: ["billet", "ms billet", "mild steel billet", "billets", "mild steel"],
    response: "**JR Mild Steel Billets** are:\n\n• Continuously cast with **uniform composition**\n• Minimal impurity levels for maximum structural integrity\n• In-house manufactured for strict quality control\n• Used as raw material for rolling TMT bars and structural steel\n\nProduction capacity: **300,000 MT per annum**\n\nFor bulk orders or dealer inquiries, reach us at **iinfo@jrmetalchennai.com**."
  },
  {
    patterns: ["sponge iron", "dri", "direct reduced iron", "sponge"],
    response: "**JR Sponge Iron (DRI)** details:\n\n• High metallic content with **low impurities**\n• Produced from premium iron ore and coal\n• Controlled reduction process\n• Used as charge material for electric and induction furnaces\n• Manufactured at our **Anantapur District, Andhra Pradesh** facility\n\nProduction capacity: **300,000 MT per annum**\n\nContact us for bulk supply and logistics."
  },
  {
    patterns: ["product", "products", "range", "what do you sell", "what do you make", "catalog"],
    response: "JR Metal Chennai manufactures **4 core products**:\n\n1. 🔩 **TMT Bars** — High-strength rebars for all construction\n2. 🌊 **CRS Re-Bars** — Corrosion-resistant for coastal projects\n3. 🏗️ **Mild Steel Billets** — Base material for structural steel\n4. ⚙️ **Sponge Iron (DRI)** — Raw material for steelmaking\n\nAll products are **ISO 9001 & BIS certified**.\n\nWhich product would you like to know more about?"
  },
  {
    patterns: ["price", "pricing", "cost", "rate", "how much", "quote", "quotation"],
    response: "Pricing for JR Metal products depends on current market rates, quantity, delivery location, and product grade.\n\n📞 **For immediate pricing:**\nCall: **+91 9888 988 810**\n\n📧 **For quotations:**\nEmail: **iinfo@jrmetalchennai.com**\n\n⏰ Business Hours: Mon–Sat, 10:00 AM – 7:00 PM\n\nWe offer competitive bulk pricing for contractors, builders, and dealers."
  },
  {
    patterns: ["contact", "phone", "call", "email", "reach", "address", "location", "office", "where"],
    response: "**JR Metal Chennai Contact Details:**\n\n📍 **Head Office:**\nNo.16, AA Block, 3rd Avenue,\nNear Roundtana, Anna Nagar,\nChennai – 600 040, Tamil Nadu\n\n📞 **Phone:** +91 9888 988 810\n📧 **Email:** iinfo@jrmetalchennai.com\n\n⏰ **Hours:** Mon–Sat, 10:00 AM – 7:00 PM\n\n🏭 **Plants:**\n• Sponge Iron: Anantapur, AP\n• TMT Manufacturing: Thiruvallur, TN\n• Solar Plant: Tiruvannamalai, TN"
  },
  {
    patterns: ["about", "company", "history", "founded", "who are you", "jr metal", "jr metals", "since when", "how old"],
    response: "**About JR Metal Chennai Limited:**\n\nWe are the flagship company of the **JR Group**, with **over two decades of excellence** in steel manufacturing.\n\n✅ **75,000+ VIP Customers** served\n✅ **300,000 MT** annual production capacity\n✅ **3 fully integrated plants** across South India\n✅ Trusted by major government & private projects\n\n**Certifications:** ISO 9001, ISO 14001, OHSMS, BIS\n\n**Founded by:** Mr. Ramchander Singh\n**MD & CEO:** Mr. Pramod Singh\n\nOur mission: \"Forging Strength, Building Trust\""
  },
  {
    patterns: ["project", "projects", "landmark", "completed", "reference", "work done", "portfolio"],
    response: "**JR Metal's Landmark Projects:**\n\n🏢 Kilambakkam New Bus Terminal, Chennai\n🛣️ Natham to Thuvarankurichi Highways\n🏟️ Madurai Alanganallur Jallikattu Stadium\n🏥 Rajiv Gandhi Govt. General Hospital\n🏥 Government Medical College, Virudhunagar\n⚖️ Madurai District Court\n\nOur TMT bars have contributed to some of Tamil Nadu's most iconic infrastructure. Want to discuss your next project?"
  },
  {
    patterns: ["certification", "certify", "iso", "bis", "standard", "quality", "certified"],
    response: "**JR Metal Quality Certifications:**\n\n🏆 **ISO 9001** — Quality Management System\n🌿 **ISO 14001** — Environmental Management\n🦺 **OHSMS** — Occupational Health & Safety\n📋 **BIS** — Bureau of Indian Standards\n\nAll our products meet and exceed Indian Standards (IS) specifications. We use:\n• Universal Testing Machine (120 MT capacity)\n• German spectrometers for precision control\n• CNC RIB Cutting Machine\n• Laboratory Furnace (5 kg capacity)"
  },
  {
    patterns: ["team", "management", "ceo", "director", "founder", "leader", "leadership"],
    response: "**JR Metal Leadership Team:**\n\n👤 **Mr. Ramchander Singh** — Founder & Chief Mentor\n👤 **Mr. Pramod Singh** — Managing Director & CEO\n👤 **Mr. Kanishk Singh** — President, Sales & Business Development\n👤 **Mr. Pitchaiah Raju** — Director\n👤 **Mr. Girish H S** — General Manager, Production\n👤 **Mr. Sunil Manivannan** — Chief Financial Officer\n\nOur leadership brings decades of combined expertise in steel manufacturing and business development."
  },
  {
    patterns: ["dealer", "distributor", "franchise", "dealership", "business", "partner", "bulk"],
    response: "**Interested in becoming a JR Metal dealer or partner?**\n\nWe offer:\n• **Dealer partnerships** across Tamil Nadu & AP\n• **Bulk pricing** for contractors & builders\n• **Technical support** and product training\n• **Competitive margins** for dealers\n\nContact our Sales Head:\n📞 **+91 9888 988 810**\n📧 **iinfo@jrmetalchennai.com**\n\nMr. Kanishk Singh (President, Sales) handles all partnership inquiries."
  },
  {
    patterns: ["delivery", "shipping", "transport", "logistics", "dispatch"],
    response: "**JR Metal Delivery & Logistics:**\n\nWe supply across Tamil Nadu, Andhra Pradesh, and other South Indian states.\n\n• Prompt dispatch from our Thiruvallur facility\n• Fleet of heavy transport vehicles\n• Custom cut-to-size available\n• Bulk delivery arrangements\n\nFor delivery timelines and logistics, contact:\n📞 **+91 9888 988 810**\n\nMinimum order quantities and delivery charges depend on location and order size."
  },
  {
    patterns: ["grade", "grades", "fe-415", "fe-500", "fe-550", "size", "sizes", "specification", "specs", "diameter"],
    response: "**JR TMT Bar Grades & Sizes:**\n\n**Grades Available:**\n• Fe-415 / Fe-415D\n• Fe-500 / Fe-500D *(most popular)*\n• Fe-550 / Fe-550D\n• Fe-600\n\n**Sizes (Diameter):**\n• 8mm, 10mm, 12mm, 16mm\n• 20mm, 25mm, 32mm, 40mm\n\n**D-Grade** offers superior ductility for earthquake-prone zones.\n\nAll grades conform to **IS:1786** standards and are BIS marked."
  },
  {
    patterns: ["solar", "renewable", "green", "environment", "sustainability"],
    response: "**JR Group's Green Initiatives:**\n\n☀️ We operate a **Solar Power Plant** in Tiruvannamalai District, Tamil Nadu\n\n🌿 Green belts maintained around all manufacturing facilities\n\n📋 **ISO 14001 certified** for Environmental Management\n\nWe're committed to sustainable steel manufacturing while maintaining the highest product quality standards."
  },
  {
    patterns: ["technology", "tempcore", "process", "manufacture", "how made", "production"],
    response: "**JR Metal Manufacturing Technology:**\n\n🔬 **TempCore Technology** — The globally proven process for premium TMT bars\n\n**Equipment:**\n• Universal Testing Machine (120 MT)\n• German Spectrometers for precision alloy control\n• CNC RIB Cutting Machine\n• Laboratory Furnace (5 kg)\n• Zero tension rolling systems\n\n**Process:** Iron Ore → Sponge Iron → MS Billets → TMT/CRS Bars\n\nFully integrated production ensures quality at every stage."
  },
  {
    patterns: ["house", "home", "residential", "flat", "apartment", "villa", "building"],
    response: "**Building your dream home? Trust JR TMT!**\n\nFor residential construction, we recommend:\n• **Fe-500D TMT Bars** — Best balance of strength & ductility\n• **Fe-415 TMT Bars** — For smaller structures\n\n✅ Earthquake resistant\n✅ Fire resistant up to 500°C\n✅ Superior concrete bonding\n✅ Corrosion protected\n\nAvailable at dealers across Chennai and Tamil Nadu.\n\nNeed a dealer near you? Call **+91 9888 988 810**"
  },
  {
    patterns: ["bye", "goodbye", "thank you", "thanks", "ok", "okay", "done", "that's all"],
    response: "Thank you for connecting with JR Metal Chennai! 🙏\n\nFor any further queries:\n📞 **+91 9888 988 810**\n📧 **iinfo@jrmetalchennai.com**\n\nVisit us at Anna Nagar, Chennai.\nMon–Sat, 10:00 AM – 7:00 PM\n\n*Forging Strength, Building Trust* — JR Metal Chennai"
  },
];

export const QUICK_REPLIES = [
  "TMT Bar Specs",
  "Get a Quote",
  "Our Projects",
  "Contact Info",
  "Dealer Inquiry",
  "Certifications",
];

export function getBotResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase().trim();

  for (const rule of CHATBOT_RULES) {
    if (rule.patterns.some((p) => lower.includes(p))) {
      return rule.response;
    }
  }

  if (lower.length < 3) {
    return "Could you please provide more details about your query?";
  }

  return "Thank you for your question! For detailed information, please contact our team:\n\n📞 **+91 9888 988 810**\n📧 **iinfo@jrmetalchennai.com**\n\nOur team is available Mon–Sat, 10:00 AM – 7:00 PM.\n\nYou can also ask me about: TMT Bars, CRS Re-Bars, pricing, projects, or our certifications.";
}
