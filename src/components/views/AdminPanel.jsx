import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllAcaps, fetchDeleteAcap } from "../../redux/actions";
import { faCircleCheck, faCircleXmark, faPen, faTrashCan,faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditAcap from "../EditAcap";
import SearchBar from '../SearchBar';
import CreateAcap from "../CreateAcap";

export const AdminPanel = () => {
  const dispatch = useDispatch();
  const acaps = useSelector((state) => state.acaps);
  const [editingWorker, setEditingWorker] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  
  useEffect(() => {
    dispatch(fetchAllAcaps());
  }, [dispatch]);

  const handleDeleteAcap = (id) => {
    dispatch(fetchDeleteAcap(id));
  };

  const handleStartEditAcap = (worker) => {
    setEditingWorker(worker);
  };

  const handleFinishEdit = () => {
    setEditingWorker(null);
  };
  const handleCreateFormClose = () => {
    setShowCreateForm(false);
  };
 
  const isEditing = (acap) => editingWorker && editingWorker.id === acap.id;

  return (
    <div className="flex flex-col w-full mb-[2rem]">
      <div className="mr-[2rem]">
      <SearchBar />
      </div>
            <div className="flex flex-col justify-center items-center max-[1160px]:w-1/2 w-full ">
        <button className="bg-slate-700 text-white -mt-[2.60rem]  max-[950px]:w-[8.3rem] max-[950px]:h-[2.3rem] h-[3rem] rounded-md  w-[8.3rem] max-[950px]:-mt-[2.38rem] " onClick={() => setShowCreateForm(true)}> 
          <FontAwesomeIcon  icon={faPlus} size="lg" style={{ color: "#fff" }} /> Nuevo Agente
        </button>
         </div>
         <div className="flex w-full justify-center">

        {showCreateForm && <CreateAcap onClose={handleCreateFormClose} />} 
         </div>
      <div className="flex w-full justify-center mt-[2rem] ">
        <ul className="flex flex-col w-full ml-[0.5rem] mr-[0.5rem] flex-wrap border-b-2 border-slate-700 rounded-bl-md rounded-br-md">
          <div className="flex items-center border-2 rounded-tl-md rounded-tr-md border-b-0 border-slate-700 h-[2.8rem]">
            <p className="flex justify-center pl-[1rem] overflow-hidden items-center w-1/5 h-[2.8rem] border-r-2 border-slate-700">Nombre </p>
            <p className="flex items-center pl-[0.7rem] overflow-hidden w-2/12 h-[2.8rem] justify-center border-r-2 border-slate-700">Ciudad </p>
            <p className="flex items-center w-2/12 h-[2.8rem] overflow-hidden justify-center border-r-2 border-slate-700">DNI</p>
            <p className="flex items-center  w-[4rem] h-[2.8rem] overflow-hidden justify-center border-r-2 border-slate-700">Sanc.</p>
            <p className="flex items-center w-1/12 h-[2.8rem] overflow-hidden justify-center text-center border-r-2 border-slate-700">Fotoc. dni</p>
            <p className="flex items-center w-1/12 h-[2.8rem] overflow-hidden justify-center text-center border-r-2 border-slate-700">RNR </p>
            <p className="flex items-center w-1/12 h-[2.8rem] overflow-hidden justify-center text-center border-r-2 border-slate-700">Antec. Penal</p>
            <p className="flex items-center w-1/12 h-[2.8rem] overflow-hidden justify-center text-center border-r-2 border-slate-700">Apto Psic.</p>
            <p className="flex items-center w-1/12 h-[2.8rem] overflow-hidden justify-center text-center border-r-2 border-slate-700">Creden- cial</p>
            <p className="flex items-center w-1/12 h-[2.8rem] overflow-hidden justify-center text-center border-r-2 border-slate-700">Habilit.</p>
            <p className="flex items-center overflow-hidden w-1/12 justify-center">Edit/El.</p>
          </div>
          {acaps.map((acap) => (
            <li className="flex items-center border-2 border-b-0 border-slate-700 h-[2.8rem]" key={acap.id}>
              <p className="flex items-center  w-1/5 h-[2.8rem] overflow-hidden pl-[1rem] border-r-2 border-slate-700">{acap.Nombre}</p>
              <p className="flex items-center w-2/12 h-[2.8rem] overflow-hidden pl-[0.7rem] border-r-2 border-slate-700">{acap.Ciudad}</p>
              <p className="flex justify-center items-center overflow-hidden w-2/12 h-[2.8rem] border-r-2 border-slate-700">{acap.DNI}</p>
              <p className="flex justify-center items-center overflow-hidden w-[4rem] h-[2.8rem] border-r-2 border-slate-700">{acap.Sanciones}</p>
              <div className="flex justify-center items-center  overflow-hidden w-1/12 h-[2.8rem] border-r-2 border-slate-700">
                <p>
                  {acap.FotocopiaDni ? (
                   "SI"
                  ) : (
                    "NO"
                  )}
                </p>
              </div>
              <div className="flex justify-center overflow-hidden items-center w-1/12 h-[2.8rem] border-r-2 border-slate-700">
                <p>
                  {acap.RNR ? (
                    "SI"
                  ) : (
                    "NO"
                  )}
                </p>
              </div>
              <div className="flex justify-center  overflow-hidden items-center w-1/12 h-[2.8rem] border-r-2 border-slate-700">
                <p>
                  {acap.AntecedentePenal ? (
                    "SI"
                  ) : (
                    "NO"
                  )}
                </p>
              </div>
              <div className="flex justify-center overflow-hidden items-center w-1/12 h-[2.8rem] border-r-2 border-slate-700">
                <p>
                  {acap.AptoPsicologico ? (
                   "SI"
                  ) : (
                   "NO"
                  )}
                </p>
              </div>
              
              <div className="flex justify-center overflow-hidden items-center w-1/12 h-[2.8rem] border-r-2 border-slate-700">
                <p>
                  {acap.Credencial ? (
                    "SI"
                  ) : (
                   "NO"
                  )}
                </p>
              </div>
              <div className="flex justify-center overflow-hidden items-center w-1/12 h-[2.8rem] border-r-2 border-slate-700">
                <p>
                  {acap.Habilitado ? (
                    <FontAwesomeIcon size="2xl" icon={faCircleCheck} style={{ color: "#1eca1c" }} />
                  ) : (
                    <FontAwesomeIcon size="2xl" icon={faCircleXmark} style={{ color: "#de172b" }} />
                  )}
                </p>
              </div>
              <div className="flex items-center  overflow-hidden justify-evenly w-1/12">
                <button
                  onClick={() => handleStartEditAcap(acap)}
                  className="p-[0.2rem] w-[2.2rem] rounded-md bg-[#f6ee04]"
                >
                  <FontAwesomeIcon size="lg" icon={faPen} style={{ color: "#000000" }} />
                </button>
                <button
                  onClick={() => handleDeleteAcap(acap.id)}
                  className="p-[0.2rem] w-[2.2rem] rounded-md bg-[#fb1e1e]"
                >
                  <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff" }} />
                </button>
              </div>
              <div className="absolute">
              {isEditing(acap) && <EditAcap worker={editingWorker} onFinishEdit={handleFinishEdit} />}
              </div>
            
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
