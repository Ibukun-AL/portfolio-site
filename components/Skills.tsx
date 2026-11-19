"use client";
import { useState } from "react";
import s from "@/app/page.module.css";

export type Skill = { name: string; uses: string[] };

export default function Skills({ groups }: { groups: Record<string, Skill[]> }) {
  const [on, setOn] = useState<Skill | null>(null);
  return (
    <div>
      <dl className={s.manifest}>
        {Object.entries(groups).map(([g, items]) => (
          <div key={g}>
            <dt>{g}</dt>
            <dd>
              {items.map((k) => (
                <button key={k.name} type="button" className={s.chip} aria-pressed={on?.name === k.name} onClick={() => setOn(on?.name === k.name ? null : k)}>{k.name}</button>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <p className={s.usedIn} aria-live="polite" data-empty={!on || !on.uses.length}>
        {on && on.uses.length ? <><strong>{on.name}</strong> shows up in: {on.uses.join(", ")}.</> : on ? "" : "Pick a skill to see where I have used it."}
      </p>
    </div>
  );
}
