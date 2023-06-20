import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";
const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div className={styles.errorContainer}>
      <h1>Oops!</h1>
      <h2>Sorry, an unexpected error has occurred.</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
