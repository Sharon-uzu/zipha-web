import React from 'react'
import img from '../Asset/9 Most Helpful Telegram Bots for Channel Admins.jpeg'
import {FaReceipt, FaPhone} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { RiFolderReduceFill } from "react-icons/ri";
import { MdAddChart } from "react-icons/md";
import { AiFillSecurityScan } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineTrackChanges } from "react-icons/md";
import { MdPayment } from "react-icons/md";


const Benefit = () => {
  return (
    <div>
        <div className="service benefits">

            <h1>Why Zipha</h1>
            {/* <p className='zipha'>By choosing <b>Zipha Tech,</b> businesses can:</p> */}

            {/* <div className="serv-l">
                <img src={img} alt="" />
            </div> */}

            <div className="serv-r">

                <div className="serv1">
                    <div className="text">
                        <h3>No more awkward DMs </h3>
                        {/* <p>Minimize the burden of customer inquiries and messages.</p> */}
                    </div>
                    <span>
                        <MdOutlineMessage  className='s-i'/>
                    </span>
                </div>

                <div className="serv1">
                    <div className="text">
                        <h3>Community security & protection</h3>
                        {/* <p>Provide 24/7 support and self-service options.</p> */}
                    </div>
                    <span>
                        <RiSecurePaymentLine className='s-i'/>
                    </span>
                </div>


                <div className="serv1">
                    <div className="text">
                        <h3>Revenue on autopilot - daily, weekly or monthly</h3>
                    </div>
                    <span>
                        <MdAddChart className='s-i'/>
                    </span>
                </div>


                <div className="serv1">
                    <div className="text">
                        <h3>Dashboard to track all processess in real time</h3>
                    </div>
                    <span>
                        <MdOutlineTrackChanges className='s-i'/>
                    </span>
                </div>

                <div className="serv1">
                    <div className="text">
                        <h3>Receive payment from anywhere</h3>
                    </div>
                    <span>
                        <MdPayment className='s-i'/>
                    </span>
                </div>

              
            </div>
        </div>
    </div>
  )
}

export default Benefit