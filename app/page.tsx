import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { experience } from "@/content/experience";
import { profile, smallBuilds } from "@/content/profile";
import { stack } from "@/content/stack";
import { work } from "@/content/work";
import s from "./page.module.css";

const sections = [["Work", "work"], ["Experience", "experience"], ["Stack", "stack"], ["Research", "research"], ["Contact", "contact"]];

export default function Home() {
  return (
    <div className={s.shell}>
      <aside className={s.side}>
        <p className={s.name}>{profile.name}</p>
        <p className={s.where}>{profile.location}</p>
        <nav aria-label="Sections" className={s.nav}>
          <ul>{sections.map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
        </nav>
        <p className={s.open}>{profile.availability}</p>
      </aside>

      <main className={s.main}>
        <header className={s.hero}>
          <h1>{profile.headline}</h1>
          <p>Four years across payments, public-sector systems and applied ML. Currently looking for a product engineering role where I can ship web and mobile features end to end.</p>
          <div className={s.heroActions}>
            <a className={s.cta} href={`mailto:${profile.email}`}>Email me</a>
            <a className={s.textLink} href="#work">See the work</a>
          </div>
        </header>

        <section id="work" className={s.section}>
          <h2>Selected work</h2>
          <ol>
            {work.map((w, i) => (
              <li key={w.slug} className={s.entry}>
                <span className={s.mono}>0{i + 1}</span>
                <div>
                  <h3><Link href={`/work/${w.slug}`}>{w.title}</Link></h3>
                  <p>{w.pitch}</p>
                  <p className={s.stackLine}>{w.stack.join(" · ")}</p>
                  <p className={s.tag}>{w.note}</p>
                  <p className={s.links}>
                    <Link href={`/work/${w.slug}`}>Case study</Link>
                    {w.demoUrl && <a href={w.demoUrl}>Live demo</a>}
                    {w.codeUrl && <a href={w.codeUrl}>Code</a>}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="experience" className={s.section}>
          <h2>Experience</h2>
          <ol>
            {experience.map((r) => (
              <li key={r.company} className={s.entry}>
                <span className={s.mono}>{r.dates}</span>
                <div>
                  <h3>{r.role}, {r.company}</h3>
                  <p className={s.tag}>{r.location} · {r.summary}</p>
                  <ul className={s.bullets}>{r.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="stack" className={s.section}>
          <h2>Stack</h2>
          <dl className={s.stack}>
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}><dt>{group}</dt><dd>{items.join(", ")}</dd></div>
            ))}
          </dl>
        </section>

        <section id="research" className={s.section}>
          <h2>Research and education</h2>
          <p className={s.pub}><strong>{profile.publication.title}.</strong> {profile.publication.authors}. {profile.publication.venue}.</p>
          <ul className={s.bullets}>
            {profile.education.map((e) => <li key={e.degree}>{e.degree}, {e.school}, {e.dates}</li>)}
            {profile.certificates.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <h3 className={s.small}>Smaller builds</h3>
          <ul className={s.bullets}>{smallBuilds.map((b) => <li key={b.name}>{b.name}: {b.note}</li>)}</ul>
        </section>

        <section id="contact" className={s.section}>
          <h2>Contact</h2>
          <p>The fastest way to reach me is <a href={`mailto:${profile.email}`}>{profile.email}</a>, or use the form.</p>
          <ContactForm />
          <p className={s.links}>
            {profile.github && <a href={profile.github}>GitHub</a>}
            {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
          </p>
        </section>

        <footer className={s.footer}>© 2026 {profile.name}</footer>
      </main>
    </div>
  );
}
