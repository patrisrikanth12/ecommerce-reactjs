import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <h3>
            <span className="material-symbols-outlined" style={{fontSize: "20px"}}>shopping_bag</span>Logo
          </h3>
        </div>
        <nav>
          <ul className="navbar">
            <li className="navbar__item">
              <a href="#">Home</a>
            </li>
            <li className="navbar__item">
              <a href="#">Contact Us</a>
            </li>
            <li className="navbar__item">
              <button className="btn__primary btn__primary--icon">
                <span className="material-symbols-outlined">shopping_cart</span>Cart
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
