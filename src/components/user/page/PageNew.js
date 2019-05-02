import React from "react";

export default class PageNew extends React.Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-light bg-light fixed-top">
                    <a href="page-list.html"><i className="fas fa-chevron-left"></i></a>
                    <span className="navbar-brand float-left mb-0 h1">New Page</span>
                    <a href="page-list.html"><i className="fas fa-check"></i></a>
                </nav>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input placeholder="Enter your Name" className="form-control" type="text" name="username" id="username" />
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="Email">Title</label>
                            <input placeholder="Enter Page Title" type="Email" className="form-control" id="passwod" name="password" />
                        </div>
                    </div>
                    <footer>
                        <nav className="navbar navbar-light bg-light fixed-bottom">
                            <span className="navbar-brand mb-0 h1"></span>
                            <a href="..user/profile.html"><i className="fas fa-users"></i></a> </nav>

                    </footer>


                </form>
            </div>
        )
    }
}

