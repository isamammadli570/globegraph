/* import { NavLink } from "react-router-dom"; */
import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
//react icons
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
//scroll
import { Link } from "react-scroll";
import DarkMode from "../DarkMode";

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white darkApp md:px-14 px-5 border-b max-w-screen-2xl p-2 mx-auto top-0 right-0 left-0 ">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a href="/">
              <img className="md:w-32 w-28" src="logo.png" alt="" />
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  key={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex gap-10 items-center">
            <div className="md:space-x-12 md:flex items-center ">
              <DarkMode />
              <a
                href="/"
                className="hidden lg:flex items-center hover:text-secondary"
              >
                <GrLanguage className="mr-2" />
                <span>Language</span>
              </a>
              <button className="bg-secondary text-gray-200 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-teal-600">
                Sign up
              </button>
            </div>

            <div className="md:hidden flex">
              <button
                onClick={toggleMenu}
                className="text=white focus:outline-none focus:text-gray-300"
              >
                {isMenuOpen ? (
                  <FaXmark className="w-6 h-6 text-primary" />
                ) : (
                  <FaBars className="md:w-6 md:h-6 w-7 h-7 text-primary " />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 bg-secondary text-xl px-4 pt-48 pb-5 text-white ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            key={link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggleMenu}
            to={path}
            className="block hover:text-gray-300"
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}

export default PageNav;
