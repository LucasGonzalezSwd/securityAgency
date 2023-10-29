import { useState } from 'react';
import { useCustomNavigation } from '../CustomNavigation';
import { Link } from "react-router-dom"
import {  faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useCustomNavigation();

  const handleLogin = async () => {
    const response = await fetch(`https://barbershopclub.hair/acap/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.isAdmin) {
        // El usuario es un administrador, realiza la redirección a "/admin" o al panel de administración
        // Puedes utilizar useHistory o cualquier enrutador que estés utilizando
       navigate('/admin');
        
      
      } else {
        alert('Credenciales incorrectas');
      }
    } else {
      alert('Error al iniciar sesión');
    }
  }
  return (
    <div className='flex flex-col  w-screen h-screen justify-center items-center'>
        <h1 className='mb-[2rem] -mt-[2rem] text-xl'>
           INGRESAR AL PANEL DE ADMIN
        </h1>
        <Link to="/"><button className='bg-gray-700 w-[3.5rem] h-[3.5rem] rounded-full absolute top-0 left-0 ml-[1.5rem] mt-[1rem]'>
        <FontAwesomeIcon icon={faArrowLeft} style={{color: "#fff",}} />
        </button></Link>
        <div action="" className='flex flex-col justify-center items-center w-2/4 h-2/4 bg-gray-700 rounded-md' >
      <label className='text-white' htmlFor="email">Usuario </label>
      <input
      className='rounded-sm mb-[1rem] pl-[0.1rem]'
        type="text"
        placeholder="Nombre de usuario"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className='text-white' htmlFor="password">Contraseña </label>
      <input
      className='rounded-sm mb-[1.5rem] pl-[0.1rem]'
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='text-black bg-gray-200 p-[0.3rem] rounded-sm' onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
}
export default Login;
