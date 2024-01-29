import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'
import { DiGithubBadge } from "react-icons/di"
import { SiHabr } from "react-icons/si"
import { FaHome } from "react-icons/fa";
import { TiContacts, TiInfoLargeOutline } from "react-icons/ti";
import InfostartIcon from '../Icons/Infostart'

const Navbar = props => {
  return (
    <div className={styles.container}>

      <div className={styles.social}>
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
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          <FaHome size={24} className={styles.icon}/>
        </Link>
        <Link href="/contact" className={styles.link}>
          <TiContacts size={24} className={styles.icon}/>
        </Link>
        <Link href="/info" className={styles.link}>
          <TiInfoLargeOutline size={24} className={styles.icon}/>
        </Link>
        <AuthLinks />
      </div>
    </div>
  )
}



export default Navbar