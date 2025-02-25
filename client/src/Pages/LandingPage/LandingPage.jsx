import React, { useState } from "react";
import './LandingPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Cards from "../../Components/CardSection/Cards";

export default function LandingPage() {

  const [theme, setTheme] = useState("light");

  return (
    <main className={`landingpage_main ${theme}`}>
        <Navbar theme={theme} />
        <Banner theme={theme} />
        <div className='Ellipse'></div>
        <div className='Ellipse'></div>
        <div className='toggle'>
        <button  onClick={() => setTheme("dark")}>Dark</button>
        <button  onClick={() => setTheme("light")}>Light</button>
        </div>
        <hr style={{ width: '78%', height: '2px', backgroundColor: theme === 'light' ? 'black' : 'white', border: 'none' }} />    
        <Cards theme={theme} />
        <hr style={{ width: '78%', height: '2px', backgroundColor: theme === 'light' ? 'black' : 'white', border: 'none' }} />    
    </main>
  )
}
