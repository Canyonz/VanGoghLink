import { Link } from "react-router-dom";
import styles from "./LinkUI.module.sass";
import cls from "classnames";

/**
 *
 * @param {{
 * 	href: string,
 * 	variant: 'clear' | 'filled',
 * 	color: 'primary' | 'secondary' | 'third' |'minor' ,
 * 	bgcolor: 'dark' | 'light' | 'accent',
 * 	size: 'sm' | 'md' | 'lg',
 * 	textAlign: 'left' | 'center' | 'right',
 * 	fontWeight: 'lighter' | 'normal' | 'bold'
 * 	decoration: 'underline',
 * 	children: ReactElement,
 * 	className: string,
 * }}
 *
 */

export const LinkUI = ({
	href = "#",
	color = "primary",
	variant = "clear",
	bgcolor = "dark",
	size = "md",
	textAlign = "left",
	fontWeight = "normal",
	decoration,
	children,
	className,
}) => {
	return (
		<a
			href={href}
			className={cls(
				styles.linkUI,
				styles[color],
				styles[variant],
				styles[bgcolor],
				styles[size],
				styles[textAlign],
				styles[fontWeight],
				styles[decoration],
				className
			)}
		>
			{children}
		</a>
	);
};
