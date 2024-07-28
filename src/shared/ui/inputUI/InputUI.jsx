import styles from "./InputUI.module.sass";
import cls from "classnames";

/**
 * @param {{
 * type: string
 * value: string | number,
 * placeholder: string,
 * variant: 'clear' | 'outlined',
 * onChange: (value) => void
 * className: string
 * }}
 *
 */

export const InputUI = ({ type = "text", value, placeholder, variant = "clear", onChange, className }) => {
	const handleChangeInput = (e) => {
		onChange(e.target.value);
	};

	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={handleChangeInput}
			className={cls(styles.input, styles[variant], className)}
		/>
	);
};
