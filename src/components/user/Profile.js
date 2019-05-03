import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Profile extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
            <span className="navbar-brand mb-0 h1">Profile</span>
            <Link to="profile.html"><i className="fas fa-check"></i></Link> </nav>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input placeholder="Enter your User Name" className="form-control" type="text" name="username" id="username"/>
            </div>
            <div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input placeholder="Enter your Email" type="Email" className="form-control" id="passwod" name="password"/>
                </div>
                <div>
                    <div className="form-group">
                        <label htmlFor="Firstname">Firstname</label>
                        <input placeholder="Enter your FirstName" className="form-control" type="text" name="username" id="username"/>
                    </div>
                    <div>
                        <label htmlFor="LastName">LastName</label>
                        <input placeholder="Enter your LastName" type="Email" className="form-control" id="password"
                            name="password"/> </div>
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