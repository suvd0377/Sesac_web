const express = require("express");
const app = express();
console.log("db pw", process.env.DB_PASSWORD); // config()위에서는 env정보를 읽을 수 없다.
// console.log(process.env);
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
console.log("PORT number", PORT);
console.log("db name", process.env.DB_DATABSE);

app.get("/", (req, res) => {
  res.send("get요청입니다.");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
