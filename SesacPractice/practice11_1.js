//Promise
function changeBackgroundColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.background = color;
      resolve(); //resolve로 then으로 성공했음을 알림
    }, 1000);
  });
}

//promise 객체 > then을 이용한 changing
changeBackgroundColor("red")
  .then(() => {
    return changeBackgroundColor("orange");
  })
  .then(() => {
    return changeBackgroundColor("yellow");
  })
  .then(() => {
    return changeBackgroundColor("green");
  })
  .then(() => {
    return changeBackgroundColor("blue");
  });

//async await

async function execute() {
  await changeBackgroundColor("red", 1000);
  await changeBackgroundColor("orange", 1000);
  await changeBackgroundColor("yellow", 1000);
  await changeBackgroundColor("green", 1000);
  await changeBackgroundColor("blue", 1000);
}
execute();
