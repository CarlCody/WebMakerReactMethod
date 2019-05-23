import React from "react";
import {Link} from "react-router-dom";
import Axios from "axios";


export default class PageEdit extends React.Component {

    state = {
        uid: "",
        wid: "",
        pid:"",
        title: "",
        name: ""
    } 


    async componentDidMount() {
        await this.setState({
           uid: this.props.match.params.uid, 
           wid: this.props.match.params.wid,
           pid: this.props.match.params.pid
        })
        //The place where we call the page
         this.getPage();
        

        this.filterPage(this.state.pid);
    }

    getPage = async (pid) => {
        // Waits for res to finish then setState 
        // Otherwise runnung to fast
       const res = await Axios.get(`/api/page/${this.state.pid}`)
       this.setState({
        name: res.data.name,
        title: res.data.title 
     })
        //Rewritten above
        // for(let page of this.props.pages) {
        //     if(page._id === this.state.pid) {
        //         return page;
        //     }
        // }
    }

    
    onChange = e => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    onDelete = async () => {
        await Axios.delete(`/api/page/${this.state.pid}`)

        //Connecting to server side is other method above
        // this.props.deletePage(this.state.pid);
        this.props.history.push(`/user${this.state.uid}/website${this.state.wid}/page`)
    }

    onSubmit = async e =>{
        e.preventDefault();
        const newPage = {
            _id: this.state.pid,
            name:this.state.name,
            websiteId: this.state.wid,
            title: this.state.title
        }
        //changed to server side method above
        // this.props.addPage(newPage);
        // Can ony add body when using put or push in a request of body.
        await Axios.put("/api/page", newPage);
        this.props.history.push(`user/${this.state.uid}/website/${this.state.wid}/page`)
    }

    render() {
        const {uid,wid,name,title} = this.state
        return (
        <div>
        <nav className="navbar navbar-light bg-light fixed-top">
            <Link to={`/user/${uid}/website${wid}/page`}><i className="fas fa-chevron-left"></i></Link>
            <span className="navbar-brand float-left mb-0 h1">Edit Page</span>
            <button class="" form="editPageForm"><i className="fas fa-check"></i></button>
        </nav>
        <form id="editPageForm">
            <div className="form-group" onSubmit={this.onSubmit}>
                <label htmlFor="name">Name</label>
                <input placeholder="Enter your Name"
                 className="form-control"
                  type="text"
                   name="name"
                    id="name"
                    onChange={this.onChange}
                    value={name} />
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
                        value={title}/>
                </div>
            </div>
            <footer>
                <nav className="navbar navbar-light bg-light fixed-bottom">
                    <span className="navbar-brand mb-0 h1"></span>
                    <Link to={`/user/${uid}/website/${wid}/page`}><i className="fas fa-users"></i></Link></nav>

            </footer>
            <div>
                <button className="btn btn-danger btn-block" onClick={this.onDelete} form="">Delete</button>
            </div>

        </form>
    </div>
        )
    }
}


