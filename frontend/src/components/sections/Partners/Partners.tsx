import s from "./Partners.module.css";
import { PartnerCardType } from "@mytypes/types";
import PartnerCard from "@ui/PartnerCard/PartnerCard";

const PARTNERS_LIST: PartnerCardType[] = [
    { name: "Департамент молодежной политики", avatar: "images/partner.webp" },
    { name: "Точка кипения УрФУ", avatar: "images/partner.webp" },
    { name: "Точка кипения Ельцин Центра", avatar: "images/partner.webp" },
    { name: "Наше Радио", avatar: "images/partner.webp" },
    { name: "Платформа Радиотуб", avatar: "images/partner.webp" },
    { name: "Платформа Cerm.ru", avatar: "images/partner.webp" },
    { name: "Завод Кубков", avatar: "images/partner.webp" },
    { name: "Синара-Центр", avatar: "images/partner.webp" },
    { name: "ДКЖ", avatar: "images/partner.webp" },
];

const Partners = () => {
    return (
        <section className="section">
            <h2 className={s.title}>Партнёры Лиги Речи</h2>
            <h3 className={s.subtitle}>Благодарим Вас за поддержку!</h3>
            <ul className={`flex ${s.list}`}>
                {PARTNERS_LIST.map((partner: PartnerCardType) => {
                    return <PartnerCard partner={partner} />;
                })}
            </ul>
        </section>
    );
};

export default Partners;
