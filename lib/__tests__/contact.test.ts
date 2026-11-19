import { describe, expect, it } from "vitest";
import { handleContact } from "../contact";

const send = async () => {};
const req = (body: unknown, ip = "1.1.1.1") =>
  new Request("http://x/api/contact", { method: "POST", headers: { "x-forwarded-for": ip }, body: JSON.stringify(body) });
const valid = { name: "Sam", email: "sam@example.com", message: "Hello there, I'd like to talk about a role." };

describe("handleContact", () => {
  it("rejects an invalid email", async () => {
    expect((await handleContact(req({ ...valid, email: "nope" }, "a"), send)).status).toBe(400);
  });
  it("rejects an empty message", async () => {
    expect((await handleContact(req({ ...valid, message: "  " }, "b"), send)).status).toBe(400);
  });
  it("blocks the fourth request in an hour", async () => {
    for (let i = 0; i < 3; i++) expect((await handleContact(req(valid, "c"), send)).status).toBe(200);
    expect((await handleContact(req(valid, "c"), send)).status).toBe(429);
  });
  it("sends on valid input", async () => {
    let sent: unknown;
    const res = await handleContact(req(valid, "d"), async (m) => { sent = m; });
    expect(res.status).toBe(200);
    expect(sent).toMatchObject({ name: "Sam", email: "sam@example.com" });
  });
  it("ignores bot submissions that fill the honeypot", async () => {
    let called = false;
    const res = await handleContact(req({ ...valid, website: "spam.com" }, "e"), async () => { called = true; });
    expect(res.status).toBe(200);
    expect(called).toBe(false);
  });
  it("returns 502 when sending fails", async () => {
    const res = await handleContact(req(valid, "f"), async () => { throw new Error("boom"); });
    expect(res.status).toBe(502);
  });
});
