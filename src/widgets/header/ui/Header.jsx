import { IconUI } from "@/shared/ui/iconUI/IconUI";
import styles from "./Header.module.sass";
import cls from "classnames";
import MenuSVG from "@/shared/assets/icons/menu.svg";
import { headerLinks } from "../consts/headerConst";
import { LinkUI } from "@/shared/ui/linkUI/LinkUI";
import { HeaderSearch } from "@/features/headerSearch";
import { Basket } from "@/entities/basket";
import { AppLogo } from "@/shared/ui/appLogo/AppLogo";

export const Header = ({ className }) => {
	return (
		<header className={cls(styles.header, className)}>
			<AppLogo />
			<div className={styles.header_links}>
				{headerLinks.map((link, index) => (
					<LinkUI key={index} className={styles.link}>
						{link}
					</LinkUI>
				))}
			</div>
			<div className={styles.searchBasketWrapper}>
				<HeaderSearch />
				<Basket />
			</div>
			<IconUI Svg={MenuSVG} width={40} height={40} onClick={() => {}} className={styles.menu}/>
		</header>
	);
};
