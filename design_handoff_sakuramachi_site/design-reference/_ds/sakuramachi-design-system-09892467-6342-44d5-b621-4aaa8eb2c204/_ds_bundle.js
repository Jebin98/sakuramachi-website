/* @ds-bundle: {"format":4,"namespace":"SakuramachiDesignSystem_098924","components":[{"name":"HandwrittenNote","sourcePath":"components/brand/HandwrittenNote.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PriceTag","sourcePath":"components/brand/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/brand/ProductCard.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"FlavourTag","sourcePath":"components/core/FlavourTag.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/HandwrittenNote.jsx":"b91abc223c9c","components/brand/Logo.jsx":"d67c3c728ae9","components/brand/PriceTag.jsx":"c5f13bbfee57","components/brand/ProductCard.jsx":"b26f43a27d72","components/brand/SectionHeading.jsx":"3f7b14ff1ace","components/core/Badge.jsx":"eb72e064877f","components/core/Button.jsx":"bc41269af261","components/core/Card.jsx":"f2e56b738023","components/core/FlavourTag.jsx":"da2fa17fc178","components/core/Icon.jsx":"c4fbfc589126","components/core/IconButton.jsx":"721b56f92519","components/feedback/Dialog.jsx":"8ff3fe81a556","components/feedback/Toast.jsx":"eccac8120a72","components/feedback/Tooltip.jsx":"f0083b3a2cb9","components/forms/Checkbox.jsx":"3128d99272cf","components/forms/Input.jsx":"c67ef760fbbb","components/forms/QuantityStepper.jsx":"050f1a03c0af","components/forms/RadioGroup.jsx":"7c4c11504cef","components/forms/Select.jsx":"2c56cb141951","components/forms/Switch.jsx":"5d93e0fa7ae7","components/forms/Textarea.jsx":"96d7ef002f3b","components/navigation/Breadcrumb.jsx":"23a3c74e535a","components/navigation/Tabs.jsx":"13fa5fc52ab8","ui_kits/social/Frames.jsx":"f7355b5e9a3a","ui_kits/website/App.jsx":"9caf35d75a47","ui_kits/website/BoxScreen.jsx":"0ce0783173c7","ui_kits/website/Chrome.jsx":"b83efa985fdc","ui_kits/website/HomeScreen.jsx":"4eec688f2343","ui_kits/website/MenuScreen.jsx":"1d91aa51a68a","ui_kits/website/ProductScreen.jsx":"046ff531504c","ui_kits/website/StoryScreen.jsx":"f293439f7db0","ui_kits/website/data.js":"4e8168a1ed6d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SakuramachiDesignSystem_098924 = window.SakuramachiDesignSystem_098924 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/HandwrittenNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HandwrittenNote({
  lines = [],
  to,
  tone = "sakura",
  size = 26,
  style,
  ...rest
}) {
  const all = to ? [`${to}, welcome to Sakuramachi`, ...lines] : lines;
  const tones = {
    sakura: {
      background: "var(--sakura-200)",
      color: "var(--cocoa-900)"
    },
    cream: {
      background: "var(--cream-200)",
      color: "var(--cocoa-900)"
    },
    plain: {
      background: "transparent",
      color: "var(--cocoa-900)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding: tone === "plain" ? 0 : "var(--space-6)",
      fontFamily: "var(--font-script)",
      fontSize: size,
      lineHeight: 1.4,
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: "translate(-0.115em,-0.095em)"
    }
  }, all.slice(0, 3).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))));
}
Object.assign(__ds_scope, { HandwrittenNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HandwrittenNote.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The mark is real artwork (assets/logo-sakuramachi.jpeg) and is never redrawn.
 * Below 64px use variant="wordmark", which sets the name in --font-script.
 */
/* Caveat sets with a wide left side bearing and a visual centre below the em midpoint,
   so a geometrically centred wordmark reads low and to the right. Every script lockup in
   the system carries this one correction. */
const optical = "translate(-0.115em,-0.095em)";
function Logo({
  variant = "wordmark",
  size = 140,
  src = "../../assets/logo-sakuramachi.jpeg",
  color = "var(--cocoa-900)",
  style,
  ...rest
}) {
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        padding: size * 0.12,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "Sakuramachi",
      style: {
        display: "block",
        width: size,
        height: "auto"
      }
    }));
  }
  if (variant === "monogram") {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-label": "Sakuramachi",
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-circle)",
        background: "var(--sakura-200)",
        fontFamily: "var(--font-script)",
        fontWeight: 700,
        fontSize: size * 0.58,
        color,
        lineHeight: 1,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        transform: optical
      }
    }, "s"));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-script)",
      fontWeight: 600,
      fontSize: size * 0.34,
      lineHeight: 1,
      color,
      letterSpacing: "-.005em",
      whiteSpace: "nowrap",
      transform: optical,
      ...style
    }
  }, rest), "sakuramachi");
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceTag({
  amount,
  currency = "$",
  unit,
  was,
  size = "md",
  style,
  ...rest
}) {
  const sizes = {
    sm: "var(--text-sm)",
    md: "var(--text-lg)",
    lg: "var(--text-2xl)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 7,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: sizes[size],
      fontWeight: 400,
      color: "var(--text-price)",
      letterSpacing: ".01em"
    }
  }, currency, amount), was ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      textDecoration: "line-through"
    }
  }, currency, was) : null, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, unit) : null);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Tag = "h2",
  script,
  style,
  ...rest
}) {
  const center = align === "center";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      alignItems: center ? "center" : "flex-start",
      textAlign: center ? "center" : "left",
      maxWidth: center ? 640 : undefined,
      marginInline: center ? "auto" : undefined,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--sakura-700)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(var(--text-2xl), 3.4vw, var(--text-4xl))",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-heading)"
    }
  }, title), script ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-2xl)",
      color: "var(--sakura-600)",
      lineHeight: 1.2,
      transform: "translate(-0.115em,-0.095em)"
    }
  }, script) : null, lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)",
      maxWidth: "var(--prose-max)"
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: "var(--kinako-100)",
    color: "var(--kinako-700)"
  },
  sakura: {
    background: "var(--sakura-100)",
    color: "var(--sakura-700)"
  },
  success: {
    background: "var(--state-success-bg)",
    color: "var(--state-success)"
  },
  warning: {
    background: "var(--state-warning-bg)",
    color: "var(--state-warning)"
  },
  danger: {
    background: "var(--state-danger-bg)",
    color: "var(--state-danger)"
  },
  ink: {
    background: "var(--cocoa-900)",
    color: "var(--cream-50)"
  },
  hojicha: {
    background: "var(--hojicha-700)",
    color: "var(--text-inverse)"
  }
};
function Badge({
  children,
  tone = "neutral",
  size = "md",
  style,
  ...rest
}) {
  const s = size === "sm" ? {
    fontSize: "var(--text-2xs)",
    padding: "3px 8px"
  } : {
    fontSize: "var(--text-xs)",
    padding: "5px 11px"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      ...s,
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  as: Tag = "div",
  padded = true,
  interactive = false,
  tone = "surface",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    surface: {
      background: "var(--surface-card)"
    },
    sunken: {
      background: "var(--surface-sunken)"
    },
    accent: {
      background: "var(--surface-accent)"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: hover ? "translateY(var(--hover-lift))" : "none",
      transition: "transform var(--dur-fast) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
      padding: padded ? "var(--space-5)" : 0,
      cursor: interactive ? "pointer" : undefined,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/FlavourTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FLAVOURS = {
  ichigo: {
    label: "Strawberry",
    fg: "var(--ichigo-700)",
    bg: "var(--ichigo-100)",
    dot: "var(--ichigo-500)"
  },
  matcha: {
    label: "Matcha",
    fg: "var(--matcha-700)",
    bg: "var(--matcha-100)",
    dot: "var(--matcha-500)"
  },
  cocoa: {
    label: "Chocolate",
    fg: "var(--cocoa-700)",
    bg: "var(--cocoa-100)",
    dot: "var(--cocoa-700)"
  },
  vanilla: {
    label: "Vanilla",
    fg: "var(--butter-700)",
    bg: "var(--butter-100)",
    dot: "var(--butter-500)"
  },
  butter: {
    label: "Butter",
    fg: "var(--butter-700)",
    bg: "var(--butter-100)",
    dot: "var(--butter-500)"
  },
  hojicha: {
    label: "Hojicha",
    fg: "var(--hojicha-700)",
    bg: "var(--hojicha-100)",
    dot: "var(--hojicha-500)"
  },
  sakura: {
    label: "Sakura",
    fg: "var(--sakura-700)",
    bg: "var(--sakura-100)",
    dot: "var(--sakura-500)"
  }
};
function FlavourTag({
  flavour = "sakura",
  children,
  onPhoto = false,
  style,
  ...rest
}) {
  const f = FLAVOURS[flavour] || FLAVOURS.sakura;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 11px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1.3,
      whiteSpace: "nowrap",
      background: onPhoto ? "rgba(255,255,255,.92)" : f.bg,
      color: f.fg,
      backdropFilter: onPhoto ? "blur(4px)" : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "var(--radius-circle)",
      background: f.dot,
      flex: "none"
    }
  }), children || f.label);
}
Object.assign(__ds_scope, { FlavourTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FlavourTag.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  name,
  blurb,
  image,
  imageAlt = "",
  flavour,
  price,
  currency = "$",
  unit,
  status,
  ratio = "4 / 5",
  onClick,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    as: "article",
    padded: false,
    interactive: !!onClick,
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      background: "var(--cream-200)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    loading: "lazy",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null, flavour ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FlavourTag, {
    flavour: flavour,
    onPhoto: true
  })) : null, status ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status.tone || "ink",
    size: "sm"
  }, status.label)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-heading)"
    }
  }, name), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-muted)"
    }
  }, blurb) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)"
    }
  }, price !== undefined ? /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    currency: currency,
    unit: unit
  }) : /*#__PURE__*/React.createElement("span", null), footer)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide 0.544.0 is a FLAGGED SUBSTITUTION — Sakuramachi owns no icon set.
   Chosen for its 2px rounded-cap monoline stroke, nearest to the hand-drawn logo.
   Host page must load: https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js */

