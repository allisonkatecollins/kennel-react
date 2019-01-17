import React, { Component } from 'react'
import EmployeeList from "../employee/EmployeeList"  // Import EmployeeList component
import LocationList from "../location/LocationList"

//note "export default" - index.js imports it
export default class Kennel extends Component {
    render() {
        return (
            <div>
                {/*we are now rendering the child component, employee list, inside of the parent component, Kennel*/}
                <EmployeeList />
                <LocationList />
            </div>
        );
    }
}