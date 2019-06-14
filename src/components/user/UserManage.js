import React, {Component} from "react";

export default class UserManage extends Component {
    
    async componentDidMount() {
        const isLoggedIn = await this.props.loggedIn();
        if(isLoggedIn === 0) {
            this.props.history.push("/login");
            return;
        }
         //Check if you are not admin
    if(isLoggedIn.role !== "admin"){
        this.props.history.push("/login");
            return;
    } 

    } 
    



    render() {
        return <div> <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand mb-0 h1">User Management</span>
        <button className="btn" form="profileForm" href="profile.html"><i className="fas fa-check"></i></button> </nav></div>
    }
}