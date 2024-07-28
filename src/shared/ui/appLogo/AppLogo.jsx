import LogoSVG from "../../assets/icons/Logo.svg";
import LogoReversSVG from "../../assets/icons/LogoRevers.svg";
import styles from "./AppLogo.module.sass";
import cls from "classnames";

/**
 *
 * @param {{
 * color: 'primary' | 'secondary'
 * size: 'md' | 'lg',
 * className: string,
 * }}
 *
 */

export const AppLogo = ({ color = "primary", size = "md", className }) => {
	const Logo = color === "primary" ? LogoSVG : LogoReversSVG;

	return <Logo className={cls(styles.appLogo, styles[color], styles[size], className)} />;
};
