import React from 'react';
import fire from './../../config/fire'
import logo from './../../images/logo.png'
import {connect } from 'react-redux'
import {showModal} from './../../actions/rootActions'
import ModelContainer from '../modelContainer/ModelContainer';
const Dashboard=(props)=>{

    const logOut=()=>{
        fire.auth().signOut();
    }
    function  showModalHandler(){
      
      
       props.showModal();
        // debugger;
      
    }
    return(
        <>
      
        <nav className="navbar navbar-light bg-light ">
        <a className="navbar-brand" href="#">
          <img src={logo} width="110" height="50" className="d-inline-block align-top" alt="" loading="lazy"/>
        </a>
        <ul className="list-group list-group-horizontal list-unstyled ">
            <li className="item ">
                <a  className="navbar-brand" href="#"><button className="btn btn-primary">Dashboard</button></a>
            </li > 

            <li className="item ">
                <a  className="navbar-brand" href="#"><button className="btn btn-secondary">Help</button></a>
            </li >
            <li className="item ">
            <div  className="navbar-brand"><button className="btn btn-primary " onClick={()=>logOut()}>log out</button></div>
        </li >  
        </ul>  
    </nav>
    <hr/>
    <div className="" style={{display: "flex"}}>
        <div className="container bg-light col-md-2 col-4-sm" style={{float: "left"}}>
            <ul className=" list list-group list-unstyled">
                <br/>
                <li className="item">
                    <button type="button" className="btn btn-outline-primary btn-block">Recent Tweets</button>
                </li>
                <br/>
                <li className="item">
                    <button type="button" className="btn btn-outline-primary btn-block" onClick={()=>showModalHandler()}>Post Now</button>
                </li>
                <br/>
                <li className="item">
                    <button type="button" className="btn btn-outline-primary btn-block">Schedule</button>
                </li>
                <br/>
                <li className="item">
                    <button type="button" className="btn btn-outline-primary btn-block">Update Scheduled</button>
                </li>
                <br/>
                <li className="item">
                    <button type="button" className="btn btn-outline-primary btn-block">Delete</button>
                </li>
                <br/>
            </ul>
        </div>
        
        <div className=" first container ">
            <button type="button" className="btn btn-outline-secondary btn-lg btn-block shadow-lg ">What would like to share?</button>
             <br/>   
            <div style={{display: "flex"}}>
                    <h5>Today</h5>
            </div>
                <div >
                    <button type="button" className="btn btn-outline-success btn-lg btn-block shadow-lg ">What would like to share?</button>
                </div>
                <br/>
                <h5>Tomorrow</h5>
       
                 <div>
                    <button type="button" className="btn btn-outline-success btn-lg btn-block shadow-lg ">What would like to share?</button>
                </div>  
                <br/>     
                 <div>
                    <button type="button" className="btn btn-outline-success btn-lg btn-block shadow-lg ">What would like to share?</button>
                </div>
                
        </div>
        </div>
        <ModelContainer/>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
   
    showModal: (obj) => dispatch(showModal(obj)),
  

    
})


const mapStateToProps = state => ({
    modalState:state.modalState,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
// export default Dashboard;