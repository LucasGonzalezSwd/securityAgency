import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex w-3/4 text-white justify-evenly p-[0.5rem] ">
      
        <div className="hover:cursor-pointer">Sobre nosotros</div>
        <div className="hover:cursor-pointer">Contacto</div>
        <div className="hover:cursor-pointer">
          <Link to="/login"><button>Iniciar Sesion</button></Link>
          </div>
      

    </div>
  )
}
