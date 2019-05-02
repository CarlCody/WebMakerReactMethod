import React, { Component } from 'react'

export default class WebsiteEdit extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top row">
        <div className="col-4 d-none d-lg-block">
            <a href="website-list.html"><i className="fas fa-chevron-left"></i></a>
            <span className="navbar-brand fixed-left mb-0 h1">Websites</span>
            <a className="float-right pt-2" href="website-new.html"><i className="fas fa-plus-square"></i></a>
        </div>
        <div className="col-8">
            <a href="../user/profile.html"></a>
            <span className="navbar-brand fixed-left mb-0 h1">Edit Websites</span>
            <a className="float-right pt-2" href="page-new.html"><i className="fas fa-check"></i></a>
        </div>
    </nav>
    <section className="row">
        <div className="col-lg-4 d-none d-lg-block">
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href="../page/page-list.html">Address Book App</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../page/page-list.html">Blogger</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../page/page-list.html">Blogging App</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../page/page-list.html">Script Testing App</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    
                </ul>
            </div>

        </div>
        <div className="col-lg-8">
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="">Website Name</label>
                        <input placeholder="Enter Website Name" className="form-control" type="text" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label for="description"> Website Description</label>
                        <textarea rows="5" placeholder="Enter Websites description here...." className="form-control"
                            id="description" name="description"></textarea>
                    </div>
                    <div>
                        <a className="btn btn-danger btn-block" href="website-list.html">Delete</a>
                    </div>
                </form>

            </div>

        </div>
    </section>
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <span className="navbar-brand mb-0 h1"></span>
        <a href="../user/profile.html"><i className="fas fa-users"></i></a> </nav>

      </div>
    )
  }
}
