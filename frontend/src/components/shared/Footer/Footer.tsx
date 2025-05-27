import { useEffect, useState } from "react";
import s from "./Footer.module.css";
import { api } from "@api/BaseUrl";
const Footer = () => {
    const [footerData, setFooterData] = useState({
        phone: "",
        phoneOwner: "",
        socialLink: [
            {
                url: "",
            },
            {
                url: "",
            },
        ],
    });
    const getFooterData = async () => {
        try {
            const response = await api.get("/footer");
            setFooterData(response.data.data.contacts);
            console.log(response.data.data.contacts);
        } catch (error) {}
    };

    useEffect(() => {
        getFooterData();
    }, []);
    return (
        <footer className={s.footer}>
            <div className={`flex ${s.container}`}>
                <p className={s.text_left}>
                    Лига Речи <br />
                    Екатеринбург
                </p>
                <ul className={`flex ${s.footer_nav}`}>
                    {footerData.socialLink.map((link: any) => {
                        return (
                            <li className={s.footer_navitem}>
                                <a href={link.url} target="_blank" className={s.footer_navlink}>
                                    <img
                                        src="/icons/vk_footer.svg"
                                        alt="VK"
                                    />
                                </a>
                            </li>
                        );
                    })}

                
                </ul>
                <p className={s.contacts}>
                    {footerData.phone} <br /> ({footerData.phoneOwner})
                </p>
            </div>
        </footer>
    );
};

export default Footer;
