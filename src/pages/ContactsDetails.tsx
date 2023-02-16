import React from 'react'
import {useParams} from "react-router-dom";

export const ContactsDetails = () => {
	const { contactId } = useParams<{ contactId: string }>()
	
	return (
		<div>Contacts id: {contactId}</div>
	)
}
