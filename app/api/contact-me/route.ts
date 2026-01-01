"use server";
import ContactMeEmail from "@/emails/ContactMeEmail.email";
import resend from "@/lib/resend";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, subject, fullName, description } = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: process.env.MY_EMAIL_ADDRESS!,
      subject: subject,
      react: ContactMeEmail({ fullName, email, subject, description }),
    });
    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
