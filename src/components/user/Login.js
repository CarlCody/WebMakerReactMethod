//Client side
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


export default class Login extends React.Component {
     
    state = {
        username: "",
        password: "",
        showAlert: false
    }

    onChange = e => {
       this.setState({
           [e.target.name]: e.target.value,
            showAlert: false
       })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state;
        const user = {
            username,
            password,
           
        }
        this.login(user);
    }

    login = async user => {
        //connecting to user.server.js in (serverside)
        //Pass in username and password as parameter to serverside.`
        const res = await axios.post('/api/login', user);
        if(res.data){
            this.props.history.push(`/user/${res.data._id}`)
        }else {
            // alert("Your username and password doesn't match our records");
            this.setState({
                showAlert: true
            })
        }
    }
        


    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                {this.state.showAlert?
                 (<div className="alert alert-danger">Your username and password doesn't match our records</div>): null
                }
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input placeholder="Enter your Name"
                         className="form-control"
                          type="text"
                           name="username"
                            id="username"
                            onChange={this.onChange}
                            value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="Enter your password"
                         type="text"
                          className="form-control"
                           id="password"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}/>
                    </div>
                    <button className="btn btn-success btn-block">Login</button>
                    <Link className="btn btn-primary btn-block" to="/register">Register</Link>
                </form>
            </div>
        )
    }
}

