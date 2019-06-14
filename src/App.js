//Client Side

import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Users
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Register from './components/user/Register';
// Websites
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteList from './components/website/WebsiteList';
import WebsiteEdit from "./components/website/WebsiteEdit";
// Pages
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// Widgets
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";
import Axios from "axios";
import UserManage from "./components/user/UserManage";
 



// import WebsiteNew from "./components/website/WebsiteNew";
class App extends Component {

  //Check if user is loggedIn
  loggedIn = async () => {
    const res = await Axios.get("/api/loggedIn");
    return res.data;
  }

    //functions and data no longer needed thats,
    // related to user
    // users: [
    //   { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com" },
    //   { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com" },
    //   { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com" },
    //   { _id: "456", username: "Carl", password: "carl", firstName: "Carl", lastName: "Cody", email: "CarlCody_34@gmail.com" }
    // ],

    //No longer need this moved it to server side

    // websites: [
    //   { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    //   { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    //   { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
    //   { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    //   { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    //   { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    //   { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
    // ],

  //   pages: [
  //     { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
  //     { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
  //     { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
  //   ],

  //   widgets: [
  //     { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
  //     { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lore m ipsum" },
  //     { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" },
  //     { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
  //     { _id: "678", widgee: "YOUTUBE ", pageId: "321", width: "100%", url: " https://youtu.be/AM 2Ivdi9c4E" }
  //   ]
  // }

  // removed from client side too server side
  // addUser = user => {
  //   const newUsers = this.state.users;
  //   newUsers.push(user);
  //   this.setState({
  //     users: newUsers
  //   });
  // }

  // userNameInUse = (username) => {
  //   for (let user of this.state.users) {
  //     if (username === user.username) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // updateUser = (newUser) => {
  //   const newUsers = this.state.users.map((user) => {
  //     if (user._id === newUser._id) {
  //       if (user.username !== newUser.userName && this.userNameInUse(newUser.username)) {
  //         alert("This username is taken");
  //       } else {
  //         user = newUser
  //         alert("User information is updated..")
  //       }
  //     }
  //     return user;
  //   });

  //   this.setState({
  //     users: newUsers
  //   })
  // }


// No longer needed after data moved to server side
  // addWeb = (newWeb) => {
  //   const newWebs = this.state.websites;
  //   newWebs.push(newWeb);
  //   this.setState({
  //     websites: newWebs
  //   });
  // }

  // deleteWeb = (wid) => {
  //   this.state({
  //     websites: this.state.websites.filter(
  //       (website) => website._id !== wid
  //     )
  //   })
  // }

//   editWeb = (wid, name, description) => {
//     this.setState({
//         websites: this.state.websites.map(
//             (website) => {
//                 if(wid === website._id){
//                     website.name = name;
//                     website.description =description
//                 }
//                 return website;
//             }
//         )
//     })
// }

  addPage = newPage => {
    const newPages = this.state.pages;
    newPages.push(newPage);
    this.setState({
      pages: newPages
    });
  }

  editPage = newPage => {
    const newPages = this.state.pages.map(
      (page) => {
        if (page._id === newPage._id) {
          page = newPage
        }
        return page;
      }
    )
    this.setState({
      pages: newPages
    })
  }

  deletePage = pid => {
    const newPages = this.state.pages.filter(
      (page) => (
        page._id !== pid
      )
    )
    this.setState({
      pages: newPages
    })
  }


//   addWidget = newWidget => {
//     const newWidgets = this.state.widgets;
//     newWidgets.push(newWidget);
//     this.setState({
//       widgets: newWidgets
//     })
//   }

//   deleteWidget = (wgid) => {
//     const newWidgets = this.state.widgets.filter(
//       (widget) => (
//         widget._id !== wgid
//       )
//     )
//     this.setState({
//       widgets: newWidgets
//     })
//   }



// editWidget = newWidget => {

//   const newWidgets = this.state.widgets.map(
//     (widget) => {
//       if (widget._id === newWidget._id) {
//         widget = newWidget
//       }
//       return widget;
//     }
//   )
//   this.setState({
//     widgets: newWidgets
//   })
// }


render() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/profile" render={props => (<Profile {...props} users={this.state.users} updateUser={this.updateUser}/>)} />> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register"  component={Register} />
        <Route exact path="/user/:uid" render={props => <Profile {...props} loggedIn={this.loggedIn}/>} />
        <Route exact path="/manage" render={props =><UserManage {...props} loggedIn={this.loggedIn}/>}/>
        <Route exact path="/user/:uid/website" render={props => <WebsiteList {...props} loggedIn={this.loggedIn}/>} />
        <Route exact path="/user/:uid/website/new"render={props => <WebsiteNew {...props} loggedIn={this.loggedIn}/>} />
        <Route exact path="/user/:uid/website/:wid" render={props => <WebsiteEdit {...props} loggedIn={this.loggedIn}/>} />
        <Route exact path="/user/:uid/website/:wid/page" render={props => <PageList {...props} loggedIn={this.loggedIn}/>} />
        <Route exact path="/user/:uid/website/:wid/page/new" render={props => <PageNew {...props} loggedIn={this.loggedIn}/>} />
        <Route exact path="/user/:uid/website/:wid/page/:pid" render={props => <PageEdit {...props} loggedIn={this.loggedIn}/>} />
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget" render={props => <WidgetList {...props} loggedIn={this.loggedIn}/>} />
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new"  component={WidgetChooser} />
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid"render={props => <WidgetEdit {...props} loggedIn={this.loggedIn}/>} />
        {/* <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" render={props => (<WidgetYoutube {...props} widgets={this.state.widgets} />)} /> */}
      </Switch>
    </Router>
  );
}
}


export default App;




