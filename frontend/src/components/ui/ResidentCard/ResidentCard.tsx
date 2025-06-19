import s from "./ResidentCard.module.css";
import { ResidentCardType } from "@mytypes/types";
import { Text } from "@gravity-ui/uikit";

type ResidentCardProps = {
    resident: ResidentCardType;
};

const ResidentCard: React.FC<ResidentCardProps> = ({resident}) => {
    const { name, url, logo } = resident;
    return (
        <li className={`flex ${s.card}`}>
            <a className={`flex ${s.card_wrap}`} href={url} target="_blank">
                <img className={s.avatar} src={logo ? logo.url : 'icons/no-image.svg'} alt="" />
                <Text variant="body-3" className={s.name}>{name}</Text>
            </a>
        </li>
    );
};

export default ResidentCard;
