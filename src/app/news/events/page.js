"use client"
import styles from './events.module.css'
import Link from 'next/link'
import { useState } from 'react'
import CloseIcon from '../../images/close-button-png-30242(1).png'
import Image from 'next/image'
import Logo from '../../logo.png'

export default function Page() {
  const [event_info_show, setEvent_info_show] = useState("0")

  var events = [
   /**{
      title: "Dance",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },**/
  ]
  return (
    <div className={`${typeof event_info_show!="string" ? styles.darken:""} ${styles.upcoming_events}`}>
      <div className={styles.navbar}></div>
      <div className={`${styles.event_info} ${typeof event_info_show=="string" ? styles.hide : ""}`}>
        <div className={styles.container}>
          <Image src={Logo} className={styles.close_button} alt="Close Icon" width="100" height="100" onClick={()=>{setEvent_info_show("0")}}/>
          <div className={styles.info}>
            <h1>{events.length > 0 ? events[event_info_show].title : ""}</h1>
            <p>{events.length > 0 ? events[event_info_show].description : ""}</p>
            <h2> When? </h2>
            <p>{events.length > 0 ? events[event_info_show].date : ""}</p>
            <p>{events.length > 0 ? events[event_info_show].time : ""}</p>
            <h2> Where? </h2>
            <p>{events.length > 0 ? events[event_info_show].location : ""}</p>
          </div>
          </div>
        </div>
      <div className={styles.header}>
        <Image src={Logo} alt="Logo" width="200" height="200"/>
        <h1 className={styles.title}>Upcoming Events</h1>
      </div>
        <Link className={styles.past_events_link} href="/news/events/past-events"><p>Past Events</p></Link>
        <div className={styles.events}>
          {events.slice(0).reverse().map((event, index) => (
            <div className={styles.event} key={index} onClick={()=>{setEvent_info_show(index)}}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
            )
          )}
        </div>
        <h1 className={`${styles.end_message} ${styles.title}`}>These are all the events we have planned for now. Check back later for more!</h1>
    </div>
  )
}
