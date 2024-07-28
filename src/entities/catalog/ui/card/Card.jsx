import { ImageUI } from "@/shared/ui/imageUI/ImageUI";
import styles from "./Card.module.sass";
import cls from "classnames";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import { LinkUI } from "@/shared/ui/linkUI/LinkUI";

export const Card = ({ card, className }) => {
	const priceFormated = (price) => {
		return new Intl.NumberFormat("ru-RU").format(price);
	};

	return (
		<div className={cls(styles.card, className)}>
			<div className={styles.imageWrapper}>
				{card.isPromotion && <TextUI text="Акция" color="secondary" size="sm" bgColor="dark" className={styles.promotion} />}
				<div className={styles.imageWpar}>
					<ImageUI image={card.image} className={styles.image} />
				</div>
				<div className={styles.linkDetailsWrapper}>
					<LinkUI variant="filled" color="secondary" bgcolor="accent" textAlign="center" className={styles.linkDetails}>
						Подробнее
					</LinkUI>
				</div>
			</div>
			<div className={styles.info}>
				<TextUI text={card.name} fontWeight="bold" />
				<div className={styles.price}>
					<TextUI text={`${priceFormated(card.price[0])} ₽`} color={card.price[1] && "accent"} size="lg" fontWeight="bold" />
					{card.price[1] && (
						<div>
							<TextUI text={`${priceFormated(card.price[1])}`} color="minor" size="lg" decoration="line-through" />
							<TextUI text=" ₽" color="minor" size="lg" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
