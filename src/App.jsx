import { Route, Routes } from 'react-router-dom';
import {Home} from './components/views/Home';
import Login from './components/views/Login'; // Importa 'Home' como un componente
import './App.css';
import { AdminVerd } from './components/views/AdminVerd';




function App() {
  return (
    <div >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin" exact element={<AdminVerd />} />
      
       </Routes>
    </div>
  );
}

export default App;
