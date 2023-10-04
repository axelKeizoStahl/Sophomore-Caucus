import styles from './styles.css'
import Link from 'next/link'

export default function Page() {
  var events = [
    {
      title: "event1",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "event2",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "event3",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "event4",
      date: "2021-01-01",
      time: "12:00",
      location: "Location 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]
  return (
    <div className="upcoming-events">
      <div className="header">
        <h1>Upcoming Events</h1>
      </div>
        <Link className="past_events_link" href="/news/events/past-events"><p>Past Events</p></Link>
        <div className="events">
          {events.slice(0).reverse().map((event, index) => (
            <div className="event">
              <h3>Event</h3>
              <p>{event.date}</p>
            </div>
            )
          )}
        </div>
        <h1 className="end-message">These Are all the events we have planned for now. Check back later for more!</h1>
    </div>
  )
}
