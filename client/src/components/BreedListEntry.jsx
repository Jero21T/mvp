import React from 'react'


const BreedListEntry = (props) => {
	return (
<li onClick={props.handleBreedClick}>{props.breed}</li>
)
}


export default BreedListEntry