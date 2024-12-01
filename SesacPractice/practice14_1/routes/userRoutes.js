const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/index", userController.index);

module.exports = router;
