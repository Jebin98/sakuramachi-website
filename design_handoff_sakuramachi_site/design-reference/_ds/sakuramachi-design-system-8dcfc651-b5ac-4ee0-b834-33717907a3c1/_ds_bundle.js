/* @ds-bundle: {"format":4,"namespace":"SakuramachiDesignSystem_8dcfc6","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"PhotoSlot","sourcePath":"components/surfaces/PhotoSlot.jsx"},{"name":"ProductCard","sourcePath":"components/surfaces/ProductCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"f2b81fe82991","components/actions/IconButton.jsx":"a93b627d9b4f","components/brand/Icon.jsx":"0230253fd7e8","components/brand/Logo.jsx":"bd0425e967a0","components/data/Badge.jsx":"5824d7e08ce3","components/data/Tag.jsx":"33d80c33ed44","components/feedback/Dialog.jsx":"aabc4e9e657c","components/feedback/Toast.jsx":"c5f0674f2663","components/feedback/Tooltip.jsx":"48b199fefa53","components/forms/Checkbox.jsx":"442a62a512e2","components/forms/Input.jsx":"d2c63792602f","components/forms/Radio.jsx":"45952dfc9657","components/forms/Select.jsx":"bbf0a003d05d","components/forms/Switch.jsx":"a5f86d298a80","components/navigation/Tabs.jsx":"4e1f2e6faf5d","components/surfaces/Card.jsx":"9220bbb58f58","components/surfaces/PhotoSlot.jsx":"7cde67ebe293","components/surfaces/ProductCard.jsx":"f31753c5318f","ui_kits/social/SocialTemplates.jsx":"a0e488d34852","ui_kits/website/HomeScreen.jsx":"3392b36a208e","ui_kits/website/MenuScreen.jsx":"1e14a48cc2d6","ui_kits/website/OrderScreen.jsx":"9a3361a61986","ui_kits/website/ProductScreen.jsx":"cf00f959c755","ui_kits/website/SiteChrome.jsx":"f6aab91475fb","ui_kits/website/data.js":"0177981cce98"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SakuramachiDesignSystem_8dcfc6 = window.SakuramachiDesignSystem_8dcfc6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const btnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "var(--font-display)",
  fontWeight: "var(--fw-bold)",
  letterSpacing: "-0.005em",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "var(--transition-control)",
  whiteSpace: "nowrap",
  border: "1.5px solid transparent"
};
const btnSizes = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 16px",
    fontSize: "var(--text-sm)"
  },
  md: {
    height: "var(--control-h-md)",
    padding: "0 22px",
    fontSize: "var(--text-base)"
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 30px",
    fontSize: "var(--text-md)"
  }
};
const btnVariants = {
  primary: {
    background: "var(--accent)",
    color: "var(--text-on-accent)",
    borderColor: "var(--ink-900)",
    boxShadow: "var(--shadow-sm)"
  },
  secondary: {
    background: "var(--cream-100)",
    color: "var(--ink-900)",
    borderColor: "var(--ink-900)"
  },
  ghost: {
    background: "transparent",
    color: "var(--ink-900)",
    borderColor: "transparent"
  },
  quiet: {
    background: "var(--surface-blush)",
    color: "var(--ink-900)",
    borderColor: "transparent"
  }
};
const btnHover = {
  primary: {
    background: "var(--accent-hover)",
    boxShadow: "var(--shadow-lift)",
    transform: "translateY(-1px)"
  },
  secondary: {
    background: "var(--cream-200)",
    transform: "translateY(-1px)"
  },
  ghost: {
    background: "var(--surface-blush)"
  },
  quiet: {
    background: "var(--surface-blush-strong)"
  }
};
const btnActive = {
  primary: {
    background: "var(--accent-press)",
    boxShadow: "var(--shadow-press)",
    transform: "translateY(1px)"
  },
  secondary: {
    background: "var(--cream-300)",
    transform: "translateY(1px)"
  },
  ghost: {
    background: "var(--surface-blush-strong)",
    transform: "translateY(1px)"
  },
  quiet: {
    background: "var(--sakura-300)",
    transform: "translateY(1px)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  href,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [a, setA] = React.useState(false);
  const Tag = as === "a" ? "a" : "button";
  const s = {
    ...btnBase,
    ...btnSizes[size],
    ...btnVariants[variant],
    ...(h && !disabled ? btnHover[variant] : null),
    ...(a && !disabled ? btnActive[variant] : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      background: "var(--surface-disabled)",
      color: "var(--text-faint)",
      borderColor: "transparent",
      boxShadow: "none",
      cursor: "not-allowed",
      transform: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: s,
    href: Tag === "a" ? href : undefined,
    type: Tag === "button" ? type : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ibSizes = {
  sm: {
    w: "32px",
    r: "var(--radius-pill)"
  },
  md: {
    w: "42px",
    r: "var(--radius-pill)"
  },
  lg: {
    w: "52px",
    r: "var(--radius-pill)"
  }
};
const ibVariants = {
  solid: {
    background: "var(--accent)",
    color: "var(--text-on-accent)",
    border: "1.5px solid var(--ink-900)"
  },
  outline: {
    background: "var(--cream-100)",
    color: "var(--ink-900)",
    border: "1.5px solid var(--ink-900)"
  },
  quiet: {
    background: "var(--surface-blush)",
    color: "var(--ink-900)",
    border: "1.5px solid transparent"
  },
  ghost: {
    background: "transparent",
    color: "var(--ink-700)",
    border: "1.5px solid transparent"
  }
};
const ibHover = {
  solid: {
    background: "var(--accent-hover)"
  },
  outline: {
    background: "var(--cream-200)"
  },
  quiet: {
    background: "var(--surface-blush-strong)"
  },
  ghost: {
    background: "var(--surface-blush)"
  }
};
function IconButton({
  children,
  label,
  variant = "quiet",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const sz = ibSizes[size];
  const s = {
    width: sz.w,
    height: sz.w,
    borderRadius: sz.r,
    display: "inline-grid",
    placeItems: "center",
    cursor: "pointer",
    transition: "var(--transition-control)",
    padding: 0,
    ...ibVariants[variant],
    ...(h && !disabled ? ibHover[variant] : null),
    ...(disabled ? {
      background: "var(--surface-disabled)",
      color: "var(--text-faint)",
      borderColor: "transparent",
      cursor: "not-allowed"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    style: s,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide is loaded from CDN (see readme ICONOGRAPHY). No brand icon set was supplied,
   so Lucide at 1.75 stroke is the flagged substitution. */
