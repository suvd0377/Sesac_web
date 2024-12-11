const express = require("express");
const db = require("./models");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

// 미들웨어처리
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

// 라우터
const indexRouter = require("./routes");
app.use("/", indexRouter);

// 404 에러처리
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  // console.log(result);
  console.log("DB연결 성공!");
  // 포트열기
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
