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


        filterWidgets = () => {
            const widgets = this.props.widgets.filter(
                (widget) => (
                    widget.pageId === pid
                )
            )
            this.setState({
                widgets: widgets
            })
        }

        
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
                <div className="container-fluid">
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
                        src={widget.url} alt="" width={widget.width}/>
                                    </div>
                                    
                                    )
                                    case "YOUTUBE":
                                    return(
                                        <div key={widgets._id}>
                                             <div className="float-right">
                                             <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}><i className="fas fa-cog"></i></Link>
                                            <i className="fas fa-bars"></i>  
                                        </div>
                                        <div className="embed-responsive embed-responsive-16by9" style={{width: widget.width}}>
                                   <iframe src={widget.url} title={widget._id} frameborder="0"
                                       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                       allowfullscreen></iframe>
                                  </div>
                                    )
                                }
                            }
                     )
                     </div>
                                    )
             

                    /* <div>
                        <div className="float-right">
                            <a to="widget-heading.js"><i className="fas fa-cog"></i></a>
                            <i className="fas fa-bars"></i>
                        </div>
                        <h1>GIZMO THO</h1>
                    </div>
                    <div>
                        <div className="float-right">
                            <a to="widget-heading.js"><i className="fas fa-cog"></i></a>
                            <i className="fas fa-bars"></i>
                        </div>
                        <h3>The little mauwgu that you don't feed after midnight, In fear it will turn into a gremlin</h3>
                    </div>
                    <div>
                        <div className="float-right">
                            <a to="widget-image.js"><i className="fas fa-cog"></i></a>
                            <i className="fas fa-bars"></i>
                        </div>
                        <img className="img fluid"></img>
                        src="https://sp.yimg.com/ib/th?id=OIP.2Y3NxOdEgsJ64m-fbwmElwHaD5&pid=15.1&rs=1&c=1&qlt=95&w=220&h=115" alt="gremlin">

                            <div>
                            <div className="float-right">
                                <a to="widget-heading.html"><i className="fas fa-cog"></i></a>
                                <i className="fas fa-bars"></i>
                            </div>
                            <p>The little mauwgu that you don't feed after midnight, In fear it will turn into a gremlin. Then you got
                                what can compare to a bunch a bay bays kids running around your house. They're known to mess your whole
                                house up, and can be violent too. They love chicken, can take a whooping too and keep on ticking and
                                whats that sound like to you. If you don't see the clues then you got the blues and your brain box is on
                snooze ya lose. <a to="www.mintmovies.net"> For free movies follow this link.</a></p>
                        </div>
                        <div>
                            <div className="float-right">
                                <a to="widget-heading.html"><i className="fas fa-cog"></i></a>
                                <i className="fas fa-bars"></i>
                            </div>
                            <h3>The gremlins movie trilogy is classic. I believe the trilogy began in the 1980's</h3>
                        </div>
                        <div>
                            <div className="float-right">
                                <a to="widget-youtube.html"><i className="fas fa-cog"></i></a>
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.youtube.com/embed/z9DNOuEv7iI" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div>
                                <div className="float-right">
                                    <a to="widget-heading.html"><i className="fas fa-cog"></i></a>
                                    <i className="fas fa-bars"></i>
                                </div>
                                <p>Feel free to watch the free trailers that I have provided for you. Also take the time to blog on your
                                    opionins of the subject of subliminal racist messages being hidden in or movies anhd children
                    cartoons. Please also subscibe to my youtube channel and remember to stay positive.</p>
                            </div>
                        </div> */
//                     <nav className="navbar navbar-light bg-light fixed-bottom">
//                         <div>
//                             <i className="fas fa-play"></i>
//                             <i className="fas fa-eye"></i>
//                         </div>
//                         <span className="navbar-brand mb-0 h1"></span>
//                         <Link to={`/user/${uid}`}><i className="fas fa-users"></i></Link>
//                     </nav>
//                 </div>
//             </div>


//         )
//     }
// }
// 
