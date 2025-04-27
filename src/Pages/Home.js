import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Service from '../Components/Service'
import Flex1 from '../Components/Flex1'
import Price from '../Components/Price'
import Demo from '../Components/Demo'
import Footer from '../Components/Footer'
import Choose from '../Components/Choose'
import Benefit from '../Components/Benefit'
import Expert from '../Components/Expert'
import Contact from '../Components/Contact'
import Struggles from '../Components/Struggles'
import Reclaim from '../Components/Reclaim'
import Numbers from '../Components/Numbers'
import Testimonial from '../Components/Testimonial'
import GetStarted from '../Components/GetStarted'
import UseCase from '../Components/UseCase'
import Faq from '../Components/Faq'
import Community from '../Components/Community'


const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Struggles/>
      <Benefit/>
      <Reclaim/>
      <Choose/>
      <Numbers/>
      <Testimonial/>
      <UseCase/>
      <Price/>
      <GetStarted/>
      <Faq/>
      <Community/>
      <Contact/>
      {/* <Service/> */}
      {/* <Flex1/> */}
      {/* <Expert/> */}
      {/* <Demo/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home