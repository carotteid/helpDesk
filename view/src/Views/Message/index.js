import React,{Component, Fragment} from "react";
import {Navbar, Nav, Container, Table, Button, Dropdown, DropdownButton, Col, Row} from 'react-bootstrap';
import logo from './logo.png';

class Message extends Component{

    render(){
        //console.log(this.state)
        return (
            <Fragment>
                <Navbar bg="dark"  variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        className="d-inline-block align-top"
                        alt="HelpDesk logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="mr-auto justify-content-end">
                        <Nav.Link href="/Ticket">Tickets</Nav.Link>
                        <Nav.Link href="/User">Users</Nav.Link>
                        <Nav.Link href="/Company">Companies</Nav.Link>
                        <Nav.Link href="/Department">Departments</Nav.Link>
                        <Nav.Link href="/Message">Messages</Nav.Link>
                    </Nav>    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/Profile">Profile</Nav.Link>
                            <Nav.Link href="">LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>                
                </Navbar>
                <br></br>
                <Container>
                    <Container as={Row}>
                        <Col sm={2}>
                            <h2>Messages</h2>
                        </Col>         
                        <Col align="right" >                        
                            <Button variant="success" href="#" controlId="btnMessage">
                                <b>+</b> New Message
                            </Button>
                        </Col>   
                    </Container>
                </Container>
                <br></br> 
                <Container>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr align="center">
                                <th>From</th>
                                <th>Subject</th>
                                <th>Sent date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td align="center">
                                    <DropdownButton id="cbOptions" title="Options" variant="info">
                                        <Dropdown.Item href="#/action-1">Show</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Response</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                    </DropdownButton>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        )
    }
}
export default Message