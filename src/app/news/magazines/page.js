import styles from './mags.module.css'
export default function Page() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Magazines</h1>
      </div>
      <div className={styles.mags}>
          {[1,2,3,4].map((i) => (
            <iframe className={styles.mag} src={`/mag${i}.pdf#toolbar=0`} height="600" width="600" frameborder="0" />
          ))}
      </div>
    </div>
  )
}



