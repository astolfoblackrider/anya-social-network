require('dotenv').config()

const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD


});

connection.connect(function(err){
     if(err){
        return console.error("connect error " + err.message);
     }
     else {
        console.log("on connect")
     }


});

// // const messagetest = [1,"sosi",2435,"hui"]
// // const addmsg = "INSERT INTO messages VALUE (?,?,?,?)"
// // connection.execute(addmsg,messagetest, function(err,result){
// //    if (err){
// //       console.log(err);
// //    }
// //    else {
// //       console.log("added");
// //    }
// // });

// connection.execute("SELECT * FROM messages", function(err,result){
//    console.log(err)
//    console.log(result)
// });
