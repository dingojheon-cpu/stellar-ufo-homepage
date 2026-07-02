/* Stellar UFO — shared site chrome (used by the homepage AND every sub-page).
 * Unified NAV data drives BOTH the top menu and the footer menu, so they stay
 * in lockstep. Set window.SUFO_BASE ("" at root, "../" in /pages/) and
 * window.SUFO_ACTIVE (page id) BEFORE this script loads. */

const { useState, useEffect, useRef } = React;
const BASE = window.SUFO_BASE || "";
const ACTIVE = window.SUFO_ACTIVE || "home";
const LOGO = BASE + "assets/stellar-ufo-logo.png";
const HOME = BASE + "index.html";

/* One source of truth for navigation — header + footer both read this. */
const NAV = [
  { id: "modules", label: "모듈", href: BASE + "pages/modules.html" },
  { id: "method", label: "운영 방식", href: BASE + "pages/method.html" },
  { id: "trust", label: "검증", href: BASE + "pages/trust.html" },
  { id: "faq", label: "FAQ", href: BASE + "pages/faq.html" },
];
const SURVEY = ACTIVE === "home" ? "#survey" : HOME + "#survey";

/* ---------- Icons (rounded, Lucide-flavored stroke set) ---------- */
const PATHS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  claw: <><path d="M12 3v6" /><path d="M7 9 5 13l3 1" /><path d="M17 9l2 4-3 1" /><circle cx="12" cy="16" r="4" /></>,
  capsule: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16" /><circle cx="12" cy="8" r="1.4" fill="currentColor" stroke="none" /></>,
  gift: <><rect x="3" y="8" width="18" height="13" rx="1.5" /><path d="M3 12h18M12 8v13M12 8S10 3 7.5 4 9.5 8 12 8s4.5 0 4.5-4-4.5 0-4.5 4" /></>,
  camera: <><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13" r="3.5" /><path d="M8 7l1.5-2h5L16 7" /></>,
  store: <><path d="M4 9l1-5h14l1 5" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /><path d="M4 9a3 3 0 006 0 3 3 0 006 0 3 3 0 004 0" /></>,
  pin: <><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  check: <path d="M5 12l4.5 4.5L19 7" />,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  chat: <path d="M21 12a8 8 0 01-8 8H7l-4 3v-6a8 8 0 018-13 8 8 0 0110 8z" />,
  test: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></>,
  spark: <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  repeat: <><path d="M17 2l4 4-4 4" /><path d="M3 11V9a4 4 0 014-4h14M7 22l-4-4 4-4" /><path d="M21 13v2a4 4 0 01-4 4H3" /></>,
};
function Icon({ name, size = 24, stroke = 2, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {PATHS[name] || null}
    </svg>
  );
}

