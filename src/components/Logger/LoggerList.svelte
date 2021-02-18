<script lang="ts">
  import LoggerEditModal from "../Logger/LoggerEditModal.svelte";
  import firebase from "firebase/app";
  import "firebase/database";
  import { onMount } from "svelte";
  import {
    checkIfExists,
    removeLoggerData,
    addLoggerData,
    removeLoggerField,
  } from "../../helpers/api/firebase";
  import type {
    IFireName,
    IFireMultiDay,
    IFireNameObject,
  } from "../../interfaces/IFirebase";

  export let userId: string;
  export let listId: string;
  export let boardName: string;
  export let userDisplayName: string;

  let items: IFireName[] = [];
  let itemData: IFireMultiDay[] = [];
  let editModalOpen: boolean = false;
  let currentObject: IFireName = null;

  onMount(async () => {
    let logger = null;
    let loggerData = null;
    let tmpData: IFireMultiDay[] = [];
    const rootRef = firebase.database().ref();
    logger = rootRef.child(`logger/${userId}/${listId}`);
    loggerData = rootRef.child(`loggerData/${userId}/${listId}`);

    logger.on("value", (snap: { val: () => any }) => {
      const loggerObject = snap.val();
      if (loggerObject) {
        const data: IFireName[] = Object.values(loggerObject);
        const objectKeys = Object.keys(loggerObject);
        data.forEach((item, index) => {
          item["KeyId"] = objectKeys[index];
        });
        items = data;
      } else {
        items = [];
      }
    });
    loggerData.on("value", (snap: { val: () => any }) => {
      const loggerObject = snap.val();
      if (loggerObject) {
        const data: IFireName[] = Object.values(loggerObject);
        const objectKeys = Object.keys(loggerObject);
        data.forEach((item, index) => {
          item["KeyId"] = objectKeys[index];
          tmpData.push(Object.values(item)[0]);
        });
        itemData = tmpData;
      } else {
        itemData = [];
      }
    });
  });

  const checkedOrNot = (item: IFireName) => {
    let result: boolean = false;
    for (const element of itemData) {
      if (item.KeyId === element.FieldId) {
        result = true;
        break;
      }
    }
    return result;
  };

  const checkBoxClick = async (item: IFireName) => {
    const checker = await checkIfExists(item, userId, listId);
    if (checker.status === "data is not empty") {
      // Þegar búið að haka í, þurfum að eyða úr grunninum
      removeLoggerData(userId, listId, item);
    } else {
      addLoggerData(userId, listId, item, userDisplayName, boardName);
    }
  };

  const deleteItem = (item: IFireName) => {
    removeLoggerField(userId, listId, item);
    removeLoggerData(userId, listId, item);
  };

  const edit = (item: IFireName) => {
    editModalOpen = !editModalOpen;
    currentObject = item;
  };
</script>

<ul class="list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg">
  {#each items as item}
    <div class="text-gray-700 text-center mt-2">
      <div class="flex justify-between mb-2">
        <div class="pr-5 pt-2">
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-blue-500"
            checked="{checkedOrNot(item)}"
            on:click="{() => checkBoxClick(item)}"
          />
        </div>
        <li
          class="w-full text-left leading-loose cursor-pointer"
          on:click="{() => edit(item)}"
        >
          {item.Name}
        </li>
        <div class="close-btn p-2 pr-8 text-xl cursor-pointer">
          <div class="cursor-pointer z-50">
            <button on:click="{() => deleteItem(item)}">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  {/each}
</ul>

{#if editModalOpen}
  <LoggerEditModal
    listId="{listId}"
    userId="{userId}"
    on:closeModal="{() => (editModalOpen = !editModalOpen)}"
    currentObject="{currentObject}"
  />
{/if}
