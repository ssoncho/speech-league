import s from "./NavbarItem.module.css";
import { Link } from "react-router";
import { NavbarItemType } from "@mytypes/types";

type NavbarItemProps = {
    item: NavbarItemType;
};

const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
    const { name, link, icon } = item;
    return (
        <li className={s.navbar_item}>
            <Link className={`flex ${s.link}`} to={link}>
                <img src={icon} alt="" />
                {name}
            </Link>
        </li>
    );
};

export default NavbarItem;
