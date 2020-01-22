var path = require("path");
var express = require("express");
var expenses = require("./routers/expenses");

const ASSET_DIR = path.join(__dirname, "..", "dist");

express()
  .use(express.static(ASSET_DIR))
  .use(express.json())
  .use("/api", expenses)
  .get("*", (req, res) => {
    res.sendFile(path.join(ASSET_DIR, "index.html"));
  })
  .listen(process.env.PORT || 3000);
