const WINDOW_MS = 3_600_000;
const LIMIT = 3;
const hits = new Map<string, number[]>();

export type Message = { name: string; email: string; message: string };
export type Send = (m: Message) => Promise<void>;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

export async function handleContact(req: Request, send: Send): Promise<Response> {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= LIMIT) return json({ error: "Too many messages. Please try again later or email me directly." }, 429);
  recent.push(now);
  hits.set(ip, recent);

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {}
  if (body.website) return json({ ok: true }, 200); // honeypot: pretend success

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || message.length > 4000) {
    return json({ error: "Please add your name, a valid email and a message." }, 400);
  }
  try {
    await send({ name, email, message });
    return json({ ok: true }, 200);
  } catch {
    return json({ error: "Couldn't send that right now. Please email me directly." }, 502);
  }
}
