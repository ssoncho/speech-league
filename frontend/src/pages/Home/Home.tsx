import Hero from "@sections/Hero/Hero";
import Contacts from "@sections/Contacts/Contacts";
import Calendar from "@sections/Calendar/Calendar";
import About from "@sections/About/About";
import Donations from "@sections/Donations/Donations";
import Residents from "@sections/Residents/Residents";
import Team from "@sections/Team/Team";
import Partners from "@sections/Partners/Partners";
import Partnership from "@sections/Partnership/Partnership";

const Home = () => {
    return (
        <>
            <Hero />
            <Contacts />
            <Calendar />
            <About />
            <Residents />
            <Donations />
            <Partnership />
            <Partners />
            <Team />
        </>
    );
};

export default Home;
