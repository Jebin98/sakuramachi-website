import React from "react";
import { Card } from "../core/Card.jsx";
import { FlavourTag } from "../core/FlavourTag.jsx";
import { PriceTag } from "./PriceTag.jsx";
import { Badge } from "../core/Badge.jsx";

export function ProductCard({ name, blurb, image, imageAlt = "", flavour, price, currency = "$", unit, status, ratio = "4 / 5", onClick, footer, style, ...rest }) {
  return (
    <Card as="article" padded={false} interactive={!!onClick} onClick={onClick} style={{ display: "flex", flexDirection: "column", ...style }} {...rest}>
      <div style={{ position: "relative", aspectRatio: ratio, background: "var(--cream-200)" }}>
        {image ? <img src={image} alt={imageAlt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
        {flavour ? <span style={{ position: "absolute", top: 12, left: 12 }}><FlavourTag flavour={flavour} onPhoto /></span> : null}
        {status ? <span style={{ position: "absolute", top: 12, right: 12 }}><Badge tone={status.tone || "ink"} size="sm">{status.label}</Badge></span> : null}
      </div>
      <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-2)", flex: 1 }}>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", lineHeight: 1.2, letterSpacing: "var(--tracking-display)", color: "var(--text-heading)" }}>{name}</h3>
        {blurb ? <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-muted)" }}>{blurb}</p> : null}
        <div style={{ marginTop: "auto", paddingTop: "var(--space-3)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
          {price !== undefined ? <PriceTag amount={price} currency={currency} unit={unit} /> : <span />}
          {footer}
        </div>
      </div>
    </Card>
  );
}
