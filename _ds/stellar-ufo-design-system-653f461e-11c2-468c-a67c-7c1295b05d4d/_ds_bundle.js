/* @ds-bundle: {"format":3,"namespace":"StellarUFODesignSystem_653f46","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BrandMark","sourcePath":"components/core/BrandMark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Capsule","sourcePath":"components/core/Capsule.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"FlowStep","sourcePath":"components/marketing/FlowStep.jsx"},{"name":"ModuleCard","sourcePath":"components/marketing/ModuleCard.jsx"},{"name":"StatementBar","sourcePath":"components/marketing/StatementBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0f408c1e5e2b","components/core/BrandMark.jsx":"7342a4a154f9","components/core/Button.jsx":"2de20c17719f","components/core/Capsule.jsx":"e1bbf9fc7860","components/core/Card.jsx":"e7ddaa4597a5","components/core/Kicker.jsx":"55a515ea1e7f","components/forms/Input.jsx":"9de77ee7bcfc","components/forms/Select.jsx":"f08716ad6d04","components/forms/Textarea.jsx":"0a8783c8da22","components/marketing/FlowStep.jsx":"c3252d3619c6","components/marketing/ModuleCard.jsx":"b2887fdc1a42","components/marketing/StatementBar.jsx":"778f78ebd188","ui_kits/company_profile/deck-stage.js":"9436a2deeb46","ui_kits/landing/app.jsx":"22674bcd3e09","ui_kits/landing/components.jsx":"abbf1b33fbdf","ui_kits/landing/sections.jsx":"ff4c7c01872e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StellarUFODesignSystem_653f46 = window.StellarUFODesignSystem_653f46 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category pill. Tinted brand fills for module markers,
 * eyebrow tags, and labels.
 */
