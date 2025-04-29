import { useNavigate } from "react-router";

import s from "./Hero.module.css";
import Button from "@ui/Button/Button";

const Hero = () => {
    const navigate = useNavigate()
    const handleLoginRedirect = () => {
        navigate('/login')
    }
    return (
        <section className="section">
            <div className={`flex ${s.content}`}>
                <img src="../src/assets/images/hero.webp" alt="Hero" />
                <div className={`flex ${s.hero_text}`}>
                    <h1 className={s.title}>
                        Формируем гибкие навыки бесплатно
                    </h1>
                    <p className={s.description}>
                        Тренинги, деловые игры, мастер-классы, воркшопы от
                        лучших мастеров
                    </p>
                    <div className={s.separator}></div>
                    <Button onClick={handleLoginRedirect}>Вход</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
