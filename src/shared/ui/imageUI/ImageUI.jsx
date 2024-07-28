import styles from "./ImageUI.module.sass";
import cls from "classnames";

/**
 *
 * @param {{
 * image: string,
 * className:string,
 * }}
 *
 */

export const ImageUI = ({ image, className }) => {
	return <img src={image} className={cls(styles.imageUI, className)} />;
};
