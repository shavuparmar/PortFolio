import React from 'react'
import "./Home.css"
import Header from '../Common/Header'
import DemoImage from './Images/image.png'
import Figma from "../Images/figma.png"
import Ghumi from './Ghumi'
import Skill from "../Images/All-Skill.png"
import LinkeDin from "../Images/Linkedin.png"
import Photoshop from "../Images/photoshop.png"
import Github from "../Images/Github.png"
import ReactJs from "../Images/React-Js.png"
import Html from "../Images/Html.png"
import Css from "../Images/Css.png"
import JavaScriptIcon from "../Images/JavaScriptIcon.png"
import Nodejs from "../Images/nodejs.png"
import Snapchat from "../Images/Snapchat.png"
import Instagram from "../Images/Instagram.png"



export default function Home() {
 
  return (
    <div className='Main-Section'>
      <Header />

      <div className="Container">
        <div className="HeroSection">
          <div className="textBox">
            <h1>Shavu Parmar</h1>
            <h6> <Ghumi /> </h6>
            <p> Hello! I'm ShavuParmar, a passionate Web Developer, Graphic Designer, and UI/UX Designer dedicated to creating visually stunning, user-friendly, and impactful digital experiences. </p>
            <p> I specialize in blending creativity with technical precision to build responsive websites, captivating graphics, and seamless user interfaces. Whether crafting a unique brand identity, coding pixel-perfect websites, or designing intuitive app interfaces, my goal is to help ideas come to life in a way that resonates with users.</p>
            <button className='ButtonDesign' onClick={() => {
              alert("There is No file in Server! Please try agian after some time")
            }}
            >CV</button>
            <button className='ButtonDesign' type='Download' onClick={() => {
              alert("There is No file in Server! Please try agian after some time")
            }}>Resume</button>
            <button onClick={() => { window.location.href = "https://t.me/shavuparmar" }} className='ButtonDesign'>Telegram</button>
          </div>
          <div className="ImageSection">
            <img src={DemoImage} alt="SaurabhParmar" />
          </div>
        </div>
      </div>
      <div className="AnimationSection">
        <h1>Connect With Me in</h1>
        <div className='Run'>
          <div className='Animation' >
            <div className='SideAni' >
              <img src={LinkeDin} alt='Figma'></img>
              <div>
                <h1>ShavuParmar</h1>
                <button className='SocialBtn-Design' onClick={() => { window.location.href = "https://www.linkedin.com/in/shavuparmar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }}>Follow</button>
              </div>
            </div>
          </div>
          <div className='Animation' >
            <div className='SideAni' >
              <img src={Instagram} alt='Figma'></img>
              <div className='SocialBtn'>
                <h1>ShavuParmar</h1>
                <button className='SocialBtn-Design' onClick={() => { window.location.href = "https://www.instagram.com/shavuparmar/" }}>Follow</button>
              </div>
            </div>
          </div>
          <div className='Animation' >
            <div className='SideAni' >
              <img src={Github} alt='Figma'></img>
              <div>
                <h1>ShavuParmar</h1>
                <button className='SocialBtn-Design' onClick={() => { window.location.href = "https://github.com/shavuparmar" }}>Follow</button>
              </div>
            </div>
          </div>
          <div className='Animation' >
            <div className='SideAni' >
              <img src={Snapchat} alt='Figma'></img>
              <div>
                <h1>Parmarshavu</h1>
                <button className='SocialBtn-Design' onClick={() => { window.location.href = "https://www.snapchat.com/add/parmarshavu" }}>Follow</button>
              </div>
            </div>
          </div>
          <div className='Animation' >
            <div className='SideAni' >
              <img src={Figma} alt='Figma'></img>
              <div>
                <h1>ShavuParmar</h1>
                <button className='SocialBtn-Design' onClick={() => { window.location.href = "https://www.figma.com/@shavuparmar" }}>Follow</button>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="Skill-">
        <div className="Skill-Details">
          <div className="About-Skill">
            <div className="Skill-Image">
              <img src={Skill} alt="" />
            </div>
            <div className="Skill-Section ">
              <div className="SkillHeading">
                <h1>Skill</h1>
              </div>
              <div className="Skill-Grid">
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Photoshop} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Photoshop</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Figma} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Figma</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Html} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Html</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Css} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Css</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Nodejs} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>NodeJs</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={ReactJs} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>ReactJs</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={Github} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>Git</h1>
                  </div>
                </div>
                <div className="Skill-Border ">
                  <div className="Skill-icon">
                    <img src={JavaScriptIcon} alt="" />
                  </div>
                  <div className="Skill-text">
                    <h1>JavaScript</h1>
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
