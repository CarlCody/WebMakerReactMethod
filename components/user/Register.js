import React, {Component} from "react";

export default class Profile extends Component {
    render() {
        return (
<div class="container">
        <h1>Register</h1>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input placeholder="Enter your Name" class="form-control" type="text" name="username" id="username"/>
            </div>
            <div class="form-group">
                <label for="password">Passwod</label>
                <input placeholder="Enter your password" type="password" class="form-control" id="passwod"
                    name="password"/>
            </div>
            <div class="form-group">
                <label for="verify password"> Verify Passwod</label>
                <input placeholder="Please verify your password" type="password" class="form-control" id="passwod"
                    name="password"/>
            </div>
            <a class="btn btn-warning btn-block" href="profile.html">Register</a>
            <a class="btn btn-success btn-block" href="login.html">Cancel</a>
        </form>
    </div>
        )
    }
}