function Badge({
  children,
  tone = "mint",
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    mint: {
      fg: "var(--teal)",
      bg: "rgba(95,201,181,.20)",
      solidBg: "var(--mint)",
      solidFg: "var(--navy)"
    },
    coral: {
      fg: "var(--coral)",
      bg: "rgba(250,120,115,.16)",
      solidBg: "var(--coral)",
      solidFg: "#fff"
    },
    navy: {
      fg: "var(--navy)",
      bg: "rgba(10,33,66,.08)",
      solidBg: "var(--navy)",
      solidFg: "var(--ivory)"
    },
    yellow: {
      fg: "#8a6d10",
      bg: "rgba(250,216,94,.28)",
      solidBg: "var(--yellow)",
      solidFg: "var(--navy)"
    },
    glass: {
      fg: "var(--teal)",
      bg: "rgba(193,224,235,.55)",
      solidBg: "var(--glass)",
      solidFg: "var(--navy)"
    }
  };
  const t = tones[tone] || tones.mint;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: "var(--weight-black)",
      letterSpacing: "-.01em",
      lineHeight: 1,
      color: solid ? t.solidFg : t.fg,
      background: solid ? t.solidBg : t.bg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BrandMark — Stellar UFO lockup: a mark + the wordmark. By default the mark is
 * the self-contained CSS "saucer" disc (coral→mint with a yellow light); pass
 * `logoSrc` (path to assets/stellar-ufo-logo.png) to use the real mascot.
 */
function BrandMark({
  logoSrc = null,
  wordmark = true,
  descriptor = false,
  size = 34,
  tone = "navy",
  style = {},
  ...rest
}) {
  const textColor = tone === "ivory" ? "var(--ivory)" : "var(--navy)";
  const mark = logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Stellar UFO",
    style: {
      width: size,
      height: size,
      objectFit: "contain",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "radial-gradient(circle at 34% 32%, var(--yellow), transparent 22%), linear-gradient(135deg, var(--coral), var(--mint))",
      boxShadow: "0 10px 28px rgba(250,120,115,.28)",
      flexShrink: 0
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      ...style
    }
  }, rest), mark, wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: size * 0.64,
      letterSpacing: "-.02em",
      color: textColor
    }
  }, "Stellar UFO"), descriptor && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "3px",
      fontFamily: "var(--font-sans)",
      fontSize: Math.max(10, size * 0.3),
      fontWeight: "var(--weight-bold)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: tone === "ivory" ? "rgba(250,250,239,.7)" : "var(--gray)"
    }
  }, "Multi Platform Gacha Shop")));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stellar UFO primary button. Pill-shaped (capsule), coral by default with a
 * soft coral glow; lifts on hover, settles on press.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon = null,
  iconRight = null,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      minHeight: 38,
      padding: "0 16px",
      fontSize: 14
    },
    md: {
      minHeight: 46,
      padding: "0 22px",
      fontSize: 15
    },
    lg: {
      minHeight: 56,
      padding: "0 30px",
      fontSize: 17
    }
  };
  const variants = {
    primary: {
      background: "var(--coral)",
      color: "#fff",
      border: "0",
      boxShadow: "var(--glow-coral)"
    },
    secondary: {
      background: "rgba(255,255,255,.52)",
      color: "var(--navy)",
      border: "1px solid var(--border-strong)",
      boxShadow: "none"
    },
    mint: {
      background: "var(--mint)",
      color: "var(--navy)",
      border: "0",
      boxShadow: "var(--glow-mint)"
    },
    ghost: {
      background: "transparent",
      color: "var(--navy)",
      border: "1px solid var(--border-strong)",
      boxShadow: "none"
    },
    onDark: {
      background: "var(--ivory)",
      color: "var(--navy)",
      border: "0",
      boxShadow: "var(--shadow-sm)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-ultra)",
    letterSpacing: "var(--tracking-h3)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(-2px)";
    if (variant === "primary") e.currentTarget.style.boxShadow = "var(--glow-coral-strong)";
  };
  const onLeave = e => {
    e.currentTarget.style.transform = "translateY(0)";
    if (variant === "primary") e.currentTarget.style.boxShadow = "var(--glow-coral)";
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(0) scale(.98)";
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(-2px)";
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children, iconRight);
  const handlers = {
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Capsule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Capsule — the brand's 3D gacha-capsule motif. A glossy sphere with inner
 * shadow volume and a highlight. Use as decorative reward/play objects.
 */
function Capsule({
  color = "coral",
  size = 64,
  float = false,
  style = {},
  ...rest
}) {
  const fills = {
    coral: "linear-gradient(135deg, var(--coral), var(--yellow))",
    mint: "linear-gradient(135deg, var(--mint), var(--glass))",
    yellow: "linear-gradient(135deg, var(--yellow), var(--white))",
    glass: "linear-gradient(135deg, var(--glass), var(--white))",
    softcoral: "linear-gradient(135deg, var(--coral), var(--soft-coral))"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "50%",
      background: fills[color] || fills.coral,
      boxShadow: "var(--inset-capsule), 0 18px 38px rgba(10,33,66,.20)",
      position: "relative",
      animation: float ? "ufo-float var(--float-duration) var(--ease-soft) infinite" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "16%",
      left: "20%",
      width: "30%",
      height: "22%",
      borderRadius: "50%",
      background: "rgba(255,255,255,.55)",
      filter: "blur(1px)"
    }
  }));
}
Object.assign(__ds_scope, { Capsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Capsule.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card. Frosted-white on light backgrounds, translucent ivory on dark.
 * Soft navy-tinted shadow, large rounded corners; lifts on hover when interactive.
 */
function Card({
  children,
  tone = "light",
  interactive = false,
  pad = 28,
  style = {},
  ...rest
}) {
  const tones = {
    light: {
      background: "var(--surface-glass)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      color: "var(--navy)"
    },
    solid: {
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)",
      color: "var(--navy)"
    },
    glass: {
      background: "rgba(193,224,235,.30)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "none",
      color: "var(--navy)"
    },
    dark: {
      background: "rgba(250,250,239,.08)",
      border: "1px solid var(--border-on-dark)",
      boxShadow: "none",
      color: "var(--ivory)"
    }
  };
  const t = tones[tone] || tones.light;
  const onEnter = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "var(--shadow-md)";
  };
  const onLeave = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = t.boxShadow;
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      padding: typeof pad === "number" ? `${pad}px` : pad,
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / kicker — short uppercase Latin label that sits above a heading.
 * Optionally wrapped in a tinted pill (`pill`).
 */
function Kicker({
  children,
  tone = "coral",
  pill = false,
  style = {},
  ...rest
}) {
  const tones = {
    coral: {
      fg: "var(--coral)",
      bg: "rgba(250,120,115,.16)"
    },
    mint: {
      fg: "var(--teal)",
      bg: "rgba(95,201,181,.20)"
    },
    yellow: {
      fg: "var(--yellow)",
      bg: "rgba(250,216,94,.22)"
    },
    ivory: {
      fg: "var(--ivory)",
      bg: "rgba(250,250,239,.12)"
    }
  };
  const t = tones[tone] || tones.coral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: "var(--weight-ultra)",
      letterSpacing: pill ? ".02em" : "var(--tracking-label)",
      textTransform: "uppercase",
      ...(pill ? {
        padding: "8px 13px",
        borderRadius: "var(--radius-pill)",
        background: t.bg
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with floating-free label above. Soft rounded field, frosted fill,
 * coral focus ring. Use `required` to show the brand's "*" marker.
 */
function Input({
  label,
  required = false,
  hint,
  type = "text",
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `f-${label.replace(/\s+/g, "-")}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--weight-bold)",
      color: "var(--navy)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral)",
      marginLeft: "4px"
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      minHeight: "52px",
      padding: "0 18px",
      border: `1px solid ${focus ? "var(--coral)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-sm)",
      background: "rgba(255,255,255,.74)",
      color: "var(--navy)",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      outline: "none",
      boxShadow: focus ? "0 0 0 4px var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--gray)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select dropdown matching the Input style. Pass `options` as strings or {value,label}. */
function Select({
  label,
  required = false,
  options = [],
  placeholder,
  id,
  style = {},
  ...rest
}) {
  const selId = id || (label ? `s-${label.replace(/\s+/g, "-")}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--weight-bold)",
      color: "var(--navy)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral)",
      marginLeft: "4px"
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    required: required,
    defaultValue: "",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: "52px",
      padding: "0 40px 0 18px",
      border: `1px solid ${focus ? "var(--coral)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-sm)",
      background: "rgba(255,255,255,.74)",
      color: "var(--navy)",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      outline: "none",
      appearance: "none",
      cursor: "pointer",
      boxShadow: focus ? "0 0 0 4px var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--teal)",
      fontSize: "12px"
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text field matching the Input style. */
function Textarea({
  label,
  required = false,
  hint,
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const taId = id || (label ? `t-${label.replace(/\s+/g, "-")}` : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--weight-bold)",
      color: "var(--navy)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral)",
      marginLeft: "4px"
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: "16px 18px",
      border: `1px solid ${focus ? "var(--coral)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-sm)",
      background: "rgba(255,255,255,.74)",
      color: "var(--navy)",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      lineHeight: "1.6",
      outline: "none",
      resize: "vertical",
      boxShadow: focus ? "0 0 0 4px var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--gray)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FlowStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FlowStep — a numbered step tile for the platform/trust flow
 * (트렌드 탐색 → 직영 테스트 → 운영 검토 → 모듈 조합 → 상담 제안).
 * Navy tile with a Solar-Yellow number; inverts on dark sections.
 */
function FlowStep({
  n,
  title,
  children,
  dark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      minHeight: "148px",
      padding: "22px",
      borderRadius: "var(--radius-lg)",
      fontFamily: "var(--font-sans)",
      background: dark ? "rgba(250,250,239,.10)" : "var(--navy)",
      color: "var(--ivory)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      marginBottom: "16px",
      color: "var(--yellow)",
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "-.02em"
    }
  }, String(n).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "17px",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-h3)"
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "8px",
      fontSize: "13px",
      lineHeight: 1.6,
      color: "var(--text-on-dark-muted)"
    }
  }, children));
}
Object.assign(__ds_scope, { FlowStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FlowStep.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ModuleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ModuleCard — presents one of the five Stellar UFO modules (Play, Gacha,
 * Fandom/MD, Photo, Shop-in-Shop). A glossy icon chip + title + description.
 * Pass `icon` (e.g. a Lucide <svg>); the chip provides the brand color.
 */
function ModuleCard({
  icon = null,
  eyebrow,
  title,
  children,
  tone = "mint",
  dark = false,
  interactive = true,
  style = {},
  ...rest
}) {
  const chips = {
    mint: "linear-gradient(135deg, var(--mint), var(--glass))",
    coral: "linear-gradient(135deg, var(--coral), var(--soft-coral))",
    yellow: "linear-gradient(135deg, var(--yellow), var(--white))",
    glass: "linear-gradient(135deg, var(--glass), var(--white))",
    navy: "linear-gradient(135deg, var(--navy), var(--teal))"
  };
  const onEnter = e => {
    if (interactive) {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = dark ? "none" : "var(--shadow-md)";
    }
  };
  const onLeave = e => {
    if (interactive) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = dark ? "none" : "var(--shadow-sm)";
    }
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: {
      padding: "28px",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      background: dark ? "rgba(250,250,239,.08)" : "var(--surface-glass)",
      border: dark ? "1px solid var(--border-on-dark)" : "1px solid var(--border-subtle)",
      boxShadow: dark ? "none" : "var(--shadow-sm)",
      color: dark ? "var(--ivory)" : "var(--navy)",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": !icon,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: "16px",
      background: chips[tone] || chips.mint,
      color: tone === "navy" ? "var(--ivory)" : "var(--navy)",
      boxShadow: "var(--inset-capsule)",
      marginBottom: "18px"
    }
  }, icon), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      fontWeight: "var(--weight-ultra)",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: dark ? "var(--mint)" : "var(--teal)",
      marginBottom: "8px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 10px",
      fontSize: "20px",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-h3)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.7,
      color: dark ? "var(--text-on-dark-muted)" : "var(--text-secondary)"
    }
  }, children));
}
Object.assign(__ds_scope, { ModuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ModuleCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatementBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatementBar — a centered, bold brand statement line used to punctuate a
 * section (the deck's coral/yellow statement). Coral on light, yellow on dark.
 */
function StatementBar({
  children,
  dark = false,
  align = "center",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      textAlign: align,
      color: dark ? "var(--yellow)" : "var(--coral)",
      fontFamily: "var(--font-sans)",
      fontSize: "clamp(22px, 3vw, 32px)",
      fontWeight: "var(--weight-ultra)",
      letterSpacing: "var(--tracking-h3)",
      lineHeight: 1.25,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { StatementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatementBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/company_profile/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `deckchange`
 *      CustomEvent on the element: detail = {action, from, to, slide}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav and skip don't trigger
      // spurious refreshes.
      const OWN_ATTRS = /^data-(deck-|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          if (n && this._slideSet && this._slideSet.has(n)) this._liveDirty.add(n);
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Rail mutations (delete/move/duplicate) already reconcile synchronously and
      // emit slidechange with reason 'api'; skip the async slotchange that
      // would otherwise re-broadcast with reason 'init'.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }
    _emitDeckChange(detail) {
      this.dispatchEvent(new CustomEvent('deckchange', {
        detail,
        bubbles: true,
        composed: true
      }));
    }
    _deleteSlide(i) {
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const wasCurrent = i === this._index;
      if (i < this._index || wasCurrent && i === this._slides.length - 1) this._index--;
      this._squelchSlotChange = true;
      slide.remove();
      this._emitDeckChange({
        action: 'delete',
        from: i,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const copy = slide.cloneNode(true);
      // Strip ids so the document stays valid (no duplicate-id collisions
      // with the original). Same treatment _materialize gives rail clones.
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Insert after the original and make the copy active so it's the one
      // on screen. _collectSlides re-derives data-screen-label / data-deck-*
      // attrs, so the cloned values are overwritten.
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._emitDeckChange({
        action: 'duplicate',
        from: i,
        to: i + 1,
        slide: copy
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
      if (this._thumbs && this._thumbs[i]) {
        if (on) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
      }
      this._markLastVisible();
      this._emitDeckChange({
        action: on ? 'skip' : 'unskip',
        from: i,
        slide
      });
      // Re-broadcast so the presenter popup's prev/next thumbnails re-pick
      // the nearest non-skipped slide without waiting for a nav event.
      try {
        window.postMessage({
          slideIndexChanged: this._index,
          deckTotal: this._slides.length,
          deckSkipped: this._skippedIndices()
        }, '*');
      } catch (e) {}
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (j < 0 || j >= this._slides.length || j === i) return;
      const slide = this._slides[i];
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      // Track the active slide across the reorder so the same content
      // stays on screen.
      const cur = this._index;
      if (cur === i) this._index = j;else if (i < cur && j >= cur) this._index = cur - 1;else if (i > cur && j <= cur) this._index = cur + 1;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._emitDeckChange({
        action: 'move',
        from: i,
        to: j,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/company_profile/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/app.jsx
try { (() => {
/* Stellar UFO — Landing kit: lead form, footer, and App assembly. */
const {
  useState: useStateApp
} = React;
const SPACES = ["단독 매장", "샵인샵", "기존 매장 일부", "미정"];
const MODULES_OPT = ["인형뽑기", "가챠 · 캡슐토이", "캐릭터 굿즈 · MD", "포토부스", "복합"];
const PURPOSE = ["창업", "협력", "가맹", "입점", "기타"];
function Field({
  label,
  required,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: "var(--navy)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral)",
      marginLeft: 4
    }
  }, "*")), children);
}
const fieldCss = {
  minHeight: 52,
  padding: "0 16px",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius-sm)",
  background: "rgba(255,255,255,.74)",
  color: "var(--navy)",
  fontFamily: "var(--font-sans)",
  fontSize: 15,
  outline: "none"
};
function LeadForm() {
  const [sent, setSent] = useStateApp(false);
  const [mods, setMods] = useStateApp([]);
  const toggle = m => setMods(s => s.includes(m) ? s.filter(x => x !== m) : [...s, m]);
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: "su-form-panel",
      style: {
        textAlign: "center",
        padding: "56px 34px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "su-chip",
      style: {
        background: "var(--grad-mint)",
        margin: "0 auto 20px",
        width: 60,
        height: 60
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 28
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        margin: "0 0 12px"
      }
    }, "\uC0C1\uB2F4 \uC2E0\uCCAD\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: 420,
        margin: "0 auto 24px"
      }
    }, "\uB0A8\uACA8\uC8FC\uC2E0 \uC870\uAC74\uC744 \uAE30\uC900\uC73C\uB85C \uB2F4\uB2F9\uC790\uAC00 \uC801\uD569\uD55C \uC0C1\uB2F4 \uBC29\uD5A5\uC744 \uD655\uC778\uD55C \uB4A4 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Btn, {
      variant: "secondary",
      onClick: () => {
        setSent(false);
        setMods([]);
      }
    }, "\uB2E4\uC2DC \uC791\uC131"));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "su-form-panel",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-form-grid"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\uC774\uB984",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    style: fieldCss,
    required: true,
    placeholder: "\uD64D\uAE38\uB3D9"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uC5F0\uB77D\uCC98",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    style: fieldCss,
    required: true,
    type: "tel",
    placeholder: "010-0000-0000"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uD76C\uB9DD \uC9C0\uC5ED",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    style: fieldCss,
    required: true,
    placeholder: "\uC608: \uC218\uC6D0 \uC601\uD1B5\uAD6C"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uACF5\uAC04 \uD615\uD0DC",
    required: true
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      ...fieldCss,
      appearance: "none",
      cursor: "pointer"
    },
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "\uC120\uD0DD"), SPACES.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(Field, {
    label: "\uBB38\uC758 \uBAA9\uC801",
    required: true
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      ...fieldCss,
      appearance: "none",
      cursor: "pointer"
    },
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "\uC120\uD0DD"), PURPOSE.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(Field, {
    label: "\uC0C1\uB2F4 \uD76C\uB9DD \uC2DC\uAE30"
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      ...fieldCss,
      appearance: "none",
      cursor: "pointer"
    },
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "\uC120\uD0DD"), ["2주 내", "1개월 내", "3개월 내", "미정"].map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: "var(--navy)"
    }
  }, "\uAD00\uC2EC \uBAA8\uB4C8 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral)"
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 12
    }
  }, MODULES_OPT.map(m => {
    const on = mods.includes(m);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: m,
      onClick: () => toggle(m),
      style: {
        padding: "10px 16px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 800,
        border: on ? "1px solid transparent" : "1px solid var(--border-strong)",
        background: on ? "var(--mint)" : "rgba(255,255,255,.5)",
        color: "var(--navy)",
        boxShadow: on ? "var(--glow-mint)" : "none",
        transition: "all var(--dur-fast)"
      }
    }, m);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\uAC00\uC7A5 \uAC71\uC815\uB418\uB294 \uBD80\uBD84 / \uCD94\uAC00 \uBB38\uC758"
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    style: {
      ...fieldCss,
      minHeight: "auto",
      padding: "14px 16px",
      lineHeight: 1.6,
      resize: "vertical"
    },
    placeholder: "\uC790\uC720\uB86D\uAC8C \uB0A8\uACA8\uC8FC\uC138\uC694."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "lg",
    iconRight: "arrow"
  }, "\uC870\uAC74 \uD655\uC778 \uC0C1\uB2F4 \uC2E0\uCCAD"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--gray)",
      maxWidth: 360,
      lineHeight: 1.6
    }
  }, "\uC785\uB825\uD558\uC2E0 \uC815\uBCF4\uB294 \uC0C1\uB2F4 \uC9C4\uD589\uACFC \uC548\uB0B4 \uBAA9\uC801\uC73C\uB85C\uB9CC \uC0AC\uC6A9\uB418\uBA70, \uBAA9\uC801 \uC678 \uC6A9\uB3C4\uB85C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")));
}
function SurveySection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "survey",
    className: "su-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-survey-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, "Condition-check Consultation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      maxWidth: 560
    }
  }, "\uB0B4 \uACF5\uAC04\uC5D0 \uB9DE\uB294", /*#__PURE__*/React.createElement("br", null), "\uBB34\uC778 \uD50C\uB7AB\uD3FC \uC0C1\uB2F4"), /*#__PURE__*/React.createElement("p", {
    className: "su-lead",
    style: {
      maxWidth: 480,
      marginTop: 18
    }
  }, "\uACF5\uAC04 \uD615\uD0DC\uC640 \uAD00\uC2EC \uBAA8\uB4C8\uC744 \uB0A8\uACA8\uC8FC\uC2DC\uBA74, \uC870\uAC74\uC5D0 \uB9DE\uB294 \uC0C1\uB2F4 \uBC29\uD5A5\uC744 \uD655\uC778\uD55C \uB4A4 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("ul", {
    className: "su-checklist"
  }, ["비용·계약·수익은 상담에서 조건 확인", "지역·공간 형태·관심 모듈 기준 검토", "직영 테스트 기반으로 적합성 진단"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), t)))), /*#__PURE__*/React.createElement(LeadForm, null)));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "su-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/stellar-ufo-logo.png",
    alt: "",
    style: {
      width: 36,
      height: 36,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--ivory)"
    }
  }, "Stellar UFO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-on-dark-muted)",
      marginTop: 2
    }
  }, "Multi Platform Gacha Shop"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      color: "var(--text-on-dark-muted)",
      maxWidth: 460,
      lineHeight: 1.7
    }
  }, "\uC778\uD615\uBF51\uAE30 \xB7 \uAC00\uCC60 \xB7 \uCEA1\uC290\uD1A0\uC774 \xB7 \uCE90\uB9AD\uD130 \uAD7F\uC988 \xB7 \uD3EC\uD1A0\uBD80\uC2A4 \u2014 \uACF5\uAC1C \uC804 \uC0C1\uB2F4 \uD3FC \uB9C1\uD06C\uC640 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC \uBB38\uAD6C \uCD5C\uC885 \uD655\uC778 \uD544\uC694.")));
}
function App() {
  const onNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(WhySection, null), /*#__PURE__*/React.createElement(ModuleSection, null), /*#__PURE__*/React.createElement(MethodSection, null), /*#__PURE__*/React.createElement(TrustSection, null), /*#__PURE__*/React.createElement(SurveySection, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Stellar UFO — Landing kit primitives.
 * Small cosmetic versions of the DS components (in production these compose the
 * real DesignSystem bundle). Exported to window for the other kit scripts. */

const I = {
  arrow: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }),
  claw: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9l-2 4 3 1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 9l2 4-3 1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "4"
  })),
  capsule: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  })),
  gift: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "13",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 8v13M12 8S10 3 7.5 4 9.5 8 12 8 14 3 16.5 4 14 8 12 8"
  })),
  camera: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7l1.5-2h5L16 7"
  })),
  store: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 9l1-5h14l1 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9v11h14V9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 20v-6h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9a3 3 0 006 0 3 3 0 006 0 3 3 0 004 0"
  })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M5 12l4.5 4.5L19 7"
  }),
  shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })),
  chat: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a8 8 0 01-8 8H7l-4 3v-6a8 8 0 018-13 8 8 0 0110 8z"
  })),
  test: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"
  })),
  spark: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"
  }),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })),
  close: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))
};
function Icon({
  name,
  size = 24,
  stroke = 2
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, I[name]);
}
function Btn({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconRight,
  onClick,
  style = {}
}) {
  const sizes = {
    sm: {
      minHeight: 38,
      padding: "0 16px",
      fontSize: 14
    },
    md: {
      minHeight: 48,
      padding: "0 22px",
      fontSize: 15
    },
    lg: {
      minHeight: 56,
      padding: "0 30px",
      fontSize: 17
    }
  };
  const variants = {
    primary: {
      background: "var(--coral)",
      color: "#fff",
      border: 0,
      boxShadow: "var(--glow-coral)"
    },
    secondary: {
      background: "rgba(255,255,255,.52)",
      color: "var(--navy)",
      border: "1px solid var(--border-strong)",
      boxShadow: "none"
    },
    mint: {
      background: "var(--mint)",
      color: "var(--navy)",
      border: 0,
      boxShadow: "var(--glow-mint)"
    },
    onDark: {
      background: "var(--ivory)",
      color: "var(--navy)",
      border: 0,
      boxShadow: "var(--shadow-sm)"
    },
    ghostDark: {
      background: "rgba(250,250,239,.08)",
      color: "var(--ivory)",
      border: "1px solid var(--border-on-dark)",
      boxShadow: "none"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontWeight: 900,
    letterSpacing: "-.02em",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const en = e => {
    e.currentTarget.style.transform = "translateY(-2px)";
    if (variant === "primary") e.currentTarget.style.boxShadow = "var(--glow-coral-strong)";
  };
  const lv = e => {
    e.currentTarget.style.transform = "translateY(0)";
    if (variant === "primary") e.currentTarget.style.boxShadow = "var(--glow-coral)";
  };
  const h = {
    onMouseEnter: en,
    onMouseLeave: lv
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: 18
  }));
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: base,
    onClick: onClick
  }, h), inner) : /*#__PURE__*/React.createElement("button", _extends({
    style: base,
    onClick: onClick
  }, h), inner);
}
function Kicker({
  children,
  tone = "coral",
  pill = false
}) {
  const tones = {
    coral: {
      fg: "var(--coral)",
      bg: "rgba(250,120,115,.16)"
    },
    mint: {
      fg: "var(--teal)",
      bg: "rgba(95,201,181,.2)"
    },
    ivory: {
      fg: "var(--ivory)",
      bg: "rgba(250,250,239,.12)"
    },
    yellow: {
      fg: "var(--yellow)",
      bg: "rgba(250,216,94,.22)"
    },
    glass: {
      fg: "var(--glass)",
      bg: "rgba(193,224,235,.16)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 900,
      letterSpacing: pill ? ".02em" : "var(--tracking-label)",
      textTransform: "uppercase",
      ...(pill ? {
        padding: "8px 13px",
        borderRadius: "var(--radius-pill)",
        background: t.bg
      } : {})
    }
  }, children);
}
function Badge({
  children,
  tone = "mint"
}) {
  const tones = {
    mint: {
      fg: "var(--teal)",
      bg: "rgba(95,201,181,.2)"
    },
    coral: {
      fg: "var(--coral)",
      bg: "rgba(250,120,115,.16)"
    },
    yellow: {
      fg: "#8a6d10",
      bg: "rgba(250,216,94,.28)"
    },
    glass: {
      fg: "var(--teal)",
      bg: "rgba(193,224,235,.55)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      fontSize: 12.5,
      fontWeight: 900,
      color: t.fg,
      background: t.bg,
      lineHeight: 1
    }
  }, children);
}
function Capsule({
  color = "coral",
  size = 64,
  float = false,
  delay = 0,
  style = {}
}) {
  const fills = {
    coral: "linear-gradient(135deg, var(--coral), var(--yellow))",
    mint: "linear-gradient(135deg, var(--mint), var(--glass))",
    yellow: "linear-gradient(135deg, var(--yellow), var(--white))",
    glass: "linear-gradient(135deg, var(--glass), var(--white))",
    softcoral: "linear-gradient(135deg, var(--coral), var(--soft-coral))"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "50%",
      background: fills[color],
      boxShadow: "var(--inset-capsule), 0 18px 38px rgba(10,33,66,.22)",
      position: "relative",
      animation: float ? `ufo-float var(--float-duration) var(--ease-soft) ${delay}s infinite` : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "16%",
      left: "20%",
      width: "30%",
      height: "22%",
      borderRadius: "50%",
      background: "rgba(255,255,255,.55)",
      filter: "blur(1px)"
    }
  }));
}
Object.assign(window, {
  Icon,
  Btn,
  Kicker,
  Badge,
  Capsule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections.jsx
try { (() => {
/* Stellar UFO — Landing kit sections. Uses primitives from components.jsx. */
const {
  useState
} = React;
const LOGO = "../../assets/stellar-ufo-logo.png";
const NAV = [["modules", "모듈"], ["method", "운영 방식"], ["trust", "검증"], ["faq", "FAQ"]];
function TopBar({
  onNav
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      backdropFilter: "var(--blur-panel)",
      background: "rgba(6,10,31,.55)",
      borderBottom: "1px solid rgba(193,224,235,.14)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "14px 22px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => onNav(e, "top"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Stellar UFO",
    style: {
      width: 40,
      height: 40,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 21,
      letterSpacing: "-.02em",
      color: "var(--ivory)"
    }
  }, "Stellar UFO"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      fontWeight: 800,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "rgba(250,250,239,.6)",
      marginTop: 3
    }
  }, "Multi Platform Gacha Shop"))), /*#__PURE__*/React.createElement("div", {
    className: "su-nav-links",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => onNav(e, id),
    style: {
      fontSize: 14.5,
      fontWeight: 800,
      color: "rgba(250,250,239,.78)"
    }
  }, label)), /*#__PURE__*/React.createElement(Btn, {
    href: "#survey",
    onClick: e => onNav(e, "survey"),
    size: "sm"
  }, "\uC870\uAC74 \uD655\uC778 \uC0C1\uB2F4")), /*#__PURE__*/React.createElement("button", {
    className: "su-nav-burger",
    onClick: () => setOpen(!open),
    style: {
      display: "none",
      background: "none",
      border: 0,
      color: "var(--ivory)",
      cursor: "pointer"
    },
    "aria-label": "menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "close" : "menu"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      background: "rgba(6,10,31,.92)"
    }
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      onNav(e, id);
      setOpen(false);
    },
    style: {
      padding: "10px 0",
      fontWeight: 800,
      color: "var(--ivory)",
      borderBottom: "1px solid rgba(193,224,235,.14)"
    }
  }, label)), /*#__PURE__*/React.createElement(Btn, {
    href: "#survey",
    onClick: e => {
      onNav(e, "survey");
      setOpen(false);
    },
    style: {
      marginTop: 8
    }
  }, "\uC870\uAC74 \uD655\uC778 \uC0C1\uB2F4 \uC2E0\uCCAD")));
}
function HeroVisual() {
  return /*#__PURE__*/React.createElement("div", {
    className: "su-hero-photo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "su-hero-photo__img",
    src: "assets/hero-clawmachine.jpg",
    alt: "\uB124\uC628 \uC870\uBA85 \uC544\uB798 \uC778\uD615\uBF51\uAE30 \uAE30\uACC4\uC640 \uAC00\uB4DD \uCC2C \uC778\uD615\uB4E4"
  }), /*#__PURE__*/React.createElement("div", {
    className: "su-hero-photo__veil"
  }), /*#__PURE__*/React.createElement("div", {
    className: "su-hero-photo__neon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "su-hero-photo__chip"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "STELLAR UFO"), /*#__PURE__*/React.createElement("i", null, "\uC9C0\uAE08 \uAC00\uB3D9 \uC911\uC778 \uC9C1\uC601 \uB9E4\uC7A5"))), /*#__PURE__*/React.createElement("span", {
    className: "su-hero-photo__live"
  }, /*#__PURE__*/React.createElement("span", null), "LIVE"), /*#__PURE__*/React.createElement("div", {
    className: "su-hero-photo__cap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-hero-photo__title"
  }, "\uBF51\uACE0, \uBAA8\uC73C\uACE0, \uCC0D\uACE0,", /*#__PURE__*/React.createElement("br", null), "\uB2E4\uC2DC \uC624\uB294 \uAC00\uCC60\uC0F5"), /*#__PURE__*/React.createElement("div", {
    className: "su-hero-photo__sub"
  }, "\uC778\uD615\uBF51\uAE30 \xB7 \uAC00\uCC60 \xB7 \uCEA1\uC290\uD1A0\uC774 \xB7 \uD3EC\uD1A0\uBD80\uC2A4")));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "su-hero-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-section su-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tone: "glass",
    pill: true
  }, "Multi Platform Gacha Shop"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "22px 0 24px",
      color: "var(--ivory)"
    }
  }, "\uD2B8\uB80C\uB4DC\uB97C \uC870\uD569\uD558\uB294", /*#__PURE__*/React.createElement("br", null), "\uBB34\uC778 \uD50C\uB7AB\uD3FC"), /*#__PURE__*/React.createElement("p", {
    className: "su-lead",
    style: {
      maxWidth: 560,
      margin: 0,
      color: "var(--text-on-dark)"
    }
  }, "Stellar UFO\uB294 \uD558\uB098\uC758 \uBB34\uC778\uB9E4\uC7A5\uC774 \uC544\uB2C8\uB77C, \uACF5\uAC04\uACFC \uC0C1\uAD8C\uC5D0 \uB9DE\uAC8C \uBAA8\uB4C8\uC744 \uC870\uD569\uD558\uB294 \uBB34\uC778 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 540,
      marginTop: 16,
      color: "rgba(250,250,239,.72)"
    }
  }, "\uC778\uD615\uBF51\uAE30, \uAC00\uCC60, \uCEA1\uC290\uD1A0\uC774, \uCE90\uB9AD\uD130 \uAD7F\uC988, \uD3EC\uD1A0\uBD80\uC2A4\uAE4C\uC9C0 \u2014 \uC9C1\uC601 \uD14C\uC2A4\uD2B8 \uAE30\uBC18\uC73C\uB85C \uC6B4\uC601 \uAC00\uB2A5\uC131\uC744 \uBA3C\uC800 \uD655\uC778\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "lg",
    href: "#survey",
    onClick: e => onNav(e, "survey"),
    iconRight: "arrow"
  }, "\uB0B4 \uACF5\uAC04\uC5D0 \uB9DE\uB294 \uBB34\uC778 \uD50C\uB7AB\uD3FC \uC9C4\uB2E8"), /*#__PURE__*/React.createElement(Btn, {
    size: "lg",
    variant: "ghostDark",
    href: "#method",
    onClick: e => onNav(e, "method")
  }, "\uC6B4\uC601 \uBC29\uC2DD \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, [["5", "조합 가능 모듈"], ["A·B", "출점 포맷"], ["조건 확인", "상담 기준"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 26,
      color: "var(--ivory)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(250,250,239,.66)",
      fontWeight: 700,
      marginTop: 2
    }
  }, l))))), /*#__PURE__*/React.createElement(HeroVisual, null)));
}
function WhySection() {
  const items = [["단일 아이템 한계", "유행 아이템 하나만 보고 시작하면 트렌드 변화에 취약합니다."], ["상권·동선 변수", "무인매장은 아이템보다 상권, 동선, 관리 방식이 함께 맞아야 합니다."], ["공간별 난이도", "공간마다 적합한 모듈과 운영 난이도가 다릅니다."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    className: "su-section"
  }, /*#__PURE__*/React.createElement(Kicker, null, "Why Stellar UFO"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      maxWidth: 820
    }
  }, "\uC544\uC774\uD15C \uD558\uB098\uAC00 \uC544\uB2C8\uB77C,", /*#__PURE__*/React.createElement("br", null), "\uC6B4\uC601 \uAD6C\uC870\uBD80\uD130 \uBE44\uAD50\uD558\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16,
      marginTop: 38
    }
  }, items.map(([t, d], i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "su-card su-card--hover"
  }, /*#__PURE__*/React.createElement("span", {
    className: "su-num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "14px 0 8px",
      fontSize: 19
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5
    }
  }, d)))));
}
const MODULES = [["coral", "claw", "Play", "인형뽑기", "체험형 플레이로 첫 시선과 체류를 만듭니다."], ["mint", "capsule", "Collect", "가챠 · 캡슐토이", "저단가 반복 구매를 만드는 트렌드형 랜덤 상품."], ["yellow", "gift", "Fandom / MD", "캐릭터 굿즈", "K-POP 포토카드, 캐릭터 굿즈로 팬덤 구매를 연결."], ["glass", "camera", "Photo", "포토부스", "SNS 공유를 만드는 인증·데코 요소."], ["softcoral", "store", "Shop-in-Shop", "샵인샵", "기존 매장 일부 공간을 활용한 입점형 구성."]];
function ModuleSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "modules",
    className: "su-section"
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "mint"
  }, "Platform Modules"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      maxWidth: 760
    }
  }, "\uACF5\uAC04\uC5D0 \uB9DE\uAC8C \uC870\uD569\uD558\uB294", /*#__PURE__*/React.createElement("br", null), "5\uAC1C\uC758 \uD50C\uB808\uC774 \uBAA8\uB4C8"), /*#__PURE__*/React.createElement("div", {
    className: "su-module-grid"
  }, MODULES.map(([tone, icon, eyebrow, title, desc]) => /*#__PURE__*/React.createElement("article", {
    key: title,
    className: "su-module su-card--hover"
  }, /*#__PURE__*/React.createElement("span", {
    className: "su-chip",
    style: {
      background: `var(--grad-${tone})`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 900,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--teal)",
      marginBottom: 7
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 10px",
      fontSize: 19
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5
    }
  }, desc)))));
}
function MethodSection() {
  const steps = [["트렌드 탐색", "후보 아이템을 발굴합니다."], ["직영 테스트", "직접 운영으로 반응을 확인."], ["운영 검토", "관리·리스크 요소 점검."], ["모듈 조합", "공간 조건에 맞춰 구성."], ["상담 제안", "조건 확인 후 제안합니다."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "method",
    className: "su-section su-section--dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 22px"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "yellow"
  }, "Platform Method"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      maxWidth: 780,
      color: "var(--ivory)"
    }
  }, "\uC544\uC774\uD15C\uC744 \uACF5\uAE09\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uC6B4\uC601\uC744 \uAC80\uC99D\uD574 \uC81C\uC548\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    className: "su-flow"
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "su-step"
  }, /*#__PURE__*/React.createElement("b", null, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: "var(--tracking-h3)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 8,
      fontSize: 12.5,
      lineHeight: 1.6,
      color: "var(--text-on-dark-muted)"
    }
  }, d)))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginTop: 40,
      color: "var(--yellow)",
      fontSize: "clamp(20px,2.6vw,30px)",
      fontWeight: 900,
      letterSpacing: "var(--tracking-h3)"
    }
  }, "\uC791\uC740 \uCEA1\uC290\uC774 \uD070 \uBC29\uBB38 \uC774\uC720\uAC00 \uB429\uB2C8\uB2E4.")));
}
function TrustSection() {
  const checks = [["shield", "검증 관점", "반응·관리·교체 가능성·공간 적합성을 확인합니다."], ["test", "리스크 표현", "수익 보장 대신 조건 확인과 운영 가능성 검토로 안내."], ["chat", "상담 기준", "협력 목적·입점 공간·운영 범위·관심 모듈을 먼저 확인."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "trust",
    className: "su-section"
  }, /*#__PURE__*/React.createElement(Kicker, null, "Trust & Risk Check"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      maxWidth: 760
    }
  }, "\uAC80\uD1A0\uB418\uC9C0 \uC54A\uC740 \uC544\uC774\uD15C\uC740", /*#__PURE__*/React.createElement("br", null), "\uBC14\uB85C \uC81C\uC548\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16,
      marginTop: 38
    }
  }, checks.map(([icon, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    className: "su-card su-card--hover"
  }, /*#__PURE__*/React.createElement("span", {
    className: "su-chip",
    style: {
      background: "var(--grad-glass)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: 19
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5
    }
  }, d)))));
}
Object.assign(window, {
  TopBar,
  Hero,
  WhySection,
  ModuleSection,
  MethodSection,
  TrustSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Capsule = __ds_scope.Capsule;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.FlowStep = __ds_scope.FlowStep;

__ds_ns.ModuleCard = __ds_scope.ModuleCard;

__ds_ns.StatementBar = __ds_scope.StatementBar;

})();
