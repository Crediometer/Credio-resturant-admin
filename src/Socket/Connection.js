import io from 'socket.io-client';

export const createSocketConnection = (token) => {
  const socketInstance = io('https://dinepoint-server.onrender.com/ws/v1/admin', {
    auth: {
      token,
    },
  });
  return socketInstance;
};