import React, { Component } from 'react'
import { Form, FormGroup, Input, Col } from 'reactstrap';


export class Search extends Component {
	render() {
		return (
		  <div>
			<Form>
				<FormGroup row>
					<Col sm={12}>
						<Input type="search" name="search" id="seach" placeholder="Search" />
					</Col>
				</FormGroup>
			</Form>
		  </div>
		)
	  }
}

export default Search
