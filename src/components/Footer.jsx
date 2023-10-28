
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {
  return (
    <div className="flex w-screen h-[8rem] bg-slate-900">
          <div className="flex w-2/4 items-end p-[1rem] text-white ">Todos los derechos reservados © A.C.A.P</div>
           <div className="flex w-1/4 p-[1rem] items-end justify-end">
            <button>
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#10da28",}} />
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#10da28",}} />
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#10da28",}} />
                </button>
                </div>
    </div>
  )
}
