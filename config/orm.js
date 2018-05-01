var connection = require("./connection.js")

var orm = {

    selectAllBurger: function (table, callback) { //return all burger types to home page
        let query = "SELECT * FROM ??"
        connection.query(query, table, function (err, sqlResults) {
            if (err) throw err;
            callback(sqlResults); //callback function to send data to controller js
        })
    },

    selectOneBurger: function (table, id, callback){
        let query = "SELECT * FROM ?? WHERE id = ?";
        connection.query(query, [table, id], function(err, sqlResult){
            if (err) throw err;
            callback(sqlResult);
        })
    },

    OdrderBurger : function(table, clientData, callback){
        
        let sqlQuery = "INSERT INTO ?? SET ?"
        connection.query(sqlQuery, [table, clientData], function(err, sqlResult){
            if (err) throw err;
            callback(sqlResult);
        })
    },

    allOrders : function(table, callback){
        
        let sqlQuery = "SELECT * FROM ??"
        connection.query(sqlQuery, table, function(err, sqlResult){
            if (err) throw err;
            callback(sqlResult);
        })
    },

    devour : function(table, clientData, callback){
        let sqlQuery = "UPDATE ?? SET ? WHERE ?"
        connection.query(sqlQuery, [table, {devoured : true}, clientData], function(err, sqlResult){
            if (err) throw err;
            callback(sqlResult)
        })
    }
}




module.exports = orm;
