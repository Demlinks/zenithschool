import { useNavigate } from "react-router-dom";
import { Dots, Dotsl } from "../../../assets/images";
import { setRole } from "../../../utils/authTokens";
import "./Welcome.css";
const Welcome = () => {
    const navigate = useNavigate()
  return (
    <section className="w-full min-h-[85vh] welcomeBg">
      <div className="w-full bg-black/50 h-full px-10 lg:px-20 py-28">
        <div className="space-y-4 mb-4">
          <h1 className="text-5xl font-light tracking-widest text-white">
            Welcome to
          </h1>
          <h2 className="text-5xl font-bold text-white">
            {" "}
            Zenith International Schools
          </h2>
        </div>
        <div className="flex items-center space-x-3 mb-16">
          <img src={Dotsl} alt="left-dots" />
          <p className="text-lg text-white">For a Brighter Future</p>
          <img src={Dots} alt="left-dots" />
        </div>
        <div className="btn-group flex lg:space-x-3">
          <button
            className="bg-white rounded-xl p-2 lg:px-6 lg:py-3"
            onClick={() => {
              setRole("guardian");
              navigate("login");
            }}
          >
            Parent Login
          </button>
          <button className="bg-black text-white  rounded-xl p-2 lg:px-6 lg:py-3">
            Enroll Child
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
