import React, { useState } from 'react';
import './assets/css/volunteer.css'
import {database} from '../firebase'
import GoToTop from '../GoToTop'

import {ref,push,child,update} from "firebase/database";
function refreshPage() {
     window.location.reload();
   }

function Volunteership() {

     const [loader, setLoader] = useState(false);
    const [status, setStatus] = useState(undefined);
    
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone,setPhone] = useState(null);
    const [whatsapp,setWhatsapp] = useState(null);
  
    const [qualification,setQual] = useState(null);
    const [work,setWork] = useState(null);
    const [home,setHome] = useState(null);
    const [state,setState] = useState(null);
    const [exp,setExp] = useState(null);
    const [checkbox,setCheck] = useState("Agree");


    const handleInputChange = (e) => {
     const {id , value} = e.target;
     if(id === "name"){
         setName(value);
     }

     if(id === "email"){
         setEmail(value);
     }
     if(id === "phone"){
       setPhone(value);
     }

     if(id === "whatsapp"){
      setWhatsapp(value);
    }

 

     if(id === "qualification"){
          setQual(value);
        }



     if(id === "work"){
          setWork(value);
     }

     if(id === "home"){
      setHome(value);
    }

     if(id === "state"){
          setState(value);
     }


     if(id === "exp"){
          setExp(value);
     }

     if(id === "checkbox"){
       setCheck(value);
     }

 }

 const handleSubmit = (e) => {
     e.preventDefault();
     setLoader(true);
     let obj = {
       name : name,
       email:email,
       phone:phone,
       whatsapp:whatsapp,
     
       qualification: qualification,
       work:work,
       home:home,
       state:state,
       exp:exp,
       checkbox:checkbox,
   }       
       const newPostKey = push(child(ref(database), 'VolunteershipP')).key;
       const updates = {};
       updates['VolunteershipP/' + newPostKey] = obj
       return update(ref(database), updates)
       .then(() => {
            setLoader(false);
            setStatus({ type: 'success' });
            setName("");
            setEmail("");
            setPhone("");
            setWhatsapp("");
          
            setQual("");
            setWork("");
            setHome("");
            setState("");
            setExp("");
            setCheck("")

        
          })
          .catch((error) => {
            setLoader(false);
            setStatus({ type: 'error', error });
          });

  
        
      

 
     
       }   


  return (
     <>
     <GoToTop />
     
       <section id="recrut" className="d-flex align-items-center justify-content-center" >
         <div className="container" style={{marginBottom: '30px'}}>
     
           <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
             <div className="col-xl-6 col-lg-8">
               <h1>Volunteers <span>Needed</span></h1>
               <h2>To help with community projects</h2>
             </div>
           </div>
     
         
     
         </div>
       </section>
     
     <div class="container" id="formrecruit" style={{marginTop: '5vh'}}>
             <div class="row">
                 <div class="container">
                     <div class="form-content">
                         <div class="form-items">
                          <div style={{backgroundColor: '#f5f5f5', padding: '15px', marginBottom: '20px', borderRadius: '8px'}}>
                             <h5>We're looking for enthusiastic and friendly participation who desire to serve people and generations.</h5><hr/>
                             <p><span style={{fontWeight: '500'}}>WE NEED HELP WITH: </span>
                              <ul style={{marginLeft: '10px'}}>
                            
                              <li>Rounding up donations </li>
                              <li>Packing relief goods</li>
                              <li>Hosting offline campaigns </li>
                              <li>Initiating wellness drives </li>
                              <li>Distributing relief goods and much more </li>
                             </ul></p>
                             <h3 style={{textAlign: 'center', color: '#ffc107', fontWeight: '600'}}>Help serve the need in our community !</h3>
                             </div>
                             <p>Fill the form below to register your participation</p><hr></hr>
                             <form class="requires-validation"  onSubmit={handleSubmit}>
     
                                 <div class="col-md-12">
                                 <label style={{fontSize: '12px'}} for="name">Name<span style={{color: 'red'}}>*</span></label>   
                                    <input style={{marginTop: '-5px'}} value={name} onChange = {(e) => handleInputChange(e)} id="name" class="form-control" type="text" name="name" placeholder="Full Name" required/>
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                 </div>
     
                                 <div class="col-md-12">
                                 <label style={{fontSize: '12px'}} for="email">Email<span style={{color: 'red'}}>*</span></label>   
                                     <input style={{marginTop: '-5px'}} class="form-control" value={email} onChange = {(e) => handleInputChange(e)} id="email" type="email" name="email" placeholder="E-mail Address" required/>
                                      <div class="valid-feedback">Email field is valid!</div>
                                      <div class="invalid-feedback">Email field cannot be blank!</div>
                                 </div>
     
                                 <div class="col-md-12">
                                 <label style={{fontSize: '12px'}} for="phone">Contact no.<span style={{color: 'red'}}>*</span></label>    
                                     <input style={{marginTop: '-5px'}} class="form-control" value={phone} onChange = {(e) => handleInputChange(e)} id="phone" type="text" name="phone" placeholder="Contact no." required/>
                                      <div class="valid-feedback">Contact no. field is valid!</div>
                                      <div class="invalid-feedback">Contact no. field cannot be blank!</div>
                                 </div>

                                 <div class="col-md-12">
                                 <label style={{fontSize: '12px'}} for="whatsapp">Whatsapp no.<span style={{color: 'red'}}>*</span></label>    
                                     <input style={{marginTop: '-5px'}} class="form-control" value={whatsapp} onChange = {(e) => handleInputChange(e)} id="whatsapp" type="text" name="whatsapp" placeholder="Whatsapp no." required/>
                                      <div class="valid-feedback">Whatsapp no. field is valid!</div>
                                      <div class="invalid-feedback">Whatsapp no. field cannot be blank!</div>
                                 </div>






                             

                                 <div class="col-md-12">
                                 <label style={{fontSize: '12px'}} for="qualifications">Educational Qualification<span style={{color: 'red'}}>*</span></label>    
                                     <input style={{marginTop: '-5px'}} class="form-control" value={qualification} onChange = {(e) => handleInputChange(e)} id="qualification" type="text" name="qualification" placeholder="Qualification" required/>
                                      <div class="valid-feedback">Qualifications field is valid!</div>
                                      <div class="invalid-feedback">Qualifications field cannot be blank!</div>
                                 </div>

     
     
                                <div class="col-md-12">
                                 
                                   <label style={{fontSize: '12px'}} for="work">Name of institution you are currently enrolled / workplace<span style={{color: 'red'}}>*</span></label>      
                                   <input style={{marginTop: '-5px'}} class="form-control" value={work} onChange = {(e) => handleInputChange(e)} id="work" type="text" name="work" placeholder="College/Workplace" required/>
                                      <div class="valid-feedback">Workplace field is valid!</div>
                                      <div class="invalid-feedback">Workplace field cannot be blank!</div>
                                 </div>


                                 <div class="col-md-12">
                                 <label style={{fontSize: '12px'}} for="whatsapp">Hometown<span style={{color: 'red'}}>*</span></label>    
                                     <input style={{marginTop: '-5px'}} class="form-control" value={home} onChange = {(e) => handleInputChange(e)} id="home" type="text" name="home" placeholder="Hometown" required/>
                                      <div class="valid-feedback">Hometown field is valid!</div>
                                      <div class="invalid-feedback">Hometown field cannot be blank!</div>
                                 </div>




                                 <div class="col-md-12">
                                <label style={{fontSize: '12px'}} for="state">State<span style={{color: 'red'}}>*</span></label>      
                                <input style={{marginTop: '-5px'}} class="form-control" value={state} onChange = {(e) => handleInputChange(e)} id="state" type="text" name="state" placeholder="State" required/>
                                      <div class="valid-feedback">State field is valid!</div>
                                      <div class="invalid-feedback">State field cannot be blank!</div>
                                 
                                </div>


                                 <div class="col-md-12">
                                 
                                 <label style={{fontSize: '12px'}} for="exp">Prior Experience in working for NGO/CBO<span style={{color: 'red'}}>*</span></label>        
                                 <select style={{marginTop: '-5px'}} value={exp} onChange = {(e) => handleInputChange(e)} class="form-select" id="exp" required>
                                      <option selected disabled value="">--Select--</option>
                                      <option value="Yes">Yes</option>
                                      <option value="No">No</option>
                                     
                               </select>

                                    <div class="valid-feedback">Experience field is valid!</div>
                                    <div class="invalid-feedback">Experience field cannot be blank!</div>
                               </div>
     
     
                            
     
     
     
     
                             <div class="form-check my-5">
                               <input class="form-check-input" type="checkbox" value={checkbox} onChange = {(e) => handleInputChange(e)} id="checkbox" required/>
                               <label class="form-check-label" style={{textAlign: 'justify'}}>I certify that the information I have provided is true and complete to the best of my knowledge. I am aware that this self declaration statement is subject to review and verification and if such information has been falsified,I may be terminated from further proceedings.</label>
                              <div class="invalid-feedback">Please confirm that the information I have provided is true and complete!</div>
                             </div>
                       
                             <div className="container" style={{textAlign: 'center', fontWeight: '500'}}>
                              {status?.type === 'success' && (
                              <div class="alert alert-success alert-dismissible fade show" role="alert">
                              <strong>Success!</strong> You are registered successfully.
                              <button type="button" class="close" onClick={refreshPage}>
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                              )}
                              {status?.type === 'error' && (
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Failed!</strong> Please try again.
                                    <button type="button" class="close" onClick={refreshPage}>
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  )}
                             </div>
                           
                                 <div class="form-button mt-3">
                                     <button style={{ background: loader ? "#e6e6e6" : "#ffc107", fontWeight:'500', color:'white', width: '100%' }} onClick={()=>handleSubmit()} id="submit" type="submit" class="btn btn-warning">Join Now</button>
                                 </div>
                             </form>
                
     
     
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     
          
           </>
  )
}

export default Volunteership
