const mongoose = require("mongoose");
const PageSchema = require("./page.schema");
const PageModel = mongoose.model("pageModel", PageSchema);

// find pages for website
PageModel.findAllPagesForWebsite = (wid) => {
    return PageModel.find({websiteId: wid});
}

// Create page
PageModel.createPage = (page) => {
    return PageModel.create(page);
}

// Get page by given _id
PageModel.findPageById = (pid) => {
    return PageModel.findById(pid);
}

// Delete page
PageModel.deletePage = (pid) => {
    return PageModel.deleteOne({_id: pid});

}

//Update Page
PageModel.updatePage = (page) => {
    return pageModel.updateOne({_id: page._id}, page)
}

module.exports = PageModel;