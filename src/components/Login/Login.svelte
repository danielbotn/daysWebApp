<script lang="ts">
  import Spinner from '../Svgs/Spinner.svelte';
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import { goto } from '@sapper/app';
  
  let email: string = '';
  let password: string = '';
  let loginPressed = false;

  const login = () : void => {
    loginPressed = true;
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(() => {
        loginPressed = false;
        goto('/dashboard');
      })
      .catch(() => {
        loginPressed = false;
      })
  };

</script>

<style lang="postcss">
  label {
    @apply block mb-2 text-sm font-medium text-gray-600;
  }

  input {
    @apply block w-full p-3 rounded bg-gray-200 border border-transparent; focus:outline-none;
  }

  button {
    @apply w-full p-3 mt-4 bg-blue-500 text-white rounded shadow;
  }

  .wrapper {
    @apply flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100;
  }

</style>

<div class="container mx-auto p-8 flex">
  <div class="max-w-md w-full mx-auto">
     <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
        <div class="p-8">
           <div class="mb-5">
              <label for="email">Email</label>
              <input type="text" name="email" class="" bind:value="{email}" placeholder="Email" />
           </div>
           <div class="mb-5">
              <label for="password">Password</label>
              <input type="password" name="password" bind:value="{password}" placeholder="Password" />
           </div>
           <button on:click="{login}">
            {#if loginPressed}
              <Spinner />
            {:else}
              Login
            {/if }
           </button>
        </div>
        <div class="wrapper">
           <a href="/" class="font-medium text-blue-500">Create account</a>
           <a href="/" class="text-gray-600">Forgot password?</a>
        </div>
     </div>
  </div>
</div>