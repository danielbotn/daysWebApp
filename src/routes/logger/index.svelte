<script context="module" lang="ts">
  import type { IPage } from "../../interfaces/IConfig";

  export async function preload(_page: IPage) {
    console.log('_page', _page);
    const { id } = _page.query;
    return { id };
  }
</script>

<script lang="ts">
  import Logger from "../../components/Logger/Logger.svelte";
  import { onMount, beforeUpdate, afterUpdate } from 'svelte';
  import { userID } from "../../../store";
  import { getBoardInfo } from "../../helpers/api/firebase";
  
  export let id: string;

  let boardName: string = null;
  let uId: string = "";

  onMount(() => {
		console.log('on mount, id', id);
	});

  beforeUpdate(() => {
		console.log('before update, id', id);
	});

  afterUpdate(() => {
		console.log('after update, id', id);
	});

  const setBoardName = async () => {
    if (!boardName) {
      console.log('UId-->', uId);
      console.log('iD-->', id);
      const data = await getBoardInfo(uId, id);
      boardName = data.NameOfList;
    }
  };

  userID.subscribe((value: string) => {
    if (value !== null) {
      uId = value;
      setBoardName();
    }
  });
</script>

<svelte:head>
  <title>{boardName ? boardName : "Logger"}</title>
</svelte:head>

{#if uId && id && boardName}
  <Logger boardName="{boardName}" userId="{uId}" listId="{id}" />
{/if}
