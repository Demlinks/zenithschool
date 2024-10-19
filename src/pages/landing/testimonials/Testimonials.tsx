import { StarIcon } from "@heroicons/react/24/solid";
import { Dedeji } from "../../../assets/images";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="w-full py-10 pb-20">
      <header className="text-center font-Euclid text-2xl font-bold mb-5 lg:mb-10">
        Testimonials
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-20">
        <div className="testimonialCard">
          <div className="testimonialCardHeader">
            <div className="flex items-center space-x-1">
              <img
                src={Dedeji}
                alt="hand"
                className="rounded w-[50px] h-[50px]"
              />
              <span className="text-black text-base font-Euclid font-bold">
                Mrs. Opadiji
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span>4.0</span>
              <span>
                <StarIcon className="size-5 rounded-2 text-yellow-500" />
              </span>
            </div>
          </div>
          <p className="testimonialCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Donec convallis mauris vel sapien tincidunt, ac
            finibus metus varius.
          </p>
        </div>
        <div className="testimonialCard">
          <div className="testimonialCardHeader">
            <div className="flex items-center space-x-1">
              <img
                src={Dedeji}
                alt="hand"
                className="rounded w-[50px] h-[50px]"
              />
              <span className="text-black text-base font-Euclid font-bold">
                Mrs. Opadiji
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span>4.0</span>
              <span>
                <StarIcon className="size-5 rounded-2 text-yellow-500" />
              </span>
            </div>
          </div>
          <p className="testimonialCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Donec convallis mauris vel sapien tincidunt, ac
            finibus metus varius.
          </p>
        </div>
        <div className="testimonialCard">
          <div className="testimonialCardHeader">
            <div className="flex items-center space-x-1">
              <img
                src={Dedeji}
                alt="hand"
                className="rounded w-[50px] h-[50px]"
              />
              <span className="text-black text-base font-Euclid font-bold">
                Mrs. Opadiji
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span>4.0</span>
              <span>
                <StarIcon className="size-5 rounded-2 text-yellow-500" />
              </span>
            </div>
          </div>
          <p className="testimonialCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Donec convallis mauris vel sapien tincidunt, ac
            finibus metus varius.
          </p>
        </div>
        <div className="testimonialCard">
          <div className="testimonialCardHeader">
            <div className="flex items-center space-x-1">
              <img
                src={Dedeji}
                alt="hand"
                className="rounded w-[50px] h-[50px]"
              />
              <span className="text-black text-base font-Euclid font-bold">
                Mrs. Opadiji
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span>4.0</span>
              <span>
                <StarIcon className="size-5 rounded-2 text-yellow-500" />
              </span>
            </div>
          </div>
          <p className="testimonialCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Donec convallis mauris vel sapien tincidunt, ac
            finibus metus varius.
          </p>
        </div>
        <div className="testimonialCard">
          <div className="testimonialCardHeader">
            <div className="flex items-center space-x-1">
              <img
                src={Dedeji}
                alt="hand"
                className="rounded w-[50px] h-[50px]"
              />
              <span className="text-black text-base font-Euclid font-bold">
                Mrs. Opadiji
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span>4.0</span>
              <span>
                <StarIcon className="size-5 rounded-2 text-yellow-500" />
              </span>
            </div>
          </div>
          <p className="testimonialCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Donec convallis mauris vel sapien tincidunt, ac
            finibus metus varius.
          </p>
        </div>
        <div className="testimonialCard">
          <div className="testimonialCardHeader">
            <div className="flex items-center space-x-1">
              <img
                src={Dedeji}
                alt="hand"
                className="rounded w-[50px] h-[50px]"
              />
              <span className="text-black text-base font-Euclid font-bold">
                Mrs. Opadiji
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span>4.0</span>
              <span>
                <StarIcon className="size-5 rounded-2 text-yellow-500" />
              </span>
            </div>
          </div>
          <p className="testimonialCardContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Donec convallis mauris vel sapien tincidunt, ac
            finibus metus varius.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
