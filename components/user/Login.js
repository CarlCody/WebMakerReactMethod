import React from "react";

export default class login extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input placeholder="Enter your Name" class="form-control" type="text" name="username" id="username" />
                    </div>
                    <div class="form-group">
                        <label for="password">Passwod</label>
                        <input placeholder="Enter your password" type="password" class="form-control" id="passwod" name="password" />
                    </div>
                    <a class="btn btn-success btn-block" href="profile.html">Login</a>
                    <a class="btn btn-primary btn-block" href="register.html">Register</a>
                </form>
            </div>
        )
    }
}