import React from "react";

export default class Login extends React.Component {
// state example
//  state ={
//      username: "Carl",
//       password: "carl123"
//  }
onChange = e => {
    if(e.target.name === "username")
    this.setState({
      username: e.target.value
    })
} else {
    this.setState({
        password: e.target.value
    })
}
onSubmit = e => {
    e.preventDefault();
}
render(){
    return (
        <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your Name" className="form-control" type="text" name="username" id="username"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input placeholder="Enter your password" type="password" className="form-control" id="passwod" name="password" value={this.state.password} onchange = {this.onChange}/>
            </div>
            <a className="btn btn-success btn-block" href="profile.html">Login</a>
            <a className="btn btn-primary btn-block" href="register.html">Register</a>
        </form>
    </div>  
    )
}
}