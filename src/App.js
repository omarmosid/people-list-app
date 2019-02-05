import React, { Component } from 'react';
import Persons from './components/Persons/Persons.js'
import ModalForm from './components/ModalForm/ModalForm.js';

import { Container, Row } from 'reactstrap';
import './App.css'

class App extends Component {

  state = {
    nameInput: 'nameInput',
    jobInput: 'jobInput',
    imgInput: 'https://d3iw72m71ie81c.cloudfront.net/male-21.jpg',
    githubInput: 'githubInput',
    linkedinInput: 'linkedinInput',
    twitterInput: 'twitterInput',
    persons: [
      {
        name: "Omar Mohammad",
        jobTitle: "Full Stack Dev",
        img: "https://d3iw72m71ie81c.cloudfront.net/male-76.jpg",
        githubid: "omar110894",
        linkedinid: "omar1108",
        twitterid: "omarmosid"
      }, {
        name: "Pranjal Rawat",
        jobTitle: "Data Scientist",
        img: "https://d3iw72m71ie81c.cloudfront.net/male-2.jpg",
        githubid: "rawatPranjal",
        linkedinid: "rawatPranjal",
        twitterid: "rawatPranjal"
      }, {
        name: "Abhijay Vuyyuu",
        jobTitle: "Data Scientist",
        img: "https://d3iw72m71ie81c.cloudfront.net/male-23.jpg",
        githubid: "bjdj",
        linkedinid: "bjdj",
        twitterid: "bjdj"
      }, {
        name: "Abhijay Vuyyuu",
        jobTitle: "Data Scientist",
        img: "https://d3iw72m71ie81c.cloudfront.net/male-13.jpg",
        githubid: "bjdj",
        linkedinid: "bjdj",
        twitterid: "bjdj"
      },
    ],
    modal: false,
  }

  handToggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

  handleChange = (e) => {
    console.log(e.target.name + " " + e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleAdd = () => {
    // create new object
    const newPersonAddition = {
      name: this.state.nameInput,
      jobTitle: this.state.jobInput,
      img: this.state.imgInput,
      githubid: this.state.githubInput,
      linkedinid: this.state.linkedinInput,
      twitterid: this.state.twitterInput
    }
    // make a copy of persons array
    const copyOfPersonsArray = this.state.persons;
    // append to persons array
    const updatedPersons = [...copyOfPersonsArray, newPersonAddition]
    // update state with new persons array
    this.setState({
      persons: updatedPersons,
      modal: !this.state.modal
    })
    console.log("Added!");
  }

  //recieve the person object being clicked by using Bind
  // handleDelete.bind(this, personObjectBeingClicked)
  // note here, personObjectBeingClicked = this.props.person
  //This is called Function currying - Creating a copy of the function with default parameters

  handleDelete = (personToBeDeleted) => {
    console.log(personToBeDeleted);
    console.log(this.state.persons);
    const filtered = this.state.persons.filter((person) => {
      return person !== personToBeDeleted;
    })
    this.setState({persons: filtered});
  }

  render() {
    return (
      <>
        <Container fluid={true}>
          <Row>
            <div className="hero">
              <h2 className="text-center">People List App!</h2>
            </div>
          </Row>
        </Container>
        <Container>
          <Row className="d-flex justify-content-center py-4">
            <ModalForm
              modal={this.state.modal}
              toggle={this.handToggle}
              nameInput={this.state.nameInput}
              jobInput={this.state.jobInput}
              imgInput={this.state.imgInput}
              githubInput={this.state.githubInput}
              linkedinInput={this.state.linkedinInput}
              twitterInput={this.state.twitterInput}
              handleChange={this.handleChange}
              handleAdd={this.handleAdd}
            />
          </Row>
          <Row>
            <Persons 
              persons={this.state.persons}
              handleDelete={this.handleDelete}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
