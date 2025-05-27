import s from "./Donations.module.css";
import { Text } from "@gravity-ui/uikit";

const Donations = (data: any) => {
    const {
        description,
        donationDetails,
        donationPhone,
        highlight,
        minDonation,
    } = data;

    const edited = description.split("{minDonation}")
    return (
        <section className={`flex section ${s.section}`}>
            <img src="icons/donate.svg" alt="" />
            <div className={s.content}>
                <Text className={s.title} variant="display-3">
                    {highlight}
                </Text>
                <br />
                <Text variant="display-3">{edited[0]}<span className={s.sum}>{minDonation}</span>{edited[1]}</Text>
                <Text className={s.title} as="h2" variant="display-2">{donationPhone}</Text>
                <Text as="h2" variant="display-2">{donationDetails}</Text>
            </div>
        </section>
    );
};

export default Donations;
