<script context="module">
	export async function preload(page, session) {
		const { user } = session;
		if (user) {
			return this.redirect(302, "/dashboard");
		}
		return null;
	}
</script>

<script lang="ts">
	import Login from "../components/Login/Login.svelte";
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Login />