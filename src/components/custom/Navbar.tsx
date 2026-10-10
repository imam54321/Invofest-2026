import React from "react";
import Logo from "/assets/nav-logo.webp";
import { Link, useLocation } from "react-router-dom";
import { FaMicrophoneAlt, FaTrophy, FaHome } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
// Mengimpor ikon pengguna sebagai alternatif untuk login admin
import { FaUserCircle } from "react-icons/fa"; // Contoh ikon pengguna
import { FaLaptop } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const getNavLinkClass = (path: string) => {
    const isActive =
      path === "/"
        ? location.pathname === "/"
        : location.pathname === path ||
          location.pathname.startsWith(`${path}/`);

    return `block py-2 px-3 rounded transition-colors duration-200 hover:text-invofest_light focus-visible:text-invofest_light ${
      isActive ? "text-invofest_light" : "text-white"
    } lg:bg-transparent lg:p-0 flex items-center gap-2`;
  };

  return (
    <React.Fragment>
      <nav className="bg-invofest border-gray-200 fixed top-0 z-[999] w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="w-40" alt="Invofest Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={`${openMenu ? true : false}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${!openMenu && "hidden"} w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border  rounded-lg lg:flex-row lg:items-center lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 ">
              <li>
                <Link
                  to={"/"}
                  className={getNavLinkClass("/")}
                  aria-current={location.pathname === "/" ? "page" : undefined}
                  onClick={() => setOpenMenu(false)}
                >
                  <FaHome />
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to={"/competition"}
                  className={getNavLinkClass("/competition")}
                  aria-current={
                    location.pathname.startsWith("/competition")
                      ? "page"
                      : undefined
                  }
                  onClick={() => setOpenMenu(false)}
                >
                  <FaTrophy />
                  Competition
                </Link>
              </li>
              <li>
                <Link
                  to={"/seminar"}
                  className={getNavLinkClass("/seminar")}
                  aria-current={
                    location.pathname.startsWith("/seminar")
                      ? "page"
                      : undefined
                  }
                  onClick={() => setOpenMenu(false)}
                >
                  <MdCoPresent />
                  Seminar
                </Link>
              </li>
              <li>
                <Link
                  to={"/workshop"}
                  className={getNavLinkClass("/workshop")}
                  aria-current={
                    location.pathname.startsWith("/workshop")
                      ? "page"
                      : undefined
                  }
                  onClick={() => setOpenMenu(false)}
                >
                  <FaLaptop />
                  Workshop
                </Link>
              </li>
              <li>
                <Link
                  to={"/talkshow"}
                  className={getNavLinkClass("/talkshow")}
                  aria-current={
                    location.pathname.startsWith("/talkshow")
                      ? "page"
                      : undefined
                  }
                  onClick={() => setOpenMenu(false)}
                >
                  <FaMicrophoneAlt />
                  Talkshow
                </Link>
              </li>
              <li>
                <Link
                  to={"/login-admin"}
                  className={getNavLinkClass("/login-admin")}
                  aria-current={
                    location.pathname === "/login-admin" ? "page" : undefined
                  }
                  onClick={() => setOpenMenu(false)}
                  aria-label="Login Admin"
                  title="Login Admin"
                >
                  {/* Menggunakan FaUserCircle sebagai ikon login */}
                  <FaUserCircle className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
