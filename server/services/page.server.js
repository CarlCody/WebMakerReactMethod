module.exports = function(app)  {
    const pageModel = require("../models/page/page.model")
//    let pages = [    
//     { name: "Post 1", websiteId: "456", title: "Lorem" },
//     { name: "Post 2", websiteId: "456", title: "Lorem" },
//     { name: "Post 3", websiteId: "456", title: "Lorem" }
//   ];
 //get all pages for this website
  app.get("/api/website/:wid/page", async (req,res) => {
      //We need to know which website it belong to
      //Nd look for all websites it belong to
      const wid = req.params["wid"];
    //   const data
      const websites = await pageModel.findAllPagesForWebsite(wid)
      //For each page inside pages want to make sure page is equal to page.websiteId
    //  result = pages.filter((page) =>(page.websiteId === wid)
    //   );
    //   // Parse and send to client
      res.json(websites);
  });
   // Adding newPage
  app.post("/api/page", async (req, res) => {
      const newPage = req.body;
      const data = await pageModel.createPage(newPage)
      //Pushing that into the pages array below
    //   pages.push(newPage);
      //Tell the client to send it back
      res.json(data);
  });
  // get the page by given id.
  app.get("/api/page/:pid", async (req, res) => {
      const pid = req.params["pid"];
      const page = await pageModel.findPageById(pid)
    //       (page) => (page._id === pid)
    //   )
   res.json(page);
  });
  // Delete page by given id
  app.delete("/api/page/:pid", async (req, res) => {
      const pid =req.params["pid"];
     const data = await pageModel.deletePage(pid)
    //     (page) => (page._id === pid)
    // )
    // const index = pages.indexOf(page);
    // pages.splice(index, 1);
     res.json(newPage);
  });

  // Update(edit) page
  app.put("/api/page", async (req, res) => {
      const newPage = req.body;
      const data = await pageModel.updatePage(newPage)
    //   pages = pages.map(
    //       (page) => {
    //           if(page._id === newPage._id) {
    //               page = newPage;
    //           }
    //           return page;
    //       }
    //   )
       res.json(data)
  });
};