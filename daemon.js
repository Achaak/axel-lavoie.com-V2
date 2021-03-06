var global = {};

var port = 80;

global.builder = require("./mixins/builder.js");
global.routes  = require("./mixins/routes.js");

global.tools   = require("./mixins/tools.js");
global.tools.create(global);

global.params  = require("./mixins/params.js");

global.http       = require('http');
global.fs         = require('fs');
global.util       = require('util');
global.asyncReadFile  = global.util.promisify(global.fs.readFile);
global.asyncWriteFile = global.util.promisify(global.fs.writeFile);
global.asyncMkdir     = global.util.promisify(global.fs.mkdir);
global.asyncAccess    = global.util.promisify(global.fs.access)
global.express    = require('express');
global.colors     = require('colors');
global._          = require('lodash');
global.uglifyJS   = require('uglify-js');
global.uglifycss  = require("uglifycss");
global.sass       = require('node-sass');
global.rimraf     = require("rimraf");
global.path       = require("path");
global.reload     = require("reload");

global.app    = global.express();




// Defind template
global.app.set('views', './www/src/views');
global.app.set('view engine', 'jade');

// Prepare the server
prepareServer()


// Function to prepare the server
async function prepareServer() {
    console.log("[SERVER]  Prepare the server")

    // Get all server params
    await global.params.getParams(global);
    
    // Create the build
    await global.builder.initBuilder(global, async () => {
        // Create all path
        await global.routes.initRoute(global);

        startServer();
    } );

}


// Function to start the server
function startServer() {
    // Create the server
    global.server = global.http.createServer(global.app);

    global.server.listen(
        port, 
        () => console.log(("[SERVER]      -- Server is started to "+port+" ! --").green)
    );
    
    // Require Socket.io
    global.socketIo   = require("socket.io").listen(global.server);

    // Initialize the mailer
    global.nodemailer = require('nodemailer');
    global.mailer     = require("./mixins/mailer.js");
    global.mailer = global.mailer.initMailer(global);

    // Initialize picture-tree
    global.pictureTree = require("./mixins/picture-tree.js");
    global.pictureTree = global.pictureTree.initPictureTree(global);


    global.reload(global.app);
}
