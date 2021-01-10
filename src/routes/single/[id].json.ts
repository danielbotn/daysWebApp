export function get(req: any, res: any): void {
	const { id } = req.params;

	const jsonObject = {
		danni: "danni",
		gaur: "gaur",
	};
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(jsonObject));
}
