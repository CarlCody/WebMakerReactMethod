 import React from "react";
 import {Link} from "react-router-dom";
 import axios from "axios";

 export default class Login extends React.Component {
 
 state ={
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

 login = async user => {
    const res = await axios.get(`/api/user?username=${user.username}&password=${user.password}`)
    if(res.data){
        this.props.history.push(`/user/${res.data._id}`);
    } else {
        alert("invalid credential");
    }
}

//  login = user => {
//      for(let item of this.props.users) {
//          if(item.username === user.username && item.password === user.password) {
//              this.props.history.push("/user/" + item._id);
//              return;
//          }
//      }
//      alert("Your username and password doesn't match our records");
//  }

 render(){
    return (
        <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your Name"
                 className="form-control"
                  type="text" name="username"
                   id="username"
                    value={this.state.username}
                     onchange = {this.onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input placeholder="Enter your password"
                 type="password"
                  className="form-control"
                   id="password"
                    name="password"
                     value={this.state.password}
                      onchange = {this.onChange}/>
            </div>
            <button className="btn btn-success btn-block" onClick={this.login}>Login</button>
            <button className="btn btn-primary btn-block"  onClick={this.register}>Register</button>
        </form>
    </div>  
    )
}
}