import s from "./LoginForm.module.css";
import Button from "@ui/Button/Button";
import { Link } from "react-router";

const LoginForm = () => {
    return (
        <form className={`flex ${s.form}`} action="#">
            <h2 className={s.title}>Вход</h2>
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
            <Button>Войти</Button>
            <p className={s.register}>
                Нет аккаунта?{" "}
                <Link className={s.link} to={"/register"}>
                    Зарегистрируйтесь
                </Link>{" "}
            </p>
        </form>
    );
};

export default LoginForm;
