import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'

export const MenuCategories = () => {
  return (
    <div className={styles.categoryItems}>
        <Link href={"/blog?cat=style"} className={`${styles.categoryItem} ${styles.style}`}>
          Style
        </Link>
        <Link href={"/blog?cat=fushion"} className={`${styles.categoryItem} ${styles.fushion}`}>
          fushion
        </Link>
        <Link href={"/blog?cat=food"} className={`${styles.categoryItem} ${styles.food}`}>
          food
        </Link>
        <Link href={"/blog?cat=travel"} className={`${styles.categoryItem} ${styles.travel}`}>
          travel
        </Link>
        <Link href={"/blog?cat=culture"} className={`${styles.categoryItem} ${styles.culture}`}>
          culture
        </Link>
        <Link href={"/blog?cat=coding"} className={`${styles.categoryItem} ${styles.coding}`}>
          coding
        </Link>
      </div>
  )
}
