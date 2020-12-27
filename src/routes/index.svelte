<script context="module">
		export async function preload(page, session) {
			let { user } = session;
			if (user) {
					return this.redirect(302, '/dashboard');
			}
		}
</script>

<script lang="ts">
	import Login from '../components/Login/Login.svelte';
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Login />