const fs = require("fs");
const html = require("./html.js");
const viewport = require("./viewport.js");
const markup = html( viewport() );

fs.writeFileSync( "index.html", markup);
