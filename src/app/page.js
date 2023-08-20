"use client"
import Image from 'next/image'
import logo from './logo.png'
import { useState } from 'react'

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
    <div className='Home'>
      <div className='header'>
        <div className='container'>
          <Image
          src={logo}
          width={200}
          height={200}
          alt='Sophmore Caucus'
          />
          <div>
            <h1>Sophomore Caucus</h1>
            <h2>Class of '26</h2>
          </div>
        </div>
      </div>
      <div className='body'>
        <div className='news'>
            <div className='mag'  >
              <h2>{magazine.title}</h2>
              <p>{magazine.info}</p>
            </div>
          <div className='events'>
          {events.slice(0, 2).map((eventitem, index)=>(
            <div key={`event${index+1}`} className={`event event${index+1} ${isTop == index + 1 ? 'top' : ''}`} onMouseOver={() => setIsTop(index+1)} >
              <h2>{eventitem.title}</h2>
              <p>{eventitem.info}</p>
            </div>
          ))}
          </div>
        </div>
        <div className='opportunities'>
          <h1>Upcoming Opportunities</h1>
          {opportunities.slice(0, 3).map((opportunity, index) => (
            <div className='opportunity'>
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
