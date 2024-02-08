const express = require("express");
const fs = require("fs");
const { resolve } = require("path");

const app = express();
const port = 3010;

function getHTML(config) {
  const filePath = resolve(__dirname, "pages/index.html");
  const file = fs.readFileSync(filePath, "utf8");
  return file.replace("{{config}}", config);
}

app.get("/", (req, res) => {
  const gqlFile = fs.readFileSync(resolve(__dirname, "graphql/play.graphql"));
  const gql = gqlFile.toString();
  res.send(
    getHTML(
      "https://gist.githubusercontent.com/rajatbarman/133b55a83637592801069afdae22d804/raw/9d42263a95160be50cdc291a76f3313c34c6439e/gistfile1.graphql"
    )
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
