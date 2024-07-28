import styles from "./ButtonUI.module.sass";
import cls from "classnames";

/**
 *
 * @param {{
 * children: ReactElement,
 * variant:'filled' | 'clear',
 * color: 'primary' | 'secondary'
 * bgcolor: 'dark' | 'light' | 'accent'
 * rounded: boolean,
 * onClick: () => void,
 * className:string
 * }}
 *
 */

export const ButtonUI = ({
	children,
	variant = "clear",
	color = "primary",
	bgcolor = "dark",
	rounded = false,
	onClick,
	className,
}) => {
	return (
		<button
			onClick={onClick}
			className={cls(styles.buttonUI, styles[variant], styles[color], styles[bgcolor], { [styles.rounded]: rounded }, className)}
		>
			{children}
		</button>
	);
};
