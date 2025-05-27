import s from "./EventCard.module.css";

import { EventType } from "@mytypes/types";

import { dateTimeParse, settings } from "@gravity-ui/date-utils";

settings.getLocale(); // default locale "en"
settings.loadLocale("ru").then(() => {
    settings.setLocale("ru");
    settings.getLocale(); // "de"
});

const EventCard: React.FC<EventType> = (event) => {
    const { name, price, date, project, community } = event;

    const FORMAT = "DD MMMM";
    const newDate = dateTimeParse(date)?.format(FORMAT).split(" ");

    return (
        <div className={`flex ${s.card}`}>
            <div className={`flex ${s.content} ${price ? s.notfree : s.free} `}>
                <h2 className={s.date}>
                    {newDate && newDate[0]} <br />
                    {newDate && newDate[1]}
                </h2>
                <div className={s.separator}></div>
                <div className={`flex ${s.info}`}>
                    <h2 className={s.title}>{name}</h2>
                    <p className={s.description}>
                        {project && project.name}
                        {community && community.name}
                    </p>
                    <p className={s.price}>{price ? price : "Бесплатно"}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
