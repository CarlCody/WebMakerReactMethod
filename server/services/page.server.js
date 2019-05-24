module.exports = function(app)  {
   let pages = [
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
  ];
 //get all pages for this website
  app.get("/api/website/:wid/page", (req,res) => {
      //We need to know which website it belong to
      //Nd look for all websites it belong to
      const wid = req.params["wid"];
      let result = []
      //For each page inside pages want to make sure page is equal to page.websiteId
     result = pages.filter((page) =>(page.websiteId === wid)
      );
      // Parse and send to client
      res.json(result);
  })
   // Adding newPage
  app.post("/api/page", (req, res) => {
      const newPage = req.body;
      //Pushing that into the pages array below
      pages.push(newPage);
      //Tell the client to send it back
      res.json(newPage);
  })
  // get the page by given id.
  app.get("/api/page/:pid", (req, res) => {
      const pid = req.params["pid"];
      const page = pages.find(
          (page) => (page._id === pid)
      )
      res.json(page);
  })
  // Delete page by given id
  app.delete("/api/page/:pid", (req, res) => {
      const pid =req.params["pid"];
    const page = pages.find(
        (page) => (page._id === pid)
    )
    const index = pages.indexOf(page);
    pages.splice(index, 1);
    res.json(page);
  })

  // Update(edit) page
  app.put("/api/page", (req, res) => {
      const newPage = req.body;
      pages = pages.map(
          (page) => {
              if(page._id === newPage._id) {
                  page = newPage;
              }
              return page;
          }
      )
      res.json(newPage)
  })
};