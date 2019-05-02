import React, {Component} from "react";

export default class WidgetImage extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light fixed-top">
        <a href="widget-list.html"><i class="fas fa-chevron-left"></i></a>
        <span class="navbar-brand mb0 h1">Widget Edit</span>
        <a href="widget-list.html"><i class="fas fa-check"></i></a>
    </nav>
    <div class="container">
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input placeholder="Enter a name for this widget...." name="name" type="text" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="text">Text</label>
                <input placeholder="Enter a text a description for image(optional)..." name="name" type="text"
                    class="form-control"/>
            </div>
            <div class="form-group">
                <label for="url">URL</label>
                <input placeholder="Enter the location of the image...." id="url" name="name" type="text"
                    class="form-control"/>
            </div>
            <div class="form-group">
                <label for="width">Width</label>
                <div class="input-group">
                    <input type="number" class="form-control" placeholder="Image Width"/>
                    <div class="input-group-append">
                        <span class="input-group-text">#</span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="width">Width</label>
                <div class="input-group">
                    <input type="range" min="0" max="100" class="form-control" placeholder="Image Width"/>
                    <div class="input-group-append">
                        <span class="input-group-text">%</span>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div class="form-group">
                <label for="File">file</label>
                <input class="form-control" type="file" id="file" name="file"/>
            </div>
            <div>
                <a class="btn btn-primary btn-block" href="#">Upload Image</a>
                <a class="btn btn-danger btn-block" href="widget-list.html">Delete</a>
            </div>
        </form>
    </div>
    <nav class="navbar navbar-light bg-light fixed-bottom">
        <span class="navbar-brand mb-0 h1"></span>
        <a href="../user/login.html"><i class="fas fa-users"></i></a> 
        </nav>

        )
    }
}