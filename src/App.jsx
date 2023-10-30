import { Route, Routes } from 'react-router-dom';
import {Home} from './components/views/Home';
import { AdminPanel } from './components/views/AdminPanel';
import Login from './components/views/Login'; // Importa 'Home' como un componente
import './App.css';
// import MobileNavBAr from './components/views/MobileNavBAr';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin" exact element={<AdminPanel />} />
        {/* <Route path="/home2" exact element={<MobileNavBAr/>} /> */}
       </Routes>
    </div>
  );
}

export default App;
