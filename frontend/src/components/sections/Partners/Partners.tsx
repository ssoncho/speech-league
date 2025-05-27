import s from "./Partners.module.css";
import PartnerCard from "@ui/PartnerCard/PartnerCard";
import { Text } from "@gravity-ui/uikit";

const Partners = ({partners, thanks}: any) => {
    return (
        <section className="section">
            <Text className={s.title} as="h2" variant="display-3">Партнёры Лиги Речи</Text>
            <h3 className={s.subtitle}>{thanks}</h3>
            <ul className={`flex ${s.list}`}>
                {partners.map((partner: any) => {
                    return <PartnerCard partner={partner} />;
                })}
            </ul>
        </section>
    );
};

export default Partners;
