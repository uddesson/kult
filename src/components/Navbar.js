import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "../assets/styles/Navigation.css";

export default class Navbar extends Component {
  state = {
    toggleHamburger: "",
    toggleMenu: "navbarHidden",
  }

  toggleMenu = () => {
    this.setState({
      toggleHamburger: "open",
      toggleMenu: "navbarVisible",
    });

    if (this.state.toggleHamburger === "open") {
      this.setState({
        toggleHamburger: "",
      });
    }

    if (this.state.toggleMenu === "navbarVisible") {
      this.setState({
        toggleMenu: "navbarHidden",
      });
    }
  }

  render() {
    const { toggleHamburger } = this.state;
    const { toggleMenu } = this;
    return (
      <nav>
        <Hamburger className={toggleHamburger} handleChange={toggleMenu} />
        <ul id="navigation" className={this.state.toggleMenu}>
          <li>
            <Link to="/" onClick={toggleMenu}>Hem</Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleMenu}>Meny</Link>
          </li>
          <li>
            <Link to="/book" onClick={toggleMenu}>Boka</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Kontakt</Link>
          </li>
          <li>
            <Link to="/admin" onClick={toggleMenu}>Admin</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
