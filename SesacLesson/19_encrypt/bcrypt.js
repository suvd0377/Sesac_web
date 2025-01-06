const bcrypt = require("bcrypt");

const saltRounds = 10;

function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}

function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw);
}

const originalPw = "1234";
const hashedPw = hashPw(originalPw);
console.log("암호화된 비밀번호", hashPw);

const isMatch = comparePw("1234", hashedPw);
const isMatch2 = comparePw("12345", hashedPw);

console.log("비밀번허 일치? >> ", isMatch);
console.log("비밀번허 일치? >> ", isMatch2);
