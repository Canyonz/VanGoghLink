import { Card } from "./card/Card";
import styles from "./Catalog.module.sass";
import cls from "classnames";

export const Catalog = ({ catalog = [], className }) => {
	return (
		<div className={cls(styles.catalog, className)}>
			{catalog.map((card) => (
				<Card card={card} key={card.id} />
			))}
		</div>
	);
};
