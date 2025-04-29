import s from "./Container.module.css";

type ContainerProps = {
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children,  }) => {
    return <div className={`flex ${s.container}`}>{children}</div>;
};

export default Container;
