import React from "react";
import {Link} from "react-router-dom";


export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input placeholder="Enter your Name"
                         className="form-control"
                          type="text"
                           name="username"
                            id="username"
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Passwod</label>
                        <input placeholder="Enter your password"
                         type="password"
                          className="form-control"
                           id="passwod"
                            name="password"
                            onChange={this.onChange} />
                    </div>
                    <button className="btn btn-success btn-block" to="/user/uid">Login</button>
                    <button className="btn btn-primary btn-block" to="/register">Register</button>
                </form>
            </div>
        )
    }
}