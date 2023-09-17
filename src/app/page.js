"use client"
import Image from 'next/image'
import logo from './logo.png'
import { useState } from 'react'
import styles from './Home.module.css'

export default function Home() {
  const [isTop, setIsTop] = useState(2)

  var magazine =
    {title: "Coming Soon",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam.",
    }

  var events = [
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    },
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    },
  ]

  var opportunities = [
    {title: "Lorem Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
      time: "March 23rd 2008",
    },
    {title: "Lorem Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
      time: "March 23rd 2008",
    },
    {title: "Lorem Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
      time: "March 23rd 2008",
    },
  ]

  return (
    <div className={styles.Home}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Image
          src={logo}
          width={200}
          height={200}
          alt='Sophmore Caucus'
          />
          <div>
            <h1>Sophomore Caucus</h1>
            <h2>2024</h2>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.news}>
            <div className={styles.mag}>
              <h2>{magazine.title}</h2>
              <p>{magazine.info}</p>
            </div>
          <div className={styles.events}>
          {events.slice(0, 2).map((eventitem, index)=>(
            <div key={`event${index+1}`} className={`${styles.event} ${styles[`event${index+1}`]} ${isTop == index + 1 ? styles.top : ''}`} onMouseOver={() => setIsTop(index+1)} >
              <h2>{eventitem.title}</h2>
              <p>{eventitem.info}</p>
            </div>
          ))}
          </div>
        </div>
        <div className={styles.opportunities}>
          <h1>Upcoming Opportunities</h1>
          {opportunities.slice(0, 3).map((opportunity, index) => (
            <div key={`opportunity${index+1}`} className={styles.opportunity}>
              <h2>{opportunity.title}</h2>
              <p>{opportunity.info}</p>
              <small>deadline: <span>{opportunity.time}</span></small>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

