"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: any) {
    const { name, email, phone, website, services, timeline, source, message, formType } = formData;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "aeropublishingus@gmail.com",
        subject: `New Form Submission: ${formType || "General Contact"}`,
        text: `
      Form Details:
      Form Type: ${formType || "N/A"}
      Name: ${name || "N/A"}
      Email: ${email || "N/A"}
      Phone: ${phone || "N/A"}
      Website: ${website || "N/A"}
      Services: ${Array.isArray(services) ? services.join(", ") : services || "N/A"}
      Timeline: ${timeline || "N/A"}
      Source: ${source || "N/A"}
      Message: ${message || "N/A"}
    `,
        html: `
      <h2>New Form Submission</h2>
      <p><strong>Form Type:</strong> ${formType || "N/A"}</p>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
      ${services ? `<p><strong>Services:</strong> ${Array.isArray(services) ? services.join(", ") : services}</p>` : ""}
      ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
      ${source ? `<p><strong>Source:</strong> ${source}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message || "N/A"}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email" };
    }
}
