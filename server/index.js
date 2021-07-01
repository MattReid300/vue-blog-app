const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const morgan = require("morgan");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");

const db = low(adapter);
const app = express();

app.use(morgan("dev"));

// Set some defaults
// db.defaults({
//   articles: []
// }).write();

//here we are configuring docs to serve app files
app.use("/", serveStatic(path.join(__dirname, "../docs")));

app.get("/api/articles", async (req, res) => {
  const articles = db.get("articles");
  console.log(articles);
  res.json(articles);
});

app.get("/api/articles/:id", async (req, res) => {
  const article = db
    .get("articles")
    .find({
      id: Number(req.params.id)
    })
    .value();
  res.json(article);
});

// this * route is to serve project on different page routes except root `/`
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../docs/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`app is listening on port: ${port}`);
