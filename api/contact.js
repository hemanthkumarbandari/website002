import { handleContactPost } from '../server/contactRoute.js';

/**
 * Vercel may leave the body unparsed or use Buffer — normalize before the shared handler.
 */
async function ensureJsonBody(req) {
  if (req.body !== undefined && req.body !== null) {
    const raw = req.body;
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
    if (typeof raw === 'object') {
      return raw;
    }
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const str = Buffer.concat(chunks).toString();
  try {
    return JSON.parse(str || '{}');
  } catch {
    return {};
  }
}

/**
 * Vercel Serverless Function — same logic as local Express `/api/contact`.
 * Set EMAIL_USER, EMAIL_PASS, CONTACT_NOTIFY_EMAIL in Vercel → Project → Settings → Environment Variables.
 */
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = await ensureJsonBody(req);
  return handleContactPost({ body }, res);
}
