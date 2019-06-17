import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class UserManage extends Component {

    state= {
        user: {},
        users: []
    }

    async componentDidMount() {
        const isLoggedIn = await this.props.loggedIn();
        if (isLoggedIn === 0) {
            this.props.history.push("/login");
            return;
        }
        //Check if you are not admin
        if (isLoggedIn.role !== "admin") {
            this.props.history.push("/login");
            return;
        }
     await this.setState({
         user: isLoggedIn
     })
     const res = await Axios.get("/api/users");
     this.setState({
         users: res.data
     })
     
    }
    
    delete = async (id) => {
      await Axios.delete(`/api/user/${id}`);
      const newUsers = this.state.users.filter(
          (user) => user._id !== id
      )
      this.setState({
          users: newUsers
      })
    }




    render() {
        const {user, users} = this.state
        return <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
                <Link to={`/user${user._id}`}><i className="fas fa-chevron-left"></i></Link>
                <span className="navbar-brand mb-0 h1">User Management</span>
                <button className="btn" form="profileForm" href="profile.html"></button>
                <span></span>
            </nav>
            <div className="container">
                <ul className="list-group">
                 {
                      users.map(
                          user => (
                              <li className="list-group-item" key={user._id}>
                                  {user.username}
                                  <button onClick={this.delete.bind(this, user._id)} className="btn btn-danger float-right"> X </button>
                              </li>
                      )
                      )
                 }
                </ul>  
            </div>
            <footer>
                <nav className="navbar navbar-dark bg-primary fixed-bottom">
                    <span className="navbar-brand mb-0 h1"></span>
                    <Link to={`/user${user._id}`}><i className="fas fa-users"></i></Link> 
                    </nav>
            </footer>
        </div>
    }
}