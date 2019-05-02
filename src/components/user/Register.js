import React, {Component} from "react";
import {Link} from "react-router-dom";

 export default class Register extends Component {

    render() {
        return (
<div className="container">
        <h1>Register</h1>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your Name" className="form-control" type="text" name="username" id="username"/>
            </div>
            <div className="form-group">
                <label  htmlFor="password">Passwod</label>
                <input placeholder="Enter your password" type="password" className="form-control" id="passwod"
                    name="password"/>
            </div>
            <div className="form-group">
                <label  htmlFor="verify password"> Verify Passwod</label>
                <input placeholder="Please verify your password" type="password" className="form-control" id="passwod"
                    name="password"/>
            </div>
            <Link to="/Register" className="btn btn-warning btn-block" href="profile.html">Register</Link>
            <Link to="/login"className = "btn btn-success btn-block" href="login.html">Cancel</Link>
        </form>
    </div>
        )
    }
}