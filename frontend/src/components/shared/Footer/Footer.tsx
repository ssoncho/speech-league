import s from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`flex ${s.container}`}>
                <p className={s.text_left}>
                    Лига Речи <br />
                    Екатеринбург
                </p>
                <ul className={`flex ${s.footer_nav}`}>
                    <li className={s.footer_navitem}>
                        <a href="/" className={s.footer_navlink}>
                            <img
                                src="icons/telegram_footer.svg"
                                alt="WA"
                            />
                        </a>
                    </li>
                    <li className={s.footer_navitem}>
                        <a href="/" className={s.footer_navlink}>
                            <img
                                src="icons/vk_footer.svg"
                                alt="WA"
                            />
                        </a>
                    </li>
                    <li className={s.footer_navitem}>
                        <a href="/" className={s.footer_navlink}>
                            <img
                                src="icons/whatsapp_footer.svg"
                                alt="WA"
                            />
                        </a>
                    </li>
                </ul>
                <p className={s.contacts}>
                    Тел: +7 950 55-00-771 <br /> (Ольга Патракова)
                </p>
            </div>
        </footer>
    );
};

export default Footer
