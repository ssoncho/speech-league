import s from "./MyLevel.module.css";
import { Text } from "@gravity-ui/uikit";
import { api } from "@api/BaseUrl";
import { useEffect, useState } from "react";
import { useAuth } from "../../../AuthContext";
import { AxiosResponse } from "axios";
import { Skeleton } from "@gravity-ui/uikit";

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
        if (level === "Тренер") {
            return "Чтобы сохранить аккаунт уровня Тренер, продолжай быть тренером или организатором на мероприятиях Лиги Речи!Проявляй активность в этих ролях минимум раз в год.";
        } else if (level === "Лидер") {
            return "Старше Лидера Лиги Речи только Администратор целого города. Хочешь им стать?Тогда отправляйся в город, где еще нет Лиги Речи, и создай ее там с нуля!";
        } else if (level === "Куратор") {
            return "Чтобы повысить аккаунт до уровня Лидера, ты должен быть главным организатором бесплатного проекта по развитию гибких навыков.";
        } else return "Пока что у Вас полномочия Гостя!";
    };

    return (
        <section className={s.section}>
            <Text className={s.title} as="h2" variant="subheader-3">
                Уровень
            </Text>
            {!level.role ? (
                <Skeleton className={`${s.skeleton} ${s.level_skeleton}`} />
            ) : (
                <Text className={s.level} as="h2" variant="display-2">
                    {level.role}
                </Text>
            )}

            {!level.role ? (
                <Skeleton className={`${s.skeleton} ${s.description_skeleton}`} />
            ) : (
                <Text className={s.description} as="h2" variant="subheader-2">
                    {returnDescription(level.role)}
                </Text>
            )}
        </section>
    );
};

export default MyLevel;
