import { FunctionComponent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { IconBaseProps } from "react-icons";
const Button: FunctionComponent<Props> = ({
  text,
  background,
  onClick,
  height,
  width,
  to,
  isActive, // Agrega la propiedad 'isActive'
  icon,
  color,
  size,
}) => {
  const buttonStyle = {
    height: height ? `${height}px` : undefined,
    width: width ? `${width}px` : undefined,
    background: color ? color : undefined,
    fontSize: size ? `${size}px` : undefined,
  };

  // Verifica si se proporciona la propiedad 'to'
  if (to) {
    return (
      <button
        style={buttonStyle}
        className={
          isActive // Agrega isActive al cálculo de la clase
            ? `${styles.container} ${styles.background}`
            : styles.container
        }
      >
        <Link to={to}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {text}
        </Link>
      </button>
    );
  } else {
    return (
      <button
        style={buttonStyle}
        className={
          background
            ? `${styles.container} ${styles.background}`
            : styles.container
        }
        onClick={onClick}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {text}
      </button>
    );
  }
};

interface Props {
  text: string;
  background?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  height?: number;
  width?: number;
  to?: string;
  isActive?: boolean; // Agrega la propiedad 'isActive' al tipo Props
  icon?: React.ReactElement<IconBaseProps>;
  color?: string;
  size?: number;
}

Button.defaultProps = {
  text: "Hola",
  background: true,
};

export default Button;
