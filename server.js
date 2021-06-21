const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const cors = require("cors");
const fs = require("fs-extra");
const app = express();

app.use(cors());

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/docs")));

// this * route is to serve project on different page routes except root `/`
app.get(new RegExp("^(?!/api(/|$))"), function (req, res) {
  res.sendFile(path.join(__dirname, "/docs/index.html"));
});

app.get("/api/articles", (_req, res) => {
  fs.readJson("./db.json", (err, db) => {
    if (err) {
      console.error(err);
      res.sendStatus(404);
    }
    res.json(db);
  });
});
app.get("/api/articles/:id", (req, res) => {
  fs.readJson("./db.json", (err, db) => {
    if (err) {
      console.error(err);
      res.sendStatus(404);
    }
    const article = db.articles.find(art => art.id == req.params.id);
    res.json({
      article
    });
  });
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);