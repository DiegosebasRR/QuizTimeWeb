import { useState } from "react";
import Button from "../global/Button/Button";
import styles from "./Form.module.css";
import arroba from "../../assets/arroba.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const loginData: LoginData = {
        firstname,
        lastname,
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:3002/auth/register",
        loginData
      );
      // Aquí puedes manejar la respuesta de la API, como guardar el token de autenticación en el estado global o redirigir al usuario a otra página.
      navigate(`/`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.description}>
          It's not long before you embark on this journey!
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.containerInputs}>
            <label className={styles.labelForm}>
              Firstname
              <div className={styles.containerInputIcon}>
                <input
                  className={styles.input}
                  placeholder="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <img className={styles.icon} src={arroba} alt="arroba" />
              </div>
            </label>
            <label className={styles.labelForm}>
              Lastname
              <div className={styles.containerInputIcon}>
                <input
                  className={styles.input}
                  placeholder="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <img className={styles.icon} src={arroba} alt="arroba" />
              </div>
            </label>
          </div>
          <label className={styles.labelForm}>
            E-mail
            <div className={styles.containerInputIcon}>
              <input
                className={styles.input}
                placeholder="name@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img className={styles.icon} src={arroba} alt="arroba" />
            </div>
          </label>
          <label className={styles.labelForm}>
            Password
            <div className={styles.containerInputIcon}>
              <input
                className={styles.input}
                placeholder="8+ Characters, 1 Capital letter"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img className={styles.icon} src={arroba} alt="arroba" />
            </div>
          </label>
          <Button text="Sign Up" background={true} />
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
