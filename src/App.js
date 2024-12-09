import './App.css';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './Redux/Store';
import Router from './routes';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
function App() {
  const [socket, setSocket] = useState(null);
  let datas = JSON.parse(localStorage.getItem("auth"))
  useEffect(() => {
    const socketInstance = io('https://dinepoint-server.onrender.com/ws/v1/admin', {
      auth:{
        token: datas?.data?.token
      }
    });
    setSocket(socketInstance);
  
    // listen for events emitted by the server
  
    socketInstance.on('connect', () => {
      console.log('Connected to server');
    });
    const messageToSend = 'Hello from Admin!';
    socketInstance.emit('admin-event', messageToSend);
    socketInstance.on('message', (data) => {
      console.log(`Received message: ${data}`);
    });
    socketInstance.on('admin-update', (data) => {
      console.log('Received admin-update:', data);  // Set received message to state
    });
    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
