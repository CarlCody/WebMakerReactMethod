import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from"axios";
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
    //async is same as arrow fuction =,=>
    register = async (username,password,password2) => {
        //check is password matches
     if(password !== password2) {
         alert("The passwords are not matched");
         return;
     }

      //check if useranme is available in server side

      const res = await axios.get(`/api/user?username=${username}`);

      if(res.data){
          alert("Username is taken, please try another one");
          return;
      } else {
        const newUser = {
                  _id: uuid(),
                 username,
                 password,
                email: "",
                firstName: "",
                lastName: ""
              };
          const res2 = await axios.post("/api/user", newUser);
          this.props.history.push(`/user/${res2.data._id}`);
      }
    }
    //  // check if username is available
    //  for(let user of this.props.users){
    //      if(user.username === username) {
    //          alert("Username is taken, please try another one");
    //          return;
    //      }
    //  }
    //  const newUser = {
    //      _id: uuid(),
    //      username,
    //      password,
    //      email: "",
    //      firstName: "",
    //      lastName: ""
    //  };
    //  this.props.addUser(newUser);
    //  this.props.history.push("/user/" + newUser._id)
    // }
   
 
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
                <label  htmlFor="password">Password</label>
                <input placeholder="Enter your password"
                 type="password"
                  className="form-control"
                   id="password"
                    name="password"
                    value ={password}
                    onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label  htmlFor="verify password"> Verify Password</label>
                <input placeholder="Please verify your password"
                 type="password"
                  className="form-control"
                   id="password2"
                    name="password2"
                    value ={password2}
                    onChange={this.onChange}/>
            </div>
            <button className="btn btn-warning btn-block">Register</button>
            <Link className = "btn btn-success btn-block" to="/login">Cancel</Link>
        </form>
    </div>
        )
    }
 }