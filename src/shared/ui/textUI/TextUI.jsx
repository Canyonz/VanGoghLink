import styles from "./TextUI.module.sass";
import cls from "classnames";

/**
 *
 * @param {{
 * text: string,
 * variant: 'h1' | 'h2' | 'h3' | 'span',
 * color: 'primary' | 'secondary' | 'third' | 'accent' | 'minor',
 * bgColor: 'clear' | 'dark' | 'light',
 * size: 'sm' | 'md' | 'lg',
 * textAlign: 'left' | 'center' | 'right'
 * fontWeight: 'lighter' | 'normal' | 'bold'
 * decoration: 'line-through',
 * className: string,
 * }}
 *
 */

export const TextUI = ({
	text,
	variant = "span",
	color = "primary",
	bgColor = 'clear',
	size = "md",
	textAlign = "left",
	fontWeight = "normal",
	decoration,
	className,
}) => {
	const Tag = variant;
	return (
		<Tag
			className={cls(
				styles.textUI,
				styles[color],
				styles[bgColor],
				styles[size],
				styles[textAlign],
				styles[fontWeight],
				styles[decoration],
				className
			)}
		>
			{text}
		</Tag>
	);
};
