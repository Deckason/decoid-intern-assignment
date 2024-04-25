import React from 'react'
import styles from "./workout.module.css"
import Image from 'next/image'
import ToggleSwitch from '../../toggleSwitch/ToggleSwitch'

const workout = ({img, title, time}) => {
  return (
        <div className={styles.workout}>
            <div className={styles.img_cap}>
                <Image
                    src={img}
                    height={200}
                    width={500}
                    alt={"Img-caption"}
                />
            </div>
            <div className={styles.workout_details}>
                <p className={styles.title}>{title}</p>
                <small className={styles.time_stamp}>{time}</small>
            </div>
            <div className={styles.radio_button}>
                <ToggleSwitch />
            </div>
        </div>
  )
}

export default workout