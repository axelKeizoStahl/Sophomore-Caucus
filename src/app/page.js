"use client";
import Timer from './components/Schedule'
import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.container}>
          <Image
          src='/images/logo.png'
          width={230}
          height={230}
          alt='Sophmore Caucus'
          />
          <div>
            <h1>Sophomore Caucus</h1>
            <h2>2024</h2>
          </div>
        </div>
      <div className={styles.widgets}>
        <div className={styles.homeEvent}>
          <h2>Upcoming Event</h2>
          <p> No events currently planned, come back later. Thank you!</p>
          <small>Event Date: TBD</small>
        </div>
        <Timer />
      </div>
      </div>
    </div>
  )
}

