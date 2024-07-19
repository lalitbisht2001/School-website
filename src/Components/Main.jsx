
import Girl from "/display.png";
import styles from "./Main.module.css";
import Bigbox from "./Bigbox";
import { Button } from "@material-ui/core";
// import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
function Main() {

    const array = [
        {
            logo :"/cap.png",
            heading : "Expert instruction",
            para : `The gradual accumulation of 
                    information about atomic and 
                    small-scale behaviour`,
        },
        {
            logo : "/expert.svg",
            heading : "Training Courses",
            para : `The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...`,
        },
        {
            logo : "/book.png",
            heading : "Expert instruction",
            para : `The gradual accumulation of 
            information about atomic and 
            small-scale behaviour...`,
        }
    ];

    return (
        <div className={styles.main_div}>
            <div className={styles.logo_head}>
                <div className={styles.heading}>
                    <p className={styles.para1}>
                        25K+ STUDENTS TRUST US   
                    </p>
                    <p className={styles.para2}>
                        Every day brings with it a fresh set of learning <br />
                        possibilities.
                    </p>
                    <div className={styles.btn}>
                    <Button variant="contained" style={{backgroundColor:"#9bc87a", color:"white" , fontWeight:"500"}}>Get Quote Now</Button>
                        <Button variant="outlined" style={{corderColor:"#5eb321", color:"#79df30"}}>Learn More</Button>
                    </div>
                </div>
                <div className={styles.img_div}>
                    <img src={Girl} alt="loading...." />
                </div>
            </div>
            <Bigbox array={array}/>
        </div>
    )
}

export default Main;
