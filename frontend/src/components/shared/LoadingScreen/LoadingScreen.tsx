import s from "./LoadingScreen.module.css";
import { Spin, Text } from "@gravity-ui/uikit";

const LoadingScreen = () => {
    return (
        <div className={`flex ${s.wrap}`}>
            <Spin size="xl" />
            <Text as="h2" variant="header-1">Загрузка...</Text>
        </div>
    );
};

export default LoadingScreen;
