import { Building } from "../../../assets/images";

const About = () => {
  return (
    <section className="w-full py-10">
      <header className="text-center font-Euclid text-2xl font-bold mb-10">
        About Us
      </header>
      <div className="grid md:grid-cols-2 px-20 space-x-0 space-y-10 md:space-y-0 md:space-x-10">
        <div className="text">
          <p className="text-justify mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            nisi sit amet lorem tincidunt viverra. In euismod magna at semper
            malesuada. Donec convallis mauris vel sapien tincidunt, ac finibus
            metus varius. Nulla porttitor ligula sed massa fermentum, ut
            vestibulum leo bibendum. Sed viverra, libero ut tincidunt venenatis,
            velit libero tempor justo, nec varius lectus magna at lorem. Aenean
            malesuada volutpat risus, a aliquet arcu accumsan eget. Phasellus
            faucibus, enim vitae bibendum cursus, odio eros feugiat felis, nec
            congue velit ligula id ante.
          </p>
          <p className="text-justify">
            Pellentesque id libero justo. Ut a mauris id turpis scelerisque
            congue. Quisque ultricies nisl ut justo auctor, sit amet efficitur
            libero efficitur. Mauris quis varius neque. Nunc suscipit felis in
            ligula efficitur, id consequat purus malesuada. In quis tortor
            varius, aliquam arcu id, scelerisque risus. Fusce quis felis non
            nunc interdum posuere. Ut eget convallis libero, id porttitor eros.
          </p>
        </div>
        <div className="image">
            <img src={Building} alt="school image" />
        </div>
      </div>
    </section>
  );
}

export default About