export const emitAdminEvent = (socket, message) => {
    if (socket) {
      socket.emit('admin-event', message);
    }
  };