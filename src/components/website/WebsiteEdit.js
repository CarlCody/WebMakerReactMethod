import React, { Component } from 'react'
import {Link} from "react-router-dom";
import uuid from "uuid";

export default class WebsiteEdit extends Component {
    state={
        uid: this.props.match.params.uid,
        websites: [],
        name: "",
        description: "",
    }
    async componentDidMount(){
        await this.filterWebsites(this.props.websites);
    }    
        
    filterWebsites = (websites) => {
    const newWebsites = websites.filter(
            website => (website.developerId === this.state.uid) 
        )
        this.setState({
            websites: newWebsites
        });
    }
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    

  render() {

      const {uid} = this.state;

    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top row">
        <div className="col-4 d-none d-lg-block">
            <Link to={`/user/${uid}/website`}><i className="fas fa-chevron-left"></i></Link>
            <span className="navbar-brand fixed-left mb-0 h1">Websites</span>
            <Link className="float-right pt-2" to={`/user/${uid}/website/new`}><i className="fas fa-plus-square"></i></Link>
        </div>
        <div className="col-8">
            <button to="../user/:uid"></button>
            <span className="navbar-brand fixed-left mb-0 h1">Edit Websites</span>
            <Link className="float-right pt-2" to={`/user/${uid}/website/new`}><i className="fas fa-check"></i></Link>
        </div>
    </nav>
    <section className="row">
        <div className="col-lg-4 d-none d-lg-block">
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/user/:uid/website">Address Book App</Link>
                        <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="../page/page-list.html">Blogger</Link>
                        <a className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <Link to="../page/page-list.html">Blogging App</Link>
                        <Link className="float-right" to="website-edit.html"><i className="fas fa-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="../page/page-list.html">Script Testing App</Link>
                        <a className="float-right" to="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    
                </ul>
            </div>

        </div>
        <div className="col-lg-8">
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlfor="">Website Name</label>
                        <input placeholder="Enter Website Name" className="form-control" type="text" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlfor="description"> Website Description</label>
                        <textarea rows="5" placeholder="Enter Websites description here...." className="form-control"
                            id="description" name="description"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-danger btn-block" to="/user/:uid/website">Delete</button>
                    </div>
                </form>

            </div>

        </div>
    </section>
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <span className="navbar-brand mb-0 h1"></span>
        <button to="/user/:uid/website/:wid"><i className="fas fa-users"></i></button> </nav>

      </div>
    )
  }
}

