import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import styles from "./Feedback.module.css";
import { Typography } from "@material-ui/core";

function Feedback({ feedback }) {
    const [startIndex, setStartIndex] = useState(0);
    const [value, setValue] = useState(4);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + 1) % feedback.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [feedback]);

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <p className={styles.head}>Every Client Matters</p>
                <p className={styles.para}>
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className={styles.box}>
                {feedback.map((values, i) => {
                    const currentIndex = (startIndex + i) % feedback.length;
                    if (i >= 0 && i <= 2) {
                        return (
                            <div key={i} className={`${styles.card}`}>
                                <Typography component="legend" style={{border:"2px solid red"}}></Typography>

                                <Rating
                                    name="simple-controlled"
                                    // value={feedback[currentIndex].rating}
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <p className={styles.feedback}>{feedback[currentIndex].para}</p>
                                <div className={styles.detail}>
                                    <img src={feedback[currentIndex].photo} alt="" />
                                    <div className={styles.name_des}>
                                        <p className={styles.name}>{feedback[currentIndex].name}</p>
                                        <p className={styles.des}>{feedback[currentIndex].designation}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default Feedback;
