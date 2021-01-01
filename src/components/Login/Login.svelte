<script lang="ts" context="module">
  import Spinner from "../Svgs/Spinner.svelte";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { goto } from "@sapper/app";
  import type { IError } from '../../interfaces/IFirebase';

  let email: string = "";
  let password: string = "";
  let loginPressed: boolean = false;
  let invalidAuthentication: boolean = true;
  let invalidMessage: string = '';

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
    @apply block border border-gray-200 w-full p-3 rounded mb-4;
  }

  button {
    @apply w-full p-3 mt-4 bg-blue-500 text-white rounded shadow;
  }

  .wrapper {
    @apply flex justify-between pt-8 text-sm border-t border-gray-300;
  }

</style>


<div class="bg-grey-lighter min-h-screen flex flex-col">
  <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Login</h1>
          <label for="Email">Email</label>
          <input 
            type="text"
            name="Email"
            placeholder="Email"
            id="email"
            autocomplete="off"
            bind:value="{email}"
          />
          <label for="Password">Password</label>
          <input 
            type="password"
            name="Password"
            id="password"
            placeholder="Password"
            autocomplete="new-password"
            bind:value="{password}"
          />
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
          <div class="wrapper">
            <a href="/register" class="font-medium text-blue-500">Create account</a>
            <a href="/forgotPassword" class="text-gray-600">Forgot password?</a>
         </div>
      </div>
  </div>
</div>
