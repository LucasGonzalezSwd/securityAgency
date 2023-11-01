import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPutAcap } from "../../src/redux/actions";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
/* eslint-disable-next-line react/prop-types */
const EditAcap = ({ worker, onFinishEdit }) => {
  const dispatch = useDispatch();
  const [editedData, setEditedData] = useState(worker);

  const handleUpdateAcap = () => {
    /* eslint-disable-next-line react/prop-types */
    dispatch(fetchPutAcap(worker.id, editedData));
    Swal.fire('Éxito', '¡Agente actualizado!', 'success');
    onFinishEdit(); // Llamamos a la función onFinishEdit en el componente padre para indicar que la edición ha terminado.
  };
  const handleClose = () => {
  
   
    onFinishEdit(); 
  };

  return (
    <div className="flex w-full justify-center">
    <div className="flex flex-col justify-center w-4/5 mt-[10rem] max-[767px]:mt-[1rem] rounded-md p-[0.5rem] bg-slate-700 ">
        <div className="flex w-full justify-end mb-[0.5rem] ">
      <button className="mt-[0.2rem] mr-[0.3rem]  rounded-full  text-black" onClick={handleClose}><FontAwesomeIcon icon={faCircleXmark} size="lg" style={{color: "#fff",}} /></button>
      </div>
        <div className="flex max-[767px]:flex-col flex-wrap w-full">
          
        <div className='flex w-full max-[767px]:flex-col'>

        <div className="flex flex-col max-[767px]:w-full  w-2/6 items-center max-[767px]:mb-[0.5rem] mb-[1rem]">
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "  htmlFor="Nombre">Nombre </label>
      <input 
      className='rounded-md h-[2.5rem] max-[767px]:w-4/5 w-[12rem] max-[950px]:w-[9.5rem] '
        type="text"
        name="Nombre"
        value={editedData.Nombre}
        onChange={(e) => setEditedData({ ...editedData, Nombre: e.target.value })}
      />
      </div>  
      <div className="flex max-[767px]:mb-[0.5rem] flex-col w-2/6 max-[767px]:w-full items-center mb-[1rem]">
       <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] " htmlFor="Ciudad">Ciudad </label>
      <input 
      className='rounded-md max-[767px]:w-4/5 h-[2.5rem] w-[12rem] max-[950px]:w-[9.5rem]'
        type="text"
        name="Ciudad"
        value={editedData.Ciudad}
        onChange={(e) => setEditedData({ ...editedData, Ciudad: e.target.value })}
      />
      </div>

      <div className="flex  max-[767px]:mb-[0.5rem] flex-col w-2/6 max-[767px]:w-full items-center mb-[1rem]">

       <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "  htmlFor="DNI">DNI </label>
      <input 
      className='rounded-md max-[767px]:w-4/5 h-[2.5rem] max-[950px]:w-[9.5rem] w-[12rem] '
      type="text"
      name="DNI"
      value={editedData.DNI}
      onChange={(e) => setEditedData({ ...editedData, Ciudad: e.target.value })}
      />
      </div>
      
      </div>

      <div className="flex flex-col max-[767px]:mb-[0.5rem] w-2/6 max-[767px]:w-full items-center mb-[1rem]">
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "  htmlFor="Sanciones">Sanciones </label>
      <select
        className='rounded-md max-[767px]:w-4/5 h-[2.5rem] max-[950px]:w-[9.5rem] w-[12rem] '
        name="Sanciones"
        value={editedData.Sanciones }
        onChange={(e) => setEditedData({ ...editedData, Sanciones: e.target.value })}
      >
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
      </select>
      </div>
      <div className="flex flex-col max-[767px]:mb-[0.5rem] w-2/6 max-[767px]:w-full items-center mb-[1rem]">
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "  htmlFor="FotocopiaDni">Fotocopia Dni </label>
      <select
        className='rounded-md  max-[767px]:w-4/5 h-[2.5rem] max-[950px]:w-[9.5rem] w-[12rem] '
        name="FotocopiaDni"
        value={editedData.FotocopiaDni}
        onChange={(e) => setEditedData({ ...editedData, FotocopiaDni: e.target.value })}
      >
        <option value="true">Sí</option>
        <option value="false">No</option>
      </select>
      </div>
      <div className=" flex flex-col max-[767px]:mb-[0.5rem] w-2/6 max-[767px]:w-full items-center mb-[1rem]">
      <label className="flex max-[767px]:w-4/5 items-center text-white  mr-[0.2rem] ml-[0.2rem] "  htmlFor="RNR">RNR </label>
      <select
        className='rounded-md max-[767px]:w-4/5 h-[2.5rem] max-[950px]:w-[9.5rem] w-[12rem] '
        name="RNR"
        value={editedData.RNR}
        onChange={(e) => setEditedData({ ...editedData, RNR: e.target.value })}
      >
        <option value="true">Sí</option>
        <option value="false">No</option>
      </select>
      </div>
      <div className=" flex flex-col max-[767px]:mb-[0.5rem] w-2/6 max-[767px]:w-full items-center mb-[1rem]">
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "  htmlFor="AntecedentePenal">Antecedente Penal </label>
      <select
        className='rounded-md max-[767px]:w-4/5 h-[2.5rem] max-[950px]:w-[9.5rem] w-[12rem] '
        name="AntecedentePenal"
        value={editedData.AntecedentePenal}
        onChange={(e) => setEditedData({ ...editedData, AntecedentePenal: e.target.value })}
      >
        <option value="true">Sí</option>
        <option value="false">No</option>
      </select>
      </div>
      <div className="flex flex-col max-[767px]:mb-[0.5rem] w-2/6 max-[767px]:w-full items-center mb-[1rem]">
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] " htmlFor="AptoPsicologico">Apto Psicologico</label>
      <select
        className='rounded-md max-[767px]:w-4/5 h-[2.5rem] max-[950px]:w-[9.5rem] w-[12rem] '
        name="AptoPsicologico"
        value={editedData.AptoPsicologico}
        onChange={(e) => setEditedData({ ...editedData, AptoPsicologico: e.target.value })}
      >
        <option value="true">Sí</option>
        <option value="false">No</option>
      </select>
      </div>
      <div className=" flex flex-col max-[767px]:mb-[0.5rem] w-2/6 max-[767px]:w-full items-center mb-[1rem]">
      <label className="flex items-center text-white  mr-[0.2rem] ml-[0.2rem] "  htmlFor="Habilitado">Habilitado:</label>
      <select
       className='rounded-md max-[767px]:w-4/5 h-[2.5rem] max-[950px]:w-[9.5rem] w-[12rem] '
        name="Habilitado"
        value={editedData.Habilitado}
        onChange={(e) => setEditedData({ ...editedData, Habilitado: e.target.value })}
      >
        <option value="true">Sí</option>
        <option value="false">No</option>
      </select>
      </div>

      <div className=" flex flex-col max-[767px]:mb-[0.5rem] w-full items-center mb-[1rem]">
      <label className="flex items-center text-white   mr-[0.2rem] ml-[0.2rem] "  htmlFor="Credencial">Credencial:</label>
      <select
       className='rounded-md max-[767px]:w-4/5 max-[950px]:w-[9.5rem] h-[2.5rem] w-[12rem] '
        name="Credencial"
        value={editedData.Credencial}
        onChange={(e) => setEditedData({ ...editedData, Credencial: e.target.value })}
      >
        <option value="true">Sí</option>
        <option value="false">No</option>
      </select>
      </div>
     
      </div>
      <div className="flex w-full justify-center mb-[0.5rem]">
      <button className="mt-[0.8rem] p-[0.6rem] max-[767px]:w-3/5 bg-white rounded-md text-black" onClick={handleUpdateAcap}>Guardar Cambios</button>
      
      </div>
      
     
      
    </div>
    </div>
  );
};

  
export default EditAcap;
