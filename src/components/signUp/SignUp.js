import React from 'react'
import styles from './SignUp.module.css'
import fire from './../../config/fire'
import team from './../../images/signInPagaImgs/team.png'
import Untitled from './../../images/signInPagaImgs/Untitled.png'
const SignUp=()=>{

   const signUp=()=>{
       debugger;
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            alert("signed Up successfully")
        })
        .catch((err)=>{
            alert("Error :"+err)
        })
    } 
    return(
        <>
      <br/>
    <img src={Untitled} width="90" height="60" class="d-inline-block align-top" alt="" loading="lazy"/>
    <b id={styles.title}>Post It!</b>
            <br/><br/>
    <div class="container-fluid  align-middle">
        <div class={` container-fluid   float-left col-sm-auto rounded shadow-lg pt-3 mb-5 ${styles.cont}`}>
            <h2>Sign up</h2><br/>
            <div id={styles.form}>
            <div class="form-group" >
                  <label for="exampleInputEmail1">Working Email</label>
                  <input id="email" type="email" class="form-control"  aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1"> Create Password</label>
                  <input id="password" type="password" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1"> confirm Password</label>
                    <input type="password" class="form-control"  id="pass1" />
                  </div>
                <button type="submit" class="btn btn-block btn-primary" id="but" onClick={()=>signUp()}>Sign up</button>
                <div>
                    <br/>
                    <a href="login-form.html" class="text-muted">Already have an account?</a>
                </div>
            </div>
            <br/>
        </div>
        <div class={`container-fluid float-right col-sm-auto mt-lg-3 rounded ${styles.cont1}`}>    
        <img src={team}class="rounded align-middle  img-fluid" width="auto" height="auto"alt="..."/>
        </div>
    </div>
        </>
    )
}

export default SignUp;