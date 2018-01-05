const request = require ('request');

const getAllBreeds = (cb) => {
	
	function callback(err,response, body){
		if (!err && response.statusCode ==200){
          var data = JSON.parse(body);
          // console.log(data)
          cb(null, data)
		}
	}

	request("https://dog.ceo/api/breeds/list",callback)
}


const getRandomPhotoOfBreed = (breed, cb) => {
	
	function callback(err,response, body){
		if (!err && response.statusCode ==200){
          var data = JSON.parse(body);
          // console.log(data)
          cb(null, data)
		}
	}

	request('https://dog.ceo/api/breed/'+breed+'/images/random',callback)

}





module.exports.getAllBreeds = getAllBreeds
module.exports.getRandomPhotoOfBreed = getRandomPhotoOfBreed