const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.json({ body: "hello world - " + Date.now() });
});

app.listen(process.env.API_PORT);
