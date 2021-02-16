export const formatAMPM = (date: Date): string => {
	let hours = date.getHours();
	let minutes: string | number = date.getMinutes();
	const ampm = hours >= 12 ? "pm" : "am";
	hours %= 12;
	hours = hours || 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	const strTime = `${hours}:${minutes} ${ampm}`;
	return strTime;
};

export const currentDate = (): string => {
	let today: Date | string = new Date();
	let dd: number | string = today.getDate();

	let mm: number | string = today.getMonth() + 1;
	const yyyy = today.getFullYear();
	if (dd < 10) {
		dd = `0${dd}`;
	}

	if (mm < 10) {
		mm = `0${mm}`;
	}
	today = `${mm}-${dd}-${yyyy}`;
	return today;
};