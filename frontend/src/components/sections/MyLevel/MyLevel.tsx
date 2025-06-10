import s from "./MyLevel.module.css";
import { Text } from "@gravity-ui/uikit";
import { api } from "@api/BaseUrl";
import { useEffect, useState } from "react";
import { useAuth } from "../../../AuthContext";
import { AxiosResponse } from "axios";

const MyLevel = () => {
    const { token } = useAuth();
    const [level, setLevel] = useState({
        role: "",
    });
    const getLevelData = () => {
        api.get("/profile/shortInfo", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response: AxiosResponse) => {
            setLevel(response.data);
        });
    };
    useEffect(() => {
        getLevelData();
    }, []);
    const returnDescription = (level: string) => {
        if (level === "trainer") {
            return "Чтобы сохранить аккаунт уровня Тренер, продолжай быть тренером или организатором на мероприятиях Лиги Речи!Проявляй активность в этих ролях минимум раз в год.";
        } else if (level === "leader") {
            return "Старше Лидера Лиги Речи только Администратор целого города. Хочешь им стать?Тогда отправляйся в город, где еще нет Лиги Речи, и создай ее там с нуля!";
        } else if (level === "curator") {
            return "Чтобы повысить аккаунт до уровня Лидера, ты должен быть главным организатором бесплатного проекта по развитию гибких навыков.";
        } else return "Пока что у Вас полномочия Гостя!";
    };

    const returnLevel = (level: string) => {
        if (level === "trainer") {
            return "Трейнер";
        } else if (level === "leader") {
            return "Лидер";
        } else if (level === "curator") {
            return "Куратор";
        } else return "Гость";
    };
    return (
        <section className={s.section}>
            <Text className={s.title} as="h2" variant="subheader-3">
                Уровень
            </Text>
            <Text className={s.level} as="h2" variant="display-2">
                {returnLevel(level.role)}
            </Text>
            <Text className={s.description} as="h2" variant="subheader-2">
                {returnDescription(level.role)}
            </Text>
        </section>
    );
};

export default MyLevel;
