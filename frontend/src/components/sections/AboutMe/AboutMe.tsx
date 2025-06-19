import s from "./AboutMe.module.css";
import { Text, TextInput, Switch, Button, useToaster } from "@gravity-ui/uikit";
import { DatePicker } from "@gravity-ui/date-components";
import { api } from "@api/BaseUrl";
import { useEffect, useState } from "react";
import { dateTime } from "@gravity-ui/date-utils";
import { useAuth } from "../../../AuthContext";
import { Modal } from "@gravity-ui/uikit";
import LoadingScreen from "@shared/LoadingScreen/LoadingScreen";

const AboutMe = () => {
    const { token } = useAuth();
    const { add } = useToaster();
    const [pending, setPending] = useState(false);
    const [isDisabled, setDisabled] = useState(true);
    const [file, setFile] = useState<File | null>(null);
    const [isOpen, setOpen] = useState(false);
    const FALLBACK_IMG = "/images/no-avatar.jpg";

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
        photo: {
            url: "",
        },
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const sendPhotoId = async (id: number) => {
        try {
            const response = await api.put(
                "/profile",
                {
                    photo: id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            if (response.status == 200) {
                getUserData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Выбери файл!");
            return;
        }

        const formData = new FormData();
        formData.append("files", file);

        try {
            setPending(true);
            const res = await api.post("/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.status == 201) {
                const id = res.data[0].id;
                await sendPhotoId(id);
                setPending(false);
                add({
                    title: "Успешно",
                    content: "Новое фото загружено",
                    name: "toaster",
                    theme: "success",
                    autoHiding: 5000,
                });
            }
        } catch (err) {}
    };

    const changeUserData = async () => {
        setPending(true);
        try {
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
            setDisabled(true);
        }
    };

    const handleUserData = (e: any) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const getUserData = async () => {
        try {
            const response = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUserData(response.data);
        } catch (error) {}
    };

    const FORMAT = "YYYY-MM-DD";
    const date = userData.birthDate
        ? dateTime({ input: userData.birthDate })
        : null;

    useEffect(() => {
        if (!token) return;
        getUserData();
        console.log(token);
    }, [token]);

    return (
        <section className={`flex ${s.section}`}>
            {!userData.email && !userData.firstName ? (
                <LoadingScreen />
            ) : (
                <>
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
                            <Text
                                className={s.avatar_title}
                                as="p"
                                variant="header-1"
                            >
                                Аватар:
                            </Text>
                            <img
                                className={s.avatar_btn}
                                src={
                                    userData.photo
                                        ? userData.photo.url
                                        : FALLBACK_IMG
                                }
                                alt="Аватар"
                                onClick={() => setOpen(true)}
                            />
                        </div>
                        <Modal
                            open={isOpen}
                            onOpenChange={() => setOpen(false)}
                        >
                            <div className={s.modal_wrap}>
                                <h2 className={s.modal_title}>
                                    Загрузка фото профиля
                                </h2>
                                <div className={`flex ${s.modal_content}`}>
                                    <img
                                        className={s.modal_img}
                                        src={
                                            userData.photo
                                                ? userData.photo.url
                                                : FALLBACK_IMG
                                        }
                                        alt=""
                                    />
                                    <div className={s.upload_wrap}>
                                        <input
                                            className={s.modal_input}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                        <Button
                                            loading={pending}
                                            view="action"
                                            size="xl"
                                            onClick={handleUpload}
                                            className={s.upload_btn}
                                        >
                                            Отправить
                                        </Button>
                                    </div>
                                </div>
                                <Button
                                    view="outlined-danger"
                                    size="l"
                                    className={s.close_btn}
                                    onClick={() => setOpen(false)}
                                >
                                    Закрыть
                                </Button>
                            </div>
                        </Modal>

                        <div className={s.userdata}>
                            <div className={s.input_wrap}>
                                <Text as="p" variant="header-1">
                                    Фамилия:
                                </Text>
                                <TextInput
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
                                    className={s.input}
                                    placeholder="https://vk.com/example"
                                    size="xl"
                                    id="vkUrl"
                                    name="vkUrl"
                                    value={userData.vkUrl || ""}
                                    onChange={handleUserData}
                                />
                                <Switch
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
                                    className={s.input}
                                    size="xl"
                                    placeholder="https://t.me/example"
                                    id="tgUrl"
                                    name="tgUrl"
                                    value={userData.tgUrl || ""}
                                    onChange={handleUserData}
                                />
                                <Switch
                                    disabled={isDisabled}
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
                                    disabled={isDisabled}
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
                        {!isDisabled && (
                            <Button
                                onClick={() => setDisabled(true)}
                                className={s.button}
                                view="outlined-danger"
                                size="xl"
                                loading={pending}
                            >
                                Отменить
                            </Button>
                        )}
                        {isDisabled ? (
                            <Button
                                onClick={() => setDisabled(false)}
                                className={s.button}
                                view="action"
                                size="xl"
                                loading={pending}
                            >
                                Изменить
                            </Button>
                        ) : (
                            <Button
                                onClick={changeUserData}
                                className={s.button}
                                view="action"
                                size="xl"
                                loading={pending}
                            >
                                Сохранить
                            </Button>
                        )}
                    </div>
                </>
            )}
        </section>
    );
};

export default AboutMe;
