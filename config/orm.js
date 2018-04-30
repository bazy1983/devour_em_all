var connection = require("./connection.js")

var orm = {

    selectAllBurger: function (table, callback) { //return all burger types to home page
        let query = "SELECT * FROM ??"
        connection.query(query, table, function (err, sqlResults) {
            if (err) throw err;
            callback(sqlResults); //callback function to send data to controller js
        })
    },

    // OdrderBurger : function(){
    //     let colVal = {
    //         burger_id = 1
    //     }
    //     let sqlQuery = "INSERT INTO user_tbl SET ?"
    //     connection.query(sqlQuery, colVal, function(err, sqlResult){
    //         if (err) throw err;
    //     })
    // },

    // devourBurger : function(){
    //     let colVal = {
    //         burger_id = 1
    //     }
    //     let sqlQuery = "UPDATE table SET"
    //     connection.query(sqlQuery, colVal, function(err, sqlResult){
    //         if (err) throw err;
    //     })
    // }
}




module.exports = orm;
