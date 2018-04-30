var orm = require("../config/orm.js");
var path = require("path");
module.exports = function (app) {



    app.get('/', function (req, res) {
        //selectAllBurger takes in table name and a callback to retreive data
        orm.selectAllBurger("burger_list", function (data) {
            let alldata = {
                burgers: data,
                title : "Devour 'em All"
            }
            res.render("index", alldata)
        })
    })

    app.get("/test", function(req, res){
        res.sendFile(path.join(__dirname, "../public/test.html"))
    })
}

