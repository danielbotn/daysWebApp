import axios from "axios";
import type { ILangFlag, IHardcodedStrings } from "../../interfaces/IDatoCms";

export const getLanguages = async (): Promise<ILangFlag> => {
	try {
		const datoData = await axios({
			method: "post",
			url: "https://graphql.datocms.com/",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${process.env.SAPPER_APP_DATO_CMS_API_KEY}`,
			},
			data: JSON.stringify({
				query: `query
				LangQuery {
					allLanguages {
						language
					}
					languageFlagIcon {
						icelandicFlagLink
						swedishFlagLink
						englishFlagLink
					}
				}
				`,
			}),
		});
		return datoData.data.data;
	} catch (error) {
		return error;
	}
};

export const getHardcodedStrings = async (): Promise<IHardcodedStrings> => {
	try {
		const datoData = await axios({
			method: "post",
			url: "https://graphql.datocms.com/",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${process.env.SAPPER_APP_DATO_CMS_API_KEY}`,
			},
			data: JSON.stringify({
				query: `query HardcodedStringsQuery {
					string {
						cancel(locale: en)
						createList(locale: en)
						createNewList(locale: en)
						logger(locale: en)
						logout(locale: en)
						multiple(locale: en)
						single(locale: en)
						typeOfList(locale: en)
						yourBoards(locale: en)
						loginButton(locale: en)
						loginHeadline(locale: en)
						emailPlaceholder(locale: en)
						forgotPassword(locale: en)
						passwordPlaceholder(locale: en)
						createAccount(locale: en)
						registerTerms(locale: en)
						signupButton(locale: en)
						signupHeadline(locale: en)
						firstnamePlaceholder(locale: en)
						lastnamePlaceholder(locale: en)
						createAccount(locale: en)
						alreadyHaveAccount(locale: en)
						passwordError(locale: en)
						emailError(locale: en)
						lastnameError(locale: en)
						firstnameError(locale: en)
						termsOfService(locale: en)
						and(locale: en)
						privacyPolicy(locale: en)
						listnamePlaceholder(locale: en)
						information(locale: en)
						day(locale: en)
						time(locale: en)
						checkedBy(locale: en)
						email(locale: en)
						save(locale: en)
						add(locale: en)
						addNewItem(locale: en)
						updateField(locale: en)
					}
				}`,
			}),
		});
		return datoData.data.data.string;
	} catch (error) {
		return error;
	}
};

export const changeLangHardcodedStrings = async (lang: string): Promise<IHardcodedStrings> => {
	let newLang = "en";
	if (lang === "English") {
		newLang = "en";
	} else if (lang === "Íslenska") {
		newLang = "is";
	} else {
		newLang = "sv";
	}
	try {
		const datoData = await axios({
			method: "post",
			url: "https://graphql.datocms.com/",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${process.env.SAPPER_APP_DATO_CMS_API_KEY}`,
			},
			data: JSON.stringify({
				query: `query HardcodedStringsQuery {
					string {
						cancel(locale: ${newLang})
						createList(locale: ${newLang})
						createNewList(locale: ${newLang})
						logger(locale: ${newLang})
						logout(locale: ${newLang})
						multiple(locale: ${newLang})
						single(locale: ${newLang})
						typeOfList(locale: ${newLang})
						yourBoards(locale: ${newLang})
						loginButton(locale: ${newLang})
						loginHeadline(locale: ${newLang})
						emailPlaceholder(locale: ${newLang})
						forgotPassword(locale: ${newLang})
						passwordPlaceholder(locale: ${newLang})
						createAccount(locale: ${newLang})
						registerTerms(locale: ${newLang})
						signupButton(locale: ${newLang})
						signupHeadline(locale: ${newLang})
						firstnamePlaceholder(locale: ${newLang})
						lastnamePlaceholder(locale: ${newLang})
						createAccount(locale: ${newLang})
						alreadyHaveAccount(locale: ${newLang})
						passwordError(locale: ${newLang})
						emailError(locale: ${newLang})
						lastnameError(locale: ${newLang})
						firstnameError(locale: ${newLang})
						termsOfService(locale: ${newLang})
						and(locale: ${newLang})
						privacyPolicy(locale: ${newLang})
						listnamePlaceholder(locale: ${newLang})
						information(locale: ${newLang})
						day(locale: ${newLang})
						time(locale: ${newLang})
						checkedBy(locale: ${newLang})
						email(locale: ${newLang})
						save(locale: ${newLang})
						add(locale: ${newLang})
						addNewItem(locale: ${newLang})
						updateField(locale: ${newLang})
					}
				}`,
			}),
		});
		return datoData.data.data.string;
	} catch (error) {
		return error;
	}
};
