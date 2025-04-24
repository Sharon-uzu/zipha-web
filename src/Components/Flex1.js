import React from 'react'
import flex2 from '../Asset/3d.png'
import flex from '../Asset/The disruptive power of  technology.jpeg'

const Flex1 = () => {
  return (
    <div>
        <div className="flex1" id='about'>
            <div className="text">
                <h3>About Us</h3>
                <p><b>Zipha Tech Pro</b> is a cutting-edge Telegram bot automation platform designed to revolutionize the way businesses interact with their customers. Our innovative solution empowers Forex traders and Telegram group administrators to streamline their operations, enhance customer experience, and reduce unnecessary stress.</p>
                <h4>Our Mission</h4>
                <p>At Zipha Tech, we strive to provide a secure, user-friendly, and efficient automation platform that enables businesses to:</p>

                <ul>
                    <li>Automate payment processes and user management.</li>
                    <li>Provide 24/7 customer support and self-service options.</li>
                    <li>Reduce the burden of frequent queries and messages.</li>
                    <li>Enhance customer satisfaction and loyalty.</li>
                </ul>
                {/* <a href=""><button>Contact Us</button></a> */}
            </div>
            <img src={flex} alt="" />
            
        </div>


        <div className="flex1 flex2">

            <img src={flex2} alt="" />

            <div className="text">
                <h3>Our Solution</h3>
                <p>Our Telegram bot automation platform offers a comprehensive suite of services, including:</p>
                <ul>
                    <li><b>Automated Payment Systems:</b> Secure and efficient payment processing, eliminating the need for manual transactions.</li>
                    <li><b>Customer Self-Service:</b> Empowering users to access information, resolve issues, and manage their accounts independently.</li>
                    <li><b>Smart FAQ System:</b> Intelligent resolution of frequently asked questions, reducing support queries.</li>
                    <li><b>Personalized User Interaction:</b> Friendly and engaging automated responses, ensuring a seamless user experience.</li>
                    <li><b>Advanced User Management:</b> Efficient management of user data, subscriptions, and group membership.</li>
                </ul>
                {/* <a href=""><button>Contact Us</button></a> */}
            </div>
            
        </div>
    </div>
  )
}

export default Flex1