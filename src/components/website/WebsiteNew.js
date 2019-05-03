import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class WebsiteNew extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top row">
        <div className="col-4 d-none d-lg-block">
            <Link to="../user/webs/user/:uid/website"><i className="fas fa-chevron-left"></i></Link>
            <span className="navbar-brand fixed-left mb-0 h1">Websites</span>
            <a className="float-right pt-2" href="website-list.html"><i className="fas fa-plus-square"></i></a>
        </div>
        <div className="col-8">
            <a className="d-lg-none" href="website-list.html"><i className="fas fa-chevron-left"></i></a>
            <span className="navbar-brand fixed-left mb-0 h1">New Websites</span>
            <a className="float-right pt-2" href="website-edit.html"><i className="fas fa-check"></i></a>
        </div>
    </nav>
    <section className="row">
        <div className="col-lg-4 d-none d-lg-block">
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                    <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
                     <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                     <Link to="/user/:uid/website/:wid/page">Address book App</Link>
                     <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                     <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
                     <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                     <Link to="/user/:uid/website/:wid/page">Blogger</Link>
                     <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                </ul>
            </div>

        </div>
        <div className="col-lg-8">
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlfor="">Name</label>
                        <input placeholder="Enter Website Name" className="form-control" type="text" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlfor="description">Description</label>
                        <textarea rows="5" placeholder="Enter Websites description here...." className="form-control"
                            id="description" name="description"></textarea>
                    </div>
                </form>

            </div>

        </div>
    </section>
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <span className="navbar-brand mb-0 h1"></span>
        <Link to="/user/:uid/website/new"><i className="fas fa-users"></i></Link> </nav>

      </div>
    )
  }
}
