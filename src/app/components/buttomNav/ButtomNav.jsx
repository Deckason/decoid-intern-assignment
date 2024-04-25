import React from 'react'
import styles from "./buttomNav.module.css"
import { BiHomeAlt2 } from "react-icons/bi";
import { CiImageOn, CiSearch } from "react-icons/ci";
import { TiCameraOutline } from "react-icons/ti";
import { FaRegUser } from 'react-icons/fa'

const ButtomNav = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.icons_container}>
            <div className={styles.left_icons}>
                <BiHomeAlt2 className={styles.icon}/>
                <CiImageOn className={styles.icon}/>
            </div>
            <div className={styles.center_icon}>
                <CiSearch className={`${styles.icon} ${styles.serach_icon}`}/>
            </div>

            <div className={styles.right_icons}>
            <TiCameraOutline className={styles.icon}/>
            <FaRegUser className={styles.icon}/>
            </div>
        </div>
    </nav>
  )
}

export default ButtomNav