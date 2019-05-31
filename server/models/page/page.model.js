const mongoose = require("mongoose");
const pageSchema = require("./page.schema");
const pageModel = mongoose.modelNames("pageModel", PageSchema);

// find pages for website
PageModel.findAllPagesForWebsite = (wid) => {
    return pageModel.find({websiteId: wid});
}

// Create page
PageModel.createPage = (page) => {
    return PageModel.create(page);
}

// Get page by given _id
pageModel.findPageById = (pid) => {
    return PageModel.findById(pid);
}

// Delete page
PageModel.deletePage = (pid => {
    return PageModel.deleteOne({_id: pid});

}

//Update Page
PageModel.updatePage = (page) => {
    return pageModel.updateOne({_id: page._id}, page)
}

module.exports = PageModel;