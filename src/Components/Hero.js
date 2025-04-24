import React from 'react'
import img from '../Asset/Robot_PNG_-_Free_Download-removebg-preview.png'
import { FaTelegramPlane } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="bg"></div>
            

            <section>

                <div className="text">
                    <h6 className="trace-border">
                        <FaTelegramPlane className='t-ii'/>
                        Automation for Telegram channel, Group & Paid communities
                        <span className="top-border"></span>
                        <span className="right-border"></span>
                        <span className="bottom-border"></span>
                        <span className="left-border"></span>
                    </h6>


                    <h2>Telegram Payment System <span className="highlighted">Automation</span></h2>
                    <p>Zipha automate your VIP payment processes, channel/group access, and subscription tracking and modification. So you can focus on your business growth and community building.</p>
                    <div className="h-btns">
                        <a href="#about"><button>Get Started</button></a>
                        <a href="#about"><button className='btn2'>Contact Support</button></a>
                    </div>
                </div>

                <div className="img">
                    <img src={img} alt="" />
                </div>

            </section>
        </div>
    </div>
  )
}

export default Hero