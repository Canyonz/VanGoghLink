import { AppLogo } from "@/shared/ui/appLogo/AppLogo";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import { LinkUI } from "@/shared/ui/linkUI/LinkUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import cls from "classnames";
import { adressList, cardList, contactsList, linksList, servicesList } from "../consts/footerConst";
import styles from "./Footer.module.sass";

export const Footer = ({ className }) => {
	return (
		// <footer className={cls(styles.footer, className)}>
		// 	<div className={styles.firstBlock}>
		// 		<AppLogo color="secondary" size="lg" />
		// 		<div className={styles.captcha}>
		// 			<TextUI text="Этот сайт защищен от спама службой reCAPTCHA Google. " color="minor" size="sm" fontWeight="lighter" />
		// 			<LinkUI color="minor" decoration="underline" fontWeight="lighter">
		// 				Политика конфиденциальности
		// 			</LinkUI>
		// 			<TextUI text="/" color="minor" fontWeight="lighter" />
		// 			<LinkUI color="minor" decoration="underline" fontWeight="lighter">
		// 				Условия предоставления услуг
		// 			</LinkUI>
		// 		</div>
		// 	</div>
		// 	<div className={styles.secondBlock}>
		// 		<div className={styles.adressWrapper}>
		// 			<TextUI text="Адрес" fontWeight="bold" color="secondary" />
		// 			<div className={styles.adress}>
		// 				{adressList.map((address, index) => (
		// 					<TextUI key={index} text={address} color="third" fontWeight="lighter" size="sm" />
		// 				))}
		// 			</div>
		// 		</div>
		// 		<div className={styles.contactsWrapper}>
		// 			<TextUI text="Контакты" fontWeight="bold" color="secondary" />
		// 			<div className={styles.contacts}>
		// 				{contactsList.map((contact, index) => {
		// 					const typeTo = {
		// 						email: "mailto:",
		// 						tel: "tel:",
		// 					}[contact.type];

		// 					return (
		// 						<div key={index}>
		// 							<TextUI text={`${contact.name}: `} color="third" fontWeight="lighter" size="sm" />
		// 							<LinkUI href={`${typeTo}${contact.value}`} color="third" fontWeight="lighter">
		// 								{contact.value}
		// 							</LinkUI>
		// 						</div>
		// 					);
		// 				})}
		// 			</div>
		// 		</div>
		// 	</div>

		// 	<div className={styles.thirdBlock}>
		// 		<TextUI text="Услуги" fontWeight="bold" color="secondary" />
		// 		<div className={styles.services}>
		// 			{servicesList.map((service, index) => (
		// 				<LinkUI key={index} color="third" fontWeight="lighter">
		// 					{service.name}
		// 				</LinkUI>
		// 			))}
		// 		</div>
		// 	</div>

		// 	<div className={styles.fourthBlock}>
		// 		<div className={styles.links}>
		// 			<LinkUI color="minor" fontWeight="lighter" textAlign="right">
		// 				Публичная оферта
		// 			</LinkUI>
		// 			<LinkUI color="minor" fontWeight="lighter" textAlign="right">
		// 				Политика персональных данных
		// 			</LinkUI>
		// 		</div>

		// 		<div className={styles.cards}>
		// 			{cardList.map((card, index) => (
		// 				<IconUI key={index} Svg={card.svg} height={card.height} width={card.width} />
		// 			))}
		// 		</div>
		// 	</div>
		// </footer>
		<footer className={cls(styles.footer, className)}>
			<div className={styles.logo}>
				<AppLogo color="secondary" size="lg" />
			</div>

			<div className={styles.captcha}>
				<TextUI text="Этот сайт защищен от спама службой reCAPTCHA Google. " color="minor" size="sm" fontWeight="lighter" />
				<LinkUI color="minor" decoration="underline" fontWeight="lighter">
					Политика конфиденциальности
				</LinkUI>
				<TextUI text="/" color="minor" fontWeight="lighter" />
				<LinkUI color="minor" decoration="underline" fontWeight="lighter">
					Условия предоставления услуг
				</LinkUI>
			</div>

			<div className={styles.adressWrapper}>
				<TextUI text="Адрес" fontWeight="bold" color="secondary" />
				<div className={styles.adress}>
					{adressList.map((address, index) => (
						<TextUI key={index} text={address} size="sm" color="third" fontWeight="lighter" />
					))}
				</div>
			</div>

			<div className={styles.contactsWrapper}>
				<TextUI text="Контакты" fontWeight="bold" color="secondary" />
				<div className={styles.contacts}>
					{contactsList.map((contact, index) => {
						const typeTo = {
							email: "mailto:",
							tel: "tel:",
						}[contact.type];

						return (
							<div key={index}>
								<TextUI text={`${contact.name}: `} size="sm" color="third" fontWeight="lighter" />
								<LinkUI href={`${typeTo}${contact.value}`} color="third" size="sm" fontWeight="lighter">
									{contact.value}
								</LinkUI>
							</div>
						);
					})}
				</div>
			</div>

			<div className={styles.servicesWrapper}>
				<TextUI text="Услуги" fontWeight="bold" color="secondary" />
				<div className={styles.services}>
					{servicesList.map((service, index) => (
						<LinkUI key={index} color="third" size="sm" fontWeight="lighter">
							{service.name}
						</LinkUI>
					))}
				</div>
			</div>

			<div className={styles.links}>
				{linksList.map((link, index) => (
					<LinkUI key={index} color="minor" size="sm" fontWeight="lighter" textAlign="right" className={styles.link}>
						{link.text}
					</LinkUI>
				))}
			</div>

			<div className={styles.cards}>
				{cardList.map((card, index) => (
					<IconUI key={index} Svg={card.svg} height={card.height} width={card.width} />
				))}
			</div>
		</footer>
	);
};
