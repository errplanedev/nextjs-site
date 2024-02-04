import styles from '../styles/r.module.css';

export default function R() {
  if(typeof window !== 'undefined') {
    new Audio('/rick.mp3').play()
  }

  return (
    <div className={styles.main}>
      <div className={styles.img}></div>
    </div>
  )
}