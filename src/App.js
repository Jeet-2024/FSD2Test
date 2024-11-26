import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage3 from './pages/SearchPage3';
import { Link } from 'react-router-dom';

const parent =document.getElementById('root');
const root = ReactDOM.createRoot(parent);



// let username;
// const Card=(username) => { return (
//           <div className="info-card">
//               <h4>Name: {username}</h4>
//               <h5>City: Delhi</h5>
//           </div>
// )};
// const Card=(props) => { return (
//   <div className="info-card">
//       <h4>Name: {props.name}</h4>
//       <h5>City: {props.city}</h5>
//   </div>
// )};
// object destructuring 
// const Card=(props) => { 
//   const { name, city }=props;
//   return (
//   <div className="info-card">
//       <h4>Name: {name}</h4>
//       <h5>City: {city}</h5>
//   </div>
// )};


const router = createBrowserRouter([
  {
      path: "/",
      element: <Homepage />,
  },
  {
      path: "/search",
      element: <SearchPage3 />,
  },
  {
    path: "/login",
    element: <Login/>,
}

]);

export default function App() {
   
  return (

    <div>
      {/* <h1>Hello from React </h1> */}
      {/* {Card("Jitendra chauhan")}
      {Card("Amit Chauhan")} */}

      {/* <Card name="Jitendra" city="Bhopal"/>; */}
      {/* <Homepage/> */}
      <RouterProvider router={router} />
      
    </div>
  )
}

