import React,{useRef, useEffect} from 'react'
import ReactPlayer from 'react-player';
import {  useLocation } from 'react-router-dom';
import img2 from '../Asset/Premium_Photo___Telegram_logo_on_realistic_cpu_technology_background_3d__1_-removebg-preview.png'

const VIDEO_PATH = 'https://youtu.be/vsmHgATKDyo?si=RT_7mlVbOP-mQx2t';



const Demo = () => {

    const playerRef = useRef(null);
  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);


  return (
    <section className='demo'>
        <div className='demo-c'>
                <div className='vid'>
                    <ReactPlayer ref={playerRef} width='100%' height='450px' url={VIDEO_PATH} controls={true} playing={true} muted  className='video' style={{width:'50px'}}/>
                </div>
                <div className="text">
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, impedit at error et placeat eos voluptates molestiae beatae repudiandae! Excepturi autem aliquam repudiandae, nostrum incidunt doloremque voluptates eaque repellat voluptas?</p> */}
                    <button>View Demo</button>
                </div>
                
        </div>
    </section>
    
  )
}

export default Demo