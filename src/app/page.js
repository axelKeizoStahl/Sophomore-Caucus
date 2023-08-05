"use client"
import Image from 'next/image'
import logo from './logo.png'
import Vanna from './Vanna.jpg'
import Cayla from './Cayla.jpg'
import { useState } from 'react'

export default function Home() {
  const [isTop, setIsTop] = useState(2)
  const [presTop, setPresTop] = useState("Cayla")

  var magazines = [
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    },
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    },
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    }
  ]

  var events = [
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    },
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    },
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    },
    {title: "Lorum Ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
    }
  ]

  var presidents = [
      {name: "Cayla",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
        image: Cayla
      },
      {name: "Vanna",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Fermentum posuere urna nec tincidunt praesent. Curabitur gravida arcu ac tortor dignissim. Odio eu feugiat pretium nibh ipsum consequat nisl. Eu tincidunt tortor aliquam nulla. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget felis eget nunc lobortis mattis. Velit egestas dui id ornare. Condimentum lacinia quis vel eros donec.",
        image: Vanna
      }
  ]

  return (
    <div className='Home'>
      <div className='header'>
        <Image
          src={logo}
          width={200}
          height={200}
          alt='Sophmore Caucus'
        />
        <div>
            <h1>Sophmore Caucus</h1>
            <h2>Class of '24</h2>
        </div>
      </div>
      <div className='news'>
        <div className='mags'>
          {magazines.slice(0, 3).map((magazine, index)=>(
            <div key={`magazine${index+1}`} className={`mag magazine${index+1} `}  >
              <h2>{magazine.title}</h2>
              <p>{magazine.info}</p>
            </div>
          ))}
        </div>
        <div className='events'>
          {events.slice(0, 4).map((eventitem, index)=>(
            <div key={`event${index+1}`} className={`event event${index+1} ${isTop == index + 1 ? 'top' : ''}`} onMouseOver={() => setIsTop(index+1)} >
              <h2>{eventitem.title}</h2>
              <p>{eventitem.info}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='presidents'>
        {presidents.map((president) => (
          <div className={`${president.name} president ${presTop == president.name ? 'top' : ''}`} >
            <div className={`imagecontainer ${president.name}image`}onClick={() => setPresTop(president.name)}>
              <Image 
                src={president.image}
                width={400}
                height={500}
                alt={president.name}
              />
            </div>
            <div className={`${president.name}description description ${presTop != president.name ? 'hidden': ''}`}>
              <h2>{president.name}</h2>
              <p>{president.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
