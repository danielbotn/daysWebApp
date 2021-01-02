import firebase from "firebase/app";
import "firebase/database";
import { format } from "date-fns";

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
