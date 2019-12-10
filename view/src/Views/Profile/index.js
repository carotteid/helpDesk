import React,{Component, Fragment} from "react";
import {Navbar, Nav, Container, Form, Col, Row, Button} from 'react-bootstrap';
import logo from './logo.png';

class Profile extends Component{

    /*constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = {profile : []};
    }

    componentDidMount=async()=>{
        const petition=await fetch("http://localhost:5000/User/Show",{ "ID": 1, method:"POST",headers:{'Content-Type':'application/json'}})
        const data=await petition.json()
        //console.log(data.sa)
        //console.log({users:data.sa})
        //if (data.ok)
            this.setState({profile:data.sw})
    }*/

    render(){
        console.log(this.state)
        return (
            <Fragment>
                <Navbar bg="dark"  variant="dark">
                    <Navbar.Brand>
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
                    <Form.Group as={Row}>
                        <Col sm={5}>
                            <h2>My Profile</h2>
                        </Col>         
                        <Col align="right" >
                            <Button variant="warning"><b>Edit</b></Button>
                        </Col>   
                    </Form.Group>                            
                    <br></br>
                    <Container>
                        <Form>
                            <h5>Personal</h5>
                            <Form.Group as={Row} controlId="txtName">
                                <Form.Label column sm={2}>
                                Name
                                </Form.Label>
                                <Col sm={4}>
                                <Form.Control readOnly={true}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="txtLastname">
                                <Form.Label column sm={2}>
                                Last name
                                </Form.Label>
                                <Col sm={4}>
                                <Form.Control readOnly={true}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="txtPhone">
                                <Form.Label column sm={2}>
                                Phone
                                </Form.Label>
                                <Col sm={4}>
                                <Form.Control readOnly={true} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="txtEmail">
                                <Form.Label column sm={2}>
                                Email
                                </Form.Label>
                                <Col sm={4}>
                                <Form.Control readOnly={true} />
                                </Col>
                            </Form.Group>
                            <br></br>
                            <h5>Job</h5>
                            <Form.Group as={Row} controlId="txtDepartment">
                                <Form.Label column sm={2}>
                                Department
                                </Form.Label>
                                <Col sm={4}>
                                <Form.Control readOnly={true}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="txtCompany">
                                <Form.Label column sm={2}>
                                Company
                                </Form.Label>
                                <Col sm={4}>
                                <Form.Control readOnly={true} />
                                </Col>
                            </Form.Group>
                            <br></br>
                            <h5>Login</h5>
                            <Form.Group as={Row} controlId="txtUsername">
                                <Form.Label column sm={2}>
                                Username
                                </Form.Label>
                                <Col sm={4}>
                                <Form.Control readOnly={true} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="txtPassword">
                                <Form.Label column sm={2}>
                                Password
                                </Form.Label>
                                <Col sm={4}>
                                <Form.Control type="password" readOnly={true} />
                                </Col>
                                <Col>
                                    <Button variant="info" size="sm">Show password</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
export default Profile