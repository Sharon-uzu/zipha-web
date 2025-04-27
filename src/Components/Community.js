import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { SlPlane } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Community = () => {
  return (
    <div className='community'>
        <div className="comm">
            <div className="com-l">
                <h2>Join The Community</h2>
                <p>Join over 100+ Zipha believers and elevate your community to the next level.</p>
            </div>

            <div className="com-r">
                <a href='' className="one">
                    <div>
                        <SlPlane className='c-i'/>
                        <h4>GET STARTED</h4>
                    </div>
                    <MdArrowOutward className='c-i'/>
                </a>

                <a href='' className="one">
                    <div>
                        <FaTwitter className='c-i'/>
                        <h4>TWITTER</h4>
                    </div>
                    <MdArrowOutward className='c-i'/>

                </a>

                <a href='' className="one">
                    <div>
                        <IoLogoInstagram className='c-i'/>
                        <h4>INSTAGRAM</h4>
                    </div>                        
                    <MdArrowOutward className='c-i'/>
                </a>

                <a href='' className="one">
                    <div>
                        <FaYoutube className='c-i'/>
                        <h4>YOUTUBE</h4>
                    </div>
                    <MdArrowOutward className='c-i'/>

                </a>

            </div>
        </div>
        
    </div>
  )
}

export default Community