const SVG_NS = "http://www.w3.org/2000/svg";
const pascal = n => String(n).split(/[-_ ]+/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");

/* Lucide icon data is a nested [tag, attrs, children] tree. */
function buildNode(node) {
  if (!Array.isArray(node)) return null;
  const tag = node[0];
  if (typeof tag !== "string") return null;
  const el = document.createElementNS(SVG_NS, tag);
  const attrs = node[1] || {};
  Object.keys(attrs).forEach(a => el.setAttribute(a, attrs[a]));
  const kids = node[2];
  if (Array.isArray(kids)) kids.forEach(k => {
    const c = buildNode(k);
    if (c) el.appendChild(c);
  });
  return el;
}
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false,
      tries = 0;
    const paint = () => {
      if (cancelled) return;
      const L = typeof window !== "undefined" ? window.lucide : null;
      const data = L && L.icons ? L.icons[pascal(name)] || L.icons[name] : null;
      if (!data) {
        if (tries++ < 40) setTimeout(paint, 100);
        return;
      }
      const el = ref.current;
      if (!el) return;
      let svg = null;
      if (Array.isArray(data) && typeof data[0] === "string") {
        svg = buildNode(data);
      } else if (Array.isArray(data)) {
        svg = document.createElementNS(SVG_NS, "svg");
        data.forEach(k => {
          const c = buildNode(k);
          if (c) svg.appendChild(c);
        });
      }
      if (!svg) return;
      svg.setAttribute("viewBox", svg.getAttribute("viewBox") || "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", String(strokeWidth));
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      el.innerHTML = "";
      el.appendChild(svg);
    };
    paint();
    return () => {
      cancelled = true;
    };
  }, [name, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      color,
      lineHeight: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LOGO_SRC = {
  lockup: "assets/logo-lockup.png",
  wordmark: "assets/logo-wordmark-ink.png",
  mark: "assets/logo-mark.png"
};
const join = (base, path) => base ? String(base).replace(/\/+$/, "") + "/" + path : path;
function Logo({
  variant = "wordmark",
  height,
  width,
  basePath = "",
  invert = false,
  style,
  ...rest
}) {
  const src = join(basePath, LOGO_SRC[variant]);
  const isMark = variant === "mark";
  const s = {
    height: height || (variant === "lockup" ? 140 : isMark ? 44 : 28),
    width: width || "auto",
    objectFit: "contain",
    filter: invert ? "invert(1) brightness(1.6)" : "none",
    ...style
  };
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "sakuramachi",
    style: s
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const badgeTones = {
  accent: {
    solid: {
      background: "var(--accent)",
      color: "var(--text-on-accent)"
    },
    quiet: {
      background: "var(--accent-quiet)",
      color: "var(--berry-700)"
    }
  },
  success: {
    solid: {
      background: "var(--success)",
      color: "var(--cream-100)"
    },
    quiet: {
      background: "var(--success-quiet)",
      color: "var(--matcha-700)"
    }
  },
  warning: {
    solid: {
      background: "var(--warning)",
      color: "var(--cream-100)"
    },
    quiet: {
      background: "var(--warning-quiet)",
      color: "var(--sponge-600)"
    }
  },
  info: {
    solid: {
      background: "var(--info)",
      color: "var(--cream-100)"
    },
    quiet: {
      background: "var(--info-quiet)",
      color: "var(--sakura-700)"
    }
  },
  neutral: {
    solid: {
      background: "var(--ink-900)",
      color: "var(--cream-100)"
    },
    quiet: {
      background: "var(--ink-50)",
      color: "var(--ink-700)"
    }
  }
};
function Badge({
  children,
  tone = "accent",
  emphasis = "solid",
  outlined = false,
  style,
  ...rest
}) {
  const s = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--fw-bold)",
    fontSize: "var(--text-2xs)",
    letterSpacing: "var(--ls-caps)",
    textTransform: "lowercase",
    padding: "5px 11px",
    borderRadius: "var(--radius-pill)",
    border: outlined ? "1.5px solid var(--ink-900)" : "1.5px solid transparent",
    ...badgeTones[tone][emphasis],
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  disabled = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const clickable = !!onClick && !disabled;
  const s = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--fw-medium)",
    fontSize: "var(--text-sm)",
    padding: "7px 14px",
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid " + (selected ? "var(--ink-900)" : "var(--sakura-400)"),
    background: selected ? "var(--sakura-300)" : h && clickable ? "var(--sakura-100)" : "var(--white)",
    color: "var(--ink-900)",
    cursor: clickable ? "pointer" : "default",
    transition: "var(--transition-control)",
    opacity: disabled ? .5 : 1,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s,
    onClick: clickable ? onClick : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    role: clickable ? "button" : undefined,
    tabIndex: clickable ? 0 : undefined
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-hidden": "true",
    style: {
      cursor: "pointer",
      color: "var(--ink-500)",
      fontSize: "var(--text-sm)",
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  subtitle,
  children,
  footer,
  width = 520,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "grid",
      placeItems: "center",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--surface-overlay)",
      backdropFilter: "blur(3px)",
      animation: "none"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      border: "1.5px solid var(--ink-900)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 0",
      display: "flex",
      gap: "16px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-xl)",
      lineHeight: 1.25
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: "6px",
      lineHeight: 1.6
    }
  }, subtitle)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px",
      lineHeight: 1
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 24px",
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px",
      background: "var(--surface-raised)",
      borderTop: "1px solid var(--border-card)",
      display: "flex",
      gap: "12px",
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toastTones = {
  neutral: {
    background: "var(--cream-100)",
    color: "var(--ink-900)",
    dot: "var(--ink-900)"
  },
  success: {
    background: "var(--success-quiet)",
    color: "var(--matcha-700)",
    dot: "var(--success)"
  },
  warning: {
    background: "var(--warning-quiet)",
    color: "var(--sponge-600)",
    dot: "var(--warning)"
  },
  danger: {
    background: "var(--danger-quiet)",
    color: "var(--berry-700)",
    dot: "var(--danger)"
  }
};
function Toast({
  children,
  tone = "neutral",
  icon = null,
  action = null,
  onDismiss,
  style,
  ...rest
}) {
  const t = toastTones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      maxWidth: "420px",
      padding: "12px 16px",
      background: t.background,
      color: t.color,
      border: "1.5px solid var(--ink-900)",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-md)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      ...style
    }
  }, rest), icon || /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: t.dot,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      lineHeight: 1.45
    }
  }, children), action, onDismiss && /*#__PURE__*/React.createElement("span", {
    onClick: onDismiss,
    style: {
      cursor: "pointer",
      opacity: .6,
      fontSize: "var(--text-sm)"
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  content,
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
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 50,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      background: "var(--surface-ink)",
      color: "var(--text-inverse)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.4,
      padding: "7px 10px",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      opacity: on ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-soft)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  hint,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const uid = React.useMemo(() => id || "cb-" + Math.random().toString(36).slice(2, 7), [id]);
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "19px",
      height: "19px",
      flex: "0 0 auto",
      marginTop: "2px",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-xs)",
      border: "1.5px solid var(--ink-900)",
      background: on ? "var(--accent)" : "var(--white)",
      transition: "var(--transition-control)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    width: "13",
    height: "13",
    fill: "none",
    stroke: "var(--cream-100)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5 8 14.5 16 5.5"
  }))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const inpHeights = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h-md)",
  lg: "var(--control-h-lg)"
};
function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  type = "text",
  size = "md",
  disabled = false,
  required = false,
  prefix = null,
  suffix = null,
  id,
  onChange,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const uid = React.useMemo(() => id || "in-" + Math.random().toString(36).slice(2, 7), [id]);
  const shellStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    height: inpHeights[size],
    padding: "0 14px",
    background: disabled ? "var(--surface-disabled)" : "var(--white)",
    border: "1px solid " + (error ? "var(--danger)" : f ? "var(--ink-900)" : "var(--border-field)"),
    borderRadius: "var(--radius-sm)",
    transition: "var(--transition-control)",
    boxShadow: f ? error ? "var(--ring-berry)" : "var(--ring)" : "none"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-body)",
      marginBottom: "6px"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " *")), /*#__PURE__*/React.createElement("span", {
    style: shellStyle
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "flex"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-heading)"
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "flex"
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      marginTop: "6px",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  disabled = false,
  onChange,
  direction = "column",
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue);
  const sel = isControlled ? value : inner;
  const pick = v => {
    if (!isControlled) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? "20px" : "12px",
      ...style
    }
  }, rest), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    const note = typeof o === "string" ? null : o.hint;
    const off = disabled || typeof o !== "string" && o.disabled;
    const on = sel === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
        cursor: off ? "not-allowed" : "pointer",
        opacity: off ? .55 : 1
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: on,
      disabled: off,
      onChange: () => pick(val),
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: "19px",
        height: "19px",
        flex: "0 0 auto",
        marginTop: "2px",
        borderRadius: "50%",
        border: "1.5px solid var(--ink-900)",
        background: "var(--white)",
        display: "grid",
        placeItems: "center",
        transition: "var(--transition-control)"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "var(--accent)"
      }
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--text-base)",
        color: "var(--text-body)",
        lineHeight: 1.5
      }
    }, lab), note && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)"
      }
    }, note)));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  placeholder,
  size = "md",
  disabled = false,
  id,
  onChange,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const heights = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  };
  const uid = React.useMemo(() => id || "sel-" + Math.random().toString(36).slice(2, 7), [id]);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-body)",
      marginBottom: "6px"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: "100%",
      height: heights[size],
      padding: "0 38px 0 14px",
      appearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-heading)",
      background: disabled ? "var(--surface-disabled)" : "var(--white)",
      border: "1px solid " + (error ? "var(--danger)" : f ? "var(--ink-900)" : "var(--border-field)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: f ? "var(--ring)" : "none",
      transition: "var(--transition-control)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val,
      disabled: typeof o !== "string" && o.disabled
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontFamily: "var(--font-body)",
      fontSize: "11px"
    }
  }, "\u25BE")), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      marginTop: "6px",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  hint,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const uid = React.useMemo(() => id || "sw-" + Math.random().toString(36).slice(2, 7), [id]);
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "44px",
      height: "26px",
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--ink-900)",
      background: on ? "var(--accent)" : "var(--cream-200)",
      position: "relative",
      transition: "background-color var(--dur-base) var(--ease-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "2px",
      left: on ? "20px" : "2px",
      width: "19px",
      height: "19px",
      borderRadius: "50%",
      background: "var(--cream-50)",
      border: "1.5px solid var(--ink-900)",
      transition: "left var(--dur-base) var(--ease-settle)"
    }
  })), (label || hint) && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      lineHeight: 1.4
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const first = items.length ? typeof items[0] === "string" ? items[0] : items[0].value : undefined;
  const [inner, setInner] = React.useState(defaultValue !== undefined ? defaultValue : first);
  const sel = isControlled ? value : inner;
  const pick = v => {
    if (!isControlled) setInner(v);
    onChange && onChange(v);
  };
  const fs = size === "sm" ? "var(--text-sm)" : "var(--text-md)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "26px",
      borderBottom: "1px solid var(--border-card)",
      ...style
    }
  }, rest), items.map(it => {
    const val = typeof it === "string" ? it : it.value;
    const lab = typeof it === "string" ? it : it.label;
    const count = typeof it === "string" ? null : it.count;
    const on = sel === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(val),
      style: {
        background: "none",
        border: "none",
        padding: "0 0 12px",
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--fw-bold)",
        fontSize: fs,
        color: on ? "var(--ink-900)" : "var(--text-muted)",
        borderBottom: "2.5px solid " + (on ? "var(--ink-900)" : "transparent"),
        marginBottom: "-1px",
        transition: "var(--transition-control)",
        display: "flex",
        gap: "7px",
        alignItems: "center"
      }
    }, lab, count !== null && count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)",
        color: "var(--text-faint)"
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cardPads = {
  none: "0",
  sm: "14px",
  md: "20px",
  lg: "32px"
};
const cardVariants = {
  plain: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-card)",
    boxShadow: "var(--shadow-sm)"
  },
  blush: {
    background: "var(--surface-blush)",
    border: "1px solid var(--border-quiet)",
    boxShadow: "none"
  },
  cream: {
    background: "var(--surface-raised)",
    border: "1px solid var(--border-card)",
    boxShadow: "none"
  },
  ink: {
    background: "var(--surface-ink)",
    border: "1.5px solid var(--ink-900)",
    boxShadow: "var(--shadow-md)"
  },
  outlined: {
    background: "var(--white)",
    border: "1.5px solid var(--ink-900)",
    boxShadow: "none"
  }
};
function Card({
  children,
  variant = "plain",
  padding = "md",
  interactive = false,
  sketch = false,
  as = "div",
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const Tag = as;
  const s = {
    borderRadius: sketch ? "var(--radius-sketch)" : "var(--radius-md)",
    padding: cardPads[padding],
    transition: "var(--transition-control)",
    color: variant === "ink" ? "var(--text-inverse)" : "var(--text-body)",
    ...cardVariants[variant],
    ...(interactive ? {
      cursor: "pointer"
    } : null),
    ...(interactive && h ? {
      boxShadow: "var(--shadow-lift)",
      transform: "translateY(-2px)"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: s,
    onClick: onClick,
    onMouseEnter: interactive ? () => setH(true) : undefined,
    onMouseLeave: interactive ? () => setH(false) : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PhotoSlot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Intentional addition. The brand's imagery is photography we were not supplied;
   PhotoSlot marks where a real photo goes instead of faking one. */
function PhotoSlot({
  src,
  alt = "",
  ratio = "4 / 3",
  caption,
  label = "photo",
  rounded = "md",
  sketch = false,
  style,
  ...rest
}) {
  const radius = sketch ? "var(--radius-sketch)" : rounded === "none" ? "0" : rounded === "sm" ? "var(--radius-sm)" : rounded === "lg" ? "var(--radius-lg)" : "var(--radius-md)";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      borderRadius: radius,
      background: "var(--halo-sakura-soft)",
      border: "1px solid var(--border-quiet)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain-url)",
      backgroundSize: "128px",
      opacity: "var(--grain-opacity)",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-lg)",
      color: "var(--sakura-700)",
      lineHeight: 1.2
    }
  }, label)))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: "8px"
    }
  }, caption));
}
Object.assign(__ds_scope, { PhotoSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PhotoSlot.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Intentional addition: the product tile is the brand's most repeated object,
   so it is fixed here rather than re-assembled per screen. */
function ProductCard({
  name,
  nameJa,
  note,
  price,
  unit = "each",
  image,
  imageLabel,
  badge,
  soldOut = false,
  actionLabel = "Add to order",
  onAdd,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    variant: "plain",
    padding: "none",
    interactive: !soldOut,
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      opacity: soldOut ? .72 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoSlot, {
    src: image,
    ratio: "4 / 3",
    rounded: "none",
    label: imageLabel || name,
    alt: name
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12px",
      left: "12px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: soldOut ? "neutral" : "accent"
  }, badge)), soldOut && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "rgba(255,253,250,.62)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--ink-900)",
      background: "var(--cream-100)",
      border: "1.5px solid var(--ink-900)",
      borderRadius: "var(--radius-pill)",
      padding: "8px 18px"
    }
  }, "sold out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      lineHeight: 1.25
    }
  }, name), nameJa && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: "2px"
    }
  }, nameJa)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-md)",
      color: "var(--text-price)"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, "/ ", unit)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: soldOut ? "secondary" : "primary",
    disabled: soldOut,
    onClick: onAdd
  }, soldOut ? "Notify me" : actionLabel))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialTemplates.jsx
try { (() => {
/* Instagram-format templates. The brand's only published surface is its Instagram feed, which was
   NOT reachable from this environment — these are built from the supplied logo artwork and the
   design-system foundations, not traced from real posts. Treat as a proposal, not a recreation. */

function Frame({
  w,
  h,
  scale,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      color: "var(--text-faint)",
      letterSpacing: "var(--ls-label)",
      marginBottom: "8px"
    }
  }, label, " \xB7 ", w, "\xD7", h), /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale,
      height: h * scale,
      overflow: "hidden",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--border-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      transform: "scale(" + scale + ")",
      transformOrigin: "top left"
    }
  }, children)));
}

/* 1 — counter announcement, the everyday post */
function FeedPost() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      position: "relative",
      background: "var(--halo-sakura)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain-url)",
      backgroundSize: "128px",
      opacity: "var(--grain-opacity)",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "64px 64px 64px 64px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 56,
    basePath: "../.."
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    outlined: true,
    style: {
      fontSize: "20px",
      padding: "12px 24px"
    }
  }, "seasonal")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "1 / 1",
    sketch: true,
    label: "shortcake slice, side on",
    style: {
      width: 600,
      boxShadow: "var(--shadow-lg)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-black)",
      fontSize: "84px",
      lineHeight: 1.02,
      letterSpacing: "var(--ls-display)",
      color: "var(--ink-900)"
    }
  }, "Shortcake", /*#__PURE__*/React.createElement("br", null), "is back."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "52px",
      color: "var(--berry-600)",
      marginTop: "14px"
    }
  }, "from eleven, while they last"))));
}

