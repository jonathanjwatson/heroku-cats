// Set up MySQL connection.
var mysql = require("mysql");
let connection;

if(process.env.JAWSDB_URL){
    console.log("successfully connected");
    connection = mysql.createConnection("mysql://z12qrhm2fviv4k15:w7hnr3cwwv3ldtxg@cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ninuwev1w2bf2fcj");
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Mickey19",
        database: "cat_db"
      });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
