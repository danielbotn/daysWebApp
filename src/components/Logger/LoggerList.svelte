<script lang="ts">
  import firebase from "firebase/app";
  import "firebase/database";
  import { onMount } from "svelte";
  import {
    checkIfExists,
    removeLoggerData,
    addLoggerData,
  } from "../../helpers/api/firebase";
  import type { IFireName, IFireMultiDay } from "../../interfaces/IFirebase";

  export let userId: string;
  export let listId: string;
  export let boardName: string;
  export let userDisplayName: string;

  let items: IFireName[] = [];
  let itemData: IFireMultiDay[] = [];

  onMount(async () => {
    console.log('userId', userId);
    console.log('listId', listId);
    let logger = null;
    let loggerData = null;
    let tmpData: IFireMultiDay[] = [];
    const rootRef = firebase.database().ref();
    logger = rootRef.child(`logger/${userId}/${listId}`);
    loggerData = rootRef.child(`loggerData/${userId}/${listId}`);

    logger.on("value", (snap: { val: () => any }) => {
      const loggerObject = snap.val();
      const data: IFireName[] = Object.values(loggerObject);
      const objectKeys = Object.keys(loggerObject);
      data.forEach((item, index) => {
        item["KeyId"] = objectKeys[index];
      });
      items = data;
    });
    loggerData.on("value", (snap: { val: () => any }) => {
      const loggerObject = snap.val();
      const data: IFireName[] = Object.values(loggerObject);
      const objectKeys = Object.keys(loggerObject);
      data.forEach((item, index) => {
        item["KeyId"] = objectKeys[index];
        tmpData.push(Object.values(item)[0]);
      });
      itemData = tmpData;
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
</script>

{#if items.length > 0 && itemData.length > 0}
  <ul class="list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg">
    {#each items as item}
      <li class="flex items-center mb-3">
        <div class="pr-5">
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-blue-500"
            checked="{checkedOrNot(item)}"
            on:click="{() => checkBoxClick(item)}"
          />
        </div>
        {item.Name}
      </li>
    {/each}
  </ul>
{/if}
