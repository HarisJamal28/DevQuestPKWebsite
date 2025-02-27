import React from 'react'
import './Cards.css'
import Vector from '../../assets/images/Vector.png';
import MentorshipVector from '../../assets/images/MentorshipVector.png';
import MentorshipVectorDark from '../../assets/images/MentorshipVectorDark.png';
import CertifiedVector from '../../assets/images/CertifiedVector.png';
import CertifiedVectorDark from '../../assets/images/CertifiedVectorDark.png';
import CareerVector from '../../assets/images/CareerVector.png';
import CareerVectorDark from '../../assets/images/CareerVectorDark.png';
import CommunityVector from '../../assets/images/CommunityVector.png';
import CommunityVectorDark from '../../assets/images/CommunityVectorDark.png';

export default function Cards({theme}) {
  return (
    <section  className={`cards_main ${theme}`}>

    <div className='cards_frame'>
        <div className='cards_program'>
          <div className='cards_tag'>
          <img src={Vector} alt="Our Program" />
          <p>OUR PROGRAM</p>
          </div>
            
            <h1>Launch your experience enhancement <br /> through our transformative <br /> courses and sessions journey.</h1>
        </div>

        
        <div className='cards_division'>
        <div className='cards_alignment'>
        <div className='cards_sect'>
          
        <img src={theme === "dark" ? MentorshipVectorDark : MentorshipVector} alt="Mentorship" />
          <p id='title'>Mentorship</p>
          <p>Gain invaluable <br /> insights from our <br />top notch experts, <br /> guest speakers, <br /> paired with <br /> personalized <br /> mentorship to guide <br />your path.</p>
      </div>
      </div>

      <div className='cards_alignment'>
      <div className='cards_sect'>
      <img src={theme === "dark" ? CertifiedVectorDark : CertifiedVector} alt="Certified" />
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
      <img src={theme === "dark" ? CareerVectorDark : CareerVector} alt="Career" />
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
      <img src={theme === "dark" ? CommunityVectorDark : CommunityVector} alt="Community" />
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
