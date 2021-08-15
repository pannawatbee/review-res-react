import React from "react";
// import { Link } from "react-router-dom";
import "../assets/css/HomePage.css";
import Hottobun from "../assets/images/Hottobun.jpg";
import Copper from "../assets/images/copper.png"
import Starbuck from "../assets/images/starbuck.jpg"

import CarouselCard from "../components/home/CarouselCard";

function HomePage() {
  return (
    <div className="container">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <CarouselCard name="Hottobun" img={Hottobun}/>
          </div>
          <div className="item">
            <CarouselCard name="Copper" img={Copper}/>
          </div>
          <div className="item">
            <CarouselCard name="Starbuck" img={Starbuck}/>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
