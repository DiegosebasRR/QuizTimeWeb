import React from "react";
import styles from "./Questionnaire.module.css"; // Ajusta la ruta a tus estilos CSS
import Button from "../Button/Button";

interface QuestionnaireProps {
  imageSrc: string;
  date: string;
  name: string;
  description: string;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({
  imageSrc,
  date,
  name,
  description,
}) => {
  return (
    <div className={styles.questionnaireContainer}>
      <img className={styles.image} src={imageSrc} alt="Questionnaire" />
      <div className={styles.content}>
        <div className={styles.details}>
          <p className={styles.date}>{date}</p>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Play" height={31} width={81} size={18} />
          <Button
            text="Edit"
            height={31}
            width={81}
            size={18}
            color="#34CF31"
          />
          <Button
            text="Delete"
            height={31}
            width={81}
            size={18}
            color="#EF4B4B"
          />
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
