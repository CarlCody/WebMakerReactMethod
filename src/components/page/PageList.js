import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class PageList extends React.Component {

state = {
    uid: "",
    wid: "",
    pages: []
}

async componentDidMount() {
    await this.setState({
       uid: this.props.match.params.uid, 
       wid: this.props.match.params.wid
    })
    this.filterPage(this.state.wid);
}

filterPage = async (wid) => {
    // const currentPages = this.props.pages.filter(
    //   (page) => (
    //       page.websiteId === wid
    // )
    //  )
     const res = await axios.get(`/api/website/${this.state.wid}/page`)
   
     this.setState({
         pages: res.data
     })
}




    render() {
        const {uid,wid} = this.state;
        return (
<div>
    <nav className="navbar navbar-light bg-light fixed-top mb-0 h1">

        <Link to={`/user/${uid}/website`}><i className="fas fa-chevron-left"></i></Link>
        <span className="navbar-brand mb-0 h1">Pages</span>
        <Link to={`/user/${uid}/website/${wid}/page/new`}><i className="fas fa-plus-square"></i></Link>


    </nav>
    <section>
        <div>
            <div className="container">
                <ul className="list-group">
                {
                    this.state.pages.map(
                       (page) => (
                           <li key={page._id} className="list-group-item">
                            <Link to={`/user/${uid}/website/${wid}/page/${page.id}/widget`}>{page.name}</Link>
                            <Link className="fas-fa-cog" to={`/user/${uid}/website/${wid}/page/${page.id}`}></Link>
                           </li>
                    )
                    )
                }
                    {/* <li className="list-group-item">
                        <a href="../widget/widget-list.html">Blog post</a>
                        <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                    </li> */}
                    
                </ul>
            </div>

        </div>
        <nav className="navbar navbar-light bg-light fixed-bottom">
            <span className="navbar-brand mb-0 h1"></span>
            <Link to={`/user/${uid}`}><i className="fas fa-users"></i></Link> </nav>


    </section>

</div>
        )
    }
}

