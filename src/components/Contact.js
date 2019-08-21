import React, { Component } from 'react';
import NavBar from './NavBar';

const buttonStyles={
    margin: "3vh 5vw",
    width: "175px"
}

class Contact extends Component {
    render()  {
        return(
            <React.Fragment>
                <NavBar />
                <div style={{ padding: "32vh 0" }}>
                <a href="mailto:pkwood12@gmail.com?subject=Contact%20from%20website">
                    <button className="btn btn-warning" style={buttonStyles}>Send Me An E-mail</button>
                </a>
                <a href="sms:1-404-277-4663">
                    <button className="btn btn-warning" style={buttonStyles}> Send Me A Text </button>
                </a>
                </div>
            </React.Fragment>
        );
    };
};

export default Contact;
