const express = require("express");
const app = express();
const PORT = 8080;
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extenden: false }));
app.use(express.json());

const comments = [
  {
    id: 1,
    userid: "apple",
    date: "2024-10-23",
    comment: "ho~~~~~~~",
  },
  {
    id: 2,
    userid: "cocoa",
    date: "2024-7-25",
    comment: "hohoo~~~~~~~",
  },
  {
    id: 3,
    userid: "donut",
    date: "2024-1-23",
    comment: "bye~~~~~~~",
  },
  {
    id: 4,
    userid: "banana",
    date: "2024-3-2",
    comment: "hi~~~~~~~",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments", { commentInfos: comments });
});

app.get("/comment/:id", (req, res) => {
  console.log(req.paprams);
  //console.log(req.query);
  const commentId = req.params.id; //
  console.log("commenId:", commentId); // 1,2,3,4

  console.log(comments[commentId - 1]); // 댓글의 실제 정보
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }
  if (isNaN(commentId)) {
    res.render("404");
  } //Not a Number=Nan
  res.render("comment", { commentInfo: comments[commentId - 1] });
});

//[404error]
//반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
