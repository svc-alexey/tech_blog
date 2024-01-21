import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image';
import Menu from '../components/menu/Menu';
import { Comments } from '../components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>01.03.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim sapiente in deleniti dolore voluptatibus architecto nesciunt facere iusto, debitis sed vero, rerum error nulla repudiandae repellendus recusandae. Aut aliquid inventore tenetur quae ipsa iure officiis ipsam voluptates optio quos dolorum molestiae, modi quo quibusdam libero quis, enim repellendus aspernatur.</p>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, delectus?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim sapiente in deleniti dolore voluptatibus architecto nesciunt facere iusto, debitis sed vero, rerum error nulla repudiandae repellendus recusandae. Aut aliquid inventore tenetur quae ipsa iure officiis ipsam voluptates optio quos dolorum molestiae, modi quo quibusdam libero quis, enim repellendus aspernatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim sapiente in deleniti dolore voluptatibus architecto nesciunt facere iusto, debitis sed vero, rerum error nulla repudiandae repellendus recusandae. Aut aliquid inventore tenetur quae ipsa iure officiis ipsam voluptates optio quos dolorum molestiae, modi quo quibusdam libero quis, enim repellendus aspernatur.</p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage;