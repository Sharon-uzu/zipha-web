import React from 'react'
import img from '../Asset/Premium Photo _ Telegram sign 3d rendering abstract look dark realistic iconic background with a podium stage (1).jpeg'
import { FaSun, FaReceipt, FaPhone} from "react-icons/fa";
import { GoSun } from "react-icons/go";

const Choose = () => {
  return (


    <div className='pricing choose'>
        <h2 className='titl'>How It Works</h2>
        <p>3 Simplified steps</p>

        <div className="price">
            <div className="price1">
                <div className='cnt'>
                <div className='circle'><h1>1</h1></div>
                    <h2>Sign Up</h2>
                    <p>Provide telegram details of your current community. Sync your communities with Ziphabot</p>
                    
                </div>
            </div>

            <div className="price1">
                <div className='cnt'>
                <div className='circle'><h1>2</h1></div>
                    <h2>Set Up</h2>
                    <p>Set up your services. Set your price all in a minute</p>

                </div>
            </div>


            <div className="price1">
                <div className='cnt'>
                    <div className='circle'><h1>3</h1></div>
                    <h2>Start Receiving Payment</h2>
                    <p>Ziphabot will automatically add and remove members from your group based on sub status</p>
                    
                </div>
            </div>


        </div>
    </div>
  )
}

export default Choose