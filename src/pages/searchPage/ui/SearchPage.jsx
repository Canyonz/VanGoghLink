import { TextUI } from "@/shared/ui/textUI/TextUI";
import styles from "./SearchPage.module.sass";
import { Catalog } from "@/entities/catalog";
import { catalogList } from "../const/searchPageConst";

export const SearchPage = () => {
	return (
		<main className={styles.searchPage}>
			<TextUI text="Результаты поиска" variant="h2" />

			{catalogList.length ? (
				<Catalog catalog={catalogList} className={styles.catalog} />
			) : (
				<TextUI text="По вашему запросу ничего не найдено!" fontWeight="bold" size="lg" />
			)}
		</main>
	);
};