/* 2 — story: the sold-out notice */
function StoryPost() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1920,
      position: "relative",
      background: "var(--cream-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain-url)",
      backgroundSize: "128px",
      opacity: ".4",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "140px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 200,
    basePath: "../.."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-black)",
      fontSize: "140px",
      lineHeight: .98,
      letterSpacing: "var(--ls-display)",
      color: "var(--ink-900)",
      marginTop: "90px"
    }
  }, "Sold out", /*#__PURE__*/React.createElement("br", null), "for today"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "66px",
      color: "var(--berry-600)",
      marginTop: "36px"
    }
  }, "thank you, come again"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "40px",
      lineHeight: 1.6,
      color: "var(--ink-700)",
      marginTop: "48px",
      maxWidth: "22ch"
    }
  }, "Everything went before four. We bake again Wednesday at eleven."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sakura-200)",
      border: "3px solid var(--ink-900)",
      borderRadius: "var(--radius-pill)",
      padding: "22px 52px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "38px"
    }
  }, "pre-order for Wednesday"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "28px",
      color: "var(--ink-500)",
      letterSpacing: "var(--ls-label)"
    }
  }, "@SAKURAMACHIPASTRIES"))));
}

/* 3 — the weekly menu card */
function MenuPost() {
  const items = (window.SM_MENU || []).slice(0, 5);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: "var(--paper)",
      padding: "64px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "4px solid var(--ink-900)",
      borderRadius: "var(--radius-sketch)",
      padding: "52px 56px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-black)",
      fontSize: "76px",
      letterSpacing: "var(--ls-display)",
      lineHeight: 1
    }
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "46px",
      color: "var(--sakura-700)",
      marginTop: "8px"
    }
  }, "wednesday to sunday")), /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 120,
    basePath: "../.."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "52px",
      display: "grid",
      gap: "30px"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "38px",
      color: i.soldOut ? "var(--sold-out)" : "var(--ink-900)",
      textDecoration: i.soldOut ? "line-through" : "none"
    }
  }, i.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderBottom: "2px dotted var(--ink-200)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "36px",
      color: i.soldOut ? "var(--sold-out)" : "var(--ink-900)"
    }
  }, i.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      gap: "16px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    outlined: true,
    style: {
      fontSize: "22px",
      padding: "12px 22px"
    }
  }, "pre-orders close 21:00"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "26px",
      color: "var(--text-muted)"
    }
  }, "3-10 Sakuramachi"))));
}
Object.assign(window, {
  Frame,
  FeedPost,
  StoryPost,
  MenuPost
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialTemplates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HomeScreen({
  go,
  add
}) {
  const menu = window.SM_MENU;
  const today = menu.slice(0, 3);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--halo-sakura)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain-url)",
      backgroundSize: "128px",
      opacity: "var(--grain-opacity)",
      mixBlendMode: "multiply",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "72px var(--gutter-lg) 88px",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "48px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--ls-label)",
      color: "var(--ink-600)",
      marginBottom: "18px"
    }
  }, "WED\u2013SUN \xB7 11:00\u201318:00 \xB7 3-10 SAKURAMACHI"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-5xl)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-display)",
      fontWeight: "var(--fw-black)"
    }
  }, "Cake, cut thick."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-2xl)",
      color: "var(--berry-600)",
      marginTop: "8px",
      whiteSpace: "nowrap"
    }
  }, "baked this morning, gone by six"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink-700)",
      maxWidth: "42ch",
      marginTop: "20px"
    }
  }, "We make a short list of Japanese pastries in one small kitchen \u2014 shortcake, mille cr\xEApe, daifuku, a cookie tin. Order before 21:00 for pick-up the next day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "28px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("menu"),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "cake",
      size: 18
    })
  }, "See today's menu"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go("order")
  }, "Pre-order a box")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "18px",
      marginTop: "26px",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    outlined: true
  }, "7 things on the counter"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-600)"
    }
  }, "Sakura mochi sold out at 14:20."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "4 / 5",
    sketch: true,
    label: "shortcake on the counter, morning light",
    style: {
      boxShadow: "var(--shadow-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-18px",
      left: "-22px",
      transform: "rotate(-7deg)",
      background: "var(--cream-100)",
      border: "1.5px solid var(--ink-900)",
      borderRadius: "var(--radius-pill)",
      padding: "10px 20px",
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-xl)",
      boxShadow: "var(--shadow-sm)"
    }
  }, "eat today")))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "today's counter",
    title: "What is out right now",
    script: "wednesday, 11:04"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "var(--gutter)"
    }
  }, today.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onAdd: () => add(p)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go("menu"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "All nine things"))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-raised)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".85fr 1.15fr",
      gap: "48px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "1 / 1",
    label: "hands folding dorayaki, flour on the bench",
    sketch: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)",
      letterSpacing: "var(--ls-display)"
    }
  }, "Small batches, because that is all two people can do well."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      marginTop: "18px",
      maxWidth: "52ch"
    }
  }, "Everything is made the morning it is sold. We buy strawberries from one farm, matcha from one maker, and we do not freeze anything. That is the whole business plan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "22px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "no preservatives"), /*#__PURE__*/React.createElement(Tag, null, "made same day"), /*#__PURE__*/React.createElement(Tag, null, "seasonal fruit only"))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "visit",
    title: "Come at eleven, it is quietest"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gutter-lg)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "16px"
    }
  }, [["map-pin", "3-10 Sakuramachi, Chuo-ku"], ["clock", "Wed–Sun · 11:00–18:00"], ["phone", "096 000 0000"], ["snowflake", "Keep cakes cold, eat within a day"]].map(([ic, txt]) => /*#__PURE__*/React.createElement("div", {
    key: txt,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--sakura-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)"
    }
  }, txt)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "24px",
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "instagram",
      size: 16
    })
  }, "Daily menu on Instagram"))), /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "16 / 10",
    label: "shopfront, pink awning",
    rounded: "md"
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MenuScreen({
  go,
  add,
  openProduct
}) {
  const menu = window.SM_MENU;
  const [cat, setCat] = React.useState("all");
  const [tags, setTags] = React.useState([]);
  const cats = [{
    value: "all",
    label: "Everything",
    count: menu.length
  }, {
    value: "cakes",
    label: "Cakes",
    count: menu.filter(m => m.cat === "cakes").length
  }, {
    value: "mochi",
    label: "Mochi & wagashi",
    count: menu.filter(m => m.cat === "mochi").length
  }, {
    value: "cookies",
    label: "Baked",
    count: menu.filter(m => m.cat === "cookies").length
  }, {
    value: "gifts",
    label: "Gift boxes",
    count: menu.filter(m => m.cat === "gifts").length
  }];
  const toggle = t => setTags(tags.includes(t) ? tags.filter(x => x !== t) : [...tags, t]);
  const shown = menu.filter(m => (cat === "all" || m.cat === cat) && (!tags.length || tags.some(t => m.tags.includes(t))));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-blush)",
      borderBottom: "1px solid var(--border-quiet)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "44px var(--gutter-lg) 36px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-4xl)",
      letterSpacing: "var(--ls-display)"
    }
  }, "Today's menu"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-body)",
      marginTop: "10px",
      maxWidth: "52ch",
      lineHeight: "var(--lh-body)"
    }
  }, "Nine things, and only while they last. Pre-orders for tomorrow close at 21:00 tonight."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "28px var(--gutter-lg) 0"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: cats,
    value: cat,
    onChange: setCat
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      margin: "22px 0 28px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      color: "var(--text-faint)",
      letterSpacing: "var(--ls-label)"
    }
  }, "FILTER"), ["seasonal", "gifts", "mochi", "cookies"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: tags.includes(t),
    onClick: () => toggle(t)
  }, t)), tags.length > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setTags([])
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(268px, 1fr))",
      gap: "var(--gutter)"
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onAdd: e => {
      e.stopPropagation();
      add(p);
    },
    onClick: () => openProduct(p)
  })))), shown.length === 0 && /*#__PURE__*/React.createElement(Card, {
    variant: "blush",
    padding: "lg",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-2xl)",
      color: "var(--sakura-700)"
    }
  }, "nothing matches that"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: "8px"
    }
  }, "Try clearing a filter.")), /*#__PURE__*/React.createElement(Card, {
    variant: "cream",
    padding: "lg",
    style: {
      marginTop: "40px",
      display: "flex",
      gap: "24px",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-xl)"
    }
  }, "Whole cakes need a day's notice"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, "12cm or 15cm, plain or with fruit. Message us on Instagram and we will hold one.")), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("order")
  }, "Start a pre-order"))));
}
Object.assign(window, {
  MenuScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OrderScreen.jsx
try { (() => {
function OrderScreen({
  bag,
  go,
  remove,
  notify
}) {
  const [fulfil, setFulfil] = React.useState("pickup");
  const [slot, setSlot] = React.useState("");
  const [wrap, setWrap] = React.useState(false);
  const [sms, setSms] = React.useState(true);
  const [confirm, setConfirm] = React.useState(false);
  const yen = s => Number(String(s).replace(/[^0-9]/g, ""));
  const subtotal = bag.reduce((n, i) => n + yen(i.price) * i.qty, 0);
  const total = subtotal + (wrap ? 200 : 0);
  const fmt = n => "¥" + n.toLocaleString();
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "44px var(--gutter-lg) 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-4xl)",
      letterSpacing: "var(--ls-display)"
    }
  }, "Your order"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-2xl)",
      color: "var(--sakura-700)",
      marginTop: "4px"
    }
  }, "we will have it boxed and cold"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr .75fr",
      gap: "var(--gutter-lg)",
      marginTop: "32px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    padding: "none"
  }, bag.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-2xl)",
      color: "var(--sakura-700)"
    }
  }, "nothing in the box yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "16px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("menu")
  }, "Go to the menu"))), bag.map((i, n) => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      padding: "16px 20px",
      borderTop: n === 0 ? "none" : "1px solid var(--border-card)"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "1 / 1",
    label: "",
    rounded: "sm",
    style: {
      width: "64px",
      flex: "0 0 64px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-base)"
    }
  }, i.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, i.nameJa, " \xB7 ", i.unit)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "\xD7", i.qty), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-base)",
      minWidth: "64px",
      textAlign: "right"
    }
  }, fmt(yen(i.price) * i.qty)), /*#__PURE__*/React.createElement(IconButton, {
    label: "Remove",
    variant: "ghost",
    size: "sm",
    onClick: () => remove(i.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 16
  }))))), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-xl)",
      marginBottom: "18px"
    }
  }, "How you want it"), /*#__PURE__*/React.createElement(Radio, {
    name: "fulfil",
    value: fulfil,
    onChange: setFulfil,
    options: [{
      value: "pickup",
      label: "Pick up in store",
      hint: "3-10 Sakuramachi · Wed–Sun from 11:00"
    }, {
      value: "courier",
      label: "Courier, same day",
      hint: "Within the city, ¥600 — cakes travel cold"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginTop: "22px"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Slot",
    placeholder: "Choose a time",
    options: window.SM_SLOTS,
    value: slot,
    onChange: e => setSlot(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Date",
    type: "date",
    defaultValue: "2026-09-11"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginTop: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Who is collecting?",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "080 0000 0000",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "14px",
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Wrap it as a gift (\xA5200)",
    hint: "Furoshiki cloth, tied at the counter.",
    checked: wrap,
    onChange: e => setWrap(e.target.checked)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Text me when the box is ready",
    checked: sms,
    onChange: e => setSms(e.target.checked)
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "cream",
    padding: "lg",
    style: {
      position: "sticky",
      top: "92px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      marginBottom: "16px"
    }
  }, "Summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "10px",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Pastries"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, fmt(subtotal))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Gift wrap"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, wrap ? "¥200" : "—")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, fulfil === "pickup" ? "Pick-up" : "Courier"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, fulfil === "pickup" ? "free" : "¥600"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-card)",
      margin: "16px 0",
      paddingTop: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-md)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xl)"
    }
  }, fmt(total + (fulfil === "courier" ? 600 : 0)))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: bag.length === 0,
    onClick: () => setConfirm(true)
  }, "Place the order"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: "12px",
      lineHeight: 1.6
    }
  }, "You pay at the counter. We hold the box for twenty minutes past your slot."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px",
      display: "flex",
      gap: "8px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "snowflake",
    size: 16,
    color: "var(--sakura-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "Everything travels cold."))))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    title: "Place this order?",
    width: 460,
    subtitle: (fulfil === "pickup" ? "Pick up at " : "Courier at ") + (slot || "a time we will confirm") + ", tomorrow.",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setConfirm(false)
    }, "Not yet"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setConfirm(false);
        notify("Order placed — we will text you when the box is ready.");
        go("home");
      }
    }, "Yes, place it"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "8px",
      fontSize: "var(--text-sm)"
    }
  }, bag.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, i.name, " \xD7", i.qty), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, fmt(yen(i.price) * i.qty)))))));
}
Object.assign(window, {
  OrderScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OrderScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductScreen({
  product,
  go,
  add
}) {
  const p = product || window.SM_MENU[0];
  const [size, setSize] = React.useState("slice");
  const [slot, setSlot] = React.useState("");
  const [qty, setQty] = React.useState(1);
  const [candle, setCandle] = React.useState(false);
  const related = window.SM_MENU.filter(m => m.id !== p.id).slice(0, 3);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "24px var(--gutter-lg) 0"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go("menu"),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    })
  }, "Back to the menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "20px var(--gutter-lg) 0",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "1 / 1",
    label: p.imageLabel || p.name,
    rounded: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "10px",
      marginTop: "12px"
    }
  }, ["cut face", "on the plate", "in the box", "the strawberries"].map(l => /*#__PURE__*/React.createElement(PhotoSlot, {
    key: l,
    ratio: "1 / 1",
    label: l,
    rounded: "sm"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginBottom: "14px"
    }
  }, p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, p.badge), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    emphasis: "quiet"
  }, "made this morning")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-4xl)",
      letterSpacing: "var(--ls-display)",
      lineHeight: "var(--lh-snug)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, p.nameJa), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "8px",
      marginTop: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xl)",
      color: "var(--text-price)"
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-faint)"
    }
  }, "/ ", p.unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      marginTop: "16px",
      maxWidth: "46ch"
    }
  }, p.note, ". Cut thick, wrapped cold, and best eaten the day you buy it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "22px",
      marginTop: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-body)",
      marginBottom: "10px"
    }
  }, "Size"), /*#__PURE__*/React.createElement(Radio, {
    name: "size",
    value: size,
    onChange: setSize,
    direction: "row",
    options: [{
      value: "slice",
      label: "Single slice"
    }, {
      value: "12cm",
      label: "Whole 12cm"
    }, {
      value: "15cm",
      label: "Whole 15cm"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Pick-up slot",
    placeholder: "Choose a time",
    options: window.SM_SLOTS,
    value: slot,
    onChange: e => setSlot(e.target.value),
    hint: slot ? "Held for 20 minutes." : "Tomorrow, Wed–Sun only."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-body)",
      marginBottom: "6px"
    }
  }, "How many"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      height: "var(--control-h-md)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "One fewer",
    variant: "outline",
    size: "sm",
    onClick: () => setQty(Math.max(1, qty - 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-md)",
      minWidth: "22px",
      textAlign: "center"
    }
  }, qty), /*#__PURE__*/React.createElement(IconButton, {
    label: "One more",
    variant: "outline",
    size: "sm",
    onClick: () => setQty(Math.min(12, qty + 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Twelve is the most we can hold"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    color: "var(--text-faint)"
  })))))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Add a candle",
    hint: "Free, one per cake.",
    checked: candle,
    onChange: e => setCandle(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "28px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => add(p, qty),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag",
      size: 18
    })
  }, "Add ", qty, " to order"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Save for later",
    variant: "outline",
    size: "lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "blush",
    padding: "md",
    style: {
      marginTop: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 18,
    color: "var(--sakura-700)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-sm)"
    }
  }, "Allergens"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      marginTop: "4px",
      lineHeight: 1.6
    }
  }, "Wheat, egg, dairy. Made in a kitchen that also handles nuts and sesame.")))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "also on the counter",
    title: "Goes well with this"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--gutter)"
    }
  }, related.map(r => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: r.id
  }, r, {
    onAdd: () => add(r)
  }))))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* Header + footer shared by every website screen. */
