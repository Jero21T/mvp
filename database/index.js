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

  const query = 'INSERT IGNORE INTO breeds (name) VALUES (?)';

  connection.query(query,[breed], (err,results) =>{
  	if (err){
  		cb(err);
  	}else{
  		cb(null,results);
  	}
  });
}

const storeAllUrls = (breed,url,cb) => {
// console.log(breed)
const query2 = 'INSERT IGNORE INTO urls (url) VALUES (?)';

connection.query(query2,[url], (err, results) =>{
  if (err){
    cb(err);
  }else{
    cb(null,results);
  }
})
}


const retrieveAllUrls  = (cb) => {
const query = 'SELECT * FROM urls'

connection.query(query, (err, results)=> {
    if (err) {
      cb(err);
    }else{
      cb(null, results)
    }
  });
}








module.exports.storeAllBreeds = storeAllBreeds;
module.exports.storeAllUrls =storeAllUrls;
module.exports.retrieveAllUrls = retrieveAllUrls;