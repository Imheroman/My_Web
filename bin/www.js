// 서버 가동을 위한 js 파일
"use strict";

const app = require("../app");
const PORT = 3000;

app.listen(PORT, function () {
    console.log("Server on.");
});