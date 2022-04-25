import React from "react";
import './styles.css';
import { ThemeButton } from "../../styles/GlobalComponents";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-flexGrid">
          <h2>FlexBlog</h2>
          <ThemeButton buttonStyle="outline1">Seja feliz!</ThemeButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
