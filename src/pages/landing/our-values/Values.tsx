import { Hand } from "../../../assets/images";
import "./Values.css"

const Values = () => {
  return (
    <section className="w-full py-10 pb-20 bg-[#DBF1FB]">
      <header className="text-center font-Euclid text-2xl font-bold mb-3 lg:mb-10">
        Our Values
      </header>
      <div className="grid lg:grid-cols-3 px-5 lg:px-20 space-x-0 space-y-7 lg:space-y-0 lg:space-x-7">
        <div className="valueCard">
          <div className="valueCardHeader">
            <span className="text-black text-xl font-Euclid font-bold">
              Dedication
            </span>
            <img src={Hand} alt="hand" />
          </div>
          <p className="valueCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Nulla porttitor ligula sed massa fermentum, ut
            vestibulum leo bibendum.
          </p>
        </div>
        <div className="valueCard">
          <div className="valueCardHeader">
            <span className="text-black text-xl font-Euclid font-bold">
              Dedication
            </span>
            <img src={Hand} alt="hand" />
          </div>
          <p className="valueCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Nulla porttitor ligula sed massa fermentum, ut
            vestibulum leo bibendum.
          </p>
        </div>
        <div className="valueCard">
          <div className="valueCardHeader">
            <span className="text-black text-xl font-Euclid font-bold">
              Dedication
            </span>
            <img src={Hand} alt="hand" />
          </div>
          <p className="valueCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Nulla porttitor ligula sed massa fermentum, ut
            vestibulum leo bibendum.
          </p>
        </div>
        {/* <div className="image">
          <img src={Building} alt="school image" />
        </div> */}
      </div>
    </section>
  );
};

export default Values;
