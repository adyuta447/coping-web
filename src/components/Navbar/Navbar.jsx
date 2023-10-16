import Image from "next/image";
import React from "react";
import { MdOutlineDehaze } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
// import groupfive from "../../assets/groupfive.png";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <Image
            src="/assets/trinity.png"
            width={150}
            height={41}
            alt="logo"
            loading="lazy"
          />
          {/* <img src={groupfive} alt="app__logo" /> */}
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a className="p__opensans" href="#home">
              Home
            </a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#dampak">Dampak</a>
          </li>
          <li className="p__opensans">
            <a href="#dokumentasi">Dokumentasi</a>
          </li>
        </ul>
        <div className="app__navbar-smallscreen">
          <MdOutlineDehaze
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineClose
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a
                    className="app__navbar_link"
                    href="#home"
                    onClick={() => setToggleMenu(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="app__navbar_link"
                    href="#about"
                    onClick={() => setToggleMenu(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="app__navbar_link"
                    href="#dampak"
                    onClick={() => setToggleMenu(false)}
                  >
                    Dampak
                  </a>
                </li>
                <li>
                  <a
                    className="app__navbar_link"
                    href="#dokumentasi"
                    onClick={() => setToggleMenu(false)}
                  >
                    Dokumentasi
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
