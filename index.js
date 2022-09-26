const express = require("express");
const app = express();
const apiRoute = require("./routes/api");
var port = 3000;
var path = require("path");

app.use("/api", apiRoute);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Servidor rodando na porta: " + port);
});
