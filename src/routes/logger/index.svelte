<script context="module">
  export function preload(page) {
    const { id } = page.query;
    return { id };
  }
</script>

<script lang="ts">
  import Logger from "../../components/Logger/Logger.svelte";
  import { getBoardInfo } from "../../helpers/api/firebase";
  import { userID } from "../../../store";
  export let id: string;

  let boardName: string = null;
  let uId: string = "";

  const setBoardName = async () => {
    if (!boardName) {
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

{#if uId && id}
  <Logger boardName="{boardName}" userId="{uId}" listId="{id}" />
{/if}
