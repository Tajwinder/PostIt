import React, { useState } from 'react'
import styles from './Login.module.css'
import fire from './../../config/fire'
import bg from './../../images/bg3.jpg'
import SignUp from '../signUp/SignUp'
const Login=()=>{

  const [signUp,goSignUp]=useState(false)
const signUpHandler=()=>{
goSignUp(true);
}
  const login=()=> {
       const email=document.getElementById('email').value;
       const password=document.getElementById('password').value;
       
// alert(email)
       fire.auth().signInWithEmailAndPassword(email,password)
       .then((u)=>{
          
           

       }).catch((err)=>{
           alert(err);
       })

   }
    return signUp?<SignUp/>: (
        <>
       
         <div className={styles.wrapper}>
           {/* <div className={styles.innerWrapper}> */}
           {/* <div className={styles.outerContainer} > */}
             <button type="button" class="close" aria-label="Close"  style={{color:"red"}}>
        <span aria-hidden="true">&times;</span>
        </button>
         <div className={`col-sm-8 col-md-4 col-12  col-sm-auto shadow-lg  bg-white rounded ${styles.loginForm}`}>
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
            <button type="submit" className="btn btn-block btn-primary" id="but" onClick={()=>login()}>Log In</button>
            <table className="table">
              <tbody>
                <tr>
                  <td scope="row"></td>
                  <td id={styles.createAccount} onClick={()=>signUpHandler()}>Create an account? </td>
                  {/* <td>Forgot password? </td> */}
                </tr>
              </tbody>
            </table>
       
        </div>
        {/* </div> */}
        </div>
           
        </>
    )
}

export default Login;