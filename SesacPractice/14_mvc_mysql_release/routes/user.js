// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser"); // 컨트롤러를 import
const router = express.Router();

// 라우트 설정
router.get("/", controller.getmain);
router.get("/signup", controller.getSignup);
router.post("/signup", controller.postSignup);

router.get("/signin", controller.getSignin);
router.post("/signin", controller.postSignin);

router.get("/profile", controller.getProfile);
router.post("/profile", controller.postProfile);
router.patch("/profile/edit", controller.patchProfile);
router.delete("/profile/delete", controller.deleteProfile);

module.exports = router;
