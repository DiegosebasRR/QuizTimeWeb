import Button from "../global/Button/Button";
import Input from "../global/Imput/Input";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.description}>
          It's not long before you embark on this journey!
        </p>
        <form className={styles.form}>
          <div className={styles.containerInputs}>
            <Input label="Firstname" placeholder="firstname" />
            <Input label="Lastname" placeholder="lastname" />
          </div>
          <Input label="E-mail" placeholder="name@email.com" />
          <Input
            label="Password"
            placeholder="8+ Characters, 1 Capital letter"
          />

          <Button />
        </form>
        <h2 className={styles.text}>
          You do not have an account?{" "}
          <span className={styles.span}>
            <Link to={`/`}>Sign In</Link>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Form;
