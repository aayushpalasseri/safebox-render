export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const AUTH = process.env.SVC_SECRET || 'DEV_SECRET';
  const authHeader = req.headers.authorization || '';
  if (authHeader !== `Bearer ${AUTH}`) return res.status(403).json({ error: 'forbidden' });

  const token = Math.random().toString(36).substr(2, 8).toUpperCase();

  globalThis.securebox = globalThis.securebox || {};
  globalThis.securebox[token] = { status: 'pending', createdAt: Date.now() };

  const host = req.headers.host;
  const approveUrl = `https://${host}/api/approve/${token}`;

  return res.status(200).json({ token, link: approveUrl, expiresInSec: 10 * 60 });
}

