import s from "./EventCard.module.css";

import { EventType } from "@mytypes/types";

interface EventCardProps {
    event: EventType;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const { name, description, price } = event;

    return (
        <div className={`flex ${s.card}`}>
            <div className={`flex ${s.content}`}>
                <h2 className={s.date}>
                    18 <br /> ноября
                </h2>
                <div className={s.separator}></div>
                <div className={`flex ${s.info}`}>
                    <h2 className={s.title}>{name}</h2>
                    <p className={s.description}>{description}</p>
                    <p className={s.price}>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
