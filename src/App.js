import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </div>
  );
}

export default App;
