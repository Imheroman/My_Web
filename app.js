"use stirct";

const express = require("express");
const app = express();

app.set("views", "./src/views"); // 파일명, 폴더명 

app.get("/", (req, res) => {
    res.send("This is root. there");
});

module.exports = app;