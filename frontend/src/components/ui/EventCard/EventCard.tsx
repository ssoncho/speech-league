import s from "./EventCard.module.css";

import { EventType } from "@mytypes/types";

import { dateTimeParse, settings } from "@gravity-ui/date-utils";
import { useEffect } from "react";
import { Link } from "react-router";


settings.getLocale();
settings.loadLocale("ru").then(() => {
    settings.setLocale("ru");
    settings.getLocale();
});

const EventCard: React.FC<EventType> = (event) => {
    useEffect(()=>{
        console.log(event)
    },[])
    const { name, price, date, project, community, cover, documentId } = event;

    const FORMAT = "DD MMMM";
    const newDate = dateTimeParse(date)?.format(FORMAT).split(" ");

    return (
        <Link to={`/event/${documentId}`} className={`flex ${s.card}`}>
            <img
                className={s.img}
                src={cover ? cover.url : "images/noimg.png"}
                alt=""
            />
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
                    <p className={s.price}>{price ? price + '₽' : "Бесплатно"}</p>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;
