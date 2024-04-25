import React from 'react'
import styles from "./upComingWorkout.module.css"
import Workout from "../upcomingWorkout/workout/Workout"
import fullBody from "../../../../../public/media/fullBody.png"
import upperBody from "../../../../../public/media/upperBody.png"

const UpcomingWorkout = () => {
    const workoutDetails = [
        {
            id: 1,
            img: fullBody,
            title: "Full Body Workout",
            time: "Today 3pm"
        },
        {
            id: 2,
            img: upperBody,
            title: "Upper Body Workout",
            time: "4 Feb, 3:30 pm"
        }
    ]
  return (
    <div className={styles.container}>
        <div className={styles.caption}>
            <h2>Upcoming Workout</h2>
            <p>See more</p>
        </div>
        {workoutDetails.map(workout=>(
            <Workout key={workout.id} img={workout.img} title={workout.title} time={workout.time}/>
        ))}
    </div>
  )
}

export default UpcomingWorkout