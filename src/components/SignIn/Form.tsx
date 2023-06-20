import Button from "../global/Button/Button";
import styles from "./Form.module.css";
import arroba from "../../assets/arroba.svg";

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../actions/authActions";
import { setSession } from "../../actions/sessionAction";
interface LoginData {
  email: string;
  password: string;
}

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const loginData: LoginData = {
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:3002/auth/login",
        loginData
      );
      // Aquí puedes manejar la respuesta de la API, como guardar el token de autenticación en el estado global o redirigir al usuario a otra página.
      navigate(`/Home`);
      console.log(response.data);
      const token = response.data.token;
      dispatch(setToken(token));
      dispatch(setSession(true));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1 className={styles.title}>Sign In</h1>
        <p className={styles.description}>
          It's not long before you embark on this journey!
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <Button />
        </form>
        <h2 className={styles.text}>
          You do not have an account?{" "}
          <span className={styles.span}>
            <Link to={`/SignUp`}>Sign Up</Link>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Form;
