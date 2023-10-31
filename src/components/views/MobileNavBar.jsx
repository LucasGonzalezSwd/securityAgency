import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import {
  CursorArrowRaysIcon,
  FingerPrintIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const products = [
  { name: 'Sobre nosotros', description: 'Descripción de la empresa', icon: UserIcon, id:"sobre"},
  { name: 'Contacto', description: 'Envíe un WhatsApp para más información', icon: CursorArrowRaysIcon, id:"contacto" },
  { name: 'Iniciar sesión', description: 'Si eres un administrador, inicia sesión', href: '/login', icon: FingerPrintIcon , id:"#"},
];

/* eslint-disable-next-line react/prop-types */
export default function MobileNavBar() {
  const [pick, setPick] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
    
      });
    }
  };
  const changeArrow = () => {
    setPick(!pick);
  };

  return (
    <header className="w-full flex">
      <nav className="flex max-w-7xl items-center justify-start p-6 lg:px-8" aria-label="Global">
        <div className="lg:flex lg:gap-x-12 relative">
          <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
            <div className="flex">
              <button className="flex items-end" onClick={changeArrow}>
                <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: '#fff' }} />
                {pick ? (
                  <FontAwesomeIcon className="ml-[0.8rem]" icon={faAngleUp} size="sm" style={{ color: '#fff' }} />
                ) : (
                  <FontAwesomeIcon className="ml-[0.8rem]" icon={faAngleDown} size="sm" style={{ color: '#fff' }} />
                )}
              </button>
            </div>
          </div>

          {pick && (
            <div className="absolute ml-[0.45rem] -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    /* eslint-disable-next-line react/no-unknown-property */
                    onClick={() => scrollToSection(item.id)}
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
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
