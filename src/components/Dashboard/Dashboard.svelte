<script lang="ts">
  import Quotes from '../../components/Quotes/Quotes.svelte';
  import Modal from '../../components/Modal/Modal.svelte';
  import firebase from "firebase/app";
  import "firebase/database";
  import { onMount } from 'svelte';
  import { userID } from '../../../store';
  import type { IBoard } from '../../interfaces/IBoard';

  let firebaseUID: string = null;
  let boards: IBoard[] = [];
  let modalOpen: boolean = false;

  userID.subscribe(value => {
    if (value !== null) {
      firebaseUID = value;
    }
  });

  onMount(async () => {
    let allBoards = null;
    const rootRef = firebase.database().ref();
    allBoards = rootRef
      .child(`boards/${firebaseUID}`);

    allBoards.on('value', (snap: { val: () => any; }) => {
      const boardsObject = snap.val();
      boards = Object.values(boardsObject);
      const objectKeys = Object.keys(boardsObject);
      boards.forEach((item, index) => {
        item["KeyId"] = objectKeys[index];
      });
    });
  });

  const add = () => {
    modalOpen = true;
  };

  const closeModal = () => {
    modalOpen = !modalOpen;
  };

  const returnPath = (item: IBoard) => {
    let route = item.TypeOfList;
    return `${route}?id=${item.KeyId}`
  }

</script>

<section class="py-12">
  <div class="container mx-auto">
      <Quotes />
      <div class="container my-8 mx-auto px-4 leading-normal">
        <ul class="list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg">
          {#each boards as item}
           <li class="flex items-center mb-3">
              <img class="flex-none w-8 mr-2 rounded" src={item.Avatar} alt={`Icon related with ${item.NameOfList}`} />
              <a href={returnPath(item)}>{item.NameOfList}</a>
           </li> 
          {/each}
        </ul>
        <div class="flex flex-row-reverse">
          <button
          class="p-0 w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-300 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          on:click={add}
          >
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
              C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
              C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
        </div>
     </div>
  </div>
</section>

{#if modalOpen}
  <Modal on:closeModal={closeModal} />
{/if}
