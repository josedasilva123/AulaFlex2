import React from "react";
import Aside from "../Aside";
import CardList from "../CardList";
import "./styles.css";

const Main = () => {
  return (
    <div className="Main">
      <div className="container">
        <h2>Posts em Destaque</h2>
        <div className="Main-flexGrid">
          <CardList />
          <Aside />
        </div>        
      </div>
    </div>
  );
};

export default Main;