const pascal = n => String(n).replace(/(^\w|-\w)/g, s => s.replace("-", "").toUpperCase());
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const lib = typeof window !== "undefined" ? window.lucide : null;
    const node = lib && lib.icons ? lib.icons[pascal(name)] : null;
    host.innerHTML = "";
    if (!node || !lib.createElement) return;
    const svg = lib.createElement(node);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("stroke-width", strokeWidth);
    svg.setAttribute("stroke", color);
    svg.style.display = "block";
    host.appendChild(svg);
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: label ? "img" : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flex: "none",
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 36,
    padding: "0 16px",
    font: "var(--text-sm)",
    gap: 6,
    icon: 16
  },
  md: {
    height: 46,
    padding: "0 24px",
    font: "var(--text-base)",
    gap: 8,
    icon: 20
  },
  lg: {
    height: 56,
    padding: "0 32px",
    font: "var(--text-lg)",
    gap: 10,
    icon: 20
  }
};
const TONES = {
  primary: {
    rest: {
      background: "var(--action-primary-bg)",
      color: "var(--action-primary-fg)",
      boxShadow: "var(--shadow-inset)"
    },
    hover: {
      background: "var(--action-primary-bg-hover)"
    },
    active: {
      background: "var(--action-primary-bg-active)"
    }
  },
  secondary: {
    rest: {
      background: "var(--action-secondary-bg)",
      color: "var(--action-secondary-fg)",
      boxShadow: "var(--shadow-inset)"
    },
    hover: {
      background: "var(--action-secondary-bg-hover)"
    },
    active: {
      background: "var(--hojicha-700)"
    }
  },
  outline: {
    rest: {
      background: "transparent",
      color: "var(--cocoa-900)",
      boxShadow: "inset 0 0 0 1px var(--border-strong)"
    },
    hover: {
      background: "var(--sakura-100)",
      boxShadow: "inset 0 0 0 1px var(--sakura-300)"
    },
    active: {
      background: "var(--sakura-200)"
    }
  },
  ghost: {
    rest: {
      background: "transparent",
      color: "var(--action-ghost-fg)"
    },
    hover: {
      background: "var(--action-ghost-bg-hover)"
    },
    active: {
      background: "var(--sakura-200)"
    }
  }
};
function Button({
  children,
  tone = "primary",
  size = "md",
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  loading = false,
  type = "button",
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.primary;
  const off = disabled || loading;
  const css = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    border: 0,
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-body)",
    fontSize: s.font,
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    letterSpacing: "0.01em",
    cursor: off ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : loading ? 0.6 : 1,
    transition: "background var(--dur-fast) var(--ease-drift), transform var(--dur-instant) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
    transform: press && !off ? "scale(var(--press-scale))" : "none",
    outline: "none",
    ...t.rest,
    ...(hover && !off ? t.hover : null),
    ...(press && !off ? t.active : null),
    ...(focus ? {
      boxShadow: "var(--ring-focus)"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: off,
    style: css,
    onClick: off ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: e => setFocus(e.target.matches(":focus-visible")),
    onBlur: () => setFocus(false)
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 32,
    icon: 16
  },
  md: {
    box: 40,
    icon: 20
  },
  lg: {
    box: 48,
    icon: 24
  }
};
function IconButton({
  icon,
  label,
  tone = "ghost",
  size = "md",
  disabled = false,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const tones = {
    ghost: {
      background: hover && !disabled ? "var(--sakura-100)" : "transparent",
      color: "var(--cocoa-900)"
    },
    solid: {
      background: hover && !disabled ? "var(--sakura-600)" : "var(--sakura-500)",
      color: "#fff"
    },
    surface: {
      background: "var(--surface-card)",
      color: "var(--cocoa-900)",
      boxShadow: hover && !disabled ? "var(--shadow-md)" : "var(--shadow-sm)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: e => setFocus(e.target.matches(":focus-visible")),
    onBlur: () => setFocus(false),
    style: {
      width: s.box,
      height: s.box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: 0,
      borderRadius: "var(--radius-circle)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      outline: "none",
      padding: 0,
      transition: "background var(--dur-fast) var(--ease-drift), transform var(--dur-instant) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      ...tones[tone],
      ...(focus ? {
        boxShadow: "var(--ring-focus)"
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "rgba(46,26,13,.42)",
      backdropFilter: "blur(3px)",
      animation: "skm-fade var(--dur-base) var(--ease-settle) both"
    },
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes skm-fade{from{opacity:0}to{opacity:1}}@keyframes skm-rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}"), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-xl)",
      padding: "var(--space-8)",
      position: "relative",
      animation: "skm-rise var(--dur-slow) var(--ease-rise) both",
      ...style
    }
  }, rest), onClose ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-heading)",
      paddingRight: 36
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)"
    }
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end",
      flexWrap: "wrap"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    icon: "info",
    color: "var(--cocoa-700)",
    bg: "var(--surface-card)"
  },
  success: {
    icon: "check",
    color: "var(--state-success)",
    bg: "var(--state-success-bg)"
  },
  danger: {
    icon: "triangle-alert",
    color: "var(--state-danger)",
    bg: "var(--state-danger-bg)"
  }
};
function Toast({
  children,
  title,
  tone = "neutral",
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      minWidth: 280,
      maxWidth: 420,
      padding: "var(--space-4)",
      background: t.bg,
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      animation: "skm-toast var(--dur-slow) var(--ease-rise) both",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, "@keyframes skm-toast{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)",
      marginTop: title ? 2 : 0
    }
  }, children)), onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = "top",
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false)
  }, rest), children, on ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 40,
      ...pos,
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.45,
      padding: "7px 11px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      animation: "skm-tip var(--dur-fast) var(--ease-settle) both"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes skm-tip{from{opacity:0}to{opacity:1}}"), label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      marginTop: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--sakura-500)" : "var(--surface-card)",
      boxShadow: focus ? "var(--ring-focus)" : on ? "none" : "inset 0 0 0 1px var(--border-subtle)",
      color: "#fff",
      transition: "background var(--dur-fast) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)"
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-heading)",
      lineHeight: 1.4
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: 3,
      lineHeight: 1.5
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid, disabled) => ({
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-base)",
  color: "var(--text-heading)",
  background: disabled ? "var(--kinako-100)" : "var(--surface-card)",
  border: 0,
  borderRadius: "var(--radius-sm)",
  boxShadow: focus ? "var(--ring-focus)" : invalid ? "inset 0 0 0 1px var(--ichigo-500)" : "inset 0 0 0 1px var(--border-subtle)",
  outline: "none",
  transition: "box-shadow var(--dur-fast) var(--ease-drift)",
  opacity: disabled ? 0.55 : 1
});
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  id,
  disabled,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      ...shell(focus, !!error, disabled)
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 14,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": error ? true : undefined,
    style: {
      flex: 1,
      minWidth: 0,
      height: 46,
      padding: "0 14px",
      border: 0,
      background: "transparent",
      outline: "none",
      font: "inherit",
      color: "inherit"
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: 14,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, suffix) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--state-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 24,
  unit,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const v = value !== undefined ? value : inner;
  const set = n => {
    const c = Math.min(max, Math.max(min, n));
    if (value === undefined) setInner(c);
    onChange && onChange(c);
  };
  const box = size === "sm" ? 32 : 40;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size === "sm" ? 4 : 6,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-pill)",
      padding: 4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "minus",
    label: "One fewer",
    size: size === "sm" ? "sm" : "md",
    tone: "surface",
    disabled: v <= min,
    onClick: () => set(v - 1)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: box + 8,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: size === "sm" ? "var(--text-sm)" : "var(--text-base)",
      color: "var(--text-heading)"
    }
  }, v, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginLeft: 3
    }
  }, unit) : null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    label: "One more",
    size: size === "sm" ? "sm" : "md",
    tone: "surface",
    disabled: v >= max,
    onClick: () => set(v + 1)
  }));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RadioGroup({
  label,
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = "vertical",
  style,
  ...rest
}) {
  const auto = React.useId();
  const gname = name || auto;
  const [inner, setInner] = React.useState(defaultValue);
  const current = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    style: {
      border: 0,
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)",
      marginBottom: 2
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: direction === "horizontal" ? "row" : "column",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    const d = typeof o === "string" ? null : o.description;
    const on = current === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        cursor: "pointer",
        padding: "var(--space-3) var(--space-4)",
        borderRadius: "var(--radius-md)",
        background: on ? "var(--surface-accent)" : "var(--surface-card)",
        boxShadow: on ? "inset 0 0 0 1px var(--border-accent)" : "inset 0 0 0 1px var(--border-subtle)",
        transition: "background var(--dur-fast) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)",
        flex: direction === "horizontal" ? "1 1 160px" : undefined
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: gname,
      value: v,
      checked: on,
      onChange: () => pick(v),
      style: {
        position: "absolute",
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flex: "none",
        marginTop: 1,
        borderRadius: "var(--radius-circle)",
        background: "var(--surface-card)",
        boxShadow: on ? "inset 0 0 0 6px var(--sakura-500)" : "inset 0 0 0 1px var(--border-subtle)",
        transition: "box-shadow var(--dur-fast) var(--ease-drift)"
      }
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-base)",
        color: "var(--text-heading)",
        lineHeight: 1.4
      }
    }, l), d ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)",
        marginTop: 3
      }
    }, d) : null));
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid, disabled) => ({
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-base)",
  color: "var(--text-heading)",
  background: disabled ? "var(--kinako-100)" : "var(--surface-card)",
  border: 0,
  borderRadius: "var(--radius-sm)",
  boxShadow: focus ? "var(--ring-focus)" : invalid ? "inset 0 0 0 1px var(--ichigo-500)" : "inset 0 0 0 1px var(--border-subtle)",
  outline: "none",
  transition: "box-shadow var(--dur-fast) var(--ease-drift)",
  opacity: disabled ? 0.55 : 1
});
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  disabled,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      ...shell(focus, !!error, disabled)
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      height: 46,
      padding: "0 40px 0 14px",
      border: 0,
      background: "transparent",
      outline: "none",
      font: "inherit",
      color: "inherit",
      appearance: "none",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 13,
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--state-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInner(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-heading)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, description) : null), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      height: 28,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      position: "relative",
      background: on ? "var(--sakura-500)" : "var(--kinako-200)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "background var(--dur-base) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 25 : 3,
      width: 22,
      height: 22,
      borderRadius: "var(--radius-circle)",
      background: "#fff",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--dur-base) var(--ease-settle)"
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid, disabled) => ({
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-base)",
  color: "var(--text-heading)",
  background: disabled ? "var(--kinako-100)" : "var(--surface-card)",
  border: 0,
  borderRadius: "var(--radius-sm)",
  boxShadow: focus ? "var(--ring-focus)" : invalid ? "inset 0 0 0 1px var(--ichigo-500)" : "inset 0 0 0 1px var(--border-subtle)",
  outline: "none",
  transition: "box-shadow var(--dur-fast) var(--ease-drift)",
  opacity: disabled ? 0.55 : 1
});
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  disabled,
  style,
  ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": error ? true : undefined,
    style: {
      ...shell(focus, !!error, disabled),
      padding: "12px 14px",
      resize: "vertical",
      lineHeight: "var(--leading-normal)"
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--state-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      flexWrap: "wrap",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const label = it.label ?? it;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--text-heading)",
        fontWeight: "var(--weight-medium)"
      }
    }, label) : /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate && onNavigate(it.value ?? label, i),
      style: {
        border: 0,
        background: "transparent",
        padding: "2px 4px",
        borderRadius: "var(--radius-xs)",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)"
      }
    }, label), last ? null : /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--kinako-300)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const current = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const isPill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: isPill ? 6 : 4,
      alignItems: "center",
      background: isPill ? "var(--surface-sunken)" : "transparent",
      borderRadius: isPill ? "var(--radius-pill)" : 0,
      padding: isPill ? 5 : 0,
      boxShadow: isPill ? "none" : "inset 0 -1px 0 var(--border-subtle)",
      overflowX: "auto",
      ...style
    }
  }, rest), tabs.map(t => {
    const v = t.value ?? t;
    const l = t.label ?? t;
    const on = current === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        border: 0,
        cursor: "pointer",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
        padding: isPill ? "9px 18px" : "11px 14px",
        borderRadius: isPill ? "var(--radius-pill)" : 0,
        background: isPill ? on ? "var(--surface-card)" : "transparent" : "transparent",
        color: on ? "var(--text-heading)" : "var(--text-muted)",
        boxShadow: isPill ? on ? "var(--shadow-xs)" : "none" : on ? "inset 0 -2px 0 var(--sakura-500)" : "none",
        transition: "color var(--dur-fast) var(--ease-drift), background var(--dur-fast) var(--ease-drift), box-shadow var(--dur-fast) var(--ease-drift)"
      }
    }, l, t.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        color: "var(--text-muted)",
        marginLeft: 6
      }
    }, t.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Frames.jsx
