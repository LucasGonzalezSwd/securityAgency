import { Fragment, useState } from 'react'
import {  Popover, Transition } from '@headlessui/react'
import {

  
  CursorArrowRaysIcon,
  FingerPrintIcon,
  UserIcon,

} from '@heroicons/react/24/outline'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const products = [
  { name: 'Sobre nosotros', description: 'Descripcion de la empresa', href: '', 
  icon:UserIcon },
  { name: 'Contacto', description: 'Envie un whatsapp para mas informacion', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Iniciar sesion', description: 'Si eres un admin inicia sesion', href: '/login', icon: FingerPrintIcon }
 
]



export default function MobileNavBar() {
    const [pick, setPick] = useState(false);

    const changeArrow = () => {
        setPick(!pick);
    };

  

  return (
    <header className="w-full flex ">
      <nav className=" flex max-w-7xl items-center justify-start p-6 lg:px-8" aria-label="Global">
        <Popover.Group className=" lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
         <div className='flex'>
            <button className='flex items-end' onClick={changeArrow}>
                <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#fff" }} />
                {pick ? (
                    <FontAwesomeIcon className='ml-[0.8rem] ' icon={faAngleUp} size="sm" style={{ color: "#fff" }} />
                ) : (
                    <FontAwesomeIcon className='ml-[0.8rem]' icon={faAngleDown} size="sm" style={{ color: "#fff" }} />
                )}
            </button>
            </div>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-400"
              enterFrom="opacity-0 translate-y-0"
              enterTo="opacity-100 translate-y-1"
              leave="transition ease-out duration-400"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute ml-[0.45rem] -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        
      </nav>
      
    </header>
  )
}