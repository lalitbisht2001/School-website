
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from "./Teacher.module.css";
function Teacher({ teacher }) {
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <p className={styles.para1}>Our Popular Courses</p>
                <p className={styles.para2}>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className={styles.box}>
                {
                    teacher?.map((value, i) => (
                        <div key={i} className={styles.card}>
                            <img src={value.photo} alt="" />
                            <div className={styles.detail}>
                                <p className={styles.name}>{value.name}</p>
                                <p className={styles.profe}>{value.profe}</p>
                                <div className={styles.logo}>
                                    <FacebookIcon style={{ color: "green" }} />
                                    <InstagramIcon style={{ color: "green" }} />
                                    <TwitterIcon style={{ color: "green" }} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Teacher;
