"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/Container";
import type { Work } from "@/content/types";
import s from "@/app/page.module.css";

const TONES = ["teal", "oxide", "slate"] as const;
const IDS = ["IBKA 410027 4", "IBKA 410028 1", "IBKA 410029 9"];
const LENGTHS = [40, 20, 40] as const;
const SHORT = ["Document Q&A", "Receipt tracker", "Risk service"];

export default function Yard({ work }: { work: Work[] }) {
  const [sel, setSel] = useState(0);
  const w = work[sel];
  return (
    <>
      <aside className={s.bill} aria-label="Selected project">
        <div className={s.billHead}>
          <h2 className={s.billTitle}>Bill of lading</h2>
          <span className={s.billId}>{IDS[sel]}</span>
        </div>
        <p className={s.billName} role="status">{w.title}</p>
        <ol className={s.stages} key={w.slug}>
          {w.stages.map(([k, v]) => (
            <li key={k}><span className={s.stageK}>{k}</span><span>{v}</span></li>
          ))}
        </ol>
        <p className={s.stackLine}>{w.stack.join(" · ")}</p>
        <p className={s.billFoot}>
          <Link href={`/work/${w.slug}`} className={s.textLink}>Read the case study</Link>
          <span className={s.tag}>{w.note}</span>
        </p>
      </aside>

      <ol className={s.yard} aria-label="Choose a project">
        {work.map((x, i) => (
          <Container as="li" key={x.slug} id={IDS[i]} tone={TONES[i]} len={LENGTHS[i]} className={`${s.yardBox} ${sel === i ? s.loaded : ""}`}>
            <button type="button" className={s.yardLink} aria-pressed={sel === i} onClick={() => setSel(i)}>
              {SHORT[i]}
              <span className={s.yardHint}>{sel === i ? "On the bill" : "Load"}</span>
            </button>
          </Container>
        ))}
        <Container as="li" id="IBKA 410030 5" tone="khaki" len={20} className={s.yardBox}>
          <a href="#voyages" className={s.yardLink}>Experience<span className={s.yardHint}>Jump ↓</span></a>
        </Container>
      </ol>
    </>
  );
}
