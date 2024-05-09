import React, { useState } from "react" ;
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function LoginSignup() {
   const [action, setAction]= useState("Sign Up")
   const handleChange1 = e => {
      setAction("Sign Up")
  }
  const handleChange2 = e => {
   setAction("Login")
}
    return(
      <div>
         <div class="bg"></div>
        <div class="bg bg2"></div>
          <div class="bg bg3"></div>
            <div className="Container1">
              
            </div>
         <div className="container">
            <div className="header">
            <div className="text"> {action}</div>
            <div className="underline"></div>
            </div>
             <div className="inputs">
               {action === "Login"? <div></div>:
               <div className="input">
               <img src={user_icon} alt="" />
               <input type="text" placeholder="name" />
            </div> }
             
             <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="email id" />
             </div>
             <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="password" />
             </div>
             </div>
             {action === "Sign Up"?<div></div>:<div className="forgot-paswword" >Lost Password? <span>Click here</span>  
             </div> }
          
            
             <div className="submit-container">
               <div className={action === "Login"?"submit gray": "submit"} onClick={handleChange1}>Sign up</div>
               <div className={action === "Sign Up"?"submit gray": "submit"}onClick={handleChange2}>Login</div>
             </div>
            {// <p><a href="www.linkedin.com/in/william-lowe-b7a8a2241">to view my Linkedln profile <span>Click here </span> </a></p>
            }
            </div>
            </div>
          
    )
    
}
export default LoginSignup