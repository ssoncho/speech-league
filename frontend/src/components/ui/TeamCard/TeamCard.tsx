import { TeamCardType } from "@mytypes/types";
import s from "./TeamCard.module.css";

type TeamCardProps = {
    card: TeamCardType;
    className?: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ card, className = "" }) => {
    const { firstName, lastName, statuses, aboutMe, vkUrl, tgUrl } = card;
    return (
        <li className={`flex ${className} ${s.card}`}>
            <div className={`flex ${s.card_top}`}>
                <img src="images/avatar.png" alt="" />
            </div>
            <h3 className={s.title}>
                {firstName} {lastName}
            </h3>

            <div className={s.separator}></div>
            <div className={`flex ${s.roles}`}>
                {statuses.map((role: string) => {
                    return <p>{role}</p>;
                })}
            </div>
            <div className={s.separator}></div>
            <p className={s.description}>{aboutMe}</p>
            <div className={`flex ${s.links}`}>
                {vkUrl && (
                    <a target="_blank" href={vkUrl}>
                        <img
                            className={s.vk}
                            src="/icons/brand-vk.svg"
                            alt=""
                        />
                    </a>
                )}
                {tgUrl && (
                    <a target="_blank" href={tgUrl}>
                        <img src="/icons/telegram.svg" alt="" />
                    </a>
                )}
            </div>
        </li>
    );
};

export default TeamCard;
