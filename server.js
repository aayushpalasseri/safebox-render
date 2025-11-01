import express from "express";
import createToken from "./api/createToken.js";
import approveHandler from "./api/approve.js";
import statusHandler from "./api/status.js";

const app = express();
app.use(express.json());

// Map Vercel-style routes to Express
app.post("/api/createToken", createToken);
app.get("/api/approve/:token", approveHandler);
app.get("/api/status/:token", statusHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
