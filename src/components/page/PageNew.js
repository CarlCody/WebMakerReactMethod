import React from "react";
import {Link} from "react-router-dom";
import Axios from "axios";

export default class PageNew extends React.Component {

    state = {
        uid: "",
        wid: "",
        name:"",
        title: "",
    } 

    async componentDidMount() {
        const isLoggedIn = await this.props.loggedIn();
        if(!isLoggedIn) {
            this.props.history.push("/login");
            return;
        }

        this.setState({
           uid: this.props.match.params.uid, 
           wid: this.props.match.params.wid
        })
        // this.filterPage(this.state.wid);
    }

    onChange = e => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    onSubmit = async e =>{
        e.preventDefault();
        const newPage = {
            name:this.state.name,
            websiteId: this.state.wid,
            title: this.state.title
        }
        // Not using this function below no more send put request ask server to request page
        // this.props.addPage(newPage);
        //.post(adds new stuff url pass), thing added after but inside parenthesis
        await Axios.post("/api/page", newPage)
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }

    render() {
        const {uid,wid,name,title} = this.state;

        return (

            <div>
                <nav className="navbar navbar-light bg-light fixed-top">
                    <Link to={`/user/${uid}/website/${wid}/page`}><i className="fas fa-chevron-left"></i></Link>
                    <span className="navbar-brand float-left mb-0 h1">New Page</span>
                    <button form="newPageForm"><i className="fas fa-check"></i></button>
                </nav>
                <div className="container">
                <form id="newPageForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input placeholder="Enter your Name"
                         className="form-control" 
                         type="text"
                          name="name"
                           id="name"
                           value={name}
                           onChange={this.onChange} />
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="Email">Title</label>
                            <input placeholder="Enter Page Title"
                             type="text"
                              className="form-control"
                              id="title"
                               name="title"
                               onChange={this.onChange}
                               value={title} />
                        </div>
                    </div>
                    <Link to={`/user/${uid}/website/${wid}/page`} className="btn btn-lg btn-warning">
                            Cancel
                        </Link>
                        <button
                            className="btn btn-lg btn-success float-right" 
                        >
                            Submit
                        </button>
                    <footer>
                        <nav className="navbar navbar-light bg-light fixed-bottom">
                            <span className="navbar-brand mb-0 h1"></span>
                            <Link to={`/user/${uid}`}><i className="fas fa-users"></i></Link> </nav>

                    </footer>
                </form>
            </div>
            </div>
        )
    }
}

