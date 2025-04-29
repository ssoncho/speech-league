import s from "./Partnership.module.css";

const Partnership = () => {
    return (
        <section className="section">
            <div className={s.content}>
                <div className={`${s.grid_section} ${s.lt}`}>
                    <div className={`flex ${s.wrap}`}>
                        <h2 className={s.title}>
                            Делаете крутое бесплатное мероприятие?
                        </h2>
                        <p className={s.description}>
                            Добро пожаловать! Наш клуб организаторов будет рад
                            принять вас в свои ряды!
                        </p>
                    </div>
                </div>
                <div className={`${s.grid_section} ${s.rt}`}>
                    <div className={`flex ${s.wrap}`}>
                        <h2 className={s.title}>
                            У Вас клуб или сообщество? Развиваете гибкий навык?
                        </h2>
                        <p className={s.description}>
                            Присоединяйтесь к нашему клубу организаторов! Ваши
                            анонсы появятся в календаре Лиги Речи, к Вам придут
                            новые участники. А Вы иногда будете делиться опытом
                            бесплатно.
                        </p>
                    </div>
                </div>
                <div className={`${s.grid_section} ${s.lb}`}>
                    <div className={`flex ${s.wrap}`}>
                        <h2 className={s.title}>
                            Не коммерческий проект?Нужны тренеры-волонтёры?
                        </h2>
                        <p className={s.description}>
                            Найдём Вам активных тренеров-новичков. Договоримся,
                            чтобы помогли бесплатно в обмен на Вашу PR-поддержку
                            нашему проекту.
                        </p>
                    </div>
                </div>
                <div className={`${s.grid_section} ${s.rb}`}>
                    <div className={`flex ${s.wrap}`}>
                        <h2 className={s.title}>
                            Вы из бизнеса?Хотите развивать сотрудников?
                        </h2>
                        <p className={s.description}>
                            Подберём профессионального тренера под Ваши задачи,
                            предложим варианты. У нас десятки тренеров, мы
                            каждого видели в деле, дадим рекомендации.
                        </p>
                    </div>
                </div>
            </div>
            <h3 className={s.contact}>
                Звоните и начнём сотрудничество: +7 950 550-07-71
            </h3>
        </section>
    );
};

export default Partnership;
