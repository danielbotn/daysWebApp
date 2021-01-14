<script context="module">
	import axios from 'axios';
	import { hardcodedStrings } from "../../store";
	export async function preload() {
		try {
			const bookings = await axios({
				method: 'post',
				url: `https://graphql.datocms.com/`,
				headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						Authorization: `Bearer ${process.env.SAPPER_APP_DATO_CMS_API_KEY}`
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
						}
					}
					`
				})
			});
			const hcs = bookings.data.data.string;
			hardcodedStrings.set(hcs);
			return bookings;
		} catch (error) {
			return error.response;
		}
  }
</script>
<script lang="ts">
	import firebase from "firebase";
	import Cookies from "js-cookie";

	import { onMount } from "svelte";
	import { stores } from "@sapper/app";

	const { session } = stores();
	import { userToken, userID } from "../../store";
	
	import Nav from "../components/Nav/Nav.svelte";

	onMount(async () => {
		firebase.auth().onIdTokenChanged(async (user) => {
			try {
				if (!user || !user.emailVerified) {
					Cookies.set("token", false);
					$session.user = false;
					userToken.set(null);
					userID.set(null);
					return;
				}
				const token = await user.getIdToken();
				userToken.set(token);
				userID.set(user.uid);
				$session.user = token;
				Cookies.set("token", token);
				// refreshes token every 55 minutes to also sync with server-side.
				window.timeoutId = setTimeout(() => {
					const fUser = firebase.auth().currentUser;
					if (fUser) {
						return firebase.auth().currentUser.getIdToken(true);
					}
					return null;
				}, 1000 * 60 * 55);
			} catch (e) {
				Cookies.set("token", false);
				$session.user = false;
			}
		});
	});
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>