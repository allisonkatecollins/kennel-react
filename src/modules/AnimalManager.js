//Rather than hard-coding API calls in your React component of ApplicationViews, you are going to create a JavaScript module that contains all of the API calls
//What this provide for you is flexibility.

//Other components, in the future, may likely need to ability to make their own API calls
//You're going to eliminate that possible future duplication of code by making a module whose sole responsibility is to interact with the API.

//contains all fetch calls
//make call to API in ApplicationViews
//addAnimal() executes from ApplicationViews to set the state
//--> doesn't get run until button in AnimalForm is pressed
//ApplicationViews renders AnimalList and AnimalForm

const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  },
  //post method implements a fetch() for adding a new animal object to the API
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  }
}