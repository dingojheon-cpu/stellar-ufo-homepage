/* Stellar UFO — 조건 확인 상담 lead form. Interactive: module chips, required
 * validation, and a success state. Uses the DS form primitives inside a frosted
 * ivory panel that floats over the deep-space field. */

const DSf = window.StellarUFODesignSystem_653f46;

const MOD_CHIPS = ["인형뽑기(Play)", "가챠·캡슐토이", "캐릭터 굿즈·MD", "포토부스", "샵인샵", "아직 미정"];

const CONSULT_ENDPOINT = "https://script.google.com/macros/s/AKfycbxfQ5E5My5X0Mhr5H_8oaD4pS7AM-TRmFMUhcNsxMsNIrWe3LwsrMKv7JYCRYsBJ38AiQ/exec";

function SurveySection() {
  const { Input, Select, Textarea, Button } = DSf;
  const [picked, setPicked] = useState([]);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const formRef = useRef(null);

  const toggle = (m) => setPicked((p) => p.includes(m) ? p.filter((x) => x !== m) : [...p, m]);

  const submit = (e) => {
    e.preventDefault();
    const f = formRef.current;
    const name = f.querySelector("#f-이름");
    const tel = f.querySelector("#f-연락처");
    if (!name.value.trim() || !tel.value.trim()) {
      setErr("이름과 연락처를 입력해 주세요.");
      (!name.value.trim() ? name : tel).focus();
      return;
    }
    setErr("");

    const spaceType = f.querySelector('[id="s-입점-공간-형태"]');
    const purpose = f.querySelector('[id="s-협력-목적"]');
    const message = f.querySelector('[id="t-가장-걱정되는-부분-/-추가-문의"]');

    const payload = {
      name: name.value.trim(),
      tel: tel.value.trim(),
      spaceType: spaceType ? spaceType.value : "",
      purpose: purpose ? purpose.value : "",
      modules: picked,
      message: message ? message.value : "",
    };

    fetch(CONSULT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    setSent(true);
  };

  const checks = [
    "협력 목적과 입점 공간의 적합성",
    "상권·동선 기준 운영 가능성",
    "관심 모듈의 관리·교체 난이도",
    "직영 테스트 데이터 기반 리스크",
  ];

  return (
    <section id="survey" className="su-sec" style={{ background: "linear-gradient(180deg, transparent, rgba(95,201,181,.06) 40%, transparent)" }}>
      <div className="su-wrap su-wrap--wide">
        <div className="su-survey-grid" style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 52, alignItems: "start" }}>
          {/* left: pitch + checklist */}
          <div>
            <div {...rv(0)}><Eyebrow tone="coral">Condition Check</Eyebrow></div>
            <h2 className="su-h2 reveal" style={{ margin: "22px 0 0", color: "var(--ivory)" }}>
              내 공간에 맞는<br />무인 플랫폼 진단.
            </h2>
            <p className="su-body reveal" style={{ marginTop: 22, fontSize: 17, maxWidth: 460 }}>
              수익을 보장하지 않습니다. 대신 공간과 상권에 맞는 운영 가능성을 함께 확인합니다.
            </p>
            <ul className="su-checklist reveal" style={{ marginTop: 30 }}>
              {checks.map((c) => (
                <li key={c}><Icon name="check" size={20} />{c}</li>
              ))}
            </ul>
          </div>

          {/* right: form panel */}
          <div className="su-form-panel reveal" data-rv="scale">
            {sent ? (
              <div style={{ textAlign: "center", padding: "30px 10px", color: "var(--navy)" }}>
                <span className="su-chip" style={{ background: "var(--grad-mint)", width: 64, height: 64, margin: "0 auto" }}><Icon name="check" size={30} /></span>
                <h3 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-.03em", margin: "22px 0 10px" }}>상담 신청이 접수되었습니다</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 15.5, lineHeight: 1.7, margin: "0 auto", maxWidth: 380 }}>
                  영업일 기준 1~2일 내 담당자가 연락드려 입력해 주신 조건을 함께 확인합니다.
                </p>
                <button className="su-btn" onClick={() => { setSent(false); setPicked([]); }} style={{ marginTop: 26, background: "var(--navy)", color: "var(--ivory)" }}>
                  다시 작성하기
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={submit} noValidate>
                <h3 style={{ margin: "0 0 6px", fontSize: 21, fontWeight: 900, letterSpacing: "-.03em", color: "var(--navy)" }}>조건 확인 상담 신청</h3>
                <p style={{ margin: "0 0 22px", fontSize: 13.5, color: "var(--gray)" }}>* 표시는 필수 항목입니다.</p>
                <div className="su-form-grid">
                  <Input label="이름" required placeholder="홍길동" />
                  <Input label="연락처" required type="tel" placeholder="010-0000-0000" />
                </div>
                <div className="su-form-grid" style={{ marginTop: 18 }}>
                  <Select label="입점 공간 형태" required placeholder="선택" options={["단독 매장", "샵인샵 / 입점", "기존 매장 일부", "공간 탐색 중", "미정"]} />
                  <Select label="협력 목적" required placeholder="선택" options={["직접 운영(창업)", "가맹 / 제휴", "공간 임대 제안", "기타 문의"]} />
                </div>
                <div style={{ marginTop: 22 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--navy)" }}>관심 모듈 <span style={{ color: "var(--gray)", fontWeight: 600 }}>(복수 선택)</span></span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 12 }}>
                    {MOD_CHIPS.map((m) => {
                      const on = picked.includes(m);
                      return (
                        <button type="button" key={m} onClick={() => toggle(m)} style={{
                          display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 15px", borderRadius: 999, cursor: "pointer", fontSize: 13.5, fontWeight: 800,
                          fontFamily: "var(--font-sans)", letterSpacing: "-.01em",
                          border: on ? "1px solid var(--coral)" : "1px solid var(--border-strong)",
                          background: on ? "var(--coral)" : "rgba(255,255,255,.6)",
                          color: on ? "#fff" : "var(--teal)",
                          transition: "all var(--dur-fast) var(--ease-out)",
                        }}>
                          {on && <Icon name="check" size={14} />}{m}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div style={{ marginTop: 22 }}>
                  <Textarea label="가장 걱정되는 부분 / 추가 문의" rows={3} placeholder="예) 관리 부담, 공간 크기, 초기 구성 범위 등" />
                </div>
                {err && <p style={{ color: "var(--coral)", fontSize: 13.5, fontWeight: 700, margin: "16px 0 0" }}>{err}</p>}
                <Button type="submit" variant="primary" size="lg" style={{ width: "100%", marginTop: 24 }} iconRight={<Icon name="arrow" size={18} />}>
                  조건 확인 상담 신청
                </Button>
                <p className="su-note" style={{ marginTop: 14, color: "var(--gray)" }}>
                  입력하신 정보는 상담 안내 목적으로만 사용되며, 본 신청은 수익을 보장하지 않습니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SurveySection });
