import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../Assets/API_URL";

import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("zahid@gmail.com");
  const [password, setPassword] = useState("test123");

  const loginHandler = async (e) => {
    e.preventDefault();
    let user,
      loginErrors = null;
    await axios({
      method: "POST",
      url: `${API_URL}/api/v1/users/login`,
      data: {
        email,
        password,
      },
    }).then(
      (res) => {
        user = res.data;
        navigate("/welcome", { state: user });
      },
      (err) => {
        loginErrors = err.response.data;
        console.log(loginErrors);
      }
    );
  };

  return (
    <form onSubmit={loginHandler} className={styles.formContainer}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
