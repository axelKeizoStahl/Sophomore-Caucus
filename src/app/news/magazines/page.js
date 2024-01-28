import styles from './mags.module.css'
import Image from 'next/image'

export default function Page() {
  const magLinks = [
    "https://drive.google.com/file/d/1iyB3G_8wyro74L32NR1SU1OxZl9XQ_1T/view?usp=sharing",
    "https://drive.google.com/file/d/1pO1-726ELxLsiMWli8ObHOSxC49U7Sr3/view?usp=sharing",
    "https://drive.google.com/file/d/1lvO6TvMLQeT1LKIB-weM5WoyB87rBBTX/view?usp=sharing",
    "https://drive.google.com/file/d/1Ql5AGt7-s9czXmAAlYHkSqbjA8tLCgtq/view?usp=sharing",
    "https://drive.google.com/file/d/13M8LKFjOtAt14hWvrS19cU9nkRteIbUI/view?usp=sharing"
  ]
  return (
    <div>
      <div className={styles.navbar}></div>
      <div className={styles.header}>
        <Image src='/images/logo.png' height="170" width="170" alt="logo" />
        <h1 className={styles.title}>Magazines</h1>
      </div>
      <div className={styles.mags}>
        {[1,2,3,4,5].map((i) => (
          <a key={i} href={magLinks[i-1]}>
          <Image
            className={styles.mag}
            src={`/mags/mag${i}-1.png`}
            width={500}
            height={500}
            alt='cover of mag'
          />
          </a>
        ))}
      </div>
      <h1 className={`${styles.end_message} `}>These are all the events we have planned for now. Check back later for more!</h1>
    </div>
  )
}



