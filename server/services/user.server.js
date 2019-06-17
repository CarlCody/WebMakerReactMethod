//all code related to user placed here
//export it so server.js can import it

module.exports = function(app) {

    const passport = require('passport');
    const LocalStragedy = require('passport-local').Strategy;
    const userModel = require("../models/user/user.model")
    const bcrypt = require("bcryptjs");

   // To generate a salt
   const salt = bcrypt.genSaltSync(10);

   // To store 
    passport.serializeUser(serializeUser);

  function serializeUser(user, done) {
   done(null, user);
 }

 // to retrieve 
 passport.deserializeUser(deserializeUser);

function deserializeUser(user, done) {
   userModel.findUserById(user._id).then(
     function(user) {
       done(null, user);
     },
     function(err) {
       done(err, null);
     }
   );
 }

// Login with local stragedy
passport.use(new LocalStragedy(localStragedy));

async function localStragedy(username,password,done) {
  //Check if username exists in DB
  const data = await userModel.findUserByUsername(username);

  // Check if password is match
  if(data && bcrypt.compareSync(password, data.password)) {
      return done(null, data);
      //Check if this user password hasn't been encrypted
  } else if(data && password === data.password) {
    //Encrypt there password
    data.password =  bcrypt.hashSync(data.password, salt);
   
    const rest = await userModel.updateUser(data);
    // console.log(rest);
    return done(null, data);
  }
  else {
      return done(null, false);
  }
}

  // Login (response the user back to client)
  app.post("/api/login", passport.authenticate("local"), (req, res) =>{
      const user = req.user;
      res.json(user);
  })

  // check if there is a user logged in
  app.get("/api/loggedIn", (req, res) => {
    res.send(req.isAuthenticated()? req.user: "0")
  })

  //To Logout
  app.post("/api/logout", (req, res) => {
    req.logOut();
    res.send(200);
  })

  // register
  app.post("/api/register", async (req, res) => {
    const user = req.body;
    // encrypt user password
    user.password = bcrypt.hashSync(user.password, salt);
    const data = await userModel.createUser(user);
    req.login(data, () => {
      res.json(data);
    })
  })

    //users data
    // no longer needed because data been moved from server to database
    // let  users = [
        // { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com" },
        // { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com" },
        // { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com" },
        // { _id: "456", username: "Carl", password: "carl", firstName: "Carl", lastName: "Cody", email: "CarlCody_34@gmail.com" }
    //   ]*/
      //to listen in for incoming code
      //create something called a pass
      //API stands for application programming  interface
      //find user by username and password
       app.get("/api/user", async (req, res)=> {
           //2 way to write this
           //paranthesis or square brackets both will work
           const username = req.query["username"];
           const password = req.query["password"];
           let user;
           if(username && password){
               user = await userModel.findUserByCredentials(username, password);
           } else if (username) {
               user = await userModel.findUserByUsername(username);
           }
        //    let user;
        //    //another method below
        //    /* let user = {}; get rid of else and if and,
        //    replace with res.json(user)*/

        //    // login to check user credentials 
        //    if(username && password) {
        //        //Checking if we have this user
        //         user = users.find((user)=>{
        //            //short way to write for() loop 
        //            //Too check if we have username and password
        //            // If we do get it from the const user
        //            return user.username === username && user.password === password
        //        })
        //     }
        //        // check if username is taken
        //     else if (username) {
        //            user = users.find((user)=>{
        //                return user.username === username;
        //            })
                  
        //    }
           res.json(user);
        
       });
       //create new user
       //create new website
       app.post("/api/user", async (req,res) => {
            const user = req.body;
            const data = await userModel.createUser(user);
            res.json(data);
    //    users.push(user);
    //    res.json(user);
       });

       //find user by _id
       app.get("/api/user/:uid", async (req,res) =>{
            const uid = req.params["uid"];
            let user;
            user = await userModel.findUserById(uid);
        //  user = users.find((user)=> {
        //      return user._id === uid
        //  })
         res.json(user); 
       })
       app.put("api/user", async (req,res) =>{
        const newUser = req.body;
       const data = await userModel.updateUser(newUser);
       res.json(data);
        // users = users.map(
        //     (user)=>{
        //         if(user._id === newUser._id){
        //             user = newUser
        //         }
        //         return user;
        //     }
        // )
        // res.json(newUser);
       });
       // Find all users
       app.get("/api/users", async (req, res) => {
         const data = await userModel.findAllUsers();
         res.json(data)
       })
};