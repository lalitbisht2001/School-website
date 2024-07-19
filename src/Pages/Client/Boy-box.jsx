import boy from "/boy.png";
import styles from "./Boy.module.css";
import { Button } from "@material-ui/core";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
function Boy() {
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <hr className={styles.line} />
                <p className={styles.heading1}>Every Client Matters</p>
                <p className={styles.para}>Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics </p>
                <Button color="secondary" className={styles.btn}>Learn More<ArrowForwardIosSharpIcon /> </Button>
            </div>
            <div className={styles.img}>
                <img src={boy} alt="loading...." />
            </div>
        </div>
    )
}

export default Boy;
