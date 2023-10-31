import '../../index.css'
import { Footer } from '../Footer'
// import { Navbar } from '../Navbar'
import img1 from "../../assets/2.jpg"
import img2 from "../../assets/3.jpg"
import img3 from "../../assets/1.jpg"
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import MobileNavBar from './MobileNavBar';
import { useEffect, useState } from 'react'
import { NavBar } from "../NavBar";

export const Home = () => {
   
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
    
      });
    }
  };

  const isMobile = windowWidth <= 470;
 
    return (
      <div className="w-screen h-full flex flex-col  " id='inicio'>
        <div className='w-full flex items-center h-full justify-center'>
        <div className='w-full flex  max-[850px]:h-[3.5rem] max-[460px]:h-[3.88rem] bg-slate-900 h-[2.8rem]'>  {isMobile ? (
            <MobileNavBar scrollToSection={scrollToSection} />
          ) : (
            <NavBar scrollToSection={scrollToSection} />
          )}</div> 
       </div>

      <div className='bg-blue-900 w-full max-[460px]:h-[19.1rem] h-[27rem]'>
         <img src={img1} className='flex object-cover w-full h-full justify-center items-center text-2xl text-white'/>
      </div>


      <div className='flex w-full justify-center pb-[1.5rem] pr-[1.5rem]  pl-[1.5rem]  pt-[0.8rem] '>
       <div className=' flex flex-col justify-center w-11/12 mb-[2rem] max-[460px]:w-full border-black  '>
         <h2  className='mb-[0.7rem] w-3/5 text-5xl max-[460px]:w-full max-[460px]:text-4xl'>
         Somos una empresa líder en seguridad
         </h2>
         <p className='w-3/5 max-[460px]:w-full text-[0.9rem]'>Como una empresa líder en el ámbito de la seguridad, nos enorgullece ofrecer soluciones integrales y especializadas diseñadas para garantizar la seguridad, la tranquilidad y la protección de cada persona. Nuestra vasta experiencia y un equipo altamente capacitado nos permiten abordar los desafíos de seguridad más complejos en cualquier evento, brindando un servicio que va más allá de las expectativas y estableciendo un estándar de excelencia en la industria de la seguridad para eventos masivos.</p>
         
       </div>
       </div>

       <div className="flex w-full justify-center  -mt-[2.5rem]">
             <div className='flex justify-center w-11/12 h-[2rem] border-b-[0.07rem] border-slate-700 '>
             </div>
       </div>

       <div className='flex max-[460px]:flex-col w-full items-center  mt-[2.5rem] mb-[2rem] ' id='sobre'>
        <div className='w-2/5 max-[460px]:mt-[2rem]  max-[460px]:w-full max-[460px]:p-[1rem] p-[1.9rem] text-center '> 
        <h2 className='text-2xl -mt-[2rem] mb-[2rem]'>Sobre Nosotros</h2>
        <p className='text-[0.85rem]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ut, reiciendis dolores pariatur nisi fugit laboriosam minima dolorum debitis id odit laudantium esse perferendis a non impedit. Nam, animi sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quam quibusdam ullam reprehenderit atque corporis? Quibusdam quos, labore architecto obcaecati beatae exercitationem assumenda laboriosam cumque, temporibus doloremque soluta rem corporis.
          </p> </div>
        <img src={img2} className='w-3/5 max-[460px]:w-4/5 object-cover h-[24rem] mr-[1rem]  flex text-white justify-center items-center bg-blue-900' />
       </div>
       <div className="flex w-full justify-center  mb-[2.5rem]">
             <div className='flex justify-center w-11/12 h-[2rem] border-b-[0.07rem] border-slate-700 '>
             </div>
       </div>

       <div className='w-full gap-[2rem] max-[460px]:flex-col  justify-between flex mb-[2rem]'>
          
          <div className='w-1/3 ml-[2rem] mr-[2rem] max-[460px]:w-4/5  flex-col  h-full  '>
          <img src={img3} className='h-[16rem]  object-cover' />
            <div className='p-[0.5rem] max-[460px]:w-full '>
              <h1 className='text-2xl'>Titulo aleatorio</h1>
              <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta repellendus exercitationem pariatur magni est dignissimos minima alias, vitae, voluptatibus a nesciunt. Et ab deserunt sapiente. Repellat accusantium perferendis sequi?</p>
         
            </div>
          </div>
          
          <div className='w-1/3  max-[460px]:w-4/5 ml-[2rem] mr-[2rem]  flex-col  h-full  '>
            <img src={img3} className='h-[16rem]  object-cover' />
      
            <div className='p-[0.5rem] max-[460px]:w-full'>
              <h1 className='text-2xl'>Titulo aleatorio</h1>
              <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta repellendus exercitationem pariatur magni est dignissimos minima alias, vitae, voluptatibus a nesciunt. Et ab deserunt sapiente. Repellat accusantium perferendis sequi?</p>
         
            </div>
          </div>

          <div className='w-1/3 ml-[2rem] max-[460px]:w-4/5 mr-[2rem]  flex-col  h-full  '>
          <img src={img3} className='h-[16rem]  object-cover' />
            <div className='p-[0.5rem] max-[460px]:w-full'>
              <h1 className='text-2xl'>Titulo aleatorio</h1>
              <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta repellendus exercitationem pariatur magni est dignissimos minima alias, vitae, voluptatibus a nesciunt. Et ab deserunt sapiente. Repellat accusantium perferendis sequi?</p>
         
            </div>
          </div>

        

       </div>
       <div className='flex w-full justify-end'>
          <Link to="/"><button onClick={() => scrollToSection("inicio")} className='bg-slate-900 w-[2.8rem] h-[2.8rem] rounded-full mt-[1rem] mr-[2.5rem]'>
  <FontAwesomeIcon icon={faArrowUp} style={{color: "#fff"}} />
</button></Link>
          </div>
            <div className='mt-[1rem]' id='contacto'>
              <Footer/>
            </div>
        
      </div>
    )
  }
  
  
  
  
  