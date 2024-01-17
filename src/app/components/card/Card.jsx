import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={"/p1.jpeg"} alt='' fill className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href={"/"}>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in, laboriosam veniam impedit soluta dignissimos error, non consectetur aperiam quis doloribus natus saepe asperiores ab temporibus aut nesciunt neque blanditiis vero. Temporibus atque praesentium inventore obcaecati ipsa repellendus et non sed, pariatur quisquam nihil dicta nesciunt corporis impedit numquam molestias.</p>
                <Link href={"/"} className={styles.link}>Read more</Link>
            </div>
        </div>
    )
}
