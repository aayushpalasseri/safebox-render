export default function handler(req, res) {
  res.status(200).json({
    status: "OK",
    unlock: true, // change to true when you want to unlock
    time: new Date().toISOString(),
  });
}
