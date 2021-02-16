<script lang="ts">
  import Headline from "./Headline.svelte";
  import LoggerForm from "./LoggerForm.svelte";
  import LoggerList from "./LoggerList.svelte";

  import type { IHardcodedStrings } from "../../interfaces/IDatoCms";
  import { hardcodedStrings, displayName } from "../../../store";

  export let boardName: string;
  export let userId: string;
  export let listId: string;

  let datoHardcodedStrings: IHardcodedStrings = null;
  let userDisplayName: string = null;

  hardcodedStrings.subscribe((value: IHardcodedStrings) => {
    if (value !== null) {
      datoHardcodedStrings = value;
    }
  });
  displayName.subscribe((value: string) => {
    if (value !== null) {
      userDisplayName = value;
    }
  });
</script>

<Headline boardName="{boardName}" />

<LoggerForm datoHardcodedStrings="{datoHardcodedStrings}" />

{#if userDisplayName && userId && listId && boardName}
  <LoggerList
    userId="{userId}"
    listId="{listId}"
    boardName="{boardName}"
    userDisplayName="{userDisplayName}"
  />
{/if}
