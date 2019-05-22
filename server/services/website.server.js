//server side

module.exports = function(app) {
    const websites = [
        { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
        { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
        { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
        { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
        { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
        { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
        { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
      ];
      // Find all websites for given user id.

      /*When we receive this request the server needs
      to run a function. The function is going to return all the
      websites that belong to given user  */
      /* Anytime you wanna get a placeholder inside the url
      pass, where going get it from req.params  */
      app.get("/api/user/:uid/website", (req, res) => {
          const uid = req.params["uid"];
          const result = websites.filter(
              (website) => (
              website.developerId === uid
          )
          )
          //send the result into the client side
          console.log(result);
          res.json(result);
      })
      //Create new website
      app.post("/api/website", (req, res) => {
          const newWeb = req.body;
          websites.push(newWeb);
          res.json(newWeb);
      })
     // Delete website with given wid
     app.delete("/api/website/:wid", (req, res) => {
         const wid = req.params["wid"];
         const web = websites.find((website) => (website._id === wid)); 
        //  const index = websites.indexOf(web)
        // simplier method below
         websites.splice(websites.indexOf(web), 1);
         res.json(websites);
     })
     // Update website 
     app.put("/api/website", (req,res) =>{
         const newWeb = req.body;
         websites = websites.map(
             (website) => {
                if(websites._id === newWeb._id) {
                    website = newWeb
                }
                return website;
             } 
         )
         res.json(newWeb);
     }) 
}
