"use client";
import { useState } from "react";
import s from "@/app/page.module.css";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      const body = await res.json();
      if (res.ok) { setState("sent"); (e.target as HTMLFormElement).reset(); }
      else { setState("error"); setMsg(body.error ?? "Something went wrong."); }
    } catch {
      setState("error");
      setMsg("Couldn't reach the server. Please email me directly.");
    }
  }

  return (
    <form onSubmit={submit} className={s.form}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Message<textarea name="message" rows={5} required maxLength={4000} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className={s.honeypot} />
      <button className={s.cta} disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
      <p role="status" aria-live="polite" className={s.status}>
        {state === "sent" && "Thanks, I'll reply soon."}
        {state === "error" && msg}
      </p>
    </form>
  );
}
