import s from "./ResidentCard.module.css";
import { ResidentCardType } from "@mytypes/types";

type ResidentCardProps = {
    resident: ResidentCardType;
};

const ResidentCard: React.FC<ResidentCardProps> = ({resident}) => {
    const { name, icon } = resident;
    return (
        <li className={`flex ${s.card}`}>
            <img className={s.avatar} src={icon} alt="" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

export default ResidentCard;
