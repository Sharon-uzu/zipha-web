import React from 'react';
import img from '../Asset/9 Most Helpful Telegram Bots for Channel Admins.jpeg'
import { FaSun, FaReceipt, FaPhone} from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import { MdGroupWork } from "react-icons/md";




const Service = () => {
  return (
    <div>
        <div className="service" id='service'>

            <h1>What We Offer</h1>

            <div className="serv-l">
                <img src={img} alt="" />
            </div>

            <div className="serv-r">

                <div className="serv1">
                    <div className="text">
                        <h3>Automated Payment Systems</h3>
                        <p>Streamline your payment processes with our cutting-edge bot technology, ensuring seamless transactions for your Forex trading business.</p>
                    </div>
                    <span style={{backgroundColor:'#71f1f5'}}>
                        <MdOutlinePayment className='s-i' style={{color:'#000'}}/>
                    </span>
                </div>

                <div className="serv1">
                    <div className="text">
                        <h3>Enhanced User Experience</h3>
                        <p>Our bots are designed to provide top-notch customer support, ensuring your users receive prompt assistance and personalized engagement.</p>
                    </div>
                    <span style={{backgroundColor:'#03103f'}}>
                        <FaUserClock className='s-i'/>
                    </span>
                </div>


                <div className="serv1">
                    <div className="text">
                        <h3>Paid Group Automation</h3>
                        <p>Easily manage your paid groups with our automation solutions, including member management, content sharing, and more.</p>
                    </div>
                    <span>
                        <MdGroupWork className='s-i'/>
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Service