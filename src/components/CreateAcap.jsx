import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCreateAcap } from '../redux/actions';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* eslint-disable-next-line react/prop-types */
const CreateAcap = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    Nombre: '',
    Ciudad: '',
    DNI: '',
    Sanciones: '',
    FotocopiaDni: 'si',
    RNR: 'si',
    AntecedentePenal: 'si',
    AptoPsicologico: 'si',
    Habilitado: 'si',
    Credencial: 'si',
  });
  const formatDNI = (value) => {
    // Formateamos el DNI como xx.xxx.xxx
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const formattedValue = name === 'DNI' ? formatDNI(value) : value;

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
    
    };

    dispatch(fetchCreateAcap([dataToSend]));
    
    setFormData({
      Nombre: '',
      Ciudad: '',
      DNI: '',
      Sanciones: '',
      FotocopiaDni: 'si',
      RNR: 'si',
      AntecedentePenal: 'si',
      AptoPsicologico: 'si',
      Habilitado: 'si',
      Credencial: 'si',
    })
  };

   
  return (
    <div  className='flex mt-[1rem] flex-col bg-slate-700 w-5/6 rounded-md p-[1.5rem]'>
     <div className='flex justify-end w-full'>
        <button className='-mt-[0.5rem] mb-[0.5rem]  -mr-[0.5rem]' onClick={onClose}> <FontAwesomeIcon className="rounded-full" size="xl" icon={faCircleXmark} style={{ color: "#fff" }} /></button> 
        </div>
    
      <form className='flex flex-wrap w-full' onSubmit={handleSubmit}>

<div className='flex  w-full '>
<div className='flex flex-col w-2/6 items-center mb-[1rem]'>
        <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] " htmlFor="Nombre">Nombre</label>
        <input className=' max-[950px]:w-[9.5rem] rounded-md h-[2.5rem] w-[12rem] ' type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} placeholder="Nombre" />
        </div>
       
        <div className='flex flex-col w-2/6 items-center mb-[1rem]'>
        <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "  htmlFor="Ciudad">Ciudad</label>
        <input className=' max-[950px]:w-[9.5rem] rounded-md  h-[2.5rem] w-[12rem] ' type="text" name="Ciudad" value={formData.Ciudad} onChange={handleChange} placeholder="Ciudad" />
        </div>

        <div className='flex flex-col w-2/6 items-center mb-[1rem]'>
        <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] " htmlFor="DNI">DNI</label>
        <input className=' max-[950px]:w-[9.5rem] rounded-md h-[2.5rem] w-[12rem] ' type="text" name="DNI" value={formData.DNI} onChange={handleChange} placeholder="DNI" />
        </div>
</div>
      
 <div className='flex w-full '>
 <div className='flex flex-col w-2/6 items-center mb-[1rem]'>
        <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "htmlFor="Sanciones">Sanciones</label>
        <select
        className='rounded-md max-[950px]:w-[9.5rem] h-[2.5rem] w-[12rem] '
        name="Sanciones"
        value={formData.Sanciones}
        onChange={handleChange}
      >
       <option value="0">0</option>
       <option value="1">1</option> 
       <option value="2">2</option>
       <option value="3">3</option>
      </select>
        </div>
        
      
     <div className='flex flex-col w-2/6 items-center mb-[1rem]'>
     <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] " htmlFor="FotocopiaDni">Fotocopia Dni</label>
      <select
        className='rounded-md max-[950px]:w-[9.5rem] h-[2.5rem] w-[12rem] '
        name="FotocopiaDni"
        value={formData.FotocopiaDni}
        onChange={handleChange}
      >
        <option  value="si">Sí</option>
        <option value="no">No</option>
      </select>
     </div>
     <div className='flex flex-col w-2/6 items-center mb-[1rem]'>
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] " htmlFor="RNR">RNR</label>
      <select
        className='rounded-md max-[950px]:w-[9.5rem] h-[2.5rem] w-[12rem] '
        name="RNR"
        value={formData.RNR}
        onChange={handleChange}
      >
        <option  value="si">Sí</option>
        <option value="no">No</option>
      </select>
      </div>
 </div>
       <div className='flex  w-full'>
       <div className='flex flex-col w-2/6 items-center mb-[1rem]'>
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] " htmlFor="AntecedentePenal">Antecedente Penal</label>
      <select
        className='rounded-md max-[950px]:w-[9.5rem] h-[2.5rem] w-[12rem] '
        name="AntecedentePenal"
        value={formData.AntecedentePenal}
        onChange={handleChange}
      >
        <option  value="si">Sí</option>
        <option value="no">No</option>
      </select>
      </div>
      <div className='flex flex-col w-2/6 items-center mb-[1rem]'>
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "htmlFor="AptoPsicologico">Apto Psicologico</label>
      <select
        className='rounded-md max-[950px]:w-[9.5rem] h-[2.5rem] w-[12rem] '
        name="AptoPsicologico"
        value={formData.AptoPsicologico}
        onChange={handleChange}
      >
        <option  value="si">Sí</option>
        <option value="no">No</option>
      </select>
      </div>
      <div className='flex flex-col w-2/6 items-center mb-[1rem]'>
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] " htmlFor="Habilitado">Habilitado</label>
      <select
        className='rounded-md max-[950px]:w-[9.5rem] h-[2.5rem] w-[12rem] '
        name="Habilitado"
        value={formData.Habilitado}
        onChange={handleChange}
      >
         <option value="si">Sí</option>
        <option value="no">No</option>
      </select>
      </div>
       </div>

       <div className='w-full flex'>
      
      <div className='flex flex-col w-full items-center mb-[1rem]'>

      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "htmlFor="Credencial">Credencial </label>
      <select
        className='rounded-md max-[950px]:w-[9.5rem] h-[2.5rem] w-[12rem] '
        name="Credencial"
        value={formData.Credencial}
        onChange={handleChange}
        >
       <option  value="si">Sí</option>
        <option value="no">No</option>
      </select>
        </div>
       </div>
       
       
      <div className='flex w-full justify-center'>
        <button className='bg-white mt-[1rem] p-[0.5rem] w-[6.5rem] rounded-md' type="submit">Crear</button>
      </div>
        
      </form>


    </div>
  );
};

export default CreateAcap;
