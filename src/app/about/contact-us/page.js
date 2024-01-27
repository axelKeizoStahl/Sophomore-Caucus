"use client"
import styles from './contact-us.module.css'
import BouncingDivs from '../../components/BouncingDivs.js'

export default function Page() {
  return (
    <div>
      <BouncingDivs />
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdi0gWjcGXZR4OPhXcxjFvv5rqejW8gxvnt89stTXo2neiTww/viewform" alt="contact form" className={styles.btn}>Contact Us!</a>
    </div>
  )
}
