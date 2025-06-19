import Hero from "@sections/Hero/Hero";
import Contacts from "@sections/Contacts/Contacts";
import Calendar from "@sections/Calendar/Calendar";
import About from "@sections/About/About";
import Donations from "@sections/Donations/Donations";
import Residents from "@sections/Residents/Residents";
import Team from "@sections/Team/Team";
import Partners from "@sections/Partners/Partners";
import Partnership from "@sections/Partnership/Partnership";

import { getHomePageData } from "../../api/HomePageData";

import { useState, useEffect } from "react";
import LoadingScreen from "@shared/LoadingScreen/LoadingScreen";

const Home = () => {
    const [homePageData, setHomePageData] = useState<any>();

    const {
        hero,
        contacts,
        calendar,
        aboutUs,
        residents,
        donation,
        bePartner,
        partners,
    } = homePageData || {};

    const fetchData = async () => {
        try {
            const data = await getHomePageData();
            setHomePageData(data);
        } catch (err) {
            console.error("Failed to fetch home page data:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {!homePageData ? (
                <LoadingScreen />
            ) : (
                <>
                    <Hero {...hero} />
                    <Contacts {...contacts} />
                    <Calendar {...calendar} />
                    <About {...aboutUs} />
                    <Residents {...residents} />
                    <Donations {...donation} />
                    <Partnership {...bePartner} />
                    <Partners {...partners} />
                    <Team />
                </>
            )}
        </>
    );
};

export default Home;
