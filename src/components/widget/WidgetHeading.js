import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class WidgetHeader extends Component {

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
        const{name,text,size,uid,wid,pid} = this.props
        return (
            <div>
            <nav className="navbar navbar-light bg-light fixed-top">
            <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/`}><i className="fas fa-chevron-left"></i></Link>
            <span className="navbar-brand mb0 h1">Widget Edit</span>
            <button className="btn" form="headingForm"><i className="fas fa-check"></i></button>
        </nav>
        <div className="container">
            <form id="headingForm" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input placeholder="Enter a name for this widget...."
                     name="name"
                      type="text"
                       className="form-control"
                       onChange ={this.onChange}
                        value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input placeholder="Enter a text a description for image(optional)..."
                     name="text"
                      type="text"
                        className="form-control"
                        onChange ={this.onChange}
                        value={text}/>
                </div>
                <div className="form-group">
                    <label htmlFor="url">Size</label>
                    <input placeholder="#"
                     id="size"
                      name="size"
                       type="number"
                        className="form-control"
                        onChange ={this.onChange}
                        value={size}/>
                </div>
                <div>
                    <button className="btn btn-danger btn-block" type="button" onClick={this.onDelete}>Delete</button>
                </div>
            </form>
        </div>
        <nav className="navbar navbar-light bg-light fixed-bottom">
            <span className="navbar-brand mb-0 h1"></span>
            <Link to={`/user/${uid}`}><i className="fas fa-users"></i></Link> 
            </nav>
            </div>
        )
    }
}