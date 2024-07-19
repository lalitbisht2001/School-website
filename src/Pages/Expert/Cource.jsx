import styles from "./Cource.module.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';


function Cource({ cources }) {
    return (
        <div className={styles.main}>
            <div className={styles.inner_div}>
                <p className={styles.advice}>Practice Advice</p>
                <p className={styles.heading}>Our Experts Teacher</p>
                <p className={styles.para}>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className={styles.box}>
                {
                    cources?.map((values, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.img}>
                                <img src={values.photo} alt="" />
                                <span className={styles.sale}>Sale</span>
                                <div className={styles.sign}>
                                    <span><FavoriteBorderOutlinedIcon/></span>
                                    <span><AddShoppingCartOutlinedIcon/></span>
                                    <span><VisibilityIcon/></span>
                                </div>
                            </div>
                            <div className={styles.data}>
                                <div className={styles.rating}>
                                    <p className={styles.type}>{values.type}</p>
                                    <span><StarIcon style={{color:"yellow" , height : "0.8em"}}/><p>4.9</p></span>
                                </div>
                                <p className={styles.topic}>{values.topic}</p>
                                <p className={styles.para}>{values.para}</p>
                                <p className={styles.price}>{values.price}</p>
                                <div className={styles.btn}>
                                    Learn More<ArrowForwardIosSharpIcon/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cource
