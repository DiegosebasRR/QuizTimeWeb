import Questionnaire from "../global/Questionnaire/Questionnaire";
import styles from "./History.module.css";
//import { useSelector } from "react-redux";
//import { RootState } from "../../reducers";
//const token = useSelector((state: RootState) => state.auth.token);
const History = () => {
  return (
    <div className={styles.questionaire}>
      <h2>Mis Questionarios</h2>
      <div className={styles.questionaires}>
        <Questionnaire
          imageSrc="https://www.freelogoservices.com/blog/wp-content/uploads/iStock-616893620.jpg"
          date="Marisa dyah  12 desember 2020"
          name="Daily Learn  Web ~ Part 1"
          description="Perancangan web adalah istilah umum yang digunakan untuk mencakup nmen g g un ak an sebuah"
        />
        <Questionnaire
          imageSrc="https://www.freelogoservices.com/blog/wp-content/uploads/iStock-616893620.jpg"
          date="Marisa dyah  12 desember 2020"
          name="Daily Learn  Web ~ Part 1"
          description="Perancangan web adalah istilah umum yang digunakan untuk mencakup nmen g g un ak an sebuah"
        />
        <Questionnaire
          imageSrc="https://www.freelogoservices.com/blog/wp-content/uploads/iStock-616893620.jpg"
          date="Marisa dyah  12 desember 2020"
          name="Daily Learn  Web ~ Part 1"
          description="Perancangan web adalah istilah umum yang digunakan untuk mencakup nmen g g un ak an sebuah"
        />
        <Questionnaire
          imageSrc="https://www.freelogoservices.com/blog/wp-content/uploads/iStock-616893620.jpg"
          date="Marisa dyah  12 desember 2020"
          name="Daily Learn  Web ~ Part 1"
          description="Perancangan web adalah istilah umum yang digunakan untuk mencakup nmen g g un ak an sebuah"
        />
        <Questionnaire
          imageSrc="https://www.freelogoservices.com/blog/wp-content/uploads/iStock-616893620.jpg"
          date="Marisa dyah  12 desember 2020"
          name="Daily Learn  Web ~ Part 1"
          description="Perancangan web adalah istilah umum yang digunakan untuk mencakup nmen g g un ak an sebuah"
        />
      </div>
    </div>
  );
};

export default History;
