import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

import './PersonSingle.css'

import Github from '../../icons/github-icon.svg';
import LinkedIn from '../../icons/linkedin-icon.svg';
import Twitter from '../../icons/twitter-icon.svg';

export class PersonSingle extends Component {

  render() {
	/* The following variable imgUrl allows random creation of image */
	// const imgUrl = "https://d3iw72m71ie81c.cloudfront.net/" + "male-" + this.props.idno + ".jpg"
	/* To switch to custom image, to <CardImg> and set source as this.props.img */
    return (
		<Col lg="3" className="mb-4">
			<Card>
				<Button 
					className="deleteButton" 
					onClick={this.props.handleDelete.bind(this, this.props.person)}
				>delete</Button>
				{/* Bind syntax: fn1.bind(this, defaultvalueyouwanttopasstofn1)  
				  This is called Function currying - Creating a copy of the function ( using bind() ) with default parameters
					Here  this.props.person is the default parameter*/}
				<CardImg top width="100%" height="100%" src={this.props.img} alt={"A picture of " + this.props.name}/>
				<CardBody>
				<CardTitle><h4>{this.props.name}</h4></CardTitle>
				<CardSubtitle className="mb-5">{this.props.jobTitle}</CardSubtitle>
				<div className="d-flex justify-content-between">
					<Button href={"https://github.com/" + this.props.githubid} target="_blank" className="py-1 px-3 github border-0"><img className="social-icon" src={Github} alt="github icon" /></Button>
					<Button href={"https://www.linkedin.com/in/" + this.props.githubid} target="_blank" className="py-1 px-3 linkedin border-0"><img src={LinkedIn} alt="LinkedIn icon" /></Button>
					<Button href={"https://twitter.com/" + this.props.githubid} target="_blank" className="py-1 px-3 twitter border-0"><img src={Twitter} alt="Twitter icon" /></Button>
				</div>
				</CardBody>
			</Card>
		</Col>
    )
  }
}

export default PersonSingle
