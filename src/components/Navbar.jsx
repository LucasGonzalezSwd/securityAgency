import { Link } from "react-router-dom"


export const NavBar = () => {

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
    <div className="flex w-3/4 max-[950px]:w-full max-[950px]:gap-[1.8rem] items-center  text-white justify-evenly p-[0.5rem] ">
      
        <div className="hover:cursor-pointer  text-[1.1rem]"><button onClick={() => scrollToSection("sobre")} >Sobre nosotross</button></div>
        <div className="hover:cursor-pointer text-[1.1rem]"><button onClick={() => scrollToSection("contacto")}>Contacto</button></div>
        <div className="hover:cursor-pointer text-[1.1rem]">
          <Link to="/login"><button>Iniciar Sesion</button></Link>
          </div>

          
      

    </div>
  )
}
