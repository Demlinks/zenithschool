import { Logo } from "../../assets/images";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { LegacyRef, useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  {
    linkText: "About",
    linkPath: "about",
  },
  {
    linkText: "Login",
    linkPath: "login",
  },
  {
    linkText: "Enroll",
    linkPath: "enroll",
  },
  {
    linkText: "Our Values",
    linkPath: "our-values",
  },
];

const DesktopNavbar = () => {
  return (
    <div className="hidden lg:flex w-9/12 justify-evenly">
      {" "}
      <div className="nav w-full">
        <ul className="links text-[#7C818A] font-light flex items-center justify-center space-x-5">
          {NAV_LINKS.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.linkText} className="nav-link">
                  {link.linkText}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="text-xs font-semibold font-Poppins space-y-1">
        <div className="flex items-center space-x-1">
          <PhoneIcon className="size-3 xl:size-4 text-[#4DB8EC] rounded-2 bg-[#fff]" />
          <a href="tel:+2348145159459" className="text-black">
            {" "}
            08145159459,
          </a>
          <a href="tel:+2349095908187" className="text-black">
            {" "}
            09095908187
          </a>
        </div>
        <div className="flex items-center justify-end space-x-1">
          <MapPinIcon className="size-3 xl:size-4 text-[#4DB8EC] rounded-2 bg-[#fff]" />
          <span>Iludun, Osogbo</span>
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = ({
  isOpen,
  menuRef,
  toggleMenu,
}: {
  isOpen: boolean;
  menuRef: LegacyRef<HTMLDivElement>;
  toggleMenu: () => void;
}) => {
  return (
    <>
      {" "}
      <div
        ref={menuRef}
        className={`absolute top-16 right-0 w-2/6 bg-primary rounded-md lg:hidden transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center py-4 gap-4">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              to={link.linkPath}
              className="text-lg text-white py-1 px-[40px] font-semibold hover:border-2 border-white rounded-full"
              onClick={() => toggleMenu()}
            >
              {link.linkText}
            </Link>
          ))}
        </div>
        <div className="text-xs flex flex-col items-center font-semibold font-Poppins space-y-1 pb-5">
          <div className="flex items-center space-x-1">
            <PhoneIcon className="size-3 xl:size-4 text-[#fff] rounded-2 bg-[#4DB8EC]" />
            <a href="tel:+2348145159459" className="text-white">
              {" "}
              08145159459,
            </a>
            <a href="tel:+2349095908187" className="text-white">
              {" "}
              09095908187
            </a>
          </div>
          <div className="flex items-center justify-end space-x-1">
            <MapPinIcon className="size-3 xl:size-4 text-[#fff] rounded-2 bg-[#4DB8EC]" />
            <span className="text-white">Iludun, Osogbo</span>
          </div>
        </div>
      </div>
    </>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      {" "}
      <div className="nav w-full">
        <nav className="w-full flex items-center px-10 py-2 bg-white">
          <div className="flex w-fit">
            <Link to={"/"} className="logo-link flex items-center">
              <img src={Logo} alt="logo" width={48} height={48} />
              <h1 className="text-[16px] font-bold uppercase">
                Zenith International Schools
              </h1>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="text-black outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="size-6 xl:size-4 text-[#4DB8EC] rounded-2 bg-[#fff]" />
              ) : (
                <Bars3Icon className="size-6 xl:size-4 text-[#4DB8EC] rounded-2 bg-[#fff]" />
              )}
            </button>
          </div>
          <DesktopNavbar />
          {isOpen && (
            <MobileNavbar
              isOpen={isOpen}
              menuRef={menuRef}
              toggleMenu={toggleMenu}
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
