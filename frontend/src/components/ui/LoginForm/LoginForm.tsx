import s from "./LoginForm.module.css";
import { Button } from "@gravity-ui/uikit";
import { Link } from "react-router";
import { useState } from "react";
import { api } from "../../../api/BaseUrl";
import { useNavigate } from "react-router";
import { useToaster } from "@gravity-ui/uikit";
import { useAuth } from "../../../AuthContext";

const LoginForm = () => {
    const { add } = useToaster();
    const { login } = useAuth();
    const [pending, setPending] = useState(false);

    const navigate = useNavigate();
    const fetchLogin = async (email: string, password: string) => {
        try {
            setPending(true);
            const response = await api.post(`/auth/local`, {
                identifier: email,
                password: password,
            });
            if (response.data.jwt) {
                login(response.data.jwt);
            }
            navigate("/profile/me");
        } catch (error: any) {
            console.log(error.status);
            add({
                title: "Ошибка",
                content: "Неверный email/пароль",
                theme: "danger",
                name: "toaster",
                autoHiding: 5000,
            });
        } finally {
            setPending(false);
        }
    };

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleLoginData = (e: any) => {
        const { name, value } = e.target;
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = (loginData: any) => {
        const { email, password } = loginData;
        fetchLogin(email, password);
    };
    return (
        <div className={`flex ${s.form}`}>
            <h2 className={s.title}>Вход</h2>
            <div className={`flex ${s.input_wrap}`}>
                <label className={s.label} htmlFor="login">
                    Логин
                </label>
                <input
                    className={s.input}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="ivanovivan@mail.ru"
                    value={loginData.email}
                    onChange={handleLoginData}
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
                    value={loginData.password}
                    onChange={handleLoginData}
                />
            </div>
            <Button
                className={s.button}
                size="xl"
                view="action"
                loading={pending}
                onClick={() => {
                    handleLogin(loginData);
                }}
            >
                Войти
            </Button>
            <p className={s.register}>
                Нет аккаунта?
                <Link className={s.link} to={"/register"}>
                    Зарегистрируйтесь
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;
