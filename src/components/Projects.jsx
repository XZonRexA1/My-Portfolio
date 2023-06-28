import jobNavigator from "../../public/images/project images/project-home-image/job-navigator-home.jpg";
import tastyMeal from "../../public/images/project images/project-home-image/tasty-meal-home.jpg";
import enigmaMagic from "../../public/images/project images/project-home-image/enigma-home.jpg";
import Modal from "./Modal";
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-4xl font-bold ml-4 md:ml-20 mb-8  md:text-left  md:mb-4 font-rubik mt-28 md:mt-60">
        My <span className="text-orange-500">Projects</span>
      </h2>
      <Fade delay={1e2} cascade damping={1e-1}>
        <div className="grid md:grid-cols-3 md:-mt-8 md:mx-4">
          {/* Job navigator card */}
          <div className="card w-96 md:m-12 ml-2 mb-8 md:ml-4 bg-orange-300 font-rubik text-white shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={jobNavigator}
                alt="job navigator"
                className="rounded-md"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Job Navigator</h2>
              <p>Looking for Jobs ? this is the website for you.</p>
              <div className="card-actions">
                <button
                  onClick={() => window.my_modal_1.showModal()}
                  className="btn border-none text-white bg-orange-400 hover:bg-orange-200"
                >
                  See info
                </button>
              </div>
            </div>
          </div>
          {/* tasty meal card */}
          <div className="card w-96 md:m-12 ml-2 mb-8 md:ml-4 bg-orange-300 font-rubik text-white shadow-xl">
            <figure className="px-10 pt-10">
              <img src={tastyMeal} alt="tasty meal" className="rounded-md" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Tasty meal</h2>
              <p>
                Are you Hungry ? Then visit Our Awesome Website and see many
                recipes to your preferences.
              </p>
              <div className="card-actions">
                <button
                  onClick={() => window.my_modal_2.showModal()}
                  className="btn border-none text-white bg-orange-400 hover:bg-orange-200"
                >
                  See info
                </button>
              </div>
            </div>
          </div>
          {/* enigma magic card */}
          <div className="card w-96 md:m-12 ml-2 mb-8 md:ml-4 bg-orange-300 font-rubik text-white shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={enigmaMagic}
                alt="Enigma Magic"
                className="rounded-md"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Enigma Magic</h2>
              <p>
                Looking for Classes To learn Magic ? this is the website for
                you.
              </p>
              <div className="card-actions">
                <button
                  onClick={() => window.my_modal_3.showModal()}
                  className="btn border-none text-white bg-orange-400 hover:bg-orange-200"
                >
                  See info
                </button>
              </div>
            </div>
          </div>
          <Modal></Modal>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
