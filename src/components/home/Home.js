import React, { useState,useEffect } from 'react'
import fire from '../../config/fire'
// import backGround from './../../images/land1.jpg'
import logo from './../../images/logo.png'
import styles from './Home.module.css'
import Dashboard from '../dashboard/Dashboard'


const  Home=(props)=>{

const [user,setUser]=useState('')
const [dashboard,showDashboard]=useState(false)

const goToDashboard=()=>{
showDashboard(true)
}
    useEffect(() => {
       let user=props.email.split("@")[0][0].toUpperCase();
setUser(user);
       console.log(user);
       
  
        return () => {
            
        }
    }, [props.email])
    
    const logOut=()=>{
      debugger;
        fire.auth().signOut();
    }
    return dashboard?<Dashboard/>:(
        <>
          <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="110" height="50" className="d-inline-block align-top" alt="" loading="lazy"/>
        </a>
        <ul className="list-group list-group-horizontal list-unstyled ">
        <li className="item ">
            <div  className="navbar-brand"><button className="btn btn-primary " onClick={()=>logOut()}>log out</button></div>
        </li >  
        <li> <div id={styles.user}>{user}</div></li>    
        </ul>
      </nav>
        
       
       
       
        <div id={styles.login}>
       
        <div style={{textAlign:"center"}}>Let's get your account set up!</div>
       <div id={styles.connect} onClick={()=>goToDashboard()}>Sign-in with twitter</div>
       </div> 
     
       </>
    )
}
export default Home;