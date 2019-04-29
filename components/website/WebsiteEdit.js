import React, { Component } from 'react'

export default class WebsiteEdit extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary fixed-top row">
        <div class="col-4 d-none d-lg-block">
            <a href="website-list.html"><i class="fas fa-chevron-left"></i></a>
            <span class="navbar-brand fixed-left mb-0 h1">Websites</span>
            <a class="float-right pt-2" href="website-new.html"><i class="fas fa-plus-square"></i></a>
        </div>
        <div class="col-8">
            <a href="../user/profile.html"></i></a>
            <span class="navbar-brand fixed-left mb-0 h1">Edit Websites</span>
            <a class="float-right pt-2" href="page-new.html"><i class="fas fa-check"></i></a>
        </div>
    </nav>
    <section class="row">
        <div class="col-lg-4 d-none d-lg-block">
            <div class="container">
                <ul class="list-group">
                    <li class="list-group-item">
                        <a href="../page/page-list.html">Address Book App</a>
                        <a class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></a>
                    </li>
                    <li class="list-group-item">
                        <a href="../page/page-list.html">Blogger</a>
                        <a class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></a>
                    </li>
                    <li class="list-group-item">
                        <a href="../page/page-list.html">Blogging App</a>
                        <a class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></a>
                    </li>
                    <li class="list-group-item">
                        <a href="../page/page-list.html">Script Testing App</a>
                        <a class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></a>
                    </li>
                    
                </ul>
            </div>

        </div>
        <div class="col-lg-8">
            <div class="container">
                <form>
                    <div class="form-group">
                        <label for="">Website Name</label>
                        <input placeholder="Enter Website Name" class="form-control" type="text" id="name" name="name"/>
                    </div>
                    <div class="form-group">
                        <label for="description"> Website Description</label>
                        <textarea rows="5" placeholder="Enter Websites description here...." class="form-control"
                            id="description" name="description"></textarea>
                    </div>
                    <div>
                        <a class="btn btn-danger btn-block" href="website-list.html">Delete</a>
                    </div>
                </form>

            </div>

        </div>
    </section>
    <nav class="navbar navbar-dark bg-primary fixed-bottom">
        <span class="navbar-brand mb-0 h1"></span>
        <a href="../user/profile.html"><i class="fas fa-users"></i></a> </nav>

      </div>
    )
  }
}
