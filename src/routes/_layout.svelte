<script lang="ts">
	import Nav from '../components/Nav/Nav.svelte';
	import { onMount } from 'svelte';
	import firebase from 'firebase';
	import { stores } from '@sapper/app';
	const { session } = stores();
    import Cookies from 'js-cookie';
    import { userId } from '../../store';

	    onMount(async () => {
        firebase.auth().onIdTokenChanged(async (user) => {
            try {
                if (!user) {
                    Cookies.set('token', false);
                    $session.user = false;
                    userId.set(null);
                    return;
                }
                const token = await user.getIdToken();
                userId.set(token);
                $session.user = token;
                Cookies.set('token', token);
                // refreshes token every 55 minutes to also sync with server-side. 
                window.timeoutId = setTimeout(() => {
                    const user = firebase.auth().currentUser;
                    if (user) {
                        return firebase.auth().currentUser.getIdToken(true);
                    }
                }, 1000 * 60 * 55);
            } catch (e) {
                Cookies.set('token', false);
                $session.user = false;
                return;
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