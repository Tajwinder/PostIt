import React, { useState } from 'react';
// import images
import Untitled from './../../images/landingPageImgs/Untitled.png'
import cardimg1 from './../../images/landingPageImgs/cardimg2.jpg'
import cardimg2 from './../../images/landingPageImgs/cardimg2.jpg'
import cardimg3 from './../../images/landingPageImgs/cardimg3.jpg'
import div1 from './../../images/landingPageImgs/div1.png'
import div2 from './../../images/landingPageImgs/div2.png'
import divimg from './../../images/landingPageImgs/divimg.png'
import engage from './../../images/landingPageImgs/engage.png'



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
    
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <a class="navbar-brand " href="#">
            <img src={Untitled} width="90" height="60" class="d-inline-block align-top" alt=""
                loading="lazy"/>
            <b style={{fontSize: "xx-large", textDecoration:"underline"}}>Post It!</b>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 n-links">
                <li class="nav-item item1 ">
                    <a class="nav-link" href="#" style={{fontSize: "large"}}>Customers <span
                            class="sr-only">(current)</span></a>

                </li>
                <li class="nav-item item1 ">
                    <a class="nav-link" href="#" style={{fontSize: "large"}}>Resources</a>

                </li>
                <li class="nav-item item1 ">
                    <a class="nav-link" href="#" style={{fontSize: "large"}} tabindex="-1"
                        aria-disabled="true">Products</a>

                </li>
                <li class="nav-item item1 ">
                    <a class="nav-link" href="#" style={{fontSize: "large"}}>About</a>

                </li>
            </ul>
            <form class="form-inline nav-item">
                <a href="login/Login-form.html"><button class="btn btn-outline-primary mr-3 btn-lg" onClick={()=>loginHandler()}>Login</button>
                </a>
                <a href="login/signup-form.html"> <button class="btn btn-primary btn-lg">Create an
                        account</button>
                </a>
    
            </form>
        </div>
        
    </nav>
    
    <div class="container-fluid cont shadow text-center" >
        <img src={div1} class="rounded float-right img-fluid" width="450" height="450"alt="..."/>
        <br/>
         <h1 id="title">Post It!</h1>
         <br/>
        <h2 ><b>Simpler social media tools for<br/> authentic engagement</b></h2>
        <br/>
        <h5 >Tell your brand’s story and grow your audience with a publishing, 
            analytics, and engagement platform you can trust.
       </h5>
       <br/>
       <a class="navbar-brand" href="login/signup-form.html"> <button class="btn btn-primary btn-lg">
           Get Started Now </button></a>
        <br/><br/><br/>
        <h6 style={{opacity: 0.7}}>In a world of clutter and mixed sentiment, does your brand stand out?
        </h6> 
        <br/>
    </div>
    <div class="container-fluid text-center cont2">
        <img src={divimg} class="rounded float-left img-fluid" width="350" height="300"alt="..."/>
        <h2 style={{paddingTop: 40}}>Visually plan and schedule your<br/> social media campaigns</h2> 
        <br/>
        <h5>Coordinate creative campaigns to drive engagement on social.Queue up thumb-stopping<br/> content across your social channels,
         and enjoy up-to-date tools</h5>
         <br/>
         <a href="#"><h6>Learn More</h6></a>
        
    </div>
        <div class="card-deck" >
            <div class="card col-md-4">
                <img src={cardimg2} class="card-img-top"height="200" alt="..."/>
                <div class="card-body" >
                  <h5 class="card-title">Our service</h5>
                  <p class="card-text">Behind a record-breaking social media capaign.</p>
                  <p class="small-text"><a href="#">Learn more</a></p>
                </div>
              </div>
            <div class="card col-md-4" >
              <img src={cardimg1} class="card-img-top" height="200" alt="..."/>
              <div class="card-body" >
                <h5 class="card-title">Twitter</h5>
                <p class="card-text">Best brands embracing mames on Twitter</p>
                <p class="small-text"><a href="#">Learn more</a></p>
              </div>
            </div>
            <div class="card col-md-4" >
                <img src={cardimg3} class="card-img-top"height="200"  alt="..."/>
                <div class="card-body" >
                  <h5 class="card-title">Social Media</h5>
                  <p class="card-text">Why social commerce will rule socail media in 2020</p>
                  <p class="small-text"><a href="#">Learn more</a></p>

                </div>
              </div>
        </div> 
        <div class="container-fluid  cont2 ">
            <img src={engage} class="rounded float-right img-fluid" width="350" height="300"alt="..."/>
            <h2 style={{paddingTop: 40}}>Build  and grow your brand on <br/> our platform easily</h2> 
            <br/>
            <h5>Engage with the most important comments faster and gain customer trust.<br/> Get in-depth insights to grow your reach,
                engagement, and sales.</h5>
             <br/>
             <a href="#"><h6>Learn More</h6></a>
        </div>  
        <div class="container-fluid text-center cont2 " id="cont3">
            <img src={div2} class="rounded float-left img-fluid" width="350" height="300"alt="..."/>
            <br/>
            <h1 style={{paddingTop: 80}}>"Post It!</h1> 
            <h2 >has made sharing our story and <br/>building our brand on social media so much easier."</h2> 
            <br/><br/>
             <h5>#feedback</h5>
        </div> 
        <div class="container-fluid bg-light ">
            <div class="table-responsive">
                <table class="table  table-borderless ">
                    <thead>
                      <tr>
                        <th scope="col"><h4>Products</h4></th>
                        <th scope="col"><h4>Company</h4></th>
                        <th scope="col"><h4>Support</h4></th>
                        <th scope="col"><h4>Free resources</h4></th>
                        <th scope="col"><h4>Transperancy</h4></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Publish</td>
                        <td>Customers </td>
                        <td>Help Center</td>
                        <td>Browse Extension</td>
                        <td>Culture Blog</td>
                      </tr>
                      <tr>
                        <td>Analyze</td>
                        <td>Community</td>
                        <td>Webinars</td>
                        <td>Resource Center </td>
                        <td>Revenue Dashboard</td>
                      </tr>
                      <tr>
                        <td>Pricing</td>
                        <td>Non Profits</td>
                        <td>Tweet @ Us</td>
                        <td>Content Library</td>
                        <td>Product Roadmap</td>
                      </tr>
                    </tbody>
                  </table>     
            </div>
                    
            <div class="footer">
                <img src={Untitled} class="rounded float-left img-fluid" width="50" height="50"alt="..."/>
                <h1 id="title1" class="float-left">Post It!</h1>
            </div>
                  
        </div> 
          
        
    </>
   )
      
}
export default LandingPage;