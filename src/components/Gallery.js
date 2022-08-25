import React from 'react'
import "./assets/css/Home.css"
import GoToTop from '../GoToTop'

function Gallery() {
  return (

    <> <GoToTop />
     <section id="portfolio" className="portfolio" style={{marginTop: "100px"}}>
     <div className="container-fluid" style={{maxWidth: '180vh'}}>

       <div className="section-title" data-aos="fade-left">
         <h2>Gallery</h2>
         
         
       </div>

       <div className="row" >
         <div className="col-lg-12 d-flex justify-content-center">
           <ul id="portfolio-flters" >
             <li style={{color: "black"}} data-filter="*" className="filter-active" hidden></li>
             
             
          
           </ul>
         </div>
       </div>

       <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

         <div className="col-lg-4 col-md-6 portfolio-item filter-drive">
           <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FBB.JPG?alt=media&token=e3a5b6bc-650a-4d02-85c6-e5df5bf64f42" className="img-fluid" alt=""/>
             <div className="portfolio-info">
               <h4>Wellness Drive</h4>
               
               
             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 portfolio-item filter-drive">
           <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL2.jpg?alt=media&token=01624696-123b-4097-9626-19dd37ad977f" className="img-fluid" alt=""/>
             <div className="portfolio-info">
              <h4>Wellness Drive</h4>
               
              
             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 portfolio-item filter-prabhati">
           <div className="portfolio-wrap">

             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2Ffwesfs.JPG?alt=media&token=9be1cf40-da64-4607-8a64-af05bb631c0a" className="img-fluid" alt=""/>
             <div className="portfolio-info">
              <h4>Wellness Drive</h4>
               
               
             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 portfolio-item filter-prabhati">
           <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F2.jpeg?alt=media&token=7fa1d527-a5ba-4c99-8b1a-ae20aee96047" className="img-fluid" alt=""/>
             <div className="portfolio-info">
              <h4>Prabhati</h4>
           

             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 portfolio-item filter-work">
           <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F1.jpeg?alt=media&token=a0075f15-8f52-4a38-bb4f-b6005474756c" className="img-fluid" alt=""/>
             <div className="portfolio-info">
              <h4>Prabhati</h4>
              
               
             </div>
           </div>
         </div>


         <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F9.jpeg?alt=media&token=14372edc-690e-4a4c-8fcc-f8d5cfd7eb78" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Prabhati</h4>
           
              
            </div>
          </div>
        </div>

         <div className="col-lg-4 col-md-6 portfolio-item filter-work">
           <div className="portfolio-wrap">
              <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate1.JPG?alt=media&token=6a55a215-5ccf-43a9-865a-c5b61dc61119" className="img-fluid" alt=""/>
             <div className="portfolio-info">
              <h4>Wellness Drive - Clothes & Books Donation</h4>
            
               
             </div>
           </div>
         </div>


         <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate4.JPG?alt=media&token=01fa1cfe-e142-4f9b-a40f-4444ef8b407a" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Wellness Drive - Clothes & Books Donation</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate5.JPG?alt=media&token=7a42e0b1-0b4c-492e-85fc-e6a7a40ac9b8" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Wellness Drive - Clothes & Books Donation</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F9.JPG?alt=media&token=ca6c1a25-4aee-4615-8d77-9e1f991947fa" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Health and Medical CheckUp</h4>
           
              
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F5.JPG?alt=media&token=4232082e-75de-4fde-b6e5-a6de6cc8d43d" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Health and Medical CheckUp</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F4.JPG?alt=media&token=784a3a87-7368-4bda-8287-a437b24ec025" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Health and Medical CheckUp</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL4.jpg?alt=media&token=cc99bb8e-2df5-478b-ae5d-a5fd69c3aa66" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Work Space</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL1.JPG?alt=media&token=a1dac704-e762-4a16-8102-688d5f3f3bfe" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Wellness Drive</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F3.JPG?alt=media&token=5f94cdb2-c05a-4ce5-a701-0324a516c578" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Health and Medical CheckUp</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate6.JPG?alt=media&token=460710a4-2c58-467a-a51c-db6cf658ba17" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Wellness Drive - Clothes & Books Donation</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F10.jpeg?alt=media&token=7c991449-7a28-450f-a9cb-73d785f65127" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Prabhati</h4>
           
              
            </div>
          </div>
        </div>

      

        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F6.JPG?alt=media&token=23bc8904-b4d5-484d-a443-0f17f3cdec4d" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Health and Medical CheckUp</h4>
           
              
            </div>
          </div>
        </div>




        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F3.jpg?alt=media&token=9cdba305-6cc8-4bf8-a85a-5c1c5f7e8bcc" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Prabhati</h4>
           
              
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F7.JPG?alt=media&token=c03cefc1-1a99-4a8c-801c-09482dd7ac0e" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Health and Medical CheckUp</h4>
           
              
            </div>
          </div>
        </div>


        
        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F5.jpeg?alt=media&token=7d6dce71-754f-4efb-bd25-34ce2259588d" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Prabhati</h4>
           
              
            </div>
          </div>
        </div>




                  
        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F8.JPG?alt=media&token=4b3f1f5d-bf2c-4a4d-978c-d0628f8c4d75" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Health and Medical CheckUp</h4>
           
              
            </div>
          </div>
        </div>





                  
        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate3.JPG?alt=media&token=42e4c0f9-55c7-4c64-b713-e3caf3513f04" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Wellness Drive - Clothes & Books Donation</h4>
           
              
            </div>
          </div>
        </div>





                  
        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F10.jpg?alt=media&token=7b73ebb4-fd0b-40fe-81a1-007e8a6afab4" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Health and Medical CheckUp</h4>
           
              
            </div>
          </div>
        </div>






        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F6.png?alt=media&token=a5b7c917-ae8d-4767-94dc-ba0cbc82818e" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>A session on Mental Health</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F7.png?alt=media&token=091fa64f-d904-4a5e-a664-7bf9f2ec3747" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>A session on Mental Health</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F10-min.png?alt=media&token=6d6d4904-2b24-44f8-9736-2e2ec1b7060f" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>A session on Mental Health</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F8.png?alt=media&token=2e1dcd91-a72c-4f35-a570-091eb0b1166d" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Webinar on National Nutrition Week</h4>
           
              
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F9.png?alt=media&token=2b3775e9-5b65-407b-b0be-ef31d51f8b06" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Webinar on National Nutrition Week</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F11-min.png?alt=media&token=e47064ad-0ff0-482a-b2f0-8967703a223c" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Webinar on National Nutrition Week</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F3.png?alt=media&token=51aefc99-407c-4f56-8659-4157e3840270" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Ice breaking session 2022</h4>
           
              
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F4.png?alt=media&token=86b40eb1-18af-46fd-9279-05298d0cc86c" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Ice breaking session 2022</h4>
           
              
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 portfolio-item filter-work">
          <div className="portfolio-wrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2F5.png?alt=media&token=fd6d3fa7-3e00-4551-84d4-95e695f31cd0" className="img-fluid" alt=""/>
            <div className="portfolio-info">
             <h4>Ice breaking session 2022</h4>
           
              
            </div>
          </div>
        </div>



       </div>

   </div>
   </section>

   </>
  )
}

export default Gallery
