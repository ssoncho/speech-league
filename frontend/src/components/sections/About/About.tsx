import s from "./About.module.css";
import AboutCard from "@ui/AboutCard/AboutCard";

const About = ({ we, mission, financing }: any) => {
    return (
        <section className="section">
            <ul className={`flex ${s.list}`}>
                <AboutCard card={we} />
                <AboutCard card={mission} />
                <AboutCard card={financing} />
            </ul>
        </section>
    );
};

export default About;
