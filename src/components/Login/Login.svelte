<script lang="ts">
  import Spinner from "../Svgs/Spinner.svelte";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { goto } from "@sapper/app";
  import { hardcodedStrings } from "../../../store";
  import type { IError } from "../../interfaces/IFirebase";
  import type { IHardcodedStrings } from "../../interfaces/IDatoCms";

  let email: string = "";
  let password: string = "";
  let loginPressed: boolean = false;
  let invalidAuthentication: boolean = true;
  let invalidMessage: string = "";
  let datoHardcodedStrings: IHardcodedStrings = null;

  hardcodedStrings.subscribe((value: IHardcodedStrings) => {
    if (value !== null) {
      datoHardcodedStrings = value;
    }
  });

  const login = () => {
    loginPressed = true;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user.emailVerified) {
          invalidAuthentication = true;
          loginPressed = false;
          goto("/dashboard");
        } else {
          invalidAuthentication = false;
          invalidMessage = "Please verify your email before continue!";
          loginPressed = false;
        }
      })
      .catch((data: IError) => {
        invalidMessage = data.message;
        invalidAuthentication = false;
        loginPressed = false;
      });
  };
</script>

<div class="bg-grey-lighter min-h-screen flex flex-col">
  <div
    class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
  >
    <div class="bg-white px-6 pt-3 rounded shadow-md text-black w-full">
      <h1 class="mb-8 text-3xl text-center">
        {datoHardcodedStrings.loginHeadline}
      </h1>
      <label for="Email">{datoHardcodedStrings.emailPlaceholder}</label>
      <input
        type="text"
        name="Email"
        placeholder="{datoHardcodedStrings.emailPlaceholder}"
        bind:value="{email}"
      />
      <label for="Password">{datoHardcodedStrings.passwordPlaceholder}</label>
      <input
        type="password"
        name="Password"
        placeholder="{datoHardcodedStrings.passwordPlaceholder}"
        bind:value="{password}"
      />
      {#if !invalidAuthentication}
        <p class="text-red-500 text-xs italic">{invalidMessage}</p>
      {/if}
      <button on:click="{login}" id="loginButton">
        {#if loginPressed}
          <Spinner />
        {/if}
        {#if !loginPressed}
          {datoHardcodedStrings.loginButton}
        {/if}
      </button>
      <div class="wrapper">
        <a href="/register" class="font-medium text-blue-500"
          >{datoHardcodedStrings.createAccount}</a
        >
        <a href="/forgotPassword" class="text-gray-600"
          >{datoHardcodedStrings.forgotPassword}</a
        >
      </div>
    </div>
  </div>
</div>

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
