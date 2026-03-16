import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const formData = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    let photosHtml = "";
    if (formData.photos?.length) {
      photosHtml = formData.photos.map((p: string, i: number) => `<p>Foto ${i+1}: <a href="${p}">Ver imagen</a></p>`).join("");
    }

    let html = "<h2>Nueva Solicitud de Servicio</h2>";
    html += "<ul>";
    for (const key in formData) {
      if (key === "photos") continue;
      html += `<li><strong>${key}:</strong> ${formData[key]}</li>`;
    }
    html += "</ul>";
    html += photosHtml;

    await transporter.sendMail({
      from: `"${formData.name}" <${formData.email}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: "Nueva Solicitud de Servicio",
      html,
    });

    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Error al enviar correo" });
  }
}