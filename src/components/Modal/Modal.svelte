<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { userID, hardcodedStrings } from "../../../store";
  import { createNewList } from "../../helpers/api/firebase";
  import type { IHardcodedStrings } from "../../interfaces/IDatoCms";
  const dispatch = createEventDispatcher();

  let listName: string = "";
  let typeOfList: string = "multiple";
  let firebaseUID: string = null;
  let datoHardcodedStrings: IHardcodedStrings = null;

  userID.subscribe((value) => {
    if (value !== null) {
      firebaseUID = value;
    }
  });

  hardcodedStrings.subscribe((value: IHardcodedStrings) => {
    if (value !== null) {
      datoHardcodedStrings = value;
    }
  });

  const closeModal = () => {
    dispatch("closeModal");
  };

  const createTheList = async () => {
    if (typeOfList && listName && firebaseUID) {
      await createNewList(typeOfList, listName, firebaseUID);
      closeModal();
    }
  };
</script>

<div
  class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
  style="background: rgba(0, 0, 0, 0.7);"
>
  <div
    class="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
  >
    <div class="modal-content py-4 text-left px-6">
      <!--Title-->
      <div class="flex justify-end">
        <div class="modal-close cursor-pointer z-50">
          <svg
            class="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
        </div>
      </div>
      <!--Body-->
      <div class="my-5">
        <h3 class="text-xl text-gray-700 mb-2 font-bold">
          {datoHardcodedStrings.createNewList}
        </h3>
        <input
          type="text"
          name="create new list"
          placeholder="{datoHardcodedStrings.listnamePlaceholder}"
          bind:value="{listName}"
        />
      </div>
      <div class="">
        <h3 class="text-xl text-gray-700 mb-2 font-bold">
          {datoHardcodedStrings.typeOfList}
        </h3>
        <div class="flex rounded-lg text-lg">
          <button
            class="{typeOfList === 'single' ? 'selected' : 'notSelected'}"
            on:click="{() => (typeOfList = 'single')}"
            >{datoHardcodedStrings.single}</button
          >
          <button
            class="{typeOfList === 'multiple' ? 'selected' : 'notSelected'}"
            on:click="{() => (typeOfList = 'multiple')}"
            >{datoHardcodedStrings.multiple}</button
          >
          <button
            class="{typeOfList === 'logger' ? 'selected' : 'notSelected'}"
            on:click="{() => (typeOfList = 'logger')}"
            >{datoHardcodedStrings.logger}</button
          >
        </div>
      </div>
      <!--Footer-->
      <div class="flex justify-end pt-2">
        <button
          type="button"
          class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          on:click="{closeModal}"
        >
          {datoHardcodedStrings.cancel}
        </button>
        <button
          type="button"
          class="border border-blue-500 bg-blue-500 hover:border-blue-300 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline"
          on:click="{createTheList}"
        >
          {datoHardcodedStrings.createList}
        </button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  input {
    @apply block border border-gray-200 w-full p-3 rounded mb-4;
  }

  .selected {
    @apply rounded-r-none hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded cursor-pointer hover:bg-gray-200 bg-blue-500 text-white border duration-200 ease-in-out border-gray-200 transition;
  }

  .notSelected {
    @apply rounded-r-none hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded cursor-pointer hover:bg-gray-200 bg-white text-gray-700 border duration-200 ease-in-out border-gray-200 transition;
  }
</style>
