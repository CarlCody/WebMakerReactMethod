import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class WidgetImage extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-light bg-light fixed-top">
                <Link to="widget-list.html"><i class="fas fa-chevron-left"></i></Link>
                <span class="navbar-brand mb0 h1">Widget Edit</span>
                <Link to="widget-list.html"><i class="fas fa-check"></i></Link>
            </nav>
            <div class="container">
                <form onSubmit>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input placeholder="Enter a name for this widget...." name="name" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="text">Text</label>
                        <input placeholder="Enter a text a description for image(optional)..." name="name" type="text"
                            class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="url">URL</label>
                        <input placeholder="Enter the location of the image...." id="url" name="name" type="text"
                            class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="width">Width</label>
                        <div class="input-group">
                            <input type="number" class="form-control" placeholder="Image Width" />
                            <div class="input-group-append">
                                <span class="input-group-text">#</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="width">Width</label>
                        <div class="input-group">
                            <input type="range" min="0" max="100" class="form-control" placeholder="Image Width" />
                            <div class="input-group-append">
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div class="form-group">
                        <label for="File">file</label>
                        <input class="form-control" type="file" id="file" name="file" />
                    </div>
                    <div>
                        <span class="btn btn-primary btn-block" >Upload Image</span>
                        <button class="btn btn-danger btn-block" type="button">Delete</button>
                    </div>
                </form>
            </div>
            <nav class="navbar navbar-light bg-light fixed-bottom">
                <span class="navbar-brand mb-0 h1"></span>
                <Link to="../user/login.html"><i class="fas fa-users"></i></Link>
            </nav>
            </div>
        )
    }
}