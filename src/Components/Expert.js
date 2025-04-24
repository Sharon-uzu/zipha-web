import React from 'react'
import flex from '../Asset/The disruptive power of  technology.jpeg'


const Expert = () => {
  return (
    <div>
        <div className="flex1">
            <div className="text">
                <h4>Our Expertise</h4>
                <p>Our team of experts has extensive experience in developing innovative automation solutions, ensuring our platform is reliable, scalable, and adaptable to meet the unique needs of our clients.</p>


                <h4>Join the Zipha Tech Community</h4>
                <p>Discover how our Telegram bot automation platform can transform your business. Sign up for a free consultation today and experience the future of customer interaction.</p>

                <a href="#contact"><button>Contact Us</button></a>
            </div>
            <img src={flex} alt="" />
            
        </div>
    </div>
  )
}

export default Expert