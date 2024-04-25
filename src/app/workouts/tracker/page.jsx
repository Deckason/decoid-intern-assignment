"use client"
import React from 'react'
import styles from "./tracker.module.css"
import ButtomNav from '@/app/components/buttomNav/ButtomNav'
import UpcomingWorkout from '@/app/components/workoutComp/upcomingWorkout/UpcomingWorkout'
import Train from "../../components/workoutComp/train/Train"
import AlertMsg from '@/app/components/workoutComp/workoutAlert/AlertMsg'
import { RiArrowDropLeftLine } from "react-icons/ri";
import WorkoutChart from '@/app/components/workoutComp/workoutChart/WorkoutChart'
import { useRouter } from 'next/navigation'

const page = () => {
    const {push} = useRouter()
    const data = {
        labels: ['12:00', '6:00', '12:00', '6:00', ''],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: '#7E96FF',
            data: [10, 20, 30, 40, 50]
          },
          {
            label: 'Dataset 2',
            backgroundColor: '#FD9292',
            data: [20, 30, 40, 50, 60]
          },
          
        ]
      };
  return (
    <div className={styles.container}>
        <div className={styles.page_title}>
            <span><RiArrowDropLeftLine /></span>
            <h1>Workout Tracker</h1>
        </div>
        <div className={styles.main}>
            <div onClick={()=>{push("/workouts")}}><WorkoutChart data={data}/></div>
            <AlertMsg />
            <UpcomingWorkout />
            <Train />
        </div>
        <ButtomNav />
    </div>
  )
}

export default page