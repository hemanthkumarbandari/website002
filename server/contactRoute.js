import {
  isEmailTransportConfigured,
  sendContactEmails,
} from './contactEmail.js';

const MAX_LEN = { name: 200, email: 320, message: 8000 };

/**
 * Express uses res.status().json(); Vite dev / raw Node only have statusCode + end().
 */
function sendJson(res, status, body) {
  if (typeof res.status === 'function') {
    const chain = res.status(status);
    if (chain && typeof chain.json === 'function') {
      return chain.json(body);
    }
  }
  if (!res.headersSent) {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
  }
}

/** Normalize body for Express (parsed JSON) and Vercel (Buffer/string/object). */
function getJsonBody(req) {
  const raw = req.body;
  if (raw == null) return {};
  if (Buffer.isBuffer(raw)) {
    try {
      return JSON.parse(raw.toString('utf8') || '{}');
    } catch {
      return {};
    }
  }
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw || '{}');
    } catch {
      return {};
    }
  }
  return raw;
}

/**
 * Express- and Vercel-compatible handler (Node req/res).
 */
export async function handleContactPost(req, res) {
  const { name, email, message, quoteProducts } = getJsonBody(req) || {};

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return sendJson(res, 400, { ok: false, error: 'Invalid request body' });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return sendJson(res, 400, {
      ok: false,
      error: 'Name, email, and message are required',
    });
  }

  if (
    trimmedName.length > MAX_LEN.name ||
    trimmedEmail.length > MAX_LEN.email ||
    trimmedMessage.length > MAX_LEN.message
  ) {
    return sendJson(res, 400, { ok: false, error: 'Field too long' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return sendJson(res, 400, { ok: false, error: 'Invalid email address' });
  }

  let products = [];
  if (Array.isArray(quoteProducts)) {
    products = quoteProducts
      .filter((p) => typeof p === 'string')
      .map((p) => p.trim())
      .filter(Boolean)
      .slice(0, 50);
  }

  try {
    if (!isEmailTransportConfigured()) {
      return sendJson(res, 200, { ok: true, emailSkipped: true });
    }

    await sendContactEmails({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      quoteProducts: products,
    });
    return sendJson(res, 200, { ok: true });
  } catch (err) {
    const msg = String(err?.message || err);
    console.error('Contact email error:', msg);
    if (err?.response) {
      console.error('SMTP response:', err.response);
    }
    const isDev = process.env.NODE_ENV !== 'production';
    const gmailHint =
      /535|534|Invalid login|Authentication failed|Application-specific password/i.test(
        msg
      )
        ? ' Gmail: enable 2-Step Verification, then create an App Password (Google Account → Security → App passwords) and put that 16-character value in EMAIL_PASS (not your normal Gmail password). EMAIL_USER must be the same Gmail address. If EMAIL_FROM is set, it must be a verified "Send mail as" alias in Gmail.'
        : '';
    return sendJson(res, 500, {
      ok: false,
      error: 'Failed to send messages',
      ...(isDev && msg ? { details: msg + gmailHint } : {}),
    });
  }
}
