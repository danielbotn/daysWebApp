<script lang="ts">
  import { validate } from "email-validator";
  import { registerUserDataBase } from "../../helpers/api/firebase";
  import firebase from "firebase/app";
  import "firebase/database";
  import Spinner from "../../components/Svgs/Spinner.svelte";
  import SuccessPage from "../../components/SuccessPage/SuccessPage.svelte";
  import { hardcodedStrings } from "../../../store";
  import type { IHardcodedStrings } from "../../interfaces/IDatoCms";

  let regButtonPressed: boolean = false;
  let registerSuccessfull: boolean = false;
  let firstName = "",
    lastName = "",
    email = "",
    password = "";
  let firstNameError = false,
    lastNameError = false,
    emailError = false,
    passwordError = false;
  let firebaseErrorMessage = "";
  let datoHardcodedStrings: IHardcodedStrings = null;

  hardcodedStrings.subscribe((value: IHardcodedStrings) => {
    if (value !== null) {
      datoHardcodedStrings = value;
    }
  });

  const validation = (): boolean => {
    let result: boolean = false;
    if (firstName === "") {
      firstNameError = true;
      result = true;
    } else {
      firstNameError = false;
    }
    if (lastName === "") {
      lastNameError = true;
      result = true;
    } else {
      lastNameError = false;
    }
    if (email === "" || !validate(email)) {
      emailError = true;
      result = true;
    } else {
      emailError = false;
    }
    if (password === "") {
      passwordError = true;
      result = true;
    } else {
      passwordError = false;
    }
    return result;
  };

  const sendToFirebase = async () => {
    try {
      const a = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      a.user.sendEmailVerification();
      registerUserDataBase(firstName, lastName, a.user.email, a.user.uid);
      registerSuccessfull = true;
      firebaseErrorMessage = "";
    } catch (err) {
      firebaseErrorMessage = err.message;
    }
  };

  const register = () => {
    regButtonPressed = true;
    if (validation()) {
      regButtonPressed = false;
    } else {
      // No validation Error
      regButtonPressed = false;
      sendToFirebase();
    }
  };
</script>

{#if !registerSuccessfull}
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">
          {datoHardcodedStrings.signupHeadline}
        </h1>
        {#if firstNameError}
          <span class="text-red-500 text-xs italic"
            >{datoHardcodedStrings.firstnameError}</span
          >
        {/if}
        <input
          type="text"
          name="fullname"
          placeholder="{datoHardcodedStrings.firstnamePlaceholder}"
          bind:value="{firstName}"
        />
        {#if lastNameError}
          <span class="text-red-500 text-xs italic"
            >{datoHardcodedStrings.lastnameError}</span
          >
        {/if}
        <input
          type="text"
          name="fullname"
          placeholder="{datoHardcodedStrings.lastnamePlaceholder}"
          bind:value="{lastName}"
        />
        {#if emailError}
          <span class="text-red-500 text-xs italic"
            >{datoHardcodedStrings.emailError}</span
          >
        {/if}
        <input
          type="text"
          name="Email"
          placeholder="{datoHardcodedStrings.emailPlaceholder}"
          id="email"
          autocomplete="off"
          bind:value="{email}"
        />
        {#if passwordError}
          <span class="text-red-500 text-xs italic"
            >{datoHardcodedStrings.passwordError}</span
          >
        {/if}
        <input
          type="password"
          name="Password"
          id="password"
          placeholder="{datoHardcodedStrings.passwordPlaceholder}"
          autocomplete="new-password"
          bind:value="{password}"
        />
        {#if firebaseErrorMessage !== ""}
          <span class="text-red-500 text-xs italic">{firebaseErrorMessage}</span
          >
        {/if}
        <button on:click="{register}">
          {#if regButtonPressed}
            <Spinner />
          {:else}
            {datoHardcodedStrings.createAccount}
          {/if}
        </button>

        <div class="text-center text-sm text-grey-dark mt-4">
          {datoHardcodedStrings.registerTerms}
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="http://stale-acoustics.surge.sh/privacy-policy/"
          >
            {datoHardcodedStrings.termsOfService}
          </a>
          {datoHardcodedStrings.and}
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="http://stale-acoustics.surge.sh/privacy-policy/"
          >
            {datoHardcodedStrings.privacyPolicy}
          </a>
        </div>
      </div>
      <div class="text-center text-sm text-blue-500 mt-4">
        {datoHardcodedStrings.alreadyHaveAccount}
        <a
          class="no-underline border-b border-grey-dark text-blue-500"
          href="/"
        >
          {datoHardcodedStrings.loginButton}
        </a>
      </div>
    </div>
  </div>
{/if}

{#if registerSuccessfull}
  <SuccessPage email="{email}" />
{/if}

<style lang="postcss">
  input {
    @apply block border border-gray-200 w-full p-3 rounded mb-4;
  }

  button {
    @apply w-full p-3 mt-4 bg-blue-500 text-white rounded shadow;
  }
</style>
