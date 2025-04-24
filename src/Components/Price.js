import React,{useState} from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Modal from "react-modal";


const Price = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const toggleModal1 = () => {
        setIsModalOpen1(!isModalOpen1);
    };
    function openModal1(){
        setIsModalOpen1(true)
    }

    function closeModal1(){
        setIsModalOpen1(false)
    }


  return (
    <div className='pricing' id='price'>
        <h2>Choose Pricing Plans</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudian.</p>

        <div className="price">
            <div className="price1">
                <div className='cnt'>
                    <h1>$500</h1>
                    <h2>Starter</h2>
                    <p>Perfect for small businesses, this package includes basic automation features, 1000 user slots, and 1-month support. $500 (One-time payment).</p>

                    <h5><IoCheckmarkCircleSharp className='p-i'/>Valid till 14 days</h5>
                    <h5><IoCheckmarkCircleSharp className='p-i'/>Limited integration</h5>
                    <h5><IoCheckmarkCircleSharp className='p-i'/>2 Rules active</h5>
                    

                    <div className='btn'>
                        <a href=""><button>Get Started</button></a>
                    </div>
                    
                </div>
            </div>

            <div className="price1 price2">
                <div className='cnt'>
                    <h1>$850</h1>
                    <h2>Pro</h2>
                    <p>Ideal for growing businesses, this package offers advanced automation features, 5000 user slots, and 3-month support. $850 (One-time payment).</p>

                    <h5><IoCheckmarkCircleSharp className='p-i'/>Valid till 14 days</h5>
                    <h5><IoCheckmarkCircleSharp className='p-i'/>Limited integration</h5>
                    <h5><IoCheckmarkCircleSharp className='p-i'/>2 Rules active</h5>
                    

                    <div className='btn'>
                        <button onClick={openModal1}>Get Started</button>
                    </div>
                    
                </div>
            </div>


            <div className="price1">
                <div className='cnt'>
                    <h1 style={{color:'hsla(0, 0%, 37%, .4)'}}>Custom Price</h1>
                    <h2>Enterprise</h2>
                    <p>Suitable for large businesses, this package provides premium automation features, unlimited user slots, and dedicated support. (Custom pricing).</p>

                   
                    <h5><IoCheckmarkCircleSharp className='p-i'/>Valid till 14 days</h5>
                    <h5><IoCheckmarkCircleSharp className='p-i'/>Limited integration</h5>
                    <h5><IoCheckmarkCircleSharp className='p-i'/>2 Rules active</h5>
                    
                    <div className='btn'>
                    <button onClick={openModal1}>Get Started</button>
                    </div>
                    
                </div>
            </div>


        <Modal
        isOpen={isModalOpen1}
        onRequestClose={toggleModal1}
        contentLabel="Example Modal"
        className="two"
        style={{
          overlay: {
            width:'100%',
            position: "fixed",
            top: "0px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1200000000000,
            // backgroundColor: "hsl(0, 0%, 0%, .5)",
            backgroundColor: "hsl(0, 0%, 0%, .6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          },
        }}
      >
  
        <div className="m-message">
          <div className="message">
            <h4>Coming Soon</h4>
            {/* <h4>This offer will be available from June 1st, 2024.</h4> */}
            
            <button type="button" onClick={closeModal1} style={{cursor:'pointer'}}>
              OK
            </button>
          </div>
          
        </div>
        
      </Modal>


        </div>
    </div>
  )
}

export default Price