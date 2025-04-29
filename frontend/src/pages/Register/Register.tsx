import s from "./Register.module.css";
import RegisterForm from "@ui/RegisterForm/RegisterForm";

const Register = () => {
    return (
        <section className={`flex ${s.section}`}>
            <RegisterForm />
            <img className={s.img} src="images/register.webp" alt="" />
        </section>
    );
};

export default Register;
