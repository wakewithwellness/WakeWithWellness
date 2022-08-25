import React from 'react'
import GoToTop from '../GoToTop'
import about from './assets/image/about.png'

function About() {
  return (

    <>
     <GoToTop />
     
    <div>
       


    <section id="about-us" className="about-us" style={{marginTop: '100px', marginBottom: '50px'}}>
      <div className="container-fluid" style={{maxWidth: '180vh'}}>
      <h2 style={{fontWeight: 'bold'}}>Who we are</h2>
        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right">
            
            <p style={{textAlign: 'justify', fontSize: '14px'}}>
              Wake With Wellness is a community-based organization established to exercise good actions for the rehabilitation of communities regarding health and social awareness without ascertaining the foundations of legal norms. The focus is to build equality across society in all streams – health care, environment, access to technology, quality of education, etc. We use technology for managing administrative functions and daily business operations.
              </p>
              <p style={{textAlign: 'justify',fontSize: '14px'}}>
                To improve the attitude of the community about the delivery of palliative and health care services, we as an organization will provide relentless efforts to make them believe that palliative and health care can not only be provided by professionals but also by community volunteers. Succumbing to a large population, the only way to provide palliative and health care to people in need is through community participation also designed towards spreading health awareness and conveyance of information crucial to a healthy living.
              </p>

            <p style={{fontSize: '14px'}}>
              There are six working departments -
            </p>

            <ul style={{fontSize: '14px'}}>
              <li><i class="fa fa-check" aria-hidden="true"></i> Curation Department</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Editorial Department</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Public Relations Department</li>            
              <li><i class="fa fa-check" aria-hidden="true"></i> Social Media Marketing Department</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Events Department</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Design/Media Department</li>
            </ul>
             
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            
            <img src={about} className="img-fluid" alt=""/>
            
          </div>

          <div className="col-lg-6" style={{textAlign: 'justify',fontSize: '14px'}}>
            <p><br></br>Working in tandem to our cause of spreading awareness and delivery of palliative and healthcare services beyond bounded limits, 
            we the members of Wake With Wellness intent to serve and care people and generations with a commitment of guiding 
            all fellow beings towards a healthy and robust existence along with an attempt to maximise provisions of health care which effortlessly reaches out to the needful.</p>
            <p >With this vision of steering people for a hale and hearty life form,<span className="fst-italic">
              ‘we are<span style={{fontWeight: 'bold'}}> People Caring For People’</span></span>
            </p>
          </div>
        </div>

      </div>
    </section>
    </div></>
  )
}

export default About
