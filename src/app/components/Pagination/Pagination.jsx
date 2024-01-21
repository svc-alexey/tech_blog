import React from 'react'
import styles from './pagination.module.css'

const Pagination = props => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previos</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}



export default Pagination