import s from "./Calendar.module.css";
import EventList from "@ui/EventList/EventList";

const Calendar = () => {
    return (
        <section className="section">
            <h2 className={s.title}>Календарь мероприятий</h2>
            <EventList />
        </section>
    );
};

export default Calendar;
