import arroba from "../../../assets/arroba.svg";
import styles from "./Input.module.css";
import { FunctionComponent } from "react";
const Input: FunctionComponent<Props> = ({ label, placeholder }) => {
  return (
    <>
      <label className={styles.labelForm}>
        {label}
        <div className={styles.container}>
          <input className={styles.input} placeholder={placeholder} />
          <img className={styles.icon} src={arroba} alt="arroba" />
        </div>
      </label>
    </>
  );
};
interface Props {
  label: string;
  placeholder: string;
}
export default Input;
