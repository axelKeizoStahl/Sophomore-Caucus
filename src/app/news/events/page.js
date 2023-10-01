import './styles.css'
import Link from 'next/link'

export default function Page() {
  var events = [
    {
      title: "Event 1",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Event 2",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Event 3",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Event 4",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]
  return (
    <div className="upcoming-events">
        <h1>Upcoming Events</h1>
        <Link className="past-events-link" href="/news/events/past-events"><p>Past Events</p></Link>
        <div className="events">
          {events.map((event, index) => (
            <div className={`event event${index}`} key={index}>
                <h2>{event.title}</h2>
                <h3>{event.date} at {event.time}</h3>
                <h3>{event.location}</h3>
                <p>{event.description}</p>
            </div>
            )
          )}
        </div>
    </div>
  )
}
