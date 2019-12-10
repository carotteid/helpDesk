import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React,{Component} from "react"
import Views from "./Views"

class Routes extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Views.Login} />
                    <Route path="/Ticket" exact component={Views.Ticket} />
                    <Route path="/User" exact component={Views.User} />
                    <Route path="/Company" exact component={Views.Company} />
                    <Route path="/Department" exact component={Views.Department} />
                    <Route path="/Message" exact component={Views.Message} />
                    <Route path="/Profile" exact component={Views.Profile} />
                </Switch>
            </Router>
        )
    }
}
export default Routes