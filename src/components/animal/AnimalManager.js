//contains all fetch calls
//make call to API in ApplicationViews
//addAnimal() executes from ApplicationViews to set the state
//--> doesn't get run until button in AnimalForm is pressed

const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  }
}