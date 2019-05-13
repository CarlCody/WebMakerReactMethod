import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WidgetList extends Component {

    state = {
        uid: "",
        wid: "",
        pid: "",
        widgets: []
    }


    async componentDidMount() {
        await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            pid: this.props.match.params.pid
        })
        this.filterWidgets(this.state.pid);
    }

        filterWidgets = (pid) => {
            const widgets = this.props.widgets.filter(
                (widget) => (
                    widget.pageId === pid
                )
            )
            this.setState({
                widgets
            })
        }


    

    render() {
        const { uid, wid, pid, widgets } = this.state
        return (
            <div>
                <nav className="nav-bar fixed-top navbar-light bg-light">
                    <Link to="/user/:uid/website/:wid/page"><i className="fas fa-chevron-left"></i></Link>

                    <span className="navbar-brand mb-0 h1">Widgets</span>
                    <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/new`}><i className="fas fa-plus-square float-right"></i></Link>
                </nav>
                <div className="container-fluid" >
                {
                    widgets.map(
                        (widget) => {
                            switch (widget.widgetType) {
                                case "HEADING":
                                    return (
                                        <div key={widget._id}>
                                            <div className="float-right">
                                                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}><i className="fas fa-cog"></i></Link>
                                                <span className="fas fa-bars"></span>
                                            </div>

                                            <div>
                                                {widget.size === 1 && <h1>{widget.text}</h1>}
                                                {widget.size === 2 && <h2>{widget.text}</h2>}
                                                {widget.size === 3 && <h3>{widget.text}</h3>}
                                                {widget.size === 4 && <h4>{widget.text}</h4>}
                                                {widget.size === 5 && <h5>{widget.text}</h5>}
                                                {widget.size === 6 && <h6>{widget.text}</h6>}
                                            </div>
                                        </div>
                                        
                                    )
                                case "IMAGE":
                                    return (
                                        <div key={widget._id}>
                                            <div className="float-right">
                                                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}><i className="fas fa-cog"></i></Link>
                                                <i className="fas fa-bars"></i>
                                            </div>
                                            <img className="img fluid"
                                                src={widget.url} alt="" width={widget.width} />
                                        </div>

                                    )
                                case "YOUTUBE":
                                    return (
                                        <div key={widgets._id}>
                                            <div className="float-right">
                                                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}><i className="fas fa-cog"></i></Link>
                                                <i className="fas fa-bars"></i>
                                            </div>
                                            <div className="embed-responsive embed-responsive-16by9" style={{ width: widget.width }}>
                                                <iframe src={widget.url} title={widget._id} frameborder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        )
                            }
                        }
                    )
                }
            </div>
        </div>

         )
     }
 }
 
