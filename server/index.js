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
	  	//////////////////////////////////////////////////////

	  	getBreedList.getRandomPhotoOfBreed(breed, (err,randomPhoto)=>{
	  		if (err){
	  			throw err;
	  		}else{
              dbhandler.storeAllUrls(breed, randomPhoto.message, (err,data)=>{
	  		if (err){
	  			throw err;
	  		}else{
	  		  //do nothing
	  		  console.log('Succesfully stored all urls')
	  		}
	  	  })

	  		}
	  	})

	  	///////////////////////////////////////////////////
	    dbhandler.storeAllBreeds(breed,(err,data)=>{
          if (err){
            throw err;
          }else{
            //do nothing
            console.log('Succesfully stored all breeds')
          }
        })
	  });
    }
  });
});
















app.listen(3000, () =>{
	console.log('Listening on port 3000')
});