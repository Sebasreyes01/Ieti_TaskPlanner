import React from "react";
import {Component} from "react";
import "./Login.css";
import taskPlannerIcon from "../imgs/taskPlannerIcon.png";

class Login extends Component {
    render() {
        return(
            <div>
                <h1 id="title">Task Planner</h1>
                <img id="icon" src={taskPlannerIcon} alt="Task Planner Icon" height="150" width="150"/>
            </div>
        );
    }
}

export default Login;