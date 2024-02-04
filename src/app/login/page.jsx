"use client"

import styles from './loginPage.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

 const LoginPage = () => {

  const {data, status} = useSession();

  const router = useRouter();
  
  if(status === "loading"){
    return <div className={styles.loading}>Loading...</div>
  }

  if(status === "authenticated"){
    router.push("/");
  }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={() => signIn("yandex")}>Войти с Yandex</div>
            <div className={styles.socialButton} onClick={() => signIn("github")}>Войти с GitHub</div>
        </div>
    </div>
  )
}

export default LoginPage;
