import React from 'react'
import styles from './infoPage.module.css'

 const InfoPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.header}>Привет!</h1>
        <p className={styles.infoText}>
            Всем привет, меня зовут Алексей. Это мой первый <strike>блин комом</strike> блог.
            Приложение написано на React фреймворке - Next.js. 
            Есть идея писать здесь полезную информацию по разработке, с чем приходиться столкнуться, какие решать проблемы и поделиться этим с другими. 
            Надеюсь эта информация будет кому-то полезна. 
            Оставляйте любой комментарий под постами и делитесь ею с другими!
        </p>
        </div>
        

    </div>
  )
}

export default InfoPage;