import React,{Component, Fragment} from "react";
import {Navbar, Nav, Container, Table, Button, DropdownButton, Dropdown, Row, Col} from 'react-bootstrap';
import logo from './logo.png';

class Company extends Component{

    constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = {company : []};
    }

    componentDidMount=async()=>{
        const petition=await fetch("http://localhost:5000/Company/ShowAll",{method:"POST",headers:{'Content-Type':'application/json'}})
        const data=await petition.json()
        //console.log(data.sa)
        //console.log({users:data.sa})
        //if (data.ok)
            this.setState({company:data.sa})
    }
/*
    onSubmit=async()=>{
        try{
            const petition=await fetch("http://localhost:5000/login",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify({email: this.state.user, password: this.state.password})})
            const data=await petition.json()
            if (data.ok)
                this.props.history.push("/Function")
            console.log(petition)
            }
        catch(err){console.log(err)}
    }*/

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
                            <h2>Companies</h2>
                        </Col>         
                        <Col align="right" >                        
                            <Button variant="success" href="#" controlId="btnCompany">
                                <b>+</b> New Company
                            </Button>
                        </Col>   
                    </Container>
                </Container>
                <br></br> 
                <Container>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr align="center">
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.company.map(funcion=>{return(
                            <tr>
                                <td>{funcion.name}</td>
                                <td>{funcion.address}</td>
                                <td>{funcion.city}</td>
                                <td>{funcion.country}</td>
                                <td>{funcion.phone}</td>
                                <td>{funcion.email}</td>
                                <td align="center">
                                <DropdownButton id="cbOptions" title="Options" variant="info">
                                    <Dropdown.Item href="#/action-1">Show</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                </DropdownButton>
                                </td>
                            </tr>
                            )})}
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        )
    }
}
export default Company