import s from "./Button.module.css";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <button className={s.button} onClick={onClick}>{children}</button>;
};

export default Button;
