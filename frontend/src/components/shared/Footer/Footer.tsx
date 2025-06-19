import { useEffect, useState } from "react";
import s from "./Footer.module.css";
import { api } from "@api/BaseUrl";
import { Skeleton } from "@gravity-ui/uikit";
const Footer = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [footerData, setFooterData] = useState({
        phone: "",
        phoneOwner: "",
        socialLink: [
            {
                url: "",
                iconLight: {
                    url: null,
                },
            },
        ],
    });
    const getFooterData = async () => {
        try {
            setLoading(true);
            const response = await api.get("/footer");
            setFooterData(response.data.data.contacts);
        } catch (error) {
        } finally {
            setLoading(false);
        }
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
                    {isLoading ? (
                        <Skeleton className={s.skeleton} />
                    ) : (
                        <>
                            {footerData.socialLink.map((link: any) => {
                                return (
                                    <li className={s.footer_navitem}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            className={s.footer_navlink}
                                        >
                                            <img
                                                src={link.iconLight.url}
                                                alt="Icon"
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </>
                    )}
                </ul>
                <div className={s.contacts}>
                    {isLoading ? (
                        <Skeleton className={s.skeleton} />
                    ) : (
                        <>
                            {footerData.phone} <br /> {footerData.phoneOwner}
                        </>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
