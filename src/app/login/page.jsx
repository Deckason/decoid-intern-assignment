import Link from 'next/link'
import React from 'react'
import styles from "./login.module.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const page = () => {
  return (
    <div className={`${styles.container}`}>
        <form className={`${styles.form}`}>
            <h1>Welcome Back</h1>
            <div className={styles.form_inputs}>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />

                <span className={styles.forgot_password}>
                    <small>Forgot your password?</small>
                </span>
            </div>

            <button type={"submit"} className={`submitBtn ${styles.btn}`}>Sign In</button>

            <div className={styles.or}>
                <span></span>
                <p>Or</p>
                <span></span>
            </div>

            <div className={styles.social_links}>
                <span><FcGoogle className={styles.google}/></span>
                <span><FaFacebookF className={styles.facebook}/></span>
            </div>

            <small className={styles.createAcct}>Don’t have an account yet? <Link href={"/register"}>Create an account</Link></small>
        </form>
    </div>
  )
}

export default page