const users = [
  { id: "allie", password: "1234" },
  { id: "john", password: "abcd" },
];

exports.findUser = (id, password) => {
  return users.find((user) => user.id === id && user.password === password);
};
