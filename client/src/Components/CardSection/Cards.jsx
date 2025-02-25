import React from 'react'
import './Cards.css'

export default function Cards({theme}) {
  return (
    <section  className={`cards_main ${theme}`}>

    <div className='cards_frame'>
        <div className='cards_program'>
          <div className='cards_tag'>
          <img src="/assets/images/Vector.png" alt="" />
          <p>OUR PROGRAM</p>
          </div>
            
            <h1>Launch your experience enhancement <br /> through our transformative <br /> courses and sessions journey.</h1>
        </div>

        
        <div className='cards_division'>
        <div className='cards_alignment'>
        <div className='cards_sect'>
          
          <img  src={theme === "dark" ? "/assets/images/MentorshipVectorDark.png" : "/assets/images/MentorshipVector.png"} alt="Mentorship" />
          <p id='title'>Mentorship</p>
          <p>Gain invaluable <br /> insights from our <br />top notch experts, <br /> guest speakers, <br /> paired with <br /> personalized <br /> mentorship to guide <br />your path.</p>
      </div>
      </div>

      <div className='cards_alignment'>
      <div className='cards_sect'>
      <img  src={theme === "dark" ? "/assets/images/CertifiedVectorDark.png" : "/assets/images/CertifiedVector.png"} alt="Certified" />
      <p id='title'>Get Certified</p>
          <p>Equipped with certified
              and qualified experts
              mentorship, join in
              our seamless experience
              of concept to creation,
              which makes you 
              ready to enter the 
              market. </p>
      </div>
      </div>

      <div className='cards_alignment'>
      <div className='cards_sect'>
      <img  src={theme === "dark" ? "/assets/images/CareerVectorDark.png" : "/assets/images/CareerVector.png"} alt="Career" />
          <p id='title'>Career Preparation</p>
          <p>Dive into a variety of
              disciplines, gaining
              exposure that helps
              crystallize your future
              career aspirations.</p>
      </div>
      </div>

      <div className='cards_alignment'>
      <div className='cards_sect'>
      <img  src={theme === "dark" ? "/assets/images/CommunityVectorDark.png" : "/assets/images/CommunityVector.png"} alt="Community" />
          <p id='title'>Community</p>
          <p>
          Join a like-minded
          community of highly
          motivated
          individuals, fostering
          connections that
          propel your personal
          and professional
          growth.
            </p>  
    </div>
        </div>
        </div>
        </div>
    </section>
  )
}
