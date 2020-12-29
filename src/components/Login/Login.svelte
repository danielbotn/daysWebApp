<script lang="ts">
  import Spinner from "../Svgs/Spinner.svelte";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { goto } from "@sapper/app";
  import type { IError } from '../../interfaces/IFirebase';

  let email: string = "";
  let password: string = "";
  let loginPressed : boolean = false;
  let invalidAuthentication : boolean = true;
  let invalidMessage : string = '';

  const login = (): void => {
    loginPressed = true;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        invalidAuthentication = true;
        loginPressed = false;
        goto("/dashboard");
      })
      .catch((data: IError) => {
        invalidMessage = data.message;
        invalidAuthentication = false;
        loginPressed = false;
      });
  };

</script>

<style lang="postcss">
  label {
    @apply block mb-2 text-sm font-medium text-gray-600;
  }

  input {
    @apply block w-full p-3 rounded border border-gray-200; focus:outline-none;
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
              <label for="LoginEmail">Email</label>
              <input 
                type="text" 
                name="LoginEmail" 
                bind:value="{email}" 
                placeholder="Email" 
                autocomplete="new-password" 
                id="LoginEmail" 
              />
           </div>
           <div class="mb-5">
              <label for="LoginPassword">Password</label>
              <input 
                type="password" 
                name="LoginPassword" 
                bind:value="{password}" 
                placeholder="Password" 
                autocomplete="new-password" 
                id="LoginPassword" 
              />
           </div>
           {#if !invalidAuthentication}
            <p class="text-red-500 text-xs italic">{invalidMessage}</p>
           {/if}
           <button on:click="{login}">
            {#if loginPressed}
              <Spinner />
            {:else}
              Login
            {/if }
           </button>
        </div>
        <div class="wrapper">
           <a href="/register" class="font-medium text-blue-500">Create account</a>
           <a href="/forgotPassword" class="text-gray-600">Forgot password?</a>
        </div>
     </div>
  </div>
</div>