function SiteHeader({
  route,
  go,
  bagCount,
  onSearch
}) {
  const nav = [["menu", "Menu"], ["home", "Seasonal"], ["product", "Cakes"], ["order", "Visit"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(255,253,250,.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 var(--gutter-lg)",
      height: "72px",
      display: "flex",
      alignItems: "center",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      border: "none",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 26,
    basePath: "../.."
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "26px",
      flex: 1
    }
  }, nav.map(([r, label]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(r);
    },
    style: {
      border: "none",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--text-base)",
      color: route === r ? "var(--ink-900)" : "var(--text-muted)"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search",
    variant: "ghost",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Your order",
    variant: "quiet",
    onClick: () => go("order")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 18
  })), bagCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      minWidth: "20px",
      height: "20px",
      borderRadius: "var(--radius-pill)",
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1.5px solid var(--ink-900)",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      display: "grid",
      placeItems: "center",
      padding: "0 5px"
    }
  }, bagCount)))));
}
function SiteFooter({
  go
}) {
  const cols = [["Shop", ["Today's counter", "Cakes", "Mochi", "Gift boxes"]], ["Visit", ["3-10 Sakuramachi", "Wed–Sun, 11:00–18:00", "Closed Mon & Tue"]], ["More", ["Allergens", "Pre-orders", "Wholesale"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-ink)",
      color: "var(--text-inverse)",
      marginTop: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "56px var(--gutter-lg) 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 28,
    basePath: "../..",
    invert: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: 1.7,
      color: "var(--sakura-200)",
      marginTop: "16px",
      maxWidth: "30ch"
    }
  }, "One small kitchen. A few dozen of everything. When the strawberries stop being good, we stop making the shortcake."), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/sakuramachipastries",
    style: {
      display: "inline-flex",
      gap: "8px",
      alignItems: "center",
      marginTop: "20px",
      color: "var(--cream-100)",
      borderBottom: "none",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 17
  }), "@sakuramachipastries")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--sakura-400)",
      marginBottom: "14px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "9px"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--cream-200)",
      opacity: .85
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(249,226,234,.18)",
      padding: "18px var(--gutter-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      color: "var(--sakura-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "sakuramachi"), /*#__PURE__*/React.createElement("span", null, "placeholder site \u2014 copy not final"))));
}
function Section({
  eyebrow,
  title,
  script,
  children,
  background = "transparent",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--section-y-sm) var(--gutter-lg)"
    }
  }, (eyebrow || title) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "28px"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: "10px"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)",
      letterSpacing: "var(--ls-display)"
    }
  }, title), script && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "var(--text-2xl)",
      color: "var(--sakura-700)",
      marginTop: "6px"
    }
  }, script)), children));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Placeholder catalogue. Names, prices and notes are stand-ins written in the brand voice —
   replace with the real menu before anything ships. */
