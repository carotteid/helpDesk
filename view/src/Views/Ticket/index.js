import React,{Component, Fragment} from "react";
import {Navbar, Nav, Container, Tab, Tabs, Table, Button} from 'react-bootstrap';
import logo from './logo.png';

class Ticket extends Component{

    constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = {tickets : []};
    }

    componentDidMount=async()=>{
        const petition=await fetch("http://localhost:5000/Ticket/ShowAll",{method:"POST",headers:{'Content-Type':'application/json'}})
        const data=await petition.json()
        //console.log(data.sa)
        //console.log({users:data.sa})
        //if (data.ok)
            this.setState({tickets:data.sa})
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
        console.log(this.state)
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
                    <h2>Tickets</h2>
                </Container>
                <br></br>
                <Container>
                    <Tabs defaultActiveKey="available" id="tabTickets">
                        <Tab eventKey="me" title="My Tickets">
                            <br></br>
                            <Container align="right">
                                <Button variant="success" href="#">
                                    <strong>+</strong> Open ticket
                                </Button>
                            </Container>
                            <br></br> 
                            <Container>
                                <Table striped bordered hover variant="dark" size="sm">
                                    <thead>
                                        <tr align="center">
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Open date</th>
                                            <th>Priority</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td align="center">
                                                <Button variant="info" href="">More</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Container>
                        </Tab>
                        <Tab eventKey="progress" title="Tickets in progress">
                            <br></br>
                            <Container>
                                <Table striped bordered hover variant="dark" size="sm">
                                    <thead>
                                        <tr align="center">
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Priority</th>
                                            <th>User</th>
                                            <th>Status</th>
                                            <th>Update date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td align="center">
                                                <Button variant="info" href="">More</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Container>
                        </Tab>                    
                        <Tab eventKey="available" title="Tickets Available">
                            <br></br>
                            <Container>
                                <Table striped bordered hover variant="dark" size="sm">
                                    <thead>
                                        <tr align="center">
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Department</th>
                                            <th>Open date</th>
                                            <th>Priority</th>
                                            <th>User</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.tickets.map(funcion=>{return(
                                        <tr>
                                        <td>{funcion.ID}</td>
                                        <td>{funcion.title}</td>
                                        <td>{funcion.Category.name}</td>
                                        <td>{funcion.Department.name}</td>
                                        <td>{funcion.createdAt}</td>
                                        <td>{funcion.Department.priority}</td>
                                        <td>{funcion.User.name} {funcion.User.lastName}</td>
                                            <td align="center">
                                                <Button variant="info" href="">More</Button>
                                            </td>
                                        </tr>
                                        )})}
                                    </tbody>
                                </Table>
                            </Container>
                        </Tab>                                       
                        <Tab eventKey="closed" title="Tickets Closed">
                        <br></br>
                            <Container>
                                <Table striped bordered hover variant="dark" size="sm">
                                    <thead>
                                        <tr align="center">
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Department</th>
                                            <th>Open date</th>
                                            <th>Closed date</th>
                                            <th>User</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td align="center">
                                                <Button variant="info" href="">More</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Container>
                        </Tab>
                    </Tabs>
                </Container>
            </Fragment>
        )
    }
}
export default Ticket