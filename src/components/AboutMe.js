import React, { Component } from 'react';
import NavBar from './NavBar';
import Working from '../assets/working.jpg';

const pStyles={
    fontSize: "3.2vh",
    margin: "3vh 10vw",
    textAlign: "left"
}

const imgStyles={
    height: "35vh",
    float: "right",
    margin: "3vh 10vw 1vh 3vw",
    borderRadius: "0.7vw",
    border: "solid 0.2vw #ffc107"
}

class Contact extends Component {
    render()  {
        return(
            <React.Fragment>
                <NavBar />
                    <h1>Harrison Wood</h1>
                    <span>
                    <img src={Working} alt='' style={imgStyles} />
                    <p style={pStyles}>Sint amet irure eu dolore excepteur ea exercitation esse Lorem ipsum. Cupidatat incididunt velit pariatur culpa. Non adipisicing laboris ipsum Lorem. Est voluptate incididunt nisi aliqua aliquip enim in ea incididunt occaecat. Pariatur dolore aliquip consectetur incididunt velit laboris ullamco laboris in id.</p>
                    <p style={pStyles}>Cillum et commodo aute anim consequat aute esse eu labore elit minim labore exercitation mollit. Aliqua nisi occaecat commodo officia aliquip. In enim anim anim est. Velit tempor proident proident ipsum nostrud sit commodo exercitation aute veniam ad. Dolore cillum aute quis nostrud aliquip consequat est dolor. Minim qui esse veniam aliquip ad id. Anim adipisicing officia consequat commodo sint.</p>
                    <p style={pStyles}>Qui Lorem reprehenderit id commodo Lorem magna commodo labore dolor minim anim voluptate deserunt. Culpa laborum labore commodo nostrud excepteur occaecat id minim mollit consectetur do aliqua Lorem ipsum. Anim aliquip exercitation non cillum nulla et exercitation eu excepteur pariatur ex mollit. Irure veniam nisi sit irure et officia tempor ad Lorem. Velit adipisicing sint nulla eiusmod commodo do aliqua cupidatat cupidatat qui tempor ipsum aute.</p>
                    </span>
            </React.Fragment>
        );
    };
};

export default Contact;