import React, { Component } from 'react';
import {Link} from "react-router-dom";
// import uuid from "uuid";
import axios from"axios";

export default class WebsiteNew extends Component {

    state={
        uid: this.props.match.params.uid,
        websites: [],
        name: "",
        description: ""
    }
    async componentDidMount(){
        const isLoggedIn = await this.props.loggedIn();
    if(!isLoggedIn) {
        this.props.history.push("/login");
        return;
    }

        const res = await axios.get(`/api/user/${this.state.uid}/website`)
        //filterwebsites is getting data from App.js in client side
        // this.props.websites is from App.js
        this.filterWebsites(res.data);
    }
        
    filterWebsites = (websites) => {
        const newWebsites = websites.filter(
            website => (website.developerId === this.state.uid) 
        )
        this.setState({
            websites: newWebsites
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value  
        })
    }
    onSubmit = async e => {
        const {name, description, uid} = this.state;
        e.preventDefault()
        const newWeb = {
            name: name,
            developerId: uid,
            description: description
        };
        await axios.post("/api/website", newWeb);
        this.props.history.push(`/user/${this.state.uid}/website`)
        //Being replaced by the axios.post above
        // await this.props.addWeb(newWeb);
         // this.filterWebsites(this.props.websites);
        
       
    };

    render() {
        const { uid } = this.state;
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top row">
                    <div className="col-4 d-none d-lg-block">
                        <Link to={`/user/${uid}/website`}><i className="fas fa-chevron-left"></i></Link>
                        <span className="navbar-brand fixed-left mb-0 h1"><strong>Websites</strong></span>
                        <span className="float-right pt-2" ><i className="fas fa-plus-square"></i></span>
                    </div>
                    <div className="col-8">
                        <Link className="d-lg-4 d-none" to="website-list.html"><i className="fas fa-chevron-left"></i></Link>
                        <span className="navbar-brand fixed-left mb-0 h1"><strong>New Websites</strong></span>
                    <button form="newWebForm"className="float-right btn"><i className="fas fa-check pt-2"/></button>
                    </div>
                </nav>
                <section className="row">
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="container">
                            <ul className="list-group">
                                {this.state.websites.map(
                                    (website) => (
                                            <li key={website._id}className="list-group-item">
                                                <Link to={`/user/${uid}/website/${
                                                website._id
                                            }/page`}>{website.name}</Link>
                                                <Link className="float-right" to={`/user/${uid}/website/${
                                                website._id
                                            }`}><i className="fas fa-cog"></i></Link>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="container">
                            <form id="newWebForm" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input placeholder="Enter Website Name"
                                    className="form-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea rows="5"
                                    placeholder="Enter Websites description here...."
                                    className="form-control"
                                        id="description"
                                        name="description"
                                        onChange={this.onChange}
                                        value={this.state.description}></textarea>
                                </div>
                                <Link
                                    to={`/user/${uid}/website`}
                                    className="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </Link>
                                <button className="btn btn-lg btn-success float-right" >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                <nav className="navbar navbar-dark bg-primary fixed-bottom">
                    <span className="navbar-brand mb-0 h1"></span>
                    <Link to={`/user/${uid}`}><i className="fas fa-users"></i></Link>
                </nav>
            </div>
    )
  }
}

