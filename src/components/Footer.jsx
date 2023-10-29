
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="flex w-screen h-[8rem] bg-slate-900">
          <div className="flex w-2/4 items-end p-[1rem] text-white ">Todos los derechos reservados © SecureEnterprise</div>
           <div className="flex w-1/2 mr-[2rem] gap-[1.5rem] p-[1rem] items-end justify-end">

            <Link to="https://wa.me/5493406418085" target="blank">
            <button>
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#10da28",}} />
                
                </button></Link>
                <Link to="https://wa.me/5493406418085" target="blank">
                <button>
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#029AE5",}} />
                </button></Link>
                <Link to="https://wa.me/5493406418085" target="blank">
                <button>

                <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#882DE5",}} />
                </button></Link>
                
                </div>
    </div>
  )
}
