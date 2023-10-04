import Button from "../global/Button/Button";
import styles from "./SideBar.module.css";
import { useDispatch } from "react-redux";
import { clearToken } from "../../actions/authActions";
import { useNavigate, useLocation } from "react-router-dom"; // Importa useLocation
import { setSession } from "../../actions/sessionAction";
import { BiSolidLogOut } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene la ubicación actual
  console.log(location.pathname);

  const handleLogout = () => {
    dispatch(clearToken());
    dispatch(setSession(false));
    navigate("/");
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <Button
          text="Control"
          to="/Home"
          isActive={location.pathname === "/Home"} // Compara con la ruta actual
          icon={<MdSpaceDashboard />}
        />
        <Button
          text="History"
          to="History"
          isActive={location.pathname === "/Home/History"} // Compara con la ruta actual
          icon={<RiHistoryFill />}
        />
        <Button
          text="Profile"
          to="Profile"
          isActive={location.pathname === "/Home/Profile"} // Compara con la ruta actual
          icon={<FaUserEdit />}
        />
      </div>

      <Button
        onClick={handleLogout}
        text="Log out"
        background={false}
        icon={<BiSolidLogOut />}
      />
    </div>
  );
};

export default SideBar;
