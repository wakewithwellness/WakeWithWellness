import React from 'react'
import logo from './assets/image/logoonly.png'
import { Link } from "react-router-dom";
import '../App.css'





function Navbar() {

 

  return (

<>
    <a class="close-navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
 </a>
<nav id="headingnav" class="container-fluid navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgb(0,0,0,0.8)', maxWidth: '180vh'}}>
 
  <Link className="navbar-brand" to="/"><img src={logo} style={{width: '23vh', height: 'auto'}} alt="" /></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    <li className="nav-item active">
           <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
         </li>
       
      
    

         <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Team
         </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           <Link style={{color: "black", fontFamily: "Helvetica"}} className="dropdown-item" to="/team">Board</Link>
           <Link style={{color: "black", fontFamily: "Helvetica"}} className="dropdown-item" to="/members">Team</Link>
         </div>
       </li>


         <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Gallery
         </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link style={{color: "black", fontFamily: "Helvetica"}} className="dropdown-item" to="/gallery">Photos</Link>
          <Link style={{color: "black", fontFamily: "Helvetica"}} className="dropdown-item" to="/videos">Videos</Link>
        </div>
      </li>


        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link" >About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>


        <li className="nav-item">
        <a className="nav-link" style={{color: 'red', fontWeight: '800'}} href="https://portal.wakewithwellness.in/"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</a>
        </li>
    </ul>
  </div>
</nav></>







   
  )
}

export default Navbar
