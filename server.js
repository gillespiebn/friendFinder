// ===========================================================
//Dependencies
// ===========================================================

var express = require("express");
var bodyParser = require("body-parser");

// ===========================================================
//Express configuration
// ===========================================================

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// ===========================================================
//Router
// ===========================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ===========================================================
// Listener - starts server
// ===========================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});