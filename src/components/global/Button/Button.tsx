import { FunctionComponent } from "react";
import styles from "./Button.module.css";
const Button: FunctionComponent<Props> = ({ text, background }) => {
  return (
    <button
      className={
        background
          ? `${styles.container} ${styles.background}`
          : styles.container
      }
    >
      {text}
    </button>
  );
};

interface Props {
  text: string;
  background: boolean;
}

Button.defaultProps = {
  text: "Hola",
  background: true,
};

export default Button;