try { (() => {
const {
  Logo,
  FlavourTag,
  PriceTag,
  HandwrittenNote,
  Badge
} = window.SakuramachiDesignSystem_098924;

/* Every frame is authored at true export size (1080 square / 1080×1920 story)
   and scaled down for the board. Copy the frame, swap the photo, ship. */

function Frame({
  w = 1080,
  h = 1080,
  scale = 0.4,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale,
      height: h * scale,
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      position: "relative",
      background: "var(--cream-50)"
    }
  }, children)), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)",
      fontFamily: "var(--font-body)"
    }
  }, label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-muted)"
    }
  }, w, "\xD7", h)));
}

/* 1 — full-bleed photo announcement */
function PostAnnouncement({
  scale
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    scale: scale,
    label: "Post \xB7 new bake"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/strawberry-shortcake-naked.jpeg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-photo-strong)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 64,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(FlavourTag, {
    flavour: "ichigo",
    onPhoto: true,
    style: {
      fontSize: 30,
      padding: "14px 28px",
      gap: 14
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      right: 64,
      bottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.9)",
      fontFamily: "var(--font-body)",
      fontWeight: 500
    }
  }, "This week's bake"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 96,
      lineHeight: 1.05,
      letterSpacing: "var(--tracking-display)",
      color: "#fff",
      marginTop: 20
    }
  }, "Strawberry", /*#__PURE__*/React.createElement("br", null), "shortcake"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      transform: "translate(-0.115em,-0.095em)",
      fontFamily: "var(--font-script)",
      fontSize: 58,
      color: "var(--sakura-300)",
      marginTop: 22
    }
  }, "oishii~")));
}

