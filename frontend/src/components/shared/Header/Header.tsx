import s from "./Header.module.css";
import { Text } from "@gravity-ui/uikit";
import { HashLink as Link } from "react-router-hash-link";

type HeaderLink = {
    name: string;
    link: string;
};

const HEADER_LINKS: HeaderLink[] = [
    { name: "КТО МЫ", link: "/" },
    { name: "СООБЩЕСТВА", link: "#residents" },
    { name: "МОЙ ПРОФИЛЬ", link: "/profile/me" },
];

const Header = () => {
    return (
        <header className={`header ${s.header}`}>
            <div className={`flex ${s.container}`}>
                <img
                    src="/images/logo.webp"
                    alt="Логотип Лиги Речи"
                    className={s.logo}
                />
                <ul className={`flex ${s.header_navlist}`}>
                    {HEADER_LINKS.map((link: HeaderLink, index) => {
                        return (
                            <li key={index} className={s.header_navitem}>
                                {" "}
                                <Text variant="header-1">
                                    <Link smooth to={link.link}>
                                        {link.name}
                                    </Link>
                                </Text>
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
