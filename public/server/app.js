//exporting app.js so server.js can import it

module.export = function (app) {
    //importing the user,website,page and widgets files
    require("./services/user.server")(app); 
};

