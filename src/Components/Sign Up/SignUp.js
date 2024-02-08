import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../Assets/API_URL";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("zahid@gmail.com");
  const [password, setPassword] = useState("test123");
  const [userName, setuserName] = useState("mateen");

  const signUpHandler = async (e) => {
    e.preventDefault();
    let user,
      signUpErrors = null;
    await axios({
      method: "POST",
      url: `${API_URL}/api/v1/users/signUp`,
      data: {
        email,
        password,
        userName,
      },
    }).then(
      (res) => {
        user = res.data;
        console.log(user);
      },
      (err) => {
        signUpErrors = err.response.data;
        console.log(signUpErrors);
      }
    );
  };

  return (
    <form onSubmit={signUpHandler} className={styles.formContainer}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
