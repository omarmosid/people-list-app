import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col } from 'reactstrap';

import './ModalForm.css'

export class ModalForm extends Component {

	render() {
		return (
			<div>
				<Button 
					color="primary"
					className="add-button"
					onClick={this.props.toggle}>+
				</Button>
				<Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
					<ModalHeader toggle={this.props.toggle}>Add New Person</ModalHeader>
					<ModalBody>
						<Form>
							{/* Name */}
							<FormGroup row>
								<Label for="nameInput" sm={3}>Name</Label>
								<Col sm={9}>
									<Input 
										type="text"
										name="nameInput"
										id="nameInput"
										placeholder="Enter the Name of the person"
										value={this.props.nameInput}
										onChange={(e) => this.props.handleChange(e)}
									/>
								</Col>
							</FormGroup>
							{/* Job title */}
							<FormGroup row>
								<Label for="jobTitle" sm={3}>Job Title</Label>
								<Col sm={9}>
									<Input 
										type="text" 
										name="jobInput" 
										id="jobTitle" 
										placeholder="Enter the Job Title of the person"
										value={this.props.jobInput}
										onChange={(e) => this.props.handleChange(e)}
									/>
								</Col>
							</FormGroup>
							{/* Profile Pic Link */}
							<FormGroup row>
								<Label for="img" sm={3}>Image URL</Label>
								<Col sm={9}>
									<Input 
										type="text" 
										name="imgInput" 
										id="img" 
										placeholder="Enter the imgae url"
										value={this.props.imgInput}
										onChange={(e) => this.props.handleChange(e)}
									/>
								</Col>
							</FormGroup>
							{/* Github */}
							<FormGroup row>
								<Label for="githubid" sm={3}>Github</Label>
								<Col sm={9}>
									<Input 
										type="text" 
										name="githubInput" 
										id="githubid" 
										placeholder="Enter the Github profile link of the person"
										value={this.props.githubInput}
										onChange={(e) => this.props.handleChange(e)}
									/>
								</Col>
							</FormGroup>
							{/* Linkedin */}
							<FormGroup row>
								<Label for="linkedinid" sm={3}>Linkedin</Label>
								<Col sm={9}>
									<Input 
										type="text" 
										name="linkedinInput" 
										id="linkedinid" 
										placeholder="Enter the Linkedin profile link of the person" 
										value={this.props.linkedinInput}
										onChange={(e) => this.props.handleChange(e)}
									/>
								</Col>
							</FormGroup>
							{/* Twitter */}
							<FormGroup row>
								<Label for="twitter" sm={3}>Twitter</Label>
								<Col sm={9}>
									<Input 
										type="text" 
										name="twitterInput" 
										id="twitter" 
										placeholder="Enter the Twitter profile link of the person"
										value={this.props.twitterInput}
										onChange={(e) => this.props.handleChange(e)} 
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="success" onClick={this.props.handleAdd}>Add</Button>{' '}
						<Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		  )
	}
}

export default ModalForm
