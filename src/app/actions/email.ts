"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: any) {
    const { name, email, phone, website, services, timeline, source, message, formType, genre, pages } = formData;

    const GMAIL_USER = process.env.GMAIL_USER || "aeropublishingus@gmail.com";
    const GMAIL_PASS = process.env.GMAIL_PASS || "rjzj zxso dfbk nzzv";

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: GMAIL_USER,
        to: "aeropublishingus@gmail.com",
        subject: `New Form Submission: ${formType || "General Contact"}`,
        text: `
      Form Details:
      Form Type: ${formType || "N/A"}
      Name: ${name || "N/A"}
      Email: ${email || "N/A"}
      Phone: ${phone || "N/A"}
      Website: ${website || "N/A"}
      Genre: ${genre || "N/A"}
      Pages: ${pages || "N/A"}
      Services: ${Array.isArray(services) ? services.join(", ") : services || "N/A"}
      Timeline: ${timeline || "N/A"}
      Source: ${source || "N/A"}
      Message: ${message || "N/A"}
    `,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #3F3774; border-bottom: 2px solid #FE695B; padding-bottom: 10px;">New Form Submission</h2>
        <p><strong>Form Type:</strong> ${formType || "N/A"}</p>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        ${genre ? `<p><strong>Genre:</strong> ${genre}</p>` : ""}
        ${pages ? `<p><strong>Pages:</strong> ${pages}</p>` : ""}
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
        ${services ? `<p><strong>Services:</strong> ${Array.isArray(services) ? services.join(", ") : services}</p>` : ""}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
        ${source ? `<p><strong>Source:</strong> ${source}</p>` : ""}
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message || "N/A"}</p>
        </div>
        <footer style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
            <p>This email was sent from the Aero Publishing website contact form.</p>
        </footer>
      </div>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return { success: true, message: "Email sent successfully" };
    } catch (error: any) {
        console.error("Error sending email:", error);
        return { success: false, message: error.message || "Failed to send email" };
    }
}
