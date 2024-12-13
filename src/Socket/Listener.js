export const setupSocketListeners = (socket, handleMessages) => {
    // Example of event listeners
    socket.on('connect', () => {
      console.log('Connected to server');
    });
  
    socket.on('message', (data) => {
      console.log(`Received message: ${data}`);
      if (handleMessages) handleMessages(data);
    });
  
    socket.on('admin-update', (data) => {
      console.log('Received admin-update:', data);
    });
  
    // You can add more listeners as needed
};

export const cleanupListeners = (socket) => {
    if (socket) {
        socket.off('connect');
        socket.off('message');
        socket.off('admin-update');
        // Remove other listeners as needed
    }
};