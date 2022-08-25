import React from 'react'
import "../assets/css/Home.css"
import { Link } from "react-router-dom";

import GoToTop from '../../GoToTop'

function Cat() {
  return (
    <>
<GoToTop />

<section id="services" className="services" style={{marginTop: '14vh'}}>
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
              <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fmhealth.JPG?alt=media&token=d1fc75fa-f348-47e3-b6e1-519c957bbc00" className="img-fluid" alt=""/>
              <div>
              <h6 style={{textAlign: 'left',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>MENTAL HEALTH AWARENESS | Miss Trishna Das | Wake With Wellness</h6>

              <p style={{textAlign: 'left', fontSize:'11px'}}>17th February 2022</p>
              <div>
              <Link to="/video4" className="btn btn-warning" style={{fontStyle: 'italic', fontSize: '12px', paddingLeft: '25px',paddingRight: '25px',color: 'white', float:'right'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link>
              </div>
            </div>
          </div>
        </div>

  
</div>


        <div style={{marginTop:"35px"}}></div>

{/* 2nd Row start */}
<div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" style={{cursor: 'pointer'}}>
              <div className="container" id="icon">
                <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fprabhati.JPG?alt=media&token=288412d5-3027-478f-aca4-f5ff60b8be94" className="img-fluid" alt=""/>
                <div>
                <h6 style={{textAlign: 'left',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>PRABHATI- The Dawn of a Vital Outlook | Wake With Wellness</h6>
                <p style={{textAlign: 'left', fontSize:'11px'}}>18th January 2022</p>
                <div>
                  <Link to="/video3" className="btn btn-warning" style={{fontStyle: 'italic', fontSize: '12px', paddingLeft: '25px',paddingRight: '25px',color: 'white', float:'right'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link>
                </div>
              </div></div>
            </div>

 
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{cursor: 'pointer'}} >
              <div className="container" id="icon">
                <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fprabhati%20(1).jpg?alt=media&token=b5e989a5-973d-4667-a0cc-330985993534" className="img-fluid" alt=""/>
                <div>
                <h6 style={{textAlign: 'left',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold', marginTop: '10px'}}>Prabhati- The Dawn Of A Vital Outlook | Teaser | Wake With Wellness</h6>

                <p style={{textAlign: 'left', fontSize:'11px'}}>18th December 2021</p>
                <div>
                <Link to="/video2" className="btn btn-warning" style={{fontStyle: 'italic', fontSize: '12px', paddingLeft: '25px',paddingRight: '25px',color: 'white', float:'right'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link>
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

  
</div>
{/* 2nd Row ends */}


</div>


  </section>   
 
    

      
    </>
  )
}

export default Cat
