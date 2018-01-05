import React from 'react';



const BreedList = (props) => {
	return (
<div>
<ul>
{props.breeds.map((breed)=> 
<li>{breed}</li>
)}
</ul>
</div>
)
}




export default BreedList