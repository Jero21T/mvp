import React from 'react';
import BreedInput from './BreedInput.jsx'
import BreedList from './BreedList.jsx'
import $ from 'jquery'
import DogPhoto from './DogPhoto.jsx'


export default class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		breeds: []
  	}

  	this.storeAllBreedsInDatabase = this.storeAllBreedsInDatabase.bind(this)
  }

  storeAllBreedsInDatabase() {
    //ajax request
    $.ajax({
    	url:"http://localhost:3000/allbreeds",
    	type: 'GET',
    	success: (data) => {
    		console.log('All breeds are successfully stored on the database')
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
	  <BreedList breeds={this.state.breeds} />
	  </div>
	)
  }
}


   