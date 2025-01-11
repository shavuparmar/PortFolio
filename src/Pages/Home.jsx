import React from 'react'
import "./Home.css"
import Header from '../Common/Header'
import DemoImage from './Images/image.png'
import Figma from "../Images/figma.png"
import Ghumi from './Ghumi'
import Skill from "../Images/Skill.png"

import Photoshop from "../Images/photoshop.png"
import Github from "../Images/Github.png"
import ReactJs from "../Images/React-Js.png"
import Html from "../Images/Html.png"
import Css from "../Images/Css.png"
import JavaScriptIcon from "../Images/JavaScriptIcon.png"
import Nodejs from "../Images/nodejs.png"



export default function Home() {


  return (
    <div className='Main-Section'>
      <Header />

      <div className="Container">
        <div className="HeroSection">
          <div className="textBox">
            <h1>ShavuParmar</h1>
            <h6> <Ghumi /> </h6>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tenetur incidunt aliquid sunt et illo dignissimos, id eveniet ab possimus nam unde eligendi. Nam, fugit perferendis quidem dolores debitis ipsa accusamus ipsum? Mollitia quo facere nisi maxime quidem, quisquam aliquid? </p>
            <a href="Resume.pdf" download={Figma}> <button className='ButtonDesign'
            >CV</button></a>
            <button className='ButtonDesign' type='Download' onClick={() => {
              alert("hello Sir Thise is Under process Please try again afert Some time")
            }}>Resume</button>
          </div>
          <div className="ImageSection">
            <img src={DemoImage} alt="SaurabhParmar" />
          </div>
        </div>
      </div>
      <div className="AnimationSection">
        <div className='Run'>
          <div className='Animation' >
            <div className='SideAni' onClick={() => { window.location.href = "https://www.instagram.com/shavuparmar" }} >
              <img src={Figma} alt='Figma'></img>
              <div>
                <h1>Shavu Parmar</h1>
              </div>
            </div>
          </div>
          <div className='Animation'>
            <div className='SideAni'>
              <img src={Figma} alt='Figma'></img>
              <h1>Saurabh Parmar</h1>
            </div>
          </div>
          <div className='Animation'>
            <div className='SideAni'>
              <img src={Figma} alt='Figma'></img>
              <h1>Shubham Parmar</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="Skill-Section">
        <div className="Skill-Details">
          <div className="About-Skill">
            <div className="Skill-Image">
              <img src={Skill} alt="" />
            </div>
            <div className="Skill-Heading ">
              <h1>Skill</h1>
              <div className="Skill-Grid">
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Photoshop} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Snapchat</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Figma} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Snapchat</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Html} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Snapchat</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Css} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Snapchat</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Nodejs} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Snapchat</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={ReactJs} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Snapchat</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Github} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Snapchat</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={JavaScriptIcon} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Snapchat</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>














    </div>

  )
}