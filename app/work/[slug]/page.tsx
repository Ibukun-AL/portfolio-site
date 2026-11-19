import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { profile } from "@/content/profile";
import { work } from "@/content/work";
import s from "../../page.module.css";

const TONES = ["teal", "oxide", "slate"] as const;
const IDS = ["IBKA 410027 4", "IBKA 410028 1", "IBKA 410029 9"];

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
  const i = work.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const w = work[i];
  return (
    <>
      <header className={s.bar}><Link href="/" className={s.brand}>Ibukun Aluko</Link><nav className={s.nav}><Link href="/#work">All work</Link></nav></header>
      <main className={s.caseMain}>
        <Container id={IDS[i]} tone={TONES[i]} len={40} className={s.caseBox}>
          <h1 className={s.caseTitle}>{w.title}</h1>
          <p className={s.plate}>{w.note}</p>
        </Container>
        <p className={s.lede}>{w.pitch}</p>
        <figure className={`${s.shot} ${s.caseShot}`}><Image src={w.image.src} alt={w.image.alt} width={w.image.w} height={w.image.h} sizes="(max-width: 860px) 100vw, 832px" priority /><figcaption>Screenshot of the running project</figcaption></figure>
        <ol className={`${s.stages} ${s.caseStages}`}>{w.stages.map(([k, v]) => <li key={k}><span className={s.stageK}>{k}</span><span>{v}</span></li>)}</ol>
        <p className={s.stackLine}>{w.stack.join(" · ")}</p>
        <ul className={s.bullets}>{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
        <p className={s.links}>
          {w.demoUrl ? <a href={w.demoUrl}>Live demo</a> : <span className={s.tag}>Live demo: deploying soon</span>}
          {w.codeUrl && <a href={w.codeUrl}>Code</a>}
        </p>
        <div className={s.caseNext}>
          <a className={s.cta} href={`mailto:${profile.email}`}>Email me</a>
          <Link className={s.textLink} href={`/work/${work[(i + 1) % work.length].slug}`}>Next: {work[(i + 1) % work.length].title}</Link>
        </div>
      </main>
    </>
  );
}
