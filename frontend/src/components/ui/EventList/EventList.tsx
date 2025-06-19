import s from "./EventList.module.css";

import EventCard from "@ui/EventCard/EventCard";

const EventList = ({ events }: any) => {
    return (
        <ul className={`flex ${s.list}`}>
            {events.map((event: any) => {
                return <EventCard {...event}/>;
            })}
        </ul>
    );
};

export default EventList;