/* 2 — menu list on cream */
function PostMenu({
  scale
}) {
  const items = window.SKM_DATA.products.filter(p => p.cat === "bakes").slice(0, 6);
  return /*#__PURE__*/React.createElement(Frame, {
    scale: scale,
    label: "Post \xB7 this week's list"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--wash-cream)",
      padding: 76,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 300
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--sakura-700)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      marginTop: 34
    }
  }, "Saturday pickup"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      flex: 1
    }
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 44,
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-display)",
      whiteSpace: "nowrap"
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderBottom: "2px dotted var(--kinako-300)",
      transform: "translateY(-8px)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 38,
      color: "var(--text-price)"
    }
  }, "$", p.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      transform: "translate(-0.115em,-0.095em)",
      fontFamily: "var(--font-script)",
      fontSize: 52,
      color: "var(--sakura-600)"
    }
  }, "message us to reserve!!")));
}

/* 3 — four-up flavour grid */
function PostGrid({
  scale
}) {
  const shots = ["../../assets/photography/cookies-four-flavours.jpeg", "../../assets/photography/madeleines-chocolate.jpeg", "../../assets/photography/cupcakes-creamcheese-box.jpeg", "../../assets/photography/brownies-box.jpeg"];
  return /*#__PURE__*/React.createElement(Frame, {
    scale: scale,
    label: "Post \xB7 flavour drop"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--sakura-200)",
      padding: 56,
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 22,
      flex: 1
    }
  }, shots.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      borderRadius: 28,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 68,
      lineHeight: 1.06,
      letterSpacing: "var(--tracking-display)",
      color: "var(--cocoa-900)"
    }
  }, "Everything on", /*#__PURE__*/React.createElement("br", null), "the rack today"), /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 230
  }))));
}

/* 4 — story: order reminder */
function StoryReminder({
  scale
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: scale,
    label: "Story \xB7 pre-order reminder"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--wash-sakura)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 150,
      left: 80,
      right: 80,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 300
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 340,
      left: 80,
      right: 80,
      height: 860,
      borderRadius: 44,
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/matcha-cake-whole.jpeg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 1260,
      left: 80,
      right: 80,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--sakura-700)",
      fontFamily: "var(--font-body)",
      fontWeight: 500
    }
  }, "Closing tonight"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 86,
      lineHeight: 1.08,
      letterSpacing: "var(--tracking-display)",
      color: "var(--cocoa-900)",
      marginTop: 24
    }
  }, "Matcha layer cake,", /*#__PURE__*/React.createElement("br", null), "Saturday pickup"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      alignItems: "baseline",
      justifyContent: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 64,
      color: "var(--text-price)"
    }
  }, "$42"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 32,
      color: "var(--text-muted)"
    }
  }, "6\" \u2014 serves 6\u20138")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 116,
      padding: "0 60px",
      borderRadius: 999,
      background: "var(--sakura-500)",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: 42,
      fontWeight: 500
    }
  }, "Message us to reserve")));
}

/* 5 — story: gift box */
function StoryGift({
  scale
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: scale,
    label: "Story \xB7 gift boxes"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/giftbox-pink-handwritten.jpeg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(46,26,13,.68) 0%,rgba(46,26,13,0) 30%,rgba(46,26,13,0) 44%,rgba(46,26,13,.9) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 120,
      left: 80,
      right: 80,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 280,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      right: 80,
      bottom: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 92,
      lineHeight: 1.08,
      letterSpacing: "var(--tracking-display)",
      color: "#fff"
    }
  }, "We write on", /*#__PURE__*/React.createElement("br", null), "the lid by hand"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      transform: "translate(-0.115em,-0.095em)",
      fontFamily: "var(--font-script)",
      fontSize: 56,
      color: "var(--sakura-300)",
      marginTop: 30,
      lineHeight: 1.35
    }
  }, "let's share the love", /*#__PURE__*/React.createElement("br", null), "(or a slice of cake)!!")));
}

