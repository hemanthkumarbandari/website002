import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleContactPost } from './server/contactRoute.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const json = express.json({ limit: '64kb' });

function pathOnly(url) {
  if (!url) return '';
  return url.split('?')[0];
}

/**
 * Handles POST /api/contact and GET /api/health inside the Vite dev server so you
 * do not need a separate process on port 3001 (avoids proxy → ECONNREFUSED → 500).
 */
export function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method === 'GET' && pathOnly(req.url) === '/api/health') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true }));
          return;
        }

        if (req.method !== 'POST' || !req.url?.startsWith('/api/contact')) {
          return next();
        }

        json(req, res, (err) => {
          if (err) return next(err);
          handleContactPost(req, res).catch((e) => {
            console.error('[contact-api-dev]', e);
            if (!res.headersSent) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  ok: false,
                  error: 'Failed to send messages',
                  details: e?.message,
                })
              );
            }
          });
        });
      });
    },
  };
}
