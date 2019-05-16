import React, { Component } from "react";
import {Link} from "react-router-dom";
import uuid from "uuid";

export default class WidgetChooser extends Component {

       createWidget = type => {
        const {uid,wid,pid} = this.props.match.params
      const newWidget ={
          name: "",
          _id: uuid(),
          widgetType: type,
          pageId: pid,
          text: "",
          size: 1,
          width: "",
          url: ""

      }
      this.prop.addWidget(newWidget);
      this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget${newWidget._id}`)
       }

    render() {
        const {uid,wid,pid} = this.props.match.params
        return (
            <div>
                <nav className="navbar navbar-light bg-light fixed-top">
                    <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}></Link><i className="fa fa-chevron-left"></i>
                    <span className="navbar-brand mb-0 h1">Choose Widget</span>
                    <span></span>
                </nav>
                <div className="container">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span onClick={this.createWidget.bind(this,"HEADING")}>Heading</span>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Label</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">HTML</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Text Input</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Link</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Button</Link>
                        </li>
                        <li className="list-group-item">
                            <span onClick={this.createWidget.bind(this,"IMAGE")}>Image</span>
                        </li>
                        <li className="list-group-item">
                            <span onClick={this.createWidget.bind(this,"YOUTUBE")}>Youtube</span>
                        </li>
                        {/* <li className="list-group-item">
                            <Link to="#">Data Table</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="#">Repeater</Link>
                        </li> */}

                    </ul>

                </div>
                <nav className="navbar navbar-light bg-light fixed-bottom">
                    <span className="navbar-brand mb-0 h1"></span>
                    <a to="../user/login.html"><i className="fas fa-users"></i></a> </nav>
            </div>
        )
    }
}