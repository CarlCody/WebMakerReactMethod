import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
// import uuid from "uuid";

export default class WebsiteEdit extends Component {
    state={
        uid: this.props.match.params.uid,
        wid: this.props.match.params.wid,
        websites: [],
        name: "",
        description: ""
    }
    async componentDidMount(){
        const res = await axios.get(`/api/user/${this.state.uid}/website`)
        await this.filterWebsites(res.data);
        this.getWebsite(this.state.wid);
    }  
    
    // componentDidUpdate(prevProps, prevState,snapshot) {
    //     if (prevProps.match.params.wid !== this.props.match.params.wid) {
    //          this.getWebsite(this.props.match.params.wid);
    //     }
    // }
        
    filterWebsites = websites => {
    const newWebsites = websites.filter(
            website => (website.developerId === this.state.uid) 
        )
        this.setState({
            websites: newWebsites
        });
    };

    getWebsite = wid => {
     let currentWeb;
     for (let website of this.state.websites) {
         if (website._id === wid) {
             currentWeb = website;
             break;
         }
     }
     this.setState({
       name: currentWeb.name,
       description: currentWeb.description
    });
};
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    
    delete = async () => {
        // replaced by below this.props.deleteWeb(this.props.match.params.wid);
        await axios.delete(`/api/website/${this.state.wid}`)
        this.props.history.push(`/user/${this.state.uid}/website`);
    };

    onSubmit = async e => {
        e.preventDefault();
        // this.props.editWeb(
        //     this.props.match.params.uid,
        //     this.state.name,
        //     this.state.description
        // );
        const newWeb = {
            _id: this.state.wid,
            name: this.state.name,
            description: this.state.description,
            developerId: this.state.uid
        }
        await axios.put("/api/website", newWeb);
        this.props.history.push(`/user/${this.state.uid}/website`);
    };
    

  render() {

      const {uid,} = this.state;

    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top row">
        <div className="col-4 d-none d-lg-block">
            <Link to={`/user/${uid}/website`}><i className="fas fa-chevron-left"></i></Link>
            <span className="navbar-brand fixed-left mb-0 h1">Websites</span>
            <Link className="float-right pt-2" to={`/user/${uid}/website/new`}><i className="fas fa-plus-square"></i></Link>
        </div>
        <div className="col-8">
            <button form="editWebForm" to="../user/:uid"></button>
            <span className="navbar-brand fixed-left mb-0 h1">Edit Websites</span>
            <button className="float-right pt-2" form="editWebForm"><i className="fas fa-check"></i></button>
        </div>
    </nav>
    <section className="row">
        <div className="col-lg-4 d-none d-lg-block">
            <div className="container-fluid">
                <ul className="list-group">{this.state.websites.map(website => (
                    <li key={website._id}
                    className="list-group-item"> 
                        <Link to={`/user/${uid}/website/${
                                                website._id
                                            }/page`}>{website.name}</Link>
                        <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                ))}
                </ul>
                
            </div>
        </div>
        <div className="col-lg-8">
            <div className="container">
                <form id="editWebForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Website Name</label>
                        <input placeholder="Enter Website Name"
                         className="form-control"
                          type="text"
                           id="name"
                            name="name"
                            value={this.state.name}
                         onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"> Website Description</label>
                        <textarea rows="5" placeholder="Enter Websites description here...."
                         className="form-control"
                         type="text"
                            id="description"
                             name="description"
                             value={this.state.description}
                             onChange={this.onChange} ></textarea>
                    </div>
                    <div>
                        <button type="button"
                                    onClick={this.delete}
                                    className="btn btn-lg btn-danger float-right">Delete</button>
                    </div>
                </form>

            </div>

        </div>
    </section>
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <span className="navbar-brand mb-0 h1"></span>
        <button to={`/user/${uid}`}><i className="fas fa-users"></i></button> </nav>

      </div>
    )
  }
}
