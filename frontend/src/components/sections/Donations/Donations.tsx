import s from "./Donations.module.css";

const Donations = () => {
    return (
        <section className={`flex section ${s.section}`}>
            <img src="../src/assets/icons/donate.svg" alt="" />
            <div className={s.content}>
                <h2 className={s.title}>Не забывайте иногда донатить нам!</h2>
                <p className={s.text}>
                    Любая сумма от <span className={s.sum}>50₽</span> даст нам
                    возможность улучшать портал и создавать новые крутые
                    бесплатные мероприятия. Спасибо за помощь!
                </p>
            </div>
        </section>
    );
};

export default Donations;
