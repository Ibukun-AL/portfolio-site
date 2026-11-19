import Link from "next/link";
import { notFound } from "next/navigation";
import { work } from "@/content/work";
import s from "../../page.module.css";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = work.find((x) => x.slug === slug);
  return { title: w ? `${w.title} — Ibukun Aluko` : "Not found" };
}

export default async function Case({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = work.find((x) => x.slug === slug);
  if (!w) notFound();
  return (
    <main className={s.caseMain}>
      <p><Link href="/#work" className={s.textLink}>← All work</Link></p>
      <h1 className={s.caseTitle}>{w.title}</h1>
      <p className={s.tag}>{w.note}</p>
      <p className={s.lede}>{w.pitch}</p>
      <p className={s.stackLine}>{w.stack.join(" · ")}</p>
      <ul className={s.bullets}>{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
      <p className={s.links}>
        {w.demoUrl ? <a href={w.demoUrl}>Live demo</a> : <span className={s.tag}>Live demo: deploying soon</span>}
        {w.codeUrl && <a href={w.codeUrl}>Code</a>}
      </p>
    </main>
  );
}
