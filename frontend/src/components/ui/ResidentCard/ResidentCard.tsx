import s from "./ResidentCard.module.css";
import { ResidentCardType } from "@mytypes/types";
import { Text } from "@gravity-ui/uikit";

type ResidentCardProps = {
    resident: ResidentCardType;
};

const ResidentCard: React.FC<ResidentCardProps> = ({resident}) => {
    const { name  } = resident;
    return (
        <li className={`flex ${s.card}`}>
            <img className={s.avatar} src="icons/bank.svg" alt="" />
            <Text variant="body-3" className={s.name}>{name}</Text>
        </li>
    );
};

export default ResidentCard;
