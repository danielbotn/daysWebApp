<script lang="ts">
	import firebase from 'firebase';
   import { goto } from '@sapper/app';
   import { userToken } from '../../../store';

   let isLoggedIn = null;
   userToken.subscribe(value => {
      isLoggedIn = value;
   });

	const logout = async (): Promise<void> => {
		await firebase.auth().signOut();
      userToken.set(null);
      goto('/');
   }
</script>
  
<header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
  <div class="flex-1 flex justify-between items-center">
    <a href="/">
     <img alt="logo" src="daysLogoMini.png" class="h-20 pt-6" />
    </a>
  </div>
  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
     <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            {#if isLoggedIn}
               <button 
                  class="px-6 py-2 border border-blue-500 text-blue-500 max-w-max shadow-sm hover:shadow-md" 
                  on:click="{logout}">
                  Logout
               </button>
            {/if}
        </ul>
        <div style="visibility: hidden; position: absolute">
         <a href="/dashboard">...</a>
       </div>
     </nav>
  </div>
  <div class="visible lg:invisible">
   <nav>
      <ul class="flex">
         {#if isLoggedIn}
            <button 
              class="px-6 py-2 border border-blue-500 text-blue-500 max-w-max shadow-sm hover:shadow-md" 
              on:click="{logout}">
              Logout
            </button>
         {/if}
      </ul>
      <div style="visibility: hidden; position: absolute">
         <a href="/dashboard">...</a>
       </div>
   </nav>
  </div>
</header>