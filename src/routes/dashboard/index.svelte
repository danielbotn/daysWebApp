<script context="module" lang="ts">
	import { userId } from '../../../store';
	import type { ISession, IPage } from '../../interfaces/IConfig';
	export async function preload(_page: IPage, session: ISession) {
		let { user } = session;
		if (!user && user !== "false") {
		    return this.redirect(302, '/');
		}
	}
</script>

<script lang="ts">
	let userIsLoggedIn : boolean = false;
	userId.subscribe(value => {
		if (value !== null) {
			userIsLoggedIn = true;
		}
	}); // logs '0'
</script>
<svelte:head>
	<title>Dahsboard</title>
</svelte:head>

{#if userIsLoggedIn}
	<h1>Dashboard</h1>
	<p>TODO...</p>
{/if}