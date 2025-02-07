const express = require('express');
const app = express;
const PORT = 8080;

// socket.io 의 소켓이 http모듈로 생성된 서버에만 동작
const http = require('http');

const server = http.createServer(app);
const io = require('socket.io')(server);

// 미들웨어 설정
app.set('view engine', 'ejs');

// api
app.get('/', (req, res) => {
  res.render('client');
});

app.get('/practice1', (req, res) => {
  res.render('practice1');
});

app.get('/chat-room', (req, res) => {
  res.render('rooms');
});

// socket 코드 작성
io.on('connection', socket => {
  //   console.log(socket);
  console.log('socket.id>> ', socket.id);
  // -----
  // [on과 emit사용해보기]
  // 1. client > server > client
  socket.on('event_name', (arg1, arg2, arg3, cb) => {
    console.log('[event_name]:: ', arg1, arg2, arg3);
    cb(arg1, arg2, arg3); // emit에게 다시 데이터 전달
  });

  // 2. client > server
  socket.on('cb_test', (arg, cb) => {
    console.log('[cb_test]:: ', arg);
    console.log(cb); // undefined
  });

  // 3-1. server > client, 클라이언트 전체에게
  io.emit('entire_client', '전체에게 보냅니다!');
  // 3-2. server > client, 클라이언트 하나에게
  socket.emit('one_client', '하나의 클라이언트에게 보냅니다!');

  // ------ 채팅 만들기! ---------
  // ver1. 나의 메세지가 나에게만 보임
  socket.on('new_message1', (arg, cb) => {
    console.log('[new_message1]::', arg);
    cb(arg); // 나에게만 데이터를 전달
  });

  // ver2. 나의 메세지가 모두에게 보이도록
  socket.on('new_message2', arg => {
    console.log('[new_message2]::', arg);
    io.emit('message_render', arg);
  });

  // -------- 실습문제1 리더님
  //   socket.on("hello", (msg, cb) => {
  //     console.log("client:", msg);
  //     cb(msg);
  //   });

  //   socket.on("study", (msg) => {
  //     console.log("client:", msg);
  //     socket.emit("study2", msg);
  //   });

  //   socket.on("bye", (msg) => {
  //     console.log("client:", msg);
  //     socket.emit("bye2", msg);
  //   });

  // 실습문제1 코드 작성
  // app.use(express.static('public'));
  app.use(express.static('public')); // 클라이언트 파일 제공

  io.on('connection', socket => {
    console.log('Server Socket Connected.');

    socket.on('message', msg => {
      console.log('client:', msg);
      socket.emit('전송할 이벤트 명', `${msg}`);
    });
  });

  // ----- 방있는 채팅 -----
  //   console.log("socket.rooms", socket.rooms);
  // 방이 없을 때, {socket.id} 정보만 들어와있음
  //   console.log(socket.room); // undefined
  socket.on('join', roomname => {
    // 2. 서버에서 방열기
    // join(): 같은 방에 들어가있는 사람들끼리 통신할 수 있도록
    socket.join(roomname); // 방열기
    socket.room = roomname; // 다른 곳서도 roomname을 확인할 수 있도록 정보 추가
    // console.log("socket.rooms", socket.rooms);
    //  { 'hGbdCOOjZFhQJE6UAAAH', 'a' }

    // 3-1. 입장메세지 모두에게 보내기(server>client)
    // io.to(roomname).emit("userjoin", `[${socket.id}]님 입장`);
    // 3-2. 입장메세지 나를 제외하고 보내기(server>client)
    // broadcast: 내가 제외됨
    socket.broadcast.to(roomname).emit('userjoin', `[${socket.id}]님 입장`);
  });

  // 6. client > server, 전체 클라이언트에게 메세지 보내기
  socket.on('message', msg => {
    console.log('클라이언트의 메세지!', msg);

    // 내가 포함된 방? >> socket.room
    console.log('내가 포함된 방의 이름', socket.room);

    // 나포함 전체에게 메세지 전달
    io.to(socket.room).emit('message_toAll', msg, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
