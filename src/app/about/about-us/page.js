"use client"
import './styles.css'
import Vanna from '../../images/Vanna.jpg'
import Cayla from '../../images/Cayla.jpg'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const [presTop, setPresTop] = useState("Cayla")

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
    <div className="meet-the-team">
    <h1>About-Us</h1>
      <div className='presidents'>
        <h1>Presidents</h1>
        {presidents.map((president, index) => (
          <div key={`president${index+1}`} className={`${president.name} president ${presTop == president.name ? 'top' : ''}`} >
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
      <div className='departments'>
        <h1>Departments</h1>
        <div className='departments-container'>
          {departments.map((department, index) => (
            <Link href={`/about/about-us/${department.department.toLowerCase()}`} className={`department ${department.name} department${index+1}`} key={index}>
              <h3>{department.department}</h3>
            </Link>
          )
          )}
        </div>
      </div>
    </div>
  )
}
