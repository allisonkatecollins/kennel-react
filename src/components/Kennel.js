import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import "./Kennel.css"

//4 properties: 2 arrays, 1 object, 1 function
class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    //establishing 2 properties in state and where to find them
    //--i.e. property "employees" is found in the array employeesFromAPI
    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
            </article>
        )
        //If you remove employees={this.state.employees}, it can’t be passed down as props to the child component
        //it will simply live in state in the Kennel component, but the data will never reach a child component
    }
}

export default Kennel

//Kennel.js passes employeesFromAPI to EmployeeList.js and locationsFromAPI to LocationList.js