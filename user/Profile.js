import React from "react";


export default class Login extends React.Component {
render(){
    return (
        <nav class="navbar navbar-dark bg-primary fixed-top">
        <span class="navbar-brand mb-0 h1">Profile</span>
        <a href="profile.html"><i class="fas fa-check"></i></a> </nav>
    <form>
        <div class="form-group">
            <label for="username">Username</label>
            <input placeholder="Enter your User Name" class="form-control" type="text" name="username" id="username"/>
        </div>
        <div>
            <div class="form-group">
                <label for="Email">Email</label>
                <input placeholder="Enter your Email" type="Email" class="form-control" id="passwod" name="password"/>
            </div>
            <div>
                <div class="form-group">
                    <label for="Firstname">Firstname</label>
                    <input placeholder="Enter your FirstName" class="form-control" type="text" name="username" id="username"/>
                </div>
                <div>
                    <label for="LastName">LastName</label>
                    <input placeholder="Enter your LastName" type="Email" class="form-control" id="passwod"
                        name="password"/> </div>
            </div>
            <a class="btn btn-primary btn-block" href="../website/website-list.html">Websites</a>
            <a class="btn btn-primary btn-block btn-danger" href="register.html">LogOut</a>
        </div>
        <footer>
                <nav class="navbar navbar-dark bg-primary fixed-bottom">
                        <span class="navbar-brand mb-0 h1"></span>
                        <a href="profile.html"><i class="fas fa-users"></i></a> </nav>
        
        </footer>
        

    </form>
    )
}
}