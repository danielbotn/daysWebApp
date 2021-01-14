import axios from "axios";
import type { ILangFlag } from "../../interfaces/IDatoCms";

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
				query: `query MyQuery {
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
