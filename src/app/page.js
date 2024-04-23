"use client"
import React, { useState } from 'react'
import SplashScreen from './components/splashScreens/SplashScreen'
import splashImg1 from "../../public/media/splash1.png"
import splashImg2 from "../../public/media/splash2.png"

const SplashScreenContent = [
  {
    img: splashImg1, 
    header: "Track Your Goal", 
    content: "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
  },
  {
    img: splashImg2, 
    header: "Get Burn", 
    content: "Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever"
  }
]

const page = () => {
  const [SplashScreenCount , setSplashScreenCount  ] = useState(0)
  return (<div className='main'>
    <SplashScreen 
      content={SplashScreenContent[SplashScreenCount]} 
      SplashScreenCount={SplashScreenCount} 
      setSplashScreenCount={setSplashScreenCount}
    />
  </div>)
}

export default page