import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from"axios";
//  import uuid from "uuid";

 export default class Register extends Component {

    state = {
        username: "",
        password: "",
        password2: "",
        showUsernameAlert: false,
        showPasswordAlert: false 
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showUsernameAlert: false,
            showPasswordAlert: false
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username,password,password2,} = this.state
        this.register(username,password,password2);
    }
    //async is same as arrow function =,=>
    async register(username,password,password2)  {
        //check is password matches
     if(password !== password2) {
        //  alert("The passwords are not matched");
         this.setState({
           showPasswordAlert: true
         })
         return;
     }

      //check if username is available in server side

      const res = await axios.get(`/api/user?username=${username}`);

      if(res.data){
        //   alert("Username is taken, please try another one");
        this.setState({
            showUsernameAlert: true
        })
          return;
      } else {
        const newUser = {
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
         {this.state.showPasswordAlert && (<div className="alert alert-danger">The password you entered doesn't match</div>)} 
         {this.state.showUsernameAlert && (<div className="alert alert-danger"  >The username is taken,please try another one</div>)} 
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
                 type="password2"
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