import MirSVG from "@/shared/assets/icons/mir.svg";
import VisaSVG from "@/shared/assets/icons/visa.svg";
import MastercardSVG from "@/shared/assets/icons/mastercard.svg";

export const adressList = ["Текст, Текст, Текст"];
export const contactsList = [
	{
		name: "Email",
		type: "email",
		value: "urban.dwelling@yandex.com",
	},
	{
		name: "Телефон",
		type: "tel",
		value: "8 (999) 999-99-99",
	},
];
export const servicesList = [
	{
		name: "Каталог",
		link: "",
	},
	{
		name: "О компании",
		link: "",
	},
	{
		name: "Контакты",
		link: "",
	},
	{
		name: "Доставка и оплата",
		link: "",
	},
	{
		name: "Гарантия и возврат",
		link: "",
	},
];
export const cardList = [
	{
		svg: MirSVG,
		width: 46,
		height: 13,
	},
	{
		svg: VisaSVG,
		width: 45,
		height: 14,
	},
	{
		svg: MastercardSVG,
		width: 48,
		height: 29,
	},
];

export const linksList = [
	{
		text: "Публичная оферта",
		link: "",
	},
	{
		text: "Политика персональных данных",
		link: "",
	},
];
