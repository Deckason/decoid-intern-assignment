import React from 'react'
import styles from "./page.module.css"
import { RiArrowDropLeftLine } from "react-icons/ri";
import ButtomNav from '../components/buttomNav/ButtomNav';
import WorkoutSchedule from "../components/workoutComp/workoutSchedule/WorkoutSchedule"
import AddWorkout from '../components/workoutComp/addWorkout/AddWorkout';

const page = () => {
  return (
    <div className={styles.container}>
    <div className={styles.page_title}>
        <span><RiArrowDropLeftLine /></span>
        <h1>Workout Schedule</h1>
    </div>
    <div className={styles.main}>
      <WorkoutSchedule />
    </div>
    <AddWorkout />
    <ButtomNav />
</div>
  )
}

export default page