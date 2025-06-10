import s from "./Navbar.module.css";
import { NavbarItemType } from "@mytypes/types";
import NavbarItem from "@ui/NavbarItem/NavbarItem";

const NAVBAR_ITEMS: NavbarItemType[] = [
    {
        name: "Донаты",
        link: "donations",
        icon: "/icons/money.svg",
    },
    {
        name: "Мой уровень",
        link: "level",
        icon: "/icons/star.svg",
    },
    {
        name: "Обо мне",
        link: "me",
        icon: "/icons/person.svg",
    },
    {
        name: "Портфолио",
        link: "donations",
        icon: "/icons/eye.svg",
    },
    {
        name: "Мои проекты",
        link: "projects",
        icon: "/icons/heart.svg",
    },
    {
        name: "Участники",
        link: "participants",
        icon: "/icons/microphone.svg",
    },
];

const Navbar = () => {
    return <div className={s.navbar}>
        {NAVBAR_ITEMS.map((item: NavbarItemType) => {
            return <NavbarItem item={item}/>
        })}
    </div>;
};

export default Navbar;
