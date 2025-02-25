import React from 'react'
import './Banner.css'

export default function Banner({theme}) {
  return (
    <section className={`banner_main ${theme}`}>
    <aside>
      <div className='banner_text'>
      <h1>
        Your Modern <br />
        Courses Hub
      </h1>
      <p>
      Want to learn premium courses online? <br />
      Join us now!
      </p>
      <div className='landingpage_buttons'>
        <button>Sign Up</button>
        <button>Registeration</button>
      </div>
      <h3>Choose Category:</h3>
      <div className='landingpage_list'>
        <ul>
          <li>Web Development</li>
          <li>Graphic Designing</li>
          <li>Cyber Security</li>
        </ul>
        <ul>
          <li>Video Editing</li>
          <li>AI/ ML</li>
          <li>Freelancing</li>
        </ul>
      </div>
      </div>



    </aside>

    <aside>
    <div className='landingpage_banner'>
        <div className='one'>
          
        </div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='two'>
            <div className='top'>
            </div>
            <div className='bottom'>
            </div>
        </div>
        <div className='three'>
          
        </div>
      </div>
    </aside>
  </section> 

  )
}
