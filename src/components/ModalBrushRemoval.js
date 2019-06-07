import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

class MyVerticallyCenteredModal extends Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ color: "#3e3e3e" }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Brush Removal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>$975 per hour plus 1 hug</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class ModalBrushRemoval extends Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <ButtonToolbar>
          <Button
            variant="warning"
            style={{ margin: "0 2vw 3vh", width: "150px" }}
            onClick={() => this.setState({ modalShow: true })}
          >
            Brush Removal
          </Button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      );
    }
  }
  
  export default ModalBrushRemoval;