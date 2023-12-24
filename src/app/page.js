"use client";
import Timer from './components/Schedule'
import Image from 'next/image'
import logo from './logo.png'
import styles from './home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.container}>
          <Image
          src={logo}
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
          <p> Vel turpis nunc eget lorem dolor sed viverra ipsum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Mattis rhoncus urna neque viverra. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Vitae semper quis lectus nulla at volutpat diam ut. Enim sed faucibus turpis in eu mi bibendum neque egestas.</p>
          <small>Event Date: 03/23/08</small>
        </div>
        <Timer />
      </div>
      </div>
    </div>
  )
}

