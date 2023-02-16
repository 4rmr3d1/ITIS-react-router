import React from 'react'

const contacts = [
	{id: '123', name: 'alex'},
	{id: '345', name: 'sasha'},
	{id: '64356', name: 'sanechek'}
]

export const ContactsPage = () => {
	
	const renderContacts = (contacts: Array<any>) => {
		return contacts.map(contact => (
			<div>{contact.id}: {contact.name}</div>
		))
	}
	
	return (
		<div>
			{contacts.map(contact => (
				<div>{contact.id}: {contact.name}</div>
			))}
			
			{renderContacts(contacts)}
		</div>
	)
}
