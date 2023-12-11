import { useState } from "react";

const Header = () => {
  const [headerCloserVar, setHeaderCloserVar] = useState(false);

  const openHeaderList = () => {
    setHeaderCloserVar((isOpen) => !isOpen);
  };

  return (
    <header className="header">
      <a href="#" className="header-logo">
        <img src="/favicon.png" alt="logo" />
        <p>Community</p>
      </a>
      <nav>
        <ul className="header-nav-list">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#"> Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <ul
          className={
            headerCloserVar
              ? "header-nav-list-responsive"
              : "header-nav-list-responsive-false"
          }
        >
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#"> Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <div className="header-nav-buttons">
          <button className="header-clone-project-btn">Clone project</button>
          <button onClick={openHeaderList} className="header-hamburger">
            <img
              src={
                headerCloserVar
                  ? "/header-closer.png"
                  : "/menuhamburger.png"
              }
              alt="hamburger"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
