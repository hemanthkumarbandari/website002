import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleContactPost } from './contactRoute.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const mailConfigured =
  Boolean(process.env.EMAIL_USER?.trim()) &&
  Boolean(String(process.env.EMAIL_PASS ?? '').replace(/\s/g, ''));
if (!mailConfigured) {
  console.warn(
    '[contact API] EMAIL_USER / EMAIL_PASS missing in .env — contact POST will fail. Copy .env.example to .env and restart.'
  );
}

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : true,
  })
);
app.use(express.json({ limit: '64kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', handleContactPost);

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
});
