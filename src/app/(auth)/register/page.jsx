"use client"
import React from 'react'
import styles from "./register.module.css"
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const page = () => {
    const {push} = useRouter()
  return (
    <div className={`${styles.container}`}>
        <form className={`${styles.form}`}>
            <h1>Create an account</h1>
            <div className={styles.form_inputs}>
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />
                <input type='email' placeholder='Email' />
                <input type="password" placeholder='Password' />

                <span className={styles.policy_chk_box}>
                    <input type="checkbox" name="" id="" />
                    <small>By proceeding, I agree to all <Link href={"#"}>T&C</Link> and  <Link href={"#"}>Privacy Policy</Link></small>
                </span>
            </div>

            <button type={"submit"} className={`submitBtn ${styles.btn}`}
                onClick={(e)=>{
                    e.preventDefault()
                    push("/workouts/goals")
                }}
            >Create an Account</button>

            <div className={styles.or}>
                <span></span>
                <p>Or</p>
                <span></span>
            </div>

            <div className={styles.social_links}>
                <span><FcGoogle className={styles.google}/></span>
                <span><FaFacebookF className={styles.facebook}/></span>
            </div>

            <small className={styles.haveAnACct}>Already have an account? <Link href={"/login"}>Login</Link></small>
        </form>
    </div>
  )
}

export default page