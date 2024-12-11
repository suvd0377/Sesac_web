const express = require("express");
const multer = require("multer");
const { userInfo } = require("os");
const path = require("path");
const app = express();
const PORT = 8080;

/** 미들웨어 설정 */
// 1. view engine 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 3. static 폴더 설정
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// 4. multer 설정
const uploadSetting = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      // userid, name, pw, file..
      //req.body.userid == "id"
      done(null, req.body.userid + Date.now() + ext);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", uploadSetting.single("profileImg"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  //res.send("요청 잘 받았다")
  res.render("result", {
    userInfo: req.body,
    src: req.file.path,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
