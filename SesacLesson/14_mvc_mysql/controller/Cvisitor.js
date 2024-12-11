const Visitor = require("../model/Visitor");
// console.log(Visitor.getVisitors());

/* / GET */
exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */
exports.getVisitors = (req, res) => {
  // [DB 연결전]
  // res.render("visitors", { data: Visitor.getVisitors() });
  // [DB 연결후]
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};

/* /visitor/:id GET*/
exports.getVisitor = (req, res) => {
  console.log(req.params); // {id:'1'}
  console.log(req.params.id); // '2'
  Visitor.getVisitor(req.params.id, (result) => {
    console.log("한 개의 데이터 Cvisitor.js", result);
    res.send(result);
  });
};

/* /visitor POST, 등록*/
exports.postVisitor = (req, res) => {
  console.log("req.body", req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

/* /visitor DELETE, 삭제 */
exports.deleteVisitor = (req, res) => {
  console.log(req.body); // { id: '3' }
  console.log(req.body.id); // '3'
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "번 id 삭제완료");
  });
};

/* /visitor PATCH, 수정 */
exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정 완료");
  });
  // res.send("response patch!");
};
