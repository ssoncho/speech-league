import s from "./Calendar.module.css";
import EventList from "@ui/EventList/EventList";
import { Text } from "@gravity-ui/uikit";

const Calendar = (props: any) => {
    return (
        <section className="section">
            <Text as="h2" variant="display-3" className={s.title}>
                Календарь мероприятий
            </Text>
            <EventList {...props} />
        </section>
    );
};

export default Calendar;
