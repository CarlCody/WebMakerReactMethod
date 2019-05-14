import React from "react";
import {Link} from "react-router-dom";


export default class Login extends React.Component {
     
    state = {
        username: "",
        password: ""
    }

    onChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state;
        const user = {
            username,
            password
        }
        this.login(user);
    }

    login = user => {
        for(let item of this.props.users) {
            if(item.username === user.username && item.password === user.password) {
                this.props.history.push("/user/" + item._id);
                return;
            }
        }
        alert("Your username and password doesn't match our records");
    }


    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
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
                    <button className="btn btn-success btn-block">Login</button>
                    <Link className="btn btn-primary btn-block" to="/register">Register</Link>
                </form>
            </div>
        )
    }
}