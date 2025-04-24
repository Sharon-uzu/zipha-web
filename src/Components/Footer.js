import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div>

<footer>
            <div className="foot1 foot">
                <div>
                    <a href='' className='link'>Feature</a>
                    <a href='' className='link'>Service</a>
                    <a href='#price' className='link'>Pricing</a>
                    <a href='' className='link'>Contact Us</a>
                </div>
                <div className='f-icons'>
                    <a href=""><BsLinkedin className='icon'/></a>
                    <a href=""><BsTwitter className='icon'/></a>
                    <a href=""><BsFacebook className='icon'/></a>
                    <a href=""><BsInstagram className='icon'/></a>

                </div>
            </div>

            <div className="foot1 foot2">
                <div>
                    <p>Copyrights © 2024 Greybot</p>
                </div>
                {/* <div className='priv'>
                    <span className='span'>Privacy</span>
                    <span className='span'>Legal</span>
                    <span className='span'>Feedback</span>

                </div> */}

            </div>
        </footer>
   


    </div>
  )
}

export default Footer