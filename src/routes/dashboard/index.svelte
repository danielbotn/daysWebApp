<script context="module">
	let userIsLoggedIn = false;
	export async function preload(page, session) {
		let { user } = session;
		if (!user && user !== "false") {
				userIsLoggedIn = false;
		    return this.redirect(302, '/');
		}
		if (user === true) {
			userIsLoggedIn = true;
		}
	}
</script>
<svelte:head>
	<title>Dahsboard</title>
</svelte:head>

{#if userIsLoggedIn}
	<h1>Dashboard</h1>
	<p>TODO...</p>
{/if}