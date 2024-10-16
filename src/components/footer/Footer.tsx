import { Logo } from "../../assets/images";
import { aboutLink, connectWithUsLink, ILink } from "./Footer.constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[url('../src/assets/images/landing/building.png')] bg-cover bg-no-repeat bg-fixed bg-center">
      <div className="container-px w-full pb-0 bg-[#132630]/80">
        <div className="flex flex-col gap-[40px] pb-[96px] pr-14 pl-[104px] pt-[88px] lg:gap-0 lg:flex-row justify-between">
          <div className="flex flex-col gap-[16px]">
            <Link to={"/"} className="logo-link flex items-center">
              <img src={Logo} alt="logo" />
              <h1 className="text-white max-w-[50px] text-xl font-bold uppercase">
                Zenith International Schools
              </h1>
            </Link>
            <p className="text-white text-[14px] leading-[17.75px] font-normal max-w-[430px]">
              1, Dr. R.O. Adeleke Street, Behind ADS Grammar School, Off Oba
              Adesoji Aderemi, Ring Road, Iludun Osogbo.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              {aboutLink.map((link: ILink, index: number) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.linkPath}
                      className="text-white text-[14px] leading-[17.75px] font-normal"
                    >
                      {" "}
                      {link.linkText}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-5">
                {connectWithUsLink.map((link, index) => {
                  return (
                    <li key={index} className="flex items-center gap-[6px]">
                      <span>{link.linkIcon}</span>
                      <p className="text-white text-[14px] leading-[17.75px] font-normal">
                        {link.linkText}{" "}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[35px] pl-20 lg:pl-0 py-[16px] bg-[#EF9E73]">
          <Link to={"terms"} className="leading-[16.8px] text-[13px]">
            Terms and Condition
          </Link>
          <Link to={"privacy"} className="leading-[16.8px] text-[13px]">
            Privacy Policy
          </Link>
          <p className="leading-[16.8px] text-[13px]">
            &copy; Zenith International Schools. Developed by Demlinks
            Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
