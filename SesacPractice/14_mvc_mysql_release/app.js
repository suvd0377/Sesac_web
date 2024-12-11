const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// TODO: 404 에러 처리
app.get("*", (req, res) => {
  console.log("404 Error: ", req.url);
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
