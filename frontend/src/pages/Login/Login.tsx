import s from "./Login.module.css";
import LoginForm from "@ui/LoginForm/LoginForm";

const Login = () => {
    return (
        <section className={`flex ${s.section}`}>
            <img src="../src/assets/images/login.webp" alt="" />
            <LoginForm />
        </section>
    );
};

export default Login;
