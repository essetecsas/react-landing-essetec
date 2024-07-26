"use client";
// next
import Image from "next/image";
import Link from "next/link";
// components
import { NavLink } from "./NavLink";
// hooks
import { useState, useEffect } from "react";
// icons
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
// css
import "./Navbar.css";

const NAVLINKS = [
  { title: "Inicio", path: "/" },
  { title: "Servicios", path: "/services" },
  { title: "Características", path: "/#features" },
  { title: "Clientes", path: "/#clients" },
  { title: "Acerca de nosotros", path: "/about" },
];

export const Navbar = () => {
  // change color when scrolling
  const [color, setColor] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 960) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <nav
        className={
          color
            ? "navbar navbar-custom sticky sticky-dark navbar-light nav-sticky navbar navbar-expand-lg fixed-top"
            : "navbar navbar-custom sticky sticky-dark navbar-light navbar navbar-expand-lg fixed-top"
        }
      >
        <div className="container">
          <Link href="/" className="logo">
            <Image
              src="/images/logos/logo_main.png"
              alt="logo image"
              width={80}
              height={70}
              priority
            />
          </Link>

          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <GiHamburgerMenu />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <IoMdClose />
            </button>
          )}

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="ms-auto navbar-center navbar-nav">
              {NAVLINKS.map((link, index) => (
                <li key={index} className="nav-item">
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
