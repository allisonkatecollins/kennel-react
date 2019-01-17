This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Practice

Right now, the kennel location information is JSX inside the **`Kennel`** component. The business wants to expand and open a new location. Your job is to make a new component named **`LocationList`**, and put the names and addresses of each location in that component's JSX.

This is another example of Single Responsibility Principle. Since we have multiple locations now, we should have a component whose sole responsibility is to render the location information.

Create two locations (you can use separate `section` elements if you like): **Nashville North** with a fictitious address, and **Nashville South** with a fictitious address.

Then put the **`LocationList`** component in the JSX for **`Kennel`**.

## Practice Exercise - Displaying Locations

Update your application so that the array of locations is passed from the **`Kennel`** state to the props of **`LocationList`**. Then use the `map()` method to display all location names.

## Practice Exercise - Displaying Animals

Now that you are passing state from the **`Kennel`** to the **`EmployeeList`** and **`LocationList`**, you're going to list animals now.

1. Create a new array in state in the **`Kennel`** component named `animals`. It will look just like the locations and employees arrays in state. Make sure each animal has an `id` property.
2. Create an **`AnimalList`** component for displaying animals.
3. Update **`Kennel`** to pass its `animals` state to **`AnimalList`** and use the appropriate key on `this.props` to display all animal names.

## Challenge: Animal Owners

> Remember, challenges are completely optional and should not be attempted until you have done the practice exercises and understand the basic concepts of them.

1. Add the following `owners` property to the **`Kennel`** state.
    ```js
    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }
    ```
1. You create the intersection table and assign each animal to an owner.

Your task is to update the **`AnimalList`** component to also display the name of the animal's owner(s). Keep in mind that the animal may have more than one owner. You'll need to pass multiple collections - not just `animals` - to the component in order to accomplish this.
