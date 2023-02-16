import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
	availability: boolean
}

export const SecretPage = ({availability}: Props) => {
	return (
		<>
			{availability
				? <div>This is Secret Page</div>
				: <Navigate to="/"/>
			}
		</>
		
	)
}
