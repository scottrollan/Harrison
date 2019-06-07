import React, { Component } from "react";
import NavBar from "./NavBar";

const homePageStyles={
    margin: "3vh 10vw",
}

class HomePage extends Component {
  mouseOver = e => {
    e.target.title = "I don't do anything";
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div style={homePageStyles}>
        <header className="App-header">HARRISON AT YOUR SERVICE</header>
        <button className="btn btn-warning" id="homePageBtn">
          <span className="initial">I'm just a button</span>
          <span className="onHover" />
        </button>
        <h5>We can put pictures here with cool hover effects, or a picture carousel, or we can keep it clean and perhaps just list his number and/or a tagline</h5>
        <h6>I think we should work in a Testimonials section somewhere, too.</h6>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
