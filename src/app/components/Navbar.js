import Link from  'next/link'
import './styles.css'

export function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">News
              <i className="fa fa-caret-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link href='/news/events'>Events</Link>
              <Link href='/news/magazines'>Magazines</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">About
              <i className="fa fa-caret-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link href='/about/meet-the-team'>Events</Link>
              <Link href='/about/contact-us'>Contant Us</Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
