import { useState, useEffect, useRef } from "react";

const tabData = {
    "What's New": [
        "Information of Differently-Abled Officers and Employees",
        "Regarding setting up a Venture Capital Fund to provide financial assistance to new entrepreneurs in the state's textile sector.",
        "Industrial, Investment & Services Policy of Maharashtra – 2025",
        "Mahareeshim Campaign–2026: Regarding the Implementation of the Mulberry/Tasar Registration Program",
        "Citizen Charter – Services and Schemes",
        "Approval for setting up a Tussar silk cocoon market in Gadchiroli",
    ],
    Forms: [
        "Application Form for Textile Subsidy",
        "Power Loom Registration Form",
        "Handloom Weaver Identity Card Application",
        "Silk Cocoon Marketing License Form",
    ],
    Notifications: [
        "Notification regarding revised power subsidy rates",
        "Amendment to Textile Policy 2023-28",
        "New guidelines for powerloom unit registration",
        "Sericulture development program notification",
    ],
    Tenders: [
        "Tender for supply of raw materials to handloom clusters",
        "IT infrastructure upgrade for Textile Commissionerate",
        "Construction of textile park in Aurangabad",
        "Consultancy services for textile skill development",
    ],
};

const dignitaries = [
    { name: "Shri. Devendra Fadnavis", title: "Hon'ble Chief Minister" },
    { name: "Shri. Eknath Shinde", title: "Hon'ble Deputy Chief Minister" },
    { name: "Smt. Sunetra Ajit Pawar", title: "Hon'ble Deputy Chief Minister" },
    { name: "Shri. Sanjay Savkare", title: "Hon'ble Minister (Textile)" },
    { name: "Smt. Anshu Sinha, I.A.S", title: "Principal Secretary (Textile)" },
];

const documents = [
    "Information of Differently-Abled Officers and Employees",
    "Regarding setting up a Venture Capital Fund to provide financial assistance to new entrepreneurs in the state's textile sector.",
    "Industrial, Investment & Services Policy of Maharashtra – 2025",
    "Mahareeshim Campaign–2026: Regarding the Implementation of the Mulberry/Tasar Registration Program",
    "Citizen Charter – Services and Schemes",
    "Regarding making online registration mandatory on the portal of the Textiles Commissionerate for all power loom units in the state to avail electricity subsidy.",
    "Implementation of Rs.3.00/unit power subsidy for private spinning mills under the Cluster Scheme, as per the 2023–28 Textile Policy.",
];

const linksLeft = [
    "Government of Maharashtra",
    "Government of India Textile Commissionerate",
    "Government of Maharashtra Textile Commissionerate",
    "Development Commissioner for Handlooms",
    "Maharashtra State Powerloom Corporation Ltd.",
    "Maharashtra State Co-operative Textile Federation Ltd.",
    "The Maharashtra State Co-operative Cotton Grower Marketing Federation Ltd",
    "MIDC | Maharashtra Industrial Development Corporation",
];

const linksRight = [
    "Government of India Textile",
    "Government of Maharashtra Textile (old policy 2011-17 & 2018-23)",
    "Directorate of Sericulture",
    "Cooperation, Marketing & Textile (Government of Maharashtra)",
    "Maharashtra State Textile Corporation Ltd.",
    "Maharashtra State Handlooms Corporation Ltd.",
    "Maharashtra State Handloom Co-op Federation Ltd.",
    "Maharashtra Industries Department",
    "Maharashtra Pollution Control Board",
];

const partners = [
    { name: "data.gov.in", sub: "Open Government Data" },
    { name: "Make In India", sub: "" },
    { name: "Incredible India", sub: "" },
    { name: "india.gov.in", sub: "The national portal" },
    { name: "Digital India", sub: "Power To Empower" },
    { name: "PMIndia", sub: "" },
    { name: "myGov", sub: "मेरी सरकार" },
    { name: "महाराष्ट्र शासन", sub: "" },
];

