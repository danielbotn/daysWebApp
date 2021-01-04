<script lang="ts">
  import Quotes from '../../components/Quotes/Quotes.svelte';
  import firebase from "firebase/app";
  import "firebase/database";
  import { onMount } from 'svelte';
  import { userID } from '../../../store';
  import type { IBoard } from '../../interfaces/IBoard'

  let firebaseUID: string = null;
  let boards: IBoard[] = [];

  userID.subscribe(value => {
    if (value !== null) {
      firebaseUID = value;
    }
  });

  onMount(async () => {
    console.log('dashboard mounted');
    let allBoards = null;
    const rootRef = firebase.database().ref();
    allBoards = rootRef
      .child(`boards/${firebaseUID}`);

    allBoards.on('value', (snap: { val: () => any; }) => {
      const boardsObject = snap.val();
      boards = Object.values(boardsObject);
    });
  });
</script>

<section class="py-12">
  <div class="container mx-auto">
      <Quotes />
      <div class="container my-8 mx-auto px-4 leading-normal">
        <ul class="list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg">
          {#each boards as item}
           <li class="flex items-center mb-3">
              <img class="flex-none w-8 mr-2 rounded" src={item.Avatar} alt="gaur" />
              {item.NameOfList}
           </li> 
          {/each}
        </ul>
     </div>
  </div>
</section>
