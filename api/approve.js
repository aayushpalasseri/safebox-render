export default async function handler(req, res) {
  const { token } = req.query;
  globalThis.securebox = globalThis.securebox || {};

  if (!globalThis.securebox[token]) {
    return res.status(404).send('<h3>Invalid token</h3>');
  }

  globalThis.securebox[token].status = 'approved';
  globalThis.securebox[token].approvedAt = Date.now();

  res.setHeader('Content-Type', 'text/html');
  return res.send(`
    <html><body style="font-family:sans-serif;text-align:center;padding:40px;">
      <h1>✔ Box Unlocked</h1>
      <p>Token <b>${token}</b> has been approved. You may close this page.</p>
    </body></html>
  `);
}
