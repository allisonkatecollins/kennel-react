//1. form
//2. enter values
//3. submit form - POST in AnimalManager
//when the URL is animal/form, AnimalForm will be rendered

//2 event listeners: onChange (on every field) and onClick
//onChange --> update state

import React, { Component } from "react"
import "./Animal.css"
export default class AnimalForm extends Component {
    // Set initial state
    state = {
        animalName: "",
        breed: "",
        employee: ""
    }

    // Update state whenever an input field is edited
    //--this is possible by having each input field's id property named exactly as each state property
    
    //this creates a process that allows us to create new data (the new animal)
    //--new data is based on current state of the component
    
    //we are not pulling data directly from the form inputs and saving that to the db
    //React makes sure that all data changes flow through state like this
    //--the UI and state stay in sync
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */

    //3 properties in state: animalName, breed, and employee
    //--3 directly corresponding input fields
    constructNewAnimal = evt => {
      //evt.preventDefault: prevents form from redirecting away from the page (since it's a single page app)
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            }

            // Create the animal and redirect user to animal list
            this.props.addAnimal(animal).then(() => this.props.history.push("/animals"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               //id here is exactly the same as in state
                               id="animalName"
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="breed" placeholder="Breed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}