/* 6 — story: sold out */
function StorySoldOut({
  scale
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: scale,
    label: "Story \xB7 sold out"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--cream-50)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 980,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/chocolate-cake-whole.jpeg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 880,
      left: 64,
      right: 64,
      background: "var(--surface-card)",
      borderRadius: 48,
      boxShadow: "var(--shadow-xl)",
      padding: 72,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    style: {
      fontSize: 28,
      padding: "14px 28px"
    }
  }, "Sold out for Saturday")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 80,
      lineHeight: 1.1,
      letterSpacing: "var(--tracking-display)",
      color: "var(--cocoa-900)",
      marginTop: 36
    }
  }, "Chocolate fudge cake"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "28px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: 38,
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, "Sunday still has room. Message us and we'll hold one."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(HandwrittenNote, {
    tone: "plain",
    size: 46,
    lines: ["see you next weekend!!"],
    style: {
      color: "var(--sakura-600)"
    }
  }))));
}
Object.assign(window, {
  Frame,
  PostAnnouncement,
  PostMenu,
  PostGrid,
  StoryReminder,
  StoryGift,
  StorySoldOut
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Frames.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  Dialog,
  Toast,
  Button,
  HandwrittenNote
} = window.SakuramachiDesignSystem_098924;
function App() {
  const [route, setRoute] = React.useState("home");
  const [productId, setProductId] = React.useState("shortcake");
  const [box, setBox] = React.useState({
    shortcake: 1,
    madeleines: 2
  });
  const [toast, setToast] = React.useState(null);
  const [placed, setPlaced] = React.useState(false);
  const go = r => {
    setRoute(r);
    window.scrollTo({
      top: 0
    });
  };
  const openProduct = id => {
    setProductId(id);
    go("product");
  };
  const count = Object.values(box).reduce((a, b) => a + b, 0);
  const add = (id, q) => {
    setBox(b => ({
      ...b,
      [id]: (b[id] || 0) + q
    }));
    const p = window.SKM_DATA.products.find(x => x.id === id);
    setToast({
      tone: "success",
      title: "In your box",
      body: `${q} × ${p.name}.`
    });
  };
  const setQty = (id, n) => setBox(b => ({
    ...b,
    [id]: n
  }));
  const remove = id => setBox(b => {
    const c = {
      ...b
    };
    delete c[id];
    return c;
  });
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--bg-page)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    go: go,
    boxCount: count,
    onOpenBox: () => go("box")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, route === "home" ? /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    openProduct: openProduct,
    add: add
  }) : null, route === "menu" ? /*#__PURE__*/React.createElement(MenuScreen, {
    openProduct: openProduct,
    add: add
  }) : null, route === "story" ? /*#__PURE__*/React.createElement(StoryScreen, {
    go: go
  }) : null, route === "product" ? /*#__PURE__*/React.createElement(ProductScreen, {
    id: productId,
    go: go,
    openProduct: openProduct,
    add: add
  }) : null, route === "box" ? /*#__PURE__*/React.createElement(BoxScreen, {
    box: box,
    setQty: setQty,
    remove: remove,
    go: go,
    onPlace: () => setPlaced(true)
  }) : null), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: toast.tone,
    title: toast.title,
    onDismiss: () => setToast(null)
  }, toast.body)) : null, /*#__PURE__*/React.createElement(Dialog, {
    open: placed,
    title: "It's on the oven list",
    width: 470,
    description: "We'll message you the moment it's boxed. Nothing has been charged \u2014 you pay when you collect.",
    onClose: () => setPlaced(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      tone: "ghost",
      onClick: () => {
        setPlaced(false);
        go("menu");
      }
    }, "Keep browsing"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setPlaced(false);
        setBox({});
        go("home");
      }
    }, "Lovely, thank you"))
  }, /*#__PURE__*/React.createElement(HandwrittenNote, {
    to: "Somushwar",
    lines: ["Merry Christmas", "& Happy Holidays"],
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-5) 0 0",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "SKM-2418 \xB7 Saturday 11:00\u201313:00")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BoxScreen.jsx
try { (() => {
const {
  Button,
  Card,
  PriceTag,
  QuantityStepper,
  Input,
  RadioGroup,
  Checkbox,
  Textarea,
  Icon,
  IconButton,
  SectionHeading,
  HandwrittenNote,
  Badge
} = window.SakuramachiDesignSystem_098924;
function BoxScreen({
  box,
  setQty,
  remove,
  go,
  onPlace
}) {
  const D = window.SKM_DATA;
  const lines = Object.entries(box).map(([id, q]) => ({
    p: D.products.find(x => x.id === id),
    q
  })).filter(l => l.p);
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.q, 0);
  const [gift, setGift] = React.useState(true);
  const [name, setName] = React.useState("Somushwar");
  const giftFee = gift ? 4 : 0;
  if (!lines.length) {
    return /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 620,
        margin: "0 auto",
        padding: "var(--space-24) var(--page-gutter)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 64,
        height: 64,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-circle)",
        background: "var(--sakura-100)",
        color: "var(--sakura-600)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag",
      size: 28
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "var(--space-6) 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--text-3xl)",
        letterSpacing: "var(--tracking-display)",
        color: "var(--text-heading)"
      }
    }, "Your box is empty"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "var(--space-3) 0 0",
        color: "var(--text-muted)"
      }
    }, "Everything's still cooling on the rack!!"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => go("menu")
    }, "See everything we bake")));
  }
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-12) var(--page-gutter) 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Your box",
    title: "Let's get this packed"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)",
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, lines.map(({
    p,
    q
  }) => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    padded: false,
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "center",
      padding: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      height: 92,
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-display)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, p.unit), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "sm",
    value: q,
    onChange: n => setQty(p.id, n),
    min: 1,
    max: 12
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    amount: p.price * q
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "trash-2",
    label: `Remove ${p.name}`,
    size: "sm",
    onClick: () => remove(p.id)
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-display)"
    }
  }, "When and who for"), /*#__PURE__*/React.createElement(RadioGroup, {
    label: "Pickup window",
    defaultValue: "sat",
    options: [{
      value: "sat",
      label: "Saturday morning",
      description: "11:00 – 13:00"
    }, {
      value: "sun",
      label: "Sunday morning",
      description: "10:00 – 12:00"
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Who's this for?",
    value: name,
    onChange: e => setName(e.target.value),
    hint: "We write it on the lid by hand."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "0400 000 000",
    hint: "We'll message you the moment it's boxed."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Make it a gift box",
    description: "Pink box, handwritten lid. +$4",
    checked: gift,
    onChange: e => setGift(e.target.checked)
  }), gift ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Message for the lid",
    rows: 3,
    defaultValue: "Merry Christmas\n& Happy Holidays",
    hint: "Two more lines after their name."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)",
      marginBottom: "var(--space-2)"
    }
  }, "How the lid will read"), /*#__PURE__*/React.createElement(HandwrittenNote, {
    to: name || "Friend",
    lines: ["Merry Christmas", "& Happy Holidays"],
    size: 21
  }))) : null)), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    style: {
      position: "sticky",
      top: 96,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      color: "var(--text-heading)",
      letterSpacing: "var(--tracking-display)"
    }
  }, "Order summary"), lines.map(({
    p,
    q
  }) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, p.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)"
    }
  }, "\xD7", q)), /*#__PURE__*/React.createElement(PriceTag, {
    amount: p.price * q,
    size: "sm"
  }))), gift ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Gift box & handwriting"), /*#__PURE__*/React.createElement(PriceTag, {
    amount: 4,
    size: "sm"
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)"
    }
  }, "Total"), /*#__PURE__*/React.createElement(PriceTag, {
    amount: subtotal + giftFee,
    size: "lg"
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    size: "sm",
    style: {
      alignSelf: "flex-start"
    }
  }, "Placeholder pricing"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    onClick: onPlace
  }, "Place the order"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-normal)"
    }
  }, "Nothing is charged here. We message you to confirm, then you pay on pickup."))));
}
Object.assign(window, {
  BoxScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BoxScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Button,
  IconButton,
  Badge,
  Icon
} = window.SakuramachiDesignSystem_098924;
const NAV = [{
  key: "home",
  label: "Home"
}, {
  key: "menu",
  label: "Menu"
}, {
  key: "story",
  label: "Our story"
}];
function Header({
  route,
  go,
  boxCount,
  onOpenBox
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(255,253,248,.88)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--page-gutter)",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      display: "flex"
    },
    "aria-label": "Sakuramachi home"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 110
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 2,
      marginLeft: "var(--space-4)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.key,
    onClick: () => go(n.key),
    style: {
      border: 0,
      background: route === n.key ? "var(--sakura-100)" : "transparent",
      color: route === n.key ? "var(--cocoa-900)" : "var(--text-muted)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: route === n.key ? "var(--weight-medium)" : "var(--weight-regular)",
      padding: "9px 15px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "background var(--dur-fast) var(--ease-drift), color var(--dur-fast) var(--ease-drift)"
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Search the menu"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenBox,
    "aria-label": `Your box, ${boxCount} items`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 40,
      padding: "0 16px 0 14px",
      border: 0,
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      background: boxCount ? "var(--sakura-100)" : "transparent",
      color: "var(--cocoa-900)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      transition: "background var(--dur-fast) var(--ease-drift)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 18
  }), "Your box", boxCount ? /*#__PURE__*/React.createElement(Badge, {
    tone: "sakura",
    size: "sm"
  }, boxCount) : null))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--cream-100)",
      borderTop: "1px solid var(--border-subtle)",
      marginTop: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--page-gutter) var(--space-10)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 130
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-muted)",
      maxWidth: "34ch"
    }
  }, "The town of cherry blossom. Small-batch Japanese- and Korean-inspired pastries, baked to order and boxed by hand.")), [{
    h: "Menu",
    items: ["Cakes", "Cupcakes", "Cookies", "Bakes & sweets"]
  }, {
    h: "Ordering",
    items: ["How it works", "Lead times", "Pickup & delivery", "Allergens"]
  }, {
    h: "Say hello",
    items: ["Instagram", "Message us", "Gift boxes", "Large orders"]
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--sakura-700)",
      fontWeight: "var(--weight-medium)"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "var(--space-4) 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("menu");
    },
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-6) var(--page-gutter) var(--space-10)",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "\xA9 Sakuramachi. Every price on this site is placeholder data."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-script)",
      fontSize: 22,
      color: "var(--sakura-600)",
      transform: "translate(-0.115em,-0.095em)"
    }
  }, "let's share the love (or a slice of cake)!!")));
}
function Band({
  children,
  tone = "cream",
  style
}) {
  const bg = tone === "wash" ? "var(--wash-sakura)" : tone === "sunken" ? "var(--cream-100)" : "transparent";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--page-gutter)"
    }
  }, children));
}
Object.assign(window, {
  Header,
  Footer,
  Band
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  SectionHeading,
  ProductCard,
  Button,
  Badge,
  Icon,
  HandwrittenNote
} = window.SakuramachiDesignSystem_098924;
function HomeScreen({
  go,
  openProduct,
  add
}) {
  const D = window.SKM_DATA;
  const featured = ["shortcake", "matcha", "madeleines", "cookie-box"].map(id => D.products.find(p => p.id === id));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wash-sakura)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-20) var(--page-gutter) var(--space-12)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--sakura-700)",
      fontWeight: "var(--weight-medium)"
    }
  }, "Baked to order, in small batches"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "var(--space-4) auto 0",
      maxWidth: "16ch",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(var(--text-3xl), 5.2vw, var(--text-6xl))",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-heading)"
    }
  }, "Come sit under the blossom"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-5) auto 0",
      maxWidth: "52ch",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)"
    }
  }, "Sakuramachi means the town of cherry blossom. Everything is folded, whipped and baked the morning you collect it, then boxed by hand with your name on the lid."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-8) 0 0",
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("menu")
  }, "See everything we bake"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    tone: "outline",
    iconRight: "chevron-right",
    onClick: () => go("story")
  }, "How ordering works")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      aspectRatio: "16 / 7"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/strawberry-shortcake-naked.jpeg",
    alt: "A naked strawberry shortcake on a turntable",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "This week's bake",
    title: "Cooling on the rack right now",
    script: "oishii~"
  }), /*#__PURE__*/React.createElement(Button, {
    tone: "ghost",
    iconRight: "chevron-right",
    onClick: () => go("menu")
  }, "See the whole menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))",
      gap: "var(--space-6)"
    }
  }, featured.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    blurb: p.blurb,
    image: p.img,
    imageAlt: p.name,
    flavour: p.flavour,
    price: p.price,
    unit: p.unit,
    onClick: () => openProduct(p.id),
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "plus",
      onClick: e => {
        e.stopPropagation();
        add(p.id, 1);
      }
    }, "Add")
  })))), /*#__PURE__*/React.createElement(Band, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      aspectRatio: "4 / 3"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/giftbox-pink-handwritten.jpeg",
    alt: "A pink gift box with a handwritten message on the side",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Hanami",
    title: "Every box is written on by hand",
    lede: "Hanami (flower viewing) is sitting still while the blossom falls \u2014 breathtaking, calming, worries washed away. That is what we are trying to hand you in a box."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(HandwrittenNote, {
    to: "Somushwar",
    lines: ["Merry Christmas", "& Happy Holidays"],
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "outline",
    iconRight: "chevron-right",
    onClick: () => go("story")
  }, "Read our story"))))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "How it works",
    title: "Three days, start to lid"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, [{
    i: "message-circle",
    h: "Tell us what you'd like",
    b: "Pick from the menu or message us. Cakes need 48 hours; cookies and bakes need one day."
  }, {
    i: "chef-hat",
    h: "We bake it that morning",
    b: "Nothing sits in a fridge overnight. Sponges are folded, creams are whipped, chocolate is tempered by hand."
  }, {
    i: "gift",
    h: "Boxed with your name on it",
    b: "White box and gold board for cakes, pink box and black marker if it's a gift."
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.h,
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 44,
      height: 44,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-circle)",
      background: "var(--sakura-100)",
      color: "var(--sakura-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.i,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "var(--space-4) 0 0",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-heading)"
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-2) 0 0",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-muted)"
    }
  }, s.b))))), /*#__PURE__*/React.createElement(Band, {
    tone: "wash"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "hojicha",
    size: "sm"
  }, "Pre-order"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "var(--space-4) 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-3xl)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-heading)"
    }
  }, "Cakes for the table you're bringing it to"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)",
      maxWidth: "38ch"
    }
  }, "Whole cakes need 48 hours. Tell us the date and we'll have it boxed and on a gold board the morning you collect it."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    tone: "secondary",
    onClick: () => go("menu")
  }, "Reserve a cake"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      aspectRatio: "4 / 3"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/apple-spice-cake.jpeg",
    alt: "An apple spice cake with cream rosettes and fanned apple slices",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuScreen.jsx
