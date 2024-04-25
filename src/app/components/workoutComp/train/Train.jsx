import React from 'react'
import styles from "./train.module.css"
import Image from 'next/image'
import train from "../../../../../public/media/train.png"

const Train = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>What Do You Want to Train</h2>
        <div className={styles.card}>
            <div className={styles.content}>
                <h4>Full Body Workout</h4>
                <p>Arms</p>
                <p>Chest</p>
            </div>
            <div className={styles.img}>
                <Image
                    src={train}
                    height={200}
                    width={500}
                    alt='train-img'
                />
            </div>
        </div>
    </div>
  )
}

export default Train