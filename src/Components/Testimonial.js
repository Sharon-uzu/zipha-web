import React, { useState, useEffect } from 'react';
import img1 from '../Asset/king.jpg';
import img from '../Asset/grey.jpg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "GreySuitFX",
    role: "Synthetic Indices Trader - Vix Mayor Community",
    img: img,
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum cumque praesentium sed expedita quam alias..."
  },
  {
    name: "KingFTP",
    role: "Automation Specialist - Zipha Community",
    img: img1,
    message: "We transitioned from manual to fully automated services using Zipha’s solution. It's a total game changer."
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % total);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [total]);

  return (
    <div className='testimony'>
      <h2>
        Testimonial from your fellow community <span className="highlighted">owners</span>
      </h2>
      <p>Tested and trusted by the best in the space</p>

      <div className="tests">
        <div className="test1">
          <div className="img">
            <img src={testimonials[current].img} alt={testimonials[current].name} />
          </div>

          <div className='t-text'>
            <h3>{testimonials[current].name}</h3>
            <p>{testimonials[current].role}</p>
            <h6>{testimonials[current].message}</h6>

            <div className="txt-btns">
              <div onClick={prev}><FaArrowLeft className='btn-i' /></div>
              <div onClick={next}><FaArrowRight className='btn-i' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
