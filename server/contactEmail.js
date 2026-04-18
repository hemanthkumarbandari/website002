import nodemailer from 'nodemailer';

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const normalizeGmailPass = (raw) => {
  if (raw == null || String(raw).trim() === '') return '';
  // App passwords are 16 chars; users often paste with spaces — Gmail expects no spaces
  return String(raw).replace(/\s/g, '');
};

const createTransporter = () => {
  const user = process.env.EMAIL_USER?.trim();
  const pass = normalizeGmailPass(process.env.EMAIL_PASS);
  if (!user || !pass) {
    throw new Error(
      'EMAIL_USER and EMAIL_PASS must be set in .env at the project root (see .env.example)'
    );
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
};

const fromAddress = () => process.env.EMAIL_FROM || process.env.EMAIL_USER;

const notifyAddress = () =>
  process.env.CONTACT_NOTIFY_EMAIL || process.env.EMAIL_USER;

/**
 * Thank-you email to the person who submitted the form
 */
export const sendContactThankYouEmail = async (customerEmail, customerName) => {
  const transporter = createTransporter();
  const safeName = escapeHtml(customerName);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Thank you for contacting us</title>
      <style>
        body { font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 20px; color: #333; }
        .container { max-width: 640px; margin: 0 auto; background: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); overflow: hidden; }
        .content { padding: 28px; line-height: 1.6; }
        .footer { padding: 16px; text-align: center; border-top: 1px solid #eee; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="content">
          <p>Hi ${safeName},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
          <p>If your inquiry is urgent, please call us using the number on our website.</p>
          <p>Best regards,<br/>Team ASP</p>
        </div>
        <div class="footer">This is an automated confirmation — please do not reply directly to this email.</div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: fromAddress(),
    to: customerEmail,
    subject: 'Thank you for contacting ASP',
    html,
  });
};

/**
 * Internal notification with submission details
 */
export const sendContactNotificationEmail = async ({
  name,
  email,
  message,
  quoteProducts,
}) => {
  const transporter = createTransporter();
  const to = notifyAddress();
  const products = Array.isArray(quoteProducts) ? quoteProducts : [];
  const productsHtml =
    products.length > 0
      ? `<ul>${products.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul>`
      : '<p><em>No products selected for quotation</em></p>';

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New contact form submission</title>
      <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; color: #222; }
        .box { max-width: 640px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 24px; }
        .label { color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.04em; margin-top: 16px; }
        .value { margin-top: 4px; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <div class="box">
        <h2 style="margin-top:0;">New contact form submission</h2>
        <div class="label">Name</div>
        <div class="value">${escapeHtml(name)}</div>
        <div class="label">Email</div>
        <div class="value">${escapeHtml(email)}</div>
        <div class="label">Message</div>
        <div class="value">${escapeHtml(message)}</div>
        <div class="label">Product details (quotation)</div>
        <div class="value">${productsHtml}</div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: fromAddress(),
    to,
    replyTo: email,
    subject: `Contact form: ${name}`,
    html,
  });
};

export const sendContactEmails = async (payload) => {
  // Sequential sends: parallel connections to Gmail can trigger auth/rate issues
  await sendContactThankYouEmail(payload.email, payload.name);
  await sendContactNotificationEmail(payload);
};
