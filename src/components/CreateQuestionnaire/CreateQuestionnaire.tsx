import Question from "../Question/Question";
import styles from "./CreateQuestionnaire.module.css";

const CreateQuestionnaire = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}></div>
      <div className={styles.mainPanel}>
        <Question />
      </div>
      <div className={styles.sidePanel}></div>
    </div>
  );
};

export default CreateQuestionnaire;
