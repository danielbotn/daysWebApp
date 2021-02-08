<script context="module">
  export async function preload(page, session) {
    const { id } = page.query;
    return { id };
  }
</script>

<script lang="ts">
  import SingleCalendar from "../../components/SingleCalendar/SingleCalendar.svelte";
  import { userID, language } from "../../../store";
  import { getBoardInfo } from "../../helpers/api/firebase";

  export let id: string;
  let uId: string = "";
  let boardName: string = null;
  let lang: string = "";

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

  language.subscribe((value: string) => {
    if (value !== null) {
      lang = value;
    }
  });
</script>

{#if uId && id && boardName}
  <SingleCalendar
    uId="{uId}"
    listId="{id}"
    boardName="{boardName}"
    language="{lang}"
  />
{/if}
