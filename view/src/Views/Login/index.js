import React,{Component, Fragment} from "react";
import { Form, Button, Container} from 'react-bootstrap';
import login from './login.png';

class Login extends Component{

   constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = { username: "", password: "" };
    }

    onSubmit=async(event)=>{
        event.preventDefault()
        try{
            const petition=await fetch("http://localhost:5000/User/Access",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify({search:{username: this.state.username, password: this.state.password}})})
            console.log(petition)
            const data=await petition.json()
            if (data.ok)
                this.props.history.push("/Ticket")
            }
        catch(err){console.log(err)}
    }

    render(){
        console.log(this.state)
        return (
            <Fragment>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container className="align-items-center">
                    <Container align="center">
                        <img src={login} alt="login" />
                    </Container>
                    <br></br>
                    <Container align="center">
                        <Form>
                        <Form.Group controlId="txtUsername" className="col-lg-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" onChange={value=>{this.setState({username:value.target.value})}}/>
                        </Form.Group>

                        <Form.Group controlId="txtPassword" className="col-lg-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={value=>{this.setState({password:value.target.value})}} />
                        </Form.Group>
                        <Button variant="primary" type="submit" /*onClick={this.onSubmit}*/ href="/Ticket">
                            Login
                        </Button>
                        </Form>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
export default Login