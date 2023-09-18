import styles from './styles.css'
export default function Page() {
  return (
    <div>
      <div className="header">
        <h1>Magazines</h1>
      </div>
      <div className="mags">
          {[1,2,3,4].map((i) => (
              <iframe className="mag" src={`/mag${i}.pdf`} height="600" width="600" />
          ))}
      </div>
    </div>
  )
}



