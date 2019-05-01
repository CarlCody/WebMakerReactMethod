import React, { Component } from 'react'

export default class WidgetList extends Component {
  render() {
    return (
      <div>
         <nav className="nav-bar fixed-top navbar-light bg-light">
        <a href="../page/page-list.html"><i className="fas fa-chevron-left"></i></a>

        <span className="navbar-brand mb-0 h1">Widgets</span>
        <a href="widget-chooser.html"><i className="fas fa-plus-square float-right"></i></a>
    </nav>
    <div className="container-fluid">
        <div>
            <div className="float-right">
                <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
                <i className="fas fa-bars"></i>
            </div>
            <h1>GIZMO THO</h1>
        </div>
        <div>
            <div className="float-right">
                <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
                <i className="fas fa-bars"></i>
            </div>
            <h3>The little mauwgu that you don't feed after midnight, In fear it will turn into a gremlin</h3>
        </div>
        <div>
            <div className="float-right">
                <a href="widget-image.html"><i className="fas fa-cog"></i></a>
                <i className="fas fa-bars"></i>
            </div>
            <img className="img fluid"
                src="https://sp.yimg.com/ib/th?id=OIP.2Y3NxOdEgsJ64m-fbwmElwHaD5&pid=15.1&rs=1&c=1&qlt=95&w=220&h=115"
                alt="gremlin">
        </div>
        <div>
            <div className="float-right">
                <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
                <i className="fas fa-bars"></i>
            </div>
            <p>The little mauwgu that you don't feed after midnight, In fear it will turn into a gremlin. Then you got
                what can compare to a bunch a bay bays kids running around your house. They're known to mess your whole
                house up, and can be violent too. They love chicken, can take a whooping too and keep on ticking and
                whats that sound like to you. If you don't see the clues then you got the blues and your brain box is on
                snooze ya lose. <a href="www.mintmovies.net"> For free movies follow this link.</a></p>
        </div>
        <div>
            <div className="float-right">
                <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
                <i className="fas fa-bars"></i>
            </div>
            <h3>The gremlins movie trilogy is classic. I believe the trilogy began in the 1980's</h3>
        </div>
        <div>
            <div className="float-right">
                <a href="widget-youtube.html"><i className="fas fa-cog"></i></a>
                <i className="fas fa-bars"></i>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src="https://www.youtube.com/embed/z9DNOuEv7iI" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div>
                <div className="float-right">
                    <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
                    <i className="fas fa-bars"></i>
                </div>
                <p>Feel free to watch the free trailers that I have provided for you. Also take the time to blog on your
                    opionins of the subject of subliminal racist messages being hidden in or movies anhd children
                    cartoons. Please also subscibe to my youtube channel and remember to stay positive.</p>
            </div>
        </div>
        <nav className="navbar navbar-light bg-light fixed-bottom">
            <div>
                <i className="fas fa-play"></i>
                <i className="fas fa-eye"></i>
            </div>
            <span className="navbar-brand mb-0 h1"></span>
            <a href="../user/login.html"><i className="fas fa-users"></i></a> </nav>

      </div>
    )
  }
}
