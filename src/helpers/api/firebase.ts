/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
import firebase from "firebase/app";
import "firebase/database";
import { format } from "date-fns";
import type {
	IFireLanguage,
	IFireNameObject,
	IFireTotalLists,
	IFireUserInfo,
} from "../../interfaces/IFirebase";

const createBoardsList = (joined: string, UserId: string): void => {
	const rand = Math.floor(Math.random() * 200) + 1;
	const db = firebase.database();
	const ListCreated = joined;
	const NameOfList = "Your First List";
	db.ref(`/boards/${UserId}`).push({
		ListCreated,
		UserId,
		NameOfList,
		Avatar: `https://picsum.photos/id/${rand}/200/300`,
		TypeOfList: "multiple",
		WriteAccess: true,
		ReadAccess: true,
	});
};

const createListCounter = (UserId: string): void => {
	const db = firebase.database();
	db.ref(`/listCounter/${UserId}`).set({
		TotalLists: 1,
	});
};

const createUserMemberCounter = (UserId: string): void => {
	const db = firebase.database();
	db.ref(`/memberCounter/${UserId}`).set({
		TotalMembers: 0,
	});
};

/* MemberPlan should bee free when in app purchases is ready */
const createMemberPlan = (UserId: string): void => {
	const db = firebase.database();
	db.ref(`/memberPlan/${UserId}`).set({
		MemberPlan: "Premium",
	});
};

const createLanguage = (UserId: string): void => {
	const db = firebase.database();
	db.ref(`/language/${UserId}`).set({
		Language: "English",
	});
};

export const registerUserDataBase = (
	FirstName: string,
	LastName: string,
	Email: string,
	UserId: string,
): void => {
	const db = firebase.database();
	const Joined = format(new Date(), "yyyy-mm-dd");
	db.ref(`/users/${UserId}/`).set({
		FirstName,
		LastName,
		Email,
		UserId,
		Joined,
	});
	createBoardsList(Joined, UserId);
	createUserMemberCounter(UserId);
	createListCounter(UserId);
	createMemberPlan(UserId);
	createLanguage(UserId);
};

const getTotalListCounter = (userId: string): Promise<IFireTotalLists> => {
	const listCounterPromise: Promise<IFireTotalLists> = new Promise(
		(resolve, reject) => {
			const db = firebase.database();
			const lc = db.ref(`/listCounter/${userId}`);
			lc.once("value").then((snapshot) => {
				const listCounter = snapshot.val();
				if (listCounter) {
					resolve(listCounter);
				} else {
					reject(listCounter);
				}
			});
		},
	);
	return listCounterPromise;
};

const updateListCounter = (total: number, userId: string): void => {
	const db = firebase.database();
	db.ref(`/listCounter/${userId}`).update({
		TotalLists: total,
	});
};

export const createNewList = async (
	typeOfList: string,
	listName: string,
	userId: string,
): Promise<unknown> => {
	const listCounter = await getTotalListCounter(userId);
	const listCounterPlusOne: number = listCounter.TotalLists + 1;
	updateListCounter(listCounterPlusOne, userId);
	const rand = Math.floor(Math.random() * 200) + 1;
	const db = firebase.database();
	return db.ref(`/boards/${userId}`).push({
		ListCreated: format(new Date(), "yyyy-mm-dd"),
		UserId: userId,
		NameOfList: listName,
		Avatar: `https://picsum.photos/id/${rand}/200/300`,
		TypeOfList: typeOfList,
		WriteAccess: true,
		ReadAccess: true,
	});
};

export const getLanguage = (userId: string): Promise<IFireLanguage> => {
	const langPromise: Promise<IFireLanguage> = new Promise((resolve, reject) => {
		const db = firebase.database();
		const lc = db.ref(`/language/${userId}`);
		lc.once("value").then((snapshot) => {
			const langValue = snapshot.val();
			if (langValue) {
				resolve(langValue);
			} else {
				reject(langValue);
			}
		});
	});
	return langPromise;
};

export const updateFirebaseLanguage = (
	userId: string,
	lang: string,
): Promise<IFireLanguage> => {
	const db = firebase.database();
	return db.ref(`/language/${userId}`).update({
		Language: lang,
	});
};

export const getNameOfUserThatChecked = (
	userId: string,
): Promise<IFireNameObject> => {
	const fPromise: Promise<IFireNameObject> = new Promise((resolve, reject) => {
		const db = firebase.database();
		const query = db.ref(`/users/${userId}`);
		query.once("value").then((snapshot) => {
			const username = snapshot.val() || "Anonymous";
			if (username !== "Anonymous") {
				const tmp = {
					firstName: username.FirstName,
					lastName: username.LastName,
				};
				resolve(tmp);
			} else {
				const err = "Error";
				reject(err);
			}
		});
	});
	return fPromise;
};

export const setBoardData = (
	userId: string,
	listId: string,
	day: string,
	nameObject: IFireNameObject,
	email: string,
	time: string,
): void => {
	const db = firebase.database();
	db.ref(`/boardsData/${userId}/${listId}`).push({
		Day: day,
		DayTrueOrFalse: true,
		UserId: userId,
		ListId: listId,
		EmailWhoChecked: email,
		FirstNameWhoChecked: nameObject.firstName,
		LastNameWhoChecked: nameObject.lastName,
		Time: time,
	});
};

export const deleteBoardItem = (
	userId: string,
	listId: string,
	boardId: string,
): void => {
	const db = firebase.database();
	db.ref(`/boardsData/${userId}/${listId}/${boardId}`).remove();
};

export const getUserInfo = (userId: string): Promise<IFireUserInfo> => {
	const userInfoPromise: Promise<IFireUserInfo> = new Promise(
		(resolve, reject) => {
			const db = firebase.database();
			const lc = db.ref(`/users/${userId}`);
			lc.once("value").then((snapshot) => {
				const userInfo = snapshot.val();
				if (userInfo) {
					resolve(userInfo);
				} else {
					reject(userInfo);
				}
			});
		},
	);
	return userInfoPromise;
};
