import CarouselImage from "./CarouselImage";
import CarouselImage2 from "./CarouselImage2";
import CarouselImage3 from "./CarouselImage3";

const Modal = () => {
  const handleOutsideClick = (event) => {
    const modal = event.currentTarget;
    if (event.target === modal) {
      modal.close();
    }
  };
  return (
    <div className="font-rubik">
      {/* job navigator modal */}
      <dialog id="my_modal_1" className="modal" onClick={handleOutsideClick}>
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl bg-orange-400"
        >
          <div className="card lg:card-side bg-orange-400">
            <figure className="w-full mt-4 flex flex-col">
              <CarouselImage></CarouselImage>
              <div>
                <a
                  className="btn mx-4 bg-black border-none text-white hover:bg-opacity-50"
                  href="https://github.com/XZonRexA1/job-navigator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
                <a
                  className="btn bg-black border-none text-white hover:bg-opacity-50"
                  href="https://job-navigator-me.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
              </div>
            </figure>

            <div className="border-2 mt-4 border-white rounded"></div>
            <div className="card-body w-full">
              <h2 className="card-title">Job Navigator</h2>
              <p>
                It is a job portal website where you can find your preferable
                Jobs and chose the visit them and see additional Information and
                Apply for them.
              </p>
              <h2 className="card-title mt-8">Features</h2>
              <ul className="list-disc">
                <li className="mb-4 ml-4">
                  Dynamic Route Links: Explore different pages seamlessly
                  without the need for page reloads. Our website incorporates
                  dynamic links that allow you to navigate effortlessly between
                  pages.
                </li>
                <li className="mb-4 ml-4">
                  Filter Options: Customize your job search experience by
                  selecting either Show Onsite Jobs or Show Remote Jobs using
                  our intuitive filter buttons. Easily find the job
                  opportunities that best match your preferences.
                </li>
                <li className="mb-4 ml-4">
                  Error Page with 404 Warning: In case of a mistyped URL or a
                  broken link, our website provides an error page with a 404
                  Page Not Found warning. You can quickly return to the home
                  page by clicking on the provided link.
                </li>
              </ul>
              <h2 className="card-title mt-2">Technologies</h2>
              <p>React js, React Router Dom, HTML, vanilla CSS, Recharts.</p>
            </div>
          </div>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn bg-orange-500 border-none text-white hover:bg-orange-300">
              Close
            </button>
          </div>
        </form>
      </dialog>
      {/* tasty meal modal */}
      <dialog id="my_modal_2" className="modal" onClick={handleOutsideClick}>
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl bg-orange-400"
        >
          <div className="card lg:card-side bg-orange-400">
            <figure className="w-full mt-4 flex flex-col">
              <CarouselImage2></CarouselImage2>
              <div className="md:mb-52">
                <a
                  className="btn  md:mx-4 bg-black border-none text-white hover:bg-opacity-50"
                  href="https://github.com/XZonRexA1/tasty-meal-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Client Link
                </a>
                <a
                  className="btn  bg-black border-none text-white hover:bg-opacity-50"
                  href="https://github.com/XZonRexA1/tasty-meal-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Server Link
                </a>
                <a
                  className="btn mx-4 mt-4 bg-black border-none text-white hover:bg-opacity-50"
                  href="https://tasty-meal-client-me.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
              </div>
            </figure>

            <div className="border-2 mt-4 border-white rounded"></div>
            <div className="card-body w-full">
              <h2 className="card-title">Tasty Meal</h2>
              <p>
                It is a Food and Dining Website. It serves as a platform where
                users can explore recipes, view menus, learn about the
                establishment, and access the ingredients for various food
                recipes shared by different owners or contributors and also can
                add to favorite them.
              </p>
              <h2 className="card-title mt-8">Features</h2>
              <ul className="list-disc">
                <li className="mb-4 ml-4">
                  Header Navigation: The header includes three links that
                  utilize the activeLink feature to indicate the current route
                  or page you are on. This provides a visual preview of your
                  current location within the website.
                </li>
                <li className="mb-4 ml-4">
                  User Profile and Login/Logout Button: The navbar displays a
                  user profile picture and a login/logout button. When a user is
                  logged in, their profile picture is shown. Hovering over the
                  picture reveals the logged-in users name. Simultaneously, a
                  logout button is displayed. Conversely, if the user is logged
                  out, the profile picture is removed, and the login button
                  reappears.
                </li>
                <li className="mb-4 ml-4">
                  Added Recipe Notifications: React-toastify is implemented to
                  display messages when a recipe is successfully added to
                  favorite. This feature enhances the user experience by
                  providing visual feedback for the users.
                </li>
              </ul>
              <h2 className="card-title mt-2">Technologies</h2>
              <p>
                HTML, Tailwind CSS, React js, React Router Dom, React Toastify,
                Firebase Authentication, Environment variables, Express js, Node
                js, Vercel.
              </p>
            </div>
          </div>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn bg-orange-500 border-none text-white hover:bg-orange-300">
              Close
            </button>
          </div>
        </form>
      </dialog>
      {/* enigma magic modal */}
      <dialog id="my_modal_3" className="modal" onClick={handleOutsideClick}>
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl bg-orange-400"
        >
          <div className="card lg:card-side bg-orange-400">
            <figure className="w-full mt-4 flex flex-col">
              <CarouselImage3></CarouselImage3>
              <div className="md:mb-28">
                <a
                  className="btn  md:mx-4 bg-black border-none text-white hover:bg-opacity-50"
                  href="https://github.com/XZonRexA1/enigma-magic-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Client Link
                </a>
                <a
                  className="btn  bg-black border-none text-white hover:bg-opacity-50"
                  href="https://github.com/XZonRexA1/enigma-magic-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Server Link
                </a>
                <a
                  className="btn mx-4 mt-4 bg-black border-none text-white hover:bg-opacity-50"
                  href="https://enigma-magic.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
              </div>
            </figure>

            <div className="border-2 mt-4 border-white rounded"></div>
            <div className="card-body w-full">
              <h2 className="card-title">Enigma Magic</h2>
              <p>
                Enigma is a website for magic lovers to find and enroll in magic
                classes. They can browse popular classes, see instructor
                details, and select the classes they want. Users can easily pay
                for their selected classes and also remove classes if needed.
                Enigma keeps track of their enrolled classes and payment
                history, providing a seamless experience for managing and paying
                for magic classes.
              </p>
              <h2 className="card-title mt-8">Features</h2>
              <ul className="list-disc">
                <li className="mb-4 ml-4">
                  On the Home page of the website, a toggle button is provided
                  to switch between Dark and White themes for a personalized
                  viewing experience.
                </li>
                <li className="mb-4 ml-4">
                  To enable seamless and secure payments for selected classes,
                  Stripe JS is integrated as the payment processing system.
                </li>
                <li className="mb-4 ml-4">
                  The website incorporates a robust authentication system
                  powered by Firebase Authentication, ensuring secure user login
                  and registration processes. JWT (JSON Web Tokens) are employed
                  to handle user authentication and protect sensitive user data.
                </li>
              </ul>
              <h2 className="card-title mt-2">Technologies</h2>
              <p>
                HTML, Tailwind CSS, React js, React Router Dom, Stripe js, Node
                js, Mongodb, Express js, Dotenv, Environment variables, Daisy
                UI, Axios, Firebase, TanStack Query, JWT, React-awesome-reveal
                package, Vercel, React Awesome Components etc.
              </p>
            </div>
          </div>
          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn bg-orange-500 border-none text-white hover:bg-orange-300">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
