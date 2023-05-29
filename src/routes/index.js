"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// Get
router.get("/", ctrl.output.home);
// router.get("/login", ctrl.output.login);
// router.get("/register", ctrl.output.register);

router.get("/Seoul", ctrl.output.seoul);

// Post
// router.post("/login", ctrl.process.login);
// router.post("/register", ctrl.process.register);


module.exports = router;