try { (() => {
const {
  SectionHeading,
  ProductCard,
  Button,
  Tabs,
  Icon
} = window.SakuramachiDesignSystem_098924;
function MenuScreen({
  openProduct,
  add
}) {
  const D = window.SKM_DATA;
  const [cat, setCat] = React.useState("cakes");
  const [filter, setFilter] = React.useState("Everything");
  const list = D.products.filter(p => p.cat === cat).filter(p => filter !== "Nut free" || !/nut/i.test(p.allergens));
  const counts = Object.fromEntries(D.categories.map(c => [c.value, D.products.filter(p => p.cat === c.value).length]));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wash-sakura)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--page-gutter) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The menu",
    title: "Everything we bake",
    lede: "Made to order in small batches. Cakes need 48 hours' notice; everything else needs a day."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 72,
      zIndex: 20,
      background: "rgba(255,253,248,.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-3) var(--page-gutter)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: cat,
    onChange: setCat,
    tabs: D.categories.map(c => ({
      ...c,
      count: counts[c.value]
    })),
    style: {
      boxShadow: "none",
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: filter,
    onChange: setFilter,
    tabs: ["Everything", "Nut free"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-10) var(--page-gutter) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
      gap: "var(--space-6)"
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    blurb: p.blurb,
    image: p.img,
    imageAlt: p.name,
    flavour: p.flavour,
    price: p.price,
    unit: p.unit,
    onClick: () => openProduct(p.id),
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "plus",
      onClick: e => {
        e.stopPropagation();
        add(p.id, 1);
      }
    }, "Add")
  }))), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-20) 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      color: "var(--text-heading)"
    }
  }, "Nothing here yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-2) 0 0",
      color: "var(--text-muted)"
    }
  }, "Everything's still cooling on the rack!!")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      background: "var(--state-info-bg)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--state-info)",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--sakura-700)"
    }
  }, "Everything is baked in a home kitchen that handles wheat, egg, dairy, soy and tree nuts. Tell us about an allergy when you order and we'll be straight with you about what we can do."))));
}
Object.assign(window, {
  MenuScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
const {
  Breadcrumb,
  Button,
  FlavourTag,
  PriceTag,
  RadioGroup,
  Checkbox,
  Textarea,
  QuantityStepper,
  ProductCard,
  Icon,
  Badge,
  SectionHeading
} = window.SakuramachiDesignSystem_098924;
function ProductScreen({
  id,
  go,
  openProduct,
  add
}) {
  const D = window.SKM_DATA;
  const p = D.products.find(x => x.id === id) || D.products[0];
  const gallery = [p.hero, p.img].filter(Boolean);
  const [shot, setShot] = React.useState(0);
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState("standard");
  const [gift, setGift] = React.useState(false);
  const alsoLike = D.products.filter(x => x.id !== p.id && x.cat === p.cat).slice(0, 3);
  const catLabel = (D.categories.find(c => c.value === p.cat) || {}).label;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-6) var(--page-gutter) 0"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ["Menu", catLabel, p.name],
    onNavigate: v => {
      if (v === "Menu") go("menu");
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      aspectRatio: "4 / 5",
      background: "var(--cream-200)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[shot],
    alt: p.name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), gallery.length > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-3)"
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: g,
    onClick: () => setShot(i),
    "aria-label": `View photo ${i + 1}`,
    style: {
      width: 76,
      height: 76,
      padding: 0,
      border: 0,
      cursor: "pointer",
      overflow: "hidden",
      borderRadius: "var(--radius-md)",
      boxShadow: i === shot ? "0 0 0 2px var(--sakura-500)" : "var(--shadow-xs)",
      transition: "box-shadow var(--dur-fast) var(--ease-drift)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FlavourTag, {
    flavour: p.flavour
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    size: "sm"
  }, "Baked to order")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "var(--space-4) 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-4xl)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-heading)"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)",
      maxWidth: "var(--prose-max)"
    }
  }, p.long), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    amount: p.price,
    unit: p.unit,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, p.cat === "cakes" ? /*#__PURE__*/React.createElement(RadioGroup, {
    label: "Size",
    direction: "horizontal",
    value: size,
    onChange: setSize,
    options: [{
      value: "standard",
      label: p.unit
    }, {
      value: "large",
      label: '8" — serves 10–12',
      description: "+$14"
    }]
  }) : null, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Make it a gift box",
    description: "Pink box, three lines written on the lid in black marker. +$4",
    checked: gift,
    onChange: e => setGift(e.target.checked)
  }), gift ? /*#__PURE__*/React.createElement(Textarea, {
    label: "Message for the lid",
    rows: 3,
    defaultValue: "Somushwar, welcome to Sakuramachi",
    hint: "Three short lines fit. We start with their name."
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty,
    min: 1,
    max: 12
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconLeft: "plus",
    onClick: () => add(p.id, qty),
    style: {
      flex: 1,
      minWidth: 200
    }
  }, "Add to box")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)"
    }
  }, [{
    i: "clock",
    t: p.cat === "cakes" ? "48 hours' notice for cakes" : "One day's notice"
  }, {
    i: "map-pin",
    t: "Pickup Saturday & Sunday mornings"
  }, {
    i: "wheat",
    t: `Allergens: ${p.allergens}`
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.i,
    size: 17
  })), r.t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Goes well with",
    title: "People add these too"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
      gap: "var(--space-6)"
    }
  }, alsoLike.map(x => /*#__PURE__*/React.createElement(ProductCard, {
    key: x.id,
    name: x.name,
    blurb: x.blurb,
    image: x.img,
    imageAlt: x.name,
    flavour: x.flavour,
    price: x.price,
    unit: x.unit,
    onClick: () => {
      setShot(0);
      setQty(1);
      openProduct(x.id);
    },
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "plus",
      onClick: e => {
        e.stopPropagation();
        add(x.id, 1);
      }
    }, "Add")
  })))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StoryScreen.jsx
