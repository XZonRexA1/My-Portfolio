import { Fade, Slide } from "react-awesome-reveal";
import myPhoto from "../../public/images/myPhoto.jpg";
import resume from '../../public/images/alif-chowdhury-apurbo-resume.pdf'
const Header = () => {
 
  return (
    <div className="mt-56 ml-2 flex flex-col-reverse  md:flex md:flex-row  justify-center items-center m-4 md:gap-12">
      <Slide delay={1e2}>
        <h2 className="text-2xl md:text-4xl  font-rubik tracking-wider mt-16 mr-12">
          <span className="text-7xl">Hi</span>, My name is{" "}
          <span className="md:bg-yellow-300 md:p-2">Alif Chowdhury Apurbo</span>{" "}
          <br /> and I am a full stack web developer.
          <div className="mt-4">
            <a
              href={resume}
              download
              className="btn btn-warning hover:bg-yellow-400"
            >
              Download My Resume
            </a>
          </div>
        </h2>
      </Slide>
      <Fade delay={1e2} cascade damping={1e-1}>
      <div>
        <img
          className="md:w-full border-black border-8 rounded-full shadow-2xl"
          src={myPhoto}
          alt="my photo"
        />
      </div>
      </Fade>
    </div>
  );
};

export default Header;
