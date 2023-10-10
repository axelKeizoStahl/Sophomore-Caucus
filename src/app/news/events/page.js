"use client"
import styles from './events.module.css'
import Link from 'next/link'
import { useState } from 'react'
import CloseIcon from '../../images/close-button-png-30242(1).png'
import Image from 'next/image'
import Logo from '../../logo.png'

export default function Page() {
  const [event_info_show, setEvent_info_show] = useState("1")

  var events = [
    {
      title: "Dance",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Picnic",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Pizza Party",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Movie Night",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]
  return (
    <div className={`${typeof event_info_show!="string" ? styles.darken:""} ${styles.upcoming_events}`}>
        <div className={`${styles.event_info} ${typeof event_info_show=="string" ? styles.hide : ""}`}>
          <Image src={CloseIcon} alt="Close Icon" width="50" height="50" onClick={()=>{setEvent_info_show("1")}}/>
          <h1>{events[event_info_show].title}</h1>
          <p>{events[event_info_show].description}</p>
          <p>{events[event_info_show].date}</p>
          <p>{events[event_info_show].location}</p>
          <p>{events[event_info_show].time}</p>
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
        <h1 className={`${styles.end_message} ${styles.title}`}>These Are all the events we have planned for now. Check back later for more!</h1>
    </div>
  )
}
