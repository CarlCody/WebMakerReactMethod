import React from "react";

export default class PageList extends React.Component {
    render() {
        return (
<div>
    <nav className="navbar navbar-light bg-light fixed-top mb-0 h1">

        <a href="../website/website-list.html"><i className="fas fa-chevron-left"></i></a>
        <span className="navbar-brand mb-0 h1">Pages</span>
        <a href="page-new.html"><i className="fas fa-plus-square"></i></a>


    </nav>
    <section>
        <div>
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href="../widget/widget-list.html">Blog post</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../widget/widget-list.html">Blogs</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../widget/widget-list.html">Home</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../widget/widget-list.html">About</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                    <li className="list-group-item">
                        <a href="../widget/widget-list.html">Contact Us</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                </ul>
            </div>

        </div>
        <nav className="navbar navbar-light bg-light fixed-bottom">
            <span className="navbar-brand mb-0 h1"></span>
            <a href="../user/profile.js"><i className="fas fa-users"></i></a> </nav>


    </section>

</div>
        )
    }
}

