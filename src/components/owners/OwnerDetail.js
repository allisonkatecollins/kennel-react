import React, { Component } from "react"

export default class OwnerDetail extends Component {
  render() {
      /*
          Using the route parameter, find the owner that the
          user clicked on by looking at the `this.props.owners`
          collection that was passed down from ApplicationViews
      */
      const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}
    //array.find --> given an array of owners, get the id from the URL and find the object with the same id --> returns a single object
      return (
          <section className="owner">
              <div key={owner.id} className="card">
                  <div className="card-body">
                      <h4 className="card-title">
                          {owner.name}
                      </h4>
                      <h6 className="card-title">{owner.breed}</h6>
                      <a href="#"
                          onClick={() => this.props.deleteowner(owner.id)
                                          .then(() => this.props.history.push("/owners"))}
                          className="card-link">Delete</a>
                  </div>
              </div>
          </section>
      )
  }
}