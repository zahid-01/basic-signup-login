import { useLocation } from "react-router-dom";

const Welcome = () => {
  const { state: user } = useLocation();

  return <div>WELCOME TO A BEAUTIFUL WEBSITE {user.userName}</div>;
};

export default Welcome;
