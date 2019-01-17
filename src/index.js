import ReactDOM from 'react-dom';
import React from 'react';
import Kennel from "./components/location/Kennel";
//don't need to import EmployeeList because it's been imported to Kennel.js
//--i.e. EmployeeList is a child of Kennel.js


//(component to render, place to render it)
ReactDOM.render(<Kennel />, document.querySelector("#root"));
//Kennel is effectively the entire app