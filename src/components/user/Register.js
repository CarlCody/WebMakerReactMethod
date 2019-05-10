import React, {Component} from "react";

import uuid from "uuid";

 export default class Register extends Component {

    state = {
        username: "",
        password: "",
        password2: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username,password,password2} = this.state
        this.register(username,password,password2);
    }
    register(username,password,password2) {
     if(password !== password2) {
         alert("The passwords are not matched");
         return;
     }
     for(let user of this.props.users){
         if(user.username === username) {
             alert("Username is taken, please try another one");
             return;
         }
     }
     const newUser = {
         _id: uuid(),
         username,
         password,
         email: "",
         firstName: "",
         lastName: ""
     };
     this.props.addUser(newUser);
     this.props.history.push("/user/" + newUser._id)
    }
   
 
    render() {
        const {username,password,password2} = this.state
        return (
<div className="container">
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your Name"
                 className="form-control"
                  type="text"
                   name="username"
                    id="username"
                     onChange={this.onChange}
                     value={username}/>
            </div>
            <div className="form-group">
                <label  htmlFor="password">Passwod</label>
                <input placeholder="Enter your password"
                 type="password"
                  className="form-control"
                   id="passwod"
                    name="password"
                    value ={password}
                    onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label  htmlFor="verify password"> Verify Passwod</label>
                <input placeholder="Please verify your password"
                 type="password2"
                  className="form-control"
                   id="passwod2"
                    name="password2"
                    value ={password2}
                    onChange={this.onChange}/>
            </div>
            <button className="btn btn-warning btn-block" href="/user/123">Register</button>
            <button className = "btn btn-success btn-block" href="/login">Cancel</button>
        </form>
    </div>
        )
    }
 }