import React from 'react';


const DogPhoto = (props) => {
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




export default DogPhoto