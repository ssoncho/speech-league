import s from "./Event.module.css";
import { useParams } from "react-router";
import { api } from "@api/BaseUrl";
import { useEffect, useState } from "react";
import { dateTimeParse } from "@gravity-ui/date-utils";
import { Button } from "@gravity-ui/uikit";
import LoadingScreen from "@shared/LoadingScreen/LoadingScreen";
import { useAuth } from "../../AuthContext";
import { useToaster } from "@gravity-ui/uikit";
import { Link } from "react-router";
import { ArrowLeft } from "@gravity-ui/icons";
import { Icon } from "@gravity-ui/uikit";

const Event = () => {
    const { id } = useParams();
    const { add } = useToaster();
    const [eventData, setEventData] = useState<any>();
    const { token } = useAuth();
    const [isRegistered, setRegistered] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);

    const FORMAT = "DD MMMM";

    const formatDate = (date: any) => {
        if (date) {
            const newDate =
                dateTimeParse(date)?.format(FORMAT).split(" ") || "";
            return `${newDate[0]} ${newDate[1]}`;
        }
    };

    const getEventData = async () => {
        try {
            const response = await api.get(`/events/${id}/details`);
            setEventData(response.data);
        } catch (error) {}
    };

    const checkIfRegistered = async (id: string) => {
        try {
            const response = await api.get(`/events/${id}/is-registered`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.isRegistered == true) {
                setRegistered(true);
            }
        } catch (error) {}
    };

    const registerToEvent = async () => {
        try {
            setLoading(true);
            const response = await api.post(
                `/events/${id}/register`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            if (response.status == 201) {
                add({
                    title: "Успех!",
                    content: "Вы зарегистрировались на мероприятие",
                    theme: "success",
                    name: "toaster",
                    autoHiding: 5000,
                });
                setRegistered(true);
                getEventData();
            }
        } catch (error: any) {
            if (error.status == 401) {
                add({
                    title: "Ошибка",
                    content:
                        "Для регистрации на мероприятие войдите в личный кабинет",
                    theme: "danger",
                    name: "toaster",
                    autoHiding: 5000,
                });
            }
            if (error.status == 404) {
                add({
                    title: "Ошибка",
                    content: "Пользователь или мероприятие не найдено",
                    theme: "danger",
                    name: "toaster",
                    autoHiding: 5000,
                });
            }
        } finally {
            setLoading(false);
        }
    };

    const cancelRegistration = async () => {
        try {
            setLoading(true);
            const response = await api.delete(`/events/${id}/unregister`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status == 200) {
                add({
                    title: "Успех!",
                    content: "Регистрация отменена",
                    theme: "success",
                    name: "toaster",
                    autoHiding: 5000,
                });
                setRegistered(false);
                getEventData();
            }
        } catch (error: any) {
            if (error.status == 401) {
                add({
                    title: "Ошибка",
                    content: "Для отмены войдите в личный кабинет",
                    theme: "danger",
                    name: "toaster",
                    autoHiding: 5000,
                });
            } else if (error.status == 404) {
                add({
                    title: "Ошибка",
                    content: "Пользователь или мероприятие не найдено",
                    theme: "danger",
                    name: "toaster",
                    autoHiding: 5000,
                });
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getEventData();
        id && checkIfRegistered(id);
    }, []);
    return (
        <>
            {eventData && (
                <div className={s.grid}>
                    <div className={s.column_1}>
                        <Link className={s.link} to="/">
                            <Icon data={ArrowLeft} />
                            Назад
                        </Link>
                        <img
                            className={s.img}
                            src={
                                eventData.cover
                                    ? eventData.cover.url
                                    : "/images/noimg.png"
                            }
                            alt=""
                        />
                    </div>
                    <div className={`flex ${s.column_2}`}>
                        <a href={eventData.url} target="_blank">
                            <h2 className={s.title}>{eventData.name}</h2>
                        </a>
                        <h2 className={s.date}>{formatDate(eventData.date)}</h2>
                        <p className={s.description}>{eventData.description}</p>
                        <p className={s.visitors}>
                            Хотят пойти: {eventData.plannedGoCount}
                        </p>
                        <p className={s.visitors}>
                            Цена:{" "}
                            {eventData.price ? eventData.price : "Бесплатно"}
                        </p>
                        {isRegistered ? (
                            <Button
                                loading={isLoading}
                                className={s.button}
                                view="outlined-danger"
                                size="xl"
                                onClick={cancelRegistration}
                            >
                                ОТМЕНИТЬ РЕГИСТРАЦИЮ
                            </Button>
                        ) : (
                            <Button
                                loading={isLoading}
                                className={s.button}
                                view="action"
                                size="xl"
                                onClick={registerToEvent}
                            >
                                ЗАРЕГИСТРИРОВАТЬСЯ
                            </Button>
                        )}
                    </div>
                </div>
            )}
            {!eventData && <LoadingScreen />}
        </>
    );
};

export default Event;
