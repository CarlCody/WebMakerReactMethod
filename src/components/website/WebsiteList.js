import React from "react";

export default class WebsiteList extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top">
                    <a href="../user/profile.html"><i className="fas fa-chevron-left"></i></a>
                    <span className="navbar-brand mb-0 h1">Websites</span>
                    <a href="websiteList.js"><i className="fas fa-plus-square"></i></a>
    </nav>
            <section className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href="../page/page-list.js">Address Book App</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../page/page-list.js">Blogger</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../page/page-list.js">Blogging App</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../page/page-list.js">Script Testing App</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                </ul>
            </section>
            <footer>
                <nav className="navbar navbar-dark bg-primary fixed-bottom">
                    <span className="navbar-brand mb-0 h1"></span>
                    <a href="../user/profile.html"><i className="fas fa-users"></i></a> </nav>

             </footer>
      </div>
    )
    }
}
