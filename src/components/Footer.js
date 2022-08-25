import React from 'react'
import './assets/css/Footer.css'
// import { Link } from "react-router-dom";

function Footer() {
  return (
 
      <>
       <div className="mt-5">
            
            <div className="card" >
                <div className="row mb-4 ">
                    
                    <div className="col-md-4 col-sm-11 col-xs-11 my-3">
                        <div className="footer-text pull-left">
                             <div className="d-flex">
                                 
                                 <h2 style={{color: 'white'}}>WakeWithWellness</h2>
                             </div>
                             <p>
                Assam, India<br></br><br></br>
                <strong>Phone:</strong><a href="tel: 6385334226">+91-6385334226</a> <br></br>
                <strong>Email: </strong><a  style={{fontWeight: "normal"}} href="mailto:wakewithwellness@gmail.com">wakewithwellness@gmail.com</a> <br></br>
              </p>
                             <div className="social mt-2 mb-3 ">

                                <i className="fa fa-facebook-official fa-lg" href=""></i>
                                <i className="fa fa-instagram fa-lg" href="https://instagram.com/wakewithwellness?utm_medium=copy_link"></i>
                                <i className="fa fa-twitter fa-lg" href="https://twitter.com/wakewwellness?s=08"></i>
                                <i className="fa fa-linkedin-square fa-lg" href="https://www.linkedin.com/company/wake-with-wellness"></i>
                                <i className="fa fa-facebook" href=""></i>

                             </div>
                         
                         </div>
                    </div>
                    
                    
                 
                    
                    <div className="col-md-2 col-sm-4 col-xs-4 my-3">
                 
                        <h5 className="heading">Departments</h5>
                        <ul >
                            <li>Curation</li>
                            <li>Editorial</li>
                            <li>Social Media Marketing </li>
                            <li>Events</li>
                            <li>Public Relations</li>
                            <li>Design & Media</li>
                         
                        </ul>
                 
                    </div>
                 
                 
                    <div className="col-md-2 col-sm-4 col-xs-4 my-3" >
                 
                        <h5 className="heading">Informations</h5>
                        <ul className="card-text">
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Contact Us</li>
                            <li>Blogs</li>
                        </ul>
                 
                    </div>

                 
                     <div className="col col-sm-4 col-xs-4 my-3">

                        <h5 className="heading">For collaboration related queries:</h5>
                        <p>Taposhree Baruah (Public Relations Head, WakeWithWellness)
              <br></br>
                <strong>Email: </strong><a  style={{fontWeight: "normal"}} href="mailto:taposhreebaruah@gmail.com">taposhreebaruah@gmail.com</a> <br></br>
           
              </p>

        

                     </div>

                </div>
                
                
                <div className="divider mb-4" >   
                </div>
    
               
                <div className="row" style={{fontSize: '10px'}}>
                
                <div className="col-md-6 col-sm-6 col-xs-6">
                    
                    <div className="pull-left">
                        
                        <p><i className="fa fa-copyright"></i> 2020 wakewithwellness.in</p>
                        <a style={{color: 'white'}} href="https://wedigtech.netlify.app/"><span style={{color: 'grey'}}>Developed by:</span> WeDig<span style={{color: '#f7cf1b'}}>Tech</span></a>
                        
                    </div>
                    
                </div>
                
                

                <div className="col-md-6 col-sm-6 col-xs-6">
                   
                   
                    <div className="pull-right mr-4 d-flex policy">
                        
                       <div>Terms of Use</div>
                       <div>Privacy Policy</div>
                       <div>Cookie Policy</div>
                        
                    </div>
                    
                    
                    
                </div>
                 
                 
                 
             </div>
            </div>
            
        </div>




</>
 
  )
}

export default Footer
