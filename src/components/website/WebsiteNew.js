import React, { Component } from 'react';
import {Link} from "react-router-dom";
import uuid from "uuid";

export default class WebsiteNew extends Component {

    state={
        uid: this.props.match.params.uid,
        websites: []
    }
    componentDidMount(){
        this.filterWebsites(this.props.websites);
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        if(prevProps.websites !== this.props.websites) {
              
        }
    }
        
    filterWebsites = (websites) => {
        const newWebsites = websites.filter(
            website => (website.developerId === this.state.uid) 
        )
        this.setState({
            websites: newWebsites
        })
    }

    onchange = e => {
        this.setState({
            [e.target.name]: e.target.value  
        })
    }
    onSubmit = async e => {
        const {name, description, uid} = This.state;
        e.preventDefault()
        const newWeb = {
            _id: uuid(), name: name, developerId: uid, description: description
        }
        await this.props.addWeb(newWeb);
        this.filterWebsites(this.props.websites);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top row">
                    <div className="col-4 d-none d-lg-block">
                        <Link to={`/user/${uid}/website`}><i className="fas fa-chevron-left"></i></Link>
                        <span className="navbar-brand fixed-left mb-0 h1">Websites</span>
                        <Link className="float-right pt-2" to={`/user/${uid}/website`}><i className="fas fa-plus-square"></i></Link>
                    </div>
                    <div className="col-8">
                        <a className="d-lg-none" to="website-list.html"><i className="fas fa-chevron-left"></i></a>
                        <span className="navbar-brand fixed-left mb-0 h1">New Websites</span>
                    <button form="newWebForm">  <span class="float-right pt-2" to="website-edit.html"><i className="fas fa-check"></i></span></button>
                    </div>
                </nav>
                <section className="row">
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="container">
                            <ul className="list-group">
                                {this.state.websites.map(
                                    (website) => (
                                            <li  ker={website_id}className="list-group-item">
                                                <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
                                                <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
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
                                    <label htmlfor="">Name</label>
                                    <input placeholder="Enter Website Name"
                                    className="form-control"
                                    type="text"
                                    id="name"
                                        name="name"
                                        onChange={this.onChange}
                                        value={this.state.name}/>
                                </div>
                                <div className="form-group">
                                    <label htmlfor="description">Description</label>
                                    <textarea rows="5"
                                    placeholder="Enter Websites description here...."
                                    className="form-control"
                                        id="description"
                                        name="description"
                                        onChange={this.onChange}
                                        value={this.state.description}></textarea>
                                </div>
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

