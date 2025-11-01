import express from "express";
import createToken from "./api/createToken.js";
import approve from "./api/approve.js";
import status from "./api/status.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ SafeBox Render server is running");
});

app.post("/api/createToken", createToken);
app.get("/api/approve/:token", approve);
app.get("/api/status", status);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
