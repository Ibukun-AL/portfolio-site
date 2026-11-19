import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import MotionToggle from "@/components/MotionToggle";
import Skills, { type Skill } from "@/components/Skills";
import Yard from "@/components/Yard";
import { experience } from "@/content/experience";
import { profile, smallBuilds } from "@/content/profile";
import { stack } from "@/content/stack";
import { work } from "@/content/work";
import s from "./page.module.css";

const TONES = ["teal", "oxide", "slate"] as const;
const IDS = ["IBKA 410027 4", "IBKA 410028 1", "IBKA 410029 9"];
const MINI = ["slate", "teal", "oxide", "khaki"] as const;

const esc = (x: string) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const mentions = (text: string, name: string) => new RegExp(`(^|[^a-z0-9])${esc(name.toLowerCase())}([^a-z0-9]|$)`).test(text.toLowerCase());
const EXPLICIT: Record<string, string[]> = {
  "LLM applications": ["Document Q&A assistant", "Receipt scanner and expense tracker"],
  "Retrieval and citations": ["Document Q&A assistant"],
  "Deep learning": ["MSc research", "IEEE publication", "MathWorks certificates"],
  TensorFlow: ["MSc research"],
  "scikit-learn": ["Disease risk prediction service"],
};
const skillGroups: Record<string, Skill[]> = Object.fromEntries(
  Object.entries(stack).map(([g, items]) => [g, items.map((name) => ({
    name,
    uses: [
      ...(EXPLICIT[name] ?? []),
      ...work.filter((w) => !EXPLICIT[name] && w.stack.some((x) => mentions(x, name))).map((w) => w.title),
      ...experience.filter((r) => mentions([r.summary, ...r.outcomes].join(" "), name)).map((r) => r.company),
    ],
  }))]),
);

export default function Home() {
  return (
    <>
      <header className={s.bar}>
        <a href="#top" className={s.brand}>Ibukun Aluko</a>
        <nav aria-label="Sections" className={s.nav}>
          <a href="#work">Work</a><a href="#voyages">Experience</a><a href="#manifest">Skills</a><a href="#contact">Contact</a>
        </nav>
        <MotionToggle className={s.motion} />
      </header>

      <main id="top">
        <section className={s.dock} aria-labelledby="h1">
          <div className={s.dockCopy}>
            <p className={s.kicker}>Shipped end to end</p>
            <h1 id="h1">Senior <span className={s.keep}>full-stack</span> engineer.</h1>
            <p className={s.lede}>Five years across fintech, SaaS and agencies. Web and mobile products with AI built in, on Spring Boot backends I can trust. Abuja, Nigeria, open to remote roles worldwide and in Nigeria.</p>
            <a className={s.cta} href={`mailto:${profile.email}`}>Email me</a>
          </div>
          <Yard work={work} />
        </section>

        <section id="work" className={`${s.section} ${s.workSec}`}>
          <Container id="IBKA 4031" tone="khaki" len={40} className={s.head}><h2>Selected work</h2></Container>
          <ol className={s.cargo}>
            {work.map((w, i) => (
              <li key={w.slug} className={s.slip}>
                <div className={`${s.slipBand} ${s[TONES[i]]}`}><span className={s.boxId}>{IDS[i]}</span><span className={s.plate}>{w.note}</span></div>
                <div className={s.slipGrid}>
                <div className={s.slipBody}>
                  <h3><Link href={`/work/${w.slug}`}>{w.title}</Link></h3>
                  <p>{w.pitch}</p>
                  <p className={s.links}>
                    <Link href={`/work/${w.slug}`}>Read the case study</Link>
                    {w.demoUrl && <a href={w.demoUrl}>Live demo</a>}
                    {w.codeUrl && <a href={w.codeUrl}>Code</a>}
                  </p>
                </div>
                <figure className={s.shot}><Image src={w.image.src} alt={w.image.alt} width={w.image.w} height={w.image.h} sizes="(max-width: 860px) 100vw, 480px" /></figure>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="voyages" className={s.section}>
          <Container id="IBKA 410030 5" tone="khaki" len={40} className={s.head}><h2>Experience</h2></Container>
          <ol className={s.ledger}>
            {experience.map((r) => (
              <li key={r.company}>
                <p className={s.dates}>{r.dates}</p>
                <div>
                  <h3>{r.role}, {r.company}</h3>
                  <p className={s.tag}>{r.location} · {r.summary}</p>
                  <ul className={s.bullets}>{r.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="manifest" className={s.section}>
          <Container id="IBKA 4032" tone="khaki" len={40} className={s.head}><h2>Skills</h2></Container>
          <Skills groups={skillGroups} />
          <h3 className={s.small}>Research and education</h3>
          <div className={s.papers}>
            <article className={s.paper}>
              <p className={s.paperK}>Publication</p>
              <h4>{profile.publication.title}</h4>
              <p>{profile.publication.authors}. {profile.publication.venue}.</p>
            </article>
            {profile.education.map((e) => (
              <article key={e.degree} className={s.paper}>
                <p className={s.paperK}>{e.dates}</p>
                <h4>{e.degree}</h4>
                <p>{e.school}. {e.note}</p>
              </article>
            ))}
            {profile.certificates.map((c) => (
              <article key={c} className={s.paper}>
                <p className={s.paperK}>Certificate</p>
                <h4>{c}</h4>
              </article>
            ))}
          </div>
          <h3 className={s.small}>Smaller builds</h3>
          <ul className={s.minis}>
            {smallBuilds.map((b, i) => (
              <li key={b.name} className={s.mini}>
                <Container id={`IBKA 41${i}0 0`} tone={MINI[i % 4]} len={20} className={s.miniBox}>
                  <p className={s.miniName}>{b.name}</p>
                  <p className={s.miniNote}>{b.note}</p>
                </Container>
                <Image className={s.miniShot} src={b.image} alt={b.alt} width={800} height={500} sizes="(max-width: 860px) 50vw, 300px" />
                <p className={s.miniLinks}>
                  <a href={b.demo}>Live demo</a>
                  <a href={b.code}>Code</a>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className={`${s.section} ${s.port}`}>
          <h2>Contact</h2>
          <p>The fastest way to reach me is <a href={`mailto:${profile.email}`}>{profile.email}</a>, or use the form.</p>
          <ContactForm />
          <p className={s.links}>
            {profile.github && <a href={profile.github}>GitHub</a>}
            {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
          </p>
        </section>
      </main>
      <footer className={s.footer}>© 2026 {profile.name}</footer>
    </>
  );
}
