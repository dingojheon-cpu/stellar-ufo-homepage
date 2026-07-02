# Stellar UFO — Design System

> **Stellar UFO** (스텔라 UFO) · *Multi Platform Gacha Shop*
> 인형뽑기 · 가챠 · 캡슐토이 · 캐릭터 굿즈 · 포토부스

A friendly, character-led, soft-futuristic brand for a **multi-platform gacha
shop** — a Korean unmanned ("무인") retail-entertainment concept that combines
claw machines, capsule-toy gacha, character goods, K-POP merch, and photo
booths into one stay-and-play store, sold to founders and franchise partners.

The brand should feel **playful but organized, cute but not childish,
collectible and repeat-visit oriented, soft-futuristic (not cyberpunk)** — and
trustworthy enough for contracts, proposals, and franchise discussions.

---

## Source material

This system was reverse-engineered from the brand's working repository. If you
have access, explore it directly to design with higher fidelity:

- **GitHub:** [`dingojheon-cpu/stellar-ufo-project`](https://github.com/dingojheon-cpu/stellar-ufo-project)
  - `01_브랜드로고/ACTIVE_BRAND_SYSTEM.md` — official brand name, palette, usage rules (source of truth)
  - `01_브랜드로고/stellar_ufo_brand_application_guide.md` — direction, logo meaning, type, motifs, tone
  - `02_브랜드_어플리케이션/stellar_ufo_stationery_guide.md` — business cards, contracts, envelopes
  - `03_회사소개서_PPT/` — company-profile / franchise proposal deck (16:9)
  - `04_홈페이지/` — landing copy, wireframes, lead-form, and the production landing HTML + cinematic design directive
- **Logo reference:** `assets/stellar-ufo-logo.png` (cropped + background-keyed from the repo's `stellar_ship_logo_reference.png`)

> **Naming note:** the current official brand name is **`Stellar UFO`**. Older
> `STELLAR'S SHIP` and `UFO GAME` files in the repo are early concept references
> only — do not use those names as the active brand.

---

## CONTENT FUNDAMENTALS — how Stellar UFO writes

**Language.** Primary language is **Korean**; English appears as short uppercase
labels, section kickers, and the `Stellar UFO` wordmark. Korean uses
`word-break: keep-all` so phrases never break mid-word.

**Voice.** Friendly, clear, light, **visit-oriented** — but calm and
professional in formal documents (proposals, contracts). It sells a *system*,
not a get-rich scheme. Person: addresses the reader's **space and situation**
("내 공간에 맞는…", "내 상권에 맞는…") rather than barking commands.

**Casing.** Korean body in normal case. English kickers are UPPERCASE with wide
tracking (`MULTI PLATFORM GACHA SHOP`, `MARKET PROBLEM`, `WHY STELLAR UFO`).
The wordmark is `Stellar UFO` (title case).

**Signature phrases (taglines):**
- `오늘의 랜덤이 도착하는 곳`
- `뽑고, 모으고, 찍고, 다시 오는 멀티 플랫폼 가챠샵`
- `작은 캡슐이 큰 방문 이유가 됩니다`
- `가챠와 인형뽑기가 만나는 플레이 리테일`

**CTA language — "조건 확인" (condition-check), never "guarantee".**
Preferred CTAs: `조건 확인 상담 신청`, `내 공간에 맞는 무인 플랫폼 진단`,
`협력/가맹 상담 요청`. The product framing is *diagnose → test → propose*, so
copy invites a consultation, not a purchase.

**Banned expressions (compliance — never use):** 수익보장 · 월 순수익 보장 ·
실패 없는 창업 · 자동으로 돈 버는 매장 · 누구나 안정적으로 벌 수 있음.
Replace with: 조건 확인 · 운영 가능성 검토 · 상권/공간별 적합성 진단 ·
직영 테스트 기반 제안 · 리스크 사전 확인. Avoid money imagery (지폐, 급상승
그래프, 보장 뱃지) entirely.

**Emoji.** Not used in external/formal copy. Iconography carries emotional
rhythm instead (see ICONOGRAPHY). Limited emoji is tolerated only in internal
SNS card-news samples.

**The five modules** (the product vocabulary, repeated everywhere): **Play**
(인형뽑기·체험형 오락), **Gacha/Collect** (가챠·캡슐토이·랜덤박스), **Fandom/MD**
(K-POP 포토카드·캐릭터 굿즈), **Photo** (포토부스), **Shop-in-Shop** (샵인샵).

---

## VISUAL FOUNDATIONS

**Overall mood.** "Cinematic claw-machine" — lit from within. Deep navy "space"
depth with coral / mint / glass-blue *lighting*, not flat blocks of color. Think
movie-poster light direction and foreground/midground/background layers, kept
friendly by rounded forms and the mascot. Avoid: bright kids-toy flatness,
low-budget franchise-ad banners, cyberpunk neon grit.

**Color** (full tokens in `tokens/colors.css`). Recommended ratio:
55% Ivory Space · 20% Deep Space Navy · 10% Alien Mint · 8% Coral Saucer ·
5% Solar Yellow · 2% secondary.
- `#FAFAEF` **Ivory Space** — default paper, whitespace, info sections.
- `#0A2142` **Deep Space Navy** — text, premium contrast, hero/dark sections.
- `#FA7873` **Coral Saucer** — CTAs, key buttons, accent labels (don't over-use).
- `#5FC9B5` **Alien Mint** — mascot, module markers, friendly UI.
- `#FAD85E` **Solar Yellow** — *small* reward pops only, never a large background.
- `#C1E0EB` **Glass Blue** — domes, panels, dividers, light reflection.
- Secondary: `#3C6167` Orbit Teal Shadow (outline/sub-text), `#F0B1AB` Soft Coral.

**Type.** Rounded sans / rounded gothic. **Pretendard** for Korean + body and
Korean display (heavy 800/900 weights with very tight tracking, `-0.085em`, on
the biggest headlines). **Fredoka** for the Latin wordmark / English display
(rounded, friendly). Big headlines pull tight and set on `line-height: 0.93`;
body is calm at `1.7–1.8`. Avoid sharp luxury serifs, thin fashion type,
aggressive cyberpunk display, and overly childish handwriting.

**Backgrounds.** Three signature gradient systems (tokens in `tokens/effects.css`):
`--bg-aurora` (light ivory wash with mint+coral light leaks), `--bg-deep-space`
(cinematic dark section), and `--bg-dome` (glass-blue spotlight cone over navy,
used behind hero visuals). A faint 48px grid with a top-fade mask suggests depth
inside dark visuals. No photographic full-bleeds in the source; imagery is the
mascot + 3D-feeling capsule/UFO objects.

**Cards.** Warm-white (`--white`) or frosted glass (`rgba(255,255,255,.52–.64)`)
fills, 1px subtle navy border (`rgba(10,33,66,.10)`), `--radius-md` (22px)
corners, soft navy-tinted shadow (`--shadow-sm/md`). On dark sections cards
invert to translucent ivory (`rgba(250,250,239,.08)`) with a light border and no
shadow.

**Corner radii.** Large and dome-like. Cards 22px, tiles/steps 24px, hero panels
34px, dome corners 42px; **buttons and eyebrows are full pills (999px)**, like
capsules.

**Shadows & glow.** All shadows are navy-tinted and soft (never neutral gray).
Elevation `0 16px 40px rgba(10,33,66,.08→.16)`. CTAs add a **coral glow**
(`0 14px 34px rgba(250,120,115,.28)`). Capsules use an inner shadow
(`inset 0 -18px 34px rgba(10,33,66,.2)`) for 3D volume. Glass details get a
glass-blue bloom (`0 0 34px rgba(193,224,235,.72)`).

**Transparency & blur.** Sticky top bars frost the ivory (`rgba(250,250,239,.82)`
+ `blur(18px)`). Frosted cards float over gradient washes. Use blur for
chrome/overlays, not for body content.

**Borders & dividers.** Hairline navy at 10–14% opacity on light; ivory at 14%
on dark. Glass-blue (`#C1E0EB`) for document dividers and table headers.

**Motion.** Gentle and purposeful — never game-UI flashy, never blocking
conversion. Signatures: slow capsule/mascot **float** (`ufo-float`, 6s),
**stagger reveal** for module cards on scroll, soft coral **pulse/glow** on the
primary CTA, and an **orbit/progress line** connecting trust-flow steps. Easing
is soft-out (`--ease-out`); a gentle overshoot (`--ease-bounce`) is reserved for
capsule "pops". Respect `prefers-reduced-motion`.

**Hover / press.** Buttons lift slightly and intensify the coral glow on hover;
press settles down (translateY 0) and/or scales to ~0.98. Cards lift 2–4px with a
deeper shadow on hover. Links shift toward coral.

**Layout.** Generous whitespace, big hero + short strong sentence, asymmetric
grids, rhythmic module-card rows, and a deliberate alternation between dark
cinematic sections and light info sections. `--page-max` 1180px, 22px gutters,
96px section padding. Sticky header; CTA recaptured at the bottom (lead form +
approval gate). Avoid long text-only boxes and template-startup layouts.

---

## ICONOGRAPHY

**Approach.** The brand has **no icon font or SVG sprite in the source.** Its
visual rhythm comes from (1) the **mascot/logo** as the primary symbol and (2)
recurring **brand motifs** rendered as simple CSS objects: mini-UFO icon, three
saucer light-dots, capsule dots, soft orbit line, rounded dome frame, mascot
face. Stars are *supporting details only* — the UFO character and capsule/play
logic are the identity. Do **not** over-use stars.

**Icon style.** Prefer **3D / glossy object** feeling over thin line icons; keep
one consistent style per screen. Recommended subjects: UFO, capsule, claw,
orbit, card/goods box, camera/photo-booth, map-pin/상권, check/risk, chat-bubble
(상담), data/test. Use icons to break up text-heavy sections (one per module,
one per flow step, ≥3 checks in risk/validation sections).

**System icons (substitute — flag).** The repo ships no icon set, so for generic
UI glyphs (chevrons, close, arrows, check, menu) this system uses **[Lucide]
(https://lucide.dev)** via CDN — a rounded, friendly stroke set that matches the
brand. This is a **substitution**; if the brand adopts an official icon set,
swap the CDN link. Brand-specific marks (UFO, capsule, saucer dots) are built
from the mascot asset + CSS, never redrawn as fake-detailed SVG.

**Forbidden:** random emoji spam, mixed-style free icons, low-budget startup
sparkle/fireworks/money-stack icons, and any money/guarantee imagery.

**Logo usage.** `assets/stellar-ufo-logo.png` (transparent, friendly alien in a
domed UFO) for light/dark alike; `stellar-ufo-mark-navy.png` for dark tiles;
`stellar-ufo-icon.png` is the compact app-icon crop. On formal documents the
mascot stays **small** (a brand signal, not decoration).

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — global entry point (import this one file).
- `tokens/` — `colors.css`, `typography.css`, `fonts.css`, `spacing.css`,
  `effects.css`, `base.css`.
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand).

**Assets** — `assets/`
- `stellar-ufo-logo.png`, `stellar-ufo-mark-navy.png`, `stellar-ufo-icon.png`.

**Components** — `components/` (reusable React primitives; see each `.prompt.md`)
- `core/` — `Button`, `Badge`, `Kicker`, `Card`, `Capsule`, `BrandMark`
- `forms/` — `Input`, `Select`, `Textarea`
- `marketing/` — `ModuleCard`, `FlowStep`, `StatementBar`

**UI kits** — `ui_kits/`
- `landing/` — the Stellar UFO marketing site (cinematic hero → modules →
  trust flow → lead form).
- `company_profile/` — the franchise/company-profile deck (16:9 slides).

**Skill** — `SKILL.md` (Agent-Skills compatible) + this `README.md`.

---

*Generated files (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`)
are produced automatically — do not edit them.*
