<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { userID, hardcodedStrings } from "../../../store";
  import {
    deleteMultiBoardData,
    addMultiBoardData,
  } from "../../helpers/api/firebase";
  import type { IHardcodedStrings } from "../../interfaces/IDatoCms";
  import type { IFireName, IFireMultiDay } from "../../interfaces/IFirebase";
  import type { ISelectedToggle } from "../../interfaces/IOther";
  const dispatch = createEventDispatcher();

  let firebaseUID: string = null;
  let datoHardcodedStrings: IHardcodedStrings = null;
  let selectedToggle: ISelectedToggle[] = [];

  export let fields: IFireName[] = [];
  export let boardName: string;
  export let boardData: IFireMultiDay[] = [];
  export let selectedDay: string = "";
  export let listId: string;

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
    selectedToggle = [];
    dispatch("closeModal");
  };

  const dedupe = (arr: ISelectedToggle[]) => {
    const rv = arr.reverse();
    return rv.reduce(
      function (p, c) {
        // create an identifying id from the object values
        var id = [c.keyId].join("|");
        // if the id is not found in the temp array
        // add the object to the output array
        // and add the key to the temp array
        if (p.temp.indexOf(id) === -1) {
          p.out.push(c);
          p.temp.push(id);
        }
        return p;
        // return the deduped array
      },
      {
        temp: [],
        out: [],
      }
    ).out;
  };

  const update = async () => {
    const removeDuplicates: ISelectedToggle[] = dedupe(selectedToggle);
    selectedToggle = removeDuplicates;
    selectedToggle.forEach((item: ISelectedToggle) => {
      if (item.toogle) {
        // Add to database
        addMultiBoardData(item, firebaseUID, listId, boardName);
      } else {
        // Remove from database
        deleteMultiBoardData(item, firebaseUID, listId);
      }
    });
    closeModal();
  };

  const fieldChecked = (field: IFireName) => {
    let result: boolean = false;
    for (const data of boardData) {
      if (data.Day === selectedDay && field.KeyId === data.FieldId) {
        result = true;
        break;
      }
    }
    return result;
  };
  const toggleCheckbox = (field: IFireName, e: any) => {
    selectedToggle.push({
      name: field.Name,
      keyId: field.KeyId,
      selectedDay,
      toogle: e.checked,
      timeStamp: new Date(),
      index: selectedToggle.length,
    });
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
        <div class="modal-close cursor-pointer z-50" on:click="{closeModal}">
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
          {boardName}
        </h3>

        <fieldset>
          <legend class="text-base font-medium text-gray-900">
            {datoHardcodedStrings.day}: {selectedDay}</legend
          >
          <div class="mt-4 space-y-4">
            {#each fields as field}
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="{field.Name}"
                    name="{field.Name}"
                    type="checkbox"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    checked="{fieldChecked(field)}"
                    on:change="{(e) => toggleCheckbox(field, e.target)}"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class="font-medium text-gray-700"
                    >{field.Name}</label
                  >
                </div>
              </div>
            {/each}
          </div>
        </fieldset>
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
          on:click="{update}"
        >
          {datoHardcodedStrings.save}
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
</style>
