import styles from "./ColorSelector.module.css";

const ColorSelector = ({ label }) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelBox}>
        <text>{label}</text>
      </div>
      <div className={styles.colorGroup}>
        <div
          className={styles.selectorBox}
          style={{ backgroundColor: "gray" }}
        ></div>
        <div
          className={styles.selectorBox}
          style={{ backgroundColor: "skyblue" }}
        ></div>
        <div
          className={styles.selectorBox}
          style={{ backgroundColor: "lightgreen" }}
        ></div>
      </div>
    </div>
  );
};

export default ColorSelector;
