import React, { useState, useEffect } from 'react';
import fire from './config/fire'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// C:\Users\ASUS\Desktop\capstone-prototype\node_modules\bootstrap\dist\css\bootstrap.min.css
import './App.css';
// import Login from './components/login/Login'
// import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import  LandingPage  from './components/landingPage/LandingPage';
// import SignUP from './components/signUp/SignUp';
import Home from './components/home/Home'
import LandingPage from './components/landingPage/LandingPage';
function App() {
  const [email,setEmail]=useState('');
  const [user,setUser] =useState(false)
      const authListner=()=>{
          fire.auth().onAuthStateChanged((user)=>{
          if(user){
            console.log("userdetils")
            console.log(user.email)
            setEmail(user.email)
              setUser(true)
              
          }
          else{
              setUser(false)
          }
          }
          )
      }
  
      useEffect(() => {
          authListner();
          return () => {
          
          }
      }, [])
  
       
  return user?<Home email={email}/>:(
    // <BrowserRouter>
     <div className="App">
     <LandingPage/>
     {/* <Switch>
      <Route path='/'exact component={LandingPage}/>
      <Route path='/in' component={Login}/>
      <Route path='/signUp'component={SignUP}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch> */}
     </div>
   
    // </BrowserRouter>
   
    
  );
}

export default App;
// 