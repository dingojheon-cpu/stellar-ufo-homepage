/* Stellar UFO — homepage composition + Tweaks (hero treatment, module layout,
 * accent, scroll animation). */

const ACCENTS = {
  coral:  { c: "#FA7873", g: "0 14px 34px rgba(250,120,115,.28)", gs: "0 18px 44px rgba(250,120,115,.40)" },
  mint:   { c: "#3FB7A1", g: "0 14px 34px rgba(95,201,181,.30)",  gs: "0 18px 44px rgba(95,201,181,.42)" },
  blue:   { c: "#3F7FD6", g: "0 14px 34px rgba(63,127,214,.30)",  gs: "0 18px 44px rgba(63,127,214,.42)" },
};

const HOME_TWEAKS = /*EDITMODE-BEGIN*/{
  "heroVariant": "overlay",
  "moduleLayout": "grid",
  "accent": "coral",
  "scrollAnim": true
}/*EDITMODE-END*/;

function HomeApp() {
  const [t, setTweak] = useTweaks(HOME_TWEAKS);

  // apply accent by overriding the coral token (CTAs, marquee, glows)
  useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS.coral;
    const r = document.documentElement.style;
    r.setProperty("--coral", a.c);
    r.setProperty("--glow-coral", a.g);
    r.setProperty("--glow-coral-strong", a.gs);
  }, [t.accent]);

  // scroll reveal (re-scan when variant changes so new nodes animate)
  useEffect(() => {
    const html = document.documentElement;
    if (t.scrollAnim) {
      html.classList.remove("no-reveal");
      const id = requestAnimationFrame(() => initReveal());
      return () => cancelAnimationFrame(id);
    }
    html.classList.add("no-reveal");
  }, [t.scrollAnim, t.heroVariant, t.moduleLayout]);

  return (
    <div className="su-space">
      <TopBar />
      <main>
        <Hero variant={t.heroVariant} />
        <Marquee />
        <WhySection />
        <ModuleSection variant={t.moduleLayout} />
        <StatementBand />
        <MethodSection />
        <TrustSection />
        <SurveySection />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="히어로" />
        <TweakRadio label="히어로 연출" value={t.heroVariant}
          options={[{ value: "overlay", label: "풀블리드" }, { value: "spotlight", label: "스포트라이트" }, { value: "split", label: "스플릿" }]}
          onChange={(v) => setTweak("heroVariant", v)} />
        <TweakSection label="모듈 섹션" />
        <TweakRadio label="모듈 레이아웃" value={t.moduleLayout}
          options={[{ value: "grid", label: "그리드" }, { value: "rows", label: "리스트" }]}
          onChange={(v) => setTweak("moduleLayout", v)} />
        <TweakSection label="브랜드" />
        <TweakColor label="포인트 컬러" value={ACCENTS[t.accent].c}
          options={[ACCENTS.coral.c, ACCENTS.mint.c, ACCENTS.blue.c]}
          onChange={(v) => setTweak("accent", v === ACCENTS.mint.c ? "mint" : v === ACCENTS.blue.c ? "blue" : "coral")} />
        <TweakToggle label="스크롤 애니메이션" value={t.scrollAnim}
          onChange={(v) => setTweak("scrollAnim", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HomeApp />);
