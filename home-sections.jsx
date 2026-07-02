/* Stellar UFO — homepage scroll sections.
 * Composes the design-system components (ModuleCard, FlowStep, StatementBar,
 * Card, Kicker, Badge) on the deep-space field, with scroll-reveal + a
 * full-bleed parallax statement band. */

const DSs = window.StellarUFODesignSystem_653f46;
const MOTIF = (window.SUFO_BASE || "") + "assets/brand-motif-clawmachine.jpg";

function Eyebrow({ children, tone = "glass" }) {
  return <DSs.Kicker tone={tone} pill>{children}</DSs.Kicker>;
}

/* ---------- 1. Market problem ---------- */
function WhySection() {
  const items = [
    ["search", "단일 아이템의 한계", "유행 아이템 하나만 보고 시작하면 트렌드가 식는 순간 매장도 같이 식습니다."],
    ["pin", "상권·동선 변수", "무인매장은 아이템보다 상권, 동선, 관리 방식이 함께 맞아야 유지됩니다."],
    ["layers", "공간별 운영 난이도", "같은 아이템도 공간마다 적합한 모듈과 운영 난이도가 전부 다릅니다."],
  ];
  return (
    <section className="su-sec">
      <div className="su-wrap su-wrap--wide">
        <div {...rv(0)}><Eyebrow tone="coral">Market Problem</Eyebrow></div>
        <h2 className="su-h2 reveal" style={{ margin: "22px 0 0", maxWidth: 880, color: "var(--ivory)" }}>
          아이템 하나가 아니라,<br />운영 구조부터 비교하세요.
        </h2>
        <p className="su-body reveal" style={{ marginTop: 22, maxWidth: 560, fontSize: 18 }}>
          잘 되는 매장은 ‘무엇을 파는가’보다 ‘어떻게 운영되는가’에서 갈립니다.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 48 }} className="su-grid-3">
          {items.map(([icon, t, d], i) => (
            <article key={t} className="su-dcard reveal" data-rv="scale" style={{ "--d": i * 110 + "ms" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="su-chip" style={{ background: "var(--grad-glass)", width: 50, height: 50 }}><Icon name={icon} size={22} /></span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, color: "rgba(193,224,235,.32)" }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="su-h3" style={{ margin: "22px 0 10px", color: "var(--ivory)" }}>{t}</h3>
              <p className="su-body" style={{ margin: 0, fontSize: 15.5 }}>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Modules ---------- */
const MODULES = [
  ["coral", "claw", "Play", "인형뽑기 · 체험형 오락", "첫 시선과 체류를 만드는 입구 모듈. 매장에 들어올 이유를 먼저 만듭니다."],
  ["mint", "capsule", "Collect", "가챠 · 캡슐토이", "저단가 반복 구매를 만드는 트렌드형 랜덤 상품. ‘다시 오는’ 루틴의 핵심."],
  ["yellow", "gift", "Fandom · MD", "K-POP · 캐릭터 굿즈", "포토카드와 캐릭터 굿즈로 팬덤 구매를 연결하는 고관여 모듈."],
  ["glass", "camera", "Photo", "포토부스", "인증과 SNS 공유를 만드는 데코·기록 요소. 자연스러운 바이럴 동선."],
  ["softcoral", "store", "Shop-in-Shop", "샵인샵", "기존 매장의 일부 공간을 활용하는 입점형 구성. 작게 시작해 검증합니다."],
];
function ModuleSection({ variant = "grid" }) {
  const { ModuleCard } = DSs;
  return (
    <section id="modules" className="su-sec">
      <div className="su-wrap su-wrap--wide">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
          <div>
            <div {...rv(0)}><Eyebrow tone="mint">Platform Modules</Eyebrow></div>
            <h2 className="su-h2 reveal" style={{ margin: "22px 0 0", maxWidth: 720, color: "var(--ivory)" }}>
              공간에 맞게 조합하는<br />5개의 플레이 모듈
            </h2>
          </div>
          <a className="su-nav__link reveal" href={(window.SUFO_BASE || "") + "pages/modules.html"} style={{ fontSize: 15, display: "inline-flex", alignItems: "center", gap: 8, color: "var(--glass)" }}>
            모듈 자세히 보기 <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
        <div className={variant === "rows" ? "su-mod-rows" : "su-mod-grid"} style={variant === "rows"
          ? { display: "flex", flexDirection: "column", gap: 16, marginTop: 48 }
          : { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16, marginTop: 48 }}>
          {MODULES.map(([tone, icon, eyebrow, title, desc], i) => (
            <div key={title} className="reveal" data-rv="scale" style={{ "--d": i * 90 + "ms", gridColumn: variant === "rows" ? undefined : (i < 2 ? "span 3" : "span 2") }}>
              <ModuleCard dark tone={tone} eyebrow={eyebrow} title={title} icon={<Icon name={icon} size={24} />} style={{ height: "100%" }}>
                {desc}
              </ModuleCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Full-bleed parallax statement band ---------- */
function StatementBand() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const img = el.querySelector("img");
        if (img) img.style.transform = `translateY(${p * -60}px) scale(1.18)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={ref} style={{ position: "relative", overflow: "hidden", minHeight: "min(78vh, 680px)", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src={MOTIF} alt="네온 불빛 아래 인형뽑기 기계의 집게" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 42%", willChange: "transform" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, var(--space-floor) 0%, rgba(6,18,42,.55) 30%, rgba(6,18,42,.55) 60%, var(--space-floor) 100%)" }} />
      <div className="su-wrap" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <div {...rv(0)} style={{ display: "flex", justifyContent: "center" }}><Eyebrow tone="yellow">Why Stellar UFO</Eyebrow></div>
        <h2 className="su-h2 reveal" style={{ margin: "26px auto 0", maxWidth: 940, color: "var(--ivory)", fontSize: "clamp(34px,6vw,76px)" }}>
          작은 캡슐이<br />큰 방문 이유가 됩니다.
        </h2>
        <p className="su-lead reveal" data-rv="scale" style={{ margin: "28px auto 0", maxWidth: 620 }}>
          뽑고, 모으고, 찍고, 다시 오는 멀티 플랫폼 가챠샵. 한 번의 방문이 다음 방문을 부르도록 설계합니다.
        </p>
      </div>
    </section>
  );
}

/* ---------- 4. Method / trust flow ---------- */
const STEPS = [
  ["search", "트렌드 탐색", "후보 아이템과 캐릭터 IP를 발굴합니다."],
  ["test", "직영 테스트", "직접 운영하며 실제 반응을 확인합니다."],
  ["shield", "운영 검토", "관리·교체·리스크 요소를 점검합니다."],
  ["layers", "모듈 조합", "공간 조건에 맞춰 모듈을 구성합니다."],
  ["chat", "조건 확인 제안", "조건을 확인한 뒤 제안합니다."],
];
function MethodSection() {
  return (
    <section id="method" className="su-sec">
      <div className="su-wrap su-wrap--wide">
        <div style={{ textAlign: "center" }}>
          <div {...rv(0)} style={{ display: "flex", justifyContent: "center" }}><Eyebrow tone="yellow">Platform Method</Eyebrow></div>
          <h2 className="su-h2 reveal" style={{ margin: "22px auto 0", maxWidth: 820, color: "var(--ivory)" }}>
            아이템을 공급하지 않습니다.<br />운영을 검증해 제안합니다.
          </h2>
        </div>
        <div className="su-flow-wrap" style={{ position: "relative", marginTop: 56 }}>
          <div className="su-orbit reveal" />
          <div className="su-flow" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, position: "relative" }}>
            {STEPS.map(([icon, t, d], i) => (
              <div key={t} className="reveal" data-rv="scale" style={{ "--d": i * 100 + "ms" }}>
                <div className="su-step-node"><span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>{String(i + 1).padStart(2, "0")}</span></div>
                <div className="su-dcard" style={{ padding: "24px 22px", marginTop: 22, minHeight: 168 }}>
                  <span className="su-chip" style={{ background: "rgba(193,224,235,.12)", color: "var(--glass)", width: 44, height: 44, boxShadow: "none", border: "1px solid var(--line-on-dark)" }}><Icon name={icon} size={20} /></span>
                  <h3 style={{ margin: "18px 0 8px", fontSize: 17.5, fontWeight: 800, color: "var(--ivory)", letterSpacing: "-.02em" }}>{t}</h3>
                  <p className="su-body" style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 56 }}>
          <DSs.StatementBar dark>오픈은 날짜가 아니라 실행 루틴입니다.</DSs.StatementBar>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Trust / risk check ---------- */
function TrustSection() {
  const checks = [
    ["shield", "검증 관점", "반응 · 관리 · 교체 가능성 · 공간 적합성을 직영 데이터로 확인합니다."],
    ["test", "리스크 표현", "수익 보장 대신 ‘조건 확인’과 ‘운영 가능성 검토’로만 안내합니다."],
    ["chat", "상담 기준", "협력 목적 · 입점 공간 · 운영 범위 · 관심 모듈을 먼저 확인합니다."],
  ];
  return (
    <section id="trust" className="su-sec">
      <div className="su-wrap su-wrap--wide">
        <div {...rv(0)}><Eyebrow tone="glass">Trust &amp; Risk Check</Eyebrow></div>
        <h2 className="su-h2 reveal" style={{ margin: "22px 0 0", maxWidth: 760, color: "var(--ivory)" }}>
          검토되지 않은 아이템은<br />바로 제안하지 않습니다.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 48 }} className="su-grid-3">
          {checks.map(([icon, t, d], i) => (
            <article key={t} className="su-dcard reveal" data-rv="scale" style={{ "--d": i * 110 + "ms" }}>
              <span className="su-chip" style={{ background: "var(--grad-mint)", width: 52, height: 52, marginBottom: 18 }}><Icon name={icon} size={22} /></span>
              <h3 className="su-h3" style={{ margin: "0 0 10px", color: "var(--ivory)" }}>{t}</h3>
              <p className="su-body" style={{ margin: 0, fontSize: 15.5 }}>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WhySection, ModuleSection, StatementBand, MethodSection, TrustSection });
