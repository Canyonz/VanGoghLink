import { InputUI } from "@/shared/ui/inputUI/InputUI";
import styles from "./HeaderSearch.module.sass";
import cls from "classnames";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import SearchSVG from "@/shared/assets/icons/search.svg";

export const HeaderSearch = ({ className }) => {
	return (
		<div className={cls(styles.headerSearch, className)}>
			<InputUI placeholder="Поиск" className={styles.input} />
			<IconUI Svg={SearchSVG} height={22} width={22} onClick={() => {}} className={styles.icon} />
		</div>
	);
};
