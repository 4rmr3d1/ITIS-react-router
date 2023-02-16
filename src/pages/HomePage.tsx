import React from 'react';
import {useNavigate} from "react-router-dom";

interface Props {
	onChange: () => void;
	availability: boolean;
}

export const HomePage = ({onChange, availability}: Props) => {
	const navigate = useNavigate()
	
	const handleClick = () => {
		navigate('/secret-page')
	}
	
	return (
		<div>
			<div>This is Homepage</div>
			
			<div>Is page available: {String(availability)}</div>
			
			<button onClick={onChange}>Toggle</button>
			
			<button onClick={handleClick}>To the secret page</button>
		</div>
	)
}
