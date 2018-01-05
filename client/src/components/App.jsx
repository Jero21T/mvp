import React from 'react';
import DogInput from './DogInput.jsx'
import DogPhoto from './DogPhoto.jsx'


export default class App extends React.Component {
render(){
	return (
		<div>
		<h1>Welcome to the Dogshow</h1>
		<DogInput />
		<DogPhoto />
		</div>
	)
}
}

