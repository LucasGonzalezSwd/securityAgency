import { Link } from "react-router-dom"


export const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
    
      });
    }
  };

  return (
    <div className="flex w-3/4 text-white justify-evenly p-[0.5rem] ">
      
        <div className="hover:cursor-pointer text-[1.1rem]"><button onClick={() => scrollToSection("sobre")} >Sobre nosotros</button></div>
        <div className="hover:cursor-pointer text-[1.1rem]"><button onClick={() => scrollToSection("contacto")}>Contacto</button></div>
        <div className="hover:cursor-pointer text-[1.1rem]">
          <Link to="/login"><button>Iniciar Sesion</button></Link>
          </div>

          
      

    </div>
  )
}