const newsItems = [
    "The Sustainable and Integrated Textile Policy 2023-2028 was released by the Department of Textiles on 2nd June 2023",
    "v2_Maharashtra_PPP_Policy_APMC_Reforms_2025 (For opinion and suggestion)",
];

const PersonIcon = () => (
    <svg viewBox="0 0 24 24" className="w-14 h-14 opacity-30">
        <path
            d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z"
            fill="#999"
        />
    </svg>
);

const ImagePlaceholder = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-30">
        <path
            d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            fill="#999"
        />
    </svg>
);

// ─── SUBCOMPONENTS ───

function TopBar() {
    return (
        <div className="flex items-center justify-between px-5 py-1 bg-white border-b border-gray-200 text-sm">
            <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-800">महाराष्ट्र शासन</span>
                <span className="text-gray-400">|</span>
                <span className="font-semibold text-gray-800">GOVERNMENT OF MAHARASHTRA</span>
            </div>
            <div className="flex gap-2">
                {["☰", "🔍", "🏢", "♿", "अA"].map((icon, i) => (
                    <button
                        key={i}
                        className="border border-gray-300 px-2.5 py-1.5 text-base rounded-sm hover:bg-gray-100 transition-colors"
                    >
                        {icon}
                    </button>
                ))}
            </div>
        </div>
    );
}

function Header() {
    return (
        <div className="flex items-center justify-between px-8 py-3 bg-white border-b-2 border-gray-200">
            <div className="flex items-center gap-4">
                <div className="w-16 flex items-center justify-center">
                    <svg viewBox="0 0 50 65" fill="none" className="w-12 h-14">
                        <circle cx="25" cy="14" r="11" stroke="#333" strokeWidth="1.5" fill="none" />
                        <circle cx="25" cy="14" r="6" stroke="#333" strokeWidth="1" fill="none" />
                        <line x1="25" y1="25" x2="25" y2="32" stroke="#333" strokeWidth="2" />
                        <rect x="12" y="32" width="26" height="3" rx="1" fill="#333" />
                        <line x1="15" y1="35" x2="15" y2="48" stroke="#333" strokeWidth="1.5" />
                        <line x1="25" y1="35" x2="25" y2="48" stroke="#333" strokeWidth="1.5" />
                        <line x1="35" y1="35" x2="35" y2="48" stroke="#333" strokeWidth="1.5" />
                        <rect x="10" y="48" width="30" height="3" rx="1" fill="#333" />
                        <text x="25" y="60" textAnchor="middle" fontSize="4.5" fill="#333" fontWeight="600">
                            सत्यमेव जयते
                        </text>
                    </svg>
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-medium">वस्त्रोद्योग विभाग</p>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Department of Textiles</h1>
                    <p className="text-xs text-gray-500">
                        (Under the aegis of Department of Cooperation, Marketing and Textiles)
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold text-center leading-tight">
                    नीम
                    <br />
                    मंडळ
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-white text-xs font-bold text-center leading-tight">
                    महा
                    <br />
                    राष्ट्र
                </div>
            </div>
        </div>
    );
}

const navItems = [
    { label: "Home", active: true },
    { label: "About", dropdown: true },
    { label: "Directory" },
    { label: "Citizen Corner", dropdown: true },
    { label: "Schemes/Programmes", dropdown: true },
    { label: "Documents", dropdown: true },
    { label: "Notices", dropdown: true },
    { label: "100 Days Program Report" },
    { label: "Publications", dropdown: true },
];

function NavBar() {
    return (
        <nav className="bg-[#1a2a6c] flex items-center px-5 sticky top-0 z-50 shadow-lg overflow-x-auto">
            {navItems.map((item, i) => (
                <a
                    key={i}
                    href="#"
                    className={`flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-white whitespace-nowrap transition-colors hover:bg-amber-500 ${item.active ? "bg-amber-500" : ""
                        }`}
                >
                    {item.label}
                    {item.dropdown && <span className="text-[10px]">▾</span>}
                </a>
            ))}
            <button className="ml-auto text-white text-2xl px-3.5 py-3.5 bg-transparent border-none cursor-pointer">
                ☰
            </button>
        </nav>
    );
}

