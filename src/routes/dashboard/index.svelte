<script context="module" lang="ts">
	import { userToken } from '../../../store';
	import type { ISession, IPage } from '../../interfaces/IConfig';
	export async function preload(_page: IPage, session: ISession) {
		let { user } = session;
		if (!user && user !== "false") {
		    return this.redirect(302, '/');
		}
	}
</script>

<script lang="ts">
	import Dashboard from "../../components/Dashboard/Dashboard.svelte";

	let userIsLoggedIn : boolean = false;
	userToken.subscribe(value => {
		if (value !== null) {
			userIsLoggedIn = true;
		}
	}); // logs '0'
</script>
<svelte:head>
	<title>Dahsboard</title>
</svelte:head>

{#if userIsLoggedIn}
	<Dashboard />
{/if}