const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const getBreedList = require('../api/getBreedList.js')
const dbhandler = require('../database/index.js');

const app = express();

app.use(express.static(__dirname+'/../client/dist'))

app.get('/allbreeds', (req,res) =>{

//invoke dbhandler
  getBreedList.getAllBreeds((err,data) => {

    if (err){
      throw err;
    }else{
      var toBeReturned = (data.message);
      res.json(toBeReturned)
	  data.message.forEach((breed)=>{
	    dbhandler.storeAllBreeds(breed,(err,data)=>{
          if (err){
            throw err;
          }else{
            //do nothing
          }
        })
	  });
    }
  });
});












app.listen(3000, () =>{
	console.log('Listening on port 3000')
});