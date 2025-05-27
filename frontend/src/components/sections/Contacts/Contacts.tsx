import s from "./Contacts.module.css";
import { Text } from "@gravity-ui/uikit";

const Contacts = (props: any) => {
    const { phone, mailingText, groupsText, groupLinks, mailingLinks } = props;
    return (
        <section className="section">
            <div className={`flex ${s.content}`}>
                <div className={s.left_content}>
                    <Text
                        as="h2"
                        variant="display-4"
                        className={s.phone_number}
                    >
                        Телефон: <br /> {phone}
                    </Text>
                </div>
                <div className={s.separator}></div>
                <div className={`flex ${s.right_content}`}>
                    <div className={`flex ${s.afisha}`}>
                        <Text
                            as="h2"
                            variant="display-2"
                            className={s.afisha_text}
                        >
                            {mailingText}
                        </Text>
                        <div className={`flex ${s.afisha_icons}`}>
                            {mailingLinks.map((link: any) => {
                                return (
                                    <a href={link.url} target="_blank">
                                        <img src="icons/vk.svg" alt="VK"  />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className={`flex ${s.afisha}`}>
                        <Text
                            as="h2"
                            variant="display-2"
                            className={s.afisha_text}
                        >
                            {groupsText}
                        </Text>
                        <div className={`flex ${s.afisha_icons}`}>
                            {groupLinks.map((link: any) => {
                                return (
                                    <a href={link.url} target="_blank">
                                        <img src="icons/vk.svg" alt="VK" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
