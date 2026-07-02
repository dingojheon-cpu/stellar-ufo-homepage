/* Stellar UFO — homepage hero. Cinematic full-bleed neon claw-machine photo
 * with parallax + text overlay (primary), plus two alternate treatments the
 * Tweaks panel can switch between (spotlight dome / split frame). */

const DSh = window.StellarUFODesignSystem_653f46;
const HERO_PHOTO = (window.SUFO_BASE || "") + "assets/hero-clawmachine.jpg";

function useParallax(ref, factor = 0.4, scaleF = 0.0003) {
  useEffect(() => {
    let raf = 0;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.1) return;
        el.style.transform = `translateY(${y * factor}px) scale(${1 + y * scaleF})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, factor, scaleF]);
}

function HeroCue() {
  return (
    <div className="su-cue" style={{ marginTop: 40 }}>
      <span />SCROLL
    </div>
  );
}

function HeroStats() {
  const stats = [["5", "조합 가능 모듈"], ["A·B", "출점 포맷"], ["직영", "테스트 기반 검증"], ["조건 확인", "상담 기준"]];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(22px,4vw,52px)", marginTop: 44 }}>
      {stats.map(([n, l], i) => (
        <div key={l} {...rv(120 + i * 80)}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,3vw,34px)", color: "var(--ivory)", lineHeight: 1 }}>{n}</div>
          <div style={{ fontSize: 13, color: "rgba(250,250,239,.6)", fontWeight: 700, marginTop: 8, letterSpacing: ".01em" }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

function HeroCopy({ align = "left" }) {
  const { Button } = DSh;
  return (
    <div style={{ maxWidth: 760, textAlign: align }}>
      <span {...rv(0)} style={{ display: "inline-flex" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "9px 16px", borderRadius: 999, background: "rgba(193,224,235,.12)", border: "1px solid rgba(193,224,235,.24)", color: "var(--glass)", fontSize: 12.5, fontWeight: 900, letterSpacing: ".14em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--coral)", boxShadow: "0 0 10px var(--coral)" }} />
          Multi Platform Gacha Shop
        </span>
      </span>
      <h1 className="su-h1 reveal" style={{ margin: "26px 0 0", color: "var(--ivory)" }}>
        오늘의 랜덤이<br />도착하는 곳
      </h1>
      <p className="su-lead reveal" data-rv="scale" style={{ margin: "26px 0 0", maxWidth: 560, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>
        인형뽑기 · 가챠 · 캡슐토이 · 캐릭터 굿즈 · 포토부스 — 공간과 상권에 맞게 모듈을 조합하는 <b style={{ color: "var(--ivory)" }}>무인 플랫폼</b>입니다.
      </p>
      <div {...rv(120)} style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36, justifyContent: align === "center" ? "center" : "flex-start" }}>
        <Button variant="primary" size="lg" href={window.SURVEY} iconRight={<Icon name="arrow" size={18} />}>
          내 공간에 맞는 무인 플랫폼 진단
        </Button>
        <a className="su-btn su-btn--ghost" href={(window.SUFO_BASE || "") + "pages/method.html"} style={{ minHeight: 56, padding: "0 28px", fontSize: 17 }}>
          운영 방식 보기
        </a>
      </div>
    </div>
  );
}

/* ---- Variant 1: full-bleed cinematic overlay (primary) ---- */
function HeroOverlay() {
  const photoRef = useRef(null);
  useParallax(photoRef, 0.32, 0.00028);
  return (
    <section id="top" className="su-hero su-grid-bg" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", paddingTop: "calc(var(--nav-h) + 28px)", paddingBottom: "clamp(48px,8vh,96px)" }}>
      <div ref={photoRef} style={{ position: "absolute", inset: "-8% 0 0 0", zIndex: 0, willChange: "transform" }}>
        <img src={HERO_PHOTO} alt="네온 조명 아래 인형뽑기 기계" style={{ width: "100%", height: "116%", objectFit: "cover", objectPosition: "52% 40%" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(6,18,42,.62) 0%, rgba(6,18,42,.15) 26%, rgba(6,18,42,.45) 58%, rgba(6,18,42,.92) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, mixBlendMode: "screen", boxShadow: "inset 0 0 160px rgba(250,120,115,.18), inset 0 0 280px rgba(37,108,255,.16)", pointerEvents: "none" }} />
      <DSh.Capsule color="coral" size={64} float style={{ position: "absolute", top: "22%", right: "12%", zIndex: 2 }} />
      <DSh.Capsule color="mint" size={42} float style={{ position: "absolute", top: "38%", right: "22%", zIndex: 2, animationDelay: "1.4s" }} />
      <div className="su-wrap su-wrap--wide" style={{ position: "relative", zIndex: 3, width: "100%" }}>
        <HeroCopy align="left" />
        <HeroStats />
        <HeroCue />
      </div>
    </section>
  );
}

/* ---- Variant 2: spotlight dome (photo framed, floating in space) ---- */
function HeroSpotlight() {
  return (
    <section id="top" className="su-grid-bg" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "var(--nav-h)", background: "var(--bg-dome)" }}>
      <DSh.Capsule color="coral" size={70} float style={{ position: "absolute", top: "16%", left: "8%", zIndex: 2 }} />
      <DSh.Capsule color="yellow" size={40} float style={{ position: "absolute", bottom: "18%", left: "16%", zIndex: 2, animationDelay: "1.1s" }} />
      <DSh.Capsule color="mint" size={52} float style={{ position: "absolute", top: "24%", right: "10%", zIndex: 2, animationDelay: ".6s" }} />
      <div className="su-wrap su-wrap--wide" style={{ position: "relative", zIndex: 3, textAlign: "center", paddingTop: 40, paddingBottom: 40 }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}><HeroCopy align="center" /></div>
        <div className="reveal" data-rv="scale" style={{ marginTop: 48, borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "0 40px 120px rgba(6,12,31,.7), inset 0 0 0 1px rgba(193,224,235,.22)", maxWidth: 980, marginLeft: "auto", marginRight: "auto", aspectRatio: "16/7" }}>
          <img src={HERO_PHOTO} alt="네온 조명 아래 인형뽑기 기계" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "52% 44%" }} />
        </div>
      </div>
    </section>
  );
}

/* ---- Variant 3: split (type left, framed photo right) ---- */
function HeroSplit() {
  const photoRef = useRef(null);
  useParallax(photoRef, 0.12, 0.0002);
  return (
    <section id="top" className="su-grid-bg" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "var(--nav-h)" }}>
      <div className="su-wrap su-wrap--wide su-hero-split" style={{ position: "relative", zIndex: 3, display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "center", width: "100%" }}>
        <div><HeroCopy align="left" /><HeroStats /></div>
        <div className="reveal" data-rv="scale" style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 40px 110px rgba(6,12,31,.7), inset 0 0 0 1px rgba(193,224,235,.2)" }}>
          <img ref={photoRef} src={HERO_PHOTO} alt="네온 조명 아래 인형뽑기 기계" style={{ width: "100%", height: "112%", objectFit: "cover", objectPosition: "50% 40%", willChange: "transform" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(6,12,31,.7))" }} />
          <span style={{ position: "absolute", left: 18, top: 18, display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 13px", borderRadius: 999, background: "rgba(250,120,115,.2)", border: "1px solid rgba(250,120,115,.5)", color: "#fff", fontSize: 11, fontWeight: 900, letterSpacing: ".14em" }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--coral)", boxShadow: "0 0 10px var(--coral)" }} />LIVE
          </span>
        </div>
      </div>
    </section>
  );
}

function Hero({ variant = "overlay" }) {
  if (variant === "spotlight") return <HeroSpotlight />;
  if (variant === "split") return <HeroSplit />;
  return <HeroOverlay />;
}

Object.assign(window, { Hero });
