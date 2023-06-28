import github from "../../public/images/project images/social-image/logo-github.svg";
import instagram from "../../public/images/project images/social-image/logo-instagram.svg";
import facebook from "../../public/images/project images/social-image/logo-facebook.svg";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="mx-4 rounded-md md:mx-14 bg-orange-300  p-8 mt-56"
    >
      <h2 className=" mb-8 md:mb-4 font-rubik  md:text-left md:mr-40 text-4xl font-bold">
        About <span className="text-orange-500">Me</span>
      </h2>
      <p className=" font-rubik text-xl">
        I am a full-stack web developer with 6 months of experience. Passionate
        about learning and creating web projects. Skills: HTML, CSS, JavaScript,
        React. Committed to delivering high-quality, responsive websites.
        Up-to-date with the latest web development trends. Enjoy collaborating
        with teams for project success. Excited to grow and excel in web
        development. Let us connect and create amazing web experiences!
      </p>
      <h2 className="uppercase font-rubik mt-4 font-bold">
        you can also visit my social
      </h2>
      <div className="flex gap-4 mt-2">
        <a href="https://github.com/XZonRexA1" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/ig_xzonrexa1/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" className="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/XZonRexA1" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
