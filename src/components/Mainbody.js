import React from 'react'
// import { Link } from 'react-router-dom'
import '../App.css'
import { useState } from 'react';
import Q1 from '../pages/Q1';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Mainbody() {
const [name, setName] = useState("Jitendra");
const navigate=useNavigate(true);
function Quizstart(){
alert("Quizstart");
// navigate('/Q1');
}
function handleNameChange(event) {

  console.log('Name Changed:', event.target.name);
// alert("Name Changed");
}


  return (
    <div className='log'>

      <h1>ABES Quiz Platform</h1><br /><br />
      <h4>Contestant Name:</h4><br />
      <form action=""><input type="text" name="name" placeholder="Please Enter your name"  id="uname"  onChange={handleNameChange} required /><br />
        <input type="submit" value="StartQuiz" id="submit"  onClick={Quizstart}/>
      </form>
      {/* <h1>Please<Link to="/login">      Login</Link></h1> */}
      {/* <h1><Link to="/search">Search</Link></h1> */}
    </div>
  )
}
