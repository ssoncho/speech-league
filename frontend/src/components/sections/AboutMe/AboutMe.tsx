import s from "./AboutMe.module.css";
import { Text, TextInput, Switch, Button, useToaster } from "@gravity-ui/uikit";
import { DatePicker } from "@gravity-ui/date-components";
import { api } from "@api/BaseUrl";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { dateTime } from "@gravity-ui/date-utils";
import { useAuth } from "../../../AuthContext";
const AboutMe = () => {
    const { token } = useAuth();
    const { add } = useToaster();
    const [pending, setPending] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        patronymic: "",
        birthDate: "",
        vkUrl: null,
        showVk: false,
        showFb: false,
        tgUrl: null,
        showTg: false,
        aboutMe: "",
        isPublic: false,
    });

    const changeUserData = async () => {
        try {
            setPending(true);
            const response = await api.put("/profile", userData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.documentId) {
                add({
                    title: "Успешно",
                    content: "Новые данные сохранены",
                    name: "toaster",
                    theme: "success",
                    autoHiding: 5000,
                });
            }
        } catch (error: any) {
        } finally {
            setPending(false);
        }
    };

    const handleUserData = (e: any) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(userData);
    };

    const getUserData = () => {
        api.get("/profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response: AxiosResponse) => {
            setUserData(response.data);
        });
    };

    const FORMAT = "YYYY-MM-DD";
    const date = userData.birthDate
        ? dateTime({ input: userData.birthDate })
        : null;

    useEffect(() => {
        if (!token) return;
        getUserData();
    }, [token]);

    return (
        <section className={`flex ${s.section}`}>
            <div className={`flex ${s.top}`}>
                <Text as="h2" variant="subheader-3" className={s.title}>
                    Обо мне
                </Text>
                <Text as="h3" variant="header-1">
                    Показать на сайте?
                </Text>
            </div>
            <div className={s.content}>
                <div className={s.avatar}>
                    <Text as="p" variant="header-1">
                        Аватар:
                    </Text>
                    <button className={s.avatar_btn}>Загрузить</button>
                </div>
                <div className={s.userdata}>
                    <div className={s.input_wrap}>
                        <Text as="p" variant="header-1">
                            Фамилия:
                        </Text>
                        <TextInput
                            className={s.input}
                            placeholder="Иванов"
                            size="xl"
                            value={userData.lastName}
                            id="lastName"
                            name="lastName"
                            onChange={handleUserData}
                        />
                    </div>
                    <div className={s.input_wrap}>
                        <Text as="p" variant="header-1">
                            Имя:
                        </Text>
                        <TextInput
                            className={s.input}
                            placeholder="Иван"
                            size="xl"
                            value={userData.firstName}
                            id="firstName"
                            name="firstName"
                            onChange={handleUserData}
                        />
                    </div>
                    <div className={s.input_wrap}>
                        <Text as="p" variant="header-1">
                            Отчество:
                        </Text>
                        <TextInput
                            className={s.input}
                            placeholder="Иванович"
                            size="xl"
                            value={userData.patronymic}
                            id="patronymic"
                            name="patronymic"
                            onChange={handleUserData}
                        />
                    </div>
                    <div className={s.input_wrap}>
                        <Text as="p" variant="header-1">
                            Email:
                        </Text>
                        <TextInput
                            type="email"
                            className={s.input}
                            placeholder="ivanovivan@mail.ru"
                            size="xl"
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={handleUserData}
                        />
                    </div>
                    <div className={s.input_wrap}>
                        <Text as="p" variant="header-1">
                            Дата рождения:
                        </Text>
                        <DatePicker
                            className={s.date_picker}
                            size="xl"
                            format="DD.MM.YYYY"
                            id="birthDate"
                            name="birthDate"
                            value={date}
                            onUpdate={(value: any) => {
                                const newDate = dateTime({
                                    input: value,
                                }).format(FORMAT);
                                setUserData((prevState) => ({
                                    ...prevState,
                                    birthDate: newDate,
                                }));
                            }}
                        />
                    </div>
                </div>
                <div className={s.accounts}>
                    <div className={s.input_wrap}>
                        <Text as="p" variant="header-1">
                            Аккаунт VK:
                        </Text>
                        <TextInput
                            className={s.input}
                            placeholder="https://vk.com/example"
                            size="xl"
                            id="vkUrl"
                            name="vkUrl"
                            value={userData.vkUrl || ""}
                            onChange={handleUserData}
                        />
                        <Switch
                            name="showVk"
                            id="showVk"
                            checked={userData.showVk}
                            onUpdate={(value: any) => {
                                setUserData((prevState) => ({
                                    ...prevState,
                                    showVk: value,
                                }));
                            }}
                        />
                    </div>
                    <div className={s.input_wrap}>
                        <Text as="p" variant="header-1">
                            Аккаунт TG:
                        </Text>
                        <TextInput
                            className={s.input}
                            size="xl"
                            placeholder="https://t.me/example"
                            id="tgUrl"
                            name="tgUrl"
                            value={userData.tgUrl || ""}
                            onChange={handleUserData}
                        />
                        <Switch
                            name="showTg"
                            id="showTg"
                            checked={userData.showTg}
                            onUpdate={(value) => {
                                setUserData((prevState) => ({
                                    ...prevState,
                                    showTg: value,
                                }));
                            }}
                        />
                    </div>
                    <div className={s.input_wrap}>
                        <Text as="p" variant="header-1">
                            40 символов обо мне
                        </Text>
                        <TextInput
                            className={s.input}
                            size="xl"
                            value={userData.aboutMe || ""}
                            id="aboutMe"
                            name="aboutMe"
                            onChange={handleUserData}
                        />
                    </div>
                </div>
            </div>
            <div className={`flex ${s.bottom}`}>
                <Button
                    onClick={changeUserData}
                    className={s.button}
                    view="action"
                    size="xl"
                    loading={pending}
                >
                    Сохранить
                </Button>
            </div>
        </section>
    );
};

export default AboutMe;
