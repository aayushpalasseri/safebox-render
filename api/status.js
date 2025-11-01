export default async function handler(req, res) {
  return res.json({ status: "OK", time: new Date().toISOString() });
}
