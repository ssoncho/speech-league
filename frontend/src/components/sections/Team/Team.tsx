import s from "./Team.module.css";

import TeamCard from "@ui/TeamCard/TeamCard";
import { TeamCardType } from "../../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const TEAM_CARDS: TeamCardType[] = [
    {
        name: "Павел Пинженин",
        merits: "233",
        roles: [
            "Лидер Ораториада",
            "Лидер Оратор Комбат",
            "Основатель Лиги Речи",
        ],
        description: "Тренер тренеров, игропрактик, тренер презентаций",
        vklink: "https://vk.com/id6421115",
    },
    {
        name: "Павел Пинженин",
        merits: "233",
        roles: [
            "Лидер Ораториада",
            "Лидер Оратор Комбат",
            "Основатель Лиги Речи",
        ],
        description: "Тренер тренеров, игропрактик, тренер презентаций",
        vklink: "https://vk.com/id6421115",
    },
    {
        name: "Павел Пинженин",
        merits: "233",
        roles: [
            "Лидер Ораториада",
            "Лидер Оратор Комбат",
            "Основатель Лиги Речи",
        ],
        description: "Тренер тренеров, игропрактик, тренер презентаций",
        vklink: "https://vk.com/id6421115",
    },
    {
        name: "Павел Пинженин",
        merits: "233",
        roles: [
            "Лидер Ораториада",
            "Лидер Оратор Комбат",
            "Основатель Лиги Речи",
        ],
        description: "Тренер тренеров, игропрактик, тренер презентаций",
        vklink: "https://vk.com/id6421115",
    },
    {
        name: "Павел Пинженин",
        merits: "233",
        roles: [
            "Лидер Ораториада",
            "Лидер Оратор Комбат",
            "Основатель Лиги Речи",
        ],
        description: "Тренер тренеров, игропрактик, тренер презентаций",
        vklink: "https://vk.com/id6421115",
    },
    {
        name: "Павел Пинженин",
        merits: "233",
        roles: [
            "Лидер Ораториада",
            "Лидер Оратор Комбат",
            "Основатель Лиги Речи",
        ],
        description: "Тренер тренеров, игропрактик, тренер презентаций",
        vklink: "https://vk.com/id6421115",
    },
];

const Team = () => {
    return (
        <section className="section">
            <h2 className={s.title}>Команда Лиги Речи</h2>
            {TEAM_CARDS.length < 4 ? (
                <ul className={`flex ${s.list}`}>
                    {TEAM_CARDS.map((card: TeamCardType) => {
                        return <TeamCard className="width345" card={card} />;
                    })}
                </ul>
            ) : (
                <div className={s.wrap}>
                    <Swiper
                        className={s.mySwiper}
                        spaceBetween={30}
                        slidesPerView={3}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {TEAM_CARDS.map((card: TeamCardType) => {
                            return (
                                <SwiperSlide>
                                    <TeamCard card={card} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            )}
        </section>
    );
};

export default Team;
