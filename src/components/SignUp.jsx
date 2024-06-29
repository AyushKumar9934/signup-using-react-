import React, { useState } from 'react'
import  "./signup.css"
const SignUp = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPass,setConfirmPass]=useState("");
  const [validEmail,setEmailvalid]=useState(false);
  const [validpass,setvalidPass]=useState(false);
  const [validCPass,setvalidConfim]=useState(false);
  function checkEmail(){
   const isValid= String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    setEmailvalid(Boolean(isValid));
  }
  function checkpassword(password){
    const p=String(password).length>=8;
    setvalidPass(Boolean(p));
    
  }
  function checkconfirmPass(confirmPass){
   const c=password==confirmPass;
   setvalidConfim(Boolean(c));

  }
  function handleSubmit(e){
    e.preventDefault();
    if(validEmail==true && validCPass==true && validpass==true){
      alert("Form submitted successfully")

    }
    else{
      alert("Can't submit the form");
    }
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
    <div  className="main">
     <label htmlFor="email">Email:</label>
     <div className='inside-main'  style={{borderColor:"white"}}>
      <input id='email' value={email} onChange={(e)=>{setEmail(e.target.value); checkEmail()}}  style={{ borderColor: validEmail ? 'green' : 'red' }}/>
      
     </div>
     {
      validEmail==false?<p style={{color:"red"}}>invalid email formet</p>:""
     }
      <label htmlFor="password">Password:</label>
     <div className='inside-main' >
      <input id='password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value);checkpassword(e.target.value) }} style={{ borderColor: validpass ? 'green' : 'red' }} onBlur={()=>    {}}
      /> 
      
     </div>
     {
     validpass==false?<p style={{color:"red"}}>Password must be atleast 8 character</p>:""
     }
     <label htmlFor="confirmpass">Confirm Password:</label>
     <div className='inside-main' >
      <input id='confirmpass' type='password' value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value); checkconfirmPass(e.target.value);}} style={{ borderColor: validCPass? 'green' : 'red' }}/>
      
     </div>
     {
      validCPass==false?<p style={{color:"red"}}>Password do not match</p>:""
     }

    <div>
    <button type='submit' style={{backgroundColor:"#4166f5",color:"white", borderRadius:"0.5rem", borderWidth:"2px", borderColor:"#4166f5", borderStyle: "solid"}} className='btn' >Sign up </button>
     </div>
    


    </div>
    </form>
  )
}

export default SignUp