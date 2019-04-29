import React, { Component } from 'react'

export default class WebsiteList extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-primary fixed-top">
                    <a href="../user/profile.html"><i class="fas fa-chevron-left"></i></a>
                    <span class="navbar-brand mb-0 h1">Websites</span>
                    <a href="website-new.html"></span><i class="fas fa-plus-square"></i></a>
    </nav>
            <section class="container">
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
            </section>
            <footer>
                <nav class="navbar navbar-dark bg-primary fixed-bottom">
                    <span class="navbar-brand mb-0 h1"></span>
                    <a href="../user/profile.html"><i class="fas fa-users"></i></a> </nav>

             </footer>
      </div>
    )
    }
}
