import React from 'react'
import styles from './loginPage.module.css'

 const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Sign im with Google</div>
            <div className={styles.socialButton}>Sign im with GitHub</div>
            <div className={styles.socialButton}>Sign im with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage;