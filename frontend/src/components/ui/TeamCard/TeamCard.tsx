import { TeamCardType } from "@mytypes/types";
import s from "./TeamCard.module.css";

type TeamCardProps = {
    card: TeamCardType;
    className?: string
};

const TeamCard: React.FC<TeamCardProps> = ({ card, className = '' }) => {
    const { merits, name, roles, description, vklink } = card;
    return (
        <li className={`flex ${className} ${s.card}`}>
            <div className={`flex ${s.card_top}`}>
                <img src="./src/assets/images/avatar.png" alt="" />
                <div className={s.merits}>
                    <p>Заслуги</p>
                    <p>{merits}</p>
                </div>
            </div>
            <h3 className={s.title}>{name}</h3>

            <div className={s.separator}></div>
            <div className={`flex ${s.roles}`}>
                {roles.map((role: string) => {
                    return <p>{role}</p>;
                })}
            </div>
            <div className={s.separator}></div>
            <p className={s.description}>{description}</p>
            <a href={vklink}>
                <img src="./src/assets/icons/brand-vk.svg" alt="" />
            </a>
        </li>
    );
};

export default TeamCard;
