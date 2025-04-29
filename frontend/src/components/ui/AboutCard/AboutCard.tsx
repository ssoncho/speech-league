import s from "./AboutCard.module.css";
import { AboutCardType } from "@mytypes/types";

type AboutCardProps = {
    card: AboutCardType;
};

const AboutCard: React.FC<AboutCardProps> = ({ card }) => {
    const { title, description } = card;
    return (
        <li className={`flex ${s.card}`}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.description}>{description}</p>
        </li>
    );
};

export default AboutCard;
