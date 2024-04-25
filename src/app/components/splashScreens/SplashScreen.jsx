import React, { useState } from 'react'
import styles from "./splashScreen.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SplashScreen1 = ({content, setSplashScreenCount}) => {
    const [nextSplash, setNextSplash] = useState(false)
  return (
    <div className={`${styles.container} ${nextSplash && styles.nextSplash}`}>
        <Link className={`${styles.skip_button}`} href={"/register"}>Skip</Link>
        <div className={`${styles.splash_img}`}>
            <Image 
                src={content.img}
                height={500}
                width={700}
                alt={"Splash-screen-img1"}
                priority
            />
        </div>
        <div className={`${styles.splash_text_container}`}>
            <h3 className={`${styles.splash_text_h3}`}>{content.header}</h3>
            <p className={`${styles.splash_text_content}`}>{content.content}</p>
        </div>
        <div className={`${styles.next_splash_container}`}
            onClick={()=>{
                setNextSplash(true)
                setSplashScreenCount(1)
                setNextSplash(false)
            }}
        >
            <div className={`${styles.arc}`}>
                <span><MdOutlineArrowForwardIos style={{color: "#fff"}}/></span>
            </div>
        </div>
    </div>
  )
}

export default SplashScreen1