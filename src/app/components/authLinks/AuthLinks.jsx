"use client";

import React, { useState } from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { SiWritedotas } from "react-icons/si";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";

const AuthLinks = props => {

  const [open, setOpen] = useState(false);

  const { status } = useSession();


  return (<>
    {status === "unauthenticated" ? (
      <Link href="/login" className={styles.links}>
        <RiLoginCircleLine size={24} className={styles.icon}/>
      </Link>
    ) : (
      <>
        <Link href="/write">
          <SiWritedotas size={24} className={styles.icon}/>
        </Link>
        <span className={styles.link} onClick={signOut}>
          <RiLogoutCircleLine size={24} className={styles.icon}/>
        </span>
      </>
    )}

    <div className={styles.burger} onClick={() => { setOpen(!open) }}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>

    {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        {status === "unauthenticated" ? (
          <Link href="/login">
            <RiLoginCircleLine size={24} className={styles.icon}/>
          </Link>
        ) : (
          <>
            <Link href="/write">
              <SiWritedotas size={24} className={styles.icon}/>
            </Link>
            <span className={styles.link}>
              <RiLogoutCircleLine size={24} className={styles.icon}/>
            </span>
          </>
        )}
      </div>
    )}
  </>
  )
}

export default AuthLinks