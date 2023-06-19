import styles from "./RightPartSign.module.css";
import cohete from "../../../assets/cohete.svg";
const RightPartSign = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={cohete} alt="cohete" />
    </div>
  );
};

export default RightPartSign;
