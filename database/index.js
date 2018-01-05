const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dogdb'
});

connection.connect();
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });



const storeAllBreeds = (breed, cb) => {

  const query = 'INSERT INTO dogs (name) VALUES (?)';

  connection.query(query,[breed], (err,results) =>{
  	if (err){
  		cb(err);
  	}else{
  		cb(null,results);
  	}
  });
}


module.exports.storeAllBreeds = storeAllBreeds;