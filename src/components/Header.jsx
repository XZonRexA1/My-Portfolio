import { Slide } from "react-awesome-reveal";
import myPhoto from "../../public/images/myPhoto.jpg";

const Header = () => {
  return (
    <div className="mt-56 ml-2 flex flex-col-reverse  md:flex md:flex-row  justify-center items-center m-4 md:gap-12">
      <Slide delay={1e2}>
        <h2 className="text-2xl md:text-4xl  font-rubik tracking-wider mt-16 mr-12">
          <span className="text-7xl">Hi</span>, My name is{" "}
          <span className="md:bg-yellow-300 md:p-2">Alif Chowdhury Apurbo</span>{" "}
          <br /> and I am a full stack web developer.
        </h2>
      </Slide>
      <div>
        <img className="md:w-full border-black border-8 rounded-full shadow-2xl" src={myPhoto} alt="my photo" />
      </div>
    </div>
  );
};
 
export default Header;
