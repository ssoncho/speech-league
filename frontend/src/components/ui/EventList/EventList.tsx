import s from "./EventList.module.css";

import EventCard from "@ui/EventCard/EventCard";
import { useEffect } from "react";

const EventList = ({ events }: any) => {
    useEffect(() => {
        console.log(events);
    }, []);
    return (
        <div className={`flex ${s.list}`}>
            {events.map((event: any) => {
                return <EventCard {...event}/>;
            })}
        </div>
    );
};

export default EventList;
