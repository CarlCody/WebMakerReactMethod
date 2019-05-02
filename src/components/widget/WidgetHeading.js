import React, {Component} from "react";

export default class WidgetHeader extends Component {
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
                    <label for="url">Size</label>
                    <input placeholder="#" id="url" name="name" type="text"
                        class="form-control"/>
                </div>
                <div>
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