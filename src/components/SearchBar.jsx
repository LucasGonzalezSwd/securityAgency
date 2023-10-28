import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAcapByName } from '../redux/actions';
import {faRotate,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(fetchAcapByName(searchTerm));
    setSearchTerm('')
  };
  const handleReload = () => {
    dispatch(fetchAcapByName(''));
  };

  return (
    <div className='flex w-full justify-end mt-[1.8rem] '>
        <Link to="/"><button className='bg-slate-700 w-[3.5rem] h-[3.5rem] rounded-full absolute top-0 left-0 ml-[1.5rem] mt-[1rem]'>
        <FontAwesomeIcon icon={faArrowLeft} style={{color: "#fff",}} />
        </button></Link>
      <input
      className='border-slate-700 border-[0.09rem] pl-[0.2rem] w-[13rem]'
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='ml-4 p-[0.3rem] w-[5rem] text-white bg-slate-700 rounded-md' onClick={handleSearch}>Buscar</button>
      <button className='ml-4 p-[0.3rem] w-[2.5rem] text-white bg-slate-700 rounded-md' onClick={handleReload}><FontAwesomeIcon icon={faRotate} style={{color: "#ffffff",}} /></button>
       
    </div>
  );
};

export default SearchBar;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAcapByName, fetchAllAcaps } from '../redux/actions';

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState('');
//   const acaps = useSelector((state) => state.acaps);

//   useEffect(() => {
//     if (searchTerm === '') {
//       // Si el campo de búsqueda está vacío, muestra todos los elementos.
//       dispatch(fetchAllAcaps());
//     } else {
//       // Realiza la búsqueda solo si el campo de búsqueda no está vacío.
//       const delayDebounceFn = setTimeout(() => {
//         dispatch(fetchAcapByName(searchTerm));
//       }, 500);

//       return () => clearTimeout(delayDebounceFn);
//     }
//   }, [searchTerm, dispatch]);

//   const handleReload = () => {
//     setSearchTerm(''); // Vuelve a establecer el campo de búsqueda como vacío.
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Buscar por nombre"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleReload}>Reload</button>
//     </div>
//   );
// };

// export default SearchBar;