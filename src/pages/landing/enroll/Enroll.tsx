import { CheckCircleIcon } from "@heroicons/react/24/solid";
import "./Enroll.css";
const Enroll = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="banner">
        <div className="bannerText">
          <h2 className="heading">Admission in Progress!!!</h2>
          <p className="sub-heading">
            Enroll your child(ren) today to this great citadel of learning.
          </p>
        </div>
        <button className="enrollBtn">Enroll Now</button>
        <div className="classes">
          <div className="class">
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="size-5 text-[#0B5071]" />
              <span>Kindergarten</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="size-5 text-[#0B5071]" />
              <span>Creche</span>
            </div>
          </div>
          <div className="class">
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="size-5 text-[#0B5071]" />
              <span>Nursery</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="size-5 text-[#0B5071]" />
              <span>Primary</span>
            </div>
          </div>
          <div className="class">
            <div className="flex items-center space-x-1">
              <CheckCircleIcon className="size-5 text-[#0B5071]" />
              <span>Secondary</span>
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="new">
          <h4 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <p className="date">09/09/2024</p>
        </div>
        <div className="new">
          <h4 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <p className="date">09/09/2024</p>
        </div>
        <div className="new">
          <h4 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <p className="date">09/09/2024</p>
        </div>
        <div className="new">
          <h4 className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <p className="date">09/09/2024</p>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
