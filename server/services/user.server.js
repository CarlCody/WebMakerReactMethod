//all code related to user placed here
//export it so server.js can import it

module.exports = function(app) {
    //users data
    let  users =  [
        { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com" },
        { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com" },
        { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com" },
        { _id: "456", username: "Carl", password: "carl", firstName: "Carl", lastName: "Cody", email: "CarlCody_34@gmail.com" }
      ]
      //to listen in for incoming code
      //create something called a pass
      //API stands for application programming  interface
      //find user by username and password
       app.get("/api/user", (req, res)=> {
           //2 way to write this
           //paranthesis or square brackets both will work
           const username = req.query["username"];
           const password = req.query["password"];
           let user;
           //another method below
           /* let user = {}; get rid of else and if and,
           replace with res.json(user)*/

           // login to check user credentials 
           if(username && password) {
               //Checking if we have this user
               const user = users.find((user)=>{
                   //short way to write for() loop 
                   //Too check if we have username and password
                   // If we do get it from the const user
                   return user.username === username && user.password === password
               })
               // check if username is taken
               if (username) {
                   user = users.find((user)=>{
                       return user.username === username;
                   })
                   // send out this info as a json to the client
                    res.json(user);
               }else {
                   //status code 200 all correct
                   //201 means created 3xx means redirection
                   //Anything 400 is client errors or bad requests
                   // 500's means server side errors
                   res.status(404).send("error")
               }
           }
        //    res.send("hello from server");
       })
       //create new website
       app.post("/api/user", (req,res) => {
       const user = req.body;
       users.push(user);
       res.json(user);
       })

       //find user by id
       app.get("/api/user/:uid", (req,res) =>{
         const uid = req.params["uid"];
         let user;
         user = users.find((user)=> {
             return user._id === uid
         })
         res.json(user); 
       })
       app.put("api/user", (req,res) =>{
        const newUser = req.body;
        users = users.map(
            (user)=>{
                if(user._id === newUser._id){
                    user = newUser
                }
                return user;
            }
        )
        res.json(newUser);
       })
};