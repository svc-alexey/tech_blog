"use client";

import React, { useContext } from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = props => {

  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? { backgroundColor: "white", transition: "background-color 500ms linear" } : { backgroundColor: "#0f172a", transition: "background-color 500ms linear" }}>
      <Image src={"/moon.png"} alt='' width={14} height={14} />
      <div className={styles.ball} style={theme === "dark" ? { left: 1, background: "#0f172a", transition: "background-color 500ms linear" } : { right: 1, background: "white", transition: "background-color 500ms linear" }}></div>
      <Image src={"/sun.png"} alt='' width={14} height={14} />
    </div>
  )
}



export default ThemeToggle