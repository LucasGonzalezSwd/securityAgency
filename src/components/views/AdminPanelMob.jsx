import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllAcaps, fetchDeleteAcap } from "../../redux/actions";
import { faCircleCheck, faCircleXmark, faPen, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditAcap from "../EditAcap";
import SearchBar from '../SearchBar';
import CreateAcap from "../CreateAcap";
import Swal from 'sweetalert2';

export const AdminPanelMob = () => {

  const dispatch = useDispatch();
  const acaps = useSelector((state) => state.acaps);
  const [editingWorker, setEditingWorker] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);

  const handleWorkerClick = (workerId) => {
    if (selectedWorkerId === workerId) {
      setSelectedWorkerId(null); // Si se hace clic nuevamente en el mismo trabajador, se oculta la información
    } else {
      setSelectedWorkerId(workerId);
    }
  };
  useEffect(() => {
    dispatch(fetchAllAcaps());
  }, [dispatch]);

  const handleDeleteAcap = (id) => {
    dispatch(fetchDeleteAcap(id));
    Swal.fire('', '¡Agente Eliminado!', 'warning');
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
      <div className="flex flex-col">
      <div className="flex  mr-[2rem]">
        <SearchBar />
      </div>

      <div className="flex flex-col justify-center items-center mt-[3.5rem] w-full ">
        <button className="bg-slate-700 text-white -mt-[2.60rem] max-[950px]:w-[8.3rem] max-[950px]:h-[2.3rem] h-[3rem] rounded-md w-[8.3rem] max-[950px]:-mt-[2.38rem]" onClick={() => setShowCreateForm(true)}>
          <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: "#fff" }} /> Nuevo Agente
        </button>
      </div>

      <div className="flex w-full justify-center">
        {showCreateForm && <CreateAcap onClose={handleCreateFormClose} />}
      </div>
      </div>
      <div className="flex w-full h-[2.8rem]  justify-center mt-[2rem]">
       
        <div className="flex w-full flex-col h-full justify-center  border-2 border-r-0  rounded-tl-md rounded-tr-md  border-b-0 border-slate-700 ">
            <p className={`flex overflow-hidden rounded-tr-md w-full h-[2.8rem] justify-center text-center items-center border-r-2 border-slate-700`} >
              Listado de agentes
            </p>           
          </div>
      </div>

        
        <ul  className=" border-2 border-b-0  border-slate-700">
      {acaps.map((acap) => (
         
         <li
          key={acap.id}
          className={`flex flex-col items-center  border-r-0 border-b-2 border-slate-700 h-full ${
            selectedWorkerId === acap.id ? 'selected' : '' // Aplica la clase 'selected' si el trabajador está seleccionado
          }`}
        >
          
          <div className="flex items-center  justify-center w-full h-[2.8rem] overflow-hidden border-slate-700" onClick={() => handleWorkerClick(acap.id)}>
           <p className="absolute left-0 ml-[0.3rem] ">Nombre: </p> 
           {acap.Nombre}
           
          </div>
         
          {selectedWorkerId === acap.id && (
            <>
              <div className="flex justify-center items-center w-full h-[2.8rem] overflow-hidden border-t-2  border-slate-700"><p className="absolute left-0 ml-[0.3rem]">Ciudad: </p> {acap.Ciudad}</div>
              <div className="flex justify-center items-center overflow-hidden w-full h-[2.8rem] border-t-2 border-slate-700"><p className="absolute left-0 ml-[0.3rem]">DNI: </p> {acap.DNI}</div>
              <div className="flex justify-center items-center overflow-hidden w-full h-[2.8rem] border-t-2 border-slate-700"><p className="absolute left-0 ml-[0.3rem]">Sanciones: </p> {acap.Sanciones}</div>
              <div className="flex justify-center items-center overflow-hidden w-full h-[2.8rem] border-t-2 border-slate-700">
                <div>
                <p className="absolute left-0 ml-[0.3rem]">Fotoc. Dni: </p> {acap.FotocopiaDni ? ("SI") : ("NO")}
                </div>
              </div>
              <div className="flex justify-center overflow-hidden items-center w-full h-[2.8rem] border-t-2 border-slate-700">
                <div>
                <p className="absolute left-0 ml-[0.3rem]">RNR: </p> {acap.RNR ? ("SI") : ("NO")}
                </div>
              </div>
              <div className="flex justify-center overflow-hidden items-center w-full h-[2.8rem] border-t-2 border-slate-700">
                <div>
                <p className="absolute left-0 ml-[0.3rem]">Antecedente Penal: </p> {acap.AntecedentePenal ? ("SI") : ("NO")}
                </div>
              </div>
              <div className="flex justify-center overflow-hidden items-center w-full h-[2.8rem] border-t-2 border-slate-700">
                <div>
                <p className="absolute left-0 ml-[0.3rem]">Apto Psicologico: </p>{acap.AptoPsicologico ? ("SI") : ("NO")}
                </div>
              </div>

              <div className="flex justify-center overflow-hidden items-center w-full h-[2.8rem] border-t-2 border-slate-700">
                <div>
                <p className="absolute left-0 ml-[0.3rem]">Credencial: </p> {acap.Credencial ? ("SI") : ("NO")}
                </div>
              </div>
              <div className="flex justify-center overflow-hidden items-center w-full h-[2.8rem] border-t-2 border-slate-700">
                <div>
                <p className="absolute left-0 ml-[0.3rem]">Habilitado: </p>{acap.Habilitado ? (<FontAwesomeIcon size="2xl" icon={faCircleCheck} style={{ color: "#1eca1c" }} />) : (<FontAwesomeIcon size="2xl" icon={faCircleXmark} style={{ color: "#de172b" }} />)}
                </div>
              </div>
              <div className="flex border-t-2 border-slate-700 h-[2.8rem] items-center overflow-hidden justify-center gap-[1rem] w-full"> <p className="absolute left-0 ml-[0.3rem]">Edit. / Elim. : </p>
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
          
              {isEditing(acap) && <EditAcap worker={editingWorker} onFinishEdit={handleFinishEdit} />}
            </>
          )}
          
        </li>
      )
      )
    }
    </ul>
    </div>
  );
};
