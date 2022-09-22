import React, { useState } from "react";
import animeBg from '../assets/images/animeBG.png'
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './Signup';
import LoginForm from './Login';
import Auth from '../utils/auth';

function Header() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
             <Container fluid>
                <Navbar.Toggle aria-controls='navbar' />
                <Navbar.Collapse id='navbar'>
                    <Nav className='ml-auto'>
                        {/* if user is logged in show saved books and logout */}
                        {Auth.loggedIn() ? (
                            <>
                                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
  
            {/* set modal data up */ }
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                <Modal.Header closeButton>
                    <Modal.Title id='signup-modal'>
                    <Nav variant='pills'>
                        <Nav.Item>
                        <Nav.Link eventKey='login'>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Content>
                    <Tab.Pane eventKey='login'>
                        <LoginForm handleModalClose={() => setShowModal(false)} />
                    </Tab.Pane>
                    <Tab.Pane eventKey='signup'>
                        <SignUpForm handleModalClose={() => setShowModal(false)} />
                    </Tab.Pane>
                    </Tab.Content>
                </Modal.Body>
                </Tab.Container>
            </Modal>
            <img  className="jumbotron" src={animeBg} alt="header"></img>
        </div >
    )
}

export default Header