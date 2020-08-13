import React, { useState } from 'react';
import logo from './../../images/logo.png'
import {NavLink} from 'react-router-dom'
import backGround from './../../images/landingPageImg.jpg'
import './LandingPage.css'
import Login from '../login/Login';
 const LandingPage=()=>{

  const [login,goLogin]=useState(false);
 const loginHandler=()=>{
goLogin(true)
}
   return login?<Login/>:(
    <>
    <div classNae="landingPage">
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="110" height="50" className="d-inline-block align-top" alt="" loading="lazy"/>
        </a>
        <ul className="list-group list-group-horizontal list-unstyled ">
        <li className="item ">
            <div  className="navbar-brand"><button className="btn btn-primary " onClick={()=>loginHandler()}>login</button></div>
        </li >  
        <li><a className="navbar-brand" > <button className="btn btn-primary" >Create an account</button></a></li>    
        </ul>
      </nav>
      <div className='mainDiv' >
          <img style={{width:"50%"}}  className="img-fluid" id="banner1" src={backGround} alt=" back1" srcset=""/>
          <div className=" containe text col-md-6 col-sm-auto shadow-lg  bg-rounded">
              <p className="text-centre">
              <h1 style={{ textAlign:"center",textDecoration:"underLine"}}><b>Post It!</b></h1>
                <p>Perfect media with perfect Partner , we!!</p> 
                </p>
          </div>
        </div>
        </div>
        </>
   )
      
}
export default LandingPage;