import s from "./PartnerCard.module.css";
import { PartnerCardType } from "@mytypes/types";

type PartnerCardProps = {
    partner: PartnerCardType;
};

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
    const { name, avatar } = partner;
    return (
        <li className={`flex ${s.card}`}>
            <img className={s.avatar} src={avatar} alt="" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

export default PartnerCard;
