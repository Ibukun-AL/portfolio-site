import type { ReactNode } from "react";
import s from "@/app/page.module.css";

type Tone = "teal" | "oxide" | "slate" | "khaki";

// A shipping container: ribbed side, stencilled ID on the door end.
export default function Container({ id, tone, len = 40, children, as: Tag = "div", className = "" }: { id: string; tone: Tone; len?: 20 | 40; children: ReactNode; as?: "div" | "li"; className?: string }) {
  return (
    <Tag className={`${s.box} ${s[tone]} ${len === 20 ? s.len20 : s.len40} ${className}`}>
      <span className={s.doorEnd} aria-hidden="true"><span className={s.boxId}>{id}</span><span className={s.lock} /></span>
      <div className={s.boxBody}>{children}</div>
    </Tag>
  );
}
