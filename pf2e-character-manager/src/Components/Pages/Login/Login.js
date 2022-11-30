import "./Login.css";
import Header from "./Header";
import Background from "./Background";

const Login = () => {
  return (
    <div className="main-wrapper">
      <section className="wrapper">
        <Header />
        <div className="login">Login</div>
      </section>
      <Background />
    </div>
  );
};

export default Login;
