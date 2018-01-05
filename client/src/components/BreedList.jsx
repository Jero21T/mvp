import React from 'react';
import BreedListEntry from './BreedListEntry.jsx'



const BreedList = (props) => {
	return (
<div>
<ul>
{props.breeds.map((breed)=> 
<BreedListEntry breed={breed} handleBreedClick={props.handleBreedClick} />
)}
</ul>
</div>
)
}




export default BreedList