const crypto = require("crypto");

const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log(createHashPW("1234"));
console.log(createHashPW("1234"));
console.log(createHashPW("1234"));
console.log(createHashPW("1234."));

function saltAndHashPW(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm)
    .toString("base64");
  return { salt, hash };
}

console.log("pbkdf2Sync >>", saltAndHashPW("1234"));
console.log("pbkdf2Sync >>", saltAndHashPW("1234"));
console.log("pbkdf2Sync >>", saltAndHashPW("1234"));

function checkPW(inputPw, savedSalt, savedHash) {
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";
  const hash = crypto
    .pbkdf2Sync(inputPw, savedsalt, iterations, keylen, algorithm)
    .toString("base64");

  return hash === savedHash;
}
const realPw = "qwer1234";
const data = saltAndHashPw(realPw);
console.log(data);
const { salt: DBsalt, hash: DBhash } = data;
const isMatch = checkPW("qwer1234!", DBsalt, DBhash);
const isMatch2 = checkPW("qwer1234", DBsalt, DBhash);
console.log(isMatch);
console.log(isMatch2);

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const algorithm = "aes-256-cbc";
const originalMessage = "hello, world";

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "base64");

  encrypted += cipher.final("base64");

  return encrypted;
}
console.log(encrypt(originalMessage));
console.log(encrypt(originalMessage));
function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "base64", "utf8");

  decrypted += decipher.final("utf8");

  return decrypted;
}

const encryptedMessage = encrypt(originalMessage);
console.log("암호화된 문장", encryptedMessage);
console.log("복호화된 문장");
