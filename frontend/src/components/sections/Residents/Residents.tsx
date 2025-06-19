import s from "./Residents.module.css";
import { ResidentCardType } from "@mytypes/types";
import ResidentCard from "@ui/ResidentCard/ResidentCard";
import { Text } from "@gravity-ui/uikit";

const Residents = ({ header, residents }: any) => {
    return (
        <section className="section" id="residents">
            <Text as="h2" className={s.title} variant="display-3">
                {header}
            </Text>
            <ul className={`flex ${s.list}`}>
                {residents.map((resident: ResidentCardType) => {
                    return <ResidentCard resident={resident} />;
                })}
            </ul>
        </section>
    );
};

export default Residents;
