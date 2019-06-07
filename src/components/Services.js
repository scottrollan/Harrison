import React, { Component } from 'react';
import NavBar from './NavBar';
import PW1 from '../assets/fakePWDriveway.jpg';
import BR1 from '../assets/fakeBRWoodedArea.png';
import M1 from '../assets/fakeMulching1.jpg';

const imageStyles = {
    maxHeight: "30vh",
    maxWidth: "90vw",
    marginBottom: "2vh",
}

class Services extends Component{
    render() {
        return(
            <React.Fragment>
                <NavBar/>
                <h2>Before and After Shots
                </h2>
                <h5>Pressure Washing</h5>
                <img src={PW1} alt='' style={imageStyles} />
                <br />
                <h5>Brush Removal </h5>
                <img src={BR1} alt='' style={imageStyles} />
                <br />
                <h5>Mulching</h5>
                <img src={M1} alt='' style={imageStyles} />
            </React.Fragment>
        );
    };
};

export default Services;