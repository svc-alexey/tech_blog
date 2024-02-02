import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InfostartIcon from '../Icons/Infostart'
import { DiGithubBadge } from 'react-icons/di'
import { SiHabr } from 'react-icons/si'

const Footer = props => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} alt='alexey_blog' width={50} height={50} />
          <h1 className={styles.logoText}>Октопус Блог</h1>
        </div>
        <p className={styles.desc}>
          Самый лучший блог на свете!
        </p>
        <div className={styles.icons}>
          <a href={"https://infostart.ru/profile/1656875/"} target="_blank" rel="noopener noreferrer">
            <InfostartIcon size={24} />
          </a>
          <a href={"https://github.com/svc-alexey"} target="_blank" rel="noopener noreferrer">
            <DiGithubBadge size={24} />
          </a>
          <a href={"https://habr.com/ru/users/alexey7h/publications/articles/"} target="_blank" rel="noopener noreferrer">
            <SiHabr size={24} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Ссылки</span>
          <Link href={"/"}>Домой</Link>
          <Link href={"/info"}>Информация</Link>
          <Link href={"/contact"}>Контакты</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Сети</span>
          <a href={"https://infostart.ru/profile/1656875/"} target="_blank" rel="noopener noreferrer">
            Infostart
          </a>
          <a href={"https://github.com/svc-alexey"} target="_blank" rel="noopener noreferrer">
            Git Hub
          </a>
          <a href={"https://habr.com/ru/users/alexey7h/publications/articles/"} target="_blank" rel="noopener noreferrer">
            Habr
          </a>
        </div>
      </div>
    </div>
  )
}



export default Footer