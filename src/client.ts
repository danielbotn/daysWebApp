import * as sapper from '@sapper/app';
import firebase from 'firebase/app';
var firebaseConfig = {
	apiKey: process.env.SAPPER_APP_API_KEY,
	authDomain: process.env.SAPPER_APP_AUTH_DOMAIN,
	databaseURL: process.env.SAPPER_APP_DATABASE_URL,
	projectId: process.env.SAPPER_APP_PROJECT_ID,
	storageBucket: process.env.SAPPER_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.SAPPER_APP_MESSAGING_SENDER_ID,
	appId: process.env.SAPPER_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

sapper.start({
	target: document.querySelector('#sapper')
});