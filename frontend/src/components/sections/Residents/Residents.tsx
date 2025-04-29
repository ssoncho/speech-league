import s from "./Residents.module.css";
import { ResidentCardType } from "@mytypes/types";
import ResidentCard from "@ui/ResidentCard/ResidentCard";

const RESIDENTS_LIST: ResidentCardType[] = [
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Кубы и речи", icon: "./src/assets/icons/bank.svg" },
    { name: "Школа импровизации", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
    { name: "Народный Театр", icon: "./src/assets/icons/bank.svg" },
];

const Residents = () => {
    return (
        <section className="section">
            <h2 className={s.title}>
                Сообщества-резиденты Лиги Речи <br /> приглашают на свои мероприятия
            </h2>
            <ul className={`flex ${s.list}`}>
                {RESIDENTS_LIST.map((resident: ResidentCardType) => {
                    return <ResidentCard resident={resident}/>
                })}
            </ul>
        </section>
    );
};

export default Residents;
