const path = require("path");

const HTML_ROUTE = ( app ) => {

    app.get("/:pages?", (req, res) => {
        let URL = req.params.pages;
        switch ( URL ) {
            case "survey":
                console.log("Survey route")
                //sending user to 
                return res.sendFile(path.join(__dirname, "/../public/survey.html"));
            break;
            default:
                console.log("htmlRoutes route chosen");
                //defaulting to home page
                return res.sendFile(path.join(__dirname, "/../public/home.html"));
            break;
        }
    })
}

module.exports = HTML_ROUTE;
