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
            <Link className="btn btn-warning btn-block" to="/user/123">Register</Link>
            <Link className = "btn btn-success btn-block" to="/login">Cancel</Link>
        </form>
    </div>
        )
    }
}