// TODO: 컨트롤러 코드
const User = require("../model/User");

/** /user GET */
exports.getmain = (req, res) => {
  res.render("index");
};

/** /user/signup GET */
exports.getSignup = (req, res) => {
  res.render("signup");
};

/** /user/signup POST */
exports.postSignup = (req, res) => {
  // console.log(req.body);
  User.postSignup(req.body, (result) => {
    res.send({
      id: result,
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    });
  });
};

/** /user/signin GET */
exports.getSignin = (req, res) => {
  res.render("signin");
};

/** /user/signin POST */
exports.postSignin = (req, res) => {
  console.log(req.body);
  User.postSignin(req.body, (result) => {
    console.log(result);
    res.send(result);
  });
};
/** /user/profile GET */
exports.getProfile = (req, res) => {
  const userData = {
    userid: "",
    name: "",
    pw: "",
  };

  res.render("profile", { data: userData });
};
/** /user/profile POST */
exports.postProfile = (req, res) => {
  console.log(req.body);
  User.postSignin(req.body, (result) => {
    console.log(result);
    res.render("profile", { data: result });
  });
};

/** /user/profile DELETE */
exports.deleteProfile = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Profile.deleteProfile(req.body.id, () => {
    res.send(req.body.id + "번 id 삭제완료");
  });
};

/** /user/profile PATCH */
exports.patchProfile = (req, res) => {
  console.log(req.body);
  Profile.patchProfile(req.body.id, () => {
    res.send("수정 완료");
  });
};
