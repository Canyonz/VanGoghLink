import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import styles from "./Basket.module.sass";
import cls from "classnames";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import BasketSVG from "@/shared/assets/icons/basket.svg";
import { TextUI } from "@/shared/ui/textUI/TextUI";

export const Basket = ({ className }) => {
	return (
		<ButtonUI variant="filled" color="secondary" rounded className={cls(styles.basket, className)}>
			<div className={styles.basketIconWrapper}>
				<IconUI Svg={BasketSVG} width={19} height={24} color="secondary" className={styles.basketIcon} />
				<TextUI text="3" color="primary" bgColor="light" className={styles.count} />
			</div>
			Корзина
		</ButtonUI>
	);
};
