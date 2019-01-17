
//Right now, the kennel location information is JSX inside the Kennel component. The business wants to expand and open a new location.
//Your job is to make a new component named LocationList, and put the names and addresses of each location in that component's JSX.
//This is another example of Single Responsibility Principle.
//--Since we have multiple locations now, we should have a component whose sole responsibility is to render the location information.

import React, { Component } from 'react'

//Create two locations (you can use separate h3 elements if you like): Nashville North with a fictitious address, and Nashville South with a fictitious address.

export default class LocationList extends Component {
  render() {
      return (
          <article>
              <h1>Locations</h1>
              <h3>Nashville North</h3>
                <p>500 Puppy Way</p>
              <h3>Nashville South</h3>
                <p>101 Dalmation Ave</p>
          </article>
      );
  }
}

//Then put the LocationList component in the JSX for Kennel.