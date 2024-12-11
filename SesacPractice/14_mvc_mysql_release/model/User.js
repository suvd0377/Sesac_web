// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "Mindy815",
  database: "sesac",
});
// TODO: 모델 코드

//데이터 조회
exports.getuser = (id, cb) => {
  conn.query(`SELECT * FROM user WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("user table", rows);
    cb(rows[0]);
  });
};

// 데이터 등록
exports.postSignup = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUE (null, '${data.userid}', '${data.name}', '${data.pw}')`,
    (err, rows) => {
      if (err) throw err;
      console.log("model post", rows);
      cb(rows.insertId);
    }
  );
};

// 데이터 수정
exports.patchProfile = (data, cb) => {
  console.log("model data", data);
  conn.query(
    `UPDATE user
    SET id="${data.userid}", name="${data.name}", password="${data.pw}"
    WHERE id=${data.id} `,
    (err, rows) => {
      if (err) throw err;
      console.log("User.js 수정", rows);
      cb();
    }
  );
};

// 데이터 삭제
exports.deleteProfile = (id, cb) => {
  conn.query(`DELETE FROM user WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("user.js 삭제", rows);
    cb();
  });
};
