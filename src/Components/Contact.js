import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";




const Contact = () => {
  return (
    <div>
        <div className="contact-us" id='contact'>
            <h1>Contact Us</h1>
            <div className="contact-c">
                

                <div className="first">
                    <FaPhoneAlt className='c-i'/>
                    <h6>Phone</h6>
                    <a href="">+1-222-765-89</a>
                </div>

                <div className="first">
                    <MdEmail className='c-i'/>
                    <h6>Email</h6>
                    <a href="">zipha@gmail.com</a>
                </div>


                <div className="first">
                    <FaHeadphones className='c-i'/>
                    <h6>Support</h6>
                    <a href="">info@zipha.com</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact