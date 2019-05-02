import React, { Component } from "react";

export default class WidgetChooser extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light fixed-top">
                    <a href="widget-list.html"><i class="fa fa-chevron-left"></i></a>
                    <span class="navbar-brand mb-0 h1">Choose Widget</span>
                    <span></span>
                </nav>
                <div class="container">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a href="widget-heading.html">Header</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">Label</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">HTML</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">Text Input</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">Link</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">Button</a>
                        </li>
                        <li class="list-group-item">
                            <a href="widget-image.html">Image</a>
                        </li>
                        <li class="list-group-item">
                            <a href="widget-youtube.html">Youtube</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">Data Table</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#">Repeater</a>
                        </li>

                    </ul>

                </div>
                <nav class="navbar navbar-light bg-light fixed-bottom">
                    <span class="navbar-brand mb-0 h1"></span>
                    <a href="../user/login.html"><i class="fas fa-users"></i></a> </nav>
            </div>
        )
    }
}