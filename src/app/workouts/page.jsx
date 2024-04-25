import React from 'react'
import styles from "./page.module.css"
import { RiArrowDropLeftLine } from "react-icons/ri";
import ButtomNav from '../components/buttomNav/ButtomNav';

const page = () => {
  return (
    <div className={styles.container}>
    <div className={styles.page_title}>
        <span><RiArrowDropLeftLine /></span>
        <h1>Workout Schedule</h1>
    </div>
    <div className={styles.main}>

    </div>
    <ButtomNav />
</div>
  )
}

export default page