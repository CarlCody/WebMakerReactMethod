import React, {Component} from "react";

export default class Profile extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
            <span className="navbar-brand mb-0 h1">Profile</span>
            <a href="profile.html"><i className="fas fa-check"></i></a> </nav>
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
                <a className="btn btn-primary btn-block" href="../website/website-list.html">Websites</a>
                <a className="btn btn-primary btn-block btn-danger" href="register.html">LogOut</a>
            </div>
            <footer>
                    <nav className="navbar navbar-dark bg-primary fixed-bottom">
                            <span className="navbar-brand mb-0 h1"></span>
                            <a href="profile.html"><i className="fas fa-users"></i></a> </nav>
            
            </footer>
            
    
        </form> 
        </div>
        )
    }
}