import { Route, Routes } from 'react-router-dom';
import {Home} from './components/views/Home';
import { AdminPanel } from './components/views/AdminPanel';
import Login from './components/views/Login'; // Importa 'Home' como un componente
import './App.css';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin"  element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
