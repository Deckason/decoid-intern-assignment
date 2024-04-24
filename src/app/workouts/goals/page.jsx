import React from 'react'
import styles from "./goals.module.css"

const page = () => {
  return (
    <div className={`${styles.container}`}>
        <form className={`${styles.form}`}>
            <h1>What are your goals?</h1>
            <div className={styles.form_inputs}>
                <div className={styles.goal}>
                    <p>Weight Loss</p>
                    <input type="checkbox"/>
                </div>
                <div className={styles.goal}>
                    <p>Muscle Gain</p>
                    <input type="checkbox"/>
                </div>
                <div className={styles.goal}>
                    <p>Flexibility and Mobility</p>
                    <input type="checkbox"/>
                </div>
                <div className={styles.goal}>
                    <p>General Fitness</p>
                    <input type="checkbox"/>
                </div>
                <div className={styles.goal}>
                    <p>Event - specific training</p>
                    <input type="checkbox"/>
                </div>
                <div className={styles.goal}>
                    <p>Mindfulness and Mental Health</p>
                    <input type="checkbox"/>
                </div>
            </div>

            <button type={"submit"} className={`submitBtn ${styles.btn}`}
            >Confirm</button>
        </form>
    </div>
  )
}

export default page