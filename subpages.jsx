/* Stellar UFO — simple sub-pages (모듈 / 운영 방식 / 검증 / FAQ).
 * Each shares the unified TopBar + Footer (from chrome.jsx). The page to render
 * is chosen by window.SUFO_ACTIVE. Composes the DS components. */

const DSp = window.StellarUFODesignSystem_653f46;
const PHOTO_HERO = (window.SUFO_BASE || "") + "assets/hero-clawmachine.jpg";
const PHOTO_MOTIF = (window.SUFO_BASE || "") + "assets/brand-motif-clawmachine.jpg";

function Eyebrow({ children, tone = "glass" }) {
  return <DSp.Kicker tone={tone} pill>{children}</DSp.Kicker>;
}

function PageHero({ kicker, title, lead, photo }) {
  return (
    <section className="su-pagehero su-grid-bg">
      <div className="su-pagehero__photo"><img src={photo} alt="" /></div>
      <div className="su-wrap su-wrap--wide">
        <div {...rv(0)}><Eyebrow tone="coral">{kicker}</Eyebrow></div>
        <h1 className="su-h2 reveal" style={{ margin: "22px 0 0", maxWidth: 900, color: "var(--ivory)", fontSize: "clamp(34px,5.4vw,68px)" }}>{title}</h1>
        {lead && <p className="su-lead reveal" data-rv="scale" style={{ marginTop: 22, maxWidth: 620 }}>{lead}</p>}
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="su-sec--tight" style={{ paddingTop: 0 }}>
      <div className="su-wrap su-wrap--wide">
        <div className="reveal" data-rv="scale" style={{ borderRadius: "var(--radius-xl)", padding: "clamp(36px,6vw,64px)", textAlign: "center", background: "var(--bg-dome)", border: "1px solid var(--line-on-dark)", position: "relative", overflow: "hidden" }}>
          <div className="su-grid-bg" style={{ position: "absolute", inset: 0 }} />
          <div style={{ position: "relative" }}>
            <DSp.Capsule color="coral" size={56} float style={{ position: "absolute", top: -10, left: "12%" }} />
            <DSp.Capsule color="mint" size={40} float style={{ position: "absolute", top: 8, right: "14%", animationDelay: "1s" }} />
            <h2 className="su-h2" style={{ margin: 0, color: "var(--ivory)", fontSize: "clamp(28px,4vw,48px)" }}>내 공간에 맞는 무인 플랫폼,<br />조건부터 확인하세요.</h2>
            <p className="su-body" style={{ margin: "18px auto 0", maxWidth: 520, fontSize: 17 }}>수익을 보장하지 않습니다. 공간·상권에 맞는 운영 가능성을 함께 진단합니다.</p>
            <div style={{ marginTop: 30 }}>
              <DSp.Button variant="primary" size="lg" href={window.SURVEY} iconRight={<Icon name="arrow" size={18} />}>조건 확인 상담 신청</DSp.Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 모듈 ---------------- */
const MODS = [
  ["coral", "claw", "Play", "인형뽑기 · 체험형 오락", "첫 시선과 체류를 만드는 입구 모듈.", ["지나가던 사람을 멈춰 세우는 시선 유도", "체류 시간을 늘려 다른 모듈로 연결", "난이도·경품 구성으로 재방문 설계"]],
  ["mint", "capsule", "Collect", "가챠 · 캡슐토이", "저단가 반복 구매를 만드는 핵심 모듈.", ["트렌드 캐릭터 중심의 랜덤 상품", "낮은 객단가, 높은 반복 구매율", "‘다시 오는’ 루틴을 만드는 수집 욕구"]],
  ["yellow", "gift", "Fandom · MD", "K-POP · 캐릭터 굿즈", "팬덤 구매를 연결하는 고관여 모듈.", ["포토카드 · 응원봉 · 캐릭터 굿즈", "시즌/컴백 이슈에 맞춘 구성", "객단가가 높은 목적 구매 유도"]],
  ["glass", "camera", "Photo", "포토부스", "인증과 SNS 공유를 만드는 기록 모듈.", ["자연스러운 바이럴 동선 형성", "데코 · 프레임으로 브랜드 노출", "방문 인증이 다음 방문을 부름"]],
  ["softcoral", "store", "Shop-in-Shop", "샵인샵 · 입점형", "작게 시작해 검증하는 진입 모듈.", ["기존 매장 일부 공간 활용", "초기 투자 부담을 낮춘 테스트", "검증 후 단계적 확장 가능"]],
];
function ModulesPage() {
  return (
    <>
      <PageHero kicker="Platform Modules" photo={PHOTO_MOTIF}
        title={<>공간에 맞게 조합하는<br />5개의 플레이 모듈</>}
        lead="하나의 무인매장이 아니라, 공간과 상권에 맞게 모듈을 조합하는 무인 플랫폼입니다. 각 모듈은 ‘방문 → 체류 → 구매 → 재방문’의 한 단계를 담당합니다." />
      <section className="su-sec">
        <div className="su-wrap su-wrap--wide" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {MODS.map(([tone, icon, eb, title, desc, bullets], i) => (
            <article key={title} className="su-dcard reveal" data-rv={i % 2 ? "left" : "scale"} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px,4vw,44px)", alignItems: "center", padding: "clamp(24px,4vw,40px)" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, minWidth: 110 }}>
                <span className="su-chip" style={{ background: `var(--grad-${tone})`, width: 76, height: 76, borderRadius: 22 }}><Icon name={icon} size={34} /></span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "rgba(193,224,235,.32)" }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mint)" }}>{eb}</div>
                <h2 style={{ margin: "8px 0 8px", fontSize: "clamp(22px,3vw,30px)", fontWeight: 900, letterSpacing: "-.03em", color: "var(--ivory)" }}>{title}</h2>
                <p className="su-body" style={{ margin: "0 0 16px", fontSize: 16, maxWidth: 640 }}>{desc}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "8px 22px" }}>
                  {bullets.map((b) => (<li key={b} style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 14.5, color: "rgba(250,250,239,.78)", fontWeight: 600 }}><Icon name="check" size={18} style={{ color: "var(--coral)", flexShrink: 0, marginTop: 2 }} />{b}</li>))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ---------------- 운영 방식 ---------------- */
const FLOW = [
  ["search", "트렌드 탐색", "후보 아이템과 캐릭터 IP를 발굴합니다.", "유행을 좇기 전에, 어떤 아이템이 우리 상권과 공간에서 통할지부터 탐색합니다."],
  ["test", "직영 테스트", "직접 운영하며 실제 반응을 확인합니다.", "제안 전에 직영 매장에서 운영해 보고, 데이터로 반응을 검증합니다."],
  ["shield", "운영 검토", "관리 · 교체 · 리스크 요소를 점검합니다.", "재고 회전, 관리 난이도, 교체 주기 등 운영 현실을 함께 검토합니다."],
  ["layers", "모듈 조합", "공간 조건에 맞춰 모듈을 구성합니다.", "단독 매장인지 샵인샵인지에 따라 적합한 모듈 조합을 설계합니다."],
  ["chat", "조건 확인 제안", "조건을 확인한 뒤 제안합니다.", "수익을 보장하지 않습니다. 운영 가능성을 확인한 범위에서만 제안합니다."],
];
function MethodPage() {
  return (
    <>
      <PageHero kicker="Platform Method" photo={PHOTO_HERO}
        title={<>아이템을 공급하지 않습니다.<br />운영을 검증해 제안합니다.</>}
        lead="Stellar UFO는 ‘무엇을 파느냐’가 아니라 ‘어떻게 운영되느냐’를 먼저 봅니다. 직영 테스트를 거친 운영만 제안하는 5단계 루틴입니다." />
      <section className="su-sec">
        <div className="su-wrap" style={{ maxWidth: 860 }}>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, position: "relative" }}>
            {FLOW.map(([icon, t, lead, d], i) => (
              <li key={t} className="reveal" data-rv="left" style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 24, paddingBottom: i === FLOW.length - 1 ? 0 : 34 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span className="su-step-node" style={{ width: 64, height: 64 }}>{String(i + 1).padStart(2, "0")}</span>
                  {i !== FLOW.length - 1 && <span style={{ flex: 1, width: 2, marginTop: 8, background: "linear-gradient(180deg, rgba(193,224,235,.4), rgba(193,224,235,.08))", borderRadius: 2 }} />}
                </div>
                <div className="su-dcard" style={{ padding: "22px 26px", marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span className="su-chip" style={{ width: 40, height: 40, background: "rgba(193,224,235,.12)", color: "var(--glass)", boxShadow: "none", border: "1px solid var(--line-on-dark)" }}><Icon name={icon} size={19} /></span>
                    <h2 style={{ margin: 0, fontSize: 21, fontWeight: 900, letterSpacing: "-.03em", color: "var(--ivory)" }}>{t}</h2>
                  </div>
                  <p style={{ margin: "14px 0 6px", fontSize: 16.5, fontWeight: 700, color: "var(--glass)" }}>{lead}</p>
                  <p className="su-body" style={{ margin: 0, fontSize: 15 }}>{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="reveal" style={{ marginTop: 52 }}><DSp.StatementBar dark>오픈은 날짜가 아니라 실행 루틴입니다.</DSp.StatementBar></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ---------------- 검증 ---------------- */
function TrustPage() {
  const checks = [
    ["shield", "검증 관점", "반응 · 관리 가능성 · 교체 주기 · 공간 적합성을 직영 데이터로 확인합니다. 검토되지 않은 아이템은 바로 제안하지 않습니다."],
    ["test", "리스크 표현", "‘수익 보장’이 아니라 ‘조건 확인’과 ‘운영 가능성 검토’로만 안내합니다. 리스크는 사전에 함께 확인합니다."],
    ["chat", "상담 기준", "협력 목적 · 입점 공간 · 운영 범위 · 관심 모듈을 먼저 확인한 뒤, 적합성이 맞는 범위에서 제안합니다."],
  ];
  const banned = ["수익 보장", "월 순수익 보장", "실패 없는 창업", "자동으로 돈 버는 매장", "누구나 안정적으로 벌 수 있음"];
  const preferred = ["조건 확인", "운영 가능성 검토", "상권 · 공간별 적합성 진단", "직영 테스트 기반 제안", "리스크 사전 확인"];
  return (
    <>
      <PageHero kicker="Trust & Risk Check" photo={PHOTO_MOTIF}
        title={<>검토되지 않은 아이템은<br />바로 제안하지 않습니다.</>}
        lead="Stellar UFO는 가능성을 부풀리지 않습니다. 직영 테스트로 확인한 범위 안에서, 조건과 리스크를 먼저 안내합니다." />
      <section className="su-sec">
        <div className="su-wrap su-wrap--wide">
          <div className="su-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {checks.map(([icon, t, d], i) => (
              <article key={t} className="su-dcard reveal" data-rv="scale" style={{ "--d": i * 100 + "ms" }}>
                <span className="su-chip" style={{ background: "var(--grad-mint)", width: 52, height: 52, marginBottom: 18 }}><Icon name={icon} size={22} /></span>
                <h3 className="su-h3" style={{ margin: "0 0 10px", color: "var(--ivory)" }}>{t}</h3>
                <p className="su-body" style={{ margin: 0, fontSize: 15 }}>{d}</p>
              </article>
            ))}
          </div>
          <div className="reveal su-compare-grid" style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} >
            <div className="su-dcard su-compare" style={{ borderColor: "rgba(250,120,115,.3)" }}>
              <div style={{ fontSize: 12.5, fontWeight: 900, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--coral)", marginBottom: 16 }}>쓰지 않는 표현</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {banned.map((b) => (<li key={b} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(250,250,239,.66)", fontWeight: 600, fontSize: 15 }}><Icon name="close" size={17} style={{ color: "var(--coral)", flexShrink: 0 }} /><span style={{ textDecoration: "line-through", textDecorationColor: "rgba(250,120,115,.5)" }}>{b}</span></li>))}
              </ul>
            </div>
            <div className="su-dcard su-compare" style={{ borderColor: "rgba(95,201,181,.32)" }}>
              <div style={{ fontSize: 12.5, fontWeight: 900, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--mint)", marginBottom: 16 }}>대신 쓰는 표현</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {preferred.map((b) => (<li key={b} style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--ivory)", fontWeight: 700, fontSize: 15 }}><Icon name="check" size={17} style={{ color: "var(--mint)", flexShrink: 0 }} />{b}</li>))}
              </ul>
            </div>
          </div>
          <p className="su-note reveal" style={{ marginTop: 22, color: "rgba(250,250,239,.5)", maxWidth: 760 }}>
            본 페이지의 모든 안내는 수익을 보장하지 않으며, 운영 가능성 검토와 조건 확인을 목적으로 합니다. 상권·공간·운영 방식에 따라 결과는 달라질 수 있습니다.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  ["수익을 보장하나요?", "아니요. Stellar UFO는 수익을 보장하지 않습니다. 대신 공간과 상권에 맞는 운영 가능성을 직영 테스트 데이터로 검토하고, 조건을 확인해 드립니다."],
  ["꼭 단독 매장이 있어야 하나요?", "그렇지 않습니다. 단독 매장, 샵인샵(입점), 기존 매장의 일부 공간 등 다양한 형태로 시작할 수 있습니다. 공간 형태에 맞는 모듈 조합을 함께 설계합니다."],
  ["5개 모듈을 모두 넣어야 하나요?", "아니요. Play · Collect · Fandom/MD · Photo · Shop-in-Shop 중 공간 조건과 상권에 맞는 모듈만 조합합니다. 작게 시작해 검증 후 확장하는 방식을 권합니다."],
  ["‘직영 테스트 기반’은 무슨 뜻인가요?", "제안 전에 직영 매장에서 실제로 운영해 보고, 반응·관리·교체 주기 등을 데이터로 확인한다는 뜻입니다. 검토되지 않은 아이템은 바로 제안하지 않습니다."],
  ["상담을 신청하면 무엇을 확인하나요?", "협력 목적, 입점 공간, 운영 범위, 관심 모듈을 먼저 확인합니다. 이후 상권·공간 적합성과 운영 가능성을 진단해 조건을 안내합니다."],
  ["관리가 어렵지 않나요?", "모듈마다 관리 난이도가 다릅니다. 상담 단계에서 가장 걱정되는 부분(관리 부담, 공간 크기 등)을 함께 점검하고, 운영 현실을 기준으로 구성합니다."],
];
function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="su-dcard" style={{ padding: 0, overflow: "hidden", borderColor: open ? "rgba(193,224,235,.28)" : undefined }}>
      <button onClick={onToggle} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, padding: "22px 26px", background: "none", border: 0, cursor: "pointer", textAlign: "left", color: "var(--ivory)", fontFamily: "var(--font-sans)" }}>
        <span style={{ fontSize: "clamp(16px,2.2vw,19px)", fontWeight: 800, letterSpacing: "-.02em" }}>{q}</span>
        <span className="su-chip" style={{ width: 38, height: 38, flexShrink: 0, background: open ? "var(--grad-coral)" : "rgba(193,224,235,.12)", color: open ? "#fff" : "var(--glass)", boxShadow: "none", border: open ? 0 : "1px solid var(--line-on-dark)", transition: "all var(--dur-base) var(--ease-out)" }}><Icon name={open ? "minus" : "plus"} size={18} /></span>
      </button>
      <div style={{ maxHeight: open ? 320 : 0, overflow: "hidden", transition: "max-height var(--dur-slow) var(--ease-out)" }}>
        <p className="su-body" style={{ margin: 0, padding: "0 26px 24px", fontSize: 15.5 }}>{a}</p>
      </div>
    </div>
  );
}
function FaqPage() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero kicker="FAQ" photo={PHOTO_HERO}
        title={<>자주 묻는 질문</>}
        lead="조건 확인, 운영 방식, 모듈 구성에 대해 가장 많이 받는 질문을 모았습니다." />
      <section className="su-sec">
        <div className="su-wrap" style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 14 }}>
          {FAQS.map(([q, a], i) => (
            <div key={i} className="reveal" data-rv="scale" style={{ "--d": i * 60 + "ms" }}>
              <FaqItem q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

const PAGES = { modules: ModulesPage, method: MethodPage, trust: TrustPage, faq: FaqPage };
function SubpageApp() {
  const Page = PAGES[window.SUFO_ACTIVE] || ModulesPage;
  useEffect(() => { const id = requestAnimationFrame(() => initReveal()); return () => cancelAnimationFrame(id); }, []);
  return (
    <div className="su-space">
      <TopBar />
      <main><Page /></main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SubpageApp />);
