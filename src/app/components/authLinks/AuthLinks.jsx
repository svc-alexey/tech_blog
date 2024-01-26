"use client";

import React, { useState } from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const AuthLinks = props => {

  const [open, setOpen] = useState(false);

  const {status} = useSession();
  

  return (<>
    {status === "unauthenticated" ? (
      <Link href="/login" className={styles.links}>Login</Link>
    ) : (
      <>
        <Link href="/write">Write</Link>
        <span className={styles.link} onClick={signOut}>Logout</span>
      </>
    )}

    <div className={styles.burger} onClick={() => {setOpen(!open)}}>
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
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
          </>
        )}
      </div>
    )}
  </>
  )
}

export default AuthLinks