window.SM_MENU = [{
  id: "shortcake",
  name: "Strawberry shortcake",
  nameJa: "苺のショートケーキ",
  price: "¥680",
  unit: "slice",
  note: "three layers, whipped cream, strawberries while they last",
  badge: "seasonal",
  cat: "cakes",
  tags: ["cakes", "seasonal"],
  imageLabel: "shortcake slice, side on"
}, {
  id: "mille",
  name: "Matcha mille crêpe",
  nameJa: "抹茶ミルクレープ",
  price: "¥720",
  unit: "slice",
  note: "twenty crêpes, matcha cream, nothing else",
  cat: "cakes",
  tags: ["cakes"],
  imageLabel: "mille crêpe, cut face"
}, {
  id: "roll",
  name: "Hojicha roll",
  nameJa: "ほうじ茶ロール",
  price: "¥560",
  unit: "slice",
  note: "roasted tea sponge, very light cream",
  cat: "cakes",
  tags: ["cakes"],
  imageLabel: "hojicha roll, top-down"
}, {
  id: "daifuku",
  name: "Strawberry daifuku",
  nameJa: "いちご大福",
  price: "¥340",
  unit: "each",
  note: "one whole strawberry, white bean paste",
  badge: "made today",
  cat: "mochi",
  tags: ["mochi", "seasonal"],
  imageLabel: "daifuku, halved"
}, {
  id: "sakuramochi",
  name: "Sakura mochi",
  nameJa: "桜餅",
  price: "¥320",
  unit: "each",
  note: "salted cherry leaf, wrapped by hand",
  cat: "mochi",
  tags: ["mochi"],
  soldOut: true,
  imageLabel: "sakura mochi on paper"
}, {
  id: "dorayaki",
  name: "Dorayaki",
  nameJa: "どら焼き",
  price: "¥280",
  unit: "each",
  note: "red bean, folded warm",
  cat: "mochi",
  tags: ["mochi"],
  imageLabel: "dorayaki stack"
}, {
  id: "cookies",
  name: "Butter cookie tin",
  nameJa: "クッキー缶",
  price: "¥2,400",
  unit: "tin",
  note: "nine kinds, packed to order",
  cat: "cookies",
  tags: ["cookies", "gifts"],
  imageLabel: "open cookie tin"
}, {
  id: "canele",
  name: "Canelé",
  nameJa: "カヌレ",
  price: "¥380",
  unit: "each",
  note: "dark crust, rum custard inside",
  cat: "cookies",
  tags: ["cookies"],
  imageLabel: "canelé, three on a tray"
}, {
  id: "box6",
  name: "Gift box of six",
  nameJa: "ギフトボックス 6個入",
  price: "¥2,900",
  unit: "box",
  note: "you choose six, we wrap it in furoshiki",
  badge: "pre-order",
  cat: "gifts",
  tags: ["gifts"],
  imageLabel: "furoshiki-wrapped box"
}];
window.SM_SLOTS = ["11:00", "12:30", "14:00", "15:30", "17:00"];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PhotoSlot = __ds_scope.PhotoSlot;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
