import s from "./Contacts.module.css";

const Contacts = () => {
    return (
        <section className="section">
            <div className={`flex ${s.content}`}>
                <div className={s.left_content}>
                    <h2 className={s.phone_number}>
                        Телефон: <br /> +7 950 550-07-71
                    </h2>
                </div>
                <div className={s.separator}></div>
                <div className={`flex ${s.right_content}`}>
                    <div className={`flex ${s.afisha}`}>
                        <h2 className={s.afisha_text}>
                            Подпишись на афишу <br /> (приходит раз в 2 недели):
                        </h2>
                        <div className={`flex ${s.afisha_icons}`}>
                            <a href="#">
                                <img
                                    src="../src/assets/icons/telegram.svg"
                                    alt="Telegram"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="../src/assets/icons/whatsapp.svg"
                                    alt="WhatsApp"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={`flex ${s.afisha}`}>
                        <h2 className={s.afisha_text}>
                            Вступи в группу <br /> (читай программы и анонсы):
                        </h2>
                        <div className={`flex ${s.afisha_icons}`}>
                            <a href="#">
                                <img
                                    src="../src/assets/icons/vk.svg"
                                    alt="VK"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
