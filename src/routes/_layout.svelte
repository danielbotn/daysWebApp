<script context="module">
  import { getHardcodedStrings } from "../helpers/api/datoCms";
  import { hardcodedStrings } from "../../store";

  export async function preload() {
    try {
      const ghs = await getHardcodedStrings();
      hardcodedStrings.set(ghs);
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
  import { userToken, userID, displayName } from "../../store";

  import Nav from "../components/Nav/Nav.svelte";

  onMount(async () => {
    firebase.auth().onIdTokenChanged(async (user) => {
      try {
        if (!user || !user.emailVerified) {
          Cookies.set("token", false);
          $session.user = false;
          userToken.set(null);
          userID.set(null);
          displayName.set(null);
          return;
        }
        const token = await user.getIdToken();
        userToken.set(token);
        userID.set(user.uid);
        displayName.set(user.email);
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

<Nav />

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
