import React, { Component } from 'react'
import PersonSingle from '../PersonSingle/PersonSingle.js';

export class Persons extends Component {
	render() {
		const renderPersons = this.props.persons.map((person, index) => {
			return (
				
					<PersonSingle
						key={index} 
						index={index}
						person={person}
						handleDelete={this.props.handleDelete}
						name={person.name} 
						jobTitle={person.jobTitle}
						img={person.img}
						githubid={person.githubid}
						linkedinid={person.linkedinid}
						twitterid={person.twitterid}
					/>
				
			)
		})

		return (
			<>{renderPersons}</>
		)
	}
}

export default Persons
