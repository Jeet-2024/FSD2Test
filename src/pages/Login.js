import React from 'react'
import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Searchpage from './Searchpage'
export default function Login() {

const [username,setusername]=useState("admin");
const [email,setemail]=useState("jeet@gmail.com");
const [passwd,setpasswd]=useState("1234");

const handleNameChange = (event) => {
  // setusername(event.target.value);

  if(username===event.target.value) 
    alert("Username already exists");
};

const handleEmailChange = (event) => {
  // setemail(event.target.value);
  if(email===event.target.value)
  alert("email already exists");
};
const handlePasswdChange = (event) => {
  // setemail(event.target.value);
  if(passwd===event.target.value)
  alert("passwd already exists");
};

function myChecker(event){
console.log();
  // e.preventDefault();
  // mySubmit(e);
  alert("Form Submitted");
  return false;  // to prevent form from submitting and reloading the page  // this is for form submission using form action
 // return true;  // to allow form submission and reloading the page  // this is for form submission using form action with normal submit button


}
  
  function myFunction() {
    // console.log(e);
    var x = document.getElementById("psw");
         if (x.type === "password") {
              x.type = "text";
          } else {
        x.type = "password";
       }
                      }
  return (
    <div className='form'>
      <h2>Login Form</h2>
      <div className="child">
        
        <form action="" onSubmit={myChecker}>
            <label htmlFor="uname">Username:</label><br/>
            <input type="text" id="uname" name="uname" placeholder='username' onChange={handleNameChange}/><br/>
            <label htmlFor="">Email:</label><br />
            <input type="text" id="email" name="Email"  placeholder='email' onChange={handleEmailChange}/><br />
            <label htmlFor="psw">Password:</label><br/>
            <input type="password" id="psw" name="psw" placeholder='password' onChange={handlePasswdChange}/><br/>
            <input type="button"  onClick={myFunction}  value="ShowPassword" /><br /><br />

            <input type="submit"  value="Login" />
        </form>

        
        </div>
      
    </div>
  )
}
