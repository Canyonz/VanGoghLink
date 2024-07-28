import styles from "./IconUI.module.sass";
import cls from "classnames";

/**
 *
 * @param {{
 * Svg: React.FC<React.SVGProps<SVGElement>>,
 * width: number,
 * height: number,
 * color: 'primary' | 'secondary',
 * onClick: () => void,
 * className: string,
 * }}
 *
 */

export const IconUI = ({ Svg, width = 24, height = 24, color = "primary", onClick, className }) => {
	const classNameAdded = onClick ? "" : className;

	const icon = <Svg width={width} height={height} className={cls(styles.iconUI, styles[color], classNameAdded)} />;

	if (onClick) {
		return (
			<button onClick={onClick} className={cls(styles.button, className)}>
				{icon}
			</button>
		);
	}

	return icon;
};
