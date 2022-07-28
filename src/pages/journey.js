import styles from "../../styles/Journey.module.css";
import { useState, useEffect } from "react";
import { timelineData } from "../../data/timeline";

const journey = () => {
  const [timelineContent, setTimelineContent] = useState([]);
  useEffect(() => {
    setTimelineContent(timelineData);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <h1>THE JOURNEY</h1>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.timelineContainer}>
            {timelineContent.map((timeline, index) => (
              <p key={index} className={styles.timeline}>
                <div className={styles.circle}></div>
                <h3>{timeline.title}</h3>
                <p>{timeline.text}</p>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default journey;
