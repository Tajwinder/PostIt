import React from 'react'
import styles from './SignUp.module.css'
import fire from './../../config/fire'
const SignUp=()=>{

   const signUp=()=>{
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            alert("signed Up successfully")
        })
        .catch((err)=>{
            alert("Error :"+err )
        })
    }
    return(
        <>
        <div className={styles.wrapper}>
         <div className={`col-md-4 col-sm-auto shadow-lg  bg-white rounded ${styles.signUpForm}`}>
         {/* <form id="form"> */}
         <div className="form-group" >
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control"  id="email" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control"  id="password"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <div id="err" ></div>
            <button type="submit" className="btn btn-block btn-primary" id="but" onClick={()=>signUp()}>sign up</button>
            
        {/* </form> */}
        </div>
         {/* <div>Email</div>
            <input id='email' placeholder="enter you email"></input>
            <div>Password</div>
            <input id='password' placeholder='enter your password'></input>
            
            <button id='login' onClick={()=>login()}>login</button>
            <button id='signUp' >sign up</button>
           */}
           </div>
        </>
    )
}

export default SignUp;