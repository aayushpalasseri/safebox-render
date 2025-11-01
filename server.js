import express from "express";
import createTokenHandler from "./api/createToken.js";
import approveHandler from "./api/approve.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Route for createToken
app.post("/api/createToken", (req, res) => {
  createTokenHandler(req, res);
});

// Route for approve
app.get("/api/approve/:token", (req, res) => {
  req.query = { token: req.params.token };
  approveHandler(req, res);
});

// Default route (for sanity check)
app.get("/", (req, res) => {
  res.send("✅ SafeBox Render server is running");
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
