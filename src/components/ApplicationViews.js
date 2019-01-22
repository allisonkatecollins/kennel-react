import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owners/OwnerDetail'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"
export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: []
    }

    deleteAnimal = id => {
      return fetch(`http://localhost:5002/animals/${id}`, {
          method: "DELETE"
      })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json())
      .then(animals => this.setState({
          animals: animals
      })
    )
  }

    fireEmployee = id => {
      return fetch(`http://localhost:5002/employees/${id}`, {
          method: "DELETE"
      })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/employees`))
      .then(e => e.json())
      .then(employees => this.setState({
          employees: employees
      })
    )
  }

    deleteOwner = id => {
      return fetch(`http://localhost:5002/owners/${id}`, {
          method: "DELETE"
      })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/owners`))
      .then(e => e.json())
      .then(owners => this.setState({
          owners: owners
      })
    )
  }

    //"r" is just short for "response" - you can name it what you want
    //componentDidMount must be named that
    componentDidMount() {
      AnimalManager.getAll().then(allAnimals => {
        this.setState({
            animals: allAnimals
        })
      })
      EmployeeManager.getAll().then(allEmployees => {
        this.setState({
            employees: allEmployees
        })
      })
      LocationManager.getAll().then(allLocations => {
        this.setState({
            locations: allLocations
        })
      })
      OwnerManager.getAll().then(allOwners => {
        this.setState({
            owners: allOwners
        })
      })
    }

    //Add the get() and all() methods to each one, changing the URL path in each one to get the corresponding resource type
    //Then refactor the ApplicationViews component to import all of them and use all of them when querying your data.

    //only JSX in document is within return below
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                  return <LocationList locations={this.state.locations} />
                }} />
                {/*  "..." is a spread operator */}
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                  return <LocationDetail {...props} locations={this.state.locations} />
                }} />
                <Route exact path="/employees" render={(props) => {
                  return <EmployeeList employees={this.state.employees} />
                }} />
                 <Route path="/employees/:employeeId(\d+)" render={(props) => {
                  return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees}/>
                }} />
                <Route exact path="/owners" render={(props) => {
                  return <OwnerList owners={this.state.owners} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                  return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
                <Route exact path="/animals" render={(props) => {
                  return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                  return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
            </React.Fragment>
        )
    }
}