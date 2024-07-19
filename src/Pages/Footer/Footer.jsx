
import Mail from './Mail';
import styles from "./Footer.module.css";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
    return (
        <>
            <Mail />
            <div className={styles.box}>
                <ul>
                    <p>Company Info</p>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <p>Legal</p>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <p>Features</p>
                    <li>Business Marketing</li>
                    <li>User Analytic</li>
                    <li>Live Chat</li>
                    <li>Unlimited Support</li>
                </ul>
                <ul>
                    <p>Resources</p>
                    <li>IOS & Android</li>
                    <li>Watch a Demo</li>
                    <li>Customers</li>
                    <li>API</li>
                </ul>
                <ul>
                    <p>Get In Touch</p>
                    <li><CallIcon style={{ color: "green" }} />(480)555-0103</li>
                    <li><LocationOnIcon style={{ color: "green" }} />4517 Washington Ave. Manchester,Kentucky 39495</li>
                    <li><EmailIcon style={{ color: "green" }} />debra.holt@example.com</li>
                </ul>
            </div>
            <div className={styles.foot}>
                <p>Made With Love By Figmaland All Right Reserved </p>
                <div className={styles.logo}>
                    <FacebookIcon style={{ color: "green" }} />
                    <InstagramIcon style={{ color: "green" }} />
                    <TwitterIcon style={{ color: "green" }} />
                </div>
            </div>
        </>
    )
}

export default Footer
