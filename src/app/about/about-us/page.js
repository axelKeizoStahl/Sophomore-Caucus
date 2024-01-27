"use client"
import styles from './aboutus.module.css'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const [presTop, setPresTop] = useState("Cayla")

  var presidents = [
      {name: "Cayla",
        description: "Hey! My name is Cayla and I'm one of the Sophomore Caucus Co-Presidents. I lovee hanging out with friends and also taking naps (you'll probably catch both happening at the same time).  I also love to binge watch shows and draw in my free time. I'm really happy that Vanna and I get the chance to work together again, and bring you the best we can!! Hopefully, we won't dissapoint!",
        image: '/images/Cayla.webp'
      },
      {name: "Vanna",
        description: "Hi! I'm Vanna and I enjoy spending my free time reading webtoons or playing games. I tend to be organized unless I'm lazy and I have a lot of stuffed animals! I HATE food. As Co-Presidents, we work together with administration, our directors, and members to execute policies and events.",
        image: '/images/Vanna.jpg'
      }
  ]

  var departments = [
    {department: "Events",
      photo: "../../images/",},
    {department: "Finance",
      photo: "../../images/",},
    {department: "Internals",
      photo: "../../images/",},
    {department: "IT",
      photo: "../../images/",},
    {department: "Outreach",
      photo: "../../images/",},
  ]
  return (
    <div className={styles.aboutUs}>
      <div className={styles.header}>
        <Image
          src='/images/logo.png'
          width={170}
          height={170}
          alt='Sophmore Caucus Logo'
        />
        <p>About Us</p>
      </div>
      <div className={styles.presidents}>
        <h1>Presidents</h1>
        <div className={styles.presidentInfo}>
          <div className={styles.infoContainer}>
            {presidents.map((president, index) => (
              <div key={`president${index+1}`} className={`${styles.info} ${styles.imageContainer} ${presTop == president.name ? styles.top : ''} ${president.name == 'Vanna' ? styles.Vanna : ''}`} onClick={() => setPresTop(president.name)}>
                <Image
                  src={president.image}
                  width={400}
                  height={500}
                  alt={president.name}
                />
              </div>
            ))}
          </div>
          <div className={`${styles.descriptionContainer} ${styles.infoContainer}`}>
            {presidents.map((president, index) => (
              <div key={`description${index}`} className={`${styles.info} ${styles.description} ${presTop != president.name ? styles.hidden: ''}`}>
                  <h2>{president.name}</h2>
                  <p>{president.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.departments}>
        <h1>Departments</h1>
        <div className={styles.departmentsContainer}>
          {departments.map((department, index) => (
            <Link href={`/about/about-us/${department.department.toLowerCase()}`} className={styles.department} key={index}>
              <h3>{department.department}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
