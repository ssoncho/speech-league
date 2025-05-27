import s from "./Partnership.module.css";
import { Text } from "@gravity-ui/uikit";

const Partnership = ({
    business,
    community,
    event,
    volunteers,
    partnershipText,
    phone,
}: any) => {
    return (
        <section className="section">
            <div className={s.content}>
                <div className={`${s.grid_section} ${s.lt}`}>
                    <div className={`flex ${s.wrap}`}>
                        <Text as="h2" variant="display-2">
                            {event.header}
                        </Text>
                        <Text variant="body-2">{event.description}</Text>
                    </div>
                </div>
                <div className={`${s.grid_section} ${s.rt}`}>
                    <div className={`flex ${s.wrap}`}>
                        <Text as="h2" variant="display-2">
                            {community.header}
                        </Text>
                        <Text variant="body-2">{community.description}</Text>
                    </div>
                </div>
                <div className={`${s.grid_section} ${s.lb}`}>
                    <div className={`flex ${s.wrap}`}>
                        <Text as="h2" variant="display-2">
                            {volunteers.header}
                        </Text>
                        <Text variant="body-2">{volunteers.description}</Text>
                    </div>
                </div>
                <div className={`${s.grid_section} ${s.rb}`}>
                    <div className={`flex ${s.wrap}`}>
                        <Text as="h2" variant="display-2">
                            {business.header}
                        </Text>
                        <Text variant="body-2">{business.description}</Text>
                    </div>
                </div>
            </div>
            <Text as="h3" variant="display-3">
                {partnershipText} {phone}
            </Text>
        </section>
    );
};

export default Partnership;
