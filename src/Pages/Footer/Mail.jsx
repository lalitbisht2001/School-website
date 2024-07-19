
import styles from "./Footer.module.css";
function Mail() {
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <p className={styles.para1}>Watch our Cources</p>
                <p className={styles.para2}>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className={styles.btn}>
                <input placeholder="Your Email" type="text" className={styles.input}/>
                <button className={styles.button}>Subscribe</button>
            </div>
        </div>
    )
}

export default Mail;
