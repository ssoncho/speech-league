import s from "./PartnerCard.module.css";
import { Text } from "@gravity-ui/uikit";

const PartnerCard = ({ partner }: any) => {
    const { name, url } = partner;
    return (
        <li className={`flex ${s.card}`}>
            <img
                className={s.avatar}
                src="images/partner.webp"
                alt=""
            />
            <Text className={s.name} variant="body-3">
                {url ? <a target="_blank" href={url}>{name}</a> : name}
            </Text>
        </li>
    );
};

export default PartnerCard;
