import s from "./AboutCard.module.css";
import { AboutCardType } from "@mytypes/types";
import { Text } from "@gravity-ui/uikit";

type AboutCardProps = {
    card: AboutCardType;
};

const AboutCard: React.FC<AboutCardProps> = ({ card }) => {
    const { title, description } = card;
    return (
        <li className={`flex ${s.card}`}>
            <Text as="h2" variant="subheader-3">{title}</Text>
            <Text as="p" variant="body-1">{description}</Text>
        </li>
    );
};

export default AboutCard;
