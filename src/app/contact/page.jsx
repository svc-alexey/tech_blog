import React from 'react'
import styles from './contactPage.module.css'

const ContactPage = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.header}>Если тебе хочеться связаться со мной по любым вопросам или просто написать "привет!" вот мои контакты:</h2>
        <div className={styles.list}>
            <span className={styles.contact}>Почта: a@svc-code.ru</span>
            <span className={styles.contact}>Telegram: @svc_alexey</span>
        </div>
    </div>
  )
}

export default ContactPage