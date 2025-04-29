import s from "./RegisterForm.module.css";
import Button from "@ui/Button/Button";
import { Link } from "react-router";

const RegisterForm = () => {
    return (
        <form className={`flex ${s.form}`} action="#">
            <h2 className={s.title}>Регистрация</h2>
            <div className={`flex ${s.input_wrap}`}>
                <label className={s.label} htmlFor="login">
                    Логин
                </label>
                <input
                    className={s.input}
                    type="text"
                    name="login"
                    id="login"
                    placeholder="ivanovivan@mail.ru"
                />
            </div>
            <div className={`flex ${s.input_wrap}`}>
                <label className={s.label} htmlFor="name">
                    ФИО
                </label>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Иванов Иван Иванович"
                    

                />
            </div>
            <div className={`flex ${s.input_wrap}`}>
                <label className={s.label} htmlFor="password">
                    Пароль
                </label>
                <input
                    className={s.input}
                    type="password"
                    name="password"
                    id="password"
                />
            </div>
            <Button>Регистрация</Button>
            <p className={s.register}>
                Есть аккаунт?{" "}
                <Link className={s.link} to={"/login"}>
                    Войти
                </Link>
            </p>
        </form>
    );
};

export default RegisterForm;