function HeroSlider() {
    return (
        <div className="relative h-[420px] overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#1a1a3e] to-[#0d1b4a]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(100,60,20,0.3)_0%,transparent_60%),radial-gradient(ellipse_at_70%_40%,rgba(60,40,100,0.2)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,40,0.5)] to-[rgba(10,10,40,0.2)]" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <h2
                    className="text-7xl md:text-8xl font-extrabold tracking-[12px] leading-tight"
                    style={{
                        background: "linear-gradient(180deg, #d4a85a 0%, #a88640 40%, #7a6030 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))",
                    }}
                >
                    वस्त्र
                </h2>
                <p className="text-2xl mt-3 text-white/75 tracking-wider">हाथों से बुनी हुई कहानियाँ</p>
            </div>
            <div className="absolute bottom-5 right-0 bg-amber-500 px-12 py-4 z-20">
                <h3 className="text-xl font-bold text-gray-900">Docu-Series</h3>
            </div>
            <div className="absolute bottom-6 left-5 z-20 flex bg-black/60 rounded overflow-hidden">
                {["◀", "⏸", "▶"].map((btn, i) => (
                    <button
                        key={i}
                        className="text-white px-4 py-3 text-lg bg-transparent border-none cursor-pointer hover:bg-white/10 transition-colors"
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

function NewsTicker() {
    const scrollRef = useRef(null);

    return (
        <div className="bg-amber-400 flex items-center overflow-hidden">
            <div className="bg-[#0d1b4a] text-white px-6 py-3 font-extrabold text-sm tracking-wider uppercase whitespace-nowrap shrink-0">
                LATEST NEWS
            </div>
            <div className="flex-1 px-5 py-3 overflow-hidden">
                <div ref={scrollRef} className="flex whitespace-nowrap animate-[tickerScroll_35s_linear_infinite]">
                    {[...newsItems, ...newsItems].map((item, i) => (
                        <span key={i} className="text-sm text-gray-900 pr-20 inline-flex items-center gap-2">
                            {item}
                            <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold shrink-0">
                                New
                            </span>
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex pr-2 shrink-0">
                {["◀", "⏸", "▶"].map((btn, i) => (
                    <button key={i} className="px-2.5 py-2 text-base bg-transparent border-none cursor-pointer text-gray-900">
                        {btn}
                    </button>
                ))}
            </div>
            <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}

function Dignitaries() {
    return (
        <div className="flex justify-center gap-10 flex-wrap py-10 px-8 bg-white">
            {dignitaries.map((d, i) => (
                <div key={i} className="text-center w-44" style={{ animation: `fadeInUp 0.6s ease ${i * 0.1}s both` }}>
                    <div className="w-28 h-28 rounded-full mx-auto mb-3 border-[3px] border-gray-200 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                        <PersonIcon />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">{d.name}</h4>
                    <p className="text-xs text-gray-500 leading-snug">{d.title}</p>
                </div>
            ))}
            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}

function TabsWidget() {
    const [activeTab, setActiveTab] = useState("What's New");
    const tabKeys = Object.keys(tabData);

    return (
        <div className="border border-gray-200 rounded overflow-hidden">
            <div className="flex border-b border-gray-200 bg-gray-50">
                {tabKeys.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-3 text-sm font-semibold transition-colors border-b-[3px] ${activeTab === tab
                            ? "text-[#1a2a6c] border-[#1a2a6c] bg-white"
                            : "text-gray-500 border-transparent hover:text-[#1a2a6c]"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="p-4 max-h-72 overflow-y-auto">
                {tabData[activeTab].map((item, i) => (
                    <div
                        key={i}
                        className="flex items-start gap-2 py-2.5 border-b border-gray-100 last:border-b-0 text-sm text-gray-900 cursor-pointer hover:text-[#1a2a6c] transition-colors"
                    >
                        <span className="text-[#1a2a6c] text-[8px] mt-1.5 shrink-0">■</span>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

function AboutAndSidebar() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-8 py-10">
            <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5 pb-2.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-14 after:h-[3px] after:bg-amber-500">
                    About Us
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-3.5 text-justify">
                    The Department of Textile, Government of Maharashtra comes under the aegis of Cooperation, Marketing, and
                    Textile Department and is responsible for the development and promotion of the textile industry in the State.
                    The Department plays a significant role in implementing schemes and programs that have helped improve the
                    quality of textile products in Maharashtra and create employment opportunities in the industry.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-3.5 text-justify">
                    The Department is committed to further developing the textile industry in Maharashtra with a strong presence
                    of both traditional and modern textile sub-sectors and aims to make the state a global hub for textiles.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-3.5 text-justify">
                    The Department is assisted by its field offices, namely the Commissionerate of Textiles and Directorate of
                    Sericulture located in Nagpur. There are three Corporations namely Maharashtra State Textiles Corporation,
                    Maharashtra State Powerloom Corporation, and Maharashtra State Handloom Corporation that play an important
                    role in the development of the textile industry in Maharashtra. Additionally, Maharashtra State Co-operative
                    Textile Federation Ltd was established to act as a connect between the Department and industry.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed text-justify">
                    The textile industry is a major driver of economic growth in Maharashtra, and it is expected to continue to
                    grow in the coming years. The state government is committed to support the growth of the industry and has put
                    in place several policy initiatives to help its beneficiaries remain competitive in the global market.
                </p>
            </div>
            <div className="w-full lg:w-[480px] shrink-0">
                <TabsWidget />
                <div className="flex gap-3 mt-7">
                    <a
                        href="#"
                        className="flex-1 py-4 text-center text-xs font-bold rounded bg-[#0d1b4a] text-white hover:-translate-y-0.5 hover:shadow-lg transition-all whitespace-nowrap"
                    >
                        Policy Space
                    </a>
                    <a
                        href="#"
                        className="flex-1 py-4 text-center text-xs font-bold rounded bg-[#1a2a6c] text-white hover:-translate-y-0.5 hover:shadow-lg transition-all whitespace-nowrap"
                    >
                        Investor Space
                    </a>
                    <a
                        href="#"
                        className="flex-1 py-4 text-center text-xs font-bold rounded bg-amber-500 text-gray-900 hover:-translate-y-0.5 hover:shadow-lg transition-all whitespace-nowrap"
                    >
                        Upcoming Events
                    </a>
                </div>
            </div>
        </div>
    );
}

const galleryColors = [
    "from-green-200 to-green-300",
    "from-blue-200 to-blue-300",
    "from-orange-200 to-orange-300",
    "from-purple-200 to-purple-300",
    "from-pink-200 to-pink-300",
    "from-stone-300 to-stone-400",
];


function DocumentsAndLinks() {
    return (
        <div className="bg-[#0d1b4a]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
                {/* Documents */}
                <div className="lg:w-[40%] shrink-0 px-10 py-10 text-white">
                    <h2 className="text-xl font-extrabold mb-6 uppercase tracking-wider">Documents</h2>
                    {documents.map((doc, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 py-3 border-b border-white/10 last:border-b-0 text-sm text-white/85 cursor-pointer hover:text-amber-400 transition-colors"
                        >
                            <span className="text-amber-400 text-lg leading-none shrink-0 mt-0.5">•</span>
                            <span>{doc}</span>
                        </div>
                    ))}
                    <button className="mt-5 px-6 py-2.5 bg-amber-500 text-gray-900 font-bold text-sm rounded border-none cursor-pointer hover:bg-amber-400 transition-colors">
                        View All
                    </button>
                </div>

                {/* Important Links */}
                <div className="flex-1 bg-white px-10 py-10">
                    <h2 className="text-xl font-extrabold text-gray-900 mb-6">Important Links</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 min-w-0">
                            {linksLeft.map((link, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-2.5 py-2.5 text-sm text-gray-700 cursor-pointer hover:text-[#1a2a6c] transition-colors"
                                >
                                    <span className="text-[#1a2a6c] text-[8px] mt-1.5 shrink-0">■</span>
                                    <span>{link}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 min-w-0">
                            {linksRight.map((link, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-2.5 py-2.5 text-sm text-gray-700 cursor-pointer hover:text-[#1a2a6c] transition-colors"
                                >
                                    <span className="text-[#1a2a6c] text-[8px] mt-1.5 shrink-0">■</span>
                                    <span>{link}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Partners() {
    return (
        <div className="flex items-center justify-center flex-wrap py-8 px-8 bg-white border-t border-gray-200">
            {partners.map((p, i) => (
                <div
                    key={i}
                    className={`flex flex-col items-center justify-center px-7 h-14 text-sm font-bold text-gray-500 whitespace-nowrap ${i < partners.length - 1 ? "border-r border-gray-200" : ""
                        }`}
                >
                    <strong>{p.name}</strong>
                    {p.sub && <span className="text-[10px] text-gray-400 font-normal">{p.sub}</span>}
                </div>
            ))}
        </div>
    );
}

function SocialFollow() {
    return (
        <div className="px-8 py-8 bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow us on:</h3>
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-base cursor-pointer hover:scale-110 transition-transform">
                    𝕏
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white font-bold text-base cursor-pointer hover:scale-110 transition-transform">
                    in
                </div>
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base cursor-pointer hover:scale-110 transition-transform"
                    style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
                >
                    ◎
                </div>
            </div>
        </div>
    );
}

function Footer() {
    const footerLinks = ["Feedback", "Website Policies", "Contact Us", "Help", "Web Information Manager", "Visitor Summary"];

    return (
        <>
            <div className="bg-[#2a2a2a] py-4 px-8 flex justify-center flex-wrap">
                {footerLinks.map((link, i) => (
                    <a
                        key={i}
                        href="#"
                        className={`text-white/80 text-sm px-3.5 hover:text-white transition-colors no-underline ${i < footerLinks.length - 1 ? "border-r border-white/30" : ""
                            }`}
                    >
                        {link}
                    </a>
                ))}
            </div>
            <div className="bg-[#1a1a1a] py-6 px-8 text-center text-white/70 text-xs leading-relaxed">
                <p>Content Owned by Department of Textiles</p>
                <p>
                    Developed and hosted by{" "}
                    <a href="#" className="text-amber-500 underline">
                        National Informatics Centre
                    </a>
                    ,
                </p>
                <p>
                    <a href="#" className="text-amber-500 underline">
                        Ministry of Electronics & Information Technology
                    </a>
                    , Government of India
                </p>
                <p className="mt-2">
                    Last Updated: <strong className="text-white">March 13, 2026</strong>
                </p>
                <div className="flex justify-center gap-12 mt-4 pt-4 border-t border-white/10">
                    {[
                        { name: "SWaaS", sub: "Powered By" },
                        { name: "NIC", sub: "National Informatics Centre" },
                        { name: "Digital India", sub: "Power To Empower" },
                    ].map((item, i) => (
                        <div key={i} className="text-white/50 text-xs text-center">
                            <strong className="block text-sm text-white/70">{item.name}</strong>
                            {item.sub}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-11 h-11 bg-amber-500 text-white text-xl rounded flex items-center justify-center shadow-lg z-50 border-none cursor-pointer hover:-translate-y-0.5 transition-transform"
        >
            ▲
        </button>
    );
}

// ─── MAIN EXPORT ───

export default function MaharashtraTextiles() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <TopBar />
            <Header />
            <NavBar />
            <HeroSlider />
            <NewsTicker />
            <Dignitaries />
            <AboutAndSidebar />
            <DocumentsAndLinks />
            <Partners />
            <SocialFollow />
            <Footer />
            <ScrollToTop />
        </div>
    );
}