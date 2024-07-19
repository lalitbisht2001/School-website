
import styles from "./Counter.module.css";
function Counter({ counts }) {
  return (
    <div className={styles.main}>
      {
        counts?.map((values, i) => (
          <div key={i} className={styles.box}>
             <p className={styles.count}>{values.total}</p>
             <p className={styles.para}>{values.des}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Counter;
