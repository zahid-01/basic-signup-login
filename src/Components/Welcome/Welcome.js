import { useLocation } from "react-router-dom";
import styles from "./Welcome.module.css";
const Welcome = () => {
  const { state: user } = useLocation();

  return (
    <div className={styles.text}>
      WELCOME TO A BEAUTIFUL WEBSITE {user.userName}
    </div>
  );
};

export default Welcome;
