<script context="module" lang="ts">
  import type { IPage } from "../../interfaces/IConfig";

  export async function preload(_page: IPage) {
    const { id } = _page.query;
    return { id };
  }
</script>

<script lang="ts">
  import MultipleCalendar from "../../components/MultipleCalendar/MultipleCalendar.svelte";
  import { userID, language } from "../../../store";
  import { getBoardInfo } from "../../helpers/api/firebase";

  export let id: string;

  let lang: string = "";
  let uId: string = "";
  let boardName: string = null;

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

<svelte:head>
  <title>{boardName ? boardName : "Multiple List"}</title>
</svelte:head>

<MultipleCalendar
  listId="{id}"
  language="{lang}"
  uId="{uId}"
  boardName="{boardName}"
/>
