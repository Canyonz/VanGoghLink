import { LinkUI } from "@/shared/ui/linkUI/LinkUI";
import { barInfoLinks } from "../consts/barInfoConst";
import styles from "./BarInfo.module.sass";
import cls from "classnames";
import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";

export const BarInfo = ({ className }) => {
	return (
		<div className={cls(styles.barInfo, className)}>
			{barInfoLinks.map((link, index) => (
				<LinkUI key={index} href="#" fontWeight="lighter" color="secondary">
					{link}
				</LinkUI>
			))}
			<ButtonUI color="secondary">EN</ButtonUI>
		</div>
	);
};