/* ---------- Scroll-reveal: observe .reveal nodes, add .is-in once ---------- */
function initReveal() {
  document.documentElement.classList.add("js-reveal");
  const els = document.querySelectorAll(".reveal:not(.is-in)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  els.forEach((el) => io.observe(el));
}

/* small helper to attach reveal props */
function rv(delay, type) {
  const p = { className: "reveal" };
  if (type) p["data-rv"] = type;
  if (delay) p.style = { "--d": delay + "ms" };
  return p;
}

/* ---------- Top navigation (shared) ---------- */
function TopBar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (e, href) => {
    if (ACTIVE === "home" && href === SURVEY) {
      e.preventDefault();
      const el = document.getElementById("survey");
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: "smooth" });
      setOpen(false);
    }
  };
  return (
    <>
      <header className={"su-nav" + (stuck ? " is-stuck" : "")}>
        <div className="su-nav__inner">
          <a className="su-brand" href={HOME} aria-label="Stellar UFO 홈">
            <img src={LOGO} alt="" />
            <span><b>Stellar UFO</b><i>Multi Platform Gacha Shop</i></span>
          </a>
          <nav className="su-nav__links">
            {NAV.map((n) => (
              <a key={n.id} className={"su-nav__link" + (ACTIVE === n.id ? " is-active" : "")} href={n.href}>{n.label}</a>
            ))}
            <a className="su-btn su-btn--primary su-nav__cta" href={SURVEY} onClick={(e) => go(e, SURVEY)} style={{ minHeight: 42, padding: "0 18px", fontSize: 14 }}>조건 확인 상담</a>
          </nav>
          <button className="su-burger" aria-label="메뉴" onClick={() => setOpen(!open)}>
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </header>
      {open && (
        <div className="su-mobile">
          {NAV.map((n) => (
            <a key={n.id} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a className="su-btn su-btn--primary" href={SURVEY} onClick={(e) => go(e, SURVEY)} style={{ marginTop: 14 }}>조건 확인 상담 신청</a>
        </div>
      )}
    </>
  );
}

/* ---------- Marquee strip ---------- */
function Marquee({ items }) {
  const data = items || [
    ["인형뽑기", "coral"], ["가챠", "mint"], ["캡슐토이", "yellow"],
    ["캐릭터 굿즈", "coral"], ["포토부스", "mint"], ["샵인샵", "yellow"],
    ["K-POP MD", "coral"], ["랜덤박스", "mint"],
  ];
  const Run = () => (
    <span className="su-marquee__item">
      {data.map(([t, c], i) => (
        <React.Fragment key={i}>
          <span className={"su-marquee__dot is-" + c} />
          <span>{t}</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="su-marquee" aria-hidden="true">
      <div className="su-marquee__track"><Run /><Run /></div>
    </div>
  );
}

/* ---------- Footer (shared) — the "플랫폼" column reuses NAV verbatim ---------- */
function Footer() {
  return (
    <footer className="su-footer">
      <div className="su-wrap su-wrap--wide">
        <div className="su-footer__top">
          <div>
            <a className="su-brand" href={HOME} style={{ marginBottom: 18 }}>
              <img src={LOGO} alt="" style={{ width: 44, height: 44 }} />
              <span><b style={{ fontSize: 22 }}>Stellar UFO</b><i>Multi Platform Gacha Shop</i></span>
            </a>
            <p className="su-body" style={{ maxWidth: 420, marginTop: 18 }}>
              뽑고, 모으고, 찍고, 다시 오는 멀티 플랫폼 가챠샵.<br />
              공간과 상권에 맞게 모듈을 조합하는 무인 플랫폼입니다.
            </p>
            <a className="su-btn su-btn--primary" href={SURVEY} style={{ marginTop: 26 }}>
              내 공간에 맞는 무인 플랫폼 진단 <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="su-footer__nav">
            <div className="su-footer__col">
              <h6>Platform</h6>
              {NAV.map((n) => (<a key={n.id} href={n.href}>{n.label}</a>))}
            </div>
            <div className="su-footer__col">
              <h6>Contact</h6>
              <a href={SURVEY}>조건 확인 상담 신청</a>
              <a href={SURVEY}>협력 · 가맹 문의</a>
              <a href={SURVEY}>입점 공간 진단</a>
            </div>
            <div className="su-footer__col">
              <h6>Brand</h6>
              <a href={BASE + "pages/modules.html"}>5개 모듈</a>
              <a href={BASE + "pages/method.html"}>직영 테스트</a>
              <a href={BASE + "pages/trust.html"}>리스크 검증</a>
            </div>
          </div>
        </div>
        <div className="su-footer__bar">
          <span>© 2026 Stellar UFO · 스텔라 UFO. Multi Platform Gacha Shop.</span>
          <span>본 페이지는 수익을 보장하지 않으며, 조건 확인과 운영 가능성 검토를 안내합니다.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, TopBar, Footer, Marquee, NAV, BASE, HOME, SURVEY, LOGO, ACTIVE, initReveal, rv });
