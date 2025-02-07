import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080', { autoConnect: false });
export default function Start() {
  const initSocketConnect = () => {
    // console.log(socket.connected);
    if (!socket.connected) socket.connect(); //소켓과 접속하는 코드
  };
  useEffect(() => {
    initSocketConnect();

    socket.emit('test', '테스트');
    socket.on('test2', str => {
      console.log('서버에서 온 메세지', str);
    });
  });
  return <p>소켓 연결</p>;
}
