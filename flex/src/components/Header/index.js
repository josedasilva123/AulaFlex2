import React from "react";
import './styles.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-flexGrid">
          <h2>FlexBlog</h2>
          <button>Seja feliz!</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
