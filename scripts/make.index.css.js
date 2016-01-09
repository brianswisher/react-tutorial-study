const fs = require("fs");
const css = require("./css.js")("App");

fs.writeFileSync( "css/reviews.css", css);
