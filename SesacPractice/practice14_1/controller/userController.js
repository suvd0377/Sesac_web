const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  const { id, password } = req.body;

  const user = User.findUser(id, password);
  if (user) {
    res.status(200).send("로그인 성공!");
  } else {
    res.status(400).send("아이디 또는 비밀번호 오류! &#128552");
  }
};
