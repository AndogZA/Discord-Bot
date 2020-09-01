var mysql = require('mysql');

        let con = mysql.createConnection({
            host: "localhost",
            username: "root",
            password: "WaltherKnifeR5!"
        });

        con.connect(function(err){
            if(err) throw err;
            console.log("Connected")
        })
        