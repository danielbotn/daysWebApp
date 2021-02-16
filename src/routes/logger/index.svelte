<script context="module" lang="ts">
  import type { IPage } from "../../interfaces/IConfig";

  export async function preload(_page: IPage) {
    const { id } = _page.query;
    return { id };
  }
</script>

<script lang="ts">
  import Logger from "../../components/Logger/Logger.svelte";
  import { beforeUpdate } from 'svelte';
  import { userID } from "../../../store";
  import { getBoardInfo } from "../../helpers/api/firebase";
  
  export let id: string;

  let boardName: string = null;
  let uId: string = "";

  beforeUpdate(() => {
    if (id) {
      userID.subscribe((value: string) => {
        if (value !== null) {
          uId = value;
          setBoardName();
        }
      });
    }
	});

  const setBoardName = async () => {
    if (!boardName) {
      const data = await getBoardInfo(uId, id);
      boardName = data.NameOfList;
    }
  };

</script>

<svelte:head>
  <title>{boardName ? boardName : "Logger"}</title>
</svelte:head>

{#if uId && id && boardName}
  <Logger boardName="{boardName}" userId="{uId}" listId="{id}" />
{/if}
