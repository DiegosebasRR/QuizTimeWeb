import Button from "../global/Button/Button";
import styles from "./Profile.module.css";
//import { useSelector } from "react-redux";
//import { RootState } from "../../reducers";
//const token = useSelector((state: RootState) => state.auth.token);
const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileInfo}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="Foto de perfil"
          className={styles.profileImage}
        />
        <p className={styles.username}>Nombre de Usuario</p>
      </div>
      <hr className={styles.separator} />
      <form className={styles.form}>
        <div className={styles.nameGroup}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              className={styles.input}
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              className={styles.input}
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Cancel" width={137} height={50} size={16} />
          <Button text="Save" width={137} height={50} size={16} />
        </div>
      </form>
    </div>
  );
};

export default Profile;
