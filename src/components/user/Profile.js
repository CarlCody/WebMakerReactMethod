import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Profile extends Component {
    state = {
        username: "",
        email: "",
        firstName: "",
        lastName: ""

    }

    componentDidMount(){
        const uid = this.props.match.params.uid;
         
        let currentUser = '';
        for (let user of this.props.users) {
          if(user._id === uid) {
              currentUser = user;]
              this.showUser(user);
              return;
          }
        }
        alert("No user is found with given id...");
    }
    showUser = (user) => {
        const {username, email,firstName, lastName} = user;
            this.setState({
           username,email,firstName,lastName
            })
    }
     
      onChange = e => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }

    render() {
        const{username,email,firstName,LastName} = this.state;
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
            <span className="navbar-brand mb-0 h1">Profile</span>
            <button to="profile.html"><i className="fas fa-check"></i></button> </nav>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your User Name"
                 className="form-control"
                  type="text"
                   name="username"
                    id="username"
                    value={username}
                   onChange ={this.onChange} />
            </div>
            <div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input placeholder="Enter your Email"
                     type="Email"
                      className="form-control"
                       id="passwod"
                        name="password"
                        value={email}
                        onChange ={this.onChange}/>
                </div>
                <div>
                    <div className="form-group">
                        <label htmlFor="Firstname">Firstname</label>
                        <input placeholder="Enter your FirstName"
                         className="form-control"
                          type="text"
                           name="username"
                            id="username"
                            value={firstName}
                            onChange ={this.onChange}/>
                    </div>
                    <div>
                        <label htmlFor="LastName">LastName</label>
                        <input placeholder="Enter your LastName"
                         type="Email"
                          className="form-control"
                           id="password"
                            name="password"
                            value={lastName}
                            onChange ={this.onChange} /> </div>
                </div>
                <a className="btn btn-primary btn-block" to="/user/123/website">Websites</a>
                <Link to="/Login" className="btn btn-primary btn-block btn-danger" to="/login,/">LogOut</Link>
            </div>
            <footer>
                    <nav className="navbar navbar-dark bg-primary fixed-bottom">
                            <span className="navbar-brand mb-0 h1"></span>
                            <Link to="/user/123"><i className="fas fa-users"></i></Link> </nav>
            
            </footer>
            
    
        </form> 
        </div>
        )
    }
}