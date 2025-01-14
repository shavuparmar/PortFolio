import React from 'react'
import "./About.css"
import Header from '../Common/Header'
import Ghumi from './Ghumi'
import ShavuParmar from "./Images/Shavu.png"


export default function About() {
  return (
    <div className="Main-Container">
      <Header />
      <div className="About-Section">
        <div className="Aboutme">
          <div className="Aboutdetails">
            <h1>About Me</h1>
            <h2>ShavuParmar</h2>
            <span> <Ghumi />  </span>
            <p>
              Hello! I'm ShavuParmar, a passionate Web Developer, Graphic Designer, and UI/UX Designer dedicated to creating visually stunning, user-friendly, and impactful digital experiences. <br></br>
              I specialize in blending creativity with technical precision to build responsive websites, captivating graphics, and seamless user interfaces. Whether crafting a unique brand identity, coding pixel-perfect websites, or designing intuitive app interfaces, my goal is to help ideas come to life in a way that resonates with users.
            </p>
            <h3>What I Bring to the Table:</h3>
            <ul>
              <li> <b>Development:</b>  Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js, I create websites that are fast, scalable, and accessible.</li>
              <li> <b>Graphic Design: </b>  With an eye for detail and aesthetics, I design logos, marketing materials, and visual content that tell compelling stories.</li>
              <li> <b>UI/UX Design:</b>  I'm driven by a deep understanding of user behavior and design principles, ensuring that every interaction is meaningful and enjoyable.</li>
            </ul>
            <h3>My Approach:</h3>
            <p>I believe great design is where creativity meets purpose. I take the time to understand the unique needs of each project, collaborating closely with clients and stakeholders to deliver solutions that exceed expectations. From brainstorming concepts to delivering polished products, my process is transparent, efficient, and always tailored to the goals of the project.</p>
            <h3>Outside of Work:</h3>
            <p>When I'm not designing or coding, you can find me exploring the latest design trends, learning new tools, or sharing insights with the creative community.

              Let's create something amazing together!</p>
          </div>
          <div className="AboutImages">
            <img src={ShavuParmar} alt="ShavuParmar" />
          </div>
        </div>
      </div>
    </div>

  )
}
