import React from 'react'
import styles from "./addWorkout.module.css"
import { FaPlus } from 'react-icons/fa'

const AddWorkout = () => {
  return (
    <div className={styles.add}><FaPlus className={styles.icon}/></div>
  )
}

export default AddWorkout