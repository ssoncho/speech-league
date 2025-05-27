import s from "./ProfileHeader.module.css";
import { Text } from "@gravity-ui/uikit";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { api } from "@api/BaseUrl";
import { AxiosResponse } from "axios";
import { useAuth } from "../../../AuthContext";

const ProfileHeader = () => {
    const [headerData, setHeaderData] = useState({
        firstName: "",
        lastName: "",
        role: "",
    });

    const { token } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("authToken");
    };

    const getHeaderData = () => {
        api.get("/profile/shortInfo", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response: AxiosResponse) => {
            setHeaderData(response.data);
        });
    };

    useEffect(() => {
        getHeaderData();
    }, []);
    return (
        <header className={`header ${s.header}`}>
            <div className={`flex ${s.container}`}>
                <img
                    src="/images/logo.png"
                    alt="Логотип Лиги Речи"
                    className={s.logo}
                />

                <div className={`flex ${s.user_info}`}>
                    <Text variant="display-2" as="h2">
                        {headerData.firstName} {headerData.lastName}
                    </Text>
                    <Text variant="header-1" as="h2">
                        Уровень - "{headerData.role}"
                    </Text>
                </div>
                <div className={`flex ${s.links}`}>
                    <Link to="/">
                        <Text variant="header-1">К ВИТРИНЕ</Text>
                    </Link>
                    <Link
                        onClick={handleLogout}
                        className={`flex ${s.exit_link}`}
                        to="/"
                    >
                        <Text variant="header-1">ВЫХОД</Text>
                        <img src="../public/icons/exit.svg" alt="" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default ProfileHeader;
