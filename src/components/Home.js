import React, { useState } from "react";
import "./assets/css/Home.css"
import "../App.css"
import { Link } from "react-router-dom";
import GoToTop from '../GoToTop'
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";


import sofy from './assets/image/sofy.png'
import netecon from './assets/image/niteco.png'
import progoty from './assets/image/progoty.png'
import helping from './assets/image/helpinghands.jpg'
import serving from './assets/image/servinghappiness.png'
import about from './assets/image/about.png'





function refreshPage() {
  window.location.reload();
}


function Home() {

  const [fname, setFname] = useState(null);
    const [contact,setContact] = useState(null);
    const [altphone,setAltPhone] = useState(null);
    const [bloodgp,setBloodgp] = useState(null);
    const [hospital,setHospital] = useState(null);
    const [place,setPlace] = useState(null);
    const [required,setRequired] = useState(null);
    const [loaderr, setLoaderr] = useState(false);
    const [statuss, setStatuss] = useState(undefined);
  
  
    const handleBloodRequestChange = (e) => {
      const {id , value} = e.target;
      if(id === "fname"){
          setFname(value);
      }
  
  
      if(id === "contact"){
        setContact(value);
      }
  
      if(id === "Aphone"){
        setAltPhone(value);
      }
  
      if(id === "bloodgp"){
        setBloodgp(value);
      }
  
      if(id === "hospital"){
        setHospital(value);
      }
  
      if(id === "place"){
        setPlace(value);
      }
  
      if(id === "required"){
        setRequired(value);
      }
   
   
  }
  
  const handleBloodRequest = (e) => {
      e.preventDefault();
      setLoaderr(true);
      let obj = {
        fname : fname,
        contact:contact,
        altphone:altphone,
        bloodgp:bloodgp,
        hospital:hospital,
        place:place,
        required:required
       
    }       
        const newPostKey = push(child(ref(database), 'Bloodrequest')).key;
        const updates = {};
        updates['Bloodrequest/' + newPostKey] = obj
        return update(ref(database), updates)
        .then(() => {
             setLoaderr(false);
             setStatuss({ type: 'success' });
             setFname("");
             setContact("");
             setAltPhone("");
             setBloodgp("");
             setHospital("");
             setPlace("");
             setRequired("")
  
         
           })
           .catch((error) => {
             setLoaderr(false);
             setStatuss({ type: 'error', error });
           });
  
      
        }  

  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
      } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
      } else if (val > 24.9 && val < 30) {
      setInfo("Overweight"); 
      } else if (val > 30){
      setInfo("Obese");
      }
      else {
      setInfo("Under Weight");
 }
  };




  
  return (
    <> <GoToTop />
    <div>
       <section id="hero" className="d-flex align-items-center justify-content-center" >
    <div className="container" style={{marginBottom: '30px'}}>

      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
         
          <h1>WakeWithWellness</h1>
          <h2>We Are People Caring For People</h2>
          {/* <img src={unlogo} alt="" style={{width: '15vh', height: 'auto'}}/> */}
        </div>
      </div>

      <div className="row gy-4 mt-5 justify-content-center" >



        {/* <div className="col-xl-2 col-md-4 my-1">
        <Link to="/recruitment">
          <div className="icon-box" style={{cursor: "pointer"}} to="/recruitment">
          <i class="fa fa-handshake-o" aria-hidden="true"></i>
            <h3><Link to="/recruitment">Recruitment</Link></h3>
          </div> </Link>  
        </div>  */}

        

       <div className="col-xl-2 col-md-4 my-1">
        <Link to="/bloodcamp">
          <div className="icon-box" style={{cursor: "pointer"}}>
            <i className="fa fa-tint" aria-hidden="true"></i>
            <h3><Link to="/bloodcamp">Blood For Life</Link></h3>
          </div></Link>
        </div>


        <div className="col-xl-2 col-md-4 my-1">
        <Link to="/volunteership">
          <div className="icon-box" style={{cursor: "pointer"}}>
            <i className="fa fa-user" aria-hidden="true"></i>
            <h3><Link to="/volunteership">Register as Volunteer</Link></h3>
          </div></Link>
        </div>
        

    
        <div className="col-xl-2 col-md-4 my-1">
          <Link to="/blogs">
          <div className="icon-box" style={{cursor: "pointer"}} >
            <i className="fa fa-book" aria-hidden="true"></i>
            <h3><Link to="/blogs">Blogs</Link></h3>
          </div></Link>
        </div>


       <div className="col-xl-2 col-md-4 my-1">
          <div className="icon-box" style={{cursor: "pointer"}} onclick="location.href='https://pages.razorpay.com/pl_IulUdJ0tgMhi5Q/view'">
            <i className="fa fa-archive" aria-hidden="true"></i>
            <h3><a href="https://pages.razorpay.com/pl_IulUdJ0tgMhi5Q/view">Wellness Fundraiser</a></h3>
          </div>
        </div>


        <div className="col-xl-2 col-md-4 my-1">
        <Link to="/helpline">
          <div className="icon-box" style={{cursor: "pointer"}} >
            <i className="fa fa-phone" aria-hidden="true"></i>
            <h3><Link to="/helpline">Suicidal Helpline</Link></h3>
          </div></Link>
        </div>

      
        
 
       
      </div>

    </div>

    <div id="feedback">
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">
    <i class="fa fa-calculator" aria-hidden="true"></i> Check BMI</button>
		</div>


    <div id="bloodbtn">
    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter1">
    <i class="fa fa-tint" aria-hidden="true"></i> Blood Request</button>
		</div>
  </section>







{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style={{textAlign: 'center', fontWeight: 'bold'}}>BMI Calculator</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Height <span style={{fontWeight: 'bold'}}>(in cm)</span></label>
    <div class="col-sm-8">
      <input type="number"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm" class="form-control" id="height" required/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Weight <span style={{fontWeight: 'bold'}}>(in kg)</span></label>
    <div class="col-sm-8">
      <input type="number"
       onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg" class="form-control" id="weight" required/>
    </div>

  
  </div>
  <div class="modal-footer">
      
        <button type="button" onClick={handleBmi} class="btn btn-info" style={{color: 'white'}}>Calculate</button>
      </div>
<hr></hr>
<h5>Report :</h5>

  <div class="form-group row" style={{marginTop: '5px'}}>
    <label for="inputPassword" class="col-sm-2 col-form-label">BMI</label>
    <div class="col-sm-10">
      <input type="number" readonly="readonly" value={bmi} class="form-control" id="weight"/>
    </div> 
  </div>


  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Status</label>
    <div class="col-sm-10">
      <input type="text" readonly="readonly" value={info} class="form-control" id="weight"/>
    </div> 
  </div>


  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i> Close</button>
       
      </div> 

</form>
  
      </div>
   
    </div>
  </div>
</div>






{/* <!-- Modal blood camp --> */}
<div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="container"  style={{textAlign: 'center', marginTop: '8px'}}>
      <h2 class="modal-title" id="exampleModalLabel" style={{textAlign: 'center', fontWeight: '800', color: 'red'}}>BLOOD FOR LIFE</h2>
      <p style={{marginTop: '-5px',fontSize: '13px'}}>A project inititated by Wake With Wellness</p>
      <hr></hr>
      <p style={{textAlign: 'left', fontWeight: '500', color: 'orange', marginLeft: '15px'}}>Find blood donor near you!</p>
      </div>


      <form class="requires-validation" form action="" onSubmit={handleBloodRequest}>
      <div class="modal-body" style={{marginTop: '-18px'}}>


    

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="fname">Name<span style={{color: 'red'}}>*</span></label>   
                        <input style={{marginTop: '-5px'}} value={fname} onChange = {(e) => handleBloodRequestChange(e)} id="fname" class="form-control" type="text" name="fname" placeholder="Full Name" required/>
                        <div class="valid-feedback">Username field is valid!</div>
                        <div class="invalid-feedback">Username field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="contact">Contact no.<span style={{color: 'red'}}>*</span></label>    
                          <input style={{marginTop: '-5px'}} class="form-control" value={contact} onChange = {(e) => handleBloodRequestChange(e)} id="contact" type="text" name="contact" placeholder="Contact no." required/>
                          <div class="valid-feedback">Contact no. field is valid!</div>
                          <div class="invalid-feedback">Contact no. field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="Aphone">Alternate Contact no.<span style={{color: 'red'}}>*</span></label>    
                          <input style={{marginTop: '-5px'}} class="form-control" value={altphone} onChange = {(e) => handleBloodRequestChange(e)} id="Aphone" type="text" name="Aphone" placeholder="Alt. Contact no." required/>
                          <div class="valid-feedback">Alt. Contact no. field is valid!</div>
                          <div class="invalid-feedback">Alt. Contact no. field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="bloodgp">Blood Group<span style={{color: 'red'}}>*</span></label>    

                          <select style={{marginTop: '-5px'}} value={bloodgp} onChange = {(e) => handleBloodRequestChange(e)} class="form-select" id="bloodgp" required>
                                      <option selected disabled value="">--Select blood group--</option>
                                      <option value="O+ve">O positive</option>
                                      <option value="O-ve" style={{color: 'red'}}>O negative</option>
                                      <option value="A+ve">A positive</option>
                                      <option value="A-ve" style={{color: 'red'}}>A negative</option>
                                      <option value="B+ve">B positive</option>
                                      <option value="B-ve" style={{color: 'red'}}>B negative</option>
                                      <option value="AB+ve">AB positive</option>
                                      <option value="AB-ve" style={{color: 'red'}}>AB negative</option>

                               </select>
                          <div class="valid-feedback">Blood group field is valid!</div>
                          <div class="invalid-feedback">Blood group field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="place">City/Place<span style={{color: 'red'}}>*</span></label>    
                          <input style={{marginTop: '-5px'}} class="form-control" value={place} onChange = {(e) => handleBloodRequestChange(e)} id="place" type="text" name="place" placeholder="City/Place" required/>
                          <div class="valid-feedback">City/Place field is valid!</div>
                          <div class="invalid-feedback">City/Place field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="hospital">Hospital<span style={{color: 'red'}}>*</span></label>    
                          <input style={{marginTop: '-5px'}} class="form-control" value={hospital} onChange = {(e) => handleBloodRequestChange(e)} id="hospital" type="text" name="hospital" placeholder="Hospital" required/>
                          <div class="valid-feedback">Hospital field is valid!</div>
                          <div class="invalid-feedback">Hospital field cannot be blank!</div>
                      </div>

                      
                      <div class="col-md-12">
                           <label style={{fontSize: '12px'}} for="dept">Requirement status<span style={{color: 'red'}}>*</span></label>      
                                <select style={{marginTop: '-5px'}} value={required} onChange = {(e) => handleBloodRequestChange(e)} class="form-select" id="required" required>
                                      <option selected disabled value="">--Select status--</option>
                                      <option value="Urgent">Urgent</option>
                                      <option value="12 Hours">Within 12 Hours</option>
                                      <option value="24 Hours">Within 24 hours</option>
                                      <option value="May needed">May required</option>
                               </select>
                                <div class="valid-feedback">You selected a department!</div>
                                <div class="invalid-feedback">Please select a department!</div>
                           </div>

                    

                      <div className="container" style={{textAlign: 'center', fontWeight: '500'}}>
                       {statuss?.type === 'success' && (
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                      <strong>Success!</strong> Our team will contact you soon!
                      <button type="button" class="close" onClick={refreshPage}>
                      <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      )}
                      {statuss?.type === 'error' && (
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Failed!</strong> Please try again.
                        <button type="button" class="close" onClick={refreshPage}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      )} 
                      </div>

                    
                   

                   
  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button style={{ background: loaderr ? "#00C851" : "#007E33", fontWeight:'500', color:'white' }} onClick={()=>handleBloodRequest()} id="submit" type="submit" class="btn btn-success">Request</button>
      </div>   </form>
    </div>
  </div>
</div>

{/* BloodCamp end */}



<div style={{marginTop:"50px"}}></div>

    {/* ABOUT SECTION */}

  <section id="about" className="about">
      <div className="container-fluid" style={{maxWidth: '180vh'}}>
      <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>WHO WE ARE</h2>
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" >
            <img src={about} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" id="con" data-aos="fade-right" data-aos-delay="100">
         
            <p style={{textAlign: "justify", fontSize: "15px"}}>Wake With Wellness is a community-based organization established to exercise good actions for the rehabilitation of communities regarding health and social awareness without ascertaining the foundations of legal norms. The focus is to build equality across society in all streams - health care, environment, access to technology, quality of education, etc. We use technology for managing administrative functions and daily business operations.
            </p>
            <p style={{textAlign: "justify", fontSize: "15px"}}>
              To improve the attitude of the community about the delivery of palliative and health care services, we as an organization will provide relentless efforts to make them believe that palliative and health care can not only be provided by professionals but also by community volunteers. Succumbing to a large population, the only way to provide palliative and health care to people in need is through community participation also designed towards spreading health awareness and conveyance of information crucial to a healthy living.
            </p>
            <p style={{textAlign: "justify", fontSize: "15px"}}>With this vision of steering people for a hale and hearty life form, <span style={{fontWeight: 'bold'}}>‘we are People Caring For People’</span></p>

     
           
            <Link style={{padding: '10px', marginTop: '5px'}} class="badge bg-info text-light" to="/about">Read more...</Link>
            
          </div>
        </div>

      </div>
    </section>


    <div style={{marginTop:"120px"}}></div>

   



    <section id="portfolio" className="portfolio">
      <div className="content container-fluid" style={{maxWidth: '180vh'}}>
      
          <div className="section-title" data-aos="fade-left">
          
            <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Gallery</h2>
            
            </div>
       
        <div className="row">

          {/* <!--1--> */}
            <div  className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <a  href="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FBB.JPG?alt=media&token=e3a5b6bc-650a-4d02-85c6-e5df5bf64f42">
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FBB.JPG?alt=media&token=e3a5b6bc-650a-4d02-85c6-e5df5bf64f42" alt=""/>
                </a>
            </div>


          {/* <!--2--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <a  href="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL2.jpg?alt=media&token=01624696-123b-4097-9626-19dd37ad977f">
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL2.jpg?alt=media&token=01624696-123b-4097-9626-19dd37ad977f" alt=""/>
                </a>
            </div>

          {/* <!--3--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <a href="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F2.jpeg?alt=media&token=7fa1d527-a5ba-4c99-8b1a-ae20aee96047">
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F2.jpeg?alt=media&token=7fa1d527-a5ba-4c99-8b1a-ae20aee96047" alt=""/>
                </a>
            </div>


          {/* <!--4--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <a href="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F9.jpeg?alt=media&token=14372edc-690e-4a4c-8fcc-f8d5cfd7eb78">
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F9.jpeg?alt=media&token=14372edc-690e-4a4c-8fcc-f8d5cfd7eb78" alt=""/>
                </a>
            </div>
           

             {/* <!--5--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <a href="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL6.jpg?alt=media&token=01f5d81a-6090-4430-a146-637061fb8a1d">
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL6.jpg?alt=media&token=01f5d81a-6090-4430-a146-637061fb8a1d" alt=""/>
                </a>
            </div>


             {/* <!--6--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <a href="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2Fclothdonate1.JPG?alt=media&token=677f5949-ee4d-4117-bd41-0fd45bb7c358">
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2Fclothdonate1.JPG?alt=media&token=677f5949-ee4d-4117-bd41-0fd45bb7c358" alt=""/>
                </a>
            </div>
            

             {/* <!--7--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <a href="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate4.JPG?alt=media&token=01fa1cfe-e142-4f9b-a40f-4444ef8b407a">
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate4.JPG?alt=media&token=01fa1cfe-e142-4f9b-a40f-4444ef8b407a" alt=""/>
                </a>
            </div>
           
            
            {/* <!--8--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20"id="imggg" >
                <a href="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F5.JPG?alt=media&token=4232082e-75de-4fde-b6e5-a6de6cc8d43d">
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F5.JPG?alt=media&token=4232082e-75de-4fde-b6e5-a6de6cc8d43d" alt=""/>
                </a>
            </div>

        
            <div className="container-fluid">
              <Link style={{float: 'right', marginTop: '12px', padding: '10px'}} class="badge bg-info text-light" to="/gallery">Show more...</Link>
          </div>

            
        </div>
    </div>
    </section>

    <div style={{marginTop:"120px"}}></div>
 {/* BLOG SECTION */}

 <section id="features" className="features">
      <div className="container-fluid" style={{maxWidth: '180vh'}}>
      <div class="section-title">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>BLOGS</h2>
        
        </div>

          <div className="row">



          <div className="col-sm-6 col-md-6 col-lg-4">
                          <div className="blog grid-blog" id="images">
                              <div className="blog-image">
                                  <a href="/blog/9"><img className="img-fluid" src="/assets/images/blog6.jpeg" alt=""/></a>
                              </div>
                              <div className="blog-content">
                              <h3 className="blog-title"><Link to="/blog/9">Thrive with Hope!</Link></h3>
                                                <p style={{fontSyle: 'italic', color: '#5793D1'}}>Sangeeta Sen</p>
                                                <p>We say that it is the strength that keeps us going.<br/>
                                                    It is the will that keeps us going,<br/>
                                                    It is the aim that keeps us going<br/>
                                                    It is the faith that keeps us going!</p>
                                                <a  href="/blog/9" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</a>
                                                <div style={{marginTop: '-10px'}} className="blog-info clearfix">
                                                    <div className="post-left">
                                                        <ul>
                                                            <li><a href="/blog/9"><i className="fa fa-calendar"></i> <span>April 30, 2022</span></a></li>
                                                        </ul>
                                      </div>
                                  
                                  </div>
                              </div>
                          </div>
                      </div>



                  <div className="col-sm-6 col-md-6 col-lg-4">
                          <div className="blog grid-blog" id="images">
                              <div className="blog-image">
                                  <a href="/blog/3"><img className="img-fluid" src="/assets/images/blog5.jpg" alt=""/></a>
                              </div>
                              <div className="blog-content">
                              <h3 className="blog-title"><Link to="/blog/3">THE MECHANICS OF DESIRE</Link></h3>
                                                <p style={{fontSyle: 'italic', color: '#5793D1'}}>Bhargab Deka</p>
                                                <p>Do you dream? Everyone does…isn't it?</p>
                                                <p style={{textAlign: 'justify', marginBottom: '15px'}}>But I am not talking about those dreams that you dreamt during your 
                                                sleep. Those are just...</p>
                                                <a href="/blog/3" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</a>
                                                <div className="blog-info clearfix">
                                                    <div className="post-left">
                                                        <ul>
                                                            <li><a href="/blog/3"><i className="fa fa-calendar"></i> <span>July 20, 2021</span></a></li>
                                                        </ul>
                                      </div>
                                  
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-4">
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                      <Link to="/blog/8"><img className="img-fluid" src="/assets/images/6.jpeg" alt=""/></Link>
                                  </div>
                                  <div className="blog-content">
                                      <h3 className="blog-title"><a href="/blog/8">বৃক্ক ৰোগৰ কিছু তথ্য আৰু একান্ত অনুভৱ </a></h3>
                                      <p style={{fontStyle: 'italic', color: '#5793D1'}}>নিবেদিতা বড়া সন্দিকৈ</p>
                                      <p style={{textAlign: 'justify', marginBottom: '5px'}}>হঠাতে জীৱনলৈ বিপর্যয় নামি আহিল। কি কৰোঁ... কি নকৰোঁ... । মোৰ নিকটতমৰ দুয়োটা বৃক্কই <span style={{fontWeight: '600'}}>(Kidney)</span> বিকল হ'ল। তাকে৷ ডাক্তৰৰ ভুল ঔষধৰ বাবে। হে 
                                        ভগৱান... কি কৰোঁ.......</p>
                                        <a style={{marginTop: '25px'}} href="/blog/8" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</a>
                                        <div className="blog-info clearfix">
                                            <div className="post-left">
                                                <ul>
                                                    <li><a href="/blog/8"><i className="fa fa-calendar"></i> <span>July 6, 2021</span></a></li>
                                                </ul>
                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                <Link style={{float: 'right',  padding: '10px'}} class="badge bg-info text-light" to="/blogs">More blogs...</Link>
            </div>

          </div>


          


      </div>
    </section>


   



    <div style={{marginTop:"120px"}}></div>


    
<section id="videos" className="videos" style={{marginTop: '14vh'}}>
        <div className="container-fluid"  style={{maxWidth: '180vh'}}>
  
          <div className="section-title">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Video Gallery</h2>
            
          </div>


<div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" style={{cursor: 'pointer'}}>
              <div className="container" id="icon">
                <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fglimpses.JPG?alt=media&token=218e7bb2-de57-4acf-b4fb-a9bde05219cb" className="img-fluid" alt=""/>
                <div>
                <h6 style={{textAlign: 'left',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>Glimpses of 2021-22 | Wake With Wellness</h6>
                <p style={{textAlign: 'left', fontSize:'11px'}}>24th April 2022</p>
                <div>
                  <Link to="/video6" className="btn btn-warning" style={{fontStyle: 'italic', fontSize: '12px', paddingLeft: '25px',paddingRight: '25px',color: 'white', float:'right', marginTop: '19px'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link>
                </div>
              </div></div>
            </div>

 
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{cursor: 'pointer'}}>
              <div className="container" id="icon">
                <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fhealth.JPG?alt=media&token=6144d0ce-40f9-4f5c-9e88-5f20f159572e" className="img-fluid" alt=""/>
                <div>
                <h6 style={{textAlign: 'left',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>Wellness Drive : Medical & Health Checkup Camp | Dhemaji</h6>

                <p style={{textAlign: 'left', fontSize:'11px'}}>4th April 2022</p>
                <div>
                <Link to="/video5" className="btn btn-warning" style={{fontStyle: 'italic', fontSize: '12px', paddingLeft: '25px',paddingRight: '25px',color: 'white', float:'right'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{cursor: 'pointer'}}>
            <div className="container" id="icon">
              <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Ffood.JPG?alt=media&token=0b84cec0-75a5-4f26-b79b-9191abb76c57" className="img-fluid" alt=""/>
              <div>
              <h6 style={{textAlign: 'left',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>Wellness Drive: Food Donation | Wake With Wellness</h6>

              <p style={{textAlign: 'left', fontSize:'11px'}}>6th October 2021</p>
              <div>
              <Link to="/video1" className="btn btn-warning" style={{fontStyle: 'italic', fontSize: '12px', paddingLeft: '25px',paddingRight: '25px',color: 'white', float:'right'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link>
              </div>
            </div>
          </div>
        </div>
  

        <div className="container-fluid" style={{marginTop: '7vh'}}>
                <Link style={{float: 'right',  padding: '10px'}} class="badge bg-info text-light" to="/videos">More videos...</Link>
            </div>
</div>




</div>


  </section>   
  <div style={{marginTop:"120px"}}></div>

    <section id="services" className="services" >
        <div className="container-fluid" style={{maxWidth: '180vh'}}>
  
          <div className="section-title">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Events</h2>
            
          </div>


          
 
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" style={{cursor: 'pointer'}}>
              <div className="container" id="icon">
                <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FBB.JPG?alt=media&token=e3a5b6bc-650a-4d02-85c6-e5df5bf64f42" className="img-fluid" alt=""/>
                <div>
                <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>Wellness Drive</h5>
                <p>(26th September 2021)</p>
                <div>
               
                </div>
              </div></div>
            </div>

 
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{cursor: 'pointer'}} onclick="location.href='web/events/prabhati.html'">
              <div className="container" id="icon">
                <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F1.jpeg?alt=media&token=1b575439-f12f-4aa6-a6a7-66d1c3221955" className="img-fluid" alt=""/>
                <div>
                <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>Prabhati - A Dawn of a Vital Outlook</h5>

                <p>(29th November 2021)</p>
                <div>
                
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{cursor: 'pointer'}} onclick="location.href='web/events/ClothDonation.html'">
            <div className="container" id="icon">
              <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate1.JPG?alt=media&token=6a55a215-5ccf-43a9-865a-c5b61dc61119" className="img-fluid" alt=""/>
              <div>
              <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>Wellness Drive - Clothes & Books Donation</h5>

              <p>(20th February 2022)</p>
              <div>
              
              </div>
            </div>
          </div>
        </div>

  
        </div>



        <div className="row" style={{marginTop: '10px'}}>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch"  style={{cursor: 'pointer'}}>
            <div className="container" id="icon">
              <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F1.JPG?alt=media&token=b390f6fe-ad10-41f9-9f9f-d815a045cd75" className="img-fluid" alt=""/>
              <div>
              <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>Wellness Drive - Medical & Health CheckUp</h5>
              <p>(14th March 2021)</p>
              <div>
             
              </div>
            </div></div>
          </div>


       </div>

      </div>
      </section>




      <div style={{marginTop:"80px"}}></div>

     
      <section id="clients" class="clients" >
        <div class="container-fluid" style={{maxWidth: '180vh'}}>
          <div class="section-title">
            <h2>Collaborations</h2>
           
          </div>
  
          <div class="container-fluid" style={{cursor: 'pointer'}}>
            <div class="row">
             
              <div class="col"><img src={sofy} class="img-fluid" alt=""/></div>
              <div class="col"><img src={netecon} class="img-fluid" alt=""/></div>
              <div class="col"><img src={progoty} class="img-fluid" alt=""/></div>
              <div class="col"><img src={helping} class="img-fluid" alt=""/></div>
              <div class="col"><img src={serving} class="img-fluid" alt=""/></div>
        
            </div>
            <div class="swiper-pagination"></div>
          </div>
  
        </div>
      </section>


      <div style={{marginTop:"100px"}}></div>

    </div>
    </>
  )
}

export default Home
