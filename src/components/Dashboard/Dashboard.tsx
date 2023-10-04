import styles from "./Dashboard.module.css";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import Questionnaire from "../global/Questionnaire/Questionnaire";
import { useEffect, useState } from "react";
import axios from "axios";
import { QuestionnaireType } from "../../Types/Questionnaire";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
//import { useSelector } from "react-redux";
//import { RootState } from "../../reducers";
//const token = useSelector((state: RootState) => state.auth.token);
const Dashboard = () => {
  const [questionnaires, setQuestionnaires] = useState<QuestionnaireType[]>([]);
  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    // Realizar la solicitud GET usando Axios
    axios
      .get(`http://localhost:3002/questionnaire/byUser/${user?._id}`)
      .then((response) => {
        // Actualizar el estado con los datos recibidos
        setQuestionnaires(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los cuestionarios:", error);
      });
  }, []);

  return (
    <div>
      <div className={styles.userContainer}>
        <img
          className={styles.userImage}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="Foto de perfil"
        />
        <div className={styles.userInfo}>
          <h1 className={styles.userName}>
            {user?.firstname} {user?.lastname}
          </h1>
          <div className={styles.userStats}>
            <div className={styles.statContainer}>
              <div className={styles.iconContainer}>
                <BsFillQuestionSquareFill className={styles.icon} />
              </div>
              <div className={styles.statInfo}>
                <p className={styles.number}>{questionnaires.length}</p>
                <p className={styles.description}>Questionarios</p>
              </div>
            </div>
            <div className={styles.statContainer}>
              <div className={styles.iconContainer}>
                <FaPeopleGroup className={styles.icon} />
              </div>
              <div className={styles.statInfo}>
                <p className={styles.number}>27</p>
                <p className={styles.description}>Participantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.questionaire}>
        <h2>Mis recientes Questionarios</h2>
        <div className={styles.questionaires}>
          {questionnaires.map((questionnaire) => (
            <Questionnaire
              imageSrc="https://www.freelogoservices.com/blog/wp-content/uploads/iStock-616893620.jpg"
              date={questionnaire.createdAt.toString()}
              name={questionnaire.titles}
              description={questionnaire.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
