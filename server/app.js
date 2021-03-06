//exporting app.js so server.js can import it

module.exports = function(app) {
    //importing the user,website,page and widgets files
    require('./models/models.server');
    require("./services/user.server")(app);
    require("./services/website.server")(app);
    require("./services/page.server")(app);
    require("./services/widget.server")(app);
};