try { (() => {
const {
  SectionHeading,
  Button,
  Icon,
  HandwrittenNote
} = window.SakuramachiDesignSystem_098924;
function StoryScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wash-sakura)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "var(--space-20) var(--page-gutter) var(--space-16)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our story",
    title: "The town of cherry blossom",
    script: "kawaa~",
    lede: "Sakuramachi (sah-koo-rah-mah-chi) means the town of cherry blossom. It started as one sponge cake on a dining table and became a standing order for half the street."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "var(--space-16) var(--page-gutter) 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, "Imagine watching the most beautiful hanami (flower viewing), with the most enchanting cherry blossom falling; breathtaking, calming, bringing peace to the soul, washing away your every worry. That is the experience Sakuramachi is trying to be."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-6) 0 0",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, "In practice that means small batches, a home oven, and no shortcuts we would be embarrassed about. Sponges are folded by hand. Chocolate is tempered on a marble bench. Nothing is baked until you have asked for it."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-12) 0",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      aspectRatio: "16 / 9"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/matcha-cake-whole.jpeg",
    alt: "A matcha layer cake with one slice removed",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Ordering",
    title: "What to expect"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, [{
    i: "clock",
    h: "Lead time",
    b: "Cakes need 48 hours. Cookies, brownies and madeleines need one day. Tempered chocolate depends on the weather."
  }, {
    i: "map-pin",
    h: "Pickup",
    b: "Saturday 11:00–13:00 and Sunday 10:00–12:00. Local delivery on Saturdays for whole cakes."
  }, {
    i: "credit-card",
    h: "Paying",
    b: "Nothing is charged when you order. We message you to confirm, then you pay when you collect."
  }, {
    i: "wheat",
    h: "Allergens",
    b: "One home kitchen, handling wheat, egg, dairy, soy and tree nuts. Tell us about an allergy and we'll be straight with you."
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.h,
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "flex-start",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 40,
      height: 40,
      flex: "none",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-circle)",
      background: "var(--sakura-100)",
      color: "var(--sakura-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.i,
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-heading)"
    }
  }, r.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-muted)"
    }
  }, r.b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(HandwrittenNote, {
    tone: "plain",
    size: 30,
    lines: ["let's share the love", "(or a slice of cake)!!"],
    style: {
      color: "var(--sakura-600)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("menu")
  }, "See everything we bake")))));
}
Object.assign(window, {
  StoryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Sakuramachi menu data.
   Product names, flavours and photography are REAL (read off the founder's photographs).
   Every PRICE and LEAD TIME is placeholder — no pricing appears in any supplied asset. */
window.SKM_DATA = {
  categories: [{
    value: "cakes",
    label: "Cakes"
  }, {
    value: "cupcakes",
    label: "Cupcakes"
  }, {
    value: "cookies",
    label: "Cookies"
  }, {
    value: "bakes",
    label: "Bakes & sweets"
  }],
  products: [{
    id: "shortcake",
    cat: "cakes",
    name: "Strawberry shortcake",
    flavour: "ichigo",
    price: 46,
    unit: '6" — serves 6–8',
    blurb: "Cloud-light sponge, barely-sweet cream, whole strawberries between every layer.",
    long: "The one the logo is drawn from. Japanese-style sponge baked the same morning, folded with lightly whipped cream and fresh strawberries. Sweet enough to be a cake, restrained enough to eat a second slice.",
    img: "../../assets/photography/strawberry-shortcake-naked.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "matcha",
    cat: "cakes",
    name: "Matcha layer cake",
    flavour: "matcha",
    price: 42,
    unit: '6" — serves 6–8',
    blurb: "Green tea sponge with hojicha buttercream between three tender layers.",
    long: "Ceremonial-grade matcha folded into a chiffon sponge, layered with a roasted-barley buttercream that keeps the bitterness company instead of hiding it.",
    img: "../../assets/photography/matcha-cake-slice.jpeg",
    hero: "../../assets/photography/matcha-cake-whole.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "fudge",
    cat: "cakes",
    name: "Chocolate fudge cake",
    flavour: "cocoa",
    price: 44,
    unit: '6" — serves 8–10',
    blurb: "Three dark, damp layers under a thick chocolate buttercream.",
    long: "Dutch cocoa and hot coffee in the batter, so the crumb stays damp for days. Finished with a soft chocolate buttercream, swirled by hand.",
    img: "../../assets/photography/chocolate-cake-slice.jpeg",
    hero: "../../assets/photography/chocolate-cake-whole.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "apple",
    cat: "cakes",
    name: "Apple spice cake",
    flavour: "vanilla",
    price: 40,
    unit: '7" — serves 8–10',
    blurb: "Warm spiced crumb, cream rosettes, fanned apple across the top.",
    long: "Cinnamon, nutmeg and grated apple in the batter; piped cream and thin apple fans on top. Autumn on a gold board.",
    img: "../../assets/photography/apple-spice-cake.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "creamcheese",
    cat: "cakes",
    name: "Cream cheese nut cake",
    flavour: "vanilla",
    price: 40,
    unit: '6" — serves 6–8',
    blurb: "Rough-swirled cream cheese frosting over a soft, nutty crumb.",
    long: "Frosted freehand — the swirl is never the same twice. Toasted nuts folded through the batter and pressed into the sides.",
    img: "../../assets/photography/cake-creamcheese-whole.jpeg",
    allergens: "Wheat, egg, dairy, tree nuts"
  }, {
    id: "vanilla",
    cat: "cakes",
    name: "Vanilla cream cake",
    flavour: "vanilla",
    price: 38,
    unit: '7" — serves 8–10',
    blurb: "Plain, tall and generous. The one to write a name on.",
    long: "Vanilla sponge under a thick swirl of whipped cream, on a gold board in a white box. Say the word and we'll write on the lid.",
    img: "../../assets/photography/cake-vanilla-boxed.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "cc-choc",
    cat: "cupcakes",
    name: "Chocolate cupcakes",
    flavour: "cocoa",
    price: 18,
    unit: "box of 6",
    blurb: "Dark, damp cupcakes under a tall rose of chocolate buttercream.",
    long: "Piped in a single rose, six to a window box. The buttercream is soft enough to smudge — that is on purpose.",
    img: "../../assets/photography/cupcakes-chocolate-box.jpeg",
    hero: "../../assets/photography/cupcakes-chocolate-trio.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "cc-spice",
    cat: "cupcakes",
    name: "Spiced cupcakes, cream cheese",
    flavour: "vanilla",
    price: 18,
    unit: "box of 6",
    blurb: "Soft spiced sponge with a swirl of tangy cream cheese frosting.",
    long: "Cinnamon-warm, not sweet. The cream cheese does the balancing.",
    img: "../../assets/photography/cupcakes-creamcheese-box.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "cookie-box",
    cat: "cookies",
    name: "Cookie box — four flavours",
    flavour: "cocoa",
    price: 20,
    unit: "box of 4",
    blurb: "Red velvet, double chocolate, matcha white chocolate, classic chocolate chip.",
    long: "One of each, thick and soft in the middle. The matcha one has white chocolate chunks; the red velvet has them too.",
    img: "../../assets/photography/cookies-four-flavours.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "cookie-biscoff",
    cat: "cookies",
    name: "Biscoff-stuffed cookies",
    flavour: "vanilla",
    price: 16,
    unit: "box of 4",
    blurb: "Molten Biscoff in the middle, a whole biscuit pressed on top.",
    long: "Chilled overnight, baked to order, still soft when they reach you.",
    img: "../../assets/photography/cookies-biscoff.jpeg",
    allergens: "Wheat, egg, dairy, soy"
  }, {
    id: "brownies",
    cat: "bakes",
    name: "Fudgy brownies",
    flavour: "cocoa",
    price: 16,
    unit: "box of 6",
    blurb: "Crackly paper-thin top, dense and dark all the way down.",
    long: "Whipped eggs and sugar for that shattering top. Underbaked on purpose.",
    img: "../../assets/photography/brownies-box.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "madeleines",
    cat: "bakes",
    name: "Madeleines",
    flavour: "vanilla",
    price: 15,
    unit: "box of 6",
    blurb: "Buttery, shell-ridged, with the bump. Eat them warm.",
    long: "Rested overnight so they rise into a proper hump. Best within the hour.",
    img: "../../assets/photography/madeleines-plain.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "madeleines-choc",
    cat: "bakes",
    name: "Chocolate-shelled madeleines",
    flavour: "cocoa",
    price: 18,
    unit: "box of 6",
    blurb: "Cocoa madeleine dipped shell-side into tempered milk chocolate.",
    long: "The shell snaps. Tempered by hand, which is why they only appear some weeks.",
    img: "../../assets/photography/madeleines-chocolate.jpeg",
    allergens: "Wheat, egg, dairy, soy"
  }, {
    id: "banana",
    cat: "bakes",
    name: "Banana bread",
    flavour: "vanilla",
    price: 14,
    unit: "whole loaf",
    blurb: "Very ripe bananas, brown butter, a soft open crumb.",
    long: "Sliced thick, with a spoon of cream if you like. Keeps three days wrapped.",
    img: "../../assets/photography/banana-bread.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "cheesecake",
    cat: "bakes",
    name: "Baked cheesecake",
    flavour: "vanilla",
    price: 40,
    unit: '7" — serves 8',
    blurb: "Dense baked cheesecake on a biscuit base, with dulce de leche.",
    long: "Baked low and slow so it sets without a crack. A spoon of dulce de leche on each slice.",
    img: "../../assets/photography/cheesecake-slice.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "tres-leches",
    cat: "bakes",
    name: "Tres leches",
    flavour: "ichigo",
    price: 9,
    unit: "each",
    blurb: "Milk-soaked sponge under cream, one strawberry, in its own tin.",
    long: "Soaked the night before so the sponge gives way completely. Travels in its own foil tin.",
    img: "../../assets/photography/tres-leches-tins.jpeg",
    allergens: "Wheat, egg, dairy"
  }, {
    id: "chocolate-bar",
    cat: "bakes",
    name: "Tempered chocolate bar",
    flavour: "cocoa",
    price: 12,
    unit: "100g",
    blurb: "Hand-tempered milk chocolate, snapped into eight.",
    long: "Tempered by hand on a marble bench, so it snaps cleanly and stays glossy.",
    img: "../../assets/photography/chocolate-bar.jpeg",
    allergens: "Dairy, soy"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.HandwrittenNote = __ds_scope.HandwrittenNote;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FlavourTag = __ds_scope.FlavourTag;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
