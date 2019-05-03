import React from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Register from './components/user/Register';
import WebsiteList from './components/website/WebsiteList';
import PageList from "./components/user/page/PageList";
import WebsiteEdit from "./components/website/WebsiteEdit";
import PageNew from "./components/user/page/PageNew";
import PageEdit from "./components/user/page/PageEdit";
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WebsiteNew from "./components/website/WebsiteNew";

function App() {
  return (
  <Router>
    <Route exact path="/" component={Login}></Route>
    <Route exact path="/profile" component={Profile}></Route>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/register" component={Register}></Route>
    <Route exact path="/user/:uid" component={Profile}></Route>
    <Route exact path="/user/:uid/website" component={WebsiteList}></Route>
    <Route exact path="/user/:uid/website/new" component={WebsiteNew}></Route>
    <Route exact path="/user/:uid/website/:wid" component={WebsiteEdit}></Route>
    <Route exact path="/user/:uid/website/:wid/page" component={PageList}></Route>
    <Route exact path="/user/:uid/website/:wid/page/new" component={PageNew}></Route>
    <Route exact path="/user/:uid/website/:wid/page/:pid" component={PageEdit}></Route>
    <Route exact path="/user/:uid/website/:wid/page/:pid/widget" component={WidgetList}></Route>
    <Route exact path="/user/:uid/website/:wid/page/new/:pid/widget/new" component={WidgetChooser}></Route>
    {/* <Route exact path="/user/:uid/website/:wid/page/new/:pid/widget/:wgid" component={WidgetEdit}></Route> */}
  </Router>
  )
}

// class act extends Components {

// }

export default App;
