import React,{Component, Fragment} from "react";
import {Navbar, Nav, Container, Table, Button, Col, Row} from 'react-bootstrap';
import logo from './logo.png';

class Department extends Component{

    constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = {depts : []};
    }

    componentDidMount=async()=>{
        const petition=await fetch("http://localhost:5000/Department/ShowAll",{method:"POST",headers:{'Content-Type':'application/json'}})
        const data=await petition.json()
        //console.log(data.sa)
        //console.log({users:data.sa})
        //if (data.ok)
            this.setState({depts:data.sa})
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
                            <h2>Departments</h2>
                        </Col>         
                        <Col align="right" >                        
                            <Button variant="success" href="#" controlId="btnDepartment">
                                <b>+</b> New Department
                            </Button>
                        </Col>   
                    </Container>
                </Container>
                <br></br> 
                <Container>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr align="center">
                                <th>Description</th>
                                <th>Priority</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.depts.map(funcion=>{return(
                            <tr>
                                <td>{funcion.name}</td>
                                <td>{funcion.priority}</td>
                                <td align="center">
                                    <Button variant="warning" href="">Edit</Button>
                                    <Button variant="danger">Delete</Button>
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
export default Department