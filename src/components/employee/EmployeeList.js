import React, { Component } from 'react'

//whatever is being passed in is props
class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                    </div>
                )
            }
            </section>
            //.map is creating a bunch of divs
        )
    }
}

export default EmployeeList

//implementation of the component would look like this in vanilla JS:
/* const state = {
  locations = [
      {
          name: "Nashville North",
          address: "500 Puppy Way"
      },
      {
          name: "Nashville North",
          address: "576 Puppy Way"
      }
  ],
  employees = [
      {
          name: "Meg Ducharme"
      },
      {
          name: "Blaise Roberts"
      }
  ]
}

function printEmployee (employee) {
  return `<div id={employee.id}>
              {employee.name}
          </div>`
}

state.employees.forEach(employee =>
  document.querySelector(".employees").innerHTML += printEmployee(employee)
) */