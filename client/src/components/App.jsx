import React from 'react';
import BreedInput from './BreedInput.jsx'
import BreedList from './BreedList.jsx'
import $ from 'jquery'
import DogPhoto from './DogPhoto.jsx'


export default class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		breeds: [],
      urls: []
  	}

  	this.storeAllBreedsInDatabase = this.storeAllBreedsInDatabase.bind(this)
    this.storeAllUrlsInDatabase = this.storeAllUrlsInDatabase.bind(this)
  }




   
  handleBreedClick(event){
     console.log(event.target.innerText)
  }


  storeAllUrlsInDatabase(){
    $.ajax({
      url:"http://localhost:3000/allurls",
      type: 'GET',
      success: (data) => {
        console.log(data)
        this.setState({urls:data})
      },
      dataType: 'json',
      error: (err) => {
          console.error(err)
      }
    })
  }

  storeAllBreedsInDatabase() {
    //ajax request
    $.ajax({
    	url:"http://localhost:3000/allbreeds",
    	type: 'GET',
    	success: (data) => {
    		// console.log('All breeds are successfully stored on the database')
    		this.setState({breeds:data})
    	},
    	dataType: 'json',
    	error: (err) => {
          console.error(err)
    	}
    })
   }

   componentWillMount (){
   	this.storeAllBreedsInDatabase();
   }

  render(){
    return (
	  <div>
	  <h1>Welcome to the Dogshow</h1>
	  <BreedInput />
    <DogPhoto  />
	  <BreedList handleBreedClick={this.handleBreedClick.bind(this)} breeds={this.state.breeds} />
	  </div>
	)
  }
}


   