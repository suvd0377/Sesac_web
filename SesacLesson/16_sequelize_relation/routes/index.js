const express = require("express");

const Router = express.Router();

const controller = require("../controller/Cmain");
router.get("/", controller.main);
router.get("/players/:playerId", controller);

router.post("/players", controller.postPlayer);

//
router.get("/teams", controller.getTeams);

module.exports = Router;
