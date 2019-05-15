import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import SignIn from '../auth/SignIn';
import { Link, NavLink } from 'react-router-dom';


class ModalLogin extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button variant="" className="text-green font-weight-bolder font-med float-right" onClick={this.handleShow}>Apply Now!</Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header className="bg-light-green text-green" closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <SignIn />
            <Modal.Footer>
                <Button variant="" componentClass={Link} href="/registration" to="/registration" className="">
                        <span className="text-green">click here to create an account</span>
                </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  export default ModalLogin;