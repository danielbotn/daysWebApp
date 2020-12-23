<script context="module">
	export async function preload(page, session) {
		let { user } = session;
		if (!user) {
		    return this.redirect(302, '/');
		}
	}
</script>
<svelte:head>
	<title>Dahsboard</title>
</svelte:head>

<h1>Dashboard</h1>
<p>TODO...</p>