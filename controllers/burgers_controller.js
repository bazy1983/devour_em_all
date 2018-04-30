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

    app.get("/burger", function(req, res){
        orm.selectOneBurger("burger_list", req.query.id, function(sqlData){
         res.send(sqlData);   
        })
        
    })

    app.post ("/order", function(req, res){
        console.log(req.body);
        res.send(req.body)
    })
}

