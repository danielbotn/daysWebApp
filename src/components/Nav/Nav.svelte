<script lang="ts">
	import firebase from 'firebase';
   import { goto } from '@sapper/app';
   import { userId } from '../../../store';
	export let segment: string;

	const logout = () : Promise<void> => {
		console.log('you clicked logout');
		return firebase.auth().signOut().then(() => {
            userId.set(null);
            goto('/');
        });
	}
</script>
  
<header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
  <div class="flex-1 flex justify-between items-center">
    <a href="/">
     <img src="daysLogoMini.png" class="h-20 pt-6" />
    </a>
  </div>
  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
     <nav>
        <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
           <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-500" href="/">Home</a></li>
					 <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-500" href="/contact">Contact</a></li>
					 <button class="px-6 py-2 border border-blue-500 text-blue-500 max-w-max shadow-sm hover:shadow-md" on:click="{logout}">Logout</button>
        </ul>
     </nav>
  </div>
  <div class="visible md:invisible">
   <nav>
      <ul class="flex">
         <li><a class="block pr-5" href="/">Home</a></li>
         <li><a class="block" href="/contact">Contact</a></li>
      <ul>
   </nav>
  </div>
</header>