import { useNavigate } from "react-router";

import s from "./Hero.module.css";
import Button from "@ui/Button/Button";
import { Text } from "@gravity-ui/uikit";

type HeroPropsType = {
    id: string;
    title: string;
    description: string;
    photo: {
        id: number;
        documentId: string;
        url: string;
    };
};

const Hero: React.FC<HeroPropsType> = (data) => {
    const { title, description, photo } = data;
    const navigate = useNavigate();
    const handleLoginRedirect = () => {
        navigate("/login");
    };

    return (
        <section className="section">
            <div className={`flex ${s.content}`}>
                <img className={s.img} src={photo.url} alt="Hero" />
                <div className={`flex ${s.hero_text}`}>
                    <Text className={s.title} as="h1" variant="display-4">
                        {title}
                    </Text>
                    <Text variant="body-2">{description}</Text>
                    <div className={s.separator}></div>
                    <Button onClick={handleLoginRedirect}>Вход</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
