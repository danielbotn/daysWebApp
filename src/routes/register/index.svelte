<script lang="ts">
    import * as EmailValidator from 'email-validator';
    import { registerUserDataBase } from '../../helpers/api/api';
    import firebase from "firebase/app";
    import "firebase/database";
    import Spinner from '../../components/Svgs/Spinner.svelte';
    import SuccessPage from '../../components/SuccessPage/SuccessPage.svelte';

    let regButtonPressed: boolean = false;
    let registerSuccessfull: boolean = false;
    let firstName = '', lastName = '', email = '', password = '';
    let firstNameError = false, lastNameError = false, emailError = false, passwordError = false;
    let firebaseErrorMessage = '';

    const validation = (): boolean =>  {
      let result: boolean = false;
        if (firstName === '') {
            firstNameError = true;
            result = true;
        } else {
            firstNameError = false;
        }
        if (lastName === '') {
            lastNameError = true;
            result = true;
        } else {
            lastNameError = false;
        }
        if (email === '' || !EmailValidator.validate(email)) {
            emailError = true;
            result = true;
        } else {
            emailError = false;
        }
        if (password === '') {
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
        firebaseErrorMessage = '';
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

<style lang="postcss">
    input {
        @apply block border border-gray-200 w-full p-3 rounded mb-4;
    }

    button {
        @apply w-full p-3 mt-4 bg-blue-500 text-white rounded shadow;
    }

</style>

{#if !registerSuccessfull}
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          {#if firstNameError}
            <span class="text-red-500 text-xs italic">Please enter first name</span>
            {/if}
          <input 
            type="text"
            name="fullname"
            placeholder="First Name"
            bind:value="{firstName}"
          />
          {#if lastNameError}
            <span class="text-red-500 text-xs italic">Please enter last name</span>
            {/if}
          <input 
            type="text"
            name="fullname"
            placeholder="Last Name"
            bind:value="{lastName}"
          />
          {#if emailError}
            <span class="text-red-500 text-xs italic">Please enter valid email</span>
          {/if}
          <input 
            type="text"
            name="Email"
            placeholder="Email"
            id="email"
            autocomplete="off"
            bind:value="{email}"
          />
          {#if passwordError}
            <span class="text-red-500 text-xs italic">Please enter valid password</span>
          {/if}
          <input 
            type="password"
            name="Password"
            id="password"
            placeholder="Password"
            autocomplete="new-password"
            bind:value="{password}"
          />
          {#if firebaseErrorMessage !== ''}
            <span class="text-red-500 text-xs italic">{firebaseErrorMessage}</span>
          {/if}
          <button on:click="{register}">
            {#if regButtonPressed}
              <Spinner />
            {:else}
              Create Account
            {/if }
            </button>

          <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the 
              <a class="no-underline border-b border-grey-dark text-grey-dark" href="http://stale-acoustics.surge.sh/privacy-policy/">
                  Terms of Service
              </a> and 
              <a class="no-underline border-b border-grey-dark text-grey-dark" href="http://stale-acoustics.surge.sh/privacy-policy/">
                  Privacy Policy
              </a>
          </div>
      </div>
      <div class="text-center text-sm text-blue-500 mt-4">
        Already have an account? 
        <a class="no-underline border-b border-grey-dark text-blue-500" href="/">
            Log in
        </a>
      </div>
    </div>
  </div>
{/if}

{#if registerSuccessfull }
  <SuccessPage email={email} />
{/if}
