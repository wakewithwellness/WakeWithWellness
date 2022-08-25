import React, { useState } from "react";
import { db } from "../firebase";
import GoToTop from '../GoToTop'
import './assets/css/Contact.css'
import imgcontact from './assets/image/contact.png'

function Contact() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [loader, setLoader] = useState(false);


	
   
	const [status, setStatus] = useState(undefined);


	function refreshPage() {
		window.location.reload();
	   }

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoader(true);
	 
		db.collection("techSupport")
		  .add({
		    fname: fname,
        lname: lname,
		    email: email,
		    phone: phone,
		    subject: subject
		  })
		  .then(() => {
		    setLoader(false);
		    setStatus({ type: 'success' });
		
		  })
		  .catch((error) => {
		    setLoader(false);
		    setStatus({ type: 'error', error });
		  });
	 
		  setFname("");
      setLname("");	
		  setEmail("");
		  setPhone("");
		  setSubject("");

		
	   };


  return (

    <> <GoToTop />
    <div style={{backgroundColor: 'white', height: '73px'}}></div>
    <div>
      <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "300px", marginBottom: '6vh'}}>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13638.800479899786!2d91.7874567776034!3d26.122277601590262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5f2e10c13a89%3A0x10dc736f7ba952fa!2sBeltola%20Tiniali%2C%20Guwahati%2C%20Assam!5e1!3m2!1sen!2sin!4v1623172118383!5m2!1sen!2sin" style={{border: '0'}} width="100%" height="300" allowfullscreen="" loading="lazy"></iframe>
      </div>
      
      
    
<div className="container">
	<div className="row">
		<div className="col-lg-6">
			<img className="img-responsive" src={imgcontact} alt="" style={{width: '100%', height: 'auto', marginTop: '10vh', marginLeft: '30px'}}/>
		</div>

		<div className="col-lg-6">
		<div id="Techbox" className="container" style={{paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', borderRadius: '5px'}}>
			<div style={{textAlign:'center', backgroundColor: 'rgb(0,0,0,0.8)', padding: '15px', color: 'white'}}>
			<h3 style={{ fontWeight: '800'}}>Contact Us</h3>
			<p>We'd love to here from you!</p>
			</div>

				<hr></hr><br></br>
				<form  onSubmit={handleSubmit}>

					<div className="row">
						<div className="col">
						<label for="fname">First Name</label>
						<input type="text" value={fname}
				onChange={(e) => setFname(e.target.value)} name="firstname" placeholder="Your first name.." required/>
						</div>

				<div className="col">
						<label for="lname">Last Name</label>
						<input value={lname}
				onChange={(e) => setLname(e.target.value)} type="text" name="lastname" placeholder="Your last name.." required/>
						</div>
			
					</div>

			<label for="email">E-mail</label>
					<input value={email}
				onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Your email id.." required/>
			

					<label for="contact">Contact no.</label>
					<input value={phone}
				onChange={(e) => setPhone(e.target.value)} type="text"  name="contact" placeholder="Your contact no.." required/>

				
				
			<label for="subject">Message</label>
			<textarea value={subject}
				onChange={(e) => setSubject(e.target.value)} name="subject" placeholder="Write something.." style={{height: '100px'}} required></textarea>

				<div className="container" style={{textAlign: 'center', fontWeight: '500'}}>
								{status?.type === 'success' && (
								<div class="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Success!</strong> Message sent.
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

			<button style={{ background: loader ? "#e6e6e6" : "#28a745", fontWeight:'500', color:'white' }} type="submit" className="btn"><i className="fa fa-send"></i> Send message</button>

			</form>

    </div>
		</div>
	</div>
</div>
       
    </div></>
  )
}

export default Contact
