
  
import React, { useState } from 'react'
import styles from './Login.module.css'
import fire from './../../config/fire'
import bg from './../../images/bg3.jpg'
import SignUp from '../signUp/SignUp'
import team from './../../images/signInPagaImgs/team.png'
import Untitled from './../../images/signInPagaImgs/Untitled.png'
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
          
           alert("loggedIn hello")

       }).catch((err)=>{
           alert(err);
       })

   }
    return signUp?<SignUp/>: (
        <>
       <br/>
       <img src={Untitled} width="90" height="60" class="d-inline-block align-top" alt="" loading="lazy"/>
    <b id="title">Post It!</b>
            <br/><br/>
    <div className="container-fluid  align-middle">
        <div className={` container-fluid  float-left col-sm-auto rounded shadow-lg pt-3 mb-5 ${styles.cont}`}>
            <h2>Log In</h2><br/>
            <div id={styles.form }>
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
      
      </tr>
    </tbody>
  </table>
        </div>
            <br/>
        </div>
        <div className={` container-fluid   float-right col-sm-auto rounded  ${styles.cont1} `}>    
        <img src={team} className="rounded align-middle  img-fluid" width="auto" height="auto"alt="..."/>
        </div>
    </div> 
    
       
           
        </>
    )
}

export default Login;

//tested one

//  <div className={styles.wrapper}>

//   <button type="button" className="close" aria-label="Close"  style={{color:"red"}}>
// <span aria-hidden="true">&times;</span>
// </button>
// <div className={`col-sm-8 col-md-4 col-12  col-sm-auto shadow-lg  bg-white rounded ${styles.loginForm}`}>


// <div className="form-group" >
//    <label for="exampleInputEmail1">Email address</label>
//    <input type="email" className="form-control"  id="email" aria-describedby="emailHelp"/>
// </div>
// <div className="form-group">
//    <label for="exampleInputPassword1">Password</label>
//    <input type="password" className="form-control"  id="password"/>
//  </div>
//  <div className="form-group form-check">
//    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//    <label className="form-check-label" for="exampleCheck1">Remember me</label>
//  </div>
//  <div id="err" ></div>
//  <button type="submit" className="btn btn-block btn-primary" id="but" onClick={()=>login()}>Log In</button>
//  <table className="table">
//    <tbody>
//      <tr>
//        <td scope="row"></td>
//        <td id={styles.createAccount} onClick={()=>signUpHandler()}>Create an account? </td>
      
//      </tr>
//    </tbody>
//  </table>

// </div>

// </div> 


//form divs

{/* <div className="form-group">
                    <label for="exampleInputEmail1" >Email address</label>
                    <input id="email" type="email" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input id="password" type="password" className="form-control"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-block btn-primary" id="but" onClick={()=>login()}>Log In</button>
                <table className="table">
                    <tbody>
                        <tr>
                            <td scope="row"></td>
                            <td><a href="signup-form.html" className="text-muted">Create an account?</a></td>
                            <td><a className="text-muted  " href="forgot-password.html">Forgot password?</a> </td>
                        </tr>
                    </tbody>
                </table>
             */}