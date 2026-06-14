import express from "express";
import cors from "cors";
import { askAI } from "./ai.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/ai", async (req, res) => {
  const reply = await askAI(req.body.message);
  res.json({ reply });
});

app.listen(3000, () =>
  console.log("Running → http://localhost:3000")
);