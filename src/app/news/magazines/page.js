import styles from './mags.module.css'
import Image from 'next/image'
import logo from '../../logo.png'

export default function Page() {
  return (
    <div>
      <div className={styles.navbar}></div>
      <div className={styles.header}>
        <Image src={logo} height="170" width="170" />
        <h1 className={styles.title}>Magazines</h1>
      </div>
      <div className={styles.mags}>
          {[1,2,3,4].map((i) => (
            <iframe className={styles.mag} src={`/mag${i}.pdf#toolbar=0`} height="600" width="600" frameborder="0" />
          ))}
      </div>
      <h1 className={`${styles.end_message} `}>These are all the events we have planned for now. Check back later for more!</h1>
    </div>
  )
}



