import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class WidgetImage extends Component {

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
        const{uid,wid,pid,name,width,url} = this.props
        return (
            <div>
            <nav className="navbar navbar-light bg-light fixed-top">
                <Link to="widget-list.html"><i className="fas fa-chevron-left"></i></Link>
                <span className="navbar-brand mb0 h1">Widget Edit</span>
                <button className="btn" form="ImgForm"><i className="fas fa-check"></i></button>
            </nav>
            <div className="container">
                <form id="ImgForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input placeholder="Enter a name for this widget...."
                        id="name"
                         name="name"
                          type="text"
                           className="form-control"
                           onChange ={this.onChange}
                           value={name}/>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input placeholder="Enter a text a description for image(optional)..."
                         name="name"
                          type="text"
                            className="form-control"
                            onChange ={this.onChange}
                            value={text}  />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input placeholder="Enter the location of the image...."
                         id="url"
                          name="url"
                           type="text"
                            className="form-control"
                            onChange ={this.onChange}
                             value={url} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="width">Width</label>
                        <div className="input-group">
                            <input type="number"
                             className="form-control" 
                             placeholder="Image Width"
                             onChange ={this.onChange}
                             value={width} 
                             name="width" />

                            <div className="input-group-append">
                                <span className="input-group-text">#</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="width">Width</label>
                        <div className="input-group">
                            <input type="range" min="0" max="100" className="form-control" placeholder="Image Width" />
                            <div className="input-group-append">
                                <span className="input-group-text">%</span>
                            </div>
                        </div>
                    </div> */}
                    <div>

                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="File">file</label>
                        <input className="form-control"
                         type="text"
                          id="file"
                           name="file"
                           onChange ={this.onChange}
                       value={file}   />
                    </div> */}
                    <div>
                        <span className="btn btn-primary btn-block" >Upload Image</span>
                        <button className="btn btn-danger btn-block" type="button" onClick={this.onDelete}>Delete</button>
                    </div>
                </form>
            </div>
            <nav className="navbar navbar-light bg-light fixed-bottom">
                <span className="navbar-brand mb-0 h1"></span>
                <Link to="../user/login.html"><i className="fas fa-users"></i></Link>
            </nav>
            </div>
        )
    }
}