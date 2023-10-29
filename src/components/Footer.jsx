
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {
  return (
    <div className="flex w-screen h-[8rem] bg-slate-900">
          <div className="flex w-2/4 items-end p-[1rem] text-white ">Todos los derechos reservados © A.C.A.P</div>
           <div className="flex w-1/2 mr-[2rem] gap-[1.5rem] p-[1rem] items-end justify-end">
            <button>
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#10da28",}} />
                
                </button>
                <button>
                <FontAwesomeIcon icon={faTelegram} size="2xl" style={{color: "#029AE5",}} />
                </button>
                
                </div>
    </div>
  )
}
