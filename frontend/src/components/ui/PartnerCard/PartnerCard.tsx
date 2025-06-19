import s from "./PartnerCard.module.css";
import { Text } from "@gravity-ui/uikit";

const PartnerCard = ({ partner }: any) => {
    const { name, url, logo } = partner;
    return (
        <li className={s.card}>
            <a className={`flex ${s.card_wrap}`} href={url} target="_blank">
                <img
                    className={s.avatar}
                    src={logo ? logo.url : "/icons/no-image.svg"}
                    alt="Icon"
                />
                <Text className={s.name} variant="body-3">
                    {name}
                </Text>
            </a>
        </li>
    );
};

export default PartnerCard;
