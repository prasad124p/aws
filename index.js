const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello boka choda");
});
app.listen(3000);
