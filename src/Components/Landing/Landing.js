import React from 'react'
import "./Landing.css"
import location from "../../Assets/icons8-marker-100.png"
import world from "../../Assets/icons8-world-90.png"
import twitter from "../../Assets/icons8-twitterx-96.png"
import facebook from "../../Assets/icons8-facebook-96.png"
import instagram from "../../Assets/icons8-instagram-96.png"
import linkedin from "../../Assets/icons8-linkedin-96.png"
import addIcon from "../../Assets/icons8-add-64.png"

function Landing() {
  return (
    <div className='landing'>
        <h1>Michelle Cedeno</h1>
          <h3>Deputy Director</h3>
          <span className="location"><img src={location} height={20}/>Las Vegas | Biden for President</span>

          <h2>Manage media content and mobilize a team of 50+</h2>
          <div className='website-link-container'>
            <img src={world} height={40} alt="" />
            <p>MICHELLECEDENO.COM</p>
          </div>
          <div className='socials-connect-container'>
            <h2>LET'S CONNECT</h2>
            <div className='socials-container'>
                <img className='socials' src={twitter} alt="" />
                <img className='socials' src={facebook} alt="" />
                <img className='socials' src={instagram} alt="" />
                <img className='socials' src={linkedin} alt="" />
            </div>
            <div className='add-contact-container'>
                <img src={addIcon} height={40} alt=""/>
                <p>ADD to CONTACT</p>
            </div>
          </div>
    </div>
  )
}

export default Landing