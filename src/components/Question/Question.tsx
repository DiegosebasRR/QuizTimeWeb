import { useState } from "react";
import styles from "./Question.module.css";

const Question = () => {
  const [correctOption, setCorrectOption] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleOptionCheck = (optionIndex: number) => {
    if (correctOption === optionIndex) {
      // Si la opción seleccionada ya estaba marcada, la desmarcamos
      setCorrectOption(null);
    } else {
      // Si no, marcamos la opción seleccionada como correcta
      setCorrectOption(optionIndex);
    }
  };
  return (
    <div className={styles.questionContainer}>
      <form>
        <div>
          <input
            type="text"
            id="question"
            name="question"
            placeholder="Enter your question"
            className={styles.inputQuestion}
          />
        </div>
        <div className={styles.imageContainer}>
          <input
            className={styles.imageInput}
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
          />
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" />
          ) : (
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" // Ruta de la imagen por defecto en tono gris
              alt="Default"
            />
          )}
          <label className={styles.imageInputLabel} htmlFor="image">
            Select Image
          </label>
        </div>

        <div className={styles.containerAnswer}>
          <div className={styles.row}>
            <div className={styles.optionContainer}>
              <input
                type="text"
                id="answer1"
                name="answer1"
                placeholder="Enter answer option 1"
                className={styles.input}
              />
              <input
                type="checkbox"
                checked={correctOption === 0}
                onChange={() => handleOptionCheck(0)}
                className={styles.checkbox}
              />
            </div>
            <div className={styles.optionContainer}>
              <input
                type="text"
                id="answer2"
                name="answer2"
                placeholder="Enter answer option 2"
                className={styles.input}
              />
              <input
                type="checkbox"
                checked={correctOption === 1}
                onChange={() => handleOptionCheck(1)}
                className={styles.checkbox}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.optionContainer}>
              <input
                type="text"
                id="answer3"
                name="answer3"
                placeholder="Enter answer option 3"
                className={styles.input}
              />
              <input
                type="checkbox"
                checked={correctOption === 2}
                onChange={() => handleOptionCheck(2)}
                className={styles.checkbox}
              />
            </div>
            <div className={styles.optionContainer}>
              <input
                type="text"
                id="answer4"
                name="answer4"
                placeholder="Enter answer option 4"
                className={styles.input}
              />
              <input
                type="checkbox"
                checked={correctOption === 3}
                onChange={() => handleOptionCheck(3)}
                className={styles.checkbox}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Question;
