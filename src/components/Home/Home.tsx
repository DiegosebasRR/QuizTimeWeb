import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { useDispatch } from "react-redux";
import { clearToken } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../actions/sessionAction";
const Home = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Lógica de cierre de sesión

    // Limpiar el token en el store de Redux
    dispatch(clearToken());
    dispatch(setSession(false));
    navigate("/");
  };
  return (
    <div>
      <h1>Homae</h1>
      <h2>{token}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
