import { useState } from "react";

const Profile = (props) => {
	//states in functoin component
	const [count,setCount] = useState(0);
	const [count2,setCount2] = useState(5);
	return (
		<div>
			<h1>Functional component</h1>
			<h2>{props.name}</h2>
			<h2>{props.id}</h2>
			<h3>Count : {count}</h3>
			<h3>Count : {count2}</h3>
			<button onClick={()=>{ //multiple set states seperately
				setCount(count+1);
				setCount2(10);
				}}>Count++</button>
		</div>
	);
};

export default Profile;	 
