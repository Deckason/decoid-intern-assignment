import React from 'react'
import styles from "./alertMsg.module.css"
import { IoWarningOutline } from "react-icons/io5";

const AlertMsg = () => {
  return (
    <div className={styles.container}>
        <span><IoWarningOutline /></span>
        <small>You've burned fewer calories than yesterday. Time to get moving!</small>
    </div>
  )
}

export default AlertMsg