import React, { Component } from "react"

export default class LocationDetail extends Component {
  render() {
      /*
          Using the route parameter, find the location that the
          user clicked on by looking at the `this.props.locations`
          collection that was passed down from ApplicationViews
      */
      const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}
    //array.find --> given an array of locations, get the id from the URL and find the object with the same id --> returns a single object
      return (
          <section className="location">
              <div key={location.id} className="card">
                  <div className="card-body">
                      <h4 className="card-title">
                          {location.name}
                      </h4>
                      <h6 className="card-title">{location.name}</h6>
                  </div>
              </div>
          </section>
      )
  }
}