import { Resend } from "resend";
import { handleContact } from "@/lib/contact";
import { profile } from "@/content/profile";

export async function POST(req: Request) {
  return handleContact(req, async (m) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: profile.email,
      replyTo: m.email,
      subject: `Portfolio message from ${m.name}`,
      text: `${m.message}\n\nFrom: ${m.name} <${m.email}>`,
    });
    if (error) throw new Error(error.message);
  });
}
