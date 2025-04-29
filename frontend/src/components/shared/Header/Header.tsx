import s from "./Header.module.css";
import { Link } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";

type HeaderLink = {
    name: string;
    link: string;
};

const HEADER_LINKS: HeaderLink[] = [
    { name: "Кто мы", link: "/" },
    { name: "Проекты", link: "/" },
    { name: "Сообщества", link: "/login" },
];

const Header = () => {
    const location = useLocation();
    const rootElement = document.getElementById("root");

    useEffect(() => {
        if (
            location.pathname === "/login" ||
            location.pathname === "/register"
        ) {
            rootElement?.classList.add("authPage");
        } else {
            rootElement?.classList.remove("authPage");
        }
    }, [location.pathname, rootElement]);

    return (
        <header className={`header ${s.header}`}>
            <div className={`flex ${s.container}`}>
                <img
                    src="../src/assets/images/logo.webp"
                    alt="Логотип Лиги Речи"
                    className={s.logo}
                />
                <ul className={`flex ${s.header_navlist}`}>
                    {HEADER_LINKS.map((link: HeaderLink) => {
                        return (
                            <li className={s.header_navitem}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        );
                    })}
                </ul>
                <select className={s.select} name="city" id="city">
                    <option value="ekb">Екатеринбург</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
