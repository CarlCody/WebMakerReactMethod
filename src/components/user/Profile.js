import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Profile extends Component {
    state = {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        oldUsername: "",
        password: "",
        oldUsername: ""

    }

    async componentDidMount(){
        const uid = this.props.match.params.uid;
        const res = await axios.get(`/api/user/${uid}`);
        if(res.data){
            this.showUser(res.data);
        }else{
            alert("No user is found with given id...");
        }
         
        // let currentUser;
        // for (let user of this.props.users) {
        //   if(user._id === uid) {
        //      currentUser = user;
        //       this.showUser(user)
        //       return;
        //   }
      
    showUser = (user) => {
        const {username, email,firstName, lastName,password} = user;
            this.setState({
           username,email,firstName,lastName,oldUsername: username,password
            })
    }
     
      onChange = async e => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }
      onSubmit = async e => {
        e.preventDefault();
        const{username, email, firstName, lastName,password, oldUsername} = this.state;
        const newUser = {
            _id: this.props.match.params.uid,
            username,
            email,
            firstName,
            lastName,
            password,
            // oldUsername: username
      }
      if(username !== oldUsername) {
         const res = await axios.get(`/api/user?username=${username}`);
         return; 
      }else {
          
        const res = await axios.put(`/api/user`, newUser);
        alert("Update Successful")
        this.showUser(res.data);
      }
    //   this.props.updateUser(newUser) old method

    }
}

    render() {
        const{username,email,firstName,lastName,} = this.state;
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
            <span className="navbar-brand mb-0 h1">Profile</span>
            <button className="btn" form="profileform" href="profile.html"><i className="fas fa-check"></i></button> </nav>
        <form id="profileform" onSubmit={this.onSubmit}>
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
                     type="text"
                      className="form-control"
                       id="email"
                        name="email"
                        value={email}
                        onChange ={this.onChange}/>
                </div>
                <div>
                    <div className="form-group">
                        <label htmlFor="Firstname">Firstname</label>
                        <input placeholder="Enter your FirstName"
                         className="form-control"
                          type="text"
                           name="firstName"
                            id="firstName"
                            value={firstName}
                            onChange ={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">LastName</label>
                        <input placeholder="Enter your LastName"
                         type="text"
                          className="form-control"
                           id="lastName"
                            name="lastName"
                            value={this.lastName}
                            onChange ={this.onChange} /> </div>
                </div>
                <Link className="btn btn-primary btn-block" to={`/user/${this.props.match.params.uid}/website`}>Websites</Link>
                <Link to="/Login" className="btn btn-primary btn-block btn-danger" to="/login">LogOut</Link>
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