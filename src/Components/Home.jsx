import Main from "./Main.jsx";
import styled from "styled-components";
import styles from "./Home.module.css";
import { Button } from "@material-ui/core";
function Home() {
    return (
        <Container>
            <Header>
                <div className={styles.logo}>
                    <p>GMPS</p>
                </div>
                <div className={styles.nav_bar}>
                    <ul>
                        <li><a className="a-tag" href="#home">Home</a></li>
                        <li><a className="a-tag" href="#home">Product</a></li>
                        <li><a className="a-tag" href="#home">Pricing</a></li>
                        <li><a className="a-tag" href="#home">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.main_btn}>
                    <Button variant="text" style={{ color: "#96BB7" }}>Login</Button>
                    <Button variant="contained" style={{ backgroundColor: "#96BB7C", color: "white" }}>Join Us</Button>
                </div>
            </Header>
            <Main />
        </Container>
    )
}

export default Home;

const Container = styled.div`
 height: 100vh;
 width: 100%;
 display: flex;
 flex-direction: column;
 background-color: white;
 `;

const Header = styled.header`
  height: 11vh;
  width: 90%;
  /* background-color: lightyellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
 `;


