import React, { Component } from 'react'
class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {animal.name}
                    </div>
                )
            }
            </section>
           /*  <section className="owners">
            {
                this.props.owners.map(owner =>
                  <div key={owner.id}>
                      {owner.name}
                  </div>
                  )
            }
            </section> */
        )
    }
}

export default AnimalList