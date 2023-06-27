import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink,animateScroll } from "react-scroll";


const NavBar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
    closeDropdown();
  };

  const navOption = (
    <>
      <li className="font-rubik">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={70}
          onClick={scrollToTop}
        >
          Home
        </ScrollLink>
      </li>
      <li className="font-rubik">
        <ScrollLink
          to="aboutMe"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          onClick={closeDropdown}
        >
          About Me
        </ScrollLink>
      </li>
      <li className="font-rubik">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onClick={closeDropdown}
        >
          Projects
        </ScrollLink>
      </li>
      <li className="font-rubik">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          onClick={closeDropdown}
        >
          Contact
        </ScrollLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-50 w-full  bg-orange-400">
        <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-orange-500 bg-opacity-50 text-white  rounded-box w-52"
              onClick={closeDropdown}
            >
              {navOption}
            </ul>
          )}
        </div>

          <Link to="/" className="font-semibold ml-8 font-rubik text-xl">
            Alif Chowdhury Apurbo
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex lg:ml-44">
          <ul className="menu menu-horizontal font-semibold px-1">
            {navOption}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
