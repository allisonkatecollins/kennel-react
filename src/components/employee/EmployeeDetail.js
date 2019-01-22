import React, { Component } from "react"

export default class EmployeeDetail extends Component {
  render() {
      /*
          Using the route parameter, find the employee that the
          user clicked on by looking at the `this.props.employees`
          collection that was passed down from ApplicationViews
      */
      const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}
    //array.find --> given an array of employees, get the id from the URL and find the object with the same id --> returns a single object
      return (
          <section className="employee">
              <div key={employee.id} className="card">
                  <div className="card-body">
                      <h4 className="card-title">
                          {employee.name}
                      </h4>
                      <h6 className="card-title">{employee.name}</h6>
                      <a href="#"
                          onClick={() => this.props.fireEmployee(employee.id)
                                          .then(() => this.props.history.push("/employees"))}
                          className="card-link">Fire</a>
                  </div>
              </div>
          </section>
      )
  }
}