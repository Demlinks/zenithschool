import { Logo } from '../../assets/images';
import { Link } from 'react-router-dom';
import {
  PhoneIcon, MapPinIcon
} from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <>
      {" "}
      <div className="nav w-full">
        <nav className="w-full flex items-center justify-between px-10 py-2 bg-white">
          <div className="flex">
            <Link to={"/"} className="logo-link flex items-center">
              <img src={Logo} alt="logo" />
              <h1 className="text-xl font-bold uppercase">
                Zenith International Schools
              </h1>
            </Link>
            <div className="burger md:hidden">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <ul className="links text-[#7C818A] font-light flex items-center justify-center space-x-5">
            <li>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/enroll"} className="nav-link">
                Enroll
              </Link>
            </li>
            <li>
              <Link to={"/our-values"} className="nav-link">
                Our Values
              </Link>
            </li>
          </ul>
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
        </nav>
      </div>
    </>
  );
}

export default Navbar