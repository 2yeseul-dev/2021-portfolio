import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>{data.headerTagline}</h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph1}</p>
            
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "2yeseul95@gmail.com"
              }`}
              className="primary-btn"
            >
              Contact Me
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
