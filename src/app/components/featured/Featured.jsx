import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, tech blog here!</b> Discover stories and creative idea.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, amet?</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo, aspernatur illum laboriosam nisi dignissimos unde commodi aliquid eos ipsum ad. Suscipit, modi, quibusdam quos perferendis ipsam molestiae dolores, eveniet corporis doloribus voluptas beatae ipsum. Voluptatem necessitatibus, aliquam natus quia odio modi quisquam aut esse. Repudiandae eveniet quo minima tenetur consectetur autem nobis nam eaque dolorum rem! Explicabo rerum perferendis labore perspiciatis laborum. Eaque labore ipsa sed rem harum, odit eius eligendi atque architecto ducimus quisquam enim commodi at nam optio facilis est error nisi eos, quas ullam! Asperiores sequi expedita iure. Vitae, molestiae ad facilis at nihil odio similique.</p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}



export default Featured