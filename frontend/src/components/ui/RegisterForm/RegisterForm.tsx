import s from "./RegisterForm.module.css";
import Button from "@ui/Button/Button";
import { Link, useNavigate } from "react-router";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { api } from "../../../api/BaseUrl";
import { useAuth } from "../../../AuthContext";

const RegisterForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const register = (
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        patronymic: string,
    ) => {
        api.post(`/auth/local/register`, {
            username: email,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            patronymic: patronymic,
        }).then((response: AxiosResponse) => {
            if (response.data.jwt) {
                login(response.data.jwt);
            }
            navigate("/profile/me");
        });
    };

    const [registerData, setRegisterData] = useState({
        email: "",
        name: "",
        password: "",
    });

    const handleRegisterData = (e: any) => {
        const { name, value } = e.target;
        setRegisterData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleRegistration = (registerData: any) => {
        const { name, email, password } = registerData;
        const [lastName, firstName, patronymic] = name.split(" ");
        register(email, password, firstName, lastName, patronymic);
    };
    return (
        <div className={`flex ${s.form}`}>
            <h2 className={s.title}>Регистрация</h2>
            <div className={`flex ${s.input_wrap}`}>
                <label className={s.label} htmlFor="email">
                    Email
                </label>
                <input
                    className={s.input}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="ivanovivan@mail.ru"
                    value={registerData.email}
                    onChange={handleRegisterData}
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
                    value={registerData.name}
                    onChange={handleRegisterData}
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
                    value={registerData.password}
                    onChange={handleRegisterData}
                />
            </div>
            <Button onClick={() => handleRegistration(registerData)}>
                Регистрация
            </Button>
            <p className={s.register}>
                Есть аккаунт?{" "}
                <Link className={s.link} to={"/login"}>
                    Войти
                </Link>
            </p>
        </div>
    );
};

export default RegisterForm;
