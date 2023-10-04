// import { useSelector } from "react-redux";
// import { RootState } from "../../reducers";
//const token = useSelector((state: RootState) => state.auth.token);
import { Outlet } from "react-router-dom";

import SideBar from "../SideBar/SideBar";
import Nav from "../Nav/Nav";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles.contentContainer}>
        <SideBar />
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
