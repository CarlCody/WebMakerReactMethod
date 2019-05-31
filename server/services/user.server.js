//all code related to user placed here
//export it so server.js can import it

module.exports = function(app) {

    const userModel = require("../models/user/user.model")
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
        
       })
       //create new user
       //create new website
       app.post("/api/user", (req,res) => {
       const user = req.body;
       const data = await userModel.createUser(user);
       res.json(data) 
    //    users.push(user);
    //    res.json(user);
       })

       //find user by _id
       app.get("/api/user/:uid", async (req,res) =>{
         const uid = req.params["uid"];
         let user;
         user = await userModel."./user.schema"(uid);
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
       })
};