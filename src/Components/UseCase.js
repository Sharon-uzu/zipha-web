import React from 'react'
import { HiArrowPath } from "react-icons/hi2";
import img from '../Asset/grey.jpg'
import img1 from '../Asset/king.jpg'
import b1 from '../Asset/b1.jpg'
import b2 from '../Asset/b2.jpg'
import c1 from '../Asset/c1.jpg'
import c2 from '../Asset/c2.jpg'


const UseCase = () => {
  return (
    <div className='usecase'>
        <h2>Use Cases</h2>

        <div className="use-cases">
            <div className="use-case1">
                <div className="first">
                    <div className="circs">
                        <div className="circ"></div>
                    </div>
                    <h3>Forex Signal Groups/Channel</h3>
                </div>
               
                <div className='each'>
                    <p>Ziphabot is your ultimate tool for running profitable Forex signal groups — delivering efficient community oversight and seamless access control — all in one powerful solution.</p>
                    <div className="imgs">
                        <img src={img} alt="" />
                        <img src={img1} alt="" />
                    </div>

                </div>
            </div>

            <div className="use-case1">
                <div className="first">
                    <div className="circs">
                        <div className="circ"></div>
                    </div>
                    <h3>Betting Communities</h3>
                </div>
                <div className='each'>
                    <p>Ziphabot offers a streamlined solution for managing betting communities, making access control effortless and community management more efficient.</p>
                    <div className="imgs">
                        <img src={b1} alt="" />
                        <img src={b2} alt="" />
                    </div>

                </div>
            </div>


            <div className="use-case1">
                <div className="first">
                    <div className="circs">
                        <div className="circ"></div>
                    </div>
                    <h3>Crypto Communities</h3>
                </div>
                <div className='each'>
                    <p>Ziphabot is the ultimate tool for betting communities — simplifying management and delivering seamless, secure access control.</p>
                    <div className="imgs">
                        <img src={c1} alt="" />
                        <img src={c2} alt="" />
                    </div>

                </div>
            </div>
        </div>

        {/* <div className="cases">
            <div className="case1">
                <div className="c-icon">
                    <HiArrowPath className='cc-i'/>
                </div>
                <div className="case1-c">
                    <h5>Forex Signal Group</h5>
                </div>
            </div>

            <div className="case1">
                <div className="c-icon">
                    <HiArrowPath className='cc-i'/>
                </div>
                <div className="case1-c">
                    <h5>Forex Signal Channel</h5>
                </div>
            </div>

            <div className="case1">
                <div className="c-icon">
                    <HiArrowPath className='cc-i'/>
                </div>
                <div className="case1-c">
                    <h5>Betting Communities</h5>
                </div>
            </div>

            <div className="case1">
                <div className="c-icon">
                    <HiArrowPath className='cc-i'/>
                </div>
                <div className="case1-c">
                    <h5>crypto communities</h5>
                </div>
            </div>


        </div> */}
        
    </div>
  )
}

export default UseCase