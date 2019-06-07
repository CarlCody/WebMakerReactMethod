import React, {Component} from "react";
import {Link} from "react-router-dom"

export default class WidgetYoutube extends Component {

    onChange= e => {
        this.props.onChange(e);
     }
 
     onSubmit= e => {
     this.props.onSubmit(e);
     }

     onDelete = () => {
         this.props.onDelete();
     }


    render() {
        const{uid,wid,pid,name,url,width} = this.props
        return (
            <div>
            <nav className="navbar navbar-light bg-light fixed-top">
            <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className="fas fa-chevron-left"></i></Link>
            <span className="navbar-brand mb0 h1">Widget Edit</span>
            <button type="button" form="youtubeForm" onClick={this.state}><i className="fas fa-check"></i></button>
        </nav>
        <div className="container">
            <form id="youtubeForm">
                <div className="form-group" onSubmit={this.onSubmit}>
                    <label htmlFor="name">Name</label>
                    <input placeholder="Enter a name for this widget...."
                     name="name"
                      type="text"
                       className="form-control"
                       onChange ={this.onChange}
                       value={name} 
                       id="name"/>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input placeholder="Enter text here..."
                     name="name"
                     type="text"
                      className="form-control
                      " id="text" onChange ={this.onChange}
                      value={text}/>
                </div> */}
                <div className="form-group">
                    <label htmlFor="url">URL</label>
                    <input placeholder="Enter the url...."
                     id="url"
                      name="url"
                      type="text"
                       className="form-control"
                       onChange ={this.onChange}
                           value={url}/>
                </div>
                <div className="form-group">
                    <label htmlFor="width">Width</label>
                    <div className="input-group">
                        <input type="text"
                         className="form-control"
                          placeholder="Image Width"
                          onChange ={this.onChange}
                           value={width}
                           name="width"
                           id="width"/>
                        <div className="input-group-append">
                            <span className="input-group-text">#</span>
                        </div>
                    </div>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="width">Width</label>
                    <div className="input-group">
                        <input type="range" min="0" max="100" className="form-control" placeholder="Image Width"/>
                        <div className="input-group-append">
                            <span className="input-group-text">%</span>
                        </div>
                    </div> */}
                {/* </div> */}
                <div>
                    <button className="btn btn-danger btn-block" type="button" onClick={this.onDelete} >Delete</button>
                </div>
            </form>
        </div>
  
    <nav className="navbar navbar-light bg-light fixed-bottom">
        <span className="navbar-brand mb-0 h1"></span>
        <Link to={`/user/${uid}`}><i className="fas fa-users"></i></Link> </nav>
     </div>
        )
    }
}