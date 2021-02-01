<script context="module">
  export async function preload(page, session) {
    const { id } = page.query;
    return { id }
  }

</script>

<script lang="ts">
  import SingleCalendar from '../../components/SingleCalendar/SingleCalendar.svelte';
  import { userID } from '../../../store';
  import { getBoardInfo } from '../../helpers/api/firebase';

  export let id: string;
  let uId: string = '';
  let boardName: string = null;

  const setBoardName = async () => {
    if (!boardName) {
      const data = await getBoardInfo(uId, id);
      boardName = data.NameOfList;
    }
  }
 
  userID.subscribe((value: string) => {
    if (value !== null) {
      uId = value;
      setBoardName();
    }
  });
  
</script>

{#if uId && id && boardName}
  <SingleCalendar uId={uId} listId={id} boardName={boardName} />
{/if}