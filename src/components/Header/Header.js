import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <NavLink to="index.html" className="logo">
                <img alt="img" src="assets/images/logo.png" />
              </NavLink>
              <ul className="nav">
                <li className="scroll-to-section">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="/mens">Men's</NavLink>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="index.html">Women's</NavLink>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="index.html">Kid's</NavLink>
                </li>
                <li className="submenu">
                  <NavLink to="javascript">Pages</NavLink>
                  <ul>
                    <li>
                      <NavLink to="about.html">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="products.html">Products</NavLink>
                    </li>
                    <li>
                      <NavLink to="single-product.html">Single Product</NavLink>
                    </li>
                    <li>
                      <NavLink to="contact.html">Contact Us</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <NavLink to="javascript">Features</NavLink>
                  <ul>
                    <li>
                      <NavLink to="#">Features Page 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Features Page 2</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Features Page 3</NavLink>
                    </li>
                    <li>
                      <NavLink
                        rel="nofollow noreferrer"
                        to="https://templatemo.com/page/4"
                        target="_blank"
                      >
                        Template Page 4
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <NavLink to="index.html">Explore</NavLink>
                </li>
              </ul>
              <NavLink className="menu-trigger">
                <span>Menu</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
