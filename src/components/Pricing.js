import React, { Component } from 'react';
import NavBar from './NavBar';
import ModalPressureWash from './ModalPressureWash';
import ModalBrushRemoval from './ModalBrushRemoval';
import ModalMulching from './ModalMulching';

const pricingStyles={
    margin: "6vh 10vw 0 10vw",
    textAlign: "right"
}

class Pricing extends Component {
    render() {
        return(
            <React.Fragment>
                <NavBar/>
                <div style={pricingStyles}>
                    <section style={{ float: "left" }}>
                        <ModalPressureWash />
                        <ModalBrushRemoval />
                        <ModalMulching />
                    </section>
                    <h5>Ex Lorem ea ex enim quis duis cupidatat excepteur et pariatur amet tempor nulla. Occaecat occaecat ea eiusmod deserunt mollit et elit. Eiusmod amet excepteur aute ullamco incididunt reprehenderit proident consequat non sint cupidatat excepteur nulla.</h5>
                    <a href="mailto:pkwood12@gmail.com?subject=Contact%20from%20website&body=Details%20about%20my%20project:%20">
                        <button className="btn btn-secondary"  style={{ margin: "3vh 0" }}>Request a Quote</button>
                    </a>
                    <h6>Irure officia reprehenderit anim nulla esse.</h6>
                </div>
            </React.Fragment>
        );
    };
};

export default Pricing;
