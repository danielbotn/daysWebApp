<script lang="ts">
    import * as EmailValidator from 'email-validator';
    import Spinner from '../../components/Svgs/Spinner.svelte';

    let loginPressed : boolean = false;
    let firstName = '', lastName = '', email = '', password = '';
    let firstNameError = false, lastNameError = false, emailError = false, passwordError = false;

    const validation = () => {
        if (firstName === '') {
            firstNameError = true;
        } else {
            firstNameError = false;
        }
        if (lastName === '') {
            lastNameError = true;
        } else {
            lastNameError = false;
        }
        if (email === '' || !EmailValidator.validate(email)) {
            emailError = true;
        } else {
            emailError = false;
        }
        if (password === '') {
            passwordError = true;
        } else {
            passwordError = false;
        }
    };
    const register = () => {
        console.log('you just clicked the register button');
        validation();
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
          <button type="submit" on:click={register}>Create Account</button>

          <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the 
              <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                  Terms of Service
              </a> and 
              <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
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