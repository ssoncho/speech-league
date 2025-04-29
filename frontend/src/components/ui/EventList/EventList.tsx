import s from "./EventList.module.css";

import { EventType } from "@mytypes/types";
import EventCard from "@ui/EventCard/EventCard";

const EVENTS: EventType[] = [
    {
        date: "2025-11-18",
        name: "Ораторфест",
        description: "Фестиваль развития гибких навыков",
        price: "Бесплатно",
    },
    {
        date: "2025-11-18",
        name: "Ораторфест",
        description: "Фестиваль развития гибких навыков",
        price: "Бесплатно",
    },
    {
        date: "2025-11-18",
        name: "Ораторфест",
        description: "Фестиваль развития гибких навыков",
        price: "Бесплатно",
    },
    {
        date: "2025-11-18",
        name: "Ораторфест",
        description: "Фестиваль развития гибких навыков",
        price: "Бесплатно",
    },
    {
        date: "2025-11-18",
        name: "Ораторфест",
        description: "Фестиваль развития гибких навыков",
        price: "Бесплатно",
    },
];

const EventList = () => {
    return (
        <div className={`flex ${s.list}`}>
            {EVENTS.map((event: EventType) => {
                return <EventCard event={event} />;
            })}
        </div>
    );
};

export default